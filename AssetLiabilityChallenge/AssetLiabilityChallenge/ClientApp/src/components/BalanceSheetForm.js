import React, { useState } from 'react';

const BalanceSheetForm = (props) => {

    const [formData, setFormData] = useState({
        "type":0,
        "name":"",
        "balance":0
    });

    const handleTypeChange = (event) => {
        console.log(event.target.value);
        setFormData({ ...formData, type: event.target.value});
    }

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setFormData({ ...formData, name: event.target.value });
    }

    const handleBalanceChange = (event) => {
        console.log(event.target.value);
        setFormData({ ...formData, balance: event.target.value });
    }

    const handleSubmit = (event) => {
        console.log(formData);
        fetch('balancesheet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(formData)
        }).then(function (response) {
            return response.json;
        });
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Type:
                <select value={formData.type} onChange={handleTypeChange}>
                    <option value="0">Asset</option>
                    <option value="1">Liability</option>
                </select>
            </label>
            <label>
                Name:
                <input type="text" name="name" onChange={handleNameChange} />
            </label>
            <label>
                Balance:
                <input type="number" name="balance" onChange={handleBalanceChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default BalanceSheetForm;