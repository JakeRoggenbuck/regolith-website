import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Zap, Code2 } from "lucide-react";

export function Overview() {
  return (
    <section id="overview" className="py-20" data-oid="3l-ps3v">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="e:ssztq"
      >
        <div className="text-center mb-16" data-oid="qympkj4">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-oid="lgrf_a5"
          >
            What is Regolith?
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-oid="si9jxks"
          >
            Regolith is a next-generation regex engine that solves the
            fundamental security and performance issues of traditional regular
            expressions while maintaining full compatibility.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          data-oid="uy:bu3_"
        >
          <div data-oid="nw9_6lw">
            <Badge variant="destructive" className="mb-4" data-oid="ejisl.p">
              <AlertTriangle className="h-3 w-3 mr-1" data-oid="0satvi9" />
              The Problem
            </Badge>
            <h3 className="text-2xl font-bold mb-4" data-oid="q0bwsxl">
              Traditional RegExp Vulnerabilities
            </h3>
            <div className="space-y-4 text-muted-foreground" data-oid="sq9n-f5">
              <p data-oid="c0wgba7">
                Regular expressions in JavaScript can be vulnerable to{" "}
                <strong data-oid="s825y7r">
                  ReDoS (Regular Expression Denial of Service)
                </strong>{" "}
                attacks, where carefully crafted input can cause exponential
                time complexity, freezing your application.
              </p>
              <p data-oid=":20749k">
                Patterns like{" "}
                <code
                  className="bg-muted px-2 py-1 rounded text-sm"
                  data-oid="ke0-42."
                >
                  (a+)+b
                </code>{" "}
                can take exponentially longer to process as input size grows,
                making your app vulnerable to attacks.
              </p>
              <p data-oid="lj_co.3">
                This is a fundamental issue with backtracking-based regex
                engines used in most programming languages.
              </p>
            </div>
          </div>

          <Card
            className="border-destructive/20 bg-destructive/5"
            data-oid="tsxu:ti"
          >
            <CardHeader data-oid="49_1q_k">
              <CardTitle className="text-destructive" data-oid="9_9:u9n">
                Vulnerable Code Example
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="8asxh7s">
              <pre className="text-sm overflow-x-auto" data-oid="dwz5y.j">
                <code data-oid="xhty9eg">{`// This can freeze your app!
const regex = /^(a+)+$/;
const malicious = 'a'.repeat(30) + 'x';

// Takes exponentially longer
regex.test(malicious); // 💥 Hangs!`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-oid="2atd2pz"
        >
          <Card
            className="border-orange-500/20 bg-orange-500/5 order-2 lg:order-1"
            data-oid="2:ld_uv"
          >
            <CardHeader data-oid=".-0_64k">
              <CardTitle
                className="text-orange-600 dark:text-orange-400"
                data-oid="rn47p8p"
              >
                Regolith Solution
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="-o9word">
              <pre className="text-sm overflow-x-auto" data-oid="awqd-tt">
                <code data-oid="dr3psuz">{`import { Regolith } from '@regolithjs/regolith';

// Same pattern, guaranteed safe
const regex = new Regolith('^(a+)+$');
const malicious = 'a'.repeat(30) + 'x';

// Always returns quickly ⚡
regex.test(malicious); // false (fast!)`}</code>
              </pre>
            </CardContent>
          </Card>

          <div className="order-1 lg:order-2" data-oid="3wl8b3s">
            <Badge
              variant="default"
              className="mb-4 bg-orange-600 hover:bg-orange-600/80"
              data-oid="aw60uav"
            >
              <Shield className="h-3 w-3 mr-1" data-oid="bv8eevg" />
              The Solution
            </Badge>
            <h3 className="text-2xl font-bold mb-4" data-oid="bi9960m">
              Rust-Powered Security
            </h3>
            <div className="space-y-4 text-muted-foreground" data-oid="jncs5f8">
              <p data-oid="nxcklxi">
                Regolith uses a{" "}
                <strong data-oid="j08:86o">
                  finite automaton-based approach
                </strong>{" "}
                implemented in Rust, guaranteeing linear time complexity
                regardless of input or pattern complexity.
              </p>
              <p data-oid="3uwtu98">
                Built on Rust's memory-safe foundation with WebAssembly
                bindings, Regolith provides both security and performance
                without sacrificing compatibility.
              </p>
              <p data-oid="nld6g6q">
                Drop-in replacement for RegExp with the same API you already
                know and love.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="o95ct8e"
        >
          <div className="text-center" data-oid="9xbudfe">
            <div
              className="h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-4"
              data-oid="0r44ji2"
            >
              <Zap
                className="h-8 w-8 text-red-600 dark:text-red-400"
                data-oid="ieye3dd"
              />
            </div>
            <h4 className="font-semibold mb-2" data-oid=".w0eoor">
              O(n) Guaranteed
            </h4>
            <p className="text-sm text-muted-foreground" data-oid="evwa:ct">
              Linear time complexity for all operations, no matter how complex
              your patterns
            </p>
          </div>

          <div className="text-center" data-oid="g1bbyfg">
            <div
              className="h-16 w-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-4"
              data-oid="24if4nr"
            >
              <Shield
                className="h-8 w-8 text-orange-600 dark:text-orange-400"
                data-oid="jwj1m6e"
              />
            </div>
            <h4 className="font-semibold mb-2" data-oid="nbvj6za">
              ReDoS Immune
            </h4>
            <p className="text-sm text-muted-foreground" data-oid="_y3map0">
              Complete protection against Regular Expression Denial of Service
              attacks
            </p>
          </div>

          <div className="text-center" data-oid="8nuklx8">
            <div
              className="h-16 w-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mx-auto mb-4"
              data-oid="u5vt:35"
            >
              <Code2
                className="h-8 w-8 text-yellow-600 dark:text-yellow-400"
                data-oid="od26rn-"
              />
            </div>
            <h4 className="font-semibold mb-2" data-oid="sjn2oyf">
              Drop-in Ready
            </h4>
            <p className="text-sm text-muted-foreground" data-oid="f3h6.e.">
              Compatible API means minimal changes to your existing codebase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
