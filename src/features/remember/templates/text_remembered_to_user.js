export default ({ shortDesc, keywords, permalink }) =>
  `${shortDesc}\n${keywords.join(" ")}\n${permalink}`;
