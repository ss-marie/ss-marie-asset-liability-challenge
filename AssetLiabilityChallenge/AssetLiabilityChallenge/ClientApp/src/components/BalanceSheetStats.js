import React from 'react';

const BalanceSheetStats = (props) => {
    //console.log(props);
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Assets Total</th>
                    <th>Liabilities Total</th>
                    <th>Net Worth</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td>{props.sheetStats.assetsTotal}</td>
                    <td>{props.sheetStats.liabilitiesTotal}</td>
                    <td>{props.sheetStats.netWorth}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default BalanceSheetStats;