export default async (client, channel, ts) => {
  const { messages } = await client.conversations.replies({
    channel: channel.id,
    ts: ts,
  });

  return messages[0];
};
