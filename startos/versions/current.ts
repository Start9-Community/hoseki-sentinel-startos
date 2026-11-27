import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.3:0',
  releaseNotes: {
    en_US: `Newer Coinbase keys, safer account changes, and steadier refreshes.

- Exchanges: Coinbase's current API keys now connect, even when pasted with stray quotes or line breaks. If a key stops working, Control Center asks you to reconnect, and one slow exchange no longer holds up every other balance.
- Adding wallets: when you paste a plain xpub, you now pick its address type instead of getting Legacy by default, and Control Center shows the balance for each type before you save.
- Accounts: removing an exchange or ETF account now asks you to confirm first. Manual transactions can no longer leave a balance wrong or below zero.
- Portfolio: account history loads faster, charts stay on screen when you switch accounts, and pages recover on their own after a connection problem.
- Privacy and fixes: wallet and Bitcoin images now ship with the app instead of loading from Hoseki's servers. Also small fixes to dollar rounding, account names, error messages and screen reader labels, plus updates to third-party dependencies.

Existing accounts, settings, and statements carry over automatically.`,
    es_ES: `Claves de Coinbase más recientes, cambios de cuenta más seguros y actualizaciones más estables.

- Exchanges: las claves API actuales de Coinbase ahora se conectan, incluso cuando se pegan con comillas o saltos de línea de más. Si una clave deja de funcionar, Control Center pide que se vuelva a conectar, y un exchange lento ya no retrasa el resto de los saldos.
- Añadir carteras: al pegar un xpub simple, ahora se elige su tipo de dirección en lugar de obtener Legacy de forma predeterminada, y Control Center muestra el saldo de cada tipo antes de guardar.
- Cuentas: al eliminar una cuenta de exchange o de ETF, ahora se pide confirmación primero. Las transacciones manuales ya no pueden dejar un saldo incorrecto o por debajo de cero.
- Portfolio: el historial de cuentas carga más rápido, los gráficos permanecen en pantalla al cambiar de cuenta y las páginas se recuperan solas después de un problema de conexión.
- Privacidad y correcciones: las imágenes de carteras y de Bitcoin ahora se incluyen con la aplicación en lugar de cargarse desde los servidores de Hoseki. También pequeñas correcciones en el redondeo de dólares, los nombres de cuenta, los mensajes de error y las etiquetas del lector de pantalla, además de actualizaciones de dependencias de terceros.

Las cuentas, los ajustes y los estados de cuenta existentes se conservan automáticamente.`,
    de_DE: `Aktuellere Coinbase-Schlüssel, sicherere Kontoänderungen und stabilere Aktualisierungen.

- Börsen: Die aktuellen API-Schlüssel von Coinbase lassen sich jetzt verbinden, auch wenn sie mit überzähligen Anführungszeichen oder Zeilenumbrüchen eingefügt werden. Wenn ein Schlüssel nicht mehr funktioniert, fordert Control Center zur erneuten Verbindung auf, und eine langsame Börse hält die anderen Salden nicht mehr auf.
- Wallets hinzufügen: Beim Einfügen eines einfachen xpub wird jetzt der Adresstyp gewählt, statt standardmäßig Legacy zu erhalten, und Control Center zeigt den Saldo für jeden Typ an, bevor gespeichert wird.
- Konten: Das Entfernen eines Börsen- oder ETF-Kontos erfordert jetzt zuerst eine Bestätigung. Manuelle Transaktionen können einen Saldo nicht mehr falsch oder unter null hinterlassen.
- Portfolio: Der Kontenverlauf lädt schneller, Diagramme bleiben beim Wechseln der Konten sichtbar, und Seiten stellen sich nach einem Verbindungsproblem selbst wieder her.
- Datenschutz und Korrekturen: Wallet- und Bitcoin-Bilder werden jetzt mit der App ausgeliefert, statt von den Servern von Hoseki geladen zu werden. Außerdem kleine Korrekturen bei der Dollarrundung, den Kontonamen, den Fehlermeldungen und den Labels für Bildschirmleseprogramme sowie Updates für Abhängigkeiten von Drittanbietern.

Bestehende Konten, Einstellungen und Kontoauszüge werden automatisch übernommen.`,
    pl_PL: `Nowsze klucze Coinbase, bezpieczniejsze zmiany kont i stabilniejsze odświeżanie.

- Giełdy: aktualne klucze API Coinbase teraz się łączą, nawet gdy zostaną wklejone z dodatkowymi cudzysłowami lub podziałami wierszy. Jeśli klucz przestanie działać, Control Center poprosi o ponowne połączenie, a jedna wolna giełda nie wstrzymuje już pozostałych sald.
- Dodawanie portfeli: po wklejeniu zwykłego xpub wybiera się teraz typ adresu zamiast domyślnego Legacy, a Control Center pokazuje saldo dla każdego typu przed zapisaniem.
- Konta: usunięcie konta giełdowego lub ETF wymaga teraz najpierw potwierdzenia. Transakcje ręczne nie mogą już zostawić salda błędnego ani poniżej zera.
- Portfolio: historia kont ładuje się szybciej, wykresy zostają na ekranie przy przełączaniu kont, a strony same się przywracają po problemie z połączeniem.
- Prywatność i poprawki: obrazy portfeli i Bitcoina są teraz dostarczane z aplikacją zamiast być ładowane z serwerów Hoseki. Ponadto drobne poprawki zaokrąglania dolarów, nazw kont, komunikatów o błędach i etykiet czytnika ekranu oraz aktualizacje zależności zewnętrznych.

Istniejące konta, ustawienia i wyciągi zostają przeniesione automatycznie.`,
    fr_FR: `Des clés Coinbase plus récentes, des modifications de compte plus sûres et des actualisations plus stables.

- Exchanges : les clés API actuelles de Coinbase se connectent désormais, même lorsqu'elles sont collées avec des guillemets ou des sauts de ligne en trop. Si une clé cesse de fonctionner, Control Center demande de se reconnecter, et un exchange lent ne retarde plus tous les autres soldes.
- Ajout de portefeuilles : lorsque vous collez un simple xpub, vous choisissez désormais son type d'adresse au lieu d'obtenir Legacy par défaut, et Control Center affiche le solde de chaque type avant l'enregistrement.
- Comptes : la suppression d'un compte d'exchange ou d'ETF demande désormais une confirmation d'abord. Les transactions manuelles ne peuvent plus laisser un solde incorrect ou inférieur à zéro.
- Portfolio : l'historique des comptes se charge plus rapidement, les graphiques restent à l'écran lors du changement de compte, et les pages se rétablissent d'elles-mêmes après un problème de connexion.
- Confidentialité et corrections : les images de portefeuilles et de Bitcoin sont désormais fournies avec l'application au lieu d'être chargées depuis les serveurs de Hoseki. Également de petites corrections sur l'arrondi des dollars, les noms de compte, les messages d'erreur et les libellés du lecteur d'écran, ainsi que des mises à jour des dépendances tierces.

Les comptes, paramètres et relevés existants sont conservés automatiquement.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
