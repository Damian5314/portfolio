import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <img
        src="DamianWillemse.jpeg"
        alt="Damian Willemse"
        className="profile-image"
      />
      <div className="intro-text">
        <h1>Welkom!</h1>
        <p>
          Dit is mijn persoonlijke portfolio. Hier deel ik mijn werk, skills en projecten waar ik trots op ben.
        </p>
      </div>
    </div>
  );
}

export default Home;
