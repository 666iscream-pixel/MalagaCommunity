// Ролики для карусели в блоке соцсетей: первый — заглавный.
// Пережаты в MP4 (H.264 + AAC): 720p для телефонов, 1080p (hd) для компьютеров; обложки — кадр из ролика.
export const videos = Array.from({ length: 11 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { src: `/video/reel-${n}.mp4`, hd: `/video/reel-${n}-hd.mp4`, poster: `/img/reel-${n}.jpg` };
});
