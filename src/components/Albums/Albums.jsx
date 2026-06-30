import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import Card from "../Card/Card";

export default function Albums() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [topRes, newRes] = await Promise.all([
        axios.get("https://qtify-backend.labs.crio.do/albums/top"),
        axios.get("https://qtify-backend.labs.crio.do/albums/new"),
      ]);

      setTopAlbums(topRes.data);
      setNewAlbums(newRes.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Section
        title="Top Albums"
        data={topAlbums}
        renderItem={(item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            count={item.follows}
            countLabel="Follows"
          />
        )}
      />

      <Section
        title="New Albums"
        data={newAlbums}
        renderItem={(item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            count={item.follows}
            countLabel="Follows"
          />
        )}
      />
    </>
  );
}