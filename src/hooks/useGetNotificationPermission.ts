import { useEffect, useState } from "react";

export const useGetNotificationPermission = () => {
  const [permissionGranted, setPermissionGranted] = useState(null);

  useEffect(() => {
    if (Notification.permission === "granted") {
      setPermissionGranted(true);
      return;
    }

    Notification.requestPermission().then((permission) => {
      setPermissionGranted(permission === "granted");
    });
  }, []);

  return { permissionGranted };
};
