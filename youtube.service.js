import axios from "axios";
import { YOUTUBE_BASE_URL } from "../config/youtube.config.js";
import { getCache, setCache } from "./cache.service.js";

export const fetchChannelStats = async (channelId) => {
  const cacheKey = `channel-${channelId}`;
  const cached = getCache(cacheKey);
  if (cached) return cached;

  try {
    const res = await axios.get(`${YOUTUBE_BASE_URL}/channels`, {
      params: {
        part: "statistics",
        id: channelId,
        key: process.env.YOUTUBE_API_KEY
      }
    });

    setCache(cacheKey, res.data);
    return res.data;
  } catch (err) {
    throw {
      status: err.response?.status || 500,
      message: err.response?.data?.error?.message || "YouTube API error"
    };
  }
};
