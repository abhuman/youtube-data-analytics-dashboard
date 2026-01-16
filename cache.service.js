const cache = new Map();

export const getCache = (key) => cache.get(key);
export const setCache = (key, value, ttl = 300000) => {
  cache.set(key, value);
  setTimeout(() => cache.delete(key), ttl);
};
