"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Clock, Laptop, Settings, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function RecentActivities() {
  const [expanded, setExpanded] = useState(false)

  const activities = [
    {
      id: 1,
      time: "09:45",
      title: "Laptop AV-2023-005 concluído",
      description: "Modelo A70 HYP finalizado e enviado para embalagem",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
      user: "Lucas Ferreira",
      process: "Instalação OS",
    },
    {
      id: 2,
      time: "09:32",
      title: "Alerta de atraso detectado",
      description: "Laptop AV-2023-007 está com atraso de 15 minutos",
      icon: <AlertTriangle className="h-4 w-4 text-amber-500" />,
      user: "Sistema",
      process: "Teste",
    },
    {
      id: 3,
      time: "09:15",
      title: "Novo laptop iniciado",
      description: "Modelo G1575 MAX adicionado à linha de produção",
      icon: <Laptop className="h-4 w-4 text-blue-500" />,
      user: "Carlos Silva",
      process: "Montagem",
    },
    {
      id: 4,
      time: "09:08",
      title: "Manutenção concluída",
      description: "Estação de teste #3 voltou a operar normalmente",
      icon: <Settings className="h-4 w-4 text-purple-500" />,
      user: "Equipe de Manutenção",
      process: "Infraestrutura",
    },
    {
      id: 5,
      time: "08:55",
      title: "Funcionário registrou entrada",
      description: "Pedro Santos registrou entrada na portaria principal",
      icon: <User className="h-4 w-4 text-gray-500" />,
      user: "Sistema de Ponto",
      process: "Acesso",
    },
    {
      id: 6,
      time: "08:45",
      title: "Revisão de qualidade aprovada",
      description: "Laptop AV-2023-009 passou na inspeção final",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
      user: "Fernanda Lima",
      process: "Revisão",
    },
    {
      id: 7,
      time: "08:30",
      title: "Início do turno",
      description: "Turno da manhã iniciado com 42 funcionários",
      icon: <Clock className="h-4 w-4 text-gray-500" />,
      user: "Sistema",
      process: "Operacional",
    },
  ]

  const visibleActivities = expanded ? activities : activities.slice(0, 4)

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Atividades Recentes
        </CardTitle>
        <CardDescription>Últimas atualizações do sistema de produção</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {visibleActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
              <div className="mt-0.5">{activity.icon}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{activity.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs py-0 h-5">
                    {activity.process}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{activity.user}</span>
                </div>
              </div>
            </div>
          ))}

          <Button variant="ghost" size="sm" className="w-full text-xs" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <span className="flex items-center gap-1">
                Mostrar menos <ChevronUp className="h-3 w-3" />
              </span>
            ) : (
              <span className="flex items-center gap-1">
                Mostrar mais <ChevronDown className="h-3 w-3" />
              </span>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
