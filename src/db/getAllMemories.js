import db from "./index.js";

export default () => {
  try {
    db.read();
    return db.data || [];
  } catch (error) {
    return [];
  }
};
