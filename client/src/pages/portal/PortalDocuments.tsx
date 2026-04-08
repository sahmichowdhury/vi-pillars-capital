/**
 * Portal Documents — investor's documents library
 */
import { FileText, Download, Clock, Tag, FolderOpen } from "lucide-react";
import { trpc } from "@/lib/trpc";

const categoryColors: Record<string, string> = {
  "K1": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Operating Agreement": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Deal Memo": "bg-sandstone/10 text-sandstone",
  "Update": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Other": "bg-muted text-muted-foreground",
};

export default function PortalDocuments() {
  const myDocuments = trpc.portal.myDocuments.useQuery();
  const docs = myDocuments.data ?? [];

  // Group by category
  const grouped = docs.reduce<Record<string, typeof docs>>((acc, doc) => {
    const cat = doc.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(doc);
    return acc;
  }, {});

  const categoryOrder = ["K1", "Operating Agreement", "Deal Memo", "Update", "Other"];
  const sortedCategories = categoryOrder.filter(c => grouped[c]?.length > 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-serif font-bold text-foreground">Documents</h1>
        <p className="text-muted-foreground mt-1">
          Your investment documents, tax forms, and deal materials.
        </p>
      </div>

      {myDocuments.isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-20 bg-muted/50 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : docs.length === 0 ? (
        <div className="text-center py-20 bg-card border rounded-xl">
          <FolderOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No Documents Yet</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            Your K-1s, operating agreements, deal memos, and other documents will appear here as they become available.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {sortedCategories.map((category) => (
            <div key={category}>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" />
                {category}
              </h2>
              <div className="space-y-2">
                {grouped[category].map((doc) => (
                  <div key={doc.id} className="bg-card border rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <FileText className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground text-sm truncate">{doc.title}</p>
                      <div className="flex items-center gap-3 mt-0.5">
                        {doc.dealName && (
                          <p className="text-xs text-muted-foreground">{doc.dealName}</p>
                        )}
                        {doc.description && (
                          <p className="text-xs text-muted-foreground truncate">{doc.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[category] ?? categoryColors.Other}`}>
                        {category}
                      </span>
                      {doc.isPlaceholder ? (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground/60">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Pending</span>
                        </div>
                      ) : doc.fileUrl ? (
                        <a
                          href={doc.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-sandstone hover:text-sandstone/80 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground/60">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Coming soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-muted-foreground/60 mt-8 text-center">
        Documents are provided for informational purposes. Contact VI Pillars Capital for official copies or questions.
      </p>
    </div>
  );
}
