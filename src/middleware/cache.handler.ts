import { CacheManager } from "../utility/cacheManager";

export class CacheHandler {
  static async getOrSetCache<T>(key: string, fetchFunction: () => Promise<T>): Promise<T> {
    const cacheManager = new CacheManager(); 

    if (cacheManager.has(key)) {
      return cacheManager.get(key) as T;
    }

    const data = await fetchFunction();
    cacheManager.set(key, data);
    return data;
  }
}
