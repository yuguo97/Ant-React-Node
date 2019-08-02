import React from 'react';
import Drop from './Dropdown'
import {withRouter} from "react-router-dom";
import history from "./../history";



import logoURL from '../assets/logo.png';

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
                <div className='h_left'  onClick={this.confirm}>
                    <img src={logoURL} alt='logo'/>
                    <span>{this.props.name}</span>
                </div>
                <div className='h_right'>
                    <Drop name="admin"/>
                </div>
            </div>
        );
    }
}

export default withRouter(Header)