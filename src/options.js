// Beim Laden die gespeicherte URL anzeigen
document.addEventListener("DOMContentLoaded", async () => {
    const { backendUrl } = await browser.storage.local.get("backendUrl");
    if (backendUrl) {
      document.getElementById("backend-url").value = backendUrl;
    }
  });
  
  // Speichern der URL
  document.getElementById("settings-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const backendUrl = document.getElementById("backend-url").value;
    const status = document.getElementById("status");
  
    // Validierung der URL
    try {
      new URL(backendUrl); // Wirft Fehler, wenn ungültig
      await browser.storage.local.set({ backendUrl });
      status.textContent = "URL erfolgreich gespeichert!";
      status.style.color = "green";
    } catch (error) {
      status.textContent = "Ungültige URL.";
      status.style.color = "red";
    }
  });