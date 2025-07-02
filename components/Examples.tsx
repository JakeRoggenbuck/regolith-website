import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "./CodeBlock";
import { Badge } from "@/components/ui/badge";

export function Examples() {
  const examples = [
    {
      title: "Email Validation",
      description: "Validate email addresses securely",
      language: "JavaScript",
      code: `import { Regolith } from '@regolithjs/regolith';

const emailRegex = new Regolith(
  '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
);

function validateEmail(email) {
  return emailRegex.test(email);
}

console.log(validateEmail('user@example.com')); // true
console.log(validateEmail('invalid-email'));    // false`,
    },
//    {
//      title: "URL Parsing",
//      description: "Extract URLs from text content",
//      language: "TypeScript",
//      code: `import { Regolith } from '@regolithjs/regolith';
//
//const urlRegex = new Regolith(
//  'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)'
//);
//
//function extractUrls(text: string): string[] {
//  const matches: string[] = [];
//  let match;
//
//  while ((match = urlRegex.exec(text)) !== null) {
//    matches.push(match[0]);
//  }
//
//  return matches;
//}
//
//const text = "Visit https://regolith.dev and https://github.com/regolithjs";
//console.log(extractUrls(text));
//// ['https://regolith.dev', 'https://github.com/regolithjs']`,
//    },
    {
      title: "Input Sanitization",
      description: "Safely validate user input patterns",
      language: "JavaScript",
      code: `import { Regolith } from '@regolithjs/regolith';

// Safe username validation - no ReDoS risk
const usernameRegex = new Regolith('^[a-zA-Z0-9_]{3,20}$');

// Safe password complexity check
const passwordRegex = new Regolith(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@$!%*?&]{8,}$'
);

function validateUserInput(username, password) {
  return {
    validUsername: usernameRegex.test(username),
    validPassword: passwordRegex.test(password)
  };
}

console.log(validateUserInput('john_doe', 'SecurePass123'));
// { validUsername: true, validPassword: true }`,
    },
    {
      title: "Migration from RegExp",
      description: "Easy migration from native RegExp",
      language: "JavaScript",
      code: `// Before: Using native RegExp (vulnerable to ReDoS)
const oldRegex = new RegExp('(a+)+b');

// After: Using Regolith (ReDoS-safe)
import { Regolith } from '@regolithjs/regolith';
const newRegex = new Regolith('(a+)+b');

// Same API, better security
const testString = 'aaaaaaaaaaaaaaaaaaaaaaaab';

// Both work the same way
console.log(oldRegex.test(testString)); // true (but potentially slow)
console.log(newRegex.test(testString));  // true (guaranteed fast)

// Regolith prevents catastrophic backtracking
const maliciousInput = 'a'.repeat(1000) + 'x';
console.log(newRegex.test(maliciousInput)); // false (returns quickly)`,
    },
  ];

  return (
    <section id="examples" className="py-20 bg-muted/50" data-oid="2va_.ph">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="p1yqvm5"
      >
        <div className="text-center mb-16" data-oid="9qn05-n">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-oid="jd67on_"
          >
            Code Examples
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-oid="dg-063y"
          >
            See Regolith in action with real-world use cases
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="cmgs_3g"
        >
          {examples.map((example, index) => (
            <Card key={index} className="border-0 shadow-sm" data-oid="yt6i44s">
              <CardHeader data-oid="7awpb5t">
                <div
                  className="flex items-center justify-between"
                  data-oid="jyew833"
                >
                  <CardTitle className="text-xl" data-oid="dkmvurj">
                    {example.title}
                  </CardTitle>
                  <Badge variant="secondary" data-oid="un3n2ft">
                    {example.language}
                  </Badge>
                </div>
                <CardDescription data-oid="4j_n7i5">
                  {example.description}
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="jysp_xi">
                <CodeBlock
                  code={example.code}
                  language={example.language.toLowerCase()}
                  data-oid="i2cp9m1"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
