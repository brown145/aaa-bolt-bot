module.exports = ({ answers, fromUserName }) => {
  const answerBlocks = answers
    .reduce((aBlocks, { text, value }) => {
      aBlocks.push(
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*<${value}|${text.text}>*`,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "plain_text",
              text: "app, approval, process",
              emoji: true,
            },
          ],
        },
        {
          type: "divider",
        }
      );
      return aBlocks;
    }, [])
    .slice(0, -1);

  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `Hey there *<@${fromUserName}>*! I am a bot that helps remember common questions and recall the answers. I think I have seen this question before.\n\n*Review the thread(s) below*:`,
      },
    },
  ].concat(answerBlocks);
};
