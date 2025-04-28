"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Clock, Laptop, Monitor, Package, Settings, PenToolIcon as Tool } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProductionOverview() {
  const [selectedProcess, setSelectedProcess] = useState<string | null>(null)

  const processes = [
    {
      id: "montagem",
      name: "Montagem",
      icon: <Tool className="h-5 w-5" />,
      count: 12,
      progress: 65,
      color: "bg-blue-500",
    },
    {
      id: "instalacao",
      name: "Instalação OS",
      icon: <Monitor className="h-5 w-5" />,
      count: 8,
      progress: 75,
      color: "bg-purple-500",
    },
    {
      id: "teste",
      name: "Teste",
      icon: <Settings className="h-5 w-5" />,
      count: 5,
      progress: 50,
      color: "bg-amber-500",
    },
    {
      id: "revisao",
      name: "Revisão",
      icon: <Laptop className="h-5 w-5" />,
      count: 7,
      progress: 85,
      color: "bg-green-500",
    },
    {
      id: "embalagem",
      name: "Embalagem",
      icon: <Package className="h-5 w-5" />,
      count: 4,
      progress: 95,
      color: "bg-teal-500",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {processes.map((process) => (
          <Card
            key={process.id}
            className={`cursor-pointer transition-all ${selectedProcess === process.id ? "ring-2 ring-primary" : "hover:shadow-md"}`}
            onClick={() => setSelectedProcess((prev) => (prev === process.id ? null : process.id))}
          >
            <CardHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${process.color} bg-opacity-20`}>
                  {process.icon}
                </div>
                <Badge variant="outline">{process.count}</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <CardTitle className="text-sm">{process.name}</CardTitle>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progresso</span>
                  <span>{process.progress}%</span>
                </div>
                <Progress value={process.progress} className="h-1" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProcess && (
        <Card className="border-t-4 border-t-primary animate-in fade-in-50 duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {processes.find((p) => p.id === selectedProcess)?.icon}
              {processes.find((p) => p.id === selectedProcess)?.name}
            </CardTitle>
            <CardDescription>
              Visão detalhada do processo com {processes.find((p) => p.id === selectedProcess)?.count} máquinas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-3 flex flex-col">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">AV-2023-00{item}</span>
                      <Badge variant="outline" className="text-xs">
                        Em andamento
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Avell A62 HYP</div>
                    <div className="mt-3">
                      <Progress value={Math.floor(Math.random() * 100)} className="h-1" />
                    </div>
                    <div className="flex justify-between items-center mt-3 text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>01:23:45</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>3/5 etapas</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Button variant="ghost" size="sm" className="text-xs gap-1">
                  Ver todas as máquinas
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <Button variant="outline" size="sm" onClick={() => setSelectedProcess(null)}>
              Fechar
            </Button>
            <Button size="sm">Ver Detalhes Completos</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
