"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
      // research site: dark = no class (:root), light = .light class
      value={{ dark: "", light: "light" }}
    >
      {children}
    </NextThemesProvider>
  )
}
