import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.2:0',
  releaseNotes: {
    en_US: `Safer ETF holdings and small fixes.

- ETF accounts: share counts must be above zero, and purchase dates can't be in the future. The date picker stops at today, and the form won't save until both fields are valid.
- Layout: a few inputs and labels now use the same text spacing as the rest of the app.
- Updates to third-party dependencies.

Existing accounts, settings, and statements carry over automatically.`,
    es_ES: `Posiciones en ETF más seguras y pequeñas correcciones.

- Cuentas de ETF: el número de participaciones debe ser mayor que cero y la fecha de compra no puede ser futura. El selector de fecha se detiene en hoy y el formulario no se guarda hasta que ambos campos sean válidos.
- Diseño: algunos campos y etiquetas ahora usan el mismo espaciado de texto que el resto de la aplicación.
- Actualizaciones de dependencias de terceros.

Las cuentas, los ajustes y los estados de cuenta existentes se conservan automáticamente.`,
    de_DE: `Sicherere ETF-Bestände und kleine Korrekturen.

- ETF-Konten: Die Anzahl der Anteile muss größer als null sein, und Kaufdaten dürfen nicht in der Zukunft liegen. Die Datumsauswahl endet bei heute, und das Formular wird erst gespeichert, wenn beide Felder gültig sind.
- Layout: Einige Eingabefelder und Beschriftungen verwenden jetzt denselben Textabstand wie der Rest der App.
- Updates für Abhängigkeiten von Drittanbietern.

Bestehende Konten, Einstellungen und Kontoauszüge werden automatisch übernommen.`,
    pl_PL: `Bezpieczniejsze pozycje w ETF i drobne poprawki.

- Konta ETF: liczba jednostek musi być większa od zera, a data zakupu nie może być z przyszłości. Wybór daty kończy się na dniu dzisiejszym, a formularz nie zapisze się, dopóki oba pola nie będą poprawne.
- Układ: kilka pól i etykiet używa teraz takich samych odstępów tekstu jak reszta aplikacji.
- Aktualizacje zależności zewnętrznych.

Istniejące konta, ustawienia i wyciągi zostają przeniesione automatycznie.`,
    fr_FR: `Des positions en ETF plus sûres et de petites corrections.

- Comptes ETF : le nombre de parts doit être supérieur à zéro, et la date d'achat ne peut pas être dans le futur. Le sélecteur de date s'arrête à aujourd'hui, et le formulaire ne s'enregistre pas tant que les deux champs ne sont pas valides.
- Mise en page : quelques champs et libellés utilisent désormais le même espacement de texte que le reste de l'application.
- Mises à jour des dépendances tierces.

Les comptes, paramètres et relevés existants sont conservés automatiquement.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
