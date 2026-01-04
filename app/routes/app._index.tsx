import { useEffect, useState } from "react";
import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  InlineStack,
  Banner,
  Link,
  Divider,
} from "@shopify/polaris";
import { ExternalIcon } from "@shopify/polaris-icons";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);
  return { shop: session.shop };
};

export default function Index() {
  const { shop } = useLoaderData<typeof loader>();
  const [isOnboarded, setIsOnboarded] = useState(false);

  // Deep link to the Theme Editor for your specific app block
  // Note: This opens the current theme editor.
  const themeEditorUrl = `https://admin.shopify.com/store/${shop.replace(".myshopify.com", "")}/themes/current/editor?context=apps`;

  return (
    <Page title="Dashboard">
      <BlockStack gap="500">
        
        {/* TOP ALERT: If the user hasn't finished setup */}
        {!isOnboarded && (
          <Banner
            title="Thumb-Zone Nav is not active yet"
            tone="warning"
            action={{
              content: "Enable in Theme Editor",
              url: themeEditorUrl,
              target: "_blank",
            }}
            onDismiss={() => setIsOnboarded(true)}
          >
            <p>To display the mobile navigation bar, you must add the app block to your active theme.</p>
          </Banner>
        )}

        <Layout>
          {/* MAIN CONTENT AREA */}
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                <Text as="h2" variant="headingLg">
                  Setup Instructions
                </Text>
                <Text as="p" variant="bodyMd">
                  Follow these steps to get your mobile navigation bar running in less than 2 minutes.
                </Text>
                
                <Divider />

                <BlockStack gap="400">
                  <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Step 1: Open the Theme Editor</Text>
                    <Text as="p" tone="subdued">Click the button below to open your store's customization page.</Text>
                    <Box paddingBlockStart="200">
                      <Button url={themeEditorUrl} target="_blank" icon={ExternalIcon} variant="primary">
                        Open Theme Editor
                      </Button>
                    </Box>
                  </Box>

                  <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Step 2: Add the "Thumb Nav" Block</Text>
                    <Text as="p" tone="subdued">
                      In the Theme Editor sidebar, look for <b>"App embeds"</b> or click <b>"Add section"</b> depending on your theme version.
                      Search for <b>"Thumb Nav"</b> and add it.
                    </Text>
                  </Box>

                  <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Step 3: Customize & Save</Text>
                    <List type="bullet">
                      <List.Item>Adjust the <b>Background Color</b> to match your brand.</List.Item>
                      <List.Item>Select your icons (Home, Search, Cart, Account).</List.Item>
                      <List.Item>Click <b>Save</b> in the top right corner.</List.Item>
                    </List>
                  </Box>
                </BlockStack>
              </BlockStack>
            </Card>
            
            <Box paddingBlockStart="400">
              <Card>
                 <BlockStack gap="400">
                    <Text as="h2" variant="headingMd">Feature Highlights</Text>
                    <InlineStack gap="400" wrap={false}>
                        <Box width="33%">
                            <Text as="h3" variant="headingSm">📱 Mobile First</Text>
                            <Text as="p" variant="bodySm" tone="subdued">Designed specifically for the "Thumb Zone" on modern smartphones.</Text>
                        </Box>
                        <Box width="33%">
                            <Text as="h3" variant="headingSm">🎨 Customizable</Text>
                            <Text as="p" variant="bodySm" tone="subdued">Full control over colors, sizes, and specific links.</Text>
                        </Box>
                        <Box width="33%">
                            <Text as="h3" variant="headingSm">⚡ Zero Lag</Text>
                            <Text as="p" variant="bodySm" tone="subdued">Lightweight code that won't slow down your store.</Text>
                        </Box>
                    </InlineStack>
                 </BlockStack>
              </Card>
            </Box>
          </Layout.Section>

          {/* SIDEBAR: HELP & SUPPORT */}
          <Layout.Section variant="oneThird">
            <BlockStack gap="500">
              <Card>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">Need Help?</Text>
                  <Text as="p" variant="bodyMd">
                    Having trouble setting up? Our support team is here to assist you.
                  </Text>
                  <Button url="mailto:support@waitlist.sh" fullWidth>Contact Support</Button>
                </BlockStack>
              </Card>

              <Card>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">Quick Tips</Text>
                   <List>
                      <List.Item>The nav bar only appears on <b>Mobile</b> devices.</List.Item>
                      <List.Item>Test on a real phone to see the true "Thumb Zone" effect.</List.Item>
                   </List>
                </BlockStack>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}