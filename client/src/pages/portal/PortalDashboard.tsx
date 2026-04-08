/**
 * Portal Dashboard — main landing page after LP login
 */
import { TrendingUp, FileText, User, DollarSign, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

export default function PortalDashboard() {
  const { user } = useAuth();
  const myDeals = trpc.portal.myDeals.useQuery();
  const myDocuments = trpc.portal.myDocuments.useQuery();

  const activeDeals = myDeals.data?.filter(d => d.dealStatus === "Active") ?? [];
  const deployedDeals = myDeals.data?.filter(d => d.dealStatus === "Deployed") ?? [];
  const totalDeals = myDeals.data?.length ?? 0;
  const totalDocs = myDocuments.data?.length ?? 0;

  const stats = [
    { label: "Total Investments", value: totalDeals.toString(), icon: TrendingUp, color: "text-sandstone" },
    { label: "Active Deals", value: activeDeals.length.toString(), icon: Activity, color: "text-emerald-400" },
    { label: "Deployed Capital", value: deployedDeals.length.toString(), icon: DollarSign, color: "text-blue-400" },
    { label: "Documents", value: totalDocs.toString(), icon: FileText, color: "text-purple-400" },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-bold text-foreground">
          Welcome back, {user?.name?.split(" ")[0] ?? "Investor"}
        </h1>
        <p className="text-muted-foreground mt-1">
          Here's an overview of your VI Pillars Capital portfolio.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</p>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent deals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground">My Investments</h2>
            <Link href="/portal/investments" className="text-xs text-sandstone hover:text-sandstone/80 flex items-center gap-1 transition-colors">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {myDeals.isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-12 bg-muted/50 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : totalDeals === 0 ? (
            <div className="text-center py-8">
              <TrendingUp className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">No investments assigned yet.</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Your portfolio will appear here once the VI Pillars team assigns your deals.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {myDeals.data?.slice(0, 4).map((deal) => (
                <div key={deal.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{deal.dealName}</p>
                    <p className="text-xs text-muted-foreground">{deal.dealCategory}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    deal.dealStatus === "Active" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                    deal.dealStatus === "Deployed" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                    deal.dealStatus === "Exited" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  }`}>
                    {deal.dealStatus}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Documents */}
        <div className="bg-card border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-foreground">Recent Documents</h2>
            <Link href="/portal/documents" className="text-xs text-sandstone hover:text-sandstone/80 flex items-center gap-1 transition-colors">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {myDocuments.isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-12 bg-muted/50 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : totalDocs === 0 ? (
            <div className="text-center py-8">
              <FileText className="w-8 h-8 text-muted-foreground/40 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">No documents yet.</p>
              <p className="text-xs text-muted-foreground/60 mt-1">K-1s, operating agreements, and deal memos will appear here.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {myDocuments.data?.slice(0, 4).map((doc) => (
                <div key={doc.id} className="flex items-center gap-3 py-2 border-b last:border-0">
                  <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{doc.title}</p>
                    <p className="text-xs text-muted-foreground">{doc.category}</p>
                  </div>
                  {doc.isPlaceholder && (
                    <span className="text-xs text-muted-foreground/60 italic">Pending</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Account status */}
      <div className="mt-6 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Account Approved</p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400/80">Your investor account is active and verified by VI Pillars Capital.</p>
        </div>
        <Link href="/portal/profile" className="ml-auto flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 hover:underline">
          <User className="w-3 h-3" /> Profile
        </Link>
      </div>
    </div>
  );
}
