import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BalanceSheetForm = (props) => {

    const [formData, setFormData] = useState({
        "type": 0,
        "name": "",
        "balance": 0
    });

    const handleTypeChange = (event) => {
        setFormData({ ...formData, type: parseInt(event.target.value) });
    }

    const handleNameChange = (event) => {
        setFormData({ ...formData, name: event.target.value });
    }

    const handleBalanceChange = (event) => {
        setFormData({ ...formData, balance: parseFloat(event.target.value) });
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        fetch('balancesheet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(formData)
        }).then(function (response) {
            props.callback(Math.random());
            return response.json;
        });
        event.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>
                    Type:
                <Form.Control as="select" value={formData.type} onChange={handleTypeChange}>
                        <option value="0">Asset</option>
                        <option value="1">Liability</option>
                    </Form.Control>
                </Form.Label>
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Name:
                <Form.Control required type="text" name="name" placeholder={formData.type == 0 ? "e.g. Property" : "e.g. Debt"} onChange={handleNameChange} />
                </Form.Label>
            </Form.Group>

            <Form.Group>
                <Form.Label>
                    Balance:
                <Form.Control required type="number" name="balance" step="any" placeholder="e.g. 5000.00" onChange={handleBalanceChange} />
                </Form.Label>
            </Form.Group>

            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BalanceSheetForm;