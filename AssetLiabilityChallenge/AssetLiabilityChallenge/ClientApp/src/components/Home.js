import React, { Component } from 'react';
import BalanceSheetTable from './BalanceSheetTable';
import BalanceSheetForm from './BalanceSheetForm';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { sheetItems: [], loading: true };
    }

    componentDidMount() {
        this.populateBalanceSheetData();
    }

    static renderBalanceSheetTable(sheetItems) {
        return (
            <div>
                <BalanceSheetForm />
                <BalanceSheetTable sheetItems={sheetItems} />
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderBalanceSheetTable(this.state.sheetItems);

        return (
            <div>
                <h1 id="tabelLabel" >Asset/Liabilities</h1>
                <p>Assets and liabilities are displayed below.</p>
                {contents}
            </div>
        );
    }

    async populateBalanceSheetData() {
        const response = await fetch('balancesheet');
        const data = await response.json();
        this.setState({ sheetItems: data, loading: false });
    }
}
