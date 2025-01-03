import { Track } from "@spotify/web-api-ts-sdk";
import { useState, useEffect } from "react";
import * as QRCode from 'qrcode';

type SongCardQRCodeProps = {
    track: Track
}

function SongCardQRCode({ track }: SongCardQRCodeProps) {
    const [qrCode, setQrCode] = useState<string>("");

    const generateSessionPDFQrCode = async (data: string): Promise<string> => {
        return QRCode.toDataURL(data, {
            errorCorrectionLevel: "H",
        });
    };

    useEffect(() => {
        const loadQrCode = async () => {
            const qrCodeUrl = await generateSessionPDFQrCode(`spotify:track:${track.id}`);
            setQrCode(qrCodeUrl);
        };
        loadQrCode();
    }, [track.id]);

    return (
        <div>
            {qrCode ? (
                <img
                    src={qrCode}
                    alt="QR Code"
                    style={{ width: '4cm', margin: '0 auto' }}
                />
            ) : (
                <p>Loading QR Code...</p>
            )}
        </div>
    );
}

export default SongCardQRCode