import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function TestIsolation() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    )
}

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    //  Component Lifecycle hooks
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        //  Note:   >   Do not modify state directly
        //          >   Best practice is to use setState()
        //          >   setState() may be asynchronous
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to my clock!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(<TestIsolation />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
