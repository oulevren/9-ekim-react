import React, { useEffect, useRef, useState } from 'react'





export default function Sayac() {

const [counter,setCounter] = useState(0)
const birAzaltanButton = useRef()


useEffect(() => {
    // console.log("bir defa çalışıyorum")
    birAzaltanButton.current.disabled = true   //sayfa her yenilendiğinde


},[])




const birArttır = () => {

    if(birAzaltanButton.current.disabled === true){
        birAzaltanButton.current.disabled = false

    }

    setCounter(counter +1)
}

const birAzalt = () =>{
    if(counter <= 1){
        //return; 0 dan aşağı inmemesi için
        birAzaltanButton.current.disabled = true
    }

    setCounter(counter -1)
}

const resetle = () =>{
    if(birAzaltanButton.current.disabled === false){
        birAzaltanButton.current.disabled = true
    }

    setCounter(0)
}



  return (

<>

<h3>Sayac:
    <span>{counter}</span>
</h3>

<button onClick={birArttır}>Arttır</button>
<button ref={birAzaltanButton} onClick={birAzalt}>Azalt</button>
<button onClick={resetle}>Resetle</button>

</>



  )
}
