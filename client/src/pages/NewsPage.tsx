/*
 * News & Insights Page
 * Filters: All, Investing Basics, Market Insights, Real Estate, Ethical Finance, Deal Updates
 * Each article links to /news/:id for full reading
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  Search,
} from "lucide-react";
import { Link } from "wouter";
import { articles, filterCategories, categoryIcons } from "@/data/articles";
import type { Article } from "@/data/articles";
import CTASection from "@/components/CTASection";

/* ---------- Article Card ---------- */
function ArticleCard({
  article,
  index,
  isInView,
}: {
  article: Article;
  index: number;
  isInView: boolean;
}) {
  const CatIcon = categoryIcons[article.category] || BookOpen;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`rounded-2xl border border-sandstone/10 bg-white overflow-hidden hover:shadow-lg transition-all duration-300 ${
        article.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Category Bar */}
      <div className="px-6 py-3 bg-cream/40 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-leather uppercase tracking-wider">
          <CatIcon className="w-3.5 h-3.5" />
          {article.category}
        </span>
        {article.featured && (
          <span className="text-[10px] font-bold text-leather-light uppercase tracking-widest">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-serif text-lg lg:text-xl font-bold text-flint mb-3 leading-snug">
          {article.title}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-4 text-foreground/40 text-xs mb-4">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime} read
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-foreground/60 text-sm leading-relaxed mb-4">
          {article.excerpt}
        </p>

        <Link
          href={`/news/${article.id}`}
          className="inline-flex items-center gap-1.5 text-leather text-sm font-semibold hover:text-leather-light transition-colors"
        >
          Read Article
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}

/* ---------- News Page ---------- */
export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  const filteredArticles = articles.filter((a) => {
    const matchesCategory =
      activeFilter === "All" || a.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Header */}
      <section className="pt-[72px] bg-flint relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-flint via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-sandstone/10 border border-sandstone/20 rounded-full text-sandstone text-xs font-medium tracking-wider uppercase mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              News & Insights
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Knowledge is Capital
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
              Insights on ethical investing, market analysis, real estate, and
              financial literacy — empowering you to make informed, principled
              investment decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div ref={cardsRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Search + Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-full bg-white text-flint placeholder:text-foreground/30 focus:outline-none focus:border-sandstone/40 transition-colors"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-flint text-white border-flint"
                      : "bg-white text-foreground/60 border-border hover:border-sandstone/40 hover:text-flint"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Count */}
          <p className="text-foreground/40 text-sm mb-6">
            {filteredArticles.length} article
            {filteredArticles.length !== 1 ? "s" : ""}
          </p>

          {/* Article Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredArticles.map((article, i) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={i}
                isInView={isCardsInView}
              />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-foreground/20 mx-auto mb-4" />
              <p className="text-foreground/40 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
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
