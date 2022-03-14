import getBlocks from "../templates/blocks_home.js";
import getFAQs from "../../../db/faq/getAll.js";
import getMemories from "../../../db/memories/getAll.js";

export default async ({ event, client, logger }) => {
  try {
    const memories = getMemories();
    const faq = getFAQs();

    await client.views.publish({
      user_id: event.user,
      view: {
        type: "home",
        blocks: getBlocks({ memories, faq }),
      },
    });

    // logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
