self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};

  const title = data.title || "Notificación Push";
  const options = {
    body: data.body || "Aquí va el contenido de la notificación",
    icon: "/path/to/icon.png",
    badge: "/path/to/badge.png",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
