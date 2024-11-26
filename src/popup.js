document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("status");
  
    status.textContent = "Anmeldung läuft...";
  
    try {
      // Lade die Backend-URL
      const { backendUrl } = await browser.storage.local.get("backendUrl");
      if (!backendUrl) {
        status.textContent = "Keine Backend-URL konfiguriert. Bitte Einstellungen überprüfen.";
        return;
      }
  
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        await browser.storage.local.set({ token: data.token });
  
        status.textContent = "Anmeldung erfolgreich!";
        status.style.color = "green";
      } else {
        status.textContent = "Anmeldung fehlgeschlagen.";
      }
    } catch (error) {
      console.error("Fehler:", error);
      status.textContent = "Netzwerkfehler.";
    }
  });

  document.getElementById("settings-icon").addEventListener("click", () => {
    browser.runtime.openOptionsPage();
  });

  document.addEventListener("DOMContentLoaded", async () => {
    const status = document.getElementById("status");
  
    try {
      const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
      const response = await browser.runtime.sendMessage({ type: "GET_PASSWORDS", domain: new URL(tab.url).hostname });
  
      if (response.error) {
        status.textContent = response.error;
      } else if (response.passwords && response.passwords.length > 0) {
        const passwordList = document.createElement("ul");
        response.passwords.forEach(password => {
          const item = document.createElement("li");
          item.textContent = `Benutzername: ${password.username}, Passwort: ${password.password}`;
          passwordList.appendChild(item);
        });
        document.body.appendChild(passwordList);
      } else {
        status.textContent = "Keine Passwörter für diese Seite gefunden.";
      }
    } catch (error) {
      console.error("Fehler beim Abrufen der Passwörter:", error);
      status.textContent = "Fehler beim Abrufen der Passwörter.";
    }
  });