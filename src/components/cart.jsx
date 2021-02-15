import React, { Component } from 'react';
import Nb from './navbar';
// import Lcounter from './lcounters';
import { BsTrashFill as Trash } from 'react-icons/bs';

class Cart extends Component {
    
    
    getTotal = ( items ) => {
        let total = 0;
        items.map( item => {
            const cost = item.price.replace('₹','').replace(',','');
            total += parseInt(cost);
        })
    
        return '₹' + total.toString()
    }

    delete = e => {

        const id = e.target.id;
        this.props.delete(id)
    }
    render() {
        
        
        const { cart } = this.props.state;
        return ( 
        
            <div> 
                {/* <div className='cart'>
                    <Lcounter onDelete={this.props.delete} state={this.props.state} onCancel={this.props.cancel} onChange={this.props.incDec}/>
            </div> */} 
            <Nb counter={cart.length} name="My cart" id="cart" total={this.getTotal(cart)}/>  
            
            { cart.map( item => 
                
                <div className="cart_item d-flex row row-cols-5" id={item.id} key={item.cart_id}>
                    
                    <div className="img col">
                    <img src={item.img} alt=""/>
                    </div>

                    <div className="col">
                    <div className="text row row-cols-1">
                        <span>{item.name}</span>
                        <span className="row row-cols-2 price_rating">
                            <span className="badge badge-primary">{item.price}</span>
                            <span className="badge badge-warning">{item.rating}</span>
                            </span>
                    </div>
                    </div>

                    <div className="dropdown m-5 col">
                        <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Quantity
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <span className="dropdown-item">1</span>
                            <span className="dropdown-item">2</span>
                            <span className="dropdown-item">5+</span>
                        </div>
                    </div>

                    <button className="del btn btn-dark col"  id={item.cart_id} onClick={() => this.props.delete(item.cart_id)}>
                        <Trash />
                    </button>
                </div>
                )}
            </div>
        
         );
    }
}
 
export default Cart;

