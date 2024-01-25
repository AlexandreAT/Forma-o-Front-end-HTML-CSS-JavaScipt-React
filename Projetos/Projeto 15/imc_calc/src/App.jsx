import './App.css'
import { ImcCalc } from './components/ImcCalc';
import { useState } from 'react';
import { data } from "./data/data";
import { ImcTable } from './components/ImcTable';

function App() {

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weight) => {
    e.preventDefault();
    
    if (!height || !weight) {
      return;
    }

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
    
    setImc(imcResult);

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })

    if(!inf){
      return;
    }
  }

  return (
    <>
    <div className='container'>
      {!imc ? (<ImcCalc calcImc={calcImc} />) : (<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} />)}
    </div>
    </>
  )
}

export default App
