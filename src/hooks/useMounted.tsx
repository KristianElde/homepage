import { useSyncExternalStore } from "react";

export function useMounted() {
  return useSyncExternalStore(
    () => () => {}, // subscribe: no-op, nothing external to listen to
    () => true, // getSnapshot: client
    () => false // getServerSnapshot: server
  );
}