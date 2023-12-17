import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from 'emailjs-com';


export const ContactModal = ({ show, handleClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(checked);
        if (checked) {
            emailjs.sendForm('service_0skwcg5', 'template_f2hb7fn', e.target, "user_A96sH6UngsPP7n9rIY6Z2").
                then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err)
                });
        }
        else {
            emailjs.sendForm('service_0skwcg5', 'template_xhh49o9', e.target, "user_A96sH6UngsPP7n9rIY6Z2").
                then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err)
                });
        }
    };
    const [checked, setChecked] = useState(false);

    const changeChecked = () => {
        setChecked(checked => !checked);
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Comment me contacter ?</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>

                    <Form.Group controlId="form.Name">
                        <Form.Label>Votre nom</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Label>Renseignez votre email</Form.Label>
                        <Form.Control type="email" name="from_email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" name="message" rows={10} />
                    </Form.Group>
                    <Form.Group controlId="form.Checkbox">
                        <Form.Check type="checkbox" label="Recevoir un email de confirmation de recu" onClick={changeChecked}></Form.Check>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                    <Button variant="primary" type="submit">
                        Envoyer
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}
