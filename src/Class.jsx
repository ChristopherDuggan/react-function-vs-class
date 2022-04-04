import React from 'react';

class Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return(
            <div>
                <h1>I'm a class component</h1>
                <h2> It is {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={() => this.props.setType('functional')}> Switch
                    to functional!</button>
            </div>
        )
    }
}
export default Class

