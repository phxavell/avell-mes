import { cn } from "@/lib/utils"

interface AvellLogoProps {
  className?: string
}

export function AvellLogo({ className }: AvellLogoProps) {
  return (
    <div className={cn("relative h-8 w-8", className)} aria-label="Avell Logo">
      {/* 
        Este é um espaço reservado para o logo oficial da Avell.
        Para usar o logo oficial:
        1. Adicione o arquivo de imagem em public/images/avell-logo.png (ou .svg)
        2. Descomente a linha de Image abaixo
      */}
      {/* <Image src="/images/avell-logo.png" alt="Avell Logo" fill className="object-contain" /> */}

      {/* Logo temporário - substitua quando tiver o oficial */}
      <div className="flex h-full w-full items-center justify-center rounded-md bg-primary/10 text-primary font-bold">
        <span>A</span>
      </div>
    </div>
  )
}
