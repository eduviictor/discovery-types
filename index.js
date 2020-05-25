const path = require("path");
const audios = require("./audios.json");

const isAudio = (name) => {
  const audiosExt = new Set(audios);
  return audiosExt.has(path.extname(name).slice(1));
};

module.exports = {
  isAudio,
};
