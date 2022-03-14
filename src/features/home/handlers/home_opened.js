import getBlocks from "../templates/blocks_home.js";
import getMemories from "../../../db/getAllMemories.js";

export default async ({ event, client, logger }) => {
  try {
    const memories = getMemories();

    await client.views.publish({
      user_id: event.user,
      view: {
        type: "home",
        blocks: getBlocks({ memories }),
      },
    });

    // logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
