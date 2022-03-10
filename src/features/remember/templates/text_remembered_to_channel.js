export default ({ success, shortDesc, keywords }) =>
  success
    ? `Seems interesting. I will remember "${shortDesc}" with keywords: "${keywords.join(
        " "
      )}" so that I can help someone else with a similar question.`
    : "Seems interesting; but I was not able to save this to my memory banks right now.";
