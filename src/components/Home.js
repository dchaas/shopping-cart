import steak from "../assets/steak.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-one">
        <img id="home-img" src={steak}></img>
      </div>
      <div className="home-two">
        Haas Meats features an array of grass feed, custom cut meets. Browse,
        shop and taste the difference.
      </div>
    </div>
  );
}

export default Home;
