import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello hello React! {this.props.name}</p>
            </div>
        );
      }
}
export default Hello;