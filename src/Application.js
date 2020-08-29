import React, {Component} from 'react';
import HighScore from './HighScore';
import "./css/style.css";

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

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false
        });
    }
 
    render(){
        let name = "Dong-Gil";
        let {count} = this.state;

        return (
            <div>
                <h1>Hello, {name}</h1>
                <hr>
                </hr>
                <h2>You Clicked the button {count} times</h2>
                <HighScore 
                    overTen={this.state.overTen}
                    onReset={this.resetCount}
                />
                <span>
                    <button onClick={this.handleClick}>Click me</button>
                </span>
            </div>
        );
    }
}

export default Application;