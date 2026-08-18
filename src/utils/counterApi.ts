/**
 * CounterAPI Integration Utility (https://counterapi.dev/)
 * Synchronizes global real-time page views and visitor likes.
 */

const COUNTER_NAMESPACE = 'alifsakib_portfolio';
const COUNTER_API_BASE = 'https://api.counterapi.dev/v1';
const API_TOKEN = 'ut_fdqP8jnQHwHwbttDtbr4o01wZg0RKSXSD1q5Ajm9';

interface CounterResponse {
  count?: number;
  status?: string;
}

/**
 * Fetch current count for a given key without incrementing
 */
export async function getRemoteCount(key: string): Promise<number | null> {
  try {
    const res = await fetch(`${COUNTER_API_BASE}/${COUNTER_NAMESPACE}/${key}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });
    if (!res.ok) return null;
    const data: CounterResponse = await res.json();
    return typeof data.count === 'number' ? data.count : null;
  } catch {
    return null;
  }
}

/**
 * Increment count by 1 and return updated value
 */
export async function incrementRemoteCount(key: string): Promise<number | null> {
  try {
    const res = await fetch(`${COUNTER_API_BASE}/${COUNTER_NAMESPACE}/${key}/up`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
      },
    });
    if (!res.ok) return null;
    const data: CounterResponse = await res.json();
    return typeof data.count === 'number' ? data.count : null;
  } catch {
    return null;
  }
}
