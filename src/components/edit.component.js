import React, { Component } from 'react';
import { Contact, Footer, Header } from '../components';

export default class Edit extends Component {
    render() {
        return (
            <div>
                <p>Welcome to Edit Component!!</p>
                <Contact />
                <Footer />
            </div>
        )
    }
}