// content/content.ts
// -----------------------------------------------------------------------------
// ALL of the site's content lives here. To customize the site, edit ONLY this
// file — you never need to touch the components.
//
// This is a reusable template: replace the placeholder names, dates, photos,
// list items and the letter below with your own, and the whole site updates.
// -----------------------------------------------------------------------------

// ----------------------------- Types -----------------------------------------

export interface Couple {
  /** Your name */
  you: string;
  /** Their name */
  them: string;
}

export interface Moment {
  /** ISO date: "YYYY-MM-DD" */
  date: string;
  title: string;
  description: string;
  /** Photo path, relative to /public (optional) */
  photo?: string;
  /** true = anchor milestone, gets visual emphasis on the timeline (shown in pink) */
  anchor?: boolean;
}

export interface Photo {
  /** Path relative to /public, e.g. "/photos/01.jpg" */
  src?: string;
  /** Alt text (accessibility) — describe the photo */
  alt: string;
  /** Handwritten caption (Caveat font) shown under the polaroid */
  caption: string;
}

export interface ThingILove {
  /** Optional emoji to decorate the item */
  emoji?: string;
  text: string;
}

export interface PlaylistTrack {
  /** Track title, exactly as it appears on Spotify */
  title: string;
  /** Artist / band name */
  artist: string;
  /** URI in the form "spotify:track:XXXXXXXXXXXXXXXXXXXXXX" (not the https:// link) */
  uri: string;
}

// ----------------------------- Key dates -------------------------------------
// These two dates drive the "days together" counter and two anchor milestones.

/** When it all began — base for the days-together counter. */
export const START_DATE = "2026-05-08";

/** The day you made it official. */
export const PROPOSAL_DATE = "";

// ----------------------------- Hero ------------------------------------------

export const couple: Couple = {
  you: "玉米饼",
  them: "77",
};

export const hero = {
  /** Short, sweet opening line shown under the names. */
  tagline: "我们的故事，从 2026 年 5 月 8 日开始",
  /** Date shown at the top (usually the start date). */
  displayedDate: START_DATE,
};

// ----------------------------- Timeline --------------------------------------
// Add the moments that matter to you, in chronological order. Anchor moments
// (anchor: true) are highlighted in pink — use them for the big milestones,
// like the day you met or the day you made it official.

export const moments: Moment[] = [
  {
    date: START_DATE,
    title: "故事开始的那天",
    description: "从这一天起，我们开始一起记录属于彼此的日子。",
    anchor: true,
  },
  {
    date: "2026-06-11",
    title: "第一次说想抱抱",
    description: "77 第一次说想抱抱我。",
  },
  {
    date: "2026-06-22",
    title: "第一份礼物",
    description: "我们互相送出了第一份礼物。",
  },
  {
    date: "2026-08-09",
    title: "第一次约会",
    description: "这是我们第一次一起出门约会。",
    anchor: true,
  },
];

// ----------------------------- Gallery ---------------------------------------
// Drop your images into /public/photos/ (e.g. 01.jpg) and reference them below.
// Until you add images, the gallery shows a friendly "your photo here" frame,
// so the layout never breaks while you build it out.

export const photos: Photo[] = Array.from({ length: 6 }, () => ({
  alt: "待添加的回忆照片",
  caption: "[照片稍后添加]",
}));

// ----------------------------- Things I love about you -----------------------
// One short line per reason. Add or remove as many as you like.

export const thingsILove: ThingILove[] = [
  { emoji: "🐣", text: "可爱" },
  { emoji: "🔥", text: "热情" },
  { emoji: "✨", text: "对生活充满活力" },
  { emoji: "🌱", text: "青春" },
];

// ----------------------------- Vinyl playlist --------------------------------
// A hand-curated list, in the same order as your Spotify playlist. The vinyl
// player uses this list to play and navigate between tracks — it does not query
// the Spotify API by name.
//
// To fill it in: on Spotify, click a track's "..." > Share > Copy Song Link.
// Take the ID from the URL (https://open.spotify.com/track/<ID>) and write it
// as "spotify:track:<ID>" (no parameters after the ID). The sample tracks below
// are public songs — replace them with the ones that mean something to you.

export const vinylPlaylist: PlaylistTrack[] = [
  { title: "Stay With Me", artist: "Spotify 链接待补充", uri: "" },
];

// ----------------------------- Date voucher (spin wheels) --------------------
// A sequence of wheels that draw, one by one, how your next date will go.
// Each item becomes a wheel in the listed order; the combined results form the
// final "date voucher", which can be downloaded as a PDF.

export interface DateVoucherStep {
  question: string;
  options: string[];
  /** When set, the wheel always lands on this value (must match one of `options`). */
  fixedResult?: string;
}

export const dateVoucherSteps: DateVoucherStep[] = [
  {
    question: "吃什么？",
    options: ["火锅", "日料", "烧烤", "汉堡", "甜品", "一起决定"],
  },
  { question: "要甜品吗？", options: ["要", "当然要"], fixedResult: "当然要" },
  { question: "喝点什么？", options: ["奶茶", "咖啡", "果汁", "一起决定"] },
  {
    question: "今天的感觉？",
    options: ["慢慢散步", "热闹出门", "小小冒险", "尝试新鲜事"],
  },
  {
    question: "之后做什么？",
    options: ["看电影", "看日落", "吃冰淇淋", "再走一会儿"],
  },
];

// ----------------------------- The letter ------------------------------------
// The site simply renders the text below. Write your own letter here.

export const LETTER = `给 77：

这封情书还在慢慢写。

等我把想说的话，都认真写给你。

玉米饼`;
