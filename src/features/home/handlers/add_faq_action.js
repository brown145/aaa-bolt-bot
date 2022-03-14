import getView from "../templates/view_faq_add.js";

export default async ({ body, client, ack, logger }) => {
  await ack();
  try {
    const metadata = {};

    await client.views.open({
      trigger_id: body.trigger_id,
      view: getView({ metadata }),
    });
  } catch (error) {
    logger.error(error);
  }
};
