"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Menu, X, Moon, Sun } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  // Initialize dark mode state based on document class
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      data-oid="83.:iod"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="_skm904"
      >
        <div
          className="flex h-16 items-center justify-between"
          data-oid="x8igrs4"
        >
          <div className="flex items-center space-x-2" data-oid="w7mujx7">
            <div className="flex items-center space-x-2" data-oid="nt-h8ky">
              <div
                className="h-8 w-8 rounded bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center"
                data-oid="f3.o01a"
              >
                <span
                  className="text-white font-bold text-sm"
                  data-oid="lw4rotv"
                >
                  R
                </span>
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                data-oid="al4xp2j"
              >
                Regolith
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            data-oid="i_yfqmg"
          >
            <a
              href="#overview"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="huan76t"
            >
              Overview
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="j18lh2f"
            >
              Features
            </a>
            <a
              href="#install"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="x7m0_06"
            >
              Install
            </a>
            <a
              href="#examples"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="u.j1.z6"
            >
              Examples
            </a>
            <a
              href="#contribute"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="0iihhit"
            >
              Contribute
            </a>
          </nav>

          <div
            className="hidden md:flex items-center space-x-4"
            data-oid="mk1lhzx"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
              data-oid="3cq:230"
            >
              {isDark ? (
                <Sun className="h-4 w-4" data-oid="elxktfr" />
              ) : (
                <Moon className="h-4 w-4" data-oid="sbgdlpo" />
              )}
            </Button>
            <Button variant="outline" size="sm" asChild data-oid="7zf8:cg">
              <a
                href="https://github.com/jakeroggenbuck/regolith"
                target="_blank"
                rel="noopener noreferrer"
                data-oid="28o4der"
              >
                <Github className="h-4 w-4 mr-2" data-oid="n30njae" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-oid="._raa:x"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" data-oid="-ej4h8a" />
            ) : (
              <Menu className="h-4 w-4" data-oid="6hsj--8" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4" data-oid="kvsit-9">
            <nav className="flex flex-col space-y-4" data-oid="4188mw2">
              <a
                href="#overview"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="w9k93wq"
              >
                Overview
              </a>
              <a
                href="#features"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="-h3ce23"
              >
                Features
              </a>
              <a
                href="#install"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="c:5p923"
              >
                Install
              </a>
              <a
                href="#examples"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="i8.r5w-"
              >
                Examples
              </a>
              <a
                href="#contribute"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="3aodyx4"
              >
                Contribute
              </a>
              <div
                className="flex items-center space-x-4 pt-4 border-t"
                data-oid="hrcnjo9"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="h-9 w-9"
                  data-oid="75i2yyy"
                >
                  {isDark ? (
                    <Sun className="h-4 w-4" data-oid="_sd-fu5" />
                  ) : (
                    <Moon className="h-4 w-4" data-oid="1y3n8dp" />
                  )}
                </Button>
                <Button variant="outline" size="sm" asChild data-oid="7nue00.">
                  <a
                    href="https://github.com/jakeroggenbuck/regolith"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-oid="4b1gk0c"
                  >
                    <Github className="h-4 w-4 mr-2" data-oid="v5:hl_w" />
                    GitHub
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
