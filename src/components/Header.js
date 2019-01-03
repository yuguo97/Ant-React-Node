import React from 'react';
import Drop from './Dropdown'
import {withRouter} from "react-router-dom";
import history from "./../history";


class Header extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    confirm = () => {
        history.push("/Home/HomeIndex");
    };
    render() {
        return (
            <div className="aHeader">
                <div className='h_left'  onClick={this.confirm}>{this.props.name}</div>
                <div className='h_right'>
                    <Drop name="admin"/>
                </div>
            </div>
        );
    }
}

export default withRouter(Header)