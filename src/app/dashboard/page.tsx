import { Laptop, Monitor, Package, Settings, PenToolIcon as Tool } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProcessDashboard } from "@/components/process-dashboard"
import { MobileMenu } from "@/components/mobile-menu"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 sm:h-16 items-center px-4 sm:px-6">
          <MobileMenu />
          <h1 className="text-lg sm:text-xl font-bold ml-2 md:ml-0">Dashboard</h1>
        </div>
      </header>
      <div className="flex-1 space-y-2 sm:space-y-4 p-2 sm:p-4 md:p-8 pt-4 md:pt-6">
        <Tabs defaultValue="overview" className="space-y-2 sm:space-y-4">
          <TabsList className="flex overflow-x-auto sm:overflow-visible">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-xs sm:text-sm">
              Análise
            </TabsTrigger>
            <TabsTrigger value="reports" className="text-xs sm:text-sm">
              Relatórios
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs sm:text-sm">
              Notificações
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-2 sm:space-y-4">
            <div className="grid gap-2 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">Montagem</CardTitle>
                  <Tool className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">12</div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">3 máquinas com atraso</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">Instalação OS</CardTitle>
                  <Monitor className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">8</div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">1 máquina com atraso</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">Teste</CardTitle>
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">5</div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">0 máquinas com atraso</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">Revisão</CardTitle>
                  <Laptop className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">7</div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">2 máquinas com atraso</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 sm:pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">Embalagem</CardTitle>
                  <Package className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">4</div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">0 máquinas com atraso</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4">
              <ProcessDashboard />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
