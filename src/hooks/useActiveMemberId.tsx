/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';

const store = new Map<string, number | null>();

export function useActiveMemberId(
  id: string,
  initialState: number | null | (() => number | null)
) {
  // Initialize state either from the store or the initialState
  const [state, setState] = useState<number | null>(() => {
    const storedState = store.get(id);
    return storedState !== undefined
      ? storedState
      : typeof initialState === 'function'
        ? initialState()
        : initialState;
  });

  useEffect(() => {
    // Update the store whenever the state changes
    store.set(id, state);
  }, [state, id]);

  return [state, setState] as const;
}
