import findBlockTextRecurse from "../../../util/findBlockTextRecurse.js";
import getFAQs from "../../../db/faq/getByChannel.js";
import getKeywords from "../../../util/getKeywords.js";
import getMemories from "../../../db/memories/getByKeywords.js";
import getNoMoriesBlocks from "../templates/blocks_no_recalled_suggestions.js";
import getParentmostMessage from "../../../util/getParentmostMessage.js";
import getView from "../templates/view_shortcut.js";

export default async ({ shortcut, ack, client, say, logger }) => {
  await ack();

  const { channel, message } = shortcut;
  const ts = message.thread_ts || message.ts;

  const referenceMessage = await getParentmostMessage(client, channel, ts);

  const metadata = {
    ts,
    channel,
    from: message.user,
  };

  const keywordSourceText = referenceMessage.blocks?.length
    ? findBlockTextRecurse(referenceMessage.blocks).join(" ")
    : referenceMessage.text;

  const keywords = getKeywords(keywordSourceText);

  const memories = getMemories(keywords);

  const faqs = getFAQs(metadata.channel.id);

  if (!memories?.length && !faqs?.length) {
    say({
      channel: metadata.channel.id,
      thread_ts: metadata.ts,
      text: "No recalled answers.",
      blocks: getNoMoriesBlocks(),
    });
    return;
  }

  try {
    await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: getView({
        metadata,
        referenceText: referenceMessage.text,
        memories,
        faqs,
      }),
    });

    // logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};
