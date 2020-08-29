import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        console.log('Clicked!');
        this.setState({count: this.state.count + 1});
    }

    componentDidUpdate(props, state) {
        console.log("Updated from", state, "to", this.state);
        if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen) {
            console.log("Updated over ten");
            this.setState({overTen: true});
        }
    }
 
    render(){
        let name = "Dong-Gil";
        let {count} = this.state;

        return (
            <div>
                <h1>Hello, {name}</h1>
                <hr>
                </hr>
                <span>You Clicked the button {count} times</span>
                <hr></hr>
                {(this.state.overTen) ? 
                    <span>Beat high score of 10!</span>
                    : null
                }
                <span>
                    <button onClick={(e) => this.handleClick()}>Click me</button>
                </span>
            </div>
        );
    }
}

export default Application;