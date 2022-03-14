import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { child, get, getDatabase, onValue, ref, set} from "firebase/database";


function KallCar() {
    {/*const [namecar, cinstnam] = useState('');
    const dbRef = ref(getDatabase());
    get(child(dbRef, `csr/A999HH99`)).then((snapshot) => {
      const namecar = snapshot.val();
      cinstnam(namecar)
    })*/}
  const dbRefBtn =getDatabase();
  const btnInfo = ref(dbRefBtn, 'csr/A999HH99/free');
  onValue(btnInfo, (snapshot) => {
    const RefBtn = snapshot.val();
    if (RefBtn == false){
      const her = "Занят"
      document.getElementById('her2').innerHTML = her;
      var elem2 = document.querySelector('#her2');
      elem2.className = 'red item-block';
    } else{
      const her2 = "Свободен"
      document.getElementById('her2').innerHTML = her2;
      var elem = document.querySelector('#her2');
      elem.className = 'green item-block';
    }
  })
  function btnInfoCarTwo() {
    const dbRefTwo = ref(getDatabase());
    get(child(dbRefTwo, `csr/A999HH99/free`)).then((snapshot) => {
      const btnInfoTwe = snapshot.val();
      if (btnInfoTwe == true){
        const db = getDatabase();
        const her2 = "Занят"
        document.getElementById('her2').innerHTML = her2;
        var elem3 = document.querySelector('#her2');
        elem3.className = 'red item-block';
        set(ref(db, 'csr/A999HH99'), {
          carNamber: "A999HH99",
          driverName: "Иван",
          free : false,
          model: "Lada Granta синяя",
        });
      } else {
        const db = getDatabase();
        const her2 = "Свободен"
        document.getElementById('her2').innerHTML = her2;
        var elem3 = document.querySelector('#her2');
        elem3.className = 'green item-block';
        set(ref(db, 'csr/A999HH99'), {
          carNamber: "A999HH99",
          driverName: "Иван",
          free : true,
          model: "Lada Granta синяя",
        })
      }
    })
  }
  var infoCarTF = false
  function btnInfoCarOne(){
    if (infoCarTF == false){
      var inf = document.querySelector('#infoCar1');
      inf.className = 'display info-car';
      infoCarTF = true
    } else {
      var inf = document.querySelector('#infoCar1');
      inf.className = 'info-car';
      infoCarTF = false
    }
  }
     return (
      <div>
          <div className="BlockCar">
              <div onClick={btnInfoCarOne} className="block-car-btn">
                <span id='post' className='item-block name'>1</span> 
                <span id='namber' className='item-block'>2</span>
                <span id='name' className='item-block'>3</span>
              </div>
              <span onClick={btnInfoCarTwo}  id='her2' className='item-block not-free'></span>
          </div>
          <div id="infoCar1" className='info-car'>
  
          </div> 
      </div>
    );
  }

export default KallCar;