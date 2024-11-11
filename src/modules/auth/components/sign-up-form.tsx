'use client'; // Diretiva para tornar o componente um componente de cliente

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importação do useRouter

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Estado para a mensagem
  const router = useRouter(); // Inicialização do useRouter

  const createAccount = (event: React.FormEvent) => {
    event.preventDefault();

    // Simulação de criação de conta
    console.log("Conta criada com sucesso", { name, email, password });

    // Após a criação da conta, altere o estado da mensagem
    setMessage("Conta criada com sucesso!");

    // Redireciona para a página de login após 2 segundos (por exemplo)
    setTimeout(() => {
      router.push("/portal/login");
    }, 1000);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Test</CardTitle>
        <CardDescription>Preencha os campos abaixo para criar conta.</CardDescription>
      </CardHeader>
      <form onSubmit={createAccount}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
          {message && (
            <div className="text-green-500 mt-4 text-center">
              {message}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Criar Conta</Button>
          <Link href="/portal/login" className={buttonVariants({ variant: 'link' })}>
            Já tenho conta
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}