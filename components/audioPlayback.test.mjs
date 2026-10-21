import assert from "node:assert/strict";
import test from "node:test";
import { nextTrackIndex, resolveAudioSrc } from "./audioPlayback.mjs";

test("resolves root-relative audio paths under the GitHub Pages base path", () => {
  assert.equal(resolveAudioSrc("/music/song.mp3", "/love-days"), "/love-days/music/song.mp3");
});

test("does not add a second base path to an already-prefixed audio path", () => {
  assert.equal(resolveAudioSrc("/love-days/music/song.mp3", "/love-days"), "/love-days/music/song.mp3");
});

test("does not navigate when previous/next is used with a one-track playlist", () => {
  assert.equal(nextTrackIndex(0, 1, 1), null);
  assert.equal(nextTrackIndex(0, 1, -1), null);
});

test("wraps next and previous across a multi-track playlist", () => {
  assert.equal(nextTrackIndex(2, 3, 1), 0);
  assert.equal(nextTrackIndex(0, 3, -1), 2);
});
