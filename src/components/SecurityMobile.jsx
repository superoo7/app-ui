import React, { Component } from 'react'
import '../styles/scss/security.css'
import Footer from './common/Footer'

class SecurityMobile extends Component {
    state = {}

    componentDidMount() {
        document.title = "DEUS pools"
    }

    render() {
        return (<div className="exchange-mobile">
            <div className="title"><span className="deus-sw">LP </span><span className="swap">Pools</span></div>
            <div className="reason">For security reasons,LP Pools is not available on mobiles.</div>
            {/* <img className="giphy" src="img/ez.gif" alt="giphy" /> */}

            <div className="bottom">

                <div className="app">
                    We are currently preparing a mobile APP to provide a secure way of interacting with the LP Pools. <br />
                Please switch to desktop or laptop device for now.
            </div>

                <div className="follow">Follow us on our social media for updates.</div>
                <Footer />
            </div>
        </div>);
    }
}

export default SecurityMobile;