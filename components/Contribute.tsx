import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  MessageCircle,
  Bug,
  Heart,
  Code,
  BookOpen,
} from "lucide-react";

export function Contribute() {
  const ways = [
    {
      icon: Code,
      title: "Code Contributions",
      description: "Help improve the core engine, add features, or fix bugs",
      action: "View Issues",
      href: "https://github.com/regolithjs/regolith/issues",
      badge: "Good First Issue",
    },
    {
      icon: Bug,
      title: "Report Bugs",
      description: "Found a bug? Help us improve by reporting it",
      action: "Report Bug",
      href: "https://github.com/regolithjs/regolith/issues/new?template=bug_report.md",
      badge: "Bug Report",
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Help improve our docs, examples, and tutorials",
      action: "Contribute Docs",
      href: "https://github.com/regolithjs/regolith/tree/main/docs",
      badge: "Documentation",
    },
    {
      icon: MessageCircle,
      title: "Community Support",
      description: "Help other users and share your knowledge",
      action: "Join Discussions",
      href: "https://github.com/regolithjs/regolith/discussions",
      badge: "Community",
    },
  ];

  return (
    <section id="contribute" className="py-20" data-oid="jx8hcel">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="v7ls4q8"
      >
        <div className="text-center mb-16" data-oid="khsze2d">
          <Badge variant="secondary" className="mb-4" data-oid="cuq.run">
            <Heart className="h-3 w-3 mr-1" data-oid="lt8ovcl" />
            Open Source
          </Badge>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            data-oid="-3yt_dr"
          >
            Join the Community
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-oid="0q4tx5r"
          >
            Regolith is early-stage and needs contributors. Help us build the
            future of secure regex processing.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          data-oid="zr10mp8"
        >
          {ways.map((way, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
              data-oid="ib4sdz0"
            >
              <CardHeader data-oid="s_v6tbp">
                <div
                  className="flex items-center justify-between"
                  data-oid="ag4ahcp"
                >
                  <div
                    className="flex items-center space-x-3"
                    data-oid="w9thbl7"
                  >
                    <div
                      className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      data-oid="790m:28"
                    >
                      <way.icon
                        className="h-5 w-5 text-primary"
                        data-oid="7_5qvv7"
                      />
                    </div>
                    <CardTitle className="text-lg" data-oid="8ay7u6x">
                      {way.title}
                    </CardTitle>
                  </div>
                  <Badge variant="outline" data-oid="xdxvyi1">
                    {way.badge}
                  </Badge>
                </div>
                <CardDescription className="text-base" data-oid="j_gvbz-">
                  {way.description}
                </CardDescription>
              </CardHeader>
              <CardContent data-oid="jnlsn7i">
                <Button variant="outline" asChild data-oid="9fypkk2">
                  <a
                    href={way.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-oid="a-w:nwa"
                  >
                    {way.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center" data-oid="ww.uzhe">
          <div
            className="bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-2xl p-8 border"
            data-oid="lkm8adi"
          >
            <h3 className="text-2xl font-bold mb-4" data-oid="94fporz">
              Ready to Contribute?
            </h3>
            <p
              className="text-muted-foreground mb-6 max-w-2xl mx-auto"
              data-oid="5qfbjn-"
            >
              Whether you're a Rust expert, JavaScript developer, or
              documentation enthusiast, there's a place for you in the Regolith
              community.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="5tawz2j"
            >
              <Button size="lg" asChild data-oid="68tu9f4">
                <a
                  href="https://github.com/regolithjs/regolith"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-oid="40.3ik4"
                >
                  <Github className="h-4 w-4 mr-2" data-oid="7-6hqyt" />
                  Star on GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild data-oid="kw3v1e-">
                <a
                  href="https://github.com/regolithjs/regolith/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-oid="1:6qo97"
                >
                  <BookOpen className="h-4 w-4 mr-2" data-oid="cn1na5q" />
                  Contributing Guide
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
