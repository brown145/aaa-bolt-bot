export default async (client, channel, ts) => {
  const { messages } = await client.conversations.replies({
    channel: channel.id,
    ts: ts,
  });

  console.log("messages", messages[0].text);

  return messages[0];
};
