import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import TeamPage from "./pages/TeamPage";
import DealflowPage from "./pages/DealflowPage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import LPLoginPage from "./pages/LPLoginPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/team"} component={TeamPage} />
      <Route path={"/dealflow"} component={DealflowPage} />
      <Route path={"/news"} component={NewsPage} />
      <Route path={"/news/:id"} component={ArticleDetailPage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/lp-login"} component={LPLoginPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
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
