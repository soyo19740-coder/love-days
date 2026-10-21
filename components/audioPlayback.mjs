export function resolveAudioSrc(src, basePath = "") {
  const normalizedBasePath = basePath.replace(/\/$/, "");
  if (!normalizedBasePath || !src.startsWith("/") || src.startsWith(`${normalizedBasePath}/`)) {
    return src;
  }
  return `${normalizedBasePath}${src}`;
}

export function nextTrackIndex(currentIndex, trackCount, direction) {
  if (trackCount <= 1) return null;
  return (currentIndex + direction + trackCount) % trackCount;
}
