import React, { Component } from 'react';
import { Contact, Footer, Header } from '../components';


export default class Create extends Component {
    render() {
        return (
            <div>
                <p>Welcome to Create Component!!</p>
                <Contact />
                <Footer />
            </div>
        )
    }
}