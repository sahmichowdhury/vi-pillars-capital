/**
 * Portal Investments — investor's assigned deals
 */
import { TrendingUp, Calendar, DollarSign, Percent, ExternalLink, Info } from "lucide-react";
import { trpc } from "@/lib/trpc";

const statusConfig: Record<string, { bg: string; text: string; dot: string }> = {
  Active:   { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-700 dark:text-emerald-400", dot: "bg-emerald-500" },
  Deployed: { bg: "bg-blue-100 dark:bg-blue-900/30",    text: "text-blue-700 dark:text-blue-400",    dot: "bg-blue-500"    },
  Exited:   { bg: "bg-red-100 dark:bg-red-900/30",      text: "text-red-700 dark:text-red-400",      dot: "bg-red-500"     },
  Passed:   { bg: "bg-amber-100 dark:bg-amber-900/30",  text: "text-amber-700 dark:text-amber-400",  dot: "bg-amber-500"   },
};

export default function PortalInvestments() {
  const myDeals = trpc.portal.myDeals.useQuery();
  const deals = myDeals.data ?? [];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-bold text-foreground">My Investments</h1>
        <p className="text-muted-foreground mt-1">
          All deals assigned to your investor account by VI Pillars Capital.
        </p>
      </div>

      {myDeals.isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-48 bg-muted/50 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : deals.length === 0 ? (
        <div className="text-center py-20 bg-card border rounded-xl">
          <TrendingUp className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No Investments Yet</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            Your investment portfolio will appear here once the VI Pillars Capital team assigns your deals to your account.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deals.map((deal) => {
            const sc = statusConfig[deal.dealStatus] ?? statusConfig.Active;
            return (
              <div key={deal.id} className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{deal.dealName}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{deal.dealCategory}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${sc.bg} ${sc.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                    {deal.dealStatus}
                  </span>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-muted/40 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <DollarSign className="w-3 h-3 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">Investment</p>
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      {deal.investmentAmount ?? "Confidential"}
                    </p>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Percent className="w-3 h-3 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">Ownership</p>
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      {deal.ownership ?? "Confidential"}
                    </p>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <TrendingUp className="w-3 h-3 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">Current Value</p>
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      {deal.currentValue ?? "Confidential"}
                    </p>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">Date</p>
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      {deal.investmentDate ?? "—"}
                    </p>
                  </div>
                </div>

                {/* Notes */}
                {deal.notes && (
                  <div className="flex items-start gap-2 bg-muted/30 rounded-lg p-3">
                    <Info className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground leading-relaxed">{deal.notes}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <p className="text-xs text-muted-foreground/60 mt-8 text-center">
        Investment data is provided for informational purposes only. Contact VI Pillars Capital for official statements.
      </p>
    </div>
  );
}
