'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calculator, Home } from 'lucide-react'
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

const utilityGroups = [
  {
    title: 'Home',
    icon: Home,
    href: '/',
  },
  {
    title: 'Calculadoras',
    icon: Calculator,
    items: [
      {
        title: 'Calculadora de IMC',
        href: '/tools/imc-calculator',
        icon: Calculator,
      },
    ],
  },
]

export function Sidebar() {
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
              <Link href="/">
                <span className="text-base font-heading font-bold">
                  utils.reflix
                </span>
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
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === item.href}
                            >
                              <Link href={item.href}>
                                {item.icon && (
                                  <item.icon className="mr-2 h-4 w-4" />
                                )}
                                {item.title}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
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
      </SidebarContent>
      <SidebarRail />
    </SidebarComponent>
  )
}
