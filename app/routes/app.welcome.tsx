import type { LoaderFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export default function Welcome() {
  return (
    <s-page heading="Welcome to Thumb-Zone Nav: Mobile Bar">
      <s-stack gap="base" direction="block">
        
        {/* Main Section */}
        <s-section heading="Get Started with Thumb Zone Nav">
          <s-stack gap="base" direction="block">
            <s-paragraph>
              Thank you for installing <strong>Thumb-Zone Nav: Mobile Bar</strong>! Follow these steps to activate your thumb-friendly navigation menu and boost your mobile conversions.
            </s-paragraph>
            
            <s-heading>Step 1: Enable the App Embed</s-heading>
            <s-paragraph>
              To see the menu on your store, you must enable the <strong>"thumb-zone-nav"</strong> App Embed in your Shopify Theme Editor.
            </s-paragraph>
            
            {/* Note: s-button sometimes doesn't support href directly in all versions. 
                If this still errors, change <s-button> to <s-link> */}
            <s-link href="https://admin.shopify.com/store/current-shop/themes/current/editor?context=apps" target="_blank">
              Open Theme Editor
            </s-link>

            <s-heading>Step 2: Customize Your Menu</s-heading>
            <s-paragraph>
              Go to the Dashboard to set up your links, icons, and colors. You can choose from over 100 themes to match your brand.
            </s-paragraph>
            <s-link href="/app">Go to Dashboard</s-link>
          </s-stack>
        </s-section>

        {/* Sidebar / Help Section */}
        <s-section heading="Need Help?">
          <s-stack gap="base" direction="block">
            <s-paragraph>
              If you have any questions or need help configuring your menu, please contact our support team.
            </s-paragraph>
            <s-link href="mailto:support@example.com">Contact Support</s-link>
          </s-stack>
        </s-section>

      </s-stack>
    </s-page>
  );
}