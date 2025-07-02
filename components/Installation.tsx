import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "./CodeBlock";
import { Package, Terminal, Rocket } from "lucide-react";

export function Installation() {
  const installCommands = {
    npm: "npm install @regolithjs/regolith",
    yarn: "yarn add @regolithjs/regolith",
    pnpm: "pnpm add @regolithjs/regolith",
    bun: "bun add @regolithjs/regolith",
  };

  const quickStart = `import { Regolith } from '@regolithjs/regolith';

// Create a new Regolith instance
const regex = new Regolith('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

// Test against input
const isValid = regex.test('user@example.com');
console.log(isValid); // true

// Find matches
const matches = regex.exec('Contact us at support@regolith.dev');
console.log(matches); // Match details`;

  return (
    <section id="install" className="py-20" data-oid="x6:db4j">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="zfv21jp"
      >
        <div className="text-center mb-16" data-oid="-s79hw:">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-oid="qdq6k6r"
          >
            Get Started
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-oid="qzi78b5"
          >
            Install Regolith and start building secure applications in minutes
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          data-oid="6i2ge-b"
        >
          <Card data-oid="bt.21:9">
            <CardHeader data-oid="nsajfl9">
              <div className="flex items-center space-x-2" data-oid=".xf_-59">
                <Package className="h-5 w-5 text-primary" data-oid="m20nqub" />
                <CardTitle data-oid="gh941xr">Installation</CardTitle>
              </div>
              <CardDescription data-oid="xvemp2s">
                Choose your preferred package manager
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="kak45cw">
              <div data-oid="4wyja4i">
                <h4 className="text-sm font-medium mb-2" data-oid="h5jd.9-">
                  npm
                </h4>
                <CodeBlock code={installCommands.npm} data-oid="8fk4:-q" />
              </div>
              <div data-oid="3it-.80">
                <h4 className="text-sm font-medium mb-2" data-oid=":5csm0q">
                  yarn
                </h4>
                <CodeBlock code={installCommands.yarn} data-oid="_hovfdz" />
              </div>
              <div data-oid="t2_4igq">
                <h4 className="text-sm font-medium mb-2" data-oid="2pfkhbg">
                  pnpm
                </h4>
                <CodeBlock code={installCommands.pnpm} data-oid="u-1vs4p" />
              </div>
              <div data-oid="3c31z8k">
                <h4 className="text-sm font-medium mb-2" data-oid="p-ah0:6">
                  bun
                </h4>
                <CodeBlock code={installCommands.bun} data-oid="iy5fhms" />
              </div>
            </CardContent>
          </Card>

          <Card data-oid="461bk7k">
            <CardHeader data-oid="tigzt1a">
              <div className="flex items-center space-x-2" data-oid="9u:ck:n">
                <Rocket className="h-5 w-5 text-primary" data-oid="m8usr7c" />
                <CardTitle data-oid="h1ff68b">Quick Start</CardTitle>
              </div>
              <CardDescription data-oid="h_a64bv">
                Basic usage example to get you started
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="_:a2m9j">
              <CodeBlock
                code={quickStart}
                language="javascript"
                data-oid="fab1.6x"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
