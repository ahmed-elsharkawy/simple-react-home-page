import { Component } from "react";

class Counter extends Component{

    state = {
        title : "Counter Title",
        counter:1,
    }

    increase = () => {
        this.setState({
            counter : this.state.counter + 1
        });
    };

    decrease = () => {
        if(this.state.counter > 0){
            this.setState({
                counter : this.state.counter - 1,
            });
        }
    };

    render(){
        return(
            <div className="mt-5 alert alert-info p-5">
                <h2>{this.state.title}</h2>
                <button className="btn btn-info mt-3">change title</button>
                <p>counter : {this.state.counter}</p>
                {this.state.counter <= 0 && 
                    (<p className="alert alert-danger">Can't decrease counter less than 0</p>)
                }
                <button className="btn btn-success" onClick={this.increase}>+</button>
                <button className="btn btn-danger mx-4" onClick={this.decrease}>-</button>
            </div>
        )
    }
}

export default Counter;