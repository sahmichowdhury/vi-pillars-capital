/*
 * LP Login Portal — Real OAuth authentication
 */
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Lock, Shield, FileText, TrendingUp, Clock, XCircle, ArrowRight, LogIn } from "lucide-react";
import Logo from "@/components/Logo";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

export default function LPLoginPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { user, loading } = useAuth();
  const [, setLocation] = useLocation();

  const portalMe = trpc.portal.me.useQuery(undefined, {
    enabled: !!user,
    retry: false,
  });

  useEffect(() => {
    if (user && portalMe.data?.user.approvalStatus === "approved") {
      setLocation("/portal");
    }
  }, [user, portalMe.data?.user.approvalStatus, setLocation]);

  const approvalStatus = portalMe.data?.user.approvalStatus;

  const features = [
    { icon: TrendingUp, label: "Track Your Investments", desc: "Real-time status on every deal you are in" },
    { icon: FileText, label: "Access Documents", desc: "K-1s, operating agreements, and deal memos" },
    { icon: Shield, label: "Secure and Private", desc: "Your data is encrypted and access-controlled" },
  ];

  return (
    <section className="pt-[72px] min-h-screen bg-flint relative overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-flint via-[oklch(0.25_0.03_55)] to-[oklch(0.20_0.02_70)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div ref={ref} className="relative w-full max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex justify-start mb-8"><Logo variant="light" size="md" /></div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Limited Partner <span className="italic text-sandstone">Portal</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              A secure, private portal for VI Pillars Capital investors to track their deals, access documents, and stay informed.
            </p>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sandstone/10 border border-sandstone/20 flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-sandstone" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{f.label}</p>
                    <p className="text-white/50 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            {loading || (user && portalMe.isLoading) ? (
              <div className="text-center py-8">
                <div className="w-8 h-8 border-2 border-sandstone/30 border-t-sandstone rounded-full animate-spin mx-auto mb-4" />
                <p className="text-white/50 text-sm">Loading...</p>
              </div>
            ) : !user ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sandstone/10 border border-sandstone/20 mb-6">
                  <Lock className="w-7 h-7 text-sandstone" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-white mb-2">Sign In</h2>
                <p className="text-white/50 text-sm mb-8 leading-relaxed">
                  Sign in with your Manus account. First-time users will be reviewed and approved by the VI Pillars team.
                </p>
                <a href={getLoginUrl()} className="inline-flex items-center justify-center gap-2 w-full bg-sandstone hover:bg-sandstone/90 text-flint font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  <LogIn className="w-4 h-4" />
                  Sign In to LP Portal
                </a>
                <p className="text-white/30 text-xs mt-4">By signing in, you confirm you are an accredited investor or have been invited by VI Pillars Capital.</p>
              </div>
            ) : approvalStatus === "pending" ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                  <Clock className="w-7 h-7 text-amber-400" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-white mb-2">Application Pending</h2>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{user.name}</span>. Your access request is under review by the VI Pillars Capital team.
                </p>
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 text-left mb-6">
                  <p className="text-amber-300 text-sm font-medium mb-1">What happens next?</p>
                  <p className="text-white/50 text-xs leading-relaxed">Our team typically reviews applications within 1-2 business days. You will be notified when your account is approved.</p>
                </div>
                <button onClick={() => window.location.reload()} className="inline-flex items-center gap-2 text-sandstone/70 hover:text-sandstone text-sm transition-colors">
                  <ArrowRight className="w-4 h-4" /> Check status again
                </button>
              </div>
            ) : approvalStatus === "rejected" ? (
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                  <XCircle className="w-7 h-7 text-red-400" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-white mb-2">Access Not Approved</h2>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">Your application was not approved at this time. Please contact the VI Pillars Capital team directly.</p>
                {portalMe.data?.user.adminNote && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-left mb-6">
                    <p className="text-red-300 text-sm font-medium mb-1">Note from the team:</p>
                    <p className="text-white/60 text-xs">{portalMe.data.user.adminNote}</p>
                  </div>
                )}
                <a href="/contact" className="inline-flex items-center gap-2 text-sandstone hover:text-sandstone/80 text-sm transition-colors">
                  Contact VI Pillars Capital <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
