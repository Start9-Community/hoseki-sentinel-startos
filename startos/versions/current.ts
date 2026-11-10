import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.4.1:0',
  releaseNotes: {
    en_US: `Clearer errors and security updates.

- Adding accounts: if you paste a private key, Control Center now says so and asks for the public key (xpub) or a watch-only descriptor instead.
- Help: the multisig export guide now opens the Control Center help page.
- Security updates to third-party dependencies.

Existing accounts, settings, and statements carry over automatically.`,
    es_ES: `Errores más claros y actualizaciones de seguridad.

- Añadir cuentas: si pegas una clave privada, Control Center ahora te lo indica y te pide en su lugar la clave pública (xpub) o un descriptor de solo lectura.
- Ayuda: la guía para exportar un monedero multifirma ahora abre la página de ayuda de Control Center.
- Actualizaciones de seguridad de dependencias de terceros.

Las cuentas, los ajustes y los estados de cuenta existentes se conservan automáticamente.`,
    de_DE: `Klarere Fehlermeldungen und Sicherheitsupdates.

- Konten hinzufügen: Wenn du einen privaten Schlüssel einfügst, weist Control Center jetzt darauf hin und bittet stattdessen um den öffentlichen Schlüssel (xpub) oder einen Watch-only-Deskriptor.
- Hilfe: Die Anleitung zum Exportieren einer Multisig-Wallet öffnet jetzt die Hilfeseite von Control Center.
- Sicherheitsupdates für Abhängigkeiten von Drittanbietern.

Bestehende Konten, Einstellungen und Kontoauszüge werden automatisch übernommen.`,
    pl_PL: `Jaśniejsze komunikaty o błędach i aktualizacje bezpieczeństwa.

- Dodawanie kont: jeśli wkleisz klucz prywatny, Control Center teraz to wskaże i poprosi zamiast tego o klucz publiczny (xpub) lub deskryptor tylko do obserwacji.
- Pomoc: przewodnik eksportu portfela multisig otwiera teraz stronę pomocy Control Center.
- Aktualizacje bezpieczeństwa zależności zewnętrznych.

Istniejące konta, ustawienia i wyciągi zostają przeniesione automatycznie.`,
    fr_FR: `Des erreurs plus claires et des mises à jour de sécurité.

- Ajout de comptes : si vous collez une clé privée, Control Center vous le signale désormais et vous demande à la place la clé publique (xpub) ou un descripteur en lecture seule.
- Aide : le guide d'exportation d'un portefeuille multisig ouvre désormais la page d'aide de Control Center.
- Mises à jour de sécurité des dépendances tierces.

Les comptes, paramètres et relevés existants sont conservés automatiquement.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
