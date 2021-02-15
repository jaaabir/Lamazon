import React, { Component } from 'react';
import Nb from './navbar';

class Home extends Component {
    searchbar = {
        margin : 'auto',
        width : '70%',
    }

    position = {
        position : 'relative',
        top:'20px',
    }

    test = {
        backgroundColor : 'red',
    }

    contents = {
        position : 'relative',
        top:'20px',
        width : '80%',
        margin: 'auto',
        marginRight : '100px',
    }
    
    checkEnter = e => {
        if (e.key === 'Enter') {
            this.props.getItem();
        }
    }

    checkLeng = name => {
        if (name.length >= 50){
            return name.slice(0,50) + '...';
        }
        else {
            return name;
        }
    }
    
    render() { 
        const { data } = this.props.state;
        return ( 
            <div>
                <Nb name="Home" id="home"/>

                <div className="contents" style={this.position}>
                    <div className="search" style={this.searchbar}>
                        
                    <div className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.props.changeHandler} onKeyDown={this.checkEnter.bind(this)}/>
                    <button className="btn btn-outline-success" type="submit" onClick={this.props.getItem}>Search</button>
                    </div>
                    
                    </div>
                    
                    <div className="searched-contents row" style={this.contents}>

                    {
                        data !== null ?
                        data.data.items.map( d => 
                        <div className="card m-2 item_card" style={{width: "15rem"}} key={d.id}>
                        <img className="card-img-top" src={d.img} alt="" />
                        <div className="card-body">
                            <div className="card-title d-flex">
                                <h5 className="">{d.price}</h5>
                                <h6 className="badge badge-warning m-2">{d.rating}</h6>
                            </div>
                            <p className="card-text">{this.checkLeng(d.name)}</p>
                            <div className="card_buttons">
                            <button className="btn btn-primary" id={d.id} onClick={this.props.toCart}>Add to cart</button>
                            </div>
                        </div>
                    </div>
    ) : null}

                    </div>
                </div>
            </div>
         );
 
    }
}
 
export default Home;