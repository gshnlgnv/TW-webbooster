import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {getData} from './actions';
import {bindActionCreators} from "redux";
import Card from './Card.js';

function App(props) {
    return (
        <div className="app">
            <header className="app__header">
                <button className="app__header_button" onClick={props.getData}>
                    Получить JSON
                </button>
            </header>
            <main className="app__content">
               <Card />
            </main>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getData}, dispatch)
};

export default connect(null, mapDispatchToProps)(App);
