import SongQRCodeCard from "./SongQRCodeCard.tsx";
import SongInfoCard from "./SongInfoCard.tsx";
import { Box } from "@mui/material";
import { Track } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";

type SongCardProps = {
  track: Track;
  resetFlip: boolean;
};

function SongCard({ track, resetFlip }: SongCardProps) {
  const [showSongInfos, setShowSongInfos] = useState<boolean>(false);

  const handleFlipCard = () => {
    setShowSongInfos((prevState) => !prevState);
  };

  useEffect(() => {
    if (resetFlip) {
      setShowSongInfos(false);
    }
  }, [resetFlip]);

  return (
    <Box
      sx={{
        position: "relative",
        width: 280,
        height: 280,
        textAlign: "center",
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
        transform: showSongInfos ? "rotateY(180deg)" : "none",
      }}
    >
      {/* Front Side */}
      <SongQRCodeCard track={track} onClick={handleFlipCard} />

      {/* Back Side */}
      <SongInfoCard track={track} onClick={handleFlipCard} />
    </Box>
  );
}

export default SongCard;
