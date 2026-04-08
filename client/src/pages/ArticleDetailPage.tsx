/*
 * Article Detail Page
 * Renders a full article at /news/:id
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Calendar,
  Share2,
} from "lucide-react";
import { articles, categoryIcons } from "@/data/articles";
import CTASection from "@/components/CTASection";
import { toast } from "sonner";

/* ---------- Markdown-like Content Renderer ---------- */
function ArticleContent({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.split("\n\n").map((paragraph, pi) => {
        // Headings (bold-only lines)
        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
          return (
            <h2
              key={pi}
              className="font-serif text-flint font-bold text-xl lg:text-2xl mt-10 mb-4"
            >
              {paragraph.replace(/\*\*/g, "")}
            </h2>
          );
        }

        // Tables
        if (paragraph.startsWith("| ")) {
          const rows = paragraph
            .split("\n")
            .filter((r) => !r.startsWith("|---"));
          const headers = rows[0]
            ?.split("|")
            .filter(Boolean)
            .map((h) => h.trim());
          const dataRows = rows
            .slice(1)
            .map((r) =>
              r
                .split("|")
                .filter(Boolean)
                .map((c) => c.trim())
            );
          return (
            <div key={pi} className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-sandstone/15 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-cream/60">
                    {headers?.map((h, hi) => (
                      <th
                        key={hi}
                        className="text-left px-5 py-3 text-flint font-semibold text-sm"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataRows.map((row, ri) => (
                    <tr
                      key={ri}
                      className="border-t border-sandstone/8"
                    >
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-5 py-3 text-foreground/60 text-sm"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        // Unordered lists
        if (paragraph.startsWith("- ")) {
          const items = paragraph.split("\n").map((l) => l.replace(/^- /, ""));
          return (
            <ul
              key={pi}
              className="space-y-2 my-6 text-foreground/60 text-base leading-relaxed"
            >
              {items.map((item, ii) => {
                const parts = item.split(/(\*\*[^*]+\*\*)/);
                return (
                  <li key={ii} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-leather mt-2.5 shrink-0" />
                    <span>
                      {parts.map((part, partI) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return (
                            <strong key={partI} className="text-flint font-semibold">
                              {part.replace(/\*\*/g, "")}
                            </strong>
                          );
                        }
                        return <span key={partI}>{part}</span>;
                      })}
                    </span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Ordered lists
        if (paragraph.match(/^\d\. /)) {
          const items = paragraph.split("\n");
          return (
            <ol
              key={pi}
              className="space-y-3 my-6 text-foreground/60 text-base leading-relaxed"
            >
              {items.map((item, ii) => {
                const text = item.replace(/^\d+\.\s*/, "");
                const parts = text.split(/(\*\*[^*]+\*\*)/);
                return (
                  <li key={ii} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cream border border-sandstone/15 flex items-center justify-center text-xs font-semibold text-leather shrink-0 mt-0.5">
                      {ii + 1}
                    </span>
                    <span>
                      {parts.map((part, partI) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return (
                            <strong key={partI} className="text-flint font-semibold">
                              {part.replace(/\*\*/g, "")}
                            </strong>
                          );
                        }
                        return <span key={partI}>{part}</span>;
                      })}
                    </span>
                  </li>
                );
              })}
            </ol>
          );
        }

        // Regular paragraphs with bold handling
        const parts = paragraph.split(/(\*\*[^*]+\*\*)/);
        return (
          <p
            key={pi}
            className="text-foreground/60 text-base lg:text-lg leading-relaxed my-4"
          >
            {parts.map((part, partI) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={partI} className="text-flint font-semibold">
                    {part.replace(/\*\*/g, "")}
                  </strong>
                );
              }
              return <span key={partI}>{part}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

/* ---------- Related Articles ---------- */
function RelatedArticles({
  currentId,
  category,
}: {
  currentId: string;
  category: string;
}) {
  const related = articles
    .filter((a) => a.id !== currentId && a.category === category)
    .slice(0, 3);

  if (related.length === 0) {
    const fallback = articles.filter((a) => a.id !== currentId).slice(0, 3);
    return <RelatedGrid articles={fallback} />;
  }

  return <RelatedGrid articles={related} />;
}

function RelatedGrid({
  articles: relatedArticles,
}: {
  articles: typeof articles;
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {relatedArticles.map((article) => {
        const CatIcon = categoryIcons[article.category] || BookOpen;
        return (
          <Link
            key={article.id}
            href={`/news/${article.id}`}
            className="group rounded-xl border border-sandstone/10 bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="px-5 py-2.5 bg-cream/40 flex items-center gap-1.5">
              <CatIcon className="w-3 h-3 text-leather" />
              <span className="text-[10px] font-semibold text-leather uppercase tracking-wider">
                {article.category}
              </span>
            </div>
            <div className="p-5">
              <h4 className="font-serif text-sm font-bold text-flint mb-2 leading-snug group-hover:text-leather transition-colors">
                {article.title}
              </h4>
              <div className="flex items-center gap-3 text-foreground/40 text-[11px]">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

/* ---------- Article Detail Page ---------- */
export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="pt-[72px] min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-foreground/15 mx-auto mb-4" />
          <h1 className="font-serif text-2xl font-bold text-flint mb-2">
            Article Not Found
          </h1>
          <p className="text-foreground/50 mb-6">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-flint text-white text-sm font-medium rounded-full hover:bg-flint-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News & Insights
          </Link>
        </div>
      </div>
    );
  }

  const CatIcon = categoryIcons[article.category] || BookOpen;

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    }
  };

  return (
    <>
      {/* Hero Header */}
      <section className="pt-[72px] bg-flint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-flint via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Link */}
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News & Insights
            </Link>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sandstone/10 border border-sandstone/20 rounded-full text-sandstone text-xs font-medium tracking-wider uppercase mb-5">
              <CatIcon className="w-3.5 h-3.5" />
              {article.category}
            </div>

            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              {article.title}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-5 text-white/45 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime} read
              </span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 hover:text-white/70 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Excerpt as lead paragraph */}
            <p className="text-foreground/70 text-lg lg:text-xl leading-relaxed font-medium mb-8 pb-8 border-b border-sandstone/10">
              {article.excerpt}
            </p>

            {/* Full Content */}
            <ArticleContent content={article.content} />
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 lg:py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-flint mb-8">
            Related <span className="italic text-leather">articles</span>
          </h2>
          <RelatedArticles
            currentId={article.id}
            category={article.category}
          />
        </div>
      </section>

      <CTASection
        headline="Want to stay"
        accentWord="informed?"
        description="Connect with us to receive updates on new articles, market insights, and upcoming investment opportunities."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
