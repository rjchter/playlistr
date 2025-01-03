import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#723cc9', // Kräftiges Lila
            contrastText: '#fff', // Weißer Text
        },
        secondary: {
            main: '#9d89b3', // Blasses Graulila
            contrastText: '#fff', // Weißer Text
        },
        background: {
            default: '#fdf7ff', // Sehr heller Lila-Ton als Hintergrundfarbe
            paper: '#fffade', // Sehr sanftes Gelb für Papier-Hintergrund
        },
        text: {
            primary: '#fff', // Schwarzer Text auf hellem Hintergrund
            secondary: '#723cc9', // Kräftiges Lila für sekundären Text
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h3: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#723cc9', // Kräftiges Lila für die Hauptüberschrift
        },
        h4: {
            fontSize: '2rem',
            fontWeight: 600,
            color: '#9d89b3', // Blasses Graulila für sekundäre Überschrift
        },
        body1: {
            fontSize: '1.125rem',
            color: '#000', // Schwarzer Text für normalen Text
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8, // Abgerundete Ecken
                },
            },
        },
    },
});

export default theme;