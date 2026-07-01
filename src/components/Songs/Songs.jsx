import { useEffect, useState } from "react";
import axios from "axios";

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend-labs.crio.do/songs"
        );
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div style={{ padding: "32px" }}>
      <h2>Songs</h2>

      {songs.length === 0 ? (
        <p>Loading songs...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "20px",
          }}
        >
          {songs.map((song) => (
            <div
              key={song.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <img
                src={song.image}
                alt={song.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "10px" }}>
                <h4>{song.title}</h4>
                <p>{song.artists?.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Songs;