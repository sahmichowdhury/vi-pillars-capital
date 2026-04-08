/*
 * Shared articles data for News & Insights
 * Used by both NewsPage (listing) and ArticleDetailPage (detail view)
 */
import {
  TrendingUp,
  Building2,
  Scale,
  Lightbulb,
  Newspaper,
} from "lucide-react";

export interface Article {
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

export const articles: Article[] = [
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

How is the deal structured? What are the fees? What's the waterfall? At VI Pillars Capital, we structure every real estate deal through a dedicated SPV with clear terms, transparent fees, and equitable profit-sharing arrangements.`,
    category: "Real Estate",
    date: "February 20, 2025",
    readTime: "8 min",
    icon: Building2,
    featured: true,
  },
  {
    id: "multi-family-properties",
    title: "Why Multi-Family Properties Remain a Strong Asset Class",
    excerpt:
      "Multi-family real estate offers a unique combination of cash flow, appreciation, and resilience. Here's why experienced investors continue to favor this asset class.",
    content: `Multi-family properties — buildings with two or more residential units — have long been a cornerstone of real estate investing. From duplexes to large apartment complexes, this asset class offers a compelling combination of income generation and long-term wealth building.

**The Case for Multi-Family**

The fundamental driver is simple: people always need somewhere to live. Unlike commercial real estate, which can be heavily impacted by economic cycles and remote work trends, residential demand remains relatively stable. Multi-family properties benefit from multiple income streams — if one unit is vacant, the others continue generating revenue.

**Cash Flow Dynamics**

Multi-family properties typically generate stronger cash flow than single-family rentals on a per-dollar-invested basis. The economies of scale are significant: one roof, one foundation, one property management contract serving multiple tenants. This efficiency translates directly to better returns.

**Risk Mitigation**

Diversification within a single asset is one of the most underappreciated benefits. A four-unit property with one vacancy still generates 75% of its potential income. Compare that to a single-family rental where one vacancy means zero income.

**Our Newark 4-Plex**

Our 4-Plex Newark Property exemplifies this approach: a four-unit residential property in one of the fastest-growing metro areas on the East Coast, offering strong cash flow potential and long-term appreciation — all structured through a transparent SPV with clear terms for investors.

**What to Look For**

When evaluating multi-family opportunities, focus on: location quality, tenant demand, unit mix, condition and deferred maintenance, local rent trends, and the strength of the property management plan. At VI Pillars Capital, we evaluate all of these factors — plus ethical compliance — before presenting any opportunity to our investors.`,
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
    content: `Every day, investors are bombarded with conflicting information. One headline says the market is about to crash; the next says we're entering a golden age. How do you make sense of it all? The answer is developing your own analytical framework.

**Start With Fundamentals**

Before reacting to any headline, ask: What do the actual numbers say? Look at revenue growth, profit margins, debt levels, and cash flow. For real estate, examine occupancy rates, rental growth, and local economic indicators. Numbers don't have opinions — they tell you what's actually happening.

**Understand Cycles**

Every market moves in cycles. Real estate has its cycles. Venture has its cycles. Even the broader economy follows predictable patterns of expansion and contraction. Understanding where we are in a cycle helps you calibrate your expectations and timing.

**Separate Signal From Noise**

Most daily market news is noise. The signal — the information that actually matters for long-term investment decisions — tends to emerge over weeks and months, not hours. Focus on structural trends: demographic shifts, technological adoption, regulatory changes, and macroeconomic policy.

**Build Your Own Thesis**

The best investors don't follow the crowd — they develop their own investment thesis based on research, analysis, and conviction. This doesn't mean ignoring expert opinions, but it means filtering them through your own framework rather than accepting them at face value.

**Apply It Practically**

At VI Pillars Capital, we apply this disciplined approach to every deal we evaluate. We look beyond the pitch deck to the underlying fundamentals, stress-test assumptions, and ensure every investment meets our criteria for both financial merit and ethical compliance.`,
    category: "Market Insights",
    date: "February 10, 2025",
    readTime: "7 min",
    icon: TrendingUp,
  },
  {
    id: "interest-rate-impact",
    title: "How Interest Rate Changes Affect Private Market Investments",
    excerpt:
      "Interest rates ripple through every corner of the investment landscape. Understanding their impact on private markets helps you position your portfolio wisely.",
    content: `Interest rates are one of the most powerful forces in finance. When central banks adjust rates, the effects cascade through every asset class — from public equities to private real estate to venture capital. Understanding these dynamics is essential for any serious investor.

**The Basics**

When interest rates rise, borrowing becomes more expensive. This affects businesses that rely on debt financing, real estate valuations (which are heavily influenced by cap rates and financing costs), and the overall cost of capital. Conversely, when rates fall, capital becomes cheaper and asset prices tend to rise.

**Impact on Real Estate**

Real estate is particularly sensitive to interest rate changes. Higher rates increase mortgage costs, which can reduce buyer demand and put downward pressure on property values. However, for cash-flowing properties with fixed-rate financing already in place, rising rates can actually be beneficial — they reduce new competition and increase the relative value of existing cash flows.

**Impact on Venture and Private Equity**

In venture capital, higher rates tend to compress valuations because the discount rate applied to future cash flows increases. This can actually create better entry points for new investments. In private equity, higher borrowing costs can reduce the effectiveness of leveraged buyout strategies, shifting focus toward operational value creation.

**The Ethical Finance Perspective**

Interestingly, ethical finance structures that avoid interest-based debt are naturally less sensitive to rate fluctuations. Partnership-based structures like Musharakah, where returns come from actual business performance rather than fixed interest payments, provide a natural hedge against rate volatility.

**Practical Takeaways**

Don't try to time interest rate movements — focus instead on understanding how your specific investments are affected. At VI Pillars Capital, we evaluate rate sensitivity as part of our due diligence process, ensuring our investors understand the risk profile of every opportunity.`,
    category: "Market Insights",
    date: "February 5, 2025",
    readTime: "6 min",
    icon: TrendingUp,
  },
  {
    id: "first-private-investment",
    title: "Your First Private Investment: What Every New Investor Should Know",
    excerpt:
      "Thinking about making your first private market investment? Here's everything you need to know — from understanding deal structures to asking the right questions.",
    content: `Making your first private market investment can feel daunting. Unlike buying a stock through an app, private investments involve legal documents, longer time horizons, and less liquidity. But they also offer access to opportunities that public markets simply can't provide.

**What Are Private Market Investments?**

Private market investments are investments in assets that aren't traded on public exchanges. This includes private equity (investing in private companies), real estate (direct property ownership), venture capital (early-stage companies), and alternative assets like hospitality and infrastructure.

**Key Differences From Public Markets**

The biggest differences are liquidity and transparency. Public stocks can be sold instantly; private investments typically have a hold period of 2-7 years. However, private investments often provide more detailed information about the underlying asset, clearer fee structures, and the potential for higher returns.

**Questions to Ask Before Investing**

Before committing capital to any private deal, ask:
- What is the investment thesis? Why will this asset appreciate or generate income?
- What are the risks? Every deal has them — make sure they're clearly disclosed.
- What are the fees? Management fees, carried interest, and any other costs.
- What is the exit strategy? How and when will you get your money back?
- Who is the sponsor? What is their track record and reputation?

**Starting With VI Pillars Capital**

Our platform is designed to make private investing accessible and transparent. Every deal comes with a comprehensive memo covering the opportunity, risks, terms, and ethical screening results. Our minimum investment of $20,000 opens the door to institutional-quality deals, and our team is available to answer any questions throughout the process.

**The Bottom Line**

Private investing isn't for everyone, but for those willing to commit capital for longer periods, the rewards can be significant. Start small, ask questions, and invest in what you understand. That's the foundation of smart, principled investing.`,
    category: "Investing Basics",
    date: "January 28, 2025",
    readTime: "6 min",
    icon: Lightbulb,
  },
  {
    id: "art-of-diversification",
    title: "The Art of Diversification in Private Markets",
    excerpt:
      "Diversification isn't just about spreading money around — it's about building a portfolio that can weather different economic conditions while capturing upside across sectors.",
    content: `Diversification is one of the most fundamental principles in investing, yet it's often misunderstood. It's not just about owning many different things — it's about building a portfolio where the components respond differently to various economic conditions.

**Why Diversification Matters**

No single investment performs well in all environments. Real estate thrives when the economy is growing and rates are stable. Venture capital can produce outsized returns during innovation cycles. Hospitality benefits from consumer spending trends. By holding a mix of asset types, you reduce the impact of any single investment underperforming.

**Diversification in Private Markets**

Private market diversification works differently than public market diversification. You can't simply buy an index fund. Instead, you build your portfolio deal by deal, choosing investments across different:
- **Asset classes:** Real estate, venture, private equity, hospitality
- **Geographies:** Different markets and regions
- **Time horizons:** Short-term flips, medium-term holds, long-term appreciation plays
- **Risk profiles:** Conservative cash-flow plays vs. higher-risk growth bets

**The SPV Advantage**

Deal-by-deal SPV investing is particularly well-suited to diversification. Unlike a fund where your capital is allocated by a manager, SPVs let you choose each investment individually. This means you can deliberately construct a diversified portfolio that matches your personal risk tolerance and goals.

**Practical Tips**

Start by defining your target allocation across asset classes. Don't put all your capital into one deal or one sector. Spread investments across time — don't deploy everything at once. And always maintain a cash reserve for unexpected opportunities or personal needs.

**Our Approach**

At VI Pillars Capital, our diverse pipeline across real estate, venture, and hospitality gives investors the building blocks for a well-diversified private market portfolio — all ethically screened and transparently structured.`,
    category: "Investing Basics",
    date: "January 20, 2025",
    readTime: "5 min",
    icon: Lightbulb,
  },
  {
    id: "ground-up-construction",
    title: "Investing in Ground-Up Construction: Risks, Rewards, and What to Watch For",
    excerpt:
      "Ground-up construction offers some of the highest potential returns in real estate — but it also carries unique risks. Here's how to evaluate a construction deal.",
    content: `Ground-up construction — building a property from scratch — is one of the most rewarding and challenging strategies in real estate investing. When executed well, it can generate returns that far exceed those of existing property acquisitions. But it requires careful planning, experienced management, and realistic expectations.

**The Appeal**

Building new allows you to create exactly what the market demands. There's no deferred maintenance, no outdated layouts, and no inherited problems. New construction commands premium pricing and attracts quality tenants or buyers. The margin between construction cost and market value can be substantial.

**The Risks**

Construction comes with risks that don't exist in traditional real estate:
- **Cost overruns:** Materials and labor costs can exceed estimates
- **Timeline delays:** Weather, permits, supply chain issues, and contractor availability
- **Market timing:** The market when you finish may differ from when you started
- **Execution risk:** The quality of the build depends on the contractor and project management

**How to Evaluate a Construction Deal**

Look at the sponsor's track record. Have they completed similar projects? What were the actual costs vs. projections? How did they handle problems?

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

export const filterCategories = [
  "All",
  "Investing Basics",
  "Market Insights",
  "Real Estate",
  "Ethical Finance",
  "Deal Updates",
];

export const categoryIcons: Record<string, React.ElementType> = {
  "Investing Basics": Lightbulb,
  "Market Insights": TrendingUp,
  "Real Estate": Building2,
  "Ethical Finance": Scale,
  "Deal Updates": Newspaper,
};
