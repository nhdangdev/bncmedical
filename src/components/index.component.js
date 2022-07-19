import React, { Component } from 'react';
import { Contact, Footer, Header } from '../components';

export default class Index extends Component {
    render() {
        return (
            <div>
                <p>Welcome to Index Component!!</p>
                <Contact />
                <Footer />
            </div>
        )
    }
}