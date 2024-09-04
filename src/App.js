import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { tg, onToggle } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className='App'>
      <Header />
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
}

export default App;
