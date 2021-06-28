import React, { useState } from 'react';

const BalanceSheetForm = (props) => {

    const [type, setType] = useState(0);
    const handleTypeChange = (event) => {
        console.log(event.target.value);
        setType(event.target.value);
    }

    return (
        <form>
            <label>
                Type:
                <select value={type} onChange={handleTypeChange}>
                    <option value="0">Asset</option>
                    <option value="1">Liability</option>
                </select>
            </label>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Balance:
                <input type="number" name="balance" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default BalanceSheetForm;