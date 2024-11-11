'use client'; // Diretiva para garantir que o componente seja renderizado no cliente

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para a mensagem de erro
  const router = useRouter(); // Para redirecionamento após login bem-sucedido

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    // Verifique se as credenciais são válidas (simulação de autenticação)
    if (email === "melk@teste" && password === "senha123") {
      // Caso as credenciais sejam corretas, redireciona o usuário para o portal
      router.push("/portal");
    } else {
      // Caso contrário, exibe uma mensagem de erro
      setErrorMessage("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Melk Test</CardTitle>
        <CardDescription>Faça login para continuar.</CardDescription>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Exibe mensagem de erro caso a autenticação falhe */}
          {errorMessage && (
            <div className="text-red-500 mt-4 text-center">
              {errorMessage}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Entrar</Button>
          <Link href="/portal/sign-up" className={buttonVariants({ variant: 'link' })}>
            Criar conta
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}