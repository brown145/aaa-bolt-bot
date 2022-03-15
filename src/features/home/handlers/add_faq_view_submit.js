import addFAQ from "../../../db/faq/addOne.js";
import home_opened from "./home_opened.js";

export default async ({ ack, body, view, client, logger }) => {
  await ack();

  // Dev Note:
  // const metadata = JSON.parse(view.private_metadata);
  const inputs = view.state.values;

  addFAQ({
    channel: inputs["faq-channel"]["channel-select"]["selected_channel"],
    short_desc: inputs["faq-short_desc"]["plain_text_input-action"]["value"],
    link: inputs["faq-link"]["plain_text_input-action"]["value"],
    slack_user_creator: body.user,
  });

  home_opened({
    event: { user: body.user.id },
    client,
    logger,
  });
};
