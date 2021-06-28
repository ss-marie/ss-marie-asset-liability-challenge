import React, { Component } from 'react';
import BalanceSheetTable from './BalanceSheetTable';
import BalanceSheetForm from './BalanceSheetForm';
import BalanceSheetStats from './BalanceSheetStats';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { sheetItems: [], sheetStats:[], loading: true };
    }

    componentDidMount() {
        this.populateBalanceSheetData();
        this.populateBalanceSheetStatsData();
    }

    static renderBalanceSheetTable(sheetItems, sheetStats) {
        return (
            <div>
                <BalanceSheetForm />
                <BalanceSheetTable sheetItems={sheetItems} />
                <BalanceSheetStats sheetStats={sheetStats} />
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderBalanceSheetTable(this.state.sheetItems, this.state.sheetStats);

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

    async populateBalanceSheetStatsData() {
        const response = await fetch('balancesheet/getstats');
        const data = await response.json();
        console.log(data);
        this.setState({ sheetStats: data });
    }
}
