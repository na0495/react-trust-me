import './App.css';
import MultiPlayer from './MultiPlayer';

function App() {
  return (
    <div className="App">
      <MultiPlayer
        urls={[
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        ]}
      />
    </div>
  );
}

export default App;
