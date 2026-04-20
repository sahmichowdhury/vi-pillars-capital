import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import DealflowPage from "./pages/DealflowPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import LPLoginPage from "./pages/LPLoginPage";
import PortalLayout from "./components/PortalLayout";
import PortalDashboard from "./pages/portal/PortalDashboard";
import PortalInvestments from "./pages/portal/PortalInvestments";
import PortalDocuments from "./pages/portal/PortalDocuments";
import PortalProfile from "./pages/portal/PortalProfile";
import AdminPanel from "./pages/portal/AdminPanel";

function withPortalLayout(Component: React.ComponentType) {
  return function PortalPage() {
    return (
      <PortalLayout>
        <Component />
      </PortalLayout>
    );
  };
}

const PortalDashboardPage = withPortalLayout(PortalDashboard);
const PortalInvestmentsPage = withPortalLayout(PortalInvestments);
const PortalDocumentsPage = withPortalLayout(PortalDocuments);
const PortalProfilePage = withPortalLayout(PortalProfile);
const AdminPanelPage = withPortalLayout(AdminPanel);

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/dealflow"} component={DealflowPage} />
      <Route path={"/news"} component={NewsPage} />
      <Route path={"/news/:id"} component={ArticleDetailPage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/lp-login"} component={LPLoginPage} />
      <Route path="/portal" component={PortalDashboardPage} />
      <Route path="/portal/investments" component={PortalInvestmentsPage} />
      <Route path="/portal/documents" component={PortalDocumentsPage} />
      <Route path="/portal/profile" component={PortalProfilePage} />
      <Route path="/portal/admin" component={AdminPanelPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
