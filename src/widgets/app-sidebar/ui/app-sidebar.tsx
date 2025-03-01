import * as React from 'react';
import { BookOpen, Bot, HelpCircle, LayoutDashboardIcon, Settings2 } from 'lucide-react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@shared/ui';
import { NavMain } from './nav-main';
import { NavOther } from './nav-other';
import { NavUser } from './nav-user';
import { RoutePaths } from '@/app/routes';

const data = {
    user: {
        name: 'scotch',
        email: 'insafgaraev47@gmail.com',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Dashboard',
            url: RoutePaths.HOME_PAGE,
            icon: LayoutDashboardIcon,
            isActive: true,
        },
        {
            title: 'Tranactions',
            url: RoutePaths.TRANACTIONS_PAGE,
            icon: Bot,
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
            name: 'Info',
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
