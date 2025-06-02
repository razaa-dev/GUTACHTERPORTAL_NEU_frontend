import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { colors } from '../theme/colors';

const tools = [
  {
    title: 'KFZ-Schadensrechner',
    prompt: 'Funktion:\nDer Rechner erlaubt die schnelle Einschätzung von Reparaturkosten basierend auf markierten Schadenszonen und Fahrzeugdaten.\n\nNutzen für Gutachter:\n• Schnelle Erstbewertung noch vor der Vor-Ort-Besichtigung\n• Hilft bei der Kalkulation des Gutachterhonorars\n• Unterstützt bei der Kommunikation mit Versicherung & Mandant',
    icon: '🛠️',
    img: '/tools/schadensrechner.png',
    soon: true,
  },
  {
    title: 'Dokumentenanalyse (KI-gestützt)',
    prompt: 'Funktion:\nHochgeladene Dokumente (z. B. Gutachten, Formulare) werden automatisch ausgelesen, kategorisiert und analysiert.\n\nNutzen für Gutachter:\n• Spart Zeit bei der manuellen Prüfung\n• Automatische Strukturierung der Inhalte\n• Erkennung fehlender Informationen',
    icon: '📄',
    img: '/tools/dokumentenanalyse.png',
    soon: true,
  },
  {
    title: 'Fallvergleich',
    prompt: 'Funktion:\nKI sucht ähnliche Fälle in der Datenbank und zeigt Vergleichswerte, Ergebnisse und Besonderheiten an.\n\nNutzen für Gutachter:\n• Rechtsvergleich und Tendenzen erkennen\n• Orientierung bei Sonderfällen\n• Verlässliche Entscheidungsbasis für die Fallbewertung',
    icon: '⚖️',
    img: '/tools/fallvergleich.png',
    soon: true,
  },
  {
    title: 'Gutachten-Generator',
    prompt: 'Funktion:\nEin intelligentes Formular mit Auto-Vervollständigung und Vorlagen zur Erstellung eines standardisierten Gutachtens.\n\nNutzen für Gutachter:\n• Zeitersparnis bei der Dokumentenerstellung\n• Automatisch richtlinienkonforme Struktur\n• Reduktion von Fehlern durch validierte Eingaben',
    icon: '📋',
    img: '/tools/gutachtengenerator.png',
    soon: true,
  },
  {
    title: 'Versicherungsrechner',
    prompt: 'Funktion:\nBerechnet mögliche Versicherungsleistungen anhand von Schadensdaten, Fahrzeugtyp, Haftung etc.\n\nNutzen für Gutachter:\n• Unterstützung bei der Schadenshöhe-Einordnung\n• Bessere Kommunikation mit Mandanten\n• Klare Darstellung von Kostenübernahme durch Versicherung',
    icon: '🧮',
    img: '/tools/versicherungsrechner.png',
    soon: true,
  },
  {
    title: 'Terminplaner',
    prompt: 'Funktion:\nÜbersicht und Verwaltung aller Gutachter-Termine. Inklusive Erinnerungen, Synchronisation mit Kalendern, Zeitline.\n\nNutzen für Gutachter:\n• Behalte den Überblick über Fristen und Außentermine\n• Reduziert Versäumnisse\n• Integrierte Planung mit anderen Teammitgliedern',
    icon: '📆',
    img: '/tools/terminplaner.png',
    soon: true,
  },
  {
    title: 'KI-Schadensursachen-Analyse',
    prompt: 'Funktion:\nAnalysiert eingereichte Daten (z. B. Bilder, Texte) und gibt Hinweise zur vermutlichen Schadensursache.\n\nNutzen für Gutachter:\n• Unterstützung bei komplexen oder strittigen Fällen\n• Objektive Einschätzungen als Diskussionsgrundlage\n• Stärkt die Professionalität im Schadensbericht',
    icon: '🤖',
    img: '/tools/ki-schadensursache.png',
    soon: true,
  },
  {
    title: 'Fotoanalyse & Bilderkennung',
    prompt: 'Funktion:\nNutzt KI, um hochgeladene Fahrzeugbilder zu erkennen, Schadenszonen automatisch zu markieren und zu bewerten.\n\nNutzen für Gutachter:\n• Automatisierte Vorarbeit\n• Effizientere Gutachtenerstellung\n• Visuelle Hilfestellung bei der Dokumentation',
    icon: '📷',
    img: '/tools/fotoanalyse.png',
    soon: true,
  },
  {
    title: 'KI-Chatunterstützung für Mandantenkommunikation',
    prompt: 'Funktion:\nEin Bot beantwortet Routinefragen der Mandanten und leitet komplexe Anliegen weiter.\n\nNutzen für Gutachter:\n• Zeitersparnis durch weniger Telefonate\n• Professioneller Kundenservice rund um die Uhr\n• Eskalation nur bei echten Rückfragen nötig',
    icon: '💬',
    img: '/tools/ki-chat.png',
    soon: true,
  },
  {
    title: 'Export-/Import-Assistent',
    prompt: 'Funktion:\nExportiert Falldaten, Dokumente und Rechnungen in verschiedenen Formaten. Import von z. B. Excel-Listen möglich.\n\nNutzen für Gutachter:\n• Schnelle Weitergabe an Versicherungen oder Anwälte\n• Backup- oder Archivierungsfunktion\n• Integration in andere Systeme (z. B. Steuerberater)',
    icon: '🔁',
    img: '/tools/export-import.png',
    soon: true,
  },
  {
    title: 'Einsatzgebiets-Karte / Kartengestützte Verwaltung',
    prompt: 'Funktion:\nKarte mit aktuellen Gutachten und neuen Anfragen, Filter nach PLZ, Region oder Status.\n\nNutzen für Gutachter:\n• Regionale Auftragsplanung optimieren\n• Fahrzeiten reduzieren\n• Neue Anfragen visuell erkennen',
    icon: '📍',
    img: '/tools/karte.png',
    soon: true,
  },
  {
    title: 'KI-Fallauswertung / Performance-Dashboard',
    prompt: 'Funktion:\nAuswertung der eigenen Leistung: z. B. Fallanzahl, Dauer, häufige Fahrzeugtypen, beliebte Regionen.\n\nNutzen für Gutachter:\n• Transparenz über die eigene Arbeit\n• Verbesserung der internen Prozesse\n• Ideal für Wachstumsplanung oder Teamsteuerung',
    icon: '📊',
    img: '/tools/dashboard.png',
    soon: true,
  },
];

export default function Tools() {
  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', px: { xs: 1, sm: 2, md: 3 }, py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: colors.secondary.main, mb: 3 }}>
        Tools (coming soon)
      </Typography>
      <Grid container spacing={3}>
        {tools.map((tool, idx) => {
          // Beschreibung parsen
          const [funktionBlock, nutzenBlock] = tool.prompt.split('Nutzen für Gutachter:');
          const funktionText = funktionBlock?.replace('Funktion:', '').trim();
          const nutzenList = nutzenBlock
            ? nutzenBlock
                .split('\n')
                .map(line => line.trim())
                .filter(line => line.startsWith('•'))
                .map(line => line.replace(/^•\s*/, ''))
            : [];
          return (
            <Grid item xs={12} sm={6} md={4} key={tool.title}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, position: 'relative', minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: '#fff', boxShadow: colors.shadows.md }}>
                {/* Bild/Platzhalter */}
                <Box sx={{ mb: 2, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <Box sx={{ fontSize: 48, mr: 2 }}>{tool.icon}</Box>
                  {/* Platz für Bild, falls vorhanden */}
                  {/* <img src={tool.img} alt={tool.title} style={{ maxHeight: 80, maxWidth: '60%' }} /> */}
                  {tool.soon && (
                    <Box sx={{ position: 'absolute', top: 8, right: 8, bgcolor: colors.primary.main, color: '#fff', px: 1.5, py: 0.5, borderRadius: 2, fontWeight: 700, fontSize: 13, opacity: 0.95 }}>
                      COMING SOON
                    </Box>
                  )}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colors.secondary.main, mb: 1 }}>
                  {tool.title}
                </Typography>
                {/* Funktion */}
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.secondary.main, mt: 1, mb: 0.5 }}>
                  Funktion:
                </Typography>
                <Typography variant="body2" sx={{ color: colors.secondary.light, mb: 1 }}>
                  {funktionText}
                </Typography>
                {/* Nutzen */}
                {nutzenList.length > 0 && (
                  <>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.secondary.main, mt: 1, mb: 0.5 }}>
                      Nutzen für Gutachter:
                    </Typography>
                    <ul style={{ margin: 0, paddingLeft: 18, marginBottom: 8 }}>
                      {nutzenList.map((nutzen, i) => (
                        <li key={i} style={{ color: colors.secondary.light, fontSize: 15, marginBottom: 2 }}>
                          {nutzen}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
} 