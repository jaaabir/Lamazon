import React, { Component } from 'react';
import Cart from './components/cart';
import Home from './components/home';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    
    state = { 
        counters : [
            { id: 1, value : 0},
            { id: 2, value : 0},
            { id: 3, value : 0},
            { id: 4, value : 0},
        ] ,

        items: ['mobile', 'laptop', 'pcs', 'ps5'] ,

        search : String,
        data : null,
        error : null,
        cart : [],
        pointer_ind : 0,
     };


     incDec = (num,id) => {
        const { counters } = this.state;
        const index = counters.indexOf(id);

        counters[index].value += num;
        if ( counters[index].value >= 0 ) this.setState({ counters });

        else {
            counters[index].value = 0;
        }
    };

     deleteItem( id ){
        const cart = this.state.cart.filter( item => item.cart_id !== id );
        this.setState({ cart })
     };

     cancel = id => {

        const { counters }  = this.state;
        const index = counters.indexOf(id)
        counters[index].value = 0;
        this.setState({ counters })
        
     }

     getItem = () => {
        axios.post('http://127.0.0.1:3001/api/items',this.state).then( res => {
            this.setState({
                data : res.data
            })
        }).catch( error => {
            this.setState({
                error 
            })
        })
    }

    changeHandler = e => {
        this.setState({
            search : [e.target.value]
        })
    }

    addToCart = e => {
        const { data } = this.state;
        let { cart, pointer_ind } = this.state;
        const id = e.target.id;
        let item = data.data.items[id];
        item.cart_id = pointer_ind;
        cart.push(item)
        this.setState({ cart,
            pointer_ind : pointer_ind + 1
        })
    }


    render() { 
        return ( 
            <Router>
                <Switch>
                <Route path="/" exact>
                    <Home state={this.state} changeHandler={this.changeHandler.bind(this)} getItem={this.getItem.bind(this)} toCart={this.addToCart.bind(this)}/>
                </Route>
                <Route path="/cart" exact>
                    <Cart delete={this.deleteItem.bind(this)} state={this.state} cancel={this.cancel} incDec={this.incDec}/>
                </Route>
                
                </Switch>
            </Router>
         );
    }
}
 
export default App;