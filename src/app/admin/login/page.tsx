'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" }
    });
    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      setError('بيانات الدخول غير صحيحة');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-10 p-6 border rounded-lg bg-white">
      <h2 className="mb-4 text-xl font-bold text-center">دخول الإدمن</h2>
      <input value={username} onChange={e => setUsername(e.target.value)}
        placeholder="اسم المستخدم" className="mb-2 w-full p-2 border rounded" required />
      <input value={password} onChange={e => setPassword(e.target.value)}
        placeholder="كلمة المرور" type="password" className="mb-2 w-full p-2 border rounded" required />
      {error && <div className="text-red-500 mb-2 text-center">{error}</div>}
      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2">دخول</button>
    </form>
  );
}
