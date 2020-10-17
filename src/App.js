import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
// import Home from './components/Home';
// import NotFound from './components/NotFound';
// import PoolsContainer from './components/Pools/PoolsContainer';
// import SwapContainer from './components/Swap/SwapContainer';
// import SecurityMobile from './components/SecurityMobile';
import Navbar from './components/common/Navbar';
import { isDesktop } from './utils/utils';
import './styles/scss/style.css';
import { LoopCircleLoading } from 'react-loadingg';


const PoolsContainer = React.lazy(() => import('./components/Pools/PoolsContainer'));
const SecurityMobile = React.lazy(() => import('./components/SecurityMobile'));
const SwapContainer = React.lazy(() => import('./components/Swap/SwapContainer'));
const NotFound = React.lazy(() => import('./components/NotFound'));


function App() {

  return (<>
    <Navbar />
    <Suspense fallback={<LoopCircleLoading></LoopCircleLoading>}>
      <Switch>
        <Route exact path="/pools" component={isDesktop() ? PoolsContainer : SecurityMobile} />
        <Route exact path="/swap" component={SwapContainer} />
        <Route path="/not-found" component={NotFound} />
        <Redirect exact from="/" to="/pools" />
        <Redirect to="not-found" />
      </Switch>
    </Suspense>

  </>);
}

export default App;
