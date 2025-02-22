import * as React from 'react';
import { BookOpen, Bot, HelpCircle, LayoutDashboardIcon, Settings2 } from 'lucide-react';

import { NavUser } from '@shared/components/app-sidebar/ui/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@shared/ui';
import { NavMain } from './nav-main';
import { NavOther } from './nav-other';

// This is sample data.
const data = {
    user: {
        name: 'scotch',
        email: 'insafgaraev47@gmail.com',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Dashboard',
            url: '/',
            icon: LayoutDashboardIcon,
            isActive: true,
        },
        {
            title: 'Models',
            url: '#',
            icon: Bot,
            items: [
                {
                    title: 'Genesis',
                    url: '#',
                },
                {
                    title: 'Explorer',
                    url: '#',
                },
                {
                    title: 'Quantum',
                    url: '#',
                },
            ],
        },
        {
            title: 'Documentation',
            url: '#',
            icon: BookOpen,
            items: [
                {
                    title: 'Introduction',
                    url: '#',
                },
                {
                    title: 'Get Started',
                    url: '#',
                },
                {
                    title: 'Tutorials',
                    url: '#',
                },
                {
                    title: 'Changelog',
                    url: '#',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'General',
                    url: '#',
                },
                {
                    title: 'Team',
                    url: '#',
                },
                {
                    title: 'Billing',
                    url: '#',
                },
                {
                    title: 'Limits',
                    url: '#',
                },
            ],
        },
    ],
    projects: [
        {
            name: 'Integrations',
            url: '#',
            icon: LayoutDashboardIcon,
        },
        {
            name: 'Settings',
            url: '#',
            icon: Settings2,
        },
        {
            name: 'Settings',
            url: '#',
            icon: HelpCircle,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>LOGO</SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavOther items={data.projects} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
