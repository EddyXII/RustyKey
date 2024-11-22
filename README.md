# rsPass – Firefox Browser Extension

Die **rsPass** Firefox-Browser-Erweiterung ist ein sicherer Frontend-Client für den Zugriff auf den selbstgehosteten rsPass-Passwort-Manager. Die Erweiterung kommuniziert sicher mit dem Backend über JWT-Authentifizierung und ermöglicht einen einfachen Zugriff auf Ihre Passwörter.

---

## **Funktionen**

- **Passwort-Abruf per API**  
  Zugriff auf Ihre Passwörter über das rsPass-Backend mittels JWT-gesicherter API-Aufrufe.

- **Auto-Fill**  
  Automatisches Ausfüllen von Login-Formularen mit den gespeicherten Zugangsdaten.

- **Passwort-Generator**  
  Generieren Sie starke und zufällige Passwörter direkt in der Erweiterung.

- **Sicherheit**  
  Schutz der Kommunikation und Authentifizierung durch Verwendung von JSON Web Tokens (JWT).

---

## **Voraussetzungen**

1. Ein laufender **rsPass-Backend-Server**.  
   Anleitung zur Installation des Backends finden Sie im [rsPass Backend Repository](https://github.com/username/rspass-backend).

2. **Benutzerkonto und Login-Daten** für das Backend.  
   Ein gültiger JWT wird nach erfolgreicher Authentifizierung vom Backend bereitgestellt.

---

## **Installation**

1. **Erweiterung installieren:**  
   Besuchen Sie den Firefox [Add-ons Store](https://addons.mozilla.org) und installieren Sie die RustyKey-Erweiterung.

2. **Erweiterung konfigurieren:**  
   - Öffnen Sie die RustyKey-Erweiterung in der Browser-Symbolleiste.  
   - Geben Sie die **URL Ihres rsPass-Backends** ein.  
   - Melden Sie sich mit Ihren Backend-Anmeldedaten an.  
     Die Erweiterung speichert den erhaltenen JWT für zukünftige API-Aufrufe.

---

## **Erste Schritte**

1. **Login in der Erweiterung:**  
   Nach der Installation und Konfiguration melden Sie sich in der Erweiterung mit Ihrem rsPass-Konto an.  
   Der JWT wird nach erfolgreichem Login abgerufen und sicher gespeichert.

2. **Passwort abrufen:**  
   Besuchen Sie eine bekannte Login-Seite. Die Erweiterung ruft automatisch die passenden Zugangsdaten über die API ab und füllt die Felder aus.

3. **Passwort generieren:**  
   Öffnen Sie die rsPass-Erweiterung und verwenden Sie die Funktion **Passwort generieren**, um ein neues, sicheres Passwort zu erstellen.

4. **Manuelle Nutzung:**  
   Wenn Auto-Fill nicht verfügbar ist, können Sie Passwörter aus der Erweiterung kopieren.

---

## **JWT-Authentifizierung**

- **Token-Abruf:**  
  Nach der Anmeldung generiert das Backend einen JWT, der für die Authentifizierung bei API-Aufrufen verwendet wird.

- **Token-Erneuerung:**  
  Der JWT wird automatisch erneuert, solange die Erweiterung aktiv ist. Bei Ablauf werden Sie aufgefordert, sich erneut anzumelden.

- **Sicherer Speicher:**  
  Der JWT wird verschlüsselt in der lokalen Browser-Speicherung abgelegt.
