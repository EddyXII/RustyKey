let backendUrl = null;

// Lade die URL beim Start der Erweiterung
browser.runtime.onStartup.addListener(async () => {
  const stored = await browser.storage.local.get("backendUrl");
  backendUrl = stored.backendUrl || null;
});

// Erlaube anderen Skripten, die URL abzufragen
browser.runtime.onMessage.addListener((message) => {
  if (message.type === "GET_BACKEND_URL") {
    return Promise.resolve({ backendUrl });
  }
});

browser.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.type === "GET_PASSWORDS") {
      const { domain } = message;
  
      // Token aus dem Speicher abrufen
      const { token } = await browser.storage.local.get("token");
      if (!token) {
        console.error("Kein Token gefunden. Benutzer ist nicht eingeloggt.");
        return sendResponse({ error: "Nicht eingeloggt" });
      }
  
      // API-Anfrage an das Backend
      try {
        const response = await fetch(`${await getBackendUrl()}/passwords?domain=${encodeURIComponent(domain)}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
  
        if (!response.ok) {
          console.error("Fehler beim Abrufen der Passwörter:", response.statusText);
          return sendResponse({ error: "Fehler beim Abrufen der Passwörter" });
        }
  
        const passwords = await response.json();
        sendResponse({ passwords }); // Erfolgreiche Antwort senden
      } catch (error) {
        console.error("Netzwerkfehler:", error);
        sendResponse({ error: "Netzwerkfehler" });
      }
  
      return true; // Asynchrone Antwort zulassen
    }
  });
  
  // Funktion welche die URL des Backends zurückgibt
  async function getBackendUrl() {
    const { backendUrl } = await browser.storage.local.get("backendUrl");
    if (!backendUrl) {
      throw new Error("Keine Backend-URL konfiguriert.");
    }
    return backendUrl;
  }
  