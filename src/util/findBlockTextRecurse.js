const findBlockTextRecurse = (blocks, accumulator = []) => {
  blocks?.reduce((acc, block) => {
    if (block.text) {
      acc.push(block?.text);
    }

    if (block.elements) {
      return findBlockTextRecurse(block.elements, acc);
    }

    return acc;
  }, accumulator);

  return accumulator;
};

export default findBlockTextRecurse;
