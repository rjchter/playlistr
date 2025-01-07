import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router";
import { PlaylistedTrack, Track } from "@spotify/web-api-ts-sdk";
import SongCard from "./SongCard.tsx";

function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const playlistItems: PlaylistedTrack<Track>[] = location.state?.playlistItems;
  const playlistCategory: string = location.state?.category;
  const [card, setCard] = useState<PlaylistedTrack<Track>>();
  const [deck, setDeck] = useState<PlaylistedTrack<Track>[]>([
    ...playlistItems,
  ]);
  const [resetFlip, setResetFlip] = useState<boolean>(false);
  // const [isDrawing, setIsDrawing] = useState<boolean>(false);

  if (!playlistItems || playlistItems.length === 0) {
    navigate("/game");
    return null;
  }

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];

    // setIsDrawing(true);
    setResetFlip(true);

    setTimeout(() => {
      setDeck(deck.filter((_, index) => index !== randomIndex));
      setCard(card);
      setResetFlip(false);
      // setIsDrawing(false);
    }, 300);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2.5}
    >
      <Typography variant={"h4"} color={"primary.main"}>
        Du spielst gerade "{playlistCategory}"
      </Typography>
      <Box>
        {deck.length === 0 ? (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography>Keine Karten mehr im Deck!</Typography>
            <Button component={Link} to={"/game"}>
              Zurück zur Übersicht
            </Button>
          </Box>
        ) : (
          <Button variant="contained" onClick={drawCard}>
            Karte vom Stapel ziehen
          </Button>
        )}
      </Box>
      {card && <SongCard track={card.track} resetFlip={resetFlip} />}
    </Box>
  );
}

export default Game;
