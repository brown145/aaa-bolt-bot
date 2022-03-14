import home_opened from "./home_opened.js";
import removeMemory from "../../../db/removeMemory.js";

export default async ({ event, body, client, ack, logger }) => {
  await ack();
  try {
    const id = body.actions[0].value;
    removeMemory({ id });

    home_opened({
      event: { user: body.user.id },
      client,
      logger,
    });

    // console.log(client);
  } catch (error) {
    logger.error(error);
  }
};
