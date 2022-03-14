import React, { useState } from "react";

import { child, get, getDatabase, onValue, ref, set} from "firebase/database";

function BlockCar() {
  {/*const [namecar, cinstnam] = useState('');
  const dbRef = ref(getDatabase());
  get(child(dbRef, `csr/A888HH99`)).then((snapshot) => {
    const namecar = snapshot.val();
    cinstnam(namecar)
  })*/}
  const dbRefBtn =getDatabase();
  const btnInfo = ref(dbRefBtn, 'csr/A888HH99/free');
  onValue(btnInfo, (snapshot) => {
    const RefBtn = snapshot.val();
    if (RefBtn == false){
      const her = "Занят"
      document.getElementById('her').innerHTML = her;
      var elem2 = document.querySelector('#her');
      elem2.className = 'red item-block';
    } else{
      const her2 = "Свободен"
      document.getElementById('her').innerHTML = her2;
      var elem = document.querySelector('#her');
      elem.className = 'green item-block';
    }
  })
  function btnInfoCar() {
  const dbRefTwo = ref(getDatabase());
  get(child(dbRefTwo, `csr/A888HH99/free`)).then((snapshot) => {
    const btnInfoOne = snapshot.val();
    if (btnInfoOne == true){
      const db = getDatabase();
      const her2 = "Занят"
      document.getElementById('her').innerHTML = her2;
      var elem = document.querySelector('#her');
      elem.className = 'red item-block';
      set(ref(db, 'csr/A888HH99'), {
        carNamber: "A888HH99",
        driverName: "Никита",
        free : false,
        model: "Lada Granta чёрная",
      });
    } else {
      const db = getDatabase();
      const her2 = "Свободен"
      document.getElementById('her').innerHTML = her2;
      var elem = document.querySelector('#her');
      elem.className = 'green item-block';
      set(ref(db, 'csr/A888HH99'), {
        carNamber: "A888HH99",
        driverName: "Никита",
        free : true,
        model: "Lada Granta чёрная",
        }); 
      }
    })
  }
  var infoCarTF = false
  function btnInfoCarOne(){
    if (infoCarTF == false){
      var inf = document.querySelector('#infoCar');
      inf.className = 'display info-car';
      infoCarTF = true
    } else {
      var inf = document.querySelector('#infoCar');
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
            <span onClick={btnInfoCar} id='her' className='item-block not-free'></span>
        </div>
         <div id="infoCar" className='info-car'>

        </div> 
    </div>
  );
}

export default BlockCar;