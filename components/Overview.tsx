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
    <section id="overview" className="py-20" data-oid="0fyr:ep">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="0b2u8mf"
      >
        <div className="text-center mb-16" data-oid=".ew84tr">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-oid="56t5:vk"
          >
            What is Regolith?
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-oid="knkayu8"
          >
            Regolith is a next-generation regex engine that solves the
            fundamental security and performance issues of traditional regular
            expressions while maintaining full compatibility.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          data-oid=".e24pys"
        >
          <div data-oid="di817qd">
            <Badge variant="destructive" className="mb-4" data-oid="s70o34z">
              <AlertTriangle className="h-3 w-3 mr-1" data-oid="vjofyrf" />
              The Problem
            </Badge>
            <h3 className="text-2xl font-bold mb-4" data-oid="n3baeod">
              Traditional RegExp Vulnerabilities
            </h3>
            <div className="space-y-4 text-muted-foreground" data-oid="ntwbx.n">
              <p data-oid="h0c6z3i">
                Regular expressions in JavaScript can be vulnerable to{" "}
                <strong data-oid="yr2dyqz">
                  ReDoS (Regular Expression Denial of Service)
                </strong>{" "}
                attacks, where carefully crafted input can cause exponential
                time complexity, freezing your application.
              </p>
              <p data-oid="2sgf6k8">
                Patterns like{" "}
                <code
                  className="bg-muted px-2 py-1 rounded text-sm"
                  data-oid="nubv3a:"
                >
                  (a+)+b
                </code>{" "}
                can take exponentially longer to process as input size grows,
                making your app vulnerable to attacks.
              </p>
              <p data-oid="si_0fu_">
                This is a fundamental issue with backtracking-based regex
                engines used in most programming languages.
              </p>
            </div>
          </div>

          <Card
            className="border-destructive/20 bg-destructive/5"
            data-oid=".-3ss5a"
          >
            <CardHeader data-oid="xq5nhhh">
              <CardTitle className="text-destructive" data-oid="7vwvucu">
                Vulnerable Code Example
              </CardTitle>
            </CardHeader>
            <CardContent data-oid=":tzeejg">
              <pre className="text-sm overflow-x-auto" data-oid="k5xz:ro">
                <code data-oid="ns_r.4q">{`// This can freeze your app!
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
          data-oid="ar7wrg-"
        >
          <Card
            className="border-green-500/20 bg-green-500/5 order-2 lg:order-1"
            data-oid="l0ywb7:"
          >
            <CardHeader data-oid="c:67427">
              <CardTitle
                className="text-green-600 dark:text-green-400"
                data-oid="0-q7lm7"
              >
                Regolith Solution
              </CardTitle>
            </CardHeader>
            <CardContent data-oid="x9qjiir">
              <pre className="text-sm overflow-x-auto" data-oid="ms:9obb">
                <code data-oid="px8d2sq">{`import { Regolith } from '@regolithjs/regolith';

// Same pattern, guaranteed safe
const regex = new Regolith('^(a+)+$');
const malicious = 'a'.repeat(30) + 'x';

// Always returns quickly ⚡
regex.test(malicious); // false (fast!)`}</code>
              </pre>
            </CardContent>
          </Card>

          <div className="order-1 lg:order-2" data-oid="l_q6__0">
            <Badge
              variant="default"
              className="mb-4 bg-green-600"
              data-oid="k:3d9tf"
            >
              <Shield className="h-3 w-3 mr-1" data-oid="g02u7-o" />
              The Solution
            </Badge>
            <h3 className="text-2xl font-bold mb-4" data-oid="mh6np37">
              Rust-Powered Security
            </h3>
            <div className="space-y-4 text-muted-foreground" data-oid="p5nmhby">
              <p data-oid="n5-csz7">
                Regolith uses a{" "}
                <strong data-oid="2-701q2">
                  finite automaton-based approach
                </strong>{" "}
                implemented in Rust, guaranteeing linear time complexity
                regardless of input or pattern complexity.
              </p>
              <p data-oid="hu8zues">
                Built on Rust's memory-safe foundation with WebAssembly
                bindings, Regolith provides both security and performance
                without sacrificing compatibility.
              </p>
              <p data-oid=".smgra6">
                Drop-in replacement for RegExp with the same API you already
                know and love.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          data-oid="gvg09.:"
        >
          <div className="text-center" data-oid=":dmq.g1">
            <div
              className="h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4"
              data-oid="zd3.twb"
            >
              <Zap
                className="h-8 w-8 text-blue-600 dark:text-blue-400"
                data-oid="g-uxps-"
              />
            </div>
            <h4 className="font-semibold mb-2" data-oid="i9pjbxh">
              O(n+m) Guaranteed
            </h4>
            <p className="text-sm text-muted-foreground" data-oid="62ci64j">
              Linear time complexity for all operations, no matter how complex
              your patterns
            </p>
          </div>

          <div className="text-center" data-oid="jtc3yrp">
            <div
              className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4"
              data-oid="wj.ovso"
            >
              <Shield
                className="h-8 w-8 text-green-600 dark:text-green-400"
                data-oid="meou6hp"
              />
            </div>
            <h4 className="font-semibold mb-2" data-oid="k-5f8o:">
              ReDoS Immune
            </h4>
            <p className="text-sm text-muted-foreground" data-oid="4tpt00y">
              Complete protection against Regular Expression Denial of Service
              attacks
            </p>
          </div>

          <div className="text-center" data-oid="ogx27pg">
            <div
              className="h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4"
              data-oid="u9gmp1t"
            >
              <Code2
                className="h-8 w-8 text-purple-600 dark:text-purple-400"
                data-oid="5bj:wh2"
              />
            </div>
            <h4 className="font-semibold mb-2" data-oid="7u2o0yt">
              Drop-in Ready
            </h4>
            <p className="text-sm text-muted-foreground" data-oid="xdrr7d-">
              Compatible API means minimal changes to your existing codebase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
