import React from 'react';
import {Select} from 'antd';

const Option = Select.Option;

const UserInformation = () => {
    return (
        <div className='user-information-block section'>
            <div className='personal-inf'>
                <div className="block-title">
                    Персональна інформація
                </div>

                <div className="form-item">
                    <label>Тип</label>
                    <Select defaultValue="jack">
                        <Option value="jack">Продавець</Option>
                        <Option value="jack2">Продавець2</Option>
                    </Select>
                </div>
                <div className="form-item">
                    <label>Ім'я</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>Прізвище</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>Email</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>Телефон</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>ІНН</label>
                    <input type="text"/>
                </div>
            </div>

            <div className='legal-inf'>
                <div className="block-title">
                    Юридичні дані
                </div>

                <div className="form-item">
                    <label>Організація</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>ЕДРПОУ</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>Посвідчення платника ПДВ</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>ПІБ керуючого</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>Посада керівника</label>
                    <Select defaultValue="jack">
                        <Option value="jack">Директор</Option>
                        <Option value="jack2">Продавець2</Option>
                    </Select>
                </div>
                <div className="form-item">
                    <label>Місто, область, країна</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>Район</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>Вулиця</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>Індекс</label>
                    <input type="text"/>
                </div>
            </div>

            <div className='billing-inf'>
                <div className="block-title">
                    Платіжна інформація
                </div>

                <div className="form-item">
                    <label>Назва банку</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>МФО</label>
                    <input type="text"/>
                </div>
                <div className="form-item">
                    <label>Розрахунковий рахунок</label>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
};

export default UserInformation;