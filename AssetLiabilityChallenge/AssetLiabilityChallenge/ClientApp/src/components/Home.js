import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BalanceSheetTable from './BalanceSheetTable';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <h1>Asset/Liability Challenge</h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <h4>App created by Susan Song</h4>
                </Row>
                <Row className="d-flex justify-content-center">
                    <p>Add Assets and Liabilities using the form below.</p>
                </Row>
                <BalanceSheetTable />
            </Container>
        );
    }
}
