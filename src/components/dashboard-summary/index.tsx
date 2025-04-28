"use client"

import { Activity, AlertTriangle, CheckCircle2, Laptop, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DashboardSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Produção Diária</CardTitle>
          <Laptop className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">36</div>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-muted-foreground">Meta: 40 unidades</p>
            <span className="text-xs text-green-500 flex items-center">
              <Activity className="h-3 w-3 mr-0.5" />
              90%
            </span>
          </div>
          <Progress value={90} className="h-1 mt-3" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Eficiência</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">94.2%</div>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-muted-foreground">Meta: 95%</p>
            <span className="text-xs text-green-500 flex items-center">
              <Activity className="h-3 w-3 mr-0.5" />
              +2.1%
            </span>
          </div>
          <Progress value={94.2} className="h-1 mt-3" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Atrasos</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">6</div>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-muted-foreground">Total: 36 máquinas</p>
            <span className="text-xs text-yellow-500 flex items-center">
              <Activity className="h-3 w-3 mr-0.5" />
              16.7%
            </span>
          </div>
          <Progress value={16.7} className="h-1 mt-3 bg-muted" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Presença</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42/45</div>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-muted-foreground">Funcionários presentes</p>
            <span className="text-xs text-green-500 flex items-center">
              <Activity className="h-3 w-3 mr-0.5" />
              93.3%
            </span>
          </div>
          <Progress value={93.3} className="h-1 mt-3" />
        </CardContent>
      </Card>
    </div>
  )
}
