import React, {Component} from 'react';
import {Row, Col} from 'antd';

import Filters from './Filters';
import OrdersList from "./OrdersList";

import './exchange.scss';

class Exchange extends Component {

    render() {
        return (
            <div className='exchange-page'>
                <Filters

                />

                <Row gutter={32}>
                    <Col className="gutter-row" span={12}>
                        <OrdersList
                            type='buy'
                        />

                    </Col>
                    <Col className="gutter-row" span={12}>
                        <OrdersList
                            type='sell'
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Exchange;