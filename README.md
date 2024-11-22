# RustyKey – Firefox Browser Extension

**RustyKey** ist eine Firefox-Browser-Erweiterung, die als Frontend-Client für den selbstgehosteten Passwort-Manager **rsPass** dient. Die Erweiterung ermöglicht den sicheren Zugriff auf Ihre gespeicherten Passwörter über JWT-Authentifizierung und bietet Funktionen wie automatisches Ausfüllen und Passwort-Generierung.

---

## **Funktionen**

- **Passwort-Abruf über API**  
  Greifen Sie auf Ihre Passwörter im **rsPass-Backend** zu, gesichert durch JSON Web Tokens (JWT).

- **Auto-Fill**  
  Automatisches Ausfüllen von Login-Formularen im Browser.

- **Passwort-Generator**  
  Erstellen Sie starke und zufällige Passwörter direkt in der Erweiterung.

- **Sicherer Zugriff**  
  Kommunikation mit dem Backend erfolgt über HTTPS und JWT-gesicherte API-Aufrufe.

---

## **Voraussetzungen**

1. Ein laufender **rsPass-Backend-Server**.  
   Anleitung zur Installation und Konfiguration finden Sie im [rsPass-Backend-Repository](https://github.com/Letgamer/rsPass).

2. **Benutzerkonto und Login-Daten** für das Backend.  
   Ein gültiger JWT wird nach erfolgreicher Authentifizierung vom Backend bereitgestellt.

---

## **Installation**

1. **Erweiterung installieren:**  
   Besuchen Sie den Firefox [Add-ons Store](https://addons.mozilla.org) und installieren Sie **RustyKey**.

2. **Erweiterung konfigurieren:**  
   - Öffnen Sie die RustyKey-Erweiterung in der Browser-Symbolleiste.  
   - Geben Sie die **URL Ihres rsPass-Backends** ein.  
   - Melden Sie sich mit Ihren Anmeldedaten an, um den JWT zu erhalten.  
   - Speichern Sie die Einstellungen.

---

## **Erste Schritte**

1. **Login in RustyKey:**  
   Nach der Konfiguration melden Sie sich mit Ihrem rsPass-Konto an.  
   RustyKey speichert den erhaltenen JWT sicher und verwendet ihn für API-Aufrufe.

2. **Passwort abrufen:**  
   Besuchen Sie eine bekannte Login-Seite. RustyKey ruft automatisch die passenden Zugangsdaten über die API ab und füllt die Felder aus.

3. **Passwort generieren:**  
   Öffnen Sie die RustyKey-Erweiterung und verwenden Sie die Funktion **Passwort generieren**, um ein neues Passwort zu erstellen.

4. **Manuelle Nutzung:**  
   Wenn Auto-Fill nicht verfügbar ist, können Sie Passwörter aus RustyKey kopieren.

---

## **JWT-Authentifizierung**

- **Token-Abruf:**  
  Nach der Anmeldung generiert das Backend einen JWT, der für die Authentifizierung bei API-Aufrufen verwendet wird.

- **Token-Erneuerung:**  
  RustyKey erneuert den JWT automatisch, solange die Erweiterung aktiv ist. Bei Ablauf werden Sie aufgefordert, sich erneut anzumelden.

- **Sicherer Speicher:**  
  Der JWT wird verschlüsselt in der lokalen Browser-Speicherung abgelegt.
