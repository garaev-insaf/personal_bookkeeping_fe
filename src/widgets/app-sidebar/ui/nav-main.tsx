import { FC } from 'react';

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@shared/ui/sidebar/sidebar';
import { NavMenuType } from '../types/types';

interface INavMainProps {
    items: NavMenuType[];
}

export const NavMain: FC<INavMainProps> = ({ items }) => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item, idx) => (
                    <SidebarMenuItem key={`${item.title}-${idx}`}>
                        <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon />}
                            <a href={item.url}>
                                <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
};
