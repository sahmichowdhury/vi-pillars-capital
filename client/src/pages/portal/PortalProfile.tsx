/**
 * Portal Profile — investor profile and account settings
 */
import { useState } from "react";
import { User, Phone, Briefcase, FileText, CheckCircle2, Edit3, Save, X } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function PortalProfile() {
  const utils = trpc.useUtils();
  const portalMe = trpc.portal.me.useQuery();
  const updateProfile = trpc.portal.updateProfile.useMutation({
    onSuccess: () => {
      utils.portal.me.invalidate();
      toast.success("Profile updated successfully");
      setEditing(false);
    },
    onError: () => toast.error("Failed to update profile"),
  });

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    phone: "",
    investmentFocus: "",
    bio: "",
    accreditedInvestor: false,
  });

  const user = portalMe.data?.user;
  const profile = portalMe.data?.profile;

  const startEdit = () => {
    setForm({
      phone: profile?.phone ?? "",
      investmentFocus: profile?.investmentFocus ?? "",
      bio: profile?.bio ?? "",
      accreditedInvestor: profile?.accreditedInvestor ?? false,
    });
    setEditing(true);
  };

  const handleSave = () => {
    updateProfile.mutate(form);
  };

  if (portalMe.isLoading) {
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-24 bg-muted/50 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground mt-1">Your investor account information.</p>
        </div>
        {!editing ? (
          <button
            onClick={startEdit}
            className="flex items-center gap-2 text-sm text-sandstone hover:text-sandstone/80 border border-sandstone/30 hover:border-sandstone/60 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5" />
            Edit Profile
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setEditing(false)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg border transition-colors"
            >
              <X className="w-3.5 h-3.5" /> Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={updateProfile.isPending}
              className="flex items-center gap-1.5 text-sm bg-sandstone text-flint font-medium px-3 py-1.5 rounded-lg hover:bg-sandstone/90 transition-colors disabled:opacity-50"
            >
              <Save className="w-3.5 h-3.5" />
              {updateProfile.isPending ? "Saving..." : "Save Changes"}
            </button>
          </div>
        )}
      </div>

      {/* Account info */}
      <div className="bg-card border rounded-xl p-6 mb-4">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
          <User className="w-3.5 h-3.5" /> Account
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Full Name</p>
            <p className="text-sm font-medium text-foreground">{user?.name ?? "—"}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Email</p>
            <p className="text-sm font-medium text-foreground">{user?.email ?? "—"}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Account Status</p>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 capitalize">{user?.approvalStatus}</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Member Since</p>
            <p className="text-sm font-medium text-foreground">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US", { month: "long", year: "numeric" }) : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Investor details */}
      <div className="bg-card border rounded-xl p-6 mb-4">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
          <Briefcase className="w-3.5 h-3.5" /> Investor Details
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <Phone className="w-3 h-3" /> Phone
            </p>
            {editing ? (
              <input
                type="tel"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="e.g. +1 (555) 000-0000"
                className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50"
              />
            ) : (
              <p className="text-sm font-medium text-foreground">{profile?.phone ?? "Not provided"}</p>
            )}
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Investment Focus</p>
            {editing ? (
              <input
                type="text"
                value={form.investmentFocus}
                onChange={e => setForm(f => ({ ...f, investmentFocus: e.target.value }))}
                placeholder="e.g. Venture, Real Estate, Tech"
                className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50"
              />
            ) : (
              <p className="text-sm font-medium text-foreground">{profile?.investmentFocus ?? "Not provided"}</p>
            )}
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <FileText className="w-3 h-3" /> Bio / Notes
            </p>
            {editing ? (
              <textarea
                value={form.bio}
                onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
                placeholder="Brief background or investment goals..."
                rows={3}
                className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50 resize-none"
              />
            ) : (
              <p className="text-sm font-medium text-foreground">{profile?.bio ?? "Not provided"}</p>
            )}
          </div>
          <div className="flex items-center gap-3">
            {editing ? (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.accreditedInvestor}
                  onChange={e => setForm(f => ({ ...f, accreditedInvestor: e.target.checked }))}
                  className="w-4 h-4 accent-sandstone"
                />
                <span className="text-sm text-foreground">I am an accredited investor</span>
              </label>
            ) : (
              <div>
                <p className="text-xs text-muted-foreground mb-1">Accredited Investor</p>
                <p className="text-sm font-medium text-foreground">
                  {profile?.accreditedInvestor ? "Yes" : "Not confirmed"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground/60 text-center mt-4">
        For account changes or questions, contact VI Pillars Capital directly.
      </p>
    </div>
  );
}
