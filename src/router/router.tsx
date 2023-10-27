import {createHashRouter, Navigate} from 'react-router-dom';
import {Paths} from 'router/paths';
import Root from 'router/pages/Root';
import ErrorPage from 'router/pages/ErrorPage';
import HomePage from 'router/pages/HomePage';
import NoAuthOnlyLayout from 'router/security/NoAuthOnlyLayout';
import SignUpPage from 'router/pages/SignUpPage';
import SignInPage from 'router/pages/SignInPage';
import AuthOnlyLayout from 'router/security/AuthOnlyLayout';
import SnapsPage from 'router/pages/SnapsPage';
import AdminOnlyLayout from 'router/security/AdminOnlyLayout';
import Dashboard from 'router/pages/Dashboard';
import React from 'react';

export const router = createHashRouter([
    {
        path: Paths.root,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: Paths.home,
                element: <HomePage />
            },
            {
                index: true,
                element: <Navigate to={Paths.home} />
            },
            {
                element: <NoAuthOnlyLayout redirectPath={Paths.snaps} />,
                children: [
                    {
                        path: Paths.signUp,
                        element: <SignUpPage />
                    },
                    {
                        path: Paths.signIn,
                        element: <SignInPage />
                    }
                ]
            },
            {
                element: <AuthOnlyLayout redirectPath={Paths.home} />,
                children: [
                    {
                        path: Paths.snaps,
                        element: <SnapsPage />
                    },
                    {
                        element: <AdminOnlyLayout redirectPath={Paths.snaps} />,
                        children: [
                            {
                                path: Paths.dashboard,
                                element: <Dashboard />
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);
