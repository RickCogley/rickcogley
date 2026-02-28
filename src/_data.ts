// Simple constants
export const cacheBuster = `${new Date().getTime()}`;
export const todaysDateYYYYMMDD = new Date().toLocaleDateString("sv-SE", {
  timeZone: "Asia/Tokyo",
});
export const todaysDateJAJP = `${
  new Date().toLocaleString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
}`;
export const todaysDateENUS = `${
  new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
}`;

// Generic JSON fetcher with error handling
const API_BASE = "https://api.cogley.jp/api";

async function fetchJSON<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      headers: { "Accept": "application/json" },
    });
    if (!response.ok) {
      console.error(`API error ${response.status} for ${path}`);
      return fallback;
    }
    return await response.json() as T;
  } catch (error) {
    console.error(`Failed to fetch ${path}:`, error);
    return fallback;
  }
}

// Fetch pub-cogley API data
export const profile = await fetchJSON<
  { sections: Array<Record<string, unknown>> }
>("/profile", { sections: [] });

export const quotes = await fetchJSON<
  { quotes: Array<{ text: string; source: string }> }
>("/profile/quotes", { quotes: [] });

export const nowData = await fetchJSON<{
  presence: Record<string, unknown>;
  this_week: Record<string, unknown>;
  recent_posts: Array<Record<string, unknown>>;
  currently_reading: Array<Record<string, unknown>>;
  sections: Array<Record<string, unknown>>;
  github_activity: Record<string, unknown>;
}>("/now", {
  presence: {},
  this_week: {},
  recent_posts: [],
  currently_reading: [],
  sections: [],
  github_activity: {},
});

export const stats = await fetchJSON<{
  posts: number;
  articles: number;
  podcasts: number;
  pages: number;
  drafts: number;
}>("/stats", { posts: 0, articles: 0, podcasts: 0, pages: 0, drafts: 0 });

export const posts = await fetchJSON<{
  posts: Array<{
    id: string;
    type: string;
    title: string | null;
    content: string;
    excerpt: string;
    stream: string;
    published_at: string;
  }>;
}>("/posts?status=published&limit=5", { posts: [] });

export const presence = await fetchJSON<{
  status: {
    id: string;
    label: string;
    emoji: string;
    description: string;
  };
  custom_text: string;
  set_at: string;
}>("/presence", {
  status: { id: "", label: "", emoji: "", description: "" },
  custom_text: "",
  set_at: "",
});

// Pick a random quote (seeded by day so it changes daily, not per build)
const dayOfYear = Math.floor(
  (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
    86400000,
);
export const randomQuote = quotes.quotes.length > 0
  ? quotes.quotes[dayOfYear % quotes.quotes.length]
  : { text: "", source: "" };

// Get repo folder size
import { join } from "https://deno.land/std/path/mod.ts";
async function getFolderSize(path: string): Promise<number> {
  let totalSize = 0;

  for await (const entry of Deno.readDir(path)) {
    const entryPath = join(path, entry.name);
    const info = await Deno.stat(entryPath);

    if (info.isFile) {
      totalSize += info.size;
    } else if (info.isDirectory) {
      totalSize += await getFolderSize(entryPath);
    }
  }
  return totalSize;
}
const folderPath = "./";
export const repoSizeLong = await getFolderSize(folderPath);
export const repoSizeKB = Math.trunc(repoSizeLong / 1024);
export const repoSizeMB = Math.trunc(repoSizeLong / 1024 / 1024);
