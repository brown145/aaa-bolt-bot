import db from "./db.js";

export default () => {
  try {
    db.read();
    return db.data || [];
  } catch (error) {
    return [];
  }
};
