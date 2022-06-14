import All from "./components/All/All";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Overlay from "./components/Overlay/Overlay";
import './app.scss';
import { useState } from "react";

function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // const getData = async () => {
  //   console.log('data');
  //   const data = await fetch('https://62a731fcbedc4ca6d7c45ded.mockapi.io/api/sneakers');
  //   const json = data.json();
  //   json.then(res => console.log(res));
  // }

  // getData();

  return (
    <div className="wrapper">
      <div className="app">
        {isOverlayOpen && <Overlay setIsOverlayOpen={setIsOverlayOpen} />}
        <div className="app__container">
          <div className="app__body">
            <Header setIsOverlayOpen={setIsOverlayOpen} />
            <Main />
            <All />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
