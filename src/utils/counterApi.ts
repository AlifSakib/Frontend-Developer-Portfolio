/**
 * CounterAPI V2 Integration Utility (https://counterapi.dev/)
 * Connected to workspace: alif-sakibs-team-5169
 */

export const COUNTER_WORKSPACE =
  import.meta.env.VITE_COUNTER_WORKSPACE || 'alif-sakibs-team-5169';
export const COUNTER_API_BASE = 'https://api.counterapi.dev/v2';
export const PRIMARY_COUNTER =
  import.meta.env.VITE_COUNTER_NAME || 'portfolio-website-stats';

interface CounterV2Response {
  code?: string;
  data?: {
    up_count?: number;
    count?: number;
  };
  count?: number;
}

function resolveCounterSlug(key: string): string {
  if (key === 'views' || key === 'likes' || key === 'shares') {
    return PRIMARY_COUNTER;
  }
  return key;
}

/**
 * Fetch current count from CounterAPI V2
 * Note: Simple GET request without custom headers avoids browser CORS preflight.
 */
export async function getRemoteCount(key: string): Promise<number | null> {
  try {
    const slug = resolveCounterSlug(key);
    const res = await fetch(`${COUNTER_API_BASE}/${COUNTER_WORKSPACE}/${slug}`, {
      method: 'GET',
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

/**
 * Increment count by 1 in CounterAPI V2
 * Note: Simple GET request without custom headers avoids browser CORS preflight.
 */
export async function incrementRemoteCount(key: string): Promise<number | null> {
  try {
    const slug = resolveCounterSlug(key);
    const res = await fetch(`${COUNTER_API_BASE}/${COUNTER_WORKSPACE}/${slug}/up`, {
      method: 'GET',
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
