const path = require("path");
const audios = require("./formats/audios.json");
const images = require("./formats/images.json");
const compresseds = require("./formats/compresseds.json");
const executables = require("./formats/executables.json");
const fonts = require("./formats/fonts.json");
const videos = require("./formats/videos.json");
const docs = require("./formats/docs.json");

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

const isDocument = (name) => {
  const docsExt = new Set(docs);
  return docsExt.has(path.extname(name).slice(1));
};

const verify = (name) => {
  // Verify if file is a image
  const image = isImage(name);
  if (image) {
    return {
      type: "image",
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a audio
  const audio = isAudio(name);
  if (audio) {
    return {
      type: "audio",
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a compressed file
  const compressed = isCompressed(name);
  if (compressed) {
    return {
      type: "compressed",
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a executable file
  const executable = isExecutable(name);
  if (executable) {
    return {
      type: "executable",
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a font
  const font = isFont(name);
  if (font) {
    return {
      type: "font",
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a video
  const video = isVideo(name);
  if (video) {
    return {
      type: "video",
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a document
  const document = isDocument(name);
  if (document) {
    return {
      type: "document",
      ext: path.extname(name).slice(1),
    };
  }
};

module.exports = {
  isAudio,
  isImage,
  isCompressed,
  isExecutable,
  isFont,
  isVideo,
  isDocument,
  verify,
};
