import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

const Add = ({setMovie}) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setMovie(e.target.value)
    }

    return (
        <div>
            <Button className='btn btn-dark addBtn' onClick={handleShow}>Add A Movie</Button>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header>
                    <Modal.Title>Add A Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={handleChange} type="text" name='name'/>
                        <br />
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={handleChange} type="text" name='desc'/>
                        <br />
                            <Form.Label>Poster</Form.Label>       
                            <Form.Control onChange={handleChange} type="text" name='image'/>
                        <br />
                            <Form.Label>Rating</Form.Label>
                            <Form.Control onChange={handleChange} as="select" name='rating'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="btn btn-dark" onClick={handleClose}  style={{width:'100%'}}>
                        ADD
                    </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add
