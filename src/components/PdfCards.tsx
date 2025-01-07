import {
  PDFViewer,
  View,
  Page as PDFPage,
  Text,
  Image,
  Document,
} from "@react-pdf/renderer";
import { PlaylistedTrack, Track } from "@spotify/web-api-ts-sdk";
import dayjs from "dayjs";
import * as QRCode from "qrcode";

type PdfCardsProps = {
  playlistItems: PlaylistedTrack<Track>[];
  name: string;
};

function PdfCards({ playlistItems, name }: PdfCardsProps) {
  const arrayChunks = (array: PlaylistedTrack<Track>[], chunkSize: number) =>
    Array(Math.ceil(array.length / chunkSize))
      .fill(null)
      .map((_, index) => index * chunkSize)
      .map((begin) => array.slice(begin, begin + chunkSize));

  const generateSessionPDFQrCode = async (data: string): Promise<string> => {
    return QRCode.toDataURL(data, {
      errorCorrectionLevel: "H",
    });
  };

  return (
    <PDFViewer
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <Document>
        {arrayChunks(playlistItems, 12).map((pageChunks, pageIndex) => (
          <>
            <PDFPage
              size="A4"
              key={`page-${pageIndex}`}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                padding: "30px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "0.1cm",
                }}
              >
                <View
                  style={{
                    width: "0.1cm",
                    height: "0.1cm",
                    borderBottom: "1px solid #000",
                    borderRight: "1px solid #000",
                  }}
                ></View>
                <View
                  style={{
                    width: "6.1cm",
                    borderRight: "1px solid #000",
                  }}
                ></View>
                <View style={{ width: "6.2cm" }}></View>
                <View
                  style={{
                    width: "6.1cm",
                    borderLeft: "1px solid #000",
                  }}
                ></View>
                <View
                  style={{
                    width: "0.1cm",
                    height: "0.1cm",
                    borderBottom: "1px solid #000",
                    borderLeft: "1px solid #000",
                  }}
                ></View>
              </View>
              {arrayChunks(pageChunks, 3).map((rowChunk, rowIndex) => (
                <View>
                  <View
                    key={`row-${rowIndex}`}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {rowChunk.map((item) => (
                      <View
                        key={item.track.id}
                        style={{
                          //border: '1px solid #000',
                          width: "6.2cm",
                          height: "6.2cm",
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: "0.5cm",
                          }}
                        >
                          {item.track.name}
                        </Text>
                        <Text
                          style={{
                            fontWeight: 900,
                            fontSize: "1.5cm",
                            marginTop: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          {dayjs(item.track.album.release_date).format("YYYY")}
                        </Text>
                        <Text
                          style={{
                            fontSize: "0.5cm",
                          }}
                        >
                          {item.track.artists
                            .map((artist) => artist.name)
                            .join(", ")}
                        </Text>
                        {name && (
                          <Text
                            style={{
                              fontSize: "0.2cm",
                              marginTop: "20px",
                            }}
                          >
                            {name}
                          </Text>
                        )}
                      </View>
                    ))}
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: "0.1cm",
                    }}
                  >
                    <View
                      style={{
                        width: "0.1cm",
                        height: "0.1cm",
                        borderBottom: "1px solid #000",
                      }}
                    ></View>
                    <View
                      style={{
                        width: "6.1cm",
                      }}
                    ></View>
                    <View style={{ width: "6.2cm" }}></View>
                    <View
                      style={{
                        width: "6.1cm",
                      }}
                    ></View>
                    <View
                      style={{
                        width: "0.1cm",
                        height: "0.1cm",
                        borderBottom: "1px solid #000",
                      }}
                    ></View>
                  </View>
                </View>
              ))}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "0.1cm",
                }}
              >
                <View
                  style={{
                    width: "0.1cm",
                    height: "0.1cm",
                    borderRight: "1px solid #000",
                  }}
                ></View>
                <View
                  style={{
                    width: "6.1cm",
                    borderRight: "1px solid #000",
                  }}
                ></View>
                <View style={{ width: "6.2cm" }}></View>
                <View
                  style={{
                    width: "6.1cm",
                    borderLeft: "1px solid #000",
                  }}
                ></View>
                <View
                  style={{
                    width: "0.1cm",
                    height: "0.1cm",
                    borderLeft: "1px solid #000",
                  }}
                ></View>
              </View>
            </PDFPage>
            <PDFPage
              size="A4"
              key={`page-${pageIndex}`}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                padding: "30px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "0.1cm",
                }}
              >
                <View
                  style={{
                    width: "0.1cm",
                    height: "0.1cm",
                    borderBottom: "1px solid #000",
                    borderRight: "1px solid #000",
                  }}
                ></View>
                <View
                  style={{
                    width: "6.1cm",
                    borderRight: "1px solid #000",
                  }}
                ></View>
                <View style={{ width: "6.2cm" }}></View>
                <View
                  style={{
                    width: "6.1cm",
                    borderLeft: "1px solid #000",
                  }}
                ></View>
                <View
                  style={{
                    width: "0.1cm",
                    height: "0.1cm",
                    borderBottom: "1px solid #000",
                    borderLeft: "1px solid #000",
                  }}
                ></View>
              </View>
              {arrayChunks(pageChunks, 3).map((rowChunk, rowIndex) => (
                <View>
                  <View
                    key={`row-${rowIndex}`}
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                    }}
                  >
                    {rowChunk.map((item) => (
                      <View
                        key={item.track.id}
                        style={{
                          //border: '1px solid #000',
                          width: "6.2cm",
                          height: "6.2cm",
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          padding: "10px",
                        }}
                      >
                        <Image
                          src={generateSessionPDFQrCode(
                            `spotify:track:${item.track.id}`
                          )}
                          style={{ width: "4cm", margin: "0 auto" }}
                        />
                      </View>
                    ))}
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      height: "0.1cm",
                    }}
                  >
                    <View
                      style={{
                        width: "0.1cm",
                        height: "0.1cm",
                        borderBottom: "1px solid #000",
                      }}
                    ></View>
                    <View
                      style={{
                        width: "6.1cm",
                      }}
                    ></View>
                    <View style={{ width: "6.2cm" }}></View>
                    <View
                      style={{
                        width: "6.1cm",
                      }}
                    ></View>
                    <View
                      style={{
                        width: "0.1cm",
                        height: "0.1cm",
                        borderBottom: "1px solid #000",
                      }}
                    ></View>
                  </View>
                </View>
              ))}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: "0.1cm",
                }}
              >
                <View
                  style={{
                    width: "0.1cm",
                    height: "0.1cm",
                    borderRight: "1px solid #000",
                  }}
                ></View>
                <View
                  style={{
                    width: "6.1cm",
                    borderRight: "1px solid #000",
                  }}
                ></View>
                <View style={{ width: "6.2cm" }}></View>
                <View
                  style={{
                    width: "6.1cm",
                    borderLeft: "1px solid #000",
                  }}
                ></View>
                <View
                  style={{
                    width: "0.1cm",
                    height: "0.1cm",
                    borderLeft: "1px solid #000",
                  }}
                ></View>
              </View>
            </PDFPage>
          </>
        ))}
      </Document>
    </PDFViewer>
  );
}

export default PdfCards;
