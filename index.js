const path = require("path");
const audios = require("./audios.json");
const images = require("./images.json");
const compresseds = require("./compresseds.json");
const executables = require("./executables.json");
const fonts = require("./fonts.json");
const videos = require("./videos.json");

const isAudio = (name) => {
  const audiosExt = new Set(audios);
  return audiosExt.has(path.extname(name).slice(1));
};

const isImage = (name) => {
  const imagesExt = new Set(images);
  return imagesExt.has(path.extname(name).slice(1));
};

const isCompressed = (name) => {
  const compressedsExt = new Set(compresseds);
  return compressedsExt.has(path.extname(name).slice(1));
};

const isExecutable = (name) => {
  const executablesExt = new Set(executables);
  return executablesExt.has(path.extname(name).slice(1));
};

const isFont = (name) => {
  const fontsExt = new Set(fonts);
  return fontsExt.has(path.extname(name).slice(1));
};

const isVideo = (name) => {
  const videosExt = new Set(videos);
  return videosExt.has(path.extname(name).slice(1));
};

module.exports = {
  isAudio,
  isImage,
  isCompressed,
  isExecutable,
  isFont,
  isVideo,
};
