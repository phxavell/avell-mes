"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <div className="flex flex-col gap-6 py-4">
          <div className="px-2">
            <h2 className="text-lg font-bold">Avell Production System</h2>
            <p className="text-sm text-muted-foreground">
              Gerenciamento de Produção
            </p>
          </div>
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="block px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setOpen(false)}>
              Início
            </Link>
            <Link
              href="/dashboard"
              className="block px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setOpen(false)}>
              Dashboard
            </Link>
            <Link
              href="/reports"
              className="block px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setOpen(false)}>
              Relatórios
            </Link>
            <Link
              href="/settings"
              className="block px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
              onClick={() => setOpen(false)}>
              Configurações
            </Link>
          </nav>
          <div className="px-2 pt-4 border-t">
            <h3 className="text-sm font-medium mb-2">Processos</h3>
            <nav className="flex flex-col gap-1">
              <Link
                href="/dashboard?process=montagem"
                className="block px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setOpen(false)}>
                Montagem
              </Link>
              <Link
                href="/dashboard?process=instalacao"
                className="block px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setOpen(false)}>
                Instalação OS
              </Link>
              <Link
                href="/dashboard?process=teste"
                className="block px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setOpen(false)}>
                Teste
              </Link>
              <Link
                href="/dashboard?process=revisao"
                className="block px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setOpen(false)}>
                Revisão
              </Link>
              <Link
                href="/dashboard?process=embalagem"
                className="block px-2 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setOpen(false)}>
                Embalagem
              </Link>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
