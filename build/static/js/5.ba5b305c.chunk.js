(this["webpackJsonpdeus.finance"]=this["webpackJsonpdeus.finance"]||[]).push([[5],{135:function(e,t,n){"use strict";var a=n(0),i=n.n(a),s=n(8);t.a=function(e){var t=e.classes,n=e.items,a=e.footerClass,r=n||[{href:"https://t.me/deusfinance",title:"Telegram"},{href:"https://github.com/deusfinance",title:"Github"},{href:"https://medium.com/@deusfinance",title:"Medium"},{href:"https://twitter.com/deusdao",title:"Twitter"}],o=Object(s.b)()?"flex":"none";return i.a.createElement("footer",{className:a},i.a.createElement("ul",{className:t,style:{fontFamily:"Comfortaa"}},r.reverse().map((function(e,t){return i.a.createElement("li",{key:t}," ",i.a.createElement("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"}," ",e.title," "))}))),i.a.createElement("a",{className:"deo-wrap",style:{display:o},href:"https://etherscan.io/token/0x80ab141f324c3d6f2b18b030f1c4e95d4d658778",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"img/dea.svg",alt:""})," DEA token"))}},183:function(e,t){},185:function(e,t){},193:function(e,t){},194:function(e,t){},200:function(e,t){},201:function(e,t){},202:function(e,t){},204:function(e,t){},226:function(e,t){},227:function(e,t){},236:function(e,t){},237:function(e,t){},257:function(e,t){},259:function(e,t){},260:function(e,t){},262:function(e,t){},265:function(e,t){},271:function(e,t){},274:function(e,t){},276:function(e,t){},284:function(e,t){},285:function(e,t){},555:function(e,t,n){},556:function(e,t,n){},564:function(e,t,n){"use strict";n.r(t);var a=n(97),i=n.n(a),s=n(137),r=n(78),o=n(79),l=n(81),u=n(80),c=n(0),p=n.n(c),d=n(176),m=n.n(d),y="Mainnet";function h(e){return window.ethereum.enable().thne((function(t){window.ethereum&&window.ethereum.selectedAddress&&e()}))}function f(e){var t="string"===typeof e?parseFloat(e).toFixed(18):e.toFixed(18);return m.a.utils.toWei(String(t),"ether")}window.ethereum&&null!=window.ethereum.selectedAddress&&(y=[{"0x1":"Mainnet","0x3":"Ropsten","0x4":"Rinkeby","0x2a":"Kovan"}[window.ethereum.chainId],window.ethereum.selectedAddress][0]),window.ethereum&&(window.ethereum.on("accountsChanged",(function(e){console.log(1)})),window.ethereum.on("chainChanged",(function(e){console.log(2)})));var w=[{inputs:[{internalType:"address",name:"_deusToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"uint256",name:"_tokenAmount",type:"uint256"}],name:"buy",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"etherAmount",type:"uint256"}],name:"calculatePurchaseReturn",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"calculateSaleReturn",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"cw",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"daoShare",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"daoShareScale",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"daoTargetBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"daoWallet",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"deusToken",outputs:[{internalType:"contract DEUSToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"firstReserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"firstSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_firstReserve",type:"uint256"},{internalType:"uint256",name:"_firstSupply",type:"uint256"}],name:"init",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"maxDaoShare",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"dest",type:"address"}],name:"payments",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"reserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"reserveShiftAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"scale",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"_etherAmount",type:"uint256"}],name:"sell",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_maxDaoShare",type:"uint256"},{internalType:"uint256",name:"_daoTargetBalance",type:"uint256"}],name:"setDaoShare",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"_daoWallet",type:"address"}],name:"setDaoWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"version",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"payee",type:"address"}],name:"withdrawPayments",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],b={Rinkeby:"0x6D3459E48C5D106e97FeC08284D56d43b00C2AB4",Mainnet:"0xD77700fC3C78d1Cb3aCb1a9eAC891ff59bC7946D"}[y],v={Rinkeby:"0xf025db474fcf9ba30844e91a54bc4747d4fc7842",Mainnet:"0x3b62f3820e0b035cc4ad602dece6d796bc325325"}[y],T="wss://"+y+".infura.io/ws/v3/cf6ea736e00b4ee4bc43dfdb68f51093",g=new m.a(new m.a.providers.WebsocketProvider(T)),S=new g.eth.Contract(w,b),E=new g.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"BURNER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"CURRENT_POINT_INDEX_SETTER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"MINTER_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentPointIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"uint256",name:"index",type:"uint256"}],name:"getRoleMember",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleMemberCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_currentPointIndex",type:"uint256"}],name:"setCurrentPointIndex",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],v);function O(){return window.ethereum&&window.ethereum.selectedAddress?g.eth.getBalance(window.ethereum.selectedAddress).then((function(e){return m.a.utils.fromWei(e,"ether")})):new Promise((function(e,t){e(0)}))}function M(){return window.ethereum&&window.ethereum.selectedAddress?E.methods.balanceOf(window.ethereum.selectedAddress).call().then((function(e){return m.a.utils.fromWei(e,"ether")})):new Promise((function(e,t){e(0)}))}function k(e){return S.methods.calculatePurchaseReturn(f(e)).call().then((function(e){return m.a.utils.fromWei(e,"ether")}))}function N(e){return new Promise((function(e,t){e(0)}))}function C(e,t,n){return window.ethereum.enable().then((function(a){var i=new m.a(m.a.givenProvider);return(S=new i.eth.Contract(w,b)).methods.buy(f(.95*t)).send({from:window.ethereum.selectedAddress,value:f(e)}).on("transactionHash",(function(){return n("transactionHash")})).on("receipt",(function(){return n("receipt")})).on("error",(function(){return n("error")}))}))}function x(e){return S.methods.calculateSaleReturn(f(e)).call().then((function(e){return m.a.utils.fromWei(e,"ether")}))}function A(e){return new Promise((function(e,t){e(0)}))}function I(e,t,n){return console.log("sell "+e+"\t"+t),window.ethereum.enable().then((function(a){var i=new m.a(m.a.givenProvider);return(S=new i.eth.Contract(w,b)).methods.sell(f(e),f(.95*t)).send({from:window.ethereum.selectedAddress}).on("transactionHash",(function(){return n("transactionHash")})).on("receipt",(function(){S.methods.withdrawPayments(window.ethereum.selectedAddress).send({from:window.ethereum.selectedAddress}).on("transactionHash",(function(){return n("transactionHash")})).on("receipt",(function(){return n("receipt")})).on("error",(function(){return n("error")}))})).on("error",(function(){return n("error")}))}))}function P(){return window.ethereum&&window.ethereum.selectedAddress?S.methods.payments(window.ethereum.selectedAddress).call().then((function(e){return m.a.utils.fromWei(e,"ether")})):new Promise((function(e,t){e(0)}))}function R(e){return window.ethereum.enable().then((function(t){var n=new m.a(m.a.givenProvider);return(S=new n.eth.Contract(w,b)).methods.withdrawPayments(window.ethereum.selectedAddress).send({from:window.ethereum.selectedAddress}).on("transactionHash",(function(){return e("transactionHash")})).on("receipt",(function(){return e("receipt")})).on("error",(function(){return e("error")}))}))}var D=n(136),B=n(135),W=n(20),H=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e.validate=function(e){var t=e||window.event,n=t.keyCode||t.which;n=String.fromCharCode(n);/[0-9\\.]/.test(n)||(t.returnValue=!1,t.preventDefault&&t.preventDefault())},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tokens,n=e.swap,a=e.handleTokenInputChange,i=e.handleMax,s=e.isBuy,r=e.switchOrder,o=e.perDeus,l=e.handleSwap,u=e.SwapState,c=n.from,d=n.to,m=p.a.createElement("div",{className:"tokenbox"},p.a.createElement("div",{className:"balance"},"Balance: ",p.a.createElement("span",null,t[c.name].balance)," "),p.a.createElement("div",{className:"fields"},p.a.createElement("input",{id:"from-coin",type:"number",onKeyPress:this.validate,placeholder:"0.0",value:c.amount,onChange:function(e){return a("from",e.currentTarget.value)}}),s&&p.a.createElement("div",{className:"max-btn ",onClick:function(){return i("from",t[c.name].balance)}},"max"),p.a.createElement("div",{className:"selected-coin"},p.a.createElement("img",{className:"coin-icon",src:"img/coins/eth.svg",alt:"eth"}),p.a.createElement("div",{className:"name-coin"},"ETH")))),y=p.a.createElement("div",{className:"tokenbox"},p.a.createElement("div",{className:"balance",style:{backgroundColor:"#684e7c"}},"Balance: ",p.a.createElement("span",null,t[d.name].balance)," "),p.a.createElement("div",{className:"fields"},p.a.createElement("input",{id:"to-coin",type:"number",onKeyPress:this.validate,placeholder:"0.0",value:d.amount,onChange:function(e){return a("to",e.currentTarget.value)}}),!s&&p.a.createElement("div",{className:"max-btn ",onClick:function(){return i("to",t[d.name].balance)}},"max"),p.a.createElement("div",{className:"selected-coin"},p.a.createElement("img",{className:"deus-icon ",src:"img/Logo.png",alt:"logo"}),p.a.createElement("div",{className:"deus-coin"},"DEUS"))));return p.a.createElement("div",{className:"swap-wrapper"},s?m:y,p.a.createElement("img",{src:"img/mask-arrow.svg",className:"mask-arrow",alt:"arrow",onClick:r,style:{cursor:"pointer"}}),s?y:m,p.a.createElement("div",{className:"price-wrapper"},p.a.createElement("p",null,"Price"),p.a.createElement("div",{className:"perDeus"},p.a.createElement("div",{className:"dollarPerDeus"},o&&parseFloat(o).toFixed(4)," ETH per DEUS"),p.a.createElement("img",{src:"img/perDeus.svg",onClick:r,style:{marginRight:"5px",width:"23px",cursor:"pointer"},alt:"perDeus"}))),p.a.createElement("div",{className:"swap-btn",onClick:l},u?p.a.createElement(W.CircleToBlockLoading,{color:"#371f43",size:"small"}):"Swap"))}}]),n}(c.Component),_=n(8),j=function(e){var t=e.address,n=e.isMetamask,a=e.withdrawAmount,i=e.handleClaim,s=e.handleConnectWallet,r=e.showAddress,o=Object(_.b)()?"Install MetaMask Wallet":"Open MetaMask",l=Object(_.b)()?"swaping":"swaping hcenter";return p.a.createElement("div",{className:"connect "},p.a.createElement("div",{className:l},t&&p.a.createElement("div",{className:"vertical-center connect-btn connected"},r()),!t&&!n&&p.a.createElement("a",{href:"https://metamask.app.link/dapp/deus.finance/swap/",className:"vertical-center connect-btn notconnect"},o),!t&&n&&p.a.createElement("div",{className:"vertical-center connect-btn notconnect",onClick:s},"Connect Wallet"),a>0&&p.a.createElement("div",{className:"claim"},p.a.createElement("div",{className:"eth-amount"},a," ETH claimable."),p.a.createElement("div",{className:"claim-btn",onClick:i},"claim now"))),p.a.createElement("div",{className:"clear-fix"}),p.a.createElement("div",{className:"ctimer"}))},U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e.notify=function(t){switch(t){case"waiting":D.b.info("Waiting for Metamask confirmation.",{position:D.b.POSITION.BOTTOM_RIGHT});break;case"transactionHash":D.b.info("Transaction broadcasted.",{position:D.b.POSITION.BOTTOM_RIGHT});break;case"receipt":D.b.success("Transaction Successful.",{position:D.b.POSITION.BOTTOM_RIGHT}),e.initialAmounts();break;case"connectWallet":D.b.warn("Please Connect Wallet.",{position:D.b.POSITION.BOTTOM_RIGHT});break;case"error":D.b.warn("Transaction Failed.",{position:D.b.POSITION.BOTTOM_RIGHT});break;default:D.b.info("Unhandled Event.",{position:D.b.POSITION.BOTTOM_RIGHT})}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.mainState,t=e.perDeus,n=e.swap,a=e.isBuy,i=e.isEthUnit,s=e.ethInUsd,r=e.isMetamask,o=e.wallet,l=e.showPopup,u=o.address,c=o.withdrawAmount,d=this.props.mainState,m=d.SwapState,y=d.tokens,h=this.props,f=h.handleTokenInputChange,w=h.switchOrder,b=h.handleSwap,v=h.handleUnit,T=h.handleMax,g=h.handleConnectWallet,S=h.showAddress,E=h.handleClaim,O=h.handleApproveSell,M=parseFloat(t).toFixed(4),k=parseFloat(t*s).toFixed(4),N="priceBar-xl",C="priceView-xl";return window.innerWidth<1261&&(N="priceBar-lg",C="priceView-lg"),p.a.createElement(p.a.Fragment,null,p.a.createElement(D.a,{style:{width:"400px"}}),p.a.createElement("div",{className:"ex-wrapper"},p.a.createElement(j,{address:u,isMetamask:r,withdrawAmount:c,handleClaim:E,handleConnectWallet:g,showAddress:S}),p.a.createElement("div",{className:"container"},l&&p.a.createElement("div",{className:"sell-popup"},p.a.createElement("div",{className:"ptitle"},"Important Notice:"),p.a.createElement("div",{className:"pdetails"}," TWO transactions will need your approval "),p.a.createElement("div",{className:"pdetails-steps"}," 1. Selling DEUS to ETH. ",p.a.createElement("br",null)," 2. Withdrawing ETH to your Wallet. ",p.a.createElement("br",null),p.a.createElement("br",null),"Or come back and claim later. "),p.a.createElement("div",{className:"btn-wrp"},p.a.createElement("div",{className:"understood",onClick:O},"  Roger that, Lafa!"))),p.a.createElement("div",{className:"wrapper-content"},p.a.createElement("div",{className:"content"},p.a.createElement("img",{className:"cricleTop",src:"img/cTop.svg",alt:"ctop"}),p.a.createElement("img",{className:"cricleDown",src:"img/cDown.svg",alt:"cdown"}),p.a.createElement("img",{className:"rectMovable ".concat(N),src:"img/rect-movable.svg",alt:"rect"}),p.a.createElement("div",{className:"unit-btn",onClick:v},i?"Show Dollar Price":"Show ETH Price"),p.a.createElement("div",{className:"priceView ".concat(C)},t&&(i?M+" ETH":k+" $")),p.a.createElement("div",{className:"title-wrapper"},p.a.createElement("div",{className:"main-title"},p.a.createElement("span",{className:"deus-name"},"DEUS")," Swap")),p.a.createElement(H,{tokens:y,swap:n,handleTokenInputChange:f,handleMax:T,isBuy:a,switchOrder:w,perDeus:t,handleSwap:b,SwapState:m}))))))}}]),n}(c.Component),F=(n(173),n(555),n(556),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.mainState,t=e.perDeus,n=e.swap,a=e.isBuy,i=e.isMetamask,s=e.wallet,r=e.showPopup,o=s.address,l=s.withdrawAmount,u=this.props.mainState,c=u.SwapState,d=u.tokens,m=this.props,y=m.handleTokenInputChange,h=m.switchOrder,f=m.handleSwap,w=m.handleMax,b=m.handleConnectWallet,v=m.showAddress,T=m.handleClaim,g=m.handleApproveSell,S=window.innerHeight,E=S>600?(S-600)/3:0;return p.a.createElement("div",{className:"exm-wrapper"},p.a.createElement("div",{className:"exchange-mobile"},p.a.createElement("div",{className:"counter",style:{marginBottom:"".concat(E,"px")}},p.a.createElement(j,{address:o,isMetamask:i,withdrawAmount:l,handleClaim:T,handleConnectWallet:b,showAddress:v}),p.a.createElement("div",{className:"clear-fix"})),p.a.createElement("div",{className:"container",style:{padding:0}},r&&p.a.createElement("div",{className:"sell-popup-mob"},p.a.createElement("div",{className:"ptitle"},"Important Notice:"),p.a.createElement("div",{className:"pdetails"}," TWO transactions will need your approval "),p.a.createElement("div",{className:"pdetails-steps"}," 1. Selling DEUS to ETH. ",p.a.createElement("br",null)," 2. Withdrawing ETH to your Wallet. "),p.a.createElement("div",{className:"btn-wrp"},p.a.createElement("div",{className:"understood",onClick:g},"  Roger that, Lafa!"))),p.a.createElement(H,{tokens:d,swap:n,handleTokenInputChange:y,handleMax:w,isBuy:a,switchOrder:h,perDeus:t,handleSwap:f,SwapState:c,handleApproveSell:g,showPopup:r}))))}}]),n}(c.Component)),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={swap:{from:{name:"ethereum",amount:""},to:{name:"deus",amount:""}},tokens:{ethereum:{balance:"0"},deus:{balance:"0"}},wallet:{withdrawAmount:0,address:null},isEthUnit:!0,isMetamask:!1,SwapState:null,perDeus:"",ethInUsd:"",isBuy:!0,showPopup:!1,typingTimeout:0},e.getEthToUsdt=Object(s.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,e.setState({ethInUsd:a.ethereum.usd}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("get dollar price had some error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])}))),e.getPerDeus=function(){e.state.isBuy?setTimeout((function(){return k(1).then((function(t){console.log(t),e.setState({perDeus:1/t})}))}),1e3):setTimeout((function(){return x(1).then((function(t){e.setState({perDeus:t})}))}),1e3)},e.setCurrentAmount=function(t,n){var a=e.state.swap;n=e.getStayledNumber(n),a.from.name===t?a.from.amount=n:a.to.amount=n,e.setState({swap:a})},e.setBalance=function(t,n){var a=e.state.tokens;a[t].balance=n,e.setState({tokens:a})},e.initialAmounts=function(){O().then((function(t){e.setBalance("ethereum",t),e.isConnected()})),M().then((function(t){e.setBalance("deus",t)})),P().then((function(t){console.log(t);var n=e.state.wallet;n.withdrawAmount=t,e.setState({wallet:n})})),e.getEthToUsdt(),e.getPerDeus()},e.isConnected=function(){if(window.ethereum){if(window.ethereum.selectedAddress){var t=e.state.wallet;t.address=window.ethereum.selectedAddress,e.setState({wallet:t})}window.ethereum.isMetaMask&&e.setState({isMetamask:!0})}},e.handleConnectWallet=Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h();case 3:n=t.sent,console.log(n?"connected to metamask":""),e.initialAmounts(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("didnt connect to metamask");case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.getStayledNumber=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,n=e.toString(),a=n.indexOf(".");return-1===a?n:a>t-2?n.substring(0,a):n.substring(0,a).concat(n.substring(a,t))},e.switchOrder=function(){var t=e.state,n=t.isBuy,a=t.swap;a.from.amount="",a.to.amount="",e.setState({isBuy:!n,swap:a}),setTimeout((function(){return e.getPerDeus(!n)}),500)},e.handleMax=function(t,n){var a=e.state.swap;a[t].amount=e.getStayledNumber(n),e.setState(a),e.getAmountFromSwap(t,n)},e.handleTokenInputChange=function(t,n){e.handleTyping();var a=e.state.swap;return""===n?(a.from.amount="",a.to.amount="",void e.setState({swap:a})):"00"===n?(a.from.amount="0",a.to.amount="0",void e.setState({swap:a})):(a[t].amount=n,e.setState({swap:a}),void e.getAmountFromSwap(t,n))},e.getAmountFromSwap=function(t,n){var a=e.state,i=a.isBuy,s=a.swap;console.log(t,n),e.setState({typingTimeout:setTimeout((function(){i?"deus"===s[t].name?N().then((function(t){e.setCurrentAmount("ethereum",t)})):k(n).then((function(t){e.setCurrentAmount("deus",t)})):"deus"===s[t].name?x(n).then((function(t){e.setCurrentAmount("ethereum",t)})):A().then((function(t){e.setCurrentAmount("deus",t)}))}),500)})},e.handleTyping=function(){e.state.typingTimeout&&clearTimeout(e.state.typingTimeout)},e.handleClaim=Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(e.handleSwapState);case 3:n=t.sent,console.log(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error claim");case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.handleSwapState=function(t){return-1===["waiting","transactionHash","receipt","confirmation","error"].indexOf(t)?(console.log(t),void e.setState({SwapState:null})):"receipt"===t||"error"===t?(e.setState({SwapState:null}),void e.notify(t)):(e.notify(t),void e.setState({SwapState:t}))},e.showAddress=function(){var t=e.state.wallet.address;return t.substring(0,6)+"..."+t.substring(t.length-4,t.length)},e.notify=function(t){switch(t){case"waiting":D.b.info("Waiting for Metamask confirmation.",{position:D.b.POSITION.BOTTOM_RIGHT});break;case"transactionHash":D.b.info("Transaction broadcasted.",{position:D.b.POSITION.BOTTOM_RIGHT});break;case"receipt":D.b.success("Transaction Successful.",{position:D.b.POSITION.BOTTOM_RIGHT}),e.initialAmounts();break;case"connectWallet":D.b.warn("Please Connect Wallet.",{position:D.b.POSITION.BOTTOM_RIGHT});break;case"error":D.b.warn("Transaction Failed.",{position:D.b.POSITION.BOTTOM_RIGHT});break;default:D.b.info("Unhandled Event.",{position:D.b.POSITION.BOTTOM_RIGHT})}},e.handleSwap=function(){var t=e.state,n=t.swap,a=t.isBuy,i=e.state.wallet.address;"0"!==n.from.amount&&""!==n.from.amount&&(i?a?e.handleBuy():e.handlePopup(!0):e.notify("connectWallet"))},e.handleBuy=Object(s.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.swap,e.handleSwapState("waiting"),t.prev=2,t.next=5,C(n.from.amount,n.to.amount,e.handleSwapState);case 5:a=t.sent,console.log(a?"transaction done":""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log("transaction didnt done",t.t0);case 12:n.from.amount="",n.to.amount="",e.setState({swap:n});case 15:case"end":return t.stop()}}),t,null,[[2,9]])}))),e.handleSell=Object(s.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.state.swap,e.handleSwapState("waiting");try{a=I(n.to.amount,n.from.amount,e.handleSwapState),console.log(a?"transaction done":"")}catch(i){console.log("transaction didnt done",i)}n.from.amount="",n.to.amount="",e.setState({swap:n});case 6:case"end":return t.stop()}}),t)}))),e.handlePopup=function(t){e.setState({showPopup:t})},e.handleUnit=function(){var t=e.state.isEthUnit;e.setState({isEthUnit:!t})},e.handleApproveSell=function(){e.handlePopup(!1),e.handleSell()},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.title="DEUS swap",setTimeout((function(){return e.initialAmounts()}),500)}},{key:"render",value:function(){var e="";window.innerHeight>598&&(e="footer-wrp");return p.a.createElement("div",null,Object(_.b)()&&p.a.createElement(U,{mainState:this.state,handleMax:this.handleMax,handleTokenInputChange:this.handleTokenInputChange,switchOrder:this.switchOrder,handleSwap:this.handleSwap,handleUnit:this.handleUnit,handleApproveSell:this.handleApproveSell,showAddress:this.showAddress,handleClaim:this.handleClaim,handleConnectWallet:this.handleConnectWallet}),!Object(_.b)()&&p.a.createElement(F,{mainState:this.state,handleMax:this.handleMax,handleTokenInputChange:this.handleTokenInputChange,switchOrder:this.switchOrder,handleSwap:this.handleSwap,handleUnit:this.handleUnit,handleApproveSell:this.handleApproveSell,showAddress:this.showAddress,handleClaim:this.handleClaim,handleConnectWallet:this.handleConnectWallet}),Object(_.b)()&&p.a.createElement(B.a,{classes:"social"}),!Object(_.b)()&&p.a.createElement(B.a,{classes:"msocial",items:[{href:"https://github.com/deusfinance",title:"Github"},{href:"https://t.me/deusfinance",title:"Telegram"}],footerClass:e}))}}]),n}(c.Component);t.default=G}}]);
//# sourceMappingURL=5.ba5b305c.chunk.js.map