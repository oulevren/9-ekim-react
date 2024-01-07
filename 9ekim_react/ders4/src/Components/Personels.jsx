import React, { useState } from 'react'



const Personels = () => {


const personeller = [

        {id:123165,name:'Cemal',lastname:'Kucuk',position:'Front-End'},
        {id:123166,name:'Caner',lastname:'Samast',position:'Front-End'},
        {id:123167,name:'Evren',lastname:'Ogul',position:'Front-End'},
]

//stateller

const [personel,setPersonel] = useState(personeller)


//fonksiyonlar

const createPersonel = () =>{

    let isimUzunluk = 3
    let soyisimUzunluk = 3
    let pozisyonUzunluk = 2

    const isim = prompt("personel ismi giriniz")
    if(isim === null) return
    if(isim.length < isimUzunluk){
        alert(`isim minimum ${isimUzunluk} karakterden uzun olamaz`)
        return createPersonel()
    }

    const soyisim = prompt("soyisim giriniz")
    if(soyisim === null) return
    if(soyisim.length < soyisimUzunluk){
        alert(`isim minimum ${soyisimUzunluk} karakterden uzun olamaz`)
        return createPersonel()
    }

    const position = prompt("personel görevini giriniz")
    if(position === null) return
    if(position.length < pozisyonUzunluk){
        alert(`isim minimum ${pozisyonUzunluk} karakterden uzun olamaz`)
        return createPersonel()
    }


    //modelleri oluştur

const model = {
    id: Date.now(),
    name:isim,
    lastname:soyisim,
    position:position
}
console.log("MODEL",model)

setPersonel([...personel,model])

}


const editPersonel = (userId,type) => {

    const users = personel.filter(target => target)

    const user = users.find(target => target.id === userId)



    if(type === "AD_GUNCELLE"){
        const yeniAd = prompt(`${user.name} için yeni bir isim giriniz`)
        if(yeniAd === null)
        return
        
        if(yeniAd) user.name = yeniAd
    }
    
    if(type === "SOYAD_GUNCELLE"){
        const yeniSoyad = prompt(`${user.lastname} için yeni bir soyisim giriniz`)
        if(yeniSoyad === null)
        return
        if(yeniSoyad) user.lastname = yeniSoyad
    }
    

        if(type === "POZISYON_GUNCELLE"){
            const yeniPozisyon = prompt(`${user.position} için yeni bir görev giriniz`)
            if(yeniPozisyon === null)
            return
        if(yeniPozisyon) user.position = yeniPozisyon
        }
    
        alert("Başarılı bir şekilde güncellendi")

        setPersonel(users)
}

const deletePersonel = (userId) =>{

    const users = personel.filter(user => user.id !== userId)
    //onaylama
    const onayla = window.confirm("Bu personeli silmek istediğine emin misin ?")
    
    if(onayla) {
        setPersonel(users)
    }

}



  return (

    <>
    
    <h1>Personel Ekle(CRUD)</h1>
        <p>Hakkımızda: <br />
        Toplam Personel Sayımız:{personel.length}
        </p>


    <button onClick={createPersonel}>Yeni Personel Ekle</button>

            {/* user:objeleri döndürecek. index:index noları döndürecek */}
         <ul className='personels'>
        {personel.map((user,index) => {
            return <li key={user.id} className='item'>
                <p>Adi:{user.name} <small onClick={() => editPersonel(user.id,"AD_GUNCELLE")} className='edit'>Düzenle</small></p>
                <p>Soyadi:{user.lastname} <small onClick={() => editPersonel(user.id,"SOYAD_GUNCELLE")} className='edit'>Düzenle</small></p>
                <p>Görevi:{user.position}  <small onClick={() => editPersonel(user.id,"POZISYON_GUNCELLE")} className='edit'>Düzenle</small></p>
                <button onClick={() => deletePersonel(user.id)}>Personel Sil</button>
            </li>



        })}
        </ul>   
    
    
    </>



  )
}

export default Personels