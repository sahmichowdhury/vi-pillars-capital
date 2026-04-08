/*
 * News & Insights Page
 * Filters: All, Investing Basics, Market Insights, Real Estate, Ethical Finance, Deal Updates
 * Each article: title, excerpt, date, read time, category, featured image placeholder
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  TrendingUp,
  Building2,
  Scale,
  Lightbulb,
  Newspaper,
  Search,
} from "lucide-react";
import CTASection from "@/components/CTASection";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  icon: React.ElementType;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: "what-is-an-spv",
    title: "What Is an SPV? A Beginner's Guide to Special Purpose Vehicles",
    excerpt:
      "Special Purpose Vehicles (SPVs) are one of the most powerful structures in modern investing. Learn how they work, why they matter, and how they protect both investors and deal sponsors.",
    content: `A Special Purpose Vehicle (SPV) is a legal entity — typically an LLC — created for a single, specific investment purpose. Think of it as a dedicated container that holds one asset or deal, completely separate from the sponsor's other business activities.

**Why SPVs Matter for Investors**

SPVs provide several critical advantages. First, they offer liability protection: your exposure is limited to the capital you invest in that specific vehicle. If something goes wrong with one deal, it doesn't affect your other investments. Second, SPVs create transparency. Each vehicle has its own operating agreement, financial statements, and reporting — so you always know exactly where your money is and how it's performing.

**How VI Pillars Capital Uses SPVs**

At VI Pillars Capital, every deal is structured through its own SPV. This means each investment opportunity is independently evaluated, funded, and managed. Investors choose which deals to participate in on a deal-by-deal basis, rather than committing to a blind pool fund.

**The SPV Process**

1. **Deal Sourcing:** Our team identifies and vets an opportunity
2. **SPV Formation:** A new LLC is created specifically for the deal
3. **Investor Allocation:** Qualified investors review the opportunity and commit capital
4. **Capital Deployment:** Funds are deployed into the asset
5. **Ongoing Management:** Regular updates and distributions as applicable
6. **Exit:** The asset is sold or the investment matures, and proceeds are distributed

**Pros and Cons**

| Advantage | Consideration |
|-----------|--------------|
| Liability isolation | Minimum investment required |
| Full transparency | Each deal requires separate review |
| Deal-by-deal choice | Less diversification per vehicle |
| Clear exit structure | Illiquidity during hold period |

SPVs represent a modern, transparent approach to private investing that aligns perfectly with our commitment to clear structures and investor protection.`,
    category: "Investing Basics",
    date: "March 15, 2025",
    readTime: "7 min",
    icon: Lightbulb,
    featured: true,
  },
  {
    id: "ethical-investing-101",
    title: "Ethical Investing 101: Building Wealth With Principles",
    excerpt:
      "Ethical investing isn't just about avoiding harm — it's about actively directing capital toward opportunities that align with your values while generating strong returns.",
    content: `Ethical investing has grown from a niche strategy to a mainstream approach embraced by institutional and individual investors alike. At its core, ethical investing means making financial decisions that consider both returns and impact.

**What Makes an Investment Ethical?**

Ethical screening involves evaluating opportunities against a set of principles. For many investors, this means avoiding industries like gambling, alcohol, tobacco, and predatory lending. But it goes further — it also means seeking out investments with transparent structures, fair terms, and genuine value creation.

**The Myth of Lower Returns**

One of the biggest misconceptions about ethical investing is that you must sacrifice returns. Research consistently shows that ethically-screened portfolios perform comparably to — and often outperform — conventional portfolios over the long term. Companies and assets that operate with integrity tend to carry lower regulatory and reputational risk.

**Principled Finance in Practice**

At VI Pillars Capital, our ethical screening process evaluates every deal across multiple dimensions: the nature of the business, the structure of the investment, the source of revenue, and the terms of the agreement. We prioritize profit-and-loss sharing structures over debt-based returns, ensuring alignment between investors and deal sponsors.

**Getting Started**

The first step is defining your own investment principles. What industries do you want to support? What structures feel right to you? Once you have clarity on your values, you can evaluate opportunities through that lens — and that's exactly what we help our investors do.`,
    category: "Ethical Finance",
    date: "March 10, 2025",
    readTime: "6 min",
    icon: Scale,
  },
  {
    id: "understanding-murabaha",
    title: "Understanding Murabaha: Cost-Plus Financing Explained",
    excerpt:
      "Murabaha is one of the most widely used structures in ethical finance. Learn how this cost-plus model works and why it's a principled alternative to conventional lending.",
    content: `Murabaha is a sale-based financing structure where the financier purchases an asset and resells it to the buyer at a disclosed markup. Unlike conventional loans that charge interest, Murabaha involves a real transaction with a tangible asset at its core.

**How Murabaha Works**

1. The buyer identifies an asset they want to purchase
2. The financier buys the asset from the seller at market price
3. The financier sells the asset to the buyer at cost plus an agreed-upon profit margin
4. The buyer pays in installments over an agreed period

**Why Murabaha Matters**

The key distinction is transparency. Both parties know the exact cost, the exact markup, and the exact payment schedule from day one. There's no compounding interest, no variable rates, and no hidden fees. The profit margin is fixed at the outset.

**Murabaha in Real Estate**

In real estate, Murabaha can be used for property acquisitions where a financing partner purchases the property and resells it to the investor group at a disclosed markup. This creates a clean, asset-backed transaction that avoids interest-based debt.

**Practical Considerations**

While Murabaha is widely accepted as an ethical financing structure, it's important to ensure the transaction involves genuine ownership transfer and real economic activity — not just a repackaging of conventional lending. At VI Pillars Capital, we work with qualified advisors to ensure every structure meets both the letter and spirit of ethical principles.`,
    category: "Ethical Finance",
    date: "March 5, 2025",
    readTime: "5 min",
    icon: Scale,
  },
  {
    id: "musharakah-partnership",
    title: "Musharakah: The Power of Partnership-Based Investing",
    excerpt:
      "Musharakah — or partnership-based investing — represents one of the purest forms of shared-risk finance. Discover how profit-and-loss sharing creates alignment between investors and sponsors.",
    content: `Musharakah is a joint venture structure where two or more parties contribute capital to a project and share profits and losses according to pre-agreed ratios. It's considered one of the most equitable forms of financing because all parties have skin in the game.

**The Core Principle**

In Musharakah, profits are distributed based on an agreed ratio, while losses are shared in proportion to each partner's capital contribution. This creates natural alignment — the sponsor is incentivized to perform because their returns depend on the success of the investment.

**Diminishing Musharakah**

A popular variation is Diminishing Musharakah, often used in real estate. In this structure, one partner gradually buys out the other's share over time. For example, an investor and a financing partner might co-own a property, with the investor purchasing the partner's share in installments until they own 100%.

**Why We Favor Partnership Models**

At VI Pillars Capital, we believe in structures where everyone's interests are aligned. When the deal sponsor shares in both the upside and the downside, it creates accountability and trust. Our SPV structures naturally incorporate this principle — investors and sponsors are partners in each deal.

**Key Benefits**

- True alignment of interests between all parties
- No fixed obligations regardless of performance
- Transparent profit-and-loss sharing ratios
- Encourages active management and value creation`,
    category: "Ethical Finance",
    date: "February 28, 2025",
    readTime: "6 min",
    icon: Scale,
  },
  {
    id: "evaluating-real-estate-deal",
    title: "How to Evaluate a Real Estate Investment: A Practical Framework",
    excerpt:
      "Not all real estate deals are created equal. Here's a practical framework for evaluating residential and commercial properties before committing your capital.",
    content: `Real estate remains one of the most tangible and accessible asset classes for investors. But evaluating a deal requires more than just looking at the price tag. Here's a framework we use at VI Pillars Capital.

**1. Location Analysis**

Start with the macro: What's the economic trajectory of the area? Look at population growth, job creation, infrastructure development, and rental demand. Then zoom in: What's the specific neighborhood like? Is it improving, stable, or declining?

**2. Financial Metrics**

Key numbers to evaluate include:
- **Cap Rate:** Net operating income divided by purchase price. Higher isn't always better — it often signals higher risk.
- **Cash-on-Cash Return:** Annual cash flow divided by total cash invested. This tells you your actual yield.
- **Debt Service Coverage Ratio:** For leveraged deals, ensure the property's income comfortably covers any financing obligations.

**3. Physical Condition**

Always conduct thorough inspections. Deferred maintenance, structural issues, and environmental concerns can turn a good deal into a money pit. Factor renovation costs into your projections conservatively.

**4. Exit Strategy**

Before you invest, know how you'll get out. Is this a buy-and-hold for cash flow? A value-add renovation and sale? A development play? Your exit strategy determines your timeline, risk profile, and return expectations.

**5. Structure and Terms**

How is the deal structured? What are the fees? What's the waterfall? At VI Pillars Capital, we structure every real estate deal through a dedicated SPV with clear terms, transparent fees, and defined exit mechanisms.`,
    category: "Real Estate",
    date: "February 20, 2025",
    readTime: "8 min",
    icon: Building2,
    featured: true,
  },
  {
    id: "multi-family-investing",
    title: "Why Multi-Family Properties Remain a Strong Asset Class",
    excerpt:
      "Multi-family real estate offers a unique combination of cash flow, appreciation, and resilience. Here's why experienced investors continue to favor this asset class.",
    content: `Multi-family properties — buildings with two or more residential units — have long been a cornerstone of real estate investing. Here's why they continue to attract capital from sophisticated investors.

**Built-In Diversification**

Unlike a single-family rental, a multi-family property spreads risk across multiple tenants. If one unit is vacant, the others continue generating income. A four-unit property with one vacancy still operates at 75% capacity.

**Economies of Scale**

Managing four units under one roof is significantly more efficient than managing four separate properties across different locations. Maintenance, property management, and insurance costs are lower on a per-unit basis.

**Financing Advantages**

Lenders often view multi-family properties favorably because of their income diversification. This can translate to better terms and higher loan-to-value ratios compared to single-family investments.

**The Newark Opportunity**

Markets like Newark, NJ represent compelling multi-family opportunities. Strong population growth, proximity to New York City, improving infrastructure, and relatively affordable entry points create a favorable risk-reward profile for investors willing to look beyond the obvious markets.

**Our Approach**

At VI Pillars Capital, our 4-Plex Newark Property represents exactly this thesis — a well-located multi-family asset in a high-growth metro area, structured through a dedicated SPV for maximum transparency and investor protection.`,
    category: "Real Estate",
    date: "February 15, 2025",
    readTime: "5 min",
    icon: Building2,
  },
  {
    id: "reading-market-signals",
    title: "How to Read Market Signals: Making Your Own Investment Judgments",
    excerpt:
      "In a world of conflicting headlines and market noise, developing your own analytical framework is essential. Here's how to cut through the noise and make informed decisions.",
    content: `Every day, investors are bombarded with conflicting signals: one headline says the market is about to crash, the next says we're entering a golden age. Developing your own framework for reading market signals is one of the most valuable skills you can build.

**Start With Macro Indicators**

Pay attention to a few key indicators:
- **Interest Rates:** The Federal Reserve's rate decisions affect everything from mortgage costs to business borrowing. Rising rates generally slow economic activity; falling rates stimulate it.
- **Employment Data:** Job creation and unemployment rates signal economic health. Strong employment typically supports consumer spending and real estate demand.
- **Inflation:** Moderate inflation is normal; runaway inflation erodes purchasing power and can destabilize markets.

**Separate Signal From Noise**

Most daily market movements are noise. Focus on trends, not individual data points. A single bad jobs report doesn't mean recession; a consistent pattern of declining employment might.

**Understand Geopolitical Risk**

Global events — conflicts, trade disputes, policy changes — can create both risks and opportunities. The key is understanding how these events affect the specific assets you're considering, not just the market in general.

**Apply It to Your Investments**

When evaluating a deal, ask: How does the current macro environment affect this specific opportunity? A real estate deal in a growing market with strong employment is very different from the same deal in a declining market — even if the property itself is identical.

**Trust Your Framework, Not Headlines**

Build a consistent analytical process and stick to it. The best investors aren't the ones who react fastest to news — they're the ones who have a framework that helps them make clear-headed decisions regardless of market sentiment.`,
    category: "Market Insights",
    date: "February 10, 2025",
    readTime: "7 min",
    icon: TrendingUp,
  },
  {
    id: "interest-rates-impact",
    title: "How Interest Rate Changes Affect Private Market Investments",
    excerpt:
      "Interest rates ripple through every corner of the investment landscape. Understanding their impact on private markets helps you position your portfolio wisely.",
    content: `Interest rates are perhaps the single most influential factor in the investment landscape. When the Federal Reserve adjusts rates, the effects cascade through public and private markets alike.

**Impact on Real Estate**

Higher interest rates increase borrowing costs, which can reduce property values as buyers can afford less. However, they also reduce competition — fewer buyers means better negotiating power for those with capital. For cash buyers or those using ethical financing structures that avoid interest, rate environments can actually create opportunity.

**Impact on Venture and Pre-IPO**

Rising rates tend to compress valuations in growth-stage companies. Investors demand higher returns to compensate for the opportunity cost of capital. This can create attractive entry points for patient investors willing to hold through cycles.

**The Ethical Finance Advantage**

One often-overlooked benefit of ethical finance structures: they're inherently less sensitive to interest rate fluctuations. Murabaha (cost-plus) and Musharakah (partnership) structures don't have variable rate exposure. Your terms are fixed at the outset, providing certainty regardless of what the Fed does.

**Positioning Your Portfolio**

In any rate environment, the fundamentals matter most. Focus on asset quality, deal structure, and sponsor track record. Rate environments are cyclical — what matters is whether the underlying investment creates genuine value over your holding period.`,
    category: "Market Insights",
    date: "February 5, 2025",
    readTime: "6 min",
    icon: TrendingUp,
  },
  {
    id: "first-time-investor-guide",
    title: "Your First Private Investment: What Every New Investor Should Know",
    excerpt:
      "Thinking about making your first private market investment? Here's everything you need to know — from understanding deal structures to asking the right questions.",
    content: `Making your first private market investment can feel daunting. Unlike buying stocks on a public exchange, private investments involve different structures, timelines, and considerations. Here's what you need to know.

**Understand the Structure**

Most private investments are structured through SPVs (Special Purpose Vehicles) or funds. At VI Pillars Capital, we use SPVs — which means each deal is its own entity. You choose which deals to invest in, and your liability is limited to your investment in that specific vehicle.

**Know Your Timeline**

Private investments are typically illiquid. Unlike stocks, you can't sell your position on any given day. Hold periods range from 1-5+ years depending on the deal. Make sure you're comfortable with the timeline before committing.

**Ask the Right Questions**

Before investing, ask:
- What's the investment thesis? Why will this asset increase in value?
- What's the fee structure? Management fees, carry, expenses?
- What's the exit strategy? How and when will I get my money back?
- What are the risks? What could go wrong?
- How will I receive updates? What's the reporting cadence?

**Start With What You Know**

If you understand real estate, start with a real estate deal. If you're in tech, a pre-IPO opportunity might resonate. Investing in areas you understand gives you an edge in evaluating opportunities.

**The VI Pillars Approach**

We built VI Pillars Capital specifically to make private investing accessible to first-time and experienced investors alike. Our minimum investment of $20,000, transparent SPV structures, and educational resources are designed to give you the confidence to invest with clarity.`,
    category: "Investing Basics",
    date: "January 28, 2025",
    readTime: "6 min",
    icon: Lightbulb,
  },
  {
    id: "diversification-private-markets",
    title: "The Art of Diversification in Private Markets",
    excerpt:
      "Diversification isn't just about spreading money around — it's about building a portfolio that can weather different economic conditions while capturing upside across sectors.",
    content: `Diversification is one of the most fundamental principles in investing, yet it's often misunderstood — especially in private markets.

**Beyond Asset Classes**

True diversification means spreading risk across multiple dimensions:
- **Asset Class:** Real estate, venture/pre-IPO, hospitality, infrastructure
- **Geography:** Different markets have different economic drivers
- **Timeline:** Stagger investments across different hold periods
- **Strategy:** Mix cash-flow plays with appreciation plays

**Why Private Markets Need More Thought**

In public markets, you can buy an index fund and get instant diversification. In private markets, each investment is a deliberate choice. This is actually an advantage — you can build a portfolio that's precisely tailored to your goals and values.

**The VI Pillars Portfolio Approach**

Our dealflow spans multiple asset classes: real estate (multi-family, construction), hospitality (membership clubs), and venture (pre-IPO technology companies). This isn't accidental — it's by design. Each asset class responds differently to economic conditions, providing natural portfolio balance.

**Practical Tips**

1. Don't put all your private market capital into one deal
2. Consider how each new investment complements your existing portfolio
3. Balance income-generating assets with growth-oriented ones
4. Maintain liquidity reserves — don't invest money you might need soon

The goal isn't to eliminate risk — it's to build a portfolio where the risks are understood, managed, and compensated with appropriate returns.`,
    category: "Investing Basics",
    date: "January 20, 2025",
    readTime: "5 min",
    icon: Lightbulb,
  },
  {
    id: "construction-investing",
    title: "Investing in Ground-Up Construction: Risks, Rewards, and What to Watch For",
    excerpt:
      "Ground-up construction offers some of the highest potential returns in real estate — but it also carries unique risks. Here's how to evaluate a construction deal.",
    content: `Ground-up construction — building a property from scratch — is one of the most active and potentially rewarding strategies in real estate investing. But it requires careful evaluation.

**The Appeal**

Construction deals offer the potential for significant value creation. You're not buying an existing asset at market price — you're creating a new one, often at a cost basis well below the eventual market value. The spread between construction cost and sale price is your profit.

**Key Risks**

- **Cost Overruns:** Construction projects frequently exceed initial budgets. Materials, labor, and permitting costs can all surprise you.
- **Timeline Delays:** Weather, permitting, inspections, and contractor availability can all extend timelines.
- **Market Risk:** If the market softens during construction, your projected sale price may need adjustment.

**How to Evaluate**

Look at the sponsor's track record. Have they completed similar projects? What were the actual vs. projected costs and timelines? Experience matters enormously in construction.

Review the budget with a critical eye. Is there a contingency reserve (typically 10-15% of hard costs)? Are the material and labor estimates current?

Understand the market. Is there demand for the type of property being built? What are comparable properties selling for? Is the area growing?

**Our Montague, NJ Project**

Our single-family home construction in Montague, NJ exemplifies a disciplined approach: a growing market, experienced construction management, conservative budgeting, and a clear build-to-sell exit strategy — all structured through a transparent SPV.`,
    category: "Real Estate",
    date: "January 15, 2025",
    readTime: "7 min",
    icon: Building2,
  },
  {
    id: "what-is-shariah-finance",
    title: "What Is Shariah Finance? Understanding the Principles Behind Ethical Islamic Investing",
    excerpt:
      "Shariah finance is a system of financial principles rooted in Islamic law that emphasizes fairness, transparency, and shared risk. Learn how it works, what it prohibits, and why its principles resonate with ethical investors of all backgrounds.",
    content: `Shariah finance — also known as Islamic finance — is a system of financial practices guided by principles derived from the Quran and Sunnah (the teachings and practices of the Prophet Muhammad, peace be upon him). It has grown into a global industry worth over $3 trillion, attracting not only Muslim investors but anyone who values transparency, fairness, and ethical standards in their financial dealings.

**Core Principles of Shariah Finance**

At its foundation, Shariah finance rests on several key principles that distinguish it from conventional finance:

1. **Prohibition of Riba (Interest):** Shariah law prohibits the charging or paying of interest. Money itself is not considered a commodity that can generate returns — instead, returns must come from real economic activity, trade, or asset ownership.

2. **Prohibition of Gharar (Excessive Uncertainty):** Contracts must be clear and transparent. Both parties should understand exactly what they are agreeing to. Excessive speculation and ambiguity in terms are not permitted.

3. **Prohibition of Haram Industries:** Investments in industries considered harmful to society — such as alcohol, gambling, tobacco, weapons, and pornography — are strictly excluded.

4. **Asset-Backed Transactions:** Every financial transaction must be tied to a tangible, real asset or genuine economic activity. This prevents the kind of speculative bubbles that have caused major financial crises.

5. **Profit-and-Loss Sharing:** Rather than guaranteed fixed returns (like interest), Shariah finance encourages structures where parties share in both the profits and the risks of an investment.

**Common Shariah Finance Structures**

Several well-established structures are used in Shariah-compliant investing:

- **Murabaha (Cost-Plus Financing):** The financier purchases an asset and resells it to the buyer at a disclosed markup. Both the cost and profit margin are transparent from the start.

- **Musharakah (Joint Venture):** Two or more parties contribute capital and share profits and losses according to pre-agreed ratios. This is considered one of the purest forms of Islamic finance.

- **Mudarabah (Silent Partnership):** One party provides capital while the other provides expertise and management. Profits are shared by agreement, but financial losses are borne only by the capital provider.

- **Ijara (Leasing):** Similar to conventional leasing, the financier purchases an asset and leases it to the user. Ownership remains with the financier, and the lessee pays rent for use of the asset.

- **Sukuk (Islamic Bonds):** Asset-backed certificates that provide returns from ownership in a tangible asset, rather than interest payments on debt.

**Why Shariah Finance Appeals Beyond Muslim Investors**

The principles underlying Shariah finance — transparency, asset-backing, shared risk, and ethical screening — align closely with the growing global demand for responsible investing. Many of the practices that caused the 2008 financial crisis (excessive leverage, opaque derivatives, speculative trading) are precisely the things Shariah finance prohibits.

Investors of all backgrounds are drawn to Shariah finance because it demands:
- Real economic activity behind every transaction
- Clear, honest terms with no hidden fees
- Shared accountability between all parties
- Exclusion of industries that cause social harm

**Shariah Finance at VI Pillars Capital**

At VI Pillars Capital, our investment framework is deeply informed by the principles of Shariah finance. Every deal we structure avoids interest-based debt, excludes harmful industries, and prioritizes transparent, partnership-based structures. While we welcome investors of all backgrounds, our commitment to these principles ensures that every opportunity meets the highest standards of ethical and financial integrity.

Whether you come to Shariah finance through faith, values, or simply a belief in fairer financial systems, the principles offer a compelling framework for building wealth with purpose.`,
    category: "Ethical Finance",
    date: "March 20, 2025",
    readTime: "8 min",
    icon: Scale,
    featured: true,
  },
  {
    id: "vi-pillars-launch",
    title: "Introducing VI Pillars Capital: Ethical Investing, Reimagined",
    excerpt:
      "We're excited to announce the launch of VI Pillars Capital — a syndicate built on the belief that strong returns and principled investing aren't mutually exclusive.",
    content: `Today marks the official launch of VI Pillars Capital, and we couldn't be more excited to share our vision with you.

**Our Mission**

VI Pillars Capital was founded on a simple but powerful idea: investors shouldn't have to choose between strong returns and principled investing. We believe that ethical screening, transparent structures, and rigorous due diligence actually produce better outcomes — not worse ones.

**What Makes Us Different**

We operate as a syndicate, not a fund. This means you choose which deals to invest in on a deal-by-deal basis. No blind pools, no lock-ups across multiple investments, no surprises. Each opportunity is structured through its own SPV with clear terms and transparent reporting.

**Our Commitment**

To our investors: we commit to honest communication, thorough due diligence, and structures that put your interests first. To our community: we commit to education, accessibility, and the belief that wealth-building should be available to everyone who's willing to learn and participate.

**What's Next**

We're actively sourcing deals across real estate, hospitality, and venture — each one carefully evaluated against our ethical and financial criteria. If you're interested in learning more, we'd love to connect.

Welcome to VI Pillars Capital. Let's build something meaningful together.`,
    category: "Deal Updates",
    date: "January 1, 2025",
    readTime: "4 min",
    icon: Newspaper,
  },
];

const filterCategories = [
  "All",
  "Investing Basics",
  "Market Insights",
  "Real Estate",
  "Ethical Finance",
  "Deal Updates",
];

const categoryIcons: Record<string, React.ElementType> = {
  "Investing Basics": Lightbulb,
  "Market Insights": TrendingUp,
  "Real Estate": Building2,
  "Ethical Finance": Scale,
  "Deal Updates": Newspaper,
};

/* ---------- Article Card ---------- */
function ArticleCard({ article, index, isInView }: { article: Article; index: number; isInView: boolean }) {
  const [expanded, setExpanded] = useState(false);
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
          <span className="text-[10px] font-bold text-leather-light uppercase tracking-widest">Featured</span>
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

        {/* Excerpt or Full Content */}
        {!expanded ? (
          <>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4">
              {article.excerpt}
            </p>
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-1.5 text-leather text-sm font-semibold hover:text-leather-light transition-colors"
            >
              Read Article
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </>
        ) : (
          <>
            <div className="prose prose-sm max-w-none text-foreground/60 leading-relaxed mb-4">
              {article.content.split("\n\n").map((paragraph, pi) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h4 key={pi} className="font-serif text-flint font-bold text-base mt-5 mb-2">
                      {paragraph.replace(/\*\*/g, "")}
                    </h4>
                  );
                }
                if (paragraph.startsWith("| ")) {
                  const rows = paragraph.split("\n").filter((r) => !r.startsWith("|---"));
                  const headers = rows[0]?.split("|").filter(Boolean).map((h) => h.trim());
                  const dataRows = rows.slice(1).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
                  return (
                    <div key={pi} className="overflow-x-auto my-4">
                      <table className="w-full text-sm border border-sandstone/10 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-cream/60">
                            {headers?.map((h, hi) => (
                              <th key={hi} className="text-left px-4 py-2 text-flint font-semibold text-xs">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {dataRows.map((row, ri) => (
                            <tr key={ri} className="border-t border-sandstone/5">
                              {row.map((cell, ci) => (
                                <td key={ci} className="px-4 py-2 text-foreground/60 text-xs">
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
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").map((l) => l.replace(/^- /, ""));
                  return (
                    <ul key={pi} className="list-disc list-inside space-y-1 my-3 text-foreground/60 text-sm">
                      {items.map((item, ii) => (
                        <li key={ii}>{item.replace(/\*\*/g, "")}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d\. /)) {
                  const items = paragraph.split("\n");
                  return (
                    <ol key={pi} className="list-decimal list-inside space-y-1 my-3 text-foreground/60 text-sm">
                      {items.map((item, ii) => (
                        <li key={ii}>{item.replace(/^\d+\.\s*/, "").replace(/\*\*/g, "")}</li>
                      ))}
                    </ol>
                  );
                }
                // Handle bold text within paragraphs
                const parts = paragraph.split(/(\*\*[^*]+\*\*)/);
                return (
                  <p key={pi} className="text-foreground/60 text-sm leading-relaxed my-2">
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
            <button
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-1.5 text-leather text-sm font-semibold hover:text-leather-light transition-colors"
            >
              Collapse
            </button>
          </>
        )}
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
    const matchesCategory = activeFilter === "All" || a.category === activeFilter;
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
              Knowledge is{" "}
              <span className="italic text-sandstone">capital.</span>
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
            {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
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
              <p className="text-foreground/40 text-lg">No articles found matching your criteria.</p>
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
