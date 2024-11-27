import { sendSubscriptionToServer } from "../api/api";
const vapid_key = import.meta.env.VITE_VAPID_KEY;

export const subscriptionSW = (user_token: string) => {
  if ("serviceWorker" in navigator && "PushManager" in window) {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        subscribeUserToPush(registration, user_token);
      })
      .catch((error) => {
        console.error("Error al registrar el Service Worker:", error);
      });
  }
};

const subscribeUserToPush = (
  registration: ServiceWorkerRegistration,
  user_token: string
) => {
  console.log(registration);
  const applicationServerKey = urlBase64ToUint8Array(vapid_key);

  registration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey,
    })
    .then((subscription) => {
      sendSubscriptionToServer(subscription, user_token);
    })
    .catch((error) => {
      console.error("Error al suscribir al usuario:", error);
    });
};

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};
