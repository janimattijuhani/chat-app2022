import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>Hello hello {this.props.name}</p>
                <marquee><p>Toinen elementti on: {this.props.name2}</p></marquee>
            </div>
        );
      }
}
export default Hello;