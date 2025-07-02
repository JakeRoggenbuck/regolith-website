import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Download, BookOpen, Shield, Zap, Code } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 sm:py-32" data-oid="z9pe.2j">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="31g_ef1"
      >
        <div className="text-center" data-oid="h6cii28">
          <Badge variant="secondary" className="mb-6" data-oid="wz98pop">
            <Shield className="h-3 w-3 mr-1" data-oid="ll-iejt" />
            ReDoS-Immune Regex Engine
          </Badge>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            data-oid="x8y8itf"
          >
            <span
              className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
              data-oid="yh08ovq"
            >
              Regolith
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            data-oid="g-z8h2o"
          >
            A secure, Rust-backed regex engine for JavaScript and TypeScript.
            Drop-in RegExp replacement with linear worst-case performance.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            data-oid="5j8m51i"
          >
            <Button size="lg" asChild data-oid="u6guz7.">
              <a href="#install" data-oid="oh8jpyd">
                <Download className="h-4 w-4 mr-2" data-oid=".7jsuc6" />
                Get Started
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild data-oid="6q2no_:">
              <a
                href="https://github.com/jakeroggenbuck/regolith"
                target="_blank"
                rel="noopener noreferrer"
                data-oid="u0mi243"
              >
                <Github className="h-4 w-4 mr-2" data-oid="oo-i.3q" />
                View on GitHub
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild data-oid="gv4x-pg">
              <a href="#examples" data-oid="oa7t29j">
                <Code className="h-4 w-4 mr-2" data-oid="lg0awtn" />
                See Examples
              </a>
            </Button>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            data-oid="a3l89p-"
          >
            <div
              className="flex flex-col items-center text-center"
              data-oid="t99pk1x"
            >
              <div
                className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4"
                data-oid="1wuih0f"
              >
                <Shield
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  data-oid="_d.nqn_"
                />
              </div>
              <h3 className="font-semibold mb-2" data-oid="8tz_uch">
                ReDoS Immune
              </h3>
              <p className="text-sm text-muted-foreground" data-oid="x06c-21">
                Protected against Regular Expression Denial of Service attacks
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center"
              data-oid="k60qk-."
            >
              <div
                className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4"
                data-oid="sxlt_kb"
              >
                <Zap
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  data-oid="-:n9yah"
                />
              </div>
              <h3 className="font-semibold mb-2" data-oid="oqt.gwl">
                Linear Performance
              </h3>
              <p className="text-sm text-muted-foreground" data-oid="9m-isoy">
                Guaranteed linear worst-case time complexity
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center"
              data-oid="g-20wpf"
            >
              <div
                className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4"
                data-oid="yel5539"
              >
                <Code
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  data-oid="43ty94r"
                />
              </div>
              <h3 className="font-semibold mb-2" data-oid="6ac7r-c">
                Drop-in Replacement
              </h3>
              <p className="text-sm text-muted-foreground" data-oid="hl3__pk">
                Compatible with existing RegExp usage patterns
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
