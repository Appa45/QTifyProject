import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Albums from "./components/Albums/Albums";
import Songs from "./components/Songs/Songs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Albums title="Top Albums" />
      <Albums title="New Albums" />

      <Songs />
    </>
  );
}

export default App;