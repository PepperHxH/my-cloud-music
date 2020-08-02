import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '../../routes';
import Top from './style';

function Home(props) {

    return (
        <div>
            <Top>
                <span className="iconfont menu">&#xe65c;</span>
                <span className="title">WebApp</span>
                <span className="iconfont search">&#xe62b;</span>
            </Top>
            { renderRoutes (routes.routes) } 
        </div>
    )
}

export default React.memo (Home);