import addMemory from "../../../db/addMemory.js";
import getTextForChannel from "../templates/text_remembered_to_channel.js";
import getTextForUser from "../templates/text_remembered_to_user.js";

export default async ({ ack, body, view, client }) => {
  await ack();

  const metadata = JSON.parse(view.private_metadata);
  const { permalink, channel, ts, referenceText } = metadata;
  const inputs = view.state.values;
  const shortDesc = inputs["short-desc"]["plain_text_input"].value;
  const keywords = inputs.keywords.checkboxes["selected_options"].map(
    ({ value }) => value
  );

  const results = addMemory({
    channel: channel.id,
    keywords,
    permalink,
    reference_text: referenceText,
    short_desc: shortDesc,
    slack_user_creator: body.user.id,
  });

  try {
    await client.chat.postMessage({
      channel: channel.id,
      thread_ts: ts,
      text: getTextForChannel({
        success: !!results,
        shortDesc,
        keywords,
      }),
    });

    await client.chat.postMessage({
      channel: body.user.id,
      text: getTextForUser({
        success: !!results, // TODO: change message on fail
        shortDesc,
        keywords,
        permalink,
      }),
    });
  } catch (error) {
    logger.error(error);
  }
};
