/**
 * PortalLayout — sidebar layout for the investor portal
 * Wraps all /portal/* pages with auth guard and navigation
 */
import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { LayoutDashboard, TrendingUp, FileText, User, ShieldCheck, LogOut, ChevronRight } from "lucide-react";
import Logo from "@/components/Logo";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";

const navItems = [
  { href: "/portal", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/portal/investments", label: "My Investments", icon: TrendingUp },
  { href: "/portal/documents", label: "Documents", icon: FileText },
  { href: "/portal/profile", label: "Profile", icon: User },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const [location, setLocation] = useLocation();

  const portalMe = trpc.portal.me.useQuery(undefined, {
    enabled: !!user,
    retry: false,
  });

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      window.location.href = getLoginUrl();
    }
  }, [loading, user]);

  // Redirect to lp-login page if pending/rejected
  useEffect(() => {
    if (!portalMe.isLoading && portalMe.data) {
      const status = portalMe.data.user.approvalStatus;
      if (status === "pending" || status === "rejected") {
        setLocation("/lp-login");
      }
    }
  }, [portalMe.data, portalMe.isLoading, setLocation]);

  if (loading || portalMe.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-sandstone/30 border-t-sandstone rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Loading portal...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const isAdmin = user.role === "admin";

  const allNavItems = isAdmin
    ? [...navItems, { href: "/portal/admin", label: "Admin Panel", icon: ShieldCheck }]
    : navItems;

  return (
    <div className="min-h-screen flex bg-background pt-[72px]">
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 border-r bg-card flex flex-col fixed top-[72px] bottom-0 left-0 z-30">
        {/* Logo area */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-sandstone/10 border border-sandstone/20 flex items-center justify-center text-xs font-bold text-sandstone">
              {user.name?.charAt(0).toUpperCase() ?? "?"}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {allNavItems.map((item) => {
            const isActive = item.exact ? location === item.href : location.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sandstone/10 text-sandstone border border-sandstone/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                {item.label}
                {isActive && <ChevronRight className="w-3 h-3 ml-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t space-y-1">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
            <Logo variant="dark" size="sm" />
            <span>Back to Site</span>
          </Link>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-60 p-8 min-h-full">
        {children}
      </main>
    </div>
  );
}
