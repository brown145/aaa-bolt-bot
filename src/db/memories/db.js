import { JSONFileSync, LowSync } from "lowdb";
const db = new LowSync(new JSONFileSync("store/memories-db.json"));

db.read();
db.data = db.data && db.data.length ? db.data : [];
db.write();

export default db;
