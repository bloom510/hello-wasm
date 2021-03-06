import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.module = {};
        this.state = {};
    }
    componentDidMount() {
        import("../crate/pkg").then(wasm => {
            this.setState({ msg: wasm.return_string() });
            this.module = wasm; /* Store module in memory so we can use it later */
        });
    }
    render() {
        return (
            <div>
                { this.state.msg }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))