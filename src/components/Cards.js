import React from 'react';
import {
    Card,
    ListGroup,
    ListGroupItem,
    Button
} from 'react-bootstrap';
import {FaGithub, FaGlobe, FaDownload} from 'react-icons/fa'

const Cards = ({Text, Tech, Name, Date, Download, Link, GitHub}) => {
    return(
        <Card bg="dark" text="light" style={{width: "40vh"}} className="mx-auto mt-3">
        <Card.Img variant="top" src={'https://shellma.net/Images/'+Name+'.png'}/>
        <Card.Body>
            <Card.Title>{Name}</Card.Title>
            <Card.Text className="text-break">{Text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem style={{ backgroundColor: '#212529', color: 'white'}}>{Tech}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Button variant="outline-light" className="m-1" href={GitHub} target="_blank"><FaGithub className="mb-1 me-1"/>Github</Button>
            
            {Download ? <a href={Link} download><Button variant="outline-light" className="m-1"><FaDownload className="mb-1 me-1"/>Download</Button></a> : 
            <a href={Link} target="_blank"><Button variant="outline-light" className="m-1"><FaGlobe className="mb-1 me-1"/>Website</Button></a>}
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{Date}</small>
        </Card.Footer>
        </Card>
    )
}
export default Cards;