import React from 'react';

class Class extends React.Component {
    render() {
        return(
            <div>
                <h1>I'm a class component</h1>
                <h2> It is {this.props.time}</h2>
                <button onClick={() => this.props.setType('functional')}> Switch
                    to functional!</button>
            </div>
        )
    }
}
export default Class

