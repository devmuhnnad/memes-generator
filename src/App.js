
import './App.css';
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"
import MidiPlayer from 'midi-player-js';
import  midiFile from "./test.mid"
const Player = new MidiPlayer.Player();

function App() {


  Player.loadFile(midiFile);
  Player.play();

  return (
    <div dir="rtl" className="App">
      <Header/>
      <MemeGenerator/>
    </div>
  );
}

export default App;
