import db from "./db.js";
import { v4 as uuidv4 } from "uuid";
import defaultObject from "./defaultObject.json" assert { type: "json" };

export default (saveObject) => {
  if (
    !saveObject ||
    !saveObject.permalink ||
    !saveObject.slack_user_creator ||
    !saveObject.keywords
  ) {
    return false;
  }

  try {
    db.read();

    const existingMemory = db.data.find(
      (m) => m.permalink === saveObject.permalink
    );

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
