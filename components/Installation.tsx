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

// Updated pattern: no anchors
const regex = new Regolith(
  '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
  'g'
);

// Test a single email string
const isValid = regex.test('user@example.com');
console.log(isValid); // true

// Find matches in a larger string
const matches = regex.exec('Contact us at support@example.com');
console.log(matches); // ['support@example.com']`;

  return (
    <section id="install" className="py-20" data-oid="0n9z9o4">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="js8r2kd"
      >
        <div className="text-center mb-16" data-oid="f-wq1et">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-oid=".15y7k6"
          >
            Get Started
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-oid="jt6kr48"
          >
            Install Regolith and start building secure applications in minutes
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          data-oid="hb9evin"
        >
          <Card data-oid="p1::3t5">
            <CardHeader data-oid="2kfhup_">
              <div className="flex items-center space-x-2" data-oid="z22dkvz">
                <Package
                  className="h-5 w-5 text-orange-600 dark:text-orange-400"
                  data-oid="l2:kw7f"
                />
                <CardTitle data-oid="90l3:zb">Installation</CardTitle>
              </div>
              <CardDescription data-oid="gq7bpf0">
                Choose your preferred package manager
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4" data-oid="7z5b9o8">
              <div data-oid="x_e-3.a">
                <h4 className="text-sm font-medium mb-2" data-oid="fdbj9_x">
                  npm
                </h4>
                <CodeBlock code={installCommands.npm} data-oid="dp6gam6" />
              </div>
              <div data-oid="c3xfcul">
                <h4 className="text-sm font-medium mb-2" data-oid="oag9by5">
                  yarn
                </h4>
                <CodeBlock code={installCommands.yarn} data-oid="vs.dt8l" />
              </div>
              <div data-oid="f2a76ru">
                <h4 className="text-sm font-medium mb-2" data-oid="innk945">
                  pnpm
                </h4>
                <CodeBlock code={installCommands.pnpm} data-oid="6if3ig4" />
              </div>
              <div data-oid="pqsgw:5">
                <h4 className="text-sm font-medium mb-2" data-oid="s8osc-p">
                  bun
                </h4>
                <CodeBlock code={installCommands.bun} data-oid="nvj.9-h" />
              </div>
            </CardContent>
          </Card>

          <Card data-oid="2pai:0v">
            <CardHeader data-oid="t7xpr22">
              <div className="flex items-center space-x-2" data-oid="1_6_cb0">
                <Rocket
                  className="h-5 w-5 text-red-600 dark:text-red-400"
                  data-oid="gmq524x"
                />
                <CardTitle data-oid="bw834cq">Quick Start</CardTitle>
              </div>
              <CardDescription data-oid="z2be2z9">
                Basic usage example to get you started
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="qksehg_">
              <CodeBlock
                code={quickStart}
                language="javascript"
                data-oid="ztgqs9j"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
