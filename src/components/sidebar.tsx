'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { utilityGroups } from '@/lib/utility-groups'
import { Heart } from 'lucide-react'

export function Sidebar({ version }: { version: string }) {
  const pathname = usePathname()

  return (
    <SidebarComponent collapsible="offcanvas" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link className="flex justify-between" href="/">
                <span className="text-base font-heading font-bold">
                  utils.reflix
                </span>
                <span aria-label="Application version">v{version}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {utilityGroups.map((group) => (
          <SidebarGroup key={group.title}>
            {group.items ? (
              <>
                <SidebarGroupLabel>
                  <group.icon className="mr-2 h-4 w-4" />
                  {group.title}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuSub>
                        {group.items.map((item) => (
                          <Tooltip key={item.shortTitle}>
                            <TooltipTrigger asChild>
                              <SidebarMenuSubItem key={item.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === item.href}
                                >
                                  <Link href={item.href}>
                                    {item.icon && (
                                      <item.icon className="mr-2 h-4 w-4" />
                                    )}
                                    <span className="sr-only">
                                      {item.shortTitle}
                                    </span>
                                    <span>{item.shortTitle}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            </TooltipTrigger>
                            {item.description && (
                              <TooltipContent side="right">
                                {item.description}
                              </TooltipContent>
                            )}
                          </Tooltip>
                        ))}
                      </SidebarMenuSub>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </>
            ) : (
              <>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === group.href}
                      >
                        <Link href={group.href || '#'}>
                          <group.icon className="mr-2 h-4 w-4" />
                          <span>{group.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </>
            )}
          </SidebarGroup>
        ))}

        {/* Seção de Favoritos */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/favorites'}>
                  <Link href="/favorites">
                    <Heart className="mr-2 h-4 w-4" />
                    <span>Favoritos</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </SidebarComponent>
  )
}
