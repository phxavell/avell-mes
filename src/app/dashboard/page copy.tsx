import Image from "next/image";
import { Button } from "@/components/ui/button"; // instalei o component, e logo chamei na minha page.tsx HOME
import { DollarSign, InspectIcon, Percent, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChartOverview from "@/components/chart";
import { Sales } from "@/components/sales";
import { Sidebar } from "@/components/sidebar/index";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <Sidebar /> 
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Produção
              </CardTitle>
              <DollarSign className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>Total de Maquinas na semana</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold"> R$  952</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Outros Clientes
              </CardTitle>
              <Users className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>Total Clientes</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">400</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Produtividade
              </CardTitle>
              <Percent className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>Total Produzido</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">1200 un.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Defeitos
              </CardTitle>
              <InspectIcon className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>periodo de uma semana</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">10</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales/>
      </section>
    </main>
  );
}
