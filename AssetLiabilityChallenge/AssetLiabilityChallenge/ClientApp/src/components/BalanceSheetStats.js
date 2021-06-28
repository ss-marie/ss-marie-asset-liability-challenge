import React, { useState, useEffect } from 'react';

const BalanceSheetStats = (props) => {

    const [sheetStats, setSheetStats] = useState([]);
    useEffect(() => {
        async function populateStats() {
            const response = await fetch('balancesheet/getstats');
            const data = await response.json();
            setSheetStats(data);
        }
        populateStats();
    },[])

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
                    <td>{sheetStats.assetsTotal}</td>
                    <td>{sheetStats.liabilitiesTotal}</td>
                    <td>{sheetStats.netWorth}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default BalanceSheetStats;