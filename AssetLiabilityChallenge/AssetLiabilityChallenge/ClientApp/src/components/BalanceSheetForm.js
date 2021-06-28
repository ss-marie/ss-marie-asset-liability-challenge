import React, { useState, useEffect } from 'react';

const BalanceSheetForm = (props) => {

    const [formData, setFormData] = useState({
        "type": 0,
        "name": "",
        "balance": 0
    });

    const handleTypeChange = (event) => {
        setFormData({ ...formData, type: parseInt(event.target.value)});
    }

    const handleNameChange = (event) => {
        setFormData({ ...formData, name: event.target.value });
    }

    const handleBalanceChange = (event) => {
        setFormData({ ...formData, balance: parseFloat(event.target.value) });
    }

    const handleSubmit = (event) => {
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
                <input type="number" name="balance" step="any" onChange={handleBalanceChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default BalanceSheetForm;