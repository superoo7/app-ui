import React, { Component } from 'react';
import "./staking.scss"

class NewStaking extends Component {
    state = {
        isSelect: false,
        tokens: [
            { id: 1, name: "Sand Token" },
            { id: 2, name: "Balancer Pool" },
            { id: 3, name: "Time Token" },
        ],
        selectedTokenID: 1,
    }

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.scrollRef = React.createRef();
    }

    componentDidMount() {
        this.handleScroller()
    }
    handleOpenSelect = () => {
        this.setState({ isSelect: true })
    }

    handleScroller = () => {
        const width = (1900 - window.innerWidth) / 2
        if (this.scrollRef.current) {
            console.log(window.innerWidth);
            this.scrollRef.current.scrollLeft = width
        }
    }

    changeSelectToken = (t) => {
        this.setState({ selectedTokenID: t.id, isSelect: false })
    }

    render() {
        const { isSelect, tokens, selectedTokenID } = this.state
        const selectedToken = tokens.find(t => t.id === selectedTokenID)
        return (<div className="staking-wrap" >
            <div className="grad-wrap notif-wrap">
                <div className=" notif">
                    Only swap DEUS/DEA on Uniswap to avoid slippage. Swap DEUS/ETH on DEUS Swap.
                </div>
            </div>
            <div className="top-btns">
                <div className="select-group">
                    {!isSelect && <div className="grad-wrap token-btn-wrap" onClick={this.handleOpenSelect}>
                        <div className=" grad token-btn">
                            <p>{selectedToken.name} </p>
                            <img className="arrow-nav" src={process.env.PUBLIC_URL + "/img/arrow-nav.svg"} />
                        </div>
                    </div>}
                    {isSelect && <div className="grad-wrap list-tokens-wrap ">
                        <div className="list-tokens">
                            {tokens.map((t, index) => {
                                return <div key={index} className="token-item" onClick={() => this.changeSelectToken(t)}>
                                    <div className=" grad token-btn">
                                        <p>{t.name}</p>
                                        {index === 0 && <img className="arrow-nav" src={process.env.PUBLIC_URL + "/img/arrow-nav.svg"} />}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>}
                </div>

                <div className="old-new-btn">
                    <div className="grad-wrap old-btn-wrap">
                        <p className="grad old-btn">Visit old Pools</p>
                    </div>
                    <p className="msg">*To unstake your old staked tokens <br /> just visit our old pools</p>
                </div>
            </div>

            <div className="stake-container-wrap" ref={this.scrollRef} onClick={this.handleScroller}>
                <div className="stake-container" >
                    <div className="row1">

                        <div className="stake-token-wrap">
                            <div className="stake-more"><p>stake <br /> more</p></div>
                            <div className="token-name"> sUNI-LP-DEUS-DEA</div>
                            <div className="sand-title">SandToken</div>
                            <div className="apy">1,250% APY</div>
                            <div className="black-line"></div>
                            <div className="own-pool">you own 4.64% ($4320.30) of the pool</div>
                            <div className="grad-wrap deposit-wrap">
                                <div className=" deposit">
                                    <div className="zap-wrap" title="ready soon"> <div className="zap">ZAP⚡ in/out</div></div>
                                    <div className="deposit-amount">1370.7184 <span> deposited</span></div>
                                    <div className="provide-more"><span>provide more</span><img src={process.env.PUBLIC_URL + "/vaults/uni.svg"} alt="uni" /></div>
                                </div>
                            </div>
                            <div className="grad-wrap claim-wrap">
                                <div className=" claim">
                                    <div className="withdraw">claim & withdraw</div>
                                    <div className="dea-amount">2.00063 DEA ($60.24) </div>
                                    <div className="caim-btn">claim</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row2">

                        <div className="tvl-wrap">
                            <div className="tvl">
                                <div className="sand-token">Staking Pools</div>
                                <div className="price">$2,925,602</div>
                                <p className="tvl-txt">TVL</p>
                                {/*<div className="grad-wrap tvl-btn">
                                    <div className="grad">How to get Sand Tokens</div>
                                </div> */}
                            </div>
                        </div>


                        <div className="stake-token-wrap closed">
                            <div className="stake-more"><p>stake <br /> here</p></div>
                            <div className="token-closed-name">sUNI-LP-DEA-USDC </div>
                            <div className="sand-title">SandToken</div>
                            <div className="apy">1,250% APY</div>

                            <div className="grad-wrap provide-more-wrap">
                                <div className=" grad">
                                    <div className="provide-more"><span>get DEA-USDC Sand Token </span><img src={process.env.PUBLIC_URL + "/vaults/sand-token.svg"} alt="uni" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="stake-token-wrap">
                            <div className="stake-more"><p>stake <br /> more</p></div>
                            <div className="token-name"> sDEUS </div>
                            <div className="sand-title">SandToken</div>
                            <div className="apy">1,250% APY</div>
                            <div className="black-line"></div>
                            <div className="own-pool">you own 4.64% ($4320.30) of the pool</div>
                            <div className="grad-wrap deposit-wrap">
                                <div className=" deposit">
                                    <div className="zap-wrap" title="ready soon"> <div className="zap">ZAP⚡ in/out</div></div>
                                    <div className="deposit-amount">1370.7184 <span> deposited</span></div>
                                    <div className="provide-more"><span>buy more</span><img className="swap-icon" src={process.env.PUBLIC_URL + "/vaults/swap.svg"} alt="swap" /></div>
                                </div>
                            </div>
                            <div className="grad-wrap claim-wrap">
                                <div className=" claim">
                                    <div className="withdraw">claim & withdraw</div>
                                    <div className="dea-amount">2.00063 DEA ($60.24) </div>
                                    <div className="caim-btn">claim</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container-single-wrap">
                <div className="single-wrap closed">
                    <div className="stake-here">
                        STAKE HERE
                        </div>

                    <div className="token-name">sDEA</div>
                    <div className="token-title">SandToken</div>

                    <div className="grad-wrap provide-more-wrap">
                        <div className=" grad">
                            <div className="provide-more"><span>get DEA Sand Token </span><img src={process.env.PUBLIC_URL + "/vaults/sand-token.svg"} alt="uni" /></div>
                        </div>
                    </div>


                </div>




                <div className="single-wrap">
                    <div className="single">
                        <div className="stake-here">
                            STAKE MORE
                        </div>

                        <div className="token-name">sDEA</div>
                        <div className="token-title">SandToken</div>
                        <div className="own-pool">you own 4.64% ($4320,30) of the pool</div>

                        <div className="btns-wrap">
                            <div className="btns">
                                <div className="left-single disabled">1245.10 sDAI claimable</div>
                                <div className="right-single">
                                    <span>claim</span>
                                </div>
                            </div>
                        </div>
                        <div className="btns-wrap">
                            <div className="btns">
                                <div className="left-single disabled">31,241.10 sDAI deposited</div>
                                <div className="right-single">
                                    <span>withdraw and claim</span>
                                </div>
                            </div>
                        </div>

                        <div className="btns-wrap">
                            <div className="btns">
                                <div className="left-single disabled zap" ><span>ZAP⚡ in/out</span></div>
                                <div className="right-single">
                                    <span>buy more</span><img className="swap-icon" src={process.env.PUBLIC_URL + "/vaults/swap.svg"} alt="swap" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="single-wrap">
                    <div className="single">
                        <div className="stake-here">
                            STAKE MORE
                        </div>

                        <div className="token-name">sDEA</div>
                        <div className="token-title">SandToken</div>
                        <div className="own-pool">you own 4.64% ($4320,30) of the pool</div>

                        <div className="btns-wrap">
                            <div className="btns">
                                <div className="left-single disabled">1245.10 sDAI claimable</div>
                                <div className="right-single">
                                    <span>claim</span>
                                </div>
                            </div>
                        </div>
                        <div className="btns-wrap">
                            <div className="btns">
                                <div className="left-single disabled">31,241.10 sDAI deposited</div>
                                <div className="right-single">
                                    <span>withdraw and claim</span>
                                </div>
                            </div>
                        </div>

                        <div className="btns-wrap">
                            <div className="btns">
                                <div className="left-single disabled zap" ><span>ZAP⚡ in/out</span></div>
                                <div className="right-single">
                                    <span>buy more</span><img className="swap-icon" src={process.env.PUBLIC_URL + "/vaults/swap.svg"} alt="swap" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>);
    }
}

export default NewStaking;