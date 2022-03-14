import home_opened from "./home_opened.js";
import removeMemory from "../../../db/memories/removeOne.js";

export default async ({ body, client, ack, logger }) => {
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
