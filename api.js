import axios from "axios";

export const fetchAnalytics = (channelId) =>
  axios.get(`/api/analytics/channel?channelId=${channelId}`);
