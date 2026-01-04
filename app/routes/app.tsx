import type { LoaderFunctionArgs } from "react-router";
import { Link, Outlet, useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { AppProvider } from "@shopify/shopify-app-react-router/react";
import { NavMenu } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";

// 1. Rename the Polaris Provider to avoid conflict
import { AppProvider as PolarisAppProvider } from "@shopify/polaris";
import polarisTranslations from "@shopify/polaris/locales/en.json";

// 2. Import Polaris Styles (Required for the dashboard to look good)
import "@shopify/polaris/build/esm/styles.css";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    // Outer Provider: Handles App Bridge (Connection to Shopify)
    <AppProvider embedded apiKey={apiKey}>
      
      {/* Inner Provider: Handles UI Components & Translations */}
      <PolarisAppProvider i18n={polarisTranslations}>
        
        <NavMenu>
          <Link to="/app" rel="home">Home</Link>
          <Link to="/app/welcome">Welcome</Link>
          <Link to="/app/additional">Additional page</Link>
        </NavMenu>
        
        <Outlet />
      
      </PolarisAppProvider>
    </AppProvider>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs: any) => {
  return boundary.headers(headersArgs);
};