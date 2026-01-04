import { Page, Layout, Card, BlockStack, Text, List, InlineStack, Box, Divider, Badge } from "@shopify/polaris";

export default function Instruction() {
  return (
    <Page title="How to Use & Features">
      <Layout>
        
        {/* SECTION 1: THE SCIENCE */}
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <Text as="h2" variant="headingLg">Why the "Thumb Zone" Matters</Text>
              <BlockStack gap="400">
                <Text as="p" variant="bodyLg">
                  Steven Hoober’s research found that <b>75% of users browse with one thumb</b>.
                  The bottom of the screen is the "Natural Zone." Placing navigation here reduces friction and increases conversion rates.
                </Text>
                
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* SECTION 2: CONVERSION BOOSTERS */}
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
              <InlineStack gap="300" align="start">
                <Text as="h2" variant="headingLg">Conversion Boosters</Text>
              </InlineStack>
              
              <Divider />

              <BlockStack gap="400">
                <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Sticky Add-to-Cart Button</Text>
                    <Text as="p" tone="subdued">
                        When a user visits a <b>Product Page</b>, the center icon automatically transforms into a prominent "Buy" button.
                    </Text>
                    <List type="bullet">
                        <List.Item><b>Enable:</b> Check "Enable Sticky Add-to-Cart".</List.Item>
                        <List.Item><b>Label:</b> Customize the text (e.g., "ADD +", "BUY NOW").</List.Item>
                    </List>
                </Box>

                <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Floating Ticker</Text>
                    <Text as="p" tone="subdued">
                        A pill-shaped message that pops up above the nav bar to announce offers.
                    </Text>
                    <List type="bullet">
                        <List.Item><b>Message:</b> Enter text like " Free Shipping over $50".</List.Item>
                        <List.Item><b>Trigger:</b> Choose when it appears: <i>Always</i>, <i>First Visit Only</i>, or <i>When Cart has Items</i>.</List.Item>
                    </List>
                </Box>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* SECTION 3: DESIGN & COLORS */}
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
               <InlineStack gap="300" align="start">
                <Text as="h2" variant="headingLg">Design & Customization</Text>
              </InlineStack>

              <Divider />

              <BlockStack gap="400">
                 <Box>
                    <InlineStack gap="200" align="start">
                        <Text as="h3" variant="headingMd" fontWeight="bold">Design Themes</Text>
                        <Badge tone="info">Popular</Badge>
                    </InlineStack>
                    <Text as="p" tone="subdued">
                        Instantly change the vibe of your store. Select from presets like <b>iOS Glass</b>, <b>Dynamic Island</b>, <b>Cyberpunk</b>, or <b>Minimalist</b>.
                    </Text>
                 </Box>

                 <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Colors & Inheritance</Text>
                    <List type="bullet">
                        <List.Item><b>Inherit Theme Colors:</b> Check this to automatically match your store's existing color palette.</List.Item>
                        <List.Item><b>Custom Colors:</b> To manually set colors, check "Enable Custom Colors". You can then pick the Background, Active Icon, and Inactive Icon colors.</List.Item>
                        <List.Item><b>Auto Dark Mode:</b> Automatically switches the bar to dark colors when the user's phone is in Dark Mode.</List.Item>
                    </List>
                 </Box>

                 <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Opacity & Shape</Text>
                    <Text as="p" tone="subdued">
                        Use the sliders to adjust the <b>Corner Radius</b> (0px for square, 50px for round pill) and the <b>Transparency</b> of the bar.
                    </Text>
                 </Box>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* SECTION 4: MENU CONTENT */}
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
               <InlineStack gap="300" align="start">
                <Text as="h2" variant="headingLg">Menu Content</Text>
              </InlineStack>

              <Divider />

              <BlockStack gap="400">
                 <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Icon Names</Text>
                    <Text as="p" tone="subdued">
                        We use the <b>Remix Icon</b> library. Enter icon names separated by commas (e.g., <code>home-5, search, user, heart</code>).
                    </Text>
                    <Text as="p" tone="subdued"><i>Tip: Use 'history' to create a Recently Viewed Products button.</i></Text>
                 </Box>

                 <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Custom Labels & Links</Text>
                    <List type="bullet">
                        <List.Item><b>Labels:</b> Override the default menu names (e.g., change "Catalog" to "Shop").</List.Item>
                        <List.Item><b>Link Overrides:</b> Force an icon to go to a specific URL (e.g., send the "Heart" icon to <code>/pages/wishlist</code>).</List.Item>
                    </List>
                 </Box>

                 <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Cart Badge</Text>
                    <Text as="p" tone="subdued">
                        Enable "Show Cart Badge" to display a small red number on the cart icon indicating how many items are added.
                    </Text>
                 </Box>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>

        {/* SECTION 5: LAYOUT & BEHAVIOR */}
        <Layout.Section>
          <Card>
            <BlockStack gap="500">
               <InlineStack gap="300" align="start">
                <Text as="h2" variant="headingLg">Layout & Behavior</Text>
              </InlineStack>

              <Divider />

              <BlockStack gap="400">
                 <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Sizing</Text>
                    <Text as="p" tone="subdued">
                        Fine-tune the size of elements to fit your design:
                    </Text>
                    <List type="bullet">
                        <List.Item><b>Icon Size:</b> Adjusts the SVG icon scale (16px - 40px).</List.Item>
                        <List.Item><b>Label Size:</b> Adjusts the text font size below the icon.</List.Item>
                        <List.Item><b>Bar Width:</b> Controls how wide the bar is on the screen (50% - 100%).</List.Item>
                    </List>
                 </Box>

                 <Box>
                    <Text as="h3" variant="headingMd" fontWeight="bold">Advanced Behaviors</Text>
                    <List type="bullet">
                        <List.Item><b>Push Content Up:</b> Adds padding to the bottom of your website so the nav bar doesn't cover your footer content.</List.Item>
                        <List.Item><b>Allow Drag & Rotate:</b> Lets customers drag the nav bar around their screen. If dragged to the side, it transforms into a vertical pill.</List.Item>
                    </List>
                 </Box>
              </BlockStack>
            </BlockStack>
          </Card>
        </Layout.Section>

      </Layout>
    </Page>
  );
}