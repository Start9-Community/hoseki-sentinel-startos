import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.0:0',
  releaseNotes: {
    en_US: `A redesigned PIN and new success screens.

- PIN: the lock, setup and Forgot PIN screens now match the introduction, and unlocking is faster. Resetting your PIN keeps your accounts and history as they are.
- Adding accounts: every connection now ends on a success screen showing the device or app, its balance and whether it's verified.
- Desktop: before you add your first account, choose Blockstream's public server, with the option to connect through Tor, or your own Electrum server.
- Statements: where the app explains them, they're now called proof-of-ownership statements.
- Safety: Control Center only watches your wallets, so it now refuses wallets that include a private key. If an earlier import saved one, it's replaced with the matching public key when you update.
- Updates to third-party dependencies.

Existing accounts, settings, and statements carry over automatically.`,
    es_ES: `Un PIN rediseñado y nuevas pantallas de confirmación.

- PIN: las pantallas de bloqueo, configuración y ¿Olvidaste tu PIN? ahora coinciden con la introducción, y el desbloqueo es más rápido. Restablecer tu PIN mantiene tus cuentas e historial tal como están.
- Añadir cuentas: cada conexión termina ahora en una pantalla de confirmación que muestra el dispositivo o la app, su saldo y si está verificada.
- Escritorio: antes de añadir tu primera cuenta, elige el servidor público de Blockstream, con la opción de conectarte a través de Tor, o tu propio servidor Electrum.
- Estados de cuenta: donde la app los explica, ahora se llaman estados de cuenta de prueba de propiedad.
- Seguridad: Control Center solo observa tus monederos, así que ahora rechaza los monederos que incluyen una clave privada. Si una importación anterior guardó una, se sustituye por la clave pública correspondiente al actualizar.
- Actualizaciones de dependencias de terceros.

Las cuentas, los ajustes y los estados de cuenta existentes se conservan automáticamente.`,
    de_DE: `Eine neu gestaltete PIN und neue Erfolgsbildschirme.

- PIN: Die Bildschirme zum Sperren, Einrichten und für „PIN vergessen“ passen jetzt zur Einführung, und das Entsperren geht schneller. Beim Zurücksetzen der PIN bleiben deine Konten und deine Historie unverändert.
- Konten hinzufügen: Jede Verbindung endet jetzt auf einem Erfolgsbildschirm, der das Gerät oder die App, den Saldo und den Verifizierungsstatus zeigt.
- Desktop: Bevor du dein erstes Konto hinzufügst, wählst du den öffentlichen Server von Blockstream, optional über Tor, oder deinen eigenen Electrum-Server.
- Kontoauszüge: Wo die App sie erklärt, heißen sie jetzt Kontoauszüge zum Eigentumsnachweis.
- Sicherheit: Control Center beobachtet deine Wallets nur und lehnt daher jetzt Wallets ab, die einen privaten Schlüssel enthalten. Hat ein früherer Import einen gespeichert, wird er beim Update durch den passenden öffentlichen Schlüssel ersetzt.
- Updates für Abhängigkeiten von Drittanbietern.

Bestehende Konten, Einstellungen und Kontoauszüge werden automatisch übernommen.`,
    pl_PL: `Przeprojektowany PIN i nowe ekrany potwierdzenia.

- PIN: ekrany blokady, konfiguracji i „Nie pamiętasz PIN-u?” pasują teraz do wprowadzenia, a odblokowanie jest szybsze. Zresetowanie PIN-u pozostawia Twoje konta i historię bez zmian.
- Dodawanie kont: każde połączenie kończy się teraz ekranem potwierdzenia, który pokazuje urządzenie lub aplikację, saldo i to, czy konto jest zweryfikowane.
- Wersja na komputer: zanim dodasz pierwsze konto, wybierz publiczny serwer Blockstream, z opcją połączenia przez Tor, albo własny serwer Electrum.
- Wyciągi: tam, gdzie aplikacja je wyjaśnia, nazywają się teraz wyciągami potwierdzającymi własność.
- Bezpieczeństwo: Control Center tylko obserwuje Twoje portfele, więc odrzuca teraz portfele zawierające klucz prywatny. Jeśli wcześniejszy import zapisał taki klucz, przy aktualizacji zostanie on zastąpiony odpowiadającym mu kluczem publicznym.
- Aktualizacje zależności zewnętrznych.

Istniejące konta, ustawienia i wyciągi zostają przeniesione automatycznie.`,
    fr_FR: `Un code PIN repensé et de nouveaux écrans de confirmation.

- Code PIN : les écrans de verrouillage, de configuration et « Code PIN oublié » sont désormais assortis à l'introduction, et le déverrouillage est plus rapide. Réinitialiser votre code PIN laisse vos comptes et votre historique tels quels.
- Ajout de comptes : chaque connexion se termine désormais sur un écran de confirmation qui montre l'appareil ou l'app, son solde et s'il est vérifié.
- Ordinateur : avant d'ajouter votre premier compte, choisissez le serveur public de Blockstream, avec la possibilité de vous connecter via Tor, ou votre propre serveur Electrum.
- Relevés : là où l'app les explique, ils s'appellent désormais relevés de preuve de propriété.
- Sécurité : Control Center ne fait que suivre vos portefeuilles ; il refuse donc désormais les portefeuilles qui contiennent une clé privée. Si une importation antérieure en a enregistré une, elle est remplacée par la clé publique correspondante lors de la mise à jour.
- Mises à jour des dépendances tierces.

Les comptes, paramètres et relevés existants sont conservés automatiquement.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
