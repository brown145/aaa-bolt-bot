import getAll from "./getAll.js";

const getArrayIntersections = (array1, array2) =>
  array1.filter((value) => array2.includes(value));

const keywordMatchReduce = (keywords) => (acc, mem) => {
  const commonKeywords = getArrayIntersections(keywords, mem.keywords);
  if (commonKeywords.length) {
    acc.push(mem);
  }
  return acc;
};

export default (keywords) => {
  const allItems = getAll();
  const matches = allItems.reduce(keywordMatchReduce(keywords), []);

  if (matches.length) {
    return matches.slice(0, 10);
  }

  return [];
};
