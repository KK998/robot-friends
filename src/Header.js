import React from 'react';
import Search from './Search.js';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : ""
        }
    }

    render(){    
        return(
            <div className="tc bg-purple pv0 mb0 bb bw2">
                <h1 className="ma0 white pb0 pt2 f1" > RoboFriends v1.0.0. </h1>
                <Search name={this.props.value} />
            </div>
        )
    }
}
export default Header;