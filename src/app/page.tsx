import Link from "next/link";
import {
  Activity,
  BarChart3,
  Bell,
  Building2,
  Calendar,
  Clock,
  DoorOpen,
  FileBarChart,
  Laptop,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardSummary } from "@/components/dashboard-summary";
import { ProductionOverview } from "@/components/production-overview";
import { RecentActivities } from "@/components/recent-activities";
import { QuickAccess } from "@/components/quick-access";
import { AvellLogo } from "@/components/avell-logo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 sm:h-16 items-center px-4 sm:px-6">
          <MobileMenu />
          <Link href="/" className="flex items-center gap-2 ml-2 md:ml-0">
            <AvellLogo />
            <span className="text-lg sm:text-xl font-bold">
              Avell Production System
            </span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:underline flex items-center gap-1">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/reports"
              className="text-sm font-medium hover:underline flex items-center gap-1">
              <FileBarChart className="h-4 w-4" />
              Relatórios
            </Link>
            <Link
              href="/settings"
              className="text-sm font-medium hover:underline flex items-center gap-1">
              <Settings className="h-4 w-4" />
              Configurações
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="ml-2">
            <Bell className="h-5 w-5" />
            <Badge className="absolute top-1 right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
              3
            </Badge>
            <span className="sr-only">Notificações</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-muted/30">
        <div className="container py-6 sm:py-8 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Painel de Controle
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Gerencie todos os aspectos da produção de laptops Avell
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Hoje</span>
              </Button>
              <Button variant="default" size="sm" className="h-8 gap-1">
                <Activity className="h-3.5 w-3.5" />
                <span>Tempo Real</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <DashboardSummary />

            <Tabs defaultValue="production" className="space-y-4">
              <TabsList>
                <TabsTrigger
                  value="production"
                  className="flex items-center gap-1">
                  <Laptop className="h-4 w-4" />
                  Produção
                </TabsTrigger>
                <TabsTrigger value="access" className="flex items-center gap-1">
                  <DoorOpen className="h-4 w-4" />
                  Acessos
                </TabsTrigger>
                <TabsTrigger value="staff" className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  Funcionários
                </TabsTrigger>
                <TabsTrigger
                  value="facility"
                  className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  Instalações
                </TabsTrigger>
              </TabsList>

              <TabsContent value="production" className="space-y-4">
                <ProductionOverview />
              </TabsContent>

              <TabsContent value="access" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <DoorOpen className="h-5 w-5 text-primary" />
                        Controle de Acesso
                      </CardTitle>
                      <CardDescription>
                        Monitoramento da portaria e catracas
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium">
                              Portaria Principal
                            </span>
                          </div>
                          <Badge variant="outline">Online</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium">
                              Catraca - Entrada
                            </span>
                          </div>
                          <Badge variant="outline">Online</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium">
                              Catraca - Saída
                            </span>
                          </div>
                          <Badge variant="outline">Online</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm font-medium">
                              Portão de Carga
                            </span>
                          </div>
                          <Badge variant="outline">Manutenção</Badge>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Ver Detalhes
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        Sistema ESD
                      </CardTitle>
                      <CardDescription>
                        Controle de Descarga Eletrostática
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            Status do Sistema
                          </span>
                          <Badge className="bg-green-500">Operacional</Badge>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Pulseiras ESD Ativas</span>
                            <span>24/30</span>
                          </div>
                          <Progress value={80} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Tapetes ESD Calibrados</span>
                            <span>18/20</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Estações de Trabalho Protegidas</span>
                            <span>15/15</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Verificar Equipamentos
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="staff" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Controle de Ponto
                      </CardTitle>
                      <CardDescription>
                        Registro de presença dos funcionários
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            Presentes Hoje
                          </span>
                          <span className="font-bold">42/45</span>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Produção</span>
                            <span>18/20</span>
                          </div>
                          <Progress value={90} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Qualidade</span>
                            <span>8/8</span>
                          </div>
                          <Progress value={100} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Administrativo</span>
                            <span>16/17</span>
                          </div>
                          <Progress value={94} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Relatório Completo
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        Segurança do Trabalho
                      </CardTitle>
                      <CardDescription>
                        Monitoramento de EPIs e incidentes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            Status Geral
                          </span>
                          <Badge className="bg-green-500">Seguro</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-muted/50 p-3 rounded-md text-center">
                            <p className="text-2xl font-bold">0</p>
                            <p className="text-xs text-muted-foreground">
                              Incidentes no Mês
                            </p>
                          </div>
                          <div className="bg-muted/50 p-3 rounded-md text-center">
                            <p className="text-2xl font-bold">124</p>
                            <p className="text-xs text-muted-foreground">
                              Dias sem Acidentes
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Conformidade com EPIs</span>
                          <span className="font-medium">98%</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Verificar Conformidade
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="facility" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        Instalações
                      </CardTitle>
                      <CardDescription>
                        Status das instalações da fábrica
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium">
                              Sistema Elétrico
                            </span>
                          </div>
                          <Badge variant="outline">Normal</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium">
                              Ar Condicionado
                            </span>
                          </div>
                          <Badge variant="outline">Normal</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="text-sm font-medium">
                              Iluminação
                            </span>
                          </div>
                          <Badge variant="outline">Normal</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                            <span className="text-sm font-medium">
                              Rede de Dados
                            </span>
                          </div>
                          <Badge variant="outline">Atenção</Badge>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Gerenciar Instalações
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        Consumo de Recursos
                      </CardTitle>
                      <CardDescription>
                        Monitoramento de energia e recursos
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Energia Elétrica</span>
                            <span>78%</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Água</span>
                            <span>45%</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Ar Comprimido</span>
                            <span>62%</span>
                          </div>
                          <Progress value={62} className="h-2" />
                        </div>
                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground">
                            Consumo de energia 12% menor que o mês anterior
                          </p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Relatório de Consumo
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <RecentActivities />
              </div>
              <div>
                <QuickAccess />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
