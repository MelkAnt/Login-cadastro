import * as bcrypt from 'bcrypt'; // ou 'bcryptjs' se preferir

interface User {
  name: string;
  email: string;
  password: string;
}

const users: User[] = []; // Tipagem explícita para o array 'users'

export default async function createAccount(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const hashPassword = await bcrypt.hash(password, 10);

  users.push({
    name,
    email,
    password: hashPassword,
  });

  console.log("Usuário criado:", { name, email });
}

const AuthActions = {
    createAccount,

};

