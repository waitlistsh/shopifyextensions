import { useState } from "react";
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
  InlineStack,
  Icon,
  Badge,
  Grid,
} from "@shopify/polaris";
import {
  ExternalIcon,
  CheckIcon,
  ChartLineIcon,
  MobileIcon,
} from "@shopify/polaris-icons";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);
  return { shop: session.shop };
};

export default function Dashboard() {
  const { shop } = useLoaderData<typeof loader>();
  
  // State for the Wizard & Status
  const [currentStep, setCurrentStep] = useState(1);
  const [isAppActive, setIsAppActive] = useState(false); // Simulates if app is enabled

  const themeEditorUrl = `https://admin.shopify.com/store/${shop.replace(".myshopify.com", "")}/themes/current/editor?context=apps`;

  // Wizard Step Content
  const totalSteps = 3;

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsAppActive(true); // Finish setup
    }
  };

  return (
    <Page title="Dashboard">
      <style>{`
        /* 1. Pulsing Dot Animation */
        .pulsing-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          position: relative;
        }
        .pulsing-dot.inactive { background-color: #d1d5db; }
        .pulsing-dot.active { background-color: #10b981; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); animation: pulse-green 2s infinite; }
        
        @keyframes pulse-green {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* 2. Custom Wizard Stepper */
        .stepper-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;
            position: relative;
        }
        .stepper-line {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: #e5e7eb;
            z-index: 1;
        }
        .stepper-progress {
            position: absolute;
            top: 50%;
            left: 0;
            height: 2px;
            background: #4f46e5;
            z-index: 2;
            transition: width 0.3s ease;
        }
        .step-bubble {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: white;
            border: 2px solid #e5e7eb;
            z-index: 3;
            font-weight: bold;
            color: #6b7280;
            transition: all 0.3s ease;
        }
        .step-bubble.active { border-color: #4f46e5; color: #4f46e5; }
        .step-bubble.completed { background: #4f46e5; border-color: #4f46e5; color: white; }

        /* 3. Sidebar Sticky Note */
        .note-card { background-color: #eff6ff !important; border: 1px solid #bfdbfe; }
        
        /* 4. Ghost Card */
        .ghost-card { background: transparent !important; box-shadow: none !important; border: 1px dashed #d1d5db; }
      `}</style>

      <BlockStack gap="500">
        
        {/* --- STATUS CARD --- */}
        <Card>
          <InlineStack align="space-between" blockAlign="center">
            <InlineStack gap="300" blockAlign="center">
              <div className={`pulsing-dot ${isAppActive ? 'active' : 'inactive'}`}></div>
              <BlockStack gap="050">
                <Text as="h2" variant="headingSm">System Status</Text>
                <Text as="p" tone="subdued">
                    {isAppActive ? "🟢 Active & Live on Store" : "⚪ Inactive - Setup Required"}
                </Text>
              </BlockStack>
            </InlineStack>
            
            {/* If active, show a 'Manage' button, else show nothing (user must complete wizard) */}
            {isAppActive && (
               <Button url={themeEditorUrl} target="_blank" variant="plain" icon={ExternalIcon}>Manage Settings</Button>
            )}
          </InlineStack>
        </Card>

        <Layout>
          <Layout.Section>
            <BlockStack gap="500">
              
              {/* --- SETUP WIZARD (Shows only if not active) --- */}
              {!isAppActive ? (
                <Card>
                  <BlockStack gap="400">
                    <Box paddingBlockEnd="200">
                        <Text as="h2" variant="headingMd">Setup Wizard</Text>
                        <Text as="p" tone="subdued">Complete these 3 steps to activate.</Text>
                    </Box>

                    {/* Visual Stepper */}
                    <div className="stepper-container">
                        <div className="stepper-line"></div>
                        <div className="stepper-progress" style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}></div>
                        {[1, 2, 3].map((step) => (
                            <div key={step} className={`step-bubble ${step < currentStep ? 'completed' : ''} ${step === currentStep ? 'active' : ''}`}>
                                {step < currentStep ? <Icon source={CheckIcon} tone="inherit"/> : step}
                            </div>
                        ))}
                    </div>

                    {/* Step Content Swapper */}
                    <Box padding="400" background="bg-surface-secondary" borderRadius="200">
                        {currentStep === 1 && (
                            <BlockStack gap="400">
                                <Text as="h3" variant="headingSm">Step 1: Open Theme Editor</Text>
                                <Text as="p">We need to open your current theme to add the app block.</Text>
                                <Button url={themeEditorUrl} target="_blank" icon={ExternalIcon} variant="primary" onClick={handleNextStep}>
                                    Open Theme Editor
                                </Button>
                            </BlockStack>
                        )}
                        
                        {currentStep === 2 && (
                             <Grid>
                                <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 6, lg: 6, xl: 6}}>
                                    <BlockStack gap="400">
                                        <Text as="h3" variant="headingSm">Step 2: Enable "Thumb Nav"</Text>
                                        <Text as="p">
                                            1. In the sidebar, click <b>App embeds</b> (icon on the far left).<br/>
                                            2. Toggle <b>Thumb-Zone Nav</b> to ON.
                                        </Text>
                                        <Button onClick={handleNextStep}>I've done this</Button>
                                    </BlockStack>
                                </Grid.Cell>
                                <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 6, lg: 6, xl: 6}}>
                                    {/* GIF Placeholder - Make sure to put setup-step-2.gif in your public folder */}
                                    <div style={{background: '#f1f1f1', borderRadius: '8px', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <img 
                                          src="/setup-step-2.gif" 
                                          alt="Instruction GIF" 
                                          style={{maxWidth: '100%', borderRadius: '8px', display: 'block'}}
                                          onError={(e) => (e.currentTarget.style.display = 'none')} 
                                        />
                                        {!isAppActive && <Text as="p" tone="subdued" variant="bodyXs">Preview GIF</Text>}
                                    </div>
                                </Grid.Cell>
                             </Grid>
                        )}

                        {currentStep === 3 && (
                            <BlockStack gap="400">
                                <Text as="h3" variant="headingSm">Step 3: Save Changes</Text>
                                <Text as="p">Click the black <b>Save</b> button in the top right corner of the theme editor.</Text>
                                <InlineStack gap="300">
                                    <Button variant="primary" onClick={handleNextStep} icon={CheckIcon}>Verify & Finish</Button>
                                </InlineStack>
                            </BlockStack>
                        )}
                    </Box>
                  </BlockStack>
                </Card>
              ) : (
                /* --- ANALYTICS DASHBOARD (Shows when setup is done) --- */
                <Card>
                    <BlockStack gap="400">
                        <InlineStack align="space-between">
                            <Text as="h2" variant="headingMd">Live Mobile Performance</Text>
                            <Badge tone="success">Live Data</Badge>
                        </InlineStack>
                        
                        <Grid>
                            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}}>
                                <Box padding="400" background="bg-surface-secondary" borderRadius="200">
                                    <BlockStack gap="200">
                                        <Icon source={MobileIcon} tone="base"/>
                                        <Text as="p" tone="subdued">Mobile Sessions</Text>
                                        <Text as="h3" variant="headingLg">1,204</Text>
                                    </BlockStack>
                                </Box>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}}>
                                <Box padding="400" background="bg-surface-secondary" borderRadius="200">
                                    <BlockStack gap="200">
                                        <Icon source={ChartLineIcon} tone="base"/>
                                        <Text as="p" tone="subdued">Thumb-Zone Clicks</Text>
                                        <Text as="h3" variant="headingLg">482</Text>
                                    </BlockStack>
                                </Box>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 6, lg: 6, xl: 6}}>
                                <div style={{height: '100%', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb', borderRadius: '8px', border: '1px dashed #d1d5db'}}>
                                    <Text as="p" tone="subdued">Chart visualization loading...</Text>
                                </div>
                            </Grid.Cell>
                        </Grid>
                    </BlockStack>
                </Card>
              )}

            </BlockStack>
          </Layout.Section>

          {/* --- SIDEBAR --- */}
          <Layout.Section variant="oneThird">
            <BlockStack gap="500">
              
              {/* "Sticky Note" Quick Tips */}
              <div className="note-card" style={{ padding: '16px', borderRadius: '8px' }}>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">💡 Quick Tips</Text>
                   <Text as="p" variant="bodySm">
                      Did you know? You can change the icon style from "Outline" to "Filled" in the theme settings to match your brand better.
                   </Text>
                </BlockStack>
              </div>

              {/* "Ghost" Help Card */}
              <div className="ghost-card" style={{ padding: '16px', borderRadius: '8px' }}>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">Need Help?</Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Stuck on step {currentStep}? Our support team is ready.
                  </Text>
                  {/* Updated with your mailto logic */}
                  <Button variant="plain" url="mailto:your-email@example.com?subject=Support Request" external>Contact Support</Button>
                </BlockStack>
              </div>

            </BlockStack>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}