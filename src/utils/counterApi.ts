/**
 * CounterAPI V2 Integration Utility (https://counterapi.dev/)
 */

// Your CounterAPI workspace slug (e.g., from app.counterapi.dev/workspaces/<name>)
export const COUNTER_WORKSPACE = 'alifsakib';
export const COUNTER_API_BASE = 'https://api.counterapi.dev/v2';
export const API_TOKEN = 'ut_fdqP8jnQHwHwbttDtbr4o01wZg0RKSXSD1q5Ajm9';

interface CounterV2Response {
  data?: {
    up_count?: number;
    count?: number;
  };
  count?: number;
  code?: string;
}

/**
 * Fetch current count from CounterAPI V2
 */
export async function getRemoteCount(key: string): Promise<number | null> {
  try {
    const res = await fetch(`${COUNTER_API_BASE}/${COUNTER_WORKSPACE}/${key}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });
    if (!res.ok) return null;
    const data: CounterV2Response = await res.json();
    if (typeof data.data?.count === 'number') return data.data.count;
    if (typeof data.count === 'number') return data.count;
    return null;
  } catch {
    return null;
  }
}

/**
 * Increment count by 1 in CounterAPI V2
 */
export async function incrementRemoteCount(key: string): Promise<number | null> {
  try {
    const res = await fetch(`${COUNTER_API_BASE}/${COUNTER_WORKSPACE}/${key}/up`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });
    if (!res.ok) return null;
    const data: CounterV2Response = await res.json();
    if (typeof data.data?.up_count === 'number') return data.data.up_count;
    if (typeof data.data?.count === 'number') return data.data.count;
    if (typeof data.count === 'number') return data.count;
    return null;
  } catch {
    return null;
  }
}
