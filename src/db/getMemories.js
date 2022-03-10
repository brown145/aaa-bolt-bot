import db from "./index.js";

export default () => {
  db.read();
  console.log(db.data);
};
