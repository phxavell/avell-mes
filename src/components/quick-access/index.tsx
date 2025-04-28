"use client"

import {
  BarChart3,
  Bell,
  Building2,
  Clock,
  DoorOpen,
  FileBarChart,
  Laptop,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function QuickAccess() {
  const quickLinks = [
    {
      icon: <LayoutDashboard className="h-4 w-4" />,
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <Laptop className="h-4 w-4" />,
      name: "Produção",
      href: "/production",
    },
    {
      icon: <Users className="h-4 w-4" />,
      name: "Funcionários",
      href: "/staff",
    },
    {
      icon: <FileBarChart className="h-4 w-4" />,
      name: "Relatórios",
      href: "/reports",
    },
    {
      icon: <DoorOpen className="h-4 w-4" />,
      name: "Controle de Acesso",
      href: "/access",
    },
    {
      icon: <Clock className="h-4 w-4" />,
      name: "Ponto Eletrônico",
      href: "/timesheet",
    },
    {
      icon: <Zap className="h-4 w-4" />,
      name: "Sistema ESD",
      href: "/esd",
    },
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      name: "Segurança",
      href: "/safety",
    },
    {
      icon: <Building2 className="h-4 w-4" />,
      name: "Instalações",
      href: "/facilities",
    },
    {
      icon: <BarChart3 className="h-4 w-4" />,
      name: "Métricas",
      href: "/metrics",
    },
    {
      icon: <Bell className="h-4 w-4" />,
      name: "Notificações",
      href: "/notifications",
    },
    {
      icon: <Settings className="h-4 w-4" />,
      name: "Configurações",
      href: "/settings",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Acesso Rápido</CardTitle>
        <CardDescription>Navegue para as principais áreas do sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto flex flex-col items-center justify-center py-3 px-1"
              asChild
            >
              <a href={link.href}>
                {link.icon}
                <span className="mt-1 text-xs">{link.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
