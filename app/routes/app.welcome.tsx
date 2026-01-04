import { Page, Layout, Card, Text, BlockStack, Button, InlineStack, Box } from "@shopify/polaris";
import { ArrowRightIcon } from "@shopify/polaris-icons";
import { Link } from "react-router"; // Use standard Link for internal nav

export default function Welcome() {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Box paddingBlockEnd="400">
             <BlockStack align="center" inlineAlign="center" gap="400">
                <Text as="h1" variant="headingXl" alignment="center">
                   Welcome to Thumb-Zone Nav! 🚀
                </Text>
                <Text as="p" variant="bodyLg" tone="subdued" alignment="center">
                   You are one step away from boosting your mobile conversion rates.
                </Text>
             </BlockStack>
          </Box>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <BlockStack gap="600">
                <div style={{textAlign: "center"}}>
                   {/* You can replace this with a real image/gif if you have one hosted */}
                   <div style={{
                       background: "linear-gradient(90deg, #e3f2fd 0%, #f3e5f5 100%)", 
                       padding: "40px", 
                       borderRadius: "12px",
                       marginBottom: "20px"
                   }}>
                      <Text as="h2" variant="headingLg">Mobile Navigation Re-imagined</Text>
                   </div>
                </div>

                <BlockStack gap="400">
                   <Text as="p" variant="bodyMd">
                      Most mobile users hold their phones with one hand. Traditional top-menus are hard to reach. 
                      <b>Thumb-Zone Nav</b> moves your critical links to the bottom of the screen, right where your customers' thumbs are.
                   </Text>
                   
                   <InlineStack gap="300">
                       <Link to="/app">
                         <Button variant="primary" size="large" icon={ArrowRightIcon}>
                           Go to Dashboard & Enable
                         </Button>
                       </Link>
                       <Button url="https://waitlist.sh" target="_blank" variant="plain">
                          Learn more about the science
                       </Button>
                   </InlineStack>
                </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}