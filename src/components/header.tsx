'use client'

import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ThemeToggle } from './theme-togle'
import { usePathname } from 'next/navigation'
import { utilityGroups } from '@/lib/utility-groups'

export function Header() {
  const pathname = usePathname()

  const getBreadcrumbData = () => {
    if (pathname === '/') {
      return { group: null, item: null }
    }

    // Primeiro, verifica se está na página principal de um grupo
    const groupPage = utilityGroups.find((group) => group.href === pathname)
    if (groupPage) {
      return { group: groupPage, item: null }
    }

    // Depois, verifica se está em uma página específica de um item
    for (const group of utilityGroups) {
      if (group.items) {
        const item = group.items.find((item) => item.href === pathname)
        if (item) {
          return { group, item }
        }
      }
    }

    return { group: null, item: null }
  }

  const { group, item } = getBreadcrumbData()

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            {group && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {item ? (
                    <BreadcrumbLink href={group.href}>
                      {group.title}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{group.title}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </>
            )}

            {item && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
