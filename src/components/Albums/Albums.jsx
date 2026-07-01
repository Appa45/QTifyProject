import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import Card from "../Card/Card";

const BASE_URL = "https://qtify-backend.labs.crio.do";

export default function Albums({ title }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const endpoint =
          title === "Top Albums"
            ? `${BASE_URL}/albums/top`
            : `${BASE_URL}/albums/new`;

        const response = await axios.get(endpoint);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [title]);

  return (
    <Section
      title={title}
      data={albums}
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
  );
}