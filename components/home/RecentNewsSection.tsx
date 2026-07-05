import Link from "next/link";
import { newsItems } from "@/content/news";
import { NewsItem } from "@/components/content/NewsItem";
import { Kicker } from "@/components/editorial/Kicker";
import { Rule } from "@/components/editorial/Rule";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

const recentNews = newsItems.slice(0, 3);

export function RecentNewsSection() {
  return (
    <section
      className="border-t border-border bg-surface py-section md:py-section-lg"
      aria-labelledby="recent-news"
    >
      <Container>
        <Reveal>
          <Kicker className="mb-2">Updates</Kicker>
          <h2
            id="recent-news"
            className="font-display text-section font-medium text-ink"
          >
            Recent News
          </h2>
          <Rule className="mt-5 max-w-xs" />
        </Reveal>
        <div className="mt-8 max-w-3xl">
          {recentNews.map((item) => (
            <Reveal key={item.id}>
              <NewsItem item={item} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/contact" className="text-link text-sm font-medium">
            Get in touch →
          </Link>
        </p>
      </Container>
    </section>
  );
}
