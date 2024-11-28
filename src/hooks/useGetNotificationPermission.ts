import { useEffect } from "react";

export const useGetNotificationPermission = () => {
  useEffect(() => {
    if (Notification.permission === "granted") return;

    Notification.requestPermission().then(async (permission) => {
      if (permission === "granted") {
        navigator.serviceWorker.ready.then((registration) => {
          console.log(registration);
        });
      }
    });
  }, []);
};
