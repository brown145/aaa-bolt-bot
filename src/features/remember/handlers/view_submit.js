import getTextForChannel from "../templates/text_remembered_to_channel.js";
import getTextForUser from "../templates/text_remembered_to_user.js";

export default async ({ ack, body, view, client, logger }) => {
  await ack();

  const metadata = JSON.parse(view.private_metadata);
  const inputs = view.state.values;
  const shortDesc = inputs["short-desc"]["plain_text_input"].value;
  const keywords = inputs.keywords.checkboxes["selected_options"].map(
    ({ value }) => value
  );

  // TODO: Save to DB
  // const results = await db.set(user.input, val);
  const results = shortDesc && keywords;

  try {
    await client.chat.postMessage({
      channel: metadata.channel.id,
      thread_ts: metadata.ts,
      text: getTextForChannel({
        success: !!results,
        shortDesc,
        keywords,
      }),
    });

    await client.chat.postMessage({
      channel: body.user.id,
      text: getTextForUser({
        shortDesc,
        keywords,
        permalink: metadata.permalink,
      }),
    });
  } catch (error) {
    logger.error(error);
  }
};
