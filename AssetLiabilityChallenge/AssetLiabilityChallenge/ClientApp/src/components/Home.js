import React, { Component } from 'react';

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
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {sheetItems.map(sheetItem =>
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
        console.log(response);
        const data = await response.json();
        console.log(data);
        this.setState({ sheetItems: data, loading: false });
    }
}
