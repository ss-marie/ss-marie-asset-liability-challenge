import React from 'react';

const BalanceSheetTable = (props) => {
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {props.sheetItems.map(sheetItem =>
                    <tr key={sheetItem.id}>
                        <td>{sheetItem.type}</td>
                        <td>{sheetItem.name}</td>
                        <td>{sheetItem.balance}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default BalanceSheetTable;