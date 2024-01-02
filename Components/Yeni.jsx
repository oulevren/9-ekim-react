import React, { useState } from 'react'




export default function Yeni() {

let bilgi = "yeni başlangıç"
let bilgi2 = "buda yenisi"
let classAdi1 = "mavi"


const beniDuzenle = () =>{

    const bilgii = prompt("burayı değiştir")
    document.title = bilgii

}

//array destruacting
const [title,setTitle] = useState("BURASI YENİ BAŞLIK")

const newTitle = () => {
    const info1 = prompt("baslik ismi gir")

if(info1 === null) {
    return;
}
if(!info1){
    return alert("lütfen buraya bir şey giriniz")
}


    setTitle(info1)
    
}

  return (

<>

<div>
    <h3>{bilgi}  {bilgi2} </h3>

    <p className={classAdi1}>
        burası yeni yer
    </p>
    
</div>

<h3>{title}</h3>
<button onClick={newTitle}>yeni başlığı düzenle</button>

<button onClick={beniDuzenle}>beni düzenle</button>

</>

   

    

  )
}
