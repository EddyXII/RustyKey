// Aktuelle Domain ermitteln und an das Hintergrundskript senden
const domain = window.location.hostname; // Beispiel: "example.com"

// Nachricht an das Hintergrundskript senden
browser.runtime.sendMessage({ type: "GET_PASSWORDS", domain });