import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './index.css';

class App extends Component{
    items=[
        {
            name:'Potato',
            id:uuid(),
        },
        {
            name:'Carrot',
            id:uuid(),
        },
        {
            name:'Pepper',
            id:uuid(),
        },
        {
            name:'Eggplant',
            id:uuid(),
        },
        {
            name:'Onion',
            id:uuid(),
        },
        {
            name:'Garlic',
            id:uuid(),
        },
    ];
    
    state={
        favorites:[],
    };

    // toggleInFavorites = id =>{
    //     let favorites;
    //     const isItemInFavorites =this.state.favorites(
    //     favorites => favorite.id === id
    //     );
    // }
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render( < App / > , rootElement);

