import React from 'react';
import Search from './Search.js';

class Header extends React.Component{

    render(){  
        return(
            <div className="tc bg-purple pv0 mb0 bb bw2 b--light-purple">
                <h1 className="ma0 white pb0 pt2 f1" > RoboFriends v1.0.0. </h1>
                <Search state={this.props.state} handleChange={this.props.handleChange} />
            </div>
        )
    }
}
export default Header;