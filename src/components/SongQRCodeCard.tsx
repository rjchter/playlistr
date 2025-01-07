import SongCardQRCode from "./SongCardQRCode.tsx";
import { Card, IconButton } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import { Track } from "@spotify/web-api-ts-sdk";

type SongQRCodeCardProps = {
  track: Track;
  onClick: () => void;
};

function SongQRCodeCard({ track, onClick }: SongQRCodeCardProps) {
  return (
    <Card
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
      }}
    >
      <SongCardQRCode track={track} />
      <IconButton
        onClick={onClick}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
      >
        <LoopIcon />
      </IconButton>
    </Card>
  );
}

export default SongQRCodeCard;
