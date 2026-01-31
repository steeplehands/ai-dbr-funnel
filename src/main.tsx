import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { StartPage } from "./app/pages/StartPage.tsx";
import { SuccessPage } from "./app/pages/SuccessPage.tsx";
import "./styles/index.css";

// Determine which page to render based on subdomain
function getPageComponent() {
  const hostname = window.location.hostname;

  // Handle subdomain-based routing
  if (hostname.startsWith('start.') || hostname === 'start.rizo.pro') {
    return <StartPage />;
  }

  if (hostname.startsWith('success.') || hostname === 'success.rizo.pro') {
    return <SuccessPage />;
  }

  // For local development, check URL path or query params
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page');

  if (page === 'start') {
    return <StartPage />;
  }

  if (page === 'success') {
    return <SuccessPage />;
  }

  // Default: get.rizo.pro (main funnel page)
  return <App />;
}

createRoot(document.getElementById("root")!).render(getPageComponent());
  