import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

export default [
    {
        path: "/",
        component: Home,
        routes: [
            {
                path: "/",
                exact: true,
                render: () => (
                    <Redirect to={"/recommend"}/>
                )
            },
            {
                path: "/recommend",
                component: Recommend,
                exact: true
            },
            {
                path: "/singers",
                component: Singers,
                exact: true
            },
            {
                path: "/rank",
                component: Rank,
                exact: true
            }
        ]
    }
]