import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{color:'green', textAlign:'center'}}>Main Container</h1>
                {this.props.children}
            </div>
        );
    }
}

export default App;