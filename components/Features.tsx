import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Zap, Code, Lock, Gauge, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "ReDoS Protection",
      description:
        "Built-in protection against Regular Expression Denial of Service attacks. Your applications stay secure even with complex patterns.",
      color: "text-orange-600 dark:text-orange-400",
      bg: "bg-orange-100 dark:bg-orange-900/30",
    },
    {
      icon: Zap,
      title: "Linear Performance",
      description:
        "Guaranteed O(n+m) worst-case time complexity. No more exponential blowups that can crash your application.",
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900/30",
    },
    {
      icon: Code,
      title: "Drop-in Replacement",
      description:
        "Compatible API with JavaScript's RegExp. Minimal code changes required to upgrade your existing applications.",
      color: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    {
      icon: Lock,
      title: "Rust-Powered Security",
      description:
        "Built on Rust's memory-safe foundation, providing additional security guarantees beyond traditional regex engines.",
      color: "text-orange-700 dark:text-orange-300",
      bg: "bg-orange-50 dark:bg-orange-800/30",
    },
    {
      icon: Gauge,
      title: "Predictable Performance",
      description:
        "Consistent performance characteristics make it ideal for production environments where reliability matters.",
      color: "text-red-700 dark:text-red-300",
      bg: "bg-red-50 dark:bg-red-800/30",
    },
    {
      icon: Users,
      title: "Open Source",
      description:
        "Fully open source and community-driven. Contribute to the future of secure regex processing in JavaScript.",
      color: "text-yellow-700 dark:text-yellow-300",
      bg: "bg-yellow-50 dark:bg-yellow-800/30",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/50" data-oid="n_6mh0r">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="h30tgx6"
      >
        <div className="text-center mb-16" data-oid="iiter6:">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-oid="c8d.0_e"
          >
            Why Choose Regolith?
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-oid="5p039if"
          >
            Built for modern applications that need both security and
            performance
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-oid="2ty556r"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
              data-oid=".q.anjv"
            >
              <CardHeader data-oid="4g3nudd">
                <div
                  className={`h-12 w-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}
                  data-oid="hbl58-3"
                >
                  <feature.icon
                    className={`h-6 w-6 ${feature.color}`}
                    data-oid="j3-b8uv"
                  />
                </div>
                <CardTitle className="text-xl" data-oid="nqodkhc">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent data-oid=".u026ir">
                <CardDescription
                  className="text-base leading-relaxed"
                  data-oid="_9_cyxn"
                >
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
