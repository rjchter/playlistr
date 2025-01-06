import { Routes, Route, BrowserRouter as Router } from "react-router";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import CardGenerator from "./pages/CardGenerator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainGamePage from "./pages/MainGamePage.tsx";
import Game from "./components/Game.tsx";
import Layout from "./components/Layout.tsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="/create-cards" element={<CardGenerator />} />
              <Route path="/game" element={<MainGamePage />} />
              <Route path="/game/play" element={<Game />}></Route>
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
