import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

class App extends Component{
    state={
        showBalloon:false,
    };

    toggle= () =>{
        this.setState(prevState =>({
            showBalloon: !prevState.showBalloon,
        }));
    };
    
ReactDOM.render(<App />,document.querySelector('#root'));