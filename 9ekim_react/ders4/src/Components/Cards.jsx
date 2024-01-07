import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Cards = (props) => {

let source;
let veri;
let title;

if(props.url){
    source = props.url
}
if(!props.url){
    source = "/img/indir.jpeg"
}


if(props.info){
    veri = props.info
}else{
    veri = "buraya bir açıklama tanımlanmadı"
}


if(props.bilgi){
    title = props.bilgi
}else{
    title = "burayı bilemiyorum"
}


  return (


    <>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img title={title} variant="top" src={source} />
      <Card.Body>
        <Card.Title>{veri}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link className='btn btn-danger' href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    </>


  )
}

export default Cards