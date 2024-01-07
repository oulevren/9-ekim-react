import React from 'react'

const DarkModeButton = (props) => {

//obje destruacting
const { div } = props

const changeTheme = () =>{

    div.current.classList.toggle('active')

    //alternatif
//     document.getElementById('root').classList.toggle('active')
// 
}


  return (


    <>
    

    <button onClick={changeTheme}>Temayi Degistir</button>
    
    
    </>



  )
}

export default DarkModeButton