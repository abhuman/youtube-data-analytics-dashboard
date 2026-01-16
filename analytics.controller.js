import { fetchChannelStats } from "../services/youtube.service.js";

export const getChannelAnalytics = async (req, res, next) => {
  try {
    const { channelId } = req.query;
    const data = await fetchChannelStats(channelId);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
