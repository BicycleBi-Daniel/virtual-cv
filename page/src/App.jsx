
import * as React from 'react';
import { Tabs, Tab, Box, Paper, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const appleTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f6fa', // Apple-like light background
      paper: '#fff',
    },
    primary: {
      main: '#1a223f', // Midnight blue
      contrastText: '#fff',
    },
    secondary: {
      main: '#2e3a59', // Slightly lighter midnight blue
    },
    text: {
      primary: '#1a223f',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 16px 0 rgba(26,34,63,0.08)',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#1a223f',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#1a223f',
          fontWeight: 500,
          '&.Mui-selected': {
            color: '#1a223f',
          },
        },
      },
    },
  },
});

const tabLabels = [
  'About Me',
  'Resume/CV',
  'Projects',
  'Skills',
];

function App() {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <ThemeProvider theme={appleTheme}>
      <Box sx={{ minHeight: '100vh', width: '100vw', backgroundColor: 'background.default', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper
          sx={{
            width: { xs: '100%', sm: '95%', md: '90%', lg: '80%' },
            maxWidth: 1400,
            minHeight: '90vh',
            mt: 4,
            mb: 4,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4,
            boxShadow: '0 2px 16px 0 rgba(26,34,63,0.08)',
          }}
          square
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper', boxShadow: '0 2px 8px 0 rgba(26,34,63,0.04)' }}>
            <Typography variant="h3" sx={{ py: 2, color: 'primary.main', textAlign: 'center', fontWeight: 700, letterSpacing: '-0.02em' }}>
              My Virtual CV
            </Typography>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="Portfolio Tabs"
              centered
              sx={{
                '.MuiTab-root': {
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  letterSpacing: 0,
                },
              }}
            >
              {tabLabels.map((label, idx) => (
                <Tab key={label} label={label} />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ flex: 1, p: { xs: 2, sm: 4 }, width: '100%' }}>
            {tab === 0 && <AboutMe />}
            {tab === 1 && <Resume />}
            {tab === 2 && <Projects />}
            {tab === 3 && <Skills />}
          </Box>
          <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2, borderTop: 1, borderColor: 'divider' }}>
            <Contact />
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
