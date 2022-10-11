import { pageType } from '../contexts/types';
import DashBoard from "./DashBoard";
import Landing from "./Landing";
import Tasks from "./Tasks";

export const pages: pageType[] = [
    {
        id: 1,
        name: 'Dashboard',
        url: '/dashboard',
        component: <DashBoard />
    },
    {
        id: 2,
        name: 'Tasks',
        url: '/tasks',
        component: <Tasks />
    },
    {
        id: 2,
        name: 'Landing',
        url: '/Landing',
        component: <Landing />
    },
    {
        id: 3,
        name: 'Login',
        url: '/login',
        component: <Landing />
    },
    {
        id: 4,
        name: 'Activity',
        url: '/activity',
        component: <Landing />
    },
    {
        id: 5,
        name: 'Signup',
        url: '/signup',
        component: <Landing />
    },
    {
        id: 6,
        name: 'Myprofile',
        url: '/myprofile',
        component: <Tasks />
    },
    {
        id: 7,
        name: 'Teams',
        url: '/teams',
        component: <Tasks />
    },
    {
        id: 8,
        name: 'Help',
        url: '/helpcenter',
        component: <Tasks />
    },
    {
        id: 8,
        name: 'Calendar',
        url: '/calendar',
        component: <Tasks />
    },
];