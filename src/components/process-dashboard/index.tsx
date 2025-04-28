"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Laptop,
  Monitor,
  Package,
  Settings,
  PenToolIcon as Tool,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
        progress: 65,
        timeElapsed: "01:23:45",
        technician: "Carlos Silva",
        status: "em andamento",
      },
      {
        id: "AV-2023-002",
        name: "Avell G1575 MAX",
        model: "G1575",
        stage: "Montagem de Componentes",
        progress: 30,
        timeElapsed: "00:45:12",
        technician: "Ana Oliveira",
        status: "em andamento",
      },
      {
        id: "AV-2023-003",
        name: "Avell A52 LIV",
        model: "A52",
        stage: "Montagem Final",
        progress: 90,
        timeElapsed: "02:10:30",
        technician: "Pedro Santos",
        status: "quase concluído",
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
        progress: 45,
        timeElapsed: "00:32:15",
        technician: "Mariana Costa",
        status: "em andamento",
      },
      {
        id: "AV-2023-005",
        name: "Avell A70 HYP",
        model: "A70",
        stage: "Instalação Drivers",
        progress: 75,
        timeElapsed: "00:15:40",
        technician: "Lucas Ferreira",
        status: "quase concluído",
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
        progress: 50,
        timeElapsed: "00:50:20",
        technician: "Juliana Alves",
        status: "em andamento",
      },
      {
        id: "AV-2023-007",
        name: "Avell A62 HYP",
        model: "A62",
        stage: "Teste de Software",
        progress: 25,
        timeElapsed: "00:25:10",
        technician: "Roberto Mendes",
        status: "iniciando",
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
        progress: 60,
        timeElapsed: "00:15:30",
        technician: "Fernanda Lima",
        status: "em andamento",
      },
      {
        id: "AV-2023-009",
        name: "Avell G1513 FOX",
        model: "G1513",
        stage: "Verificação Final",
        progress: 85,
        timeElapsed: "00:20:45",
        technician: "Ricardo Souza",
        status: "quase concluído",
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
        progress: 70,
        timeElapsed: "00:10:15",
        technician: "Camila Rocha",
        status: "em andamento",
      },
      {
        id: "AV-2023-011",
        name: "Avell G1575 MAX",
        model: "G1575",
        stage: "Embalagem Final",
        progress: 95,
        timeElapsed: "00:05:30",
        technician: "Diego Almeida",
        status: "quase concluído",
      },
    ],
  },
};

export function ProcessDashboard() {
  const [selectedProcess, setSelectedProcess] = useState("montagem");
  const [expandedMachine, setExpandedMachine] = useState<string | null>(null);

  const toggleMachine = (machineId: string) => {
    setExpandedMachine(expandedMachine === machineId ? null : machineId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "iniciando":
        return "bg-blue-500";
      case "em andamento":
        return "bg-yellow-500";
      case "quase concluído":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processos de Produção</CardTitle>
        <CardDescription>
          Visualize o status de cada máquina em tempo real
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedProcess} onValueChange={setSelectedProcess}>
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger
              value="montagem"
              className="flex items-center justify-center gap-1 px-1 sm:px-2 py-1 sm:py-2">
              <Tool className="h-4 w-4" />
              <span className="hidden md:inline">Montagem</span>
            </TabsTrigger>
            <TabsTrigger
              value="instalacao"
              className="flex items-center justify-center gap-1 px-1 sm:px-2 py-1 sm:py-2">
              <Monitor className="h-4 w-4" />
              <span className="hidden md:inline">Instalação</span>
            </TabsTrigger>
            <TabsTrigger
              value="teste"
              className="flex items-center justify-center gap-1 px-1 sm:px-2 py-1 sm:py-2">
              <Settings className="h-4 w-4" />
              <span className="hidden md:inline">Teste</span>
            </TabsTrigger>
            <TabsTrigger
              value="revisao"
              className="flex items-center justify-center gap-1 px-1 sm:px-2 py-1 sm:py-2">
              <Laptop className="h-4 w-4" />
              <span className="hidden md:inline">Revisão</span>
            </TabsTrigger>
            <TabsTrigger
              value="embalagem"
              className="flex items-center justify-center gap-1 px-1 sm:px-2 py-1 sm:py-2">
              <Package className="h-4 w-4" />
              <span className="hidden md:inline">Embalagem</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(processData).map(([key, process]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  {process.icon}
                  {process.name}
                  <Badge>{process.count}</Badge>
                </h3>

                <div className="grid gap-4">
                  {process.machines.map((machine) => (
                    <Card key={machine.id} className="overflow-hidden">
                      <CardHeader
                        className="cursor-pointer flex flex-row items-center justify-between p-3 sm:p-4"
                        onClick={() => toggleMachine(machine.id)}>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${getStatusColor(
                                machine.status
                              )}`}
                            />
                            <CardTitle className="text-sm sm:text-base">
                              {machine.id}
                            </CardTitle>
                          </div>
                          <CardDescription className="text-xs">
                            {machine.name} - {machine.stage}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4">
                          <div className="w-16 sm:w-32 hidden sm:block">
                            <Progress
                              value={machine.progress}
                              className="h-2"
                            />
                            <p className="text-xs text-right mt-1">
                              {machine.progress}%
                            </p>
                          </div>
                          {expandedMachine === machine.id ? (
                            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                          )}
                        </div>
                      </CardHeader>
                      <AnimatePresence>
                        {expandedMachine === machine.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}>
                            <CardContent className="p-3 sm:p-4 pt-0">
                              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 mt-3 sm:mt-4">
                                <div>
                                  <h4 className="text-xs sm:text-sm font-semibold mb-2">
                                    Detalhes da Máquina
                                  </h4>
                                  <div className="grid gap-1 sm:gap-2">
                                    <div className="grid grid-cols-2">
                                      <span className="text-xs text-muted-foreground">
                                        Modelo:
                                      </span>
                                      <span className="text-xs">
                                        {machine.model}
                                      </span>
                                    </div>
                                    <div className="grid grid-cols-2">
                                      <span className="text-xs text-muted-foreground">
                                        Tempo Decorrido:
                                      </span>
                                      <span className="text-xs">
                                        {machine.timeElapsed}
                                      </span>
                                    </div>
                                    <div className="grid grid-cols-2">
                                      <span className="text-xs text-muted-foreground">
                                        Técnico:
                                      </span>
                                      <span className="text-xs">
                                        {machine.technician}
                                      </span>
                                    </div>
                                    <div className="grid grid-cols-2">
                                      <span className="text-xs text-muted-foreground">
                                        Status:
                                      </span>
                                      <span className="text-xs capitalize">
                                        {machine.status}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="text-xs sm:text-sm font-semibold mb-2">
                                    Progresso
                                  </h4>
                                  <div className="space-y-2">
                                    <Progress
                                      value={machine.progress}
                                      className="h-2"
                                    />
                                    <p className="text-xs text-right">
                                      {machine.progress}% concluído
                                    </p>
                                  </div>
                                  <div className="block sm:hidden mt-2">
                                    <Badge
                                      className={`text-xs ${getStatusColor(
                                        machine.status
                                      )} bg-opacity-20 text-foreground`}>
                                      {machine.status}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
