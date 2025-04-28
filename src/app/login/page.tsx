"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Mail, Lock, Eye, EyeOff, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [computerOn, setComputerOn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setComputerOn(true);

    // Redirecionar após a animação completar
    setTimeout(() => {
      router.push("/");
    }, 700); // 2 segundos para mostrar a animação
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gradient-to-br from-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute -left-40 -top-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="animate-pulse-slow absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="animate-pulse-slow absolute left-1/3 top-1/4 h-60 w-60 rounded-full bg-gray-500/10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md overflow-hidden rounded-xl bg-black/20 p-8 shadow-xl backdrop-blur-xl border border-white/10">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 flex justify-center">
            <div className="flex items-center justify-center font-bold text-2xl text-white">
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white text-black p-2 mr-2 rounded shadow-lg">
                AVELL
              </motion.span>
              <motion.span
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}>
                BestNotebooks
              </motion.span>
            </div>
          </motion.div>

          {/* Computer Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-6 flex justify-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: computerOn ? 1 : 0.3,
                  scale: computerOn ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: computerOn ? 0.5 : 0,
                  times: computerOn ? [0, 0.5, 1] : [0, 0, 0],
                }}
                className="relative z-10">
                <Laptop
                  size={64}
                  className={`${
                    computerOn ? "text-white" : "text-gray-500"
                  } transition-colors duration-300`}
                />
              </motion.div>

              {/* Screen glow effect */}
              {computerOn && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-blue-400 blur-xl rounded-full z-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    top: "12px",
                    left: "12px",
                  }}
                />
              )}

              {/* Power-on particles */}
              {computerOn && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        x: Math.cos((i * Math.PI) / 4) * 50,
                        y: Math.sin((i * Math.PI) / 4) * 50,
                      }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full z-20"
                    />
                  ))}
                </>
              )}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6 text-center text-2xl font-bold text-white">
            Sistema de Gestão
          </motion.h1>

          {/* Form */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="border-gray-700 bg-black/30 pl-10 text-white placeholder:text-gray-400 focus-visible:ring-white/50"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-white">
                  Senha
                </Label>
                <Link
                  href="#"
                  className="text-sm text-slate-300 transition-colors hover:text-white hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-gray-700 bg-black/30 pl-10 text-white placeholder:text-gray-400 focus-visible:ring-white/50"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-white">
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-2">
              <Button
                onClick={handleLogin}
                disabled={isLoggingIn}
                className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:shadow-lg disabled:opacity-70">
                <span className="mr-2">
                  {isLoggingIn ? "Entrando..." : "Entrar"}
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}>
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 text-center text-sm text-slate-300">
            <p>© 2024 Avell BestNotebooks. Todos os direitos reservados.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
