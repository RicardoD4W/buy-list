self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};

  console.log(event);
  console.log(data);

  if (data.title === "updated") return;

  const titleDictionary = {
    "created": "Añadido",
    "deleted": "Borrado",
    "updated": "Modificado",
  };

  const bodyDictionary = {
    "created": `${data.body.uds ?? "1"} de ${data.body.product}`,
    "deleted": `${data.body.product}`,
  };

  const title = titleDictionary[data.title] || "Error";
  const options = {
    body: bodyDictionary[data.title] || "error",
    icon: "/icon/favicon-32x32.png",
    badge: "/icon/favicon-32x32.png",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url = "/";
  const targetWindow = event.clientId ? self.clients.get(event.clientId) : null;

  targetWindow
    ? targetWindow.focus()
    : event.waitUntil(self.clients.openWindow(url));
});
