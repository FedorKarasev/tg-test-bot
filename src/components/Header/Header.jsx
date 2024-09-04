import React, { useEffect } from 'react';
import { Button } from '../Button/Button';

export const Header = () => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  function clickHandler() {
    tg.close();
  }

  return (
    <div className='header'>
      <Button onClick={clickHandler}>Закрыть</Button>
      <span className='username'>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};
