import React, { Component } from 'react';


class TokenBox extends Component {
    state = {}

    handleMax = () => {
        const { token } = this.props
        token.amount = token.balance
        console.log(token);
    }

    validate = (e) => {
        var ev = e || window.event;
        var key = ev.keyCode || ev.which;
        key = String.fromCharCode(key);
        var regex = /[0-9\\.]/;
        if (!regex.test(key)) {
            ev.returnValue = false;
            if (ev.preventDefault) ev.preventDefault();
        }
    }


    render() {
        const { type, handleSearchBox, handleTokenInputChange, token } = this.props

        return (<div className="token-box-wrap">
            <div className="token-box">
                <div className="top">
                    <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                    <div className="balance">
                        <span>Balance: </span>
                        <span>{token.balance}</span>
                    </div>
                </div>
                <div className="bottom">
                    <input type="number" className="input-amount"
                        value={token.amount}
                        onKeyPress={this.validate}
                        onChange={(e) => handleTokenInputChange(type, e.currentTarget.value)}
                        autoComplete="off" autoCorrect="off" placeholder="0.0" spellCheck="false" />
                    {type === "from" && <div className="max-btn" onClick={() => handleTokenInputChange(type, token.balance)}>MAX</div>}
                    <div className="token-info" onClick={() => handleSearchBox(true, type)}>
                        <img className="token-icon" src={process.env.PUBLIC_URL + `/tokens/${token.pic_name}.svg`} alt="ETH" />
                        <span className="token-name">{token.name}</span>
                        <img className="select-icon" src={process.env.PUBLIC_URL + "/img/select.svg"} alt="select" />
                    </div>
                </div>
            </div>
        </div >);
    }
}

export default TokenBox;