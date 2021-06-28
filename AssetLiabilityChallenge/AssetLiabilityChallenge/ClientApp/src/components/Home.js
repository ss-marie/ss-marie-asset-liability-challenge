import React, { Component } from 'react';
import BalanceSheetTable from './BalanceSheetTable';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <BalanceSheetTable />
            </div>
        );
    }
}
