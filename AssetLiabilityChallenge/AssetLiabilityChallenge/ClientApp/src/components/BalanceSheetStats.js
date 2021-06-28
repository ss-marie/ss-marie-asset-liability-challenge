import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import Table from 'react-bootstrap/Table';

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
        <Table bordered>
            <thead>
                <tr>
                    <th>Assets Total</th>
                    <th>Liabilities Total</th>
                    <th>Net Worth</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td><NumberFormat value={sheetStats.assetsTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /></td>
                    <td><NumberFormat value={sheetStats.liabilitiesTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /></td>
                    <td><NumberFormat value={sheetStats.netWorth} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default BalanceSheetStats;