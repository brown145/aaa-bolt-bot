import db from "./index.js";
import { v4 as uuidv4 } from "uuid";

export default () => {
  db.read();
  db.data.push({ id: uuidv4(), mem: "new" });
  db.write();
};
