import React, { Component } from 'react';
import {HeaderWrapper} from './style';
class Header  extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <HeaderWrapper>Header</HeaderWrapper> 
        );
    }
}

export default Header;