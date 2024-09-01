import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <main style={{ display: "flex", gap: "22px" }}>
      <Link to="/question1">Question1</Link>
      <Link to="/question2">Question2</Link>
    </main>
  );
};

export default Home;
