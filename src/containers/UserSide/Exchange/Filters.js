import React from 'react';
import {Cascader, Icon} from 'antd';


const Filters = () => {
    const options = [{
        value: 'Гранулы',
        label: 'Гранулы'
    },
        {
            value: 'Пеллеты',
            label: 'Пеллеты',
            children: [
                {
                    value: 'ENplus A1',
                    label: 'ENplus A1'
                },
                {
                    value: 'ENplus A2',
                    label: 'ENplus A2'
                },
                {
                    value: 'ENplus B',
                    label: 'ENplus B'
                },
            ],
        },
        {
            value: 'Щепа',
            label: 'Щепа',
        }
    ];

    return (
        <div className='exchange-filters-block'>
            <div className='size-container'>
                <div className="form-item">
                    <label htmlFor="">Сырье</label>
                    <Cascader
                        options={options}
                        onChange={e => console.log(e)}
                        placeholder="Please select"
                        displayRender={label => label.join(', ')}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="">Локация</label>
                    <Cascader
                        options={options}
                        onChange={e => console.log(e)}
                        placeholder="Please select"
                        displayRender={label => label.join(', ')}
                    />
                </div>

                {/*<div className="form-item">*/}
                    {/*<label htmlFor="">Форма оплаты</label>*/}
                    {/*<Cascader*/}
                        {/*options={options}*/}
                        {/*onChange={e => console.log(e)}*/}
                        {/*placeholder="Please select"*/}
                        {/*displayRender={label => label.join(' / ')}*/}
                    {/*/>*/}
                {/*</div>*/}

                <div className="form-item">
                    <label htmlFor="">Логистика</label>
                    <Cascader
                        options={options}
                        onChange={e => console.log(e)}
                        placeholder="Please select"
                        displayRender={label => label.join(', ')}
                    />
                </div>

                <button className='btn'>
                    <Icon type="plus-circle"/>
                    Добавить
                </button>
            </div>
        </div>
    )
};

export default Filters;
