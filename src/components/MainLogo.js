import React from 'react';
import logo from '../logo.svg';
import '../styles/MainLogo.css';

export default class MainLogo extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return <img src={logo} className='logo' alt={this.props.alt} />;
    }
}