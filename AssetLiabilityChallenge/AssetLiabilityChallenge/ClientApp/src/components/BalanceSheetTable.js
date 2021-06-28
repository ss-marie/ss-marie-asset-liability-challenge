import React from 'react';

const BalanceSheetTable = (props) => {
    const deleteItem = (id) => {
        console.log(id);
        fetch('balancesheet', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: id
        }).then(function (response) {
            return response.json;
        });
    }
    return (
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
                {props.sheetItems.map(sheetItem =>
                    <tr key={sheetItem.id}>
                        <td>{sheetItem.type}</td>
                        <td>{sheetItem.name}</td>
                        <td>{sheetItem.balance}</td>
                        <td><button onClick={(e) => deleteItem(sheetItem.id, e)}>Delete Row</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default BalanceSheetTable;