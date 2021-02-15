import React from 'react';
import {Link} from 'react-router-dom';
import logo from "./logo192.png";


const position = {
    position : 'absolute',
    right : '0',
}

const icon = {
    marginBottom : '10px',
    cursor : 'pointer',
}

const Nb = (props) => {
    return ( 
        
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

            <div className="">
            <Link to='/'>
                <img src={logo} alt="" width='30px' style={icon}/>
            </Link>
            <span className="navbar-brand m-2 text-light">{props.name}</span>
            {
            props.counter ? 
            <span className="navbar-brand badge-pill badge-warning">{props.counter}</span> : <Link to="/cart">
            <span className='text-light m-1' style={{textDecoration : 'none'}}>Cart</span>
            </Link>
            }
            </div>
            
            {/* <form className="d-flex" id={props.id} style={position}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            {
            props.id === "cart" ? 
            <button type="button" className="btn btn-primary" style={position}>
            Total <span className="badge bg-secondary">{props.total}</span>
            {/* <span className="visually-hidden">total</span> */}
          </button>
          : null
            }
        </nav>
        
     );
}


 
export default Nb;