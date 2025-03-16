import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CircleDollarSign } from "lucide-react";

export function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Ultimos produtos
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>

        <CardDescription>montado nas ultimas 24hs</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com//devfraga.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Sujeito Programador
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              teste@teste.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com//devfraga.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Sujeito Programador
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              teste@teste.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com//devfraga.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Sujeito Programador
            </p>
            <span className="text-[12px] sm:text-sm text-gray-400">
              teste@teste.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
