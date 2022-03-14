import getAll from "./getAll.js";

export default (channel) => getAll().filter((item) => item.channel === channel);
