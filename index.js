const path = require("path");
const audios = require("./audios.json");
const images = require("./images.json");

const isAudio = (name) => {
  const audiosExt = new Set(audios);
  return audiosExt.has(path.extname(name).slice(1));
};

const isImage = (name) => {
  const imagesExt = new Set(images);
  return imagesExt.has(path.extname(name).slice(1));
};

module.exports = {
  isAudio,
};
