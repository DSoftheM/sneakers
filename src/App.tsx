import All from "./components/All/All";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Overlay from "./components/Overlay/Overlay";
import './app.scss';
import { useState } from "react";
import { Sneaker } from "./Interfaces/Interfaces";

function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [likedSneakers, setLikedSneakers] = useState<Sneaker[]>([]);
  const [addedSneakers, setAddedSneakers] = useState<Sneaker[]>([]);

  const addToLiked = (item: Sneaker) => setLikedSneakers(likedSneakers => [...likedSneakers, item]);
  const addToCart = (item: Sneaker) => setLikedSneakers(likedSneakers => [...likedSneakers, item]);

  return (
    <div className="wrapper">
      <div className="app">
        {isOverlayOpen && <Overlay setIsOverlayOpen={setIsOverlayOpen} />}
        <div className="app__container">
          <div className="app__body">
            <Header setIsOverlayOpen={setIsOverlayOpen} />
            <Main />
            <All addToLiked={addToLiked} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
