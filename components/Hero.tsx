import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Download, BookOpen, Shield, Zap, Code } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 sm:py-32" data-oid="ugmiq44">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="4w:gbku"
      >
        <div className="text-center" data-oid="d5y9f9a">
          <Badge variant="secondary" className="mb-6" data-oid="99xpl.q">
            <Shield className="h-3 w-3 mr-1" data-oid="wnyc2j3" />
            ReDoS-Immune Regex Engine
          </Badge>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            data-oid="raajv2j"
          >
            <span
              className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
              data-oid="_t:rimt"
            >
              Regolith
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            data-oid="vt5.j-4"
          >
            A secure, Rust-backed regex engine for JavaScript and TypeScript.
            Drop-in RegExp replacement with linear worst-case performance.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            data-oid="vs33qp1"
          >
            <Button size="lg" asChild data-oid="98ikjeb">
              <a href="#install" data-oid="zs:qx5c">
                <Download className="h-4 w-4 mr-2" data-oid="lcp2r-8" />
                Get Started
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild data-oid="7ca270f">
              <a
                href="https://github.com/jakeroggenbuck/regolith"
                target="_blank"
                rel="noopener noreferrer"
                data-oid="meiri50"
              >
                <Github className="h-4 w-4 mr-2" data-oid="c3pyx8o" />
                View on GitHub
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild data-oid="87ju4i9">
              <a href="#examples" data-oid="bq1fkud">
                <Code className="h-4 w-4 mr-2" data-oid="n:pc6vx" />
                See Examples
              </a>
            </Button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            data-oid="cn7at_v"
          >
            <div
              className="flex flex-col items-center text-center"
              data-oid="ub63:32"
            >
              <div
                className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4"
                data-oid="kyp3fze"
              >
                <Shield
                  className="h-6 w-6 text-orange-600 dark:text-orange-400"
                  data-oid="tlj4h.q"
                />
              </div>
              <h3 className="font-semibold mb-2" data-oid="1r3c7wg">
                ReDoS Immune
              </h3>
              <p className="text-sm text-muted-foreground" data-oid="su:hrno">
                Protected against Regular Expression Denial of Service attacks
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center"
              data-oid="3p-ly5v"
            >
              <div
                className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4"
                data-oid="s1xvo_b"
              >
                <Zap
                  className="h-6 w-6 text-red-600 dark:text-red-400"
                  data-oid="6b-5t-a"
                />
              </div>
              <h3 className="font-semibold mb-2" data-oid="k.:3ttr">
                Linear Performance
              </h3>
              <p className="text-sm text-muted-foreground" data-oid="ha8n6yu">
                Guaranteed linear worst-case time complexity
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center"
              data-oid="js7l5r4"
            >
              <div
                className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4"
                data-oid="b5htv--"
              >
                <Code
                  className="h-6 w-6 text-yellow-600 dark:text-yellow-400"
                  data-oid="8pbzcjt"
                />
              </div>
              <h3 className="font-semibold mb-2" data-oid="2pjv:mv">
                Drop-in Replacement
              </h3>
              <p className="text-sm text-muted-foreground" data-oid="v9pohuq">
                Compatible with existing RegExp usage patterns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
