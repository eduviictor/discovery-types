import path from 'path';
import audios from './formats/audios.json';
import images from './formats/images.json';
import compresseds from './formats/compresseds.json';
import executables from './formats/executables.json';
import fonts from './formats/fonts.json';
import videos from './formats/videos.json';
import docs from './formats/docs.json';

export interface VerifyInterface {
  type: string;
  ext: string;
}

export type Name = string;

export const isAudio = (name: Name): boolean => {
  const audiosExt = new Set(audios);
  return audiosExt.has(path.extname(name).slice(1));
};

export const isImage = (name: Name): boolean => {
  const imagesExt = new Set(images);
  return imagesExt.has(path.extname(name).slice(1));
};

export const isCompressed = (name: Name): boolean => {
  const compressedsExt = new Set(compresseds);
  return compressedsExt.has(path.extname(name).slice(1));
};

export const isExecutable = (name: Name): boolean => {
  const executablesExt = new Set(executables);
  return executablesExt.has(path.extname(name).slice(1));
};

export const isFont = (name: Name): boolean => {
  const fontsExt = new Set(fonts);
  return fontsExt.has(path.extname(name).slice(1));
};

export const isVideo = (name: Name): boolean => {
  const videosExt = new Set(videos);
  return videosExt.has(path.extname(name).slice(1));
};

export const isDocument = (name: Name): boolean => {
  const docsExt = new Set(docs);
  return docsExt.has(path.extname(name).slice(1));
};

export const verify = (name: Name): VerifyInterface => {
  // Verify if file is a image
  const image = isImage(name);
  if (image) {
    return {
      type: 'image',
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a audio
  const audio = isAudio(name);
  if (audio) {
    return {
      type: 'audio',
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a compressed file
  const compressed = isCompressed(name);
  if (compressed) {
    return {
      type: 'compressed',
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a executable file
  const executable = isExecutable(name);
  if (executable) {
    return {
      type: 'executable',
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a font
  const font = isFont(name);
  if (font) {
    return {
      type: 'font',
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a video
  const video = isVideo(name);
  if (video) {
    return {
      type: 'video',
      ext: path.extname(name).slice(1),
    };
  }

  // Verify if file is a document
  const document = isDocument(name);
  if (document) {
    return {
      type: 'document',
      ext: path.extname(name).slice(1),
    };
  }

  return {
    type: 'undefined',
    ext: 'undefined',
  };
};
