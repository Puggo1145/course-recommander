"use client"

import { useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    const switchMode = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <Button 
            variant="ghost" 
            size="icon" 
            onClick={switchMode} 
            className="hover:bg-transparent"
        >
            <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
