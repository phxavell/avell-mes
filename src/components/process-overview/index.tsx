"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Laptop, Monitor, Package, Settings, PenToolIcon as Tool } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProcessStage } from "@/components/process-stage"
import { Badge } from "@/components/ui/badge"

// Dados simulados para demonstração
const processData = {
  montagem: {
    name: "Montagem",
    icon: <Tool className="h-5 w-5" />,
    count: 12,
    machines: [
      {
        id: "AV-2023-001",
        name: "Avell A62 HYP",
        model: "A62",
        stage: "Montagem de Placa-Mãe",
        timeElapsed: "01:23:45",
        technician: "Carlos Silva",
      },
      {
        id: "AV-2023-002",
        name: "Avell G1575 MAX",
        model: "G1575",
        stage: "Montagem de Componentes",
        timeElapsed: "00:45:12",
        technician: "Ana Oliveira",
      },
      {
        id: "AV-2023-003",
        name: "Avell A52 LIV",
        model: "A52",
        stage: "Montagem Final",
        timeElapsed: "02:10:30",
        technician: "Pedro Santos",
      },
    ],
  },
  instalacao: {
    name: "Instalação de Sistema Operacional",
    icon: <Monitor className="h-5 w-5" />,
    count: 8,
    machines: [
      {
        id: "AV-2023-004",
        name: "Avell G1513 FOX",
        model: "G1513",
        stage: "Instalação Windows 11",
        timeElapsed: "00:32:15",
        technician: "Mariana Costa",
      },
      {
        id: "AV-2023-005",
        name: "Avell A70 HYP",
        model: "A70",
        stage: "Instalação Drivers",
        timeElapsed: "00:15:40",
        technician: "Lucas Ferreira",
      },
    ],
  },
  teste: {
    name: "Teste das Funcionalidades",
    icon: <Settings className="h-5 w-5" />,
    count: 5,
    machines: [
      {
        id: "AV-2023-006",
        name: "Avell G1575 MAX",
        model: "G1575",
        stage: "Teste de Hardware",
        timeElapsed: "00:50:20",
        technician: "Juliana Alves",
      },
      {
        id: "AV-2023-007",
        name: "Avell A62 HYP",
        model: "A62",
        stage: "Teste de Software",
        timeElapsed: "00:25:10",
        technician: "Roberto Mendes",
      },
    ],
  },
  revisao: {
    name: "Revisão",
    icon: <Laptop className="h-5 w-5" />,
    count: 7,
    machines: [
      {
        id: "AV-2023-008",
        name: "Avell A52 LIV",
        model: "A52",
        stage: "Inspeção Visual",
        timeElapsed: "00:15:30",
        technician: "Fernanda Lima",
      },
      {
        id: "AV-2023-009",
        name: "Avell G1513 FOX",
        model: "G1513",
        stage: "Verificação Final",
        timeElapsed: "00:20:45",
        technician: "Ricardo Souza",
      },
    ],
  },
  embalagem: {
    name: "Embalagem",
    icon: <Package className="h-5 w-5" />,
    count: 4,
    machines: [
      {
        id: "AV-2023-010",
        name: "Avell A70 HYP",
        model: "A70",
        stage: "Embalagem Primária",
        timeElapsed: "00:10:15",
        technician: "Camila Rocha",
      },
      {
        id: "AV-2023-011",
        name: "Avell G1575 MAX",
        model: "G1575",
        stage: "Embalagem Final",
        timeElapsed: "00:05:30",
        technician: "Diego Almeida",
      },
    ],
  },
}

export function ProcessOverview() {
  const [expandedProcess, setExpandedProcess] = useState<string | null>(null)

  const toggleProcess = (process: string) => {
    setExpandedProcess(expandedProcess === process ? null : process)
  }

  return (
    <div className="grid gap-6">
      <h2 className="text-2xl font-bold">Visão Geral dos Processos</h2>
      <div className="grid gap-4">
        {Object.entries(processData).map(([key, process]) => (
          <Card key={key} className="overflow-hidden">
            <CardHeader
              className="cursor-pointer flex flex-row items-center justify-between p-4"
              onClick={() => toggleProcess(key)}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {process.icon}
                </div>
                <div>
                  <CardTitle className="text-base sm:text-lg">{process.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {process.count} máquinas neste processo
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{process.count}</Badge>
                {expandedProcess === key ? (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            <AnimatePresence>
              {expandedProcess === key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContent className="p-0">
                    <ProcessStage process={key} machines={process.machines} />
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        ))}
      </div>
    </div>
  )
}
