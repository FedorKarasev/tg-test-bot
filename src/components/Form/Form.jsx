import { useTelegram } from '../../hooks/useTelegram';
import './form.css';
import { useEffect, useState } from 'react';

export const Form = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('');

  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные',
    });
  }, []);

  useEffect(() => {
    if (!city || !street || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, city, street]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className='form'>
      <h3>Введите ваши данные</h3>
      <input onChange={onChangeCountry} type='text' className='input' value={country} placeholder='Страна' />
      <input onChange={onChangeCity} type='text' className='input' value={city} placeholder='Город' />
      <input onChange={onChangeStreet} type='text' className='input' value={street} placeholder='Улица' />
      <select name='' id='' value={subject} onChange={onChangeSubject} className='select'>
        <option value='physical'>Физ. лицо</option>
        <option value='legal'>Юр. лицо</option>
      </select>
    </div>
  );
};
