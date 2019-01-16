import React from 'react';
import {Table, Icon} from 'antd';

const OrdersList = ({list, type}) => {
    const columns = [
        {
            title: 'Наименование',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Количество',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Всего',
            dataIndex: 'sum',
            key: 'sum',
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <span style={{display: 'flex'}}>
                    <Icon type="right" />
                    <Icon type="arrow-right" />
                </span>
            )
        },

    ];

    const dataSource = [
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            sum: '12400 грн',
            certificate: true
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            sum: '12400 грн',
            certificate: true
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            sum: '12400 грн',
            certificate: true
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            sum: '12400 грн',
            certificate: false
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            sum: '12400 грн',
            certificate: true
        },
        {
            name: 'ENplus a1',
            price: '100 грн/м³',
            amount: '124 м³',
            sum: '12400 грн',
            certificate: true
        },

    ]

    return (
        <div className="orders-list">
            <div className='title-order-type'>
                {type === 'buy' ? 'Покупка' : 'Продажа'}
            </div>

            <Table
                dataSource={dataSource}
                columns={columns}
                className='user-table'
                pagination={false}
                onRow={(record, rowIndex) => {
                    return {
                        onMouseEnter: (event) => {
                            console.log(event);
                        }
                    };
                }}
            />
        </div>
    )
};

export default OrdersList;