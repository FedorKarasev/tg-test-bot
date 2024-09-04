import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const clickHandler = () => {
    tg.close();
  };

  return (
    <div className='App'>
      <h1>Hello!</h1>
      <button onClick={clickHandler}>Закрыть</button>
    </div>
  );
}

export default App;
