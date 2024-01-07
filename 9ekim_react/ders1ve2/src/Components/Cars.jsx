import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Cars(props) {

    let info;
    let yenisi;

if(props.bilgi) {
    info = props.bilgi
}else{
    info = "buraya bir title verilmedi"
}

if(props.baslik){
    yenisi = props.baslik
}

if(!props.baslik){
    yenisi = "buraya bir bilgi verilmedi"
}

  return (


   <>
   
   <Card style={{ width: '18rem' }}>
      <Card.Img title={yenisi} variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{info}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   
   </>




  )
}
