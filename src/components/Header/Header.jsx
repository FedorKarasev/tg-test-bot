import React, { useEffect } from 'react';
import { Button } from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

export const Header = () => {
  const { tg } = useTelegram();

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
