"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Clock, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Machine {
  id: string
  name: string
  model: string
  stage: string
  timeElapsed: string
  technician: string
}

interface ProcessStageProps {
  process: string
  machines: Machine[]
}

export function ProcessStage({ process, machines }: ProcessStageProps) {
  const [expandedMachine, setExpandedMachine] = useState<string | null>(null)

  const toggleMachine = (machineId: string) => {
    setExpandedMachine(expandedMachine === machineId ? null : machineId)
  }

  return (
    <div className="grid gap-2 p-2 sm:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
        {machines.map((machine) => (
          <Card key={machine.id} className="overflow-hidden border-l-4 border-l-primary">
            <CardHeader
              className="cursor-pointer flex flex-row items-center justify-between p-2 sm:p-3"
              onClick={() => toggleMachine(machine.id)}
            >
              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-sm sm:text-base">{machine.id}</CardTitle>
                  {expandedMachine === machine.id ? (
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                  )}
                </div>
                <CardDescription className="text-xs">{machine.stage}</CardDescription>
              </div>
            </CardHeader>
            <AnimatePresence>
              {expandedMachine === machine.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CardContent className="p-2 sm:p-3 pt-0">
                    <Separator className="my-2" />
                    <div className="grid gap-2 sm:gap-3">
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold">Detalhes da Máquina</h4>
                        <p className="text-xs sm:text-sm">{machine.name}</p>
                        <p className="text-xs text-muted-foreground">Modelo: {machine.model}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs">{machine.timeElapsed}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs">{machine.technician}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          {process}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {machine.stage}
                        </Badge>
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
  )
}
