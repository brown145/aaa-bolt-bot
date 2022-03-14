import db from "./db.js";
import { v4 as uuidv4 } from "uuid";
import defaultObject from "./defaultObject.json" assert { type: "json" };

export default (saveObject) => {
  if (!saveObject || !saveObject.link || !saveObject.slack_user_creator) {
    return false;
  }

  try {
    db.read();

    const existingMemory = db.data.find((m) => m.link === saveObject.link);

    if (existingMemory) {
      return false;
    }

    const newObject = {
      ...defaultObject,
      ...saveObject,
      id: uuidv4(),
    };

    db.data.push(newObject);

    db.write();

    return newObject;
  } catch (e) {
    return false;
  }
};
