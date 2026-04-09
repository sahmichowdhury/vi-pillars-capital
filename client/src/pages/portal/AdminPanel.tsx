/**
 * Admin Panel — manage investor applications, deal assignments, documents
 */
import { useState } from "react";
import { DEALS, CUSTOM_DEAL_VALUE, type DealSummary } from "@/data/deals";
import { Users, TrendingUp, FileText, CheckCircle2, XCircle, Clock, Plus, Trash2, Edit3, ChevronDown, ChevronUp } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

type Tab = "users" | "deals" | "documents";

export default function AdminPanel() {
  const [tab, setTab] = useState<Tab>("users");

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-bold text-foreground">Admin Panel</h1>
        <p className="text-muted-foreground mt-1">Manage investor applications, deal assignments, and documents.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted/50 rounded-xl p-1 mb-6 w-fit">
        {([
          { id: "users" as Tab, label: "Investors", icon: Users },
          { id: "deals" as Tab, label: "Deal Assignments", icon: TrendingUp },
          { id: "documents" as Tab, label: "Documents", icon: FileText },
        ]).map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === t.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <t.icon className="w-4 h-4" />
            {t.label}
          </button>
        ))}
      </div>

      {tab === "users" && <UsersTab />}
      {tab === "deals" && <DealsTab />}
      {tab === "documents" && <DocumentsTab />}
    </div>
  );
}

/* ---- Users Tab ---- */
function UsersTab() {
  const utils = trpc.useUtils();
  const users = trpc.portal.adminListUsers.useQuery();
  const updateApproval = trpc.portal.adminUpdateApproval.useMutation({
    onSuccess: () => {
      utils.portal.adminListUsers.invalidate();
      toast.success("Investor status updated");
    },
    onError: () => toast.error("Failed to update status"),
  });

  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [noteInput, setNoteInput] = useState<Record<number, string>>({});

  const handleApprove = (userId: number) => {
    updateApproval.mutate({ userId, approvalStatus: "approved", adminNote: noteInput[userId], portalOrigin: window.location.origin });
  };
  const handleReject = (userId: number) => {
    updateApproval.mutate({ userId, approvalStatus: "rejected", adminNote: noteInput[userId] });
  };
  const handlePending = (userId: number) => {
    updateApproval.mutate({ userId, approvalStatus: "pending" });
  };

  const statusIcon = (s: string) => {
    if (s === "approved") return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
    if (s === "rejected") return <XCircle className="w-4 h-4 text-red-500" />;
    return <Clock className="w-4 h-4 text-amber-500" />;
  };

  return (
    <div>
      {users.isLoading ? (
        <div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-16 bg-muted/50 rounded-xl animate-pulse" />)}</div>
      ) : (users.data ?? []).length === 0 ? (
        <div className="text-center py-16 bg-card border rounded-xl">
          <Users className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No investors have registered yet.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {(users.data ?? []).map(user => (
            <div key={user.id} className="bg-card border rounded-xl overflow-hidden">
              <div
                className="flex items-center gap-4 p-4 cursor-pointer hover:bg-muted/20 transition-colors"
                onClick={() => setExpandedId(expandedId === user.id ? null : user.id)}
              >
                <div className="w-9 h-9 rounded-full bg-sandstone/10 border border-sandstone/20 flex items-center justify-center text-sm font-semibold text-sandstone flex-shrink-0">
                  {user.name?.charAt(0).toUpperCase() ?? "?"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{user.name ?? "Unknown"}</p>
                  <p className="text-xs text-muted-foreground truncate">{user.email ?? "No email"}</p>
                </div>
                <div className="flex items-center gap-2">
                  {statusIcon(user.approvalStatus)}
                  <span className={`text-xs font-medium capitalize ${
                    user.approvalStatus === "approved" ? "text-emerald-600 dark:text-emerald-400" :
                    user.approvalStatus === "rejected" ? "text-red-600 dark:text-red-400" :
                    "text-amber-600 dark:text-amber-400"
                  }`}>{user.approvalStatus}</span>
                  {expandedId === user.id ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </div>
              </div>
              {expandedId === user.id && (
                <div className="border-t bg-muted/20 p-4">
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div><span className="text-muted-foreground">Joined: </span><span className="text-foreground">{new Date(user.createdAt).toLocaleDateString()}</span></div>
                    <div><span className="text-muted-foreground">Last sign-in: </span><span className="text-foreground">{new Date(user.lastSignedIn).toLocaleDateString()}</span></div>
                    <div><span className="text-muted-foreground">Role: </span><span className="text-foreground capitalize">{user.role}</span></div>
                    {user.adminNote && <div className="col-span-2"><span className="text-muted-foreground">Note: </span><span className="text-foreground">{user.adminNote}</span></div>}
                  </div>
                  <div className="mb-3">
                    <label className="text-xs text-muted-foreground block mb-1">Admin note (optional)</label>
                    <input
                      type="text"
                      value={noteInput[user.id] ?? ""}
                      onChange={e => setNoteInput(n => ({ ...n, [user.id]: e.target.value }))}
                      placeholder="Reason for approval/rejection..."
                      className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50"
                    />
                  </div>
                  <div className="flex gap-2">
                    {user.approvalStatus !== "approved" && (
                      <button onClick={() => handleApprove(user.id)} disabled={updateApproval.isPending} className="flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                      </button>
                    )}
                    {user.approvalStatus !== "rejected" && (
                      <button onClick={() => handleReject(user.id)} disabled={updateApproval.isPending} className="flex items-center gap-1.5 text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50">
                        <XCircle className="w-3.5 h-3.5" /> Reject
                      </button>
                    )}
                    {user.approvalStatus !== "pending" && (
                      <button onClick={() => handlePending(user.id)} disabled={updateApproval.isPending} className="flex items-center gap-1.5 text-xs border text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50">
                        <Clock className="w-3.5 h-3.5" /> Set Pending
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---- Deals Tab ---- */
function DealsTab() {
  const utils = trpc.useUtils();
  const users = trpc.portal.adminListUsers.useQuery();
  const deals = trpc.portal.adminListDeals.useQuery();
  const createDeal = trpc.portal.adminCreateDeal.useMutation({
    onSuccess: () => { utils.portal.adminListDeals.invalidate(); toast.success("Deal assigned"); setShowForm(false); resetForm(); },
    onError: () => toast.error("Failed to assign deal"),
  });
  const deleteDeal = trpc.portal.adminDeleteDeal.useMutation({
    onSuccess: () => { utils.portal.adminListDeals.invalidate(); toast.success("Deal removed"); },
    onError: () => toast.error("Failed to remove deal"),
  });

  const [showForm, setShowForm] = useState(false);
  const emptyForm = { userId: 0, dealName: "", dealCategory: "Venture", dealStatus: "Active" as const, investmentAmount: "", ownership: "", investmentDate: "", currentValue: "", notes: "" };
  const [form, setForm] = useState(emptyForm);
  const resetForm = () => setForm(emptyForm);

  // Track whether the user selected a listed deal or a custom one
  const [selectedDealKey, setSelectedDealKey] = useState<string>("");

  const handleDealSelect = (value: string) => {
    setSelectedDealKey(value);
    if (value === CUSTOM_DEAL_VALUE || value === "") {
      // Clear name/category so user can type their own
      setForm(f => ({ ...f, dealName: "", dealCategory: "Venture" }));
    } else {
      const deal = DEALS.find(d => d.name === value);
      if (deal) {
        setForm(f => ({ ...f, dealName: deal.name, dealCategory: deal.category }));
      }
    }
  };

  const isCustomDeal = selectedDealKey === CUSTOM_DEAL_VALUE;

  const approvedUsers = (users.data ?? []).filter(u => u.approvalStatus === "approved");

  const getUserName = (userId: number) => users.data?.find(u => u.id === userId)?.name ?? `User #${userId}`;

  // Group deals by status for the dropdown
  const dealsByStatus: Record<string, DealSummary[]> = {};
  for (const d of DEALS) {
    if (!dealsByStatus[d.status]) dealsByStatus[d.status] = [];
    dealsByStatus[d.status].push(d);
  }
  const statusOrder = ["Active", "Deployed", "Exited", "Passed"];

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => { setShowForm(!showForm); setSelectedDealKey(""); }}
          className="flex items-center gap-2 text-sm bg-sandstone text-flint font-medium px-4 py-2 rounded-lg hover:bg-sandstone/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Assign Deal
        </button>
      </div>

      {showForm && (
        <div className="bg-card border rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Assign Deal to Investor</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Investor *</label>
              <select value={form.userId} onChange={e => setForm(f => ({ ...f, userId: Number(e.target.value) }))} className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50">
                <option value={0}>Select investor...</option>
                {approvedUsers.map(u => <option key={u.id} value={u.id}>{u.name} ({u.email})</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Deal *</label>
              <select
                value={selectedDealKey}
                onChange={e => handleDealSelect(e.target.value)}
                className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50"
              >
                <option value="">Select a deal...</option>
                {statusOrder.map(status =>
                  dealsByStatus[status] ? (
                    <optgroup key={status} label={`— ${status} —`}>
                      {dealsByStatus[status].map(d => (
                        <option key={d.name} value={d.name}>{d.name} ({d.category})</option>
                      ))}
                    </optgroup>
                  ) : null
                )}
                <optgroup label="— Other —">
                  <option value={CUSTOM_DEAL_VALUE}>Custom / Not Listed...</option>
                </optgroup>
              </select>
              {isCustomDeal && (
                <input
                  type="text"
                  value={form.dealName}
                  onChange={e => setForm(f => ({ ...f, dealName: e.target.value }))}
                  placeholder="Enter deal name..."
                  className="w-full mt-2 text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50"
                  autoFocus
                />
              )}
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Category *</label>
              <select value={form.dealCategory} onChange={e => setForm(f => ({ ...f, dealCategory: e.target.value }))} className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50">
                <option>Venture</option><option>Real Estate</option><option>Consumer</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Status *</label>
              <select value={form.dealStatus} onChange={e => setForm(f => ({ ...f, dealStatus: e.target.value as typeof form.dealStatus }))} className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50">
                <option>Active</option><option>Deployed</option><option>Exited</option><option>Passed</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Investment Amount</label>
              <input type="text" value={form.investmentAmount} onChange={e => setForm(f => ({ ...f, investmentAmount: e.target.value }))} placeholder="e.g. $50,000" className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Ownership / Units</label>
              <input type="text" value={form.ownership} onChange={e => setForm(f => ({ ...f, ownership: e.target.value }))} placeholder="e.g. 0.5% or 10 units" className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Investment Date</label>
              <input type="text" value={form.investmentDate} onChange={e => setForm(f => ({ ...f, investmentDate: e.target.value }))} placeholder="e.g. Q4 2025" className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Current Value</label>
              <input type="text" value={form.currentValue} onChange={e => setForm(f => ({ ...f, currentValue: e.target.value }))} placeholder="e.g. $55,000" className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground block mb-1">Notes (visible to investor)</label>
              <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} rows={2} placeholder="Any notes for the investor..." className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50 resize-none" />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={() => createDeal.mutate(form)} disabled={!form.userId || !form.dealName || createDeal.isPending} className="text-sm bg-sandstone text-flint font-medium px-4 py-2 rounded-lg hover:bg-sandstone/90 transition-colors disabled:opacity-50">
              {createDeal.isPending ? "Assigning..." : "Assign Deal"}
            </button>
            <button onClick={() => { setShowForm(false); resetForm(); }} className="text-sm border text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg transition-colors">Cancel</button>
          </div>
        </div>
      )}

      {deals.isLoading ? (
        <div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-16 bg-muted/50 rounded-xl animate-pulse" />)}</div>
      ) : (deals.data ?? []).length === 0 ? (
        <div className="text-center py-16 bg-card border rounded-xl">
          <TrendingUp className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No deals assigned yet.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {(deals.data ?? []).map(deal => (
            <div key={deal.id} className="bg-card border rounded-xl p-4 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-medium text-foreground">{deal.dealName}</p>
                  <span className="text-xs text-muted-foreground">·</span>
                  <p className="text-xs text-muted-foreground">{deal.dealCategory}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    deal.dealStatus === "Active" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                    deal.dealStatus === "Deployed" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                    "bg-muted text-muted-foreground"
                  }`}>{deal.dealStatus}</span>
                </div>
                <p className="text-xs text-muted-foreground">Investor: {getUserName(deal.userId)}</p>
              </div>
              <button onClick={() => deleteDeal.mutate({ dealId: deal.id })} disabled={deleteDeal.isPending} className="text-muted-foreground hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---- Documents Tab ---- */
function DocumentsTab() {
  const utils = trpc.useUtils();
  const users = trpc.portal.adminListUsers.useQuery();
  const docs = trpc.portal.adminListDocuments.useQuery();
  const createDoc = trpc.portal.adminCreateDocument.useMutation({
    onSuccess: () => { utils.portal.adminListDocuments.invalidate(); toast.success("Document added"); setShowForm(false); resetForm(); },
    onError: () => toast.error("Failed to add document"),
  });

  const [showForm, setShowForm] = useState(false);
  const emptyForm = { userId: null as number | null, title: "", description: "", category: "Other" as const, fileUrl: "", dealName: "", isPlaceholder: true };
  const [form, setForm] = useState(emptyForm);
  const resetForm = () => setForm(emptyForm);

  const approvedUsers = (users.data ?? []).filter(u => u.approvalStatus === "approved");
  const getUserName = (userId: number | null) => userId ? (users.data?.find(u => u.id === userId)?.name ?? `User #${userId}`) : "All Investors";

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 text-sm bg-sandstone text-flint font-medium px-4 py-2 rounded-lg hover:bg-sandstone/90 transition-colors">
          <Plus className="w-4 h-4" /> Add Document
        </button>
      </div>

      {showForm && (
        <div className="bg-card border rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-4">Add Document</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Visible To</label>
              <select value={form.userId ?? ""} onChange={e => setForm(f => ({ ...f, userId: e.target.value ? Number(e.target.value) : null }))} className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50">
                <option value="">All Approved Investors</option>
                {approvedUsers.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Title *</label>
              <input type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g. 2024 K-1 — SpaceX" className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Category *</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as typeof form.category }))} className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50">
                <option>K1</option><option>Operating Agreement</option><option>Deal Memo</option><option>Update</option><option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Related Deal</label>
              <input type="text" value={form.dealName} onChange={e => setForm(f => ({ ...f, dealName: e.target.value }))} placeholder="e.g. SpaceX" className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground block mb-1">File URL (leave blank for placeholder)</label>
              <input type="url" value={form.fileUrl} onChange={e => setForm(f => ({ ...f, fileUrl: e.target.value, isPlaceholder: !e.target.value }))} placeholder="https://..." className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-muted-foreground block mb-1">Description</label>
              <input type="text" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Brief description..." className="w-full text-sm border rounded-lg px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-sandstone/50" />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={() => createDoc.mutate({ ...form, userId: form.userId })} disabled={!form.title || createDoc.isPending} className="text-sm bg-sandstone text-flint font-medium px-4 py-2 rounded-lg hover:bg-sandstone/90 transition-colors disabled:opacity-50">
              {createDoc.isPending ? "Adding..." : "Add Document"}
            </button>
            <button onClick={() => { setShowForm(false); resetForm(); }} className="text-sm border text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg transition-colors">Cancel</button>
          </div>
        </div>
      )}

      {docs.isLoading ? (
        <div className="space-y-3">{[1,2,3].map(i => <div key={i} className="h-16 bg-muted/50 rounded-xl animate-pulse" />)}</div>
      ) : (docs.data ?? []).length === 0 ? (
        <div className="text-center py-16 bg-card border rounded-xl">
          <FileText className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-muted-foreground">No documents added yet.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {(docs.data ?? []).map(doc => (
            <div key={doc.id} className="bg-card border rounded-xl p-4 flex items-center gap-4">
              <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{doc.title}</p>
                <p className="text-xs text-muted-foreground">{doc.category} · {getUserName(doc.userId)}{doc.dealName ? ` · ${doc.dealName}` : ""}</p>
              </div>
              <span className={`text-xs ${doc.isPlaceholder ? "text-amber-500" : "text-emerald-500"}`}>
                {doc.isPlaceholder ? "Placeholder" : "Available"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
