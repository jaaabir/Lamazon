import React, { Component } from 'react';

class Counter extends Component {

    styles = {
        fontSize: 20,
        fontWeight: 'bold',
    };

    render() { 

        let classname = this.changeColor();

        return (
        <div className='container'>
            <div className="items badge badge-primary">{ this.props.children }</div>
            <span style={this.styles} className={classname}>{this.changeNum()}</span>
            <div className="btns">
                <button style={this.styles} onClick={() => this.props.onChange(1,this.props.count)} className='btn btn-secondary m-2 btn-sm'> + </button>
                <button style={this.styles} onClick={() => this.props.onChange(-1,this.props.count)} className='btn btn-secondary m-2 btn-sm'> - </button>
                <button style={this.styles} onClick={() => this.props.onDelete(this.props.count.id)} className='btn btn-warning m-2 btn-sm'> Delete </button>
                <button style={this.styles} onClick={() => this.props.onCancel(this.props.count)} className='btn btn-warning m-2 btn-sm'> cancel </button>
            </div>
        </div>
        );
    }

    changeColor() {
        
        let classname = 'badge m-2 badge-';
        classname += (this.props.count.value <= 0) ? 'warning' : 'primary';
        return classname;
    }

    changeNum(){

        // const { count } = this.state;
        return this.props.count.value <= 0 ? <h5>None</h5> : this.props.count.value;

    };

    }

 
export default Counter;