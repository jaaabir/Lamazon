import React, { Component } from 'react';
import Counter from './counter';


class Lcounters extends Component {

    sum () {
        const counter = this.props.state.counters;
        let count = 0;

        for(let vals of counter){
            count += vals.value;
            // console.log(vals.value)
        }

        return count
    }

    render() { 
        return ( 
            <div>
                { this.props.state.counters.map( count => 
                <Counter key={count.id} onDelete={this.props.onDelete} count={count} onCancel={this.props.onCancel} onChange={this.props.onChange}>
                    <h5>{this.props.state.items[count.id - 1]}</h5> 
                </Counter>
                )}

                <br/><br/>
                <div className='container'>   
                    <div className="items badge badge-primary">Total</div>
                    <div className="items badge badge-secondary">
                        {this.sum()}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Lcounters;