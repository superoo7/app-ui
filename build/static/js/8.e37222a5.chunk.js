(this["webpackJsonpdeus.finance"]=this["webpackJsonpdeus.finance"]||[]).push([[8],{558:function(e,t,a){"use strict";a.r(t);var n=a(97),s=a.n(n),o=a(136),i=a(78),l=a(79),r=a(81),c=a(80),d=a(0),u=a.n(d),p=a(175),h=a(8),k=a(135),m=a(172),f=(a(173),a(289),a(290)),w=a(294),g=a(291),b=a(134),v=a(292),S=a(11),T=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={isMigPopup:!1,isConnected:!1,showPopup:!1,staking:{name:"",amount:"",contract:"",coin_name:"",isApprove:!0,showApprove:!0},wallet:{address:null},markets:{dea_price:"",market_cap:"",total_locked:"",fully_duilted:""},stakes:{dea_usdc:{name:"dea_usdc",amounts:{dea:0,newdea:0,apy:0,lp:0,pool:0,currLp:0,allowances:0},coin_name:"UNI-V2-DEA-USDC",stakingLink:"0x2e3394d3CdcbaAF2bb85Fe9aB4c79CeF4d28b216",liqLink:"https://app.uniswap.org/#/add/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/0x80aB141F324C3d6F2b18b030f1C4E95d4d658778",rewardRatio:0},deus_eth:{name:"deus_eth",amounts:{dea:0,newdea:0,apy:0,lp:0,pool:0,currLp:0,allowances:0},coin_name:"UNI-V2-DEUS/ETH",stakingLink:"0x19945547eC934bBD8C48fA69bC78152C468CCA7a",liqLink:"https://app.uniswap.org/#/add/ETH/0x3b62F3820e0B035cc4aD602dECe6d796BC325325",rewardRatio:0},deus:{name:"deus",amounts:{dea:0,newdea:0,apy:0,lp:0,pool:0,currLp:0,allowances:0},isDeusLink:!0,coin_name:"DEUS",stakingLink:"0x15Cd5DDB1ca1A2B87B17e4fc728d904A5B43D246",liqLink:"/swap",rewardRatio:0},deus_dea:{name:"deus_dea",amounts:{dea:0,newdea:0,apy:0,lp:0,pool:0,currLp:0,allowances:0},coin_name:"UNI-V2-DEUS/DEA",stakingLink:"0xef753f6da67b765ded917c2273ce07445e86c8d2",liqLink:"https://app.uniswap.org/#/add/0x3b62F3820e0B035cc4aD602dECe6d796BC325325/0x80aB141F324C3d6F2b18b030f1C4E95d4d658778",rewardRatio:0},dea:{name:"dea",amounts:{dea:0,newdea:0,apy:0,lp:0,pool:0,currLp:0,allowances:0},comming_soon:!0,coin_name:"",stakingLink:"0x1B043BbB372452d71503E6603Dd33b93271Bfec0",liqLink:"https://app.uniswap.org/#/swap?outputCurrency=0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",rewardRatio:0}}},n.handleResize=function(){return n.handleScroller()},n.handleScroller=function(){var e=(2300-window.innerWidth)/2;n.scrollRef.current&&(n.scrollRef.current.scrollLeft=e)},n.handleStakeState=function(e){if("receipt"===e||"error"===e)return n.setState({SwapState:null}),void n.notify(e);n.notify(e)},n.notify=function(e){var t=n.state.staking;switch(e){case"waiting":k.b.info("Waiting for Metamask confirmation.",{position:k.b.POSITION.BOTTOM_RIGHT});break;case"transactionHash":k.b.info("Transaction broadcasted.",{position:k.b.POSITION.BOTTOM_RIGHT});break;case"receipt":k.b.success("Transaction Successful.",{position:k.b.POSITION.BOTTOM_RIGHT}),t.isApprove?(t.isApprove=!1,n.setState({staking:t})):n.handlePopup(t.name,!1),n.getTokenAllAmounts(t.name);break;case"connectWallet":k.b.warn("Please Connect Wallet.",{position:k.b.POSITION.BOTTOM_RIGHT});break;case"error":k.b.warn("Transaction Failed.",{position:k.b.POSITION.BOTTOM_RIGHT});break;default:k.b.info("Unhandled Event.",{position:k.b.POSITION.BOTTOM_RIGHT})}},n.initial=function(){console.log("initial called");var e=n.state.stakes;for(var t in e)n.getTokenAllAmounts(t)},n.dontCheckThisToken=function(e){return e.comming_soon||!e},n.getTokenAllAmounts=function(e){var t=n.state.stakes,a=t[e];n.dontCheckThisToken(a)||(console.log("initial called for \t"+e),p.e(a.name).then((function(e){a.amounts.lp=Object(h.a)(e),n.setState({stakes:t}),p.f(a.name).then((function(e){a.amounts.pool="0"===a.amounts.lp||"0"===e?0:a.amounts.lp/e*100,n.setState({stakes:t}),p.d(a.name).then((function(e){a.amounts.dea=parseFloat(e),a.rewardRatio=a.amounts.pool*m.b/100,n.setState({stakes:t})}))}))})),p.g(a.name).then((function(e){a.amounts.currLp=Object(h.a)(e),n.setState({stakes:t})})),p.c(a.name).then((function(e){a.amounts.allowances=Object(h.a)(e),n.setState({stakes:t})})))},n.getMarketAmounts=Object(o.a)(s.a.mark((function e(){var t,a,o,i,l,r,c,d,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getMarketAmounts called"),e.prev=1,t=n.state,a=t.stakes,o=t.markets,e.next=5,fetch("https://app.deus.finance/static-api.json");case 5:return i=e.sent,e.next=8,i.json();case 8:l=e.sent,r=l.apy,c=l.market,e.t0=s.a.keys(r);case 12:if((e.t1=e.t0()).done){e.next=19;break}if(d=e.t1.value,a[d]){e.next=16;break}return e.abrupt("continue",12);case 16:a[d].amounts.apy=parseFloat(r[d]).toFixed(2),e.next=12;break;case 19:for(u in c)o[u]=parseFloat(c[u]);n.setState({stakes:a}),e.next=26;break;case 23:e.prev=23,e.t2=e.catch(1),console.log(" get Market Amounts had some error",e.t2);case 26:case"end":return e.stop()}}),e,null,[[1,23]])}))),n.handleUpdateDEA=function(){return setInterval((function(){var e=n.state.stakes,t=function(t){var a=e[t];if(n.dontCheckThisToken(a))return{v:void 0};p.d(a.name).then((function(t){a.amounts.dea=parseFloat(t),n.setState({stakes:e})}))};for(var a in e){var s=t(a);if("object"===typeof s)return s.v}}),1e3*m.a)},n.handleStake=function(){var e=n.state.staking;console.log(e.amount),p.h(e.name,e.amount,n.handleStakeState)},n.handleApprove=function(){var e=n.state.staking;console.log(e.amount),p.a(e.name,e.amount,n.handleStakeState)},n.handleClaim=function(e){p.i(e,0,n.handleStakeState);var t=n.state.staking;t.name=e,n.setState({staking:t}),console.log("0 handleClaim clicked")},n.isMigToken=function(e){return"ampl_eth"===e||"uni"===e||"snx"===e},n.handleWithdraw=function(e,t){console.log("withdraw"+t);var a=n.state.staking;a.name=e,n.setState({staking:a}),p.i(e,t,n.handleStakeState)},n.handleLP=function(e){console.log(e+" handleLP clicked")},n.isConnected=function(){if(window.ethereum){if(window.ethereum.selectedAddress){var e=n.state.wallet;e.address=window.ethereum.selectedAddress,n.setState({wallet:e,isConnected:!0}),n.handleScroller()}window.ethereum.isMetaMask&&n.setState({isMetamask:!0})}n.initial()},n.setStakingAmount=function(e){var t=n.state.staking;t.amount=e,n.setState({staking:t})},n.handleConnectWallet=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.b((function(){return console.log("connected")}));case 3:t=e.sent,console.log(t?"connected to metamask":""),n.isConnected(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("didnt connect to metamask \t"+e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.showAddress=function(){var e=n.state.wallet.address;return e.substring(0,6)+"..."+e.substring(e.length-4,e.length)},n.handleMaxLP=function(e){var t=n.state.staking;t.amount=e,n.setState({staking:t})},n.handlePopup=function(e,t){console.log(e);var a=n.state.staking,s=n.state.stakes[e];t&&(a.contract=""+s.stakingLink,a.coin_name=s.coin_name,n.getTokenAllAmounts(e),a.isApprove=!(s.amounts.allowances>1e5),a.showApprove=!(s.amounts.allowances>1e5),a.name=e),a.amount="",n.setState({showPopup:t,staking:a})},n.handleMigPupop=function(e){n.setState({isMigPopup:e})},n.scrollRef=u.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.title="DEUS staking",setTimeout((function(){return e.isConnected()}),1e3),setTimeout((function(){return e.handleScroller()}),100),this.handleUpdateDEA(),this.getMarketAmounts(),setInterval((function(){return e.getMarketAmounts()}),4e4),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.state,t=e.isConnected,a=e.stakes,n=e.staking,s=e.showPopup,o=e.isMigPopup,i=e.markets,l=u.a.createElement(S.b,{to:"/pools",className:"pool-link"}," old pools");return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null),u.a.createElement(v.a,{isMigPopup:o,handleMigPupop:this.handleMigPupop}),u.a.createElement(k.a,null),u.a.createElement(g.a,{showPopup:s,staking:n,stakes:a,handlePopup:this.handlePopup,handleMaxLP:this.handleMaxLP,setStakingAmount:this.setStakingAmount,handleApprove:this.handleApprove,handleStake:this.handleStake}),u.a.createElement(f.a,{isConnected:t,handleConnectWallet:this.handleConnectWallet}),u.a.createElement(w.a,{markets:i,stakes:a,isConnected:t,scrollRef:this.scrollRef,handleScroller:this.handleScroller,handleConnectWallet:this.handleConnectWallet,showAddress:this.showAddress,handlePopup:this.handlePopup,handleClaim:this.handleClaim,handleLP:this.handleLP,handleWithdraw:this.handleWithdraw,orders:{tokens:["deus_dea","deus_eth","dea_usdc","deus","EMPTY","dea"],shadows:["blue-200-shadow","yellow-400-shadow","blue-200-shadow","yellow-400-shadow","yellow-300-shadow","blue-200-shadow"]},poolsLink:l}),u.a.createElement(b.a,{classes:"social"}))}}]),a}(d.Component);t.default=T}}]);
//# sourceMappingURL=8.e37222a5.chunk.js.map