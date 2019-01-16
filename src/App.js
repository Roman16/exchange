import React, {Component} from 'react';

import Routes from "./routes";
import Header from './components/Header';
import Footer from "./components/Footer";

import './App.scss';
import 'antd/dist/antd.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>

                <div className='size-container content'>
                    <Routes/>
                </div>

                <Footer />
            </div>
        );
    }
}

export default App;
