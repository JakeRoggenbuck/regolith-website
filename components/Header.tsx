"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Menu, X, Moon, Sun } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      data-oid="92546df"
    >
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="crozjic"
      >
        <div
          className="flex h-16 items-center justify-between"
          data-oid="6rxakrd"
        >
          <div className="flex items-center space-x-2" data-oid=".i0swjb">
            <div className="flex items-center space-x-2" data-oid="wxegf0p">
              <div
                className="h-8 w-8 rounded bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center"
                data-oid="v--8v1a"
              >
                <span
                  className="text-white font-bold text-sm"
                  data-oid="5.fa8cr"
                >
                  R
                </span>
              </div>
              <span className="text-xl font-bold" data-oid="8rwaz0_">
                Regolith
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            data-oid="0_-4px1"
          >
            <a
              href="#overview"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="bopucqg"
            >
              Overview
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="rdmu1_j"
            >
              Features
            </a>
            <a
              href="#install"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="2lmzwg."
            >
              Install
            </a>
            <a
              href="#examples"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="5z4rzx3"
            >
              Examples
            </a>
            <a
              href="#contribute"
              className="text-sm font-medium hover:text-primary transition-colors"
              data-oid="ilzxdnr"
            >
              Contribute
            </a>
          </nav>

          <div
            className="hidden md:flex items-center space-x-4"
            data-oid="h8fdbgi"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
              data-oid=":mh507_"
            >
              {isDark ? (
                <Sun className="h-4 w-4" data-oid="jc4opt_" />
              ) : (
                <Moon className="h-4 w-4" data-oid="7dib39h" />
              )}
            </Button>
            <Button variant="outline" size="sm" asChild data-oid="0qj4gnb">
              <a
                href="https://github.com/regolithjs/regolith"
                target="_blank"
                rel="noopener noreferrer"
                data-oid="uhxlot2"
              >
                <Github className="h-4 w-4 mr-2" data-oid=":y64tuj" />
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
            data-oid="1s71r8o"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" data-oid="ybg3wv-" />
            ) : (
              <Menu className="h-4 w-4" data-oid="k2:ei.5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4" data-oid="bgjfdis">
            <nav className="flex flex-col space-y-4" data-oid="q47nreh">
              <a
                href="#overview"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="o97f5uf"
              >
                Overview
              </a>
              <a
                href="#features"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="ubx77wt"
              >
                Features
              </a>
              <a
                href="#install"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="3u978bd"
              >
                Install
              </a>
              <a
                href="#examples"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="atcc5mp"
              >
                Examples
              </a>
              <a
                href="#contribute"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-oid="hz:4ky5"
              >
                Contribute
              </a>
              <div
                className="flex items-center space-x-4 pt-4 border-t"
                data-oid="cmv4pf_"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="h-9 w-9"
                  data-oid="odfizex"
                >
                  {isDark ? (
                    <Sun className="h-4 w-4" data-oid="cu9xl-m" />
                  ) : (
                    <Moon className="h-4 w-4" data-oid="oj91sz1" />
                  )}
                </Button>
                <Button variant="outline" size="sm" asChild data-oid="r516f5h">
                  <a
                    href="https://github.com/regolithjs/regolith"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-oid="kbbv1:w"
                  >
                    <Github className="h-4 w-4 mr-2" data-oid="zx5448n" />
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
