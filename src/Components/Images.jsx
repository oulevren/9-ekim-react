import React, { useState } from 'react'



export default function Images() {




const [classIsmi,setClassIsmi] = useState("")

const goruntuDegis = () =>{


    if(classIsmi === 'flex-container active'){
        setClassIsmi('flex-container')
    }else{
        setClassIsmi('flex-container active')
    }


}


return (



    <>
    

    <button onClick={goruntuDegis}>beni düzelt</button>

    
    <div className={classIsmi}>

    <div>
        <img src="/images/resim1.jpg" style={{width:'300px'}} alt="" />
    </div>

    <div>
        <img src="/images/resim1.jpg" style={{width:'300px'}}  alt="" />
    </div>

    <div>
        <img src="/images/resim1.jpg" style={{width:'300px'}}  alt="" />
    </div>



    </div>
    
    
    </>

    


)
}
