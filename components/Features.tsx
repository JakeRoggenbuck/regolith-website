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
    },
    {
      icon: Zap,
      title: "Linear Performance",
      description:
        "Guaranteed O(n) worst-case time complexity. No more exponential blowups that can crash your application.",
    },
    {
      icon: Code,
      title: "Drop-in Replacement",
      description:
        "Compatible API with JavaScript's RegExp. Minimal code changes required to upgrade your existing applications.",
    },
    {
      icon: Lock,
      title: "Rust-Powered Security",
      description:
        "Built on Rust's memory-safe foundation, providing additional security guarantees beyond traditional regex engines.",
    },
    {
      icon: Gauge,
      title: "Predictable Performance",
      description:
        "Consistent performance characteristics make it ideal for production environments where reliability matters.",
    },
    {
      icon: Users,
      title: "Open Source",
      description:
        "Fully open source and community-driven. Contribute to the future of secure regex processing in JavaScript.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/50" data-oid="sp2zf2s">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="m6lcktf"
      >
        <div className="text-center mb-16" data-oid="4gvj1f:">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-oid="4zjbmio"
          >
            Why Choose Regolith?
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-oid="7-pu4jv"
          >
            Built for modern applications that need both security and
            performance
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-oid="fh6oyz2"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
              data-oid="1ymmim:"
            >
              <CardHeader data-oid="0a3-x.d">
                <div
                  className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  data-oid="0act92_"
                >
                  <feature.icon
                    className="h-6 w-6 text-primary"
                    data-oid="x5pci:a"
                  />
                </div>
                <CardTitle className="text-xl" data-oid="28tgw6s">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent data-oid="-7ha2wn">
                <CardDescription
                  className="text-base leading-relaxed"
                  data-oid="wyedwyb"
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
