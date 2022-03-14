import React, { Component } from 'react';
import './App.css';
import BlockCar from './componens/blockCar';
import firebase from 'firebase/compat/app';
import { getDatabase, onValue, ref, set } from "firebase/database";
import KallCar from './componens/kallCar';

function App(props, data) {

  return (
    <div className="App">
      <h1>Все машины</h1>
      <div className='block-main'>
        <span className='car-block-item'>Марка/цвет</span>
        <span className='car-block-item'>Номер</span>
        <span className='car-block-item'>Водитель</span>
        <span className='car-block-item'>Тип занятости</span>
      </div>
      <BlockCar/>
      <KallCar/>
    </div>
  );
}

export default App;
