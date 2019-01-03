import React from 'react';
import Drop from './Dropdown'
import {withRouter} from "react-router-dom";



class Header extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    confirm = () => {
        this.props.history.push("/");
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