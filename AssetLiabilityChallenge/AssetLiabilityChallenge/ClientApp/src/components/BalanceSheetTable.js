import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format';
import BalanceSheetForm from './BalanceSheetForm';
import BalanceSheetStats from './BalanceSheetStats';

const BalanceSheetTable = (props) => {

    const [sheetItems, setSheetItems] = useState([]);
    const [renderFlag, setRenderFlag] = useState(0);
    // Call API to get balance sheet items and save to state
    // Refresh the data when the Delete button or form Submit button updates renderFlag state
    // This also refreshes the child BalanceSheetStats component
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
            // Trigger refresh of table after delete
            setRenderFlag(id);
            return response.json;
        });
    }
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <BalanceSheetForm
                    key={"form" + renderFlag}
                    callback={setRenderFlag} />
            </Row>
            <br />
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Balance</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sheetItems.length > 0 ? sheetItems.map(sheetItem =>
                            <tr key={sheetItem.id}>
                                <td>{sheetItem.typeString}</td>
                                <td>{sheetItem.name}</td>
                                { /* Display balance amount right-adjusted, as currency with precision for cents e.g. $50,000.00 */}
                                <td className="text-right"><NumberFormat value={sheetItem.balance} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /></td>
                                <td><Button onClick={(e) => deleteItem(sheetItem.id, e)}>Delete Row</Button></td>
                            </tr>
                        ) :
                             // Display an empty row if there is no data so the user recognizes this as an empty table
                            <tr key={sheetItems}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> }
                    </tbody>
                </Table>
            </Row>
            <Row>
                <BalanceSheetStats
                    // Make BalanceSheetStats dependent on the renderFlag so when it is updated, the stats update too
                    key={"stat" + renderFlag} />
            </Row>
        </Container>
    );
}

export default BalanceSheetTable;