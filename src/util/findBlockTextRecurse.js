export default (blocks, accumulator = []) => {
  blocks?.reduce((acc, block) => {
    if (block.text) {
      acc.push(block?.text?.text);
    }

    if (block.elements) {
      return findBlockTextRecurse(block.elements, acc);
    }

    return acc;
  }, accumulator);

  return accumulator;
};
