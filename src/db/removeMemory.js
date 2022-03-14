import db from "./index.js";

export default ({ id }) => {
  if (!id) {
    return;
  }

  try {
    db.read();
    db.data = db.data.filter((m) => m.id !== id);
    db.write();

    return db.data;
  } catch (e) {
    return false;
  }
};
