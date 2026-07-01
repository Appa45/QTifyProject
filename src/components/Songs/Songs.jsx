import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import Card from "../Card/Card";

const SONGS_API = "https://qtify-backend.labs.crio.do/songs";

export default function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get(SONGS_API);
        setSongs(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSongs();
  }, []);

  return (
    <Section
      title="Songs"
      data={songs}
      showToggle={false}
      renderItem={(song) => (
        <Card key={song.id} data={song} type="song" />
      )}
    />
  );
}