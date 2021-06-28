import React, { useState, useEffect } from 'react';
import BalanceSheetForm from './BalanceSheetForm';
import BalanceSheetStats from './BalanceSheetStats';

const BalanceSheetTable = (props) => {

    const [sheetItems, setSheetItems] = useState([]);
    const [renderFlag, setRenderFlag] = useState(0);
    useEffect(() => {
        async function populateItems() {
            const response = await fetch('balancesheet');
            const data = await response.json();
            setSheetItems(data);
        }
        populateItems();
    }, [renderFlag])

    const deleteItem = (id) => {
        fetch('balancesheet', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: id
        }).then(function (response) {
            setRenderFlag(id);
            return response.json;
        });
    }
    return (
        <div>
            <BalanceSheetForm
                key={"form" + renderFlag}
                callback={setRenderFlag} />
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Balance</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {sheetItems.map(sheetItem =>
                    <tr key={sheetItem.id}>
                        <td>{sheetItem.typeString}</td>
                        <td>{sheetItem.name}</td>
                        <td>{sheetItem.balance}</td>
                        <td><button onClick={(e) => deleteItem(sheetItem.id, e)}>Delete Row</button></td>
                    </tr>
                )}
            </tbody>
            </table>
            <BalanceSheetStats
                key={"stat" + renderFlag } />
        </div>
    );
}

export default BalanceSheetTable;