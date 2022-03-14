import db from "./index.js";

const getArrayIntersections = (array1, array2) =>
  array1.filter((value) => array2.includes(value));

export default (keywords) => {
  try {
    db.read();
    const matchingOnKeyword = db.data.reduce((acc, mem) => {
      const commonKeywords = getArrayIntersections(keywords, mem.keywords);
      if (commonKeywords.length) {
        acc.push(mem);
      }
      return acc;
    }, []);

    if (matchingOnKeyword.length) {
      return matchingOnKeyword.slice(0, 10);
    }

    // TODO: better handle no matching results
    return [db.data[0]];
  } catch (error) {
    return [];
  }
};
