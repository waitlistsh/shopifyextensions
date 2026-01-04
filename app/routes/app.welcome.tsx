import { Page, Layout, Text, BlockStack, InlineStack, Box } from "@shopify/polaris";
import { Link } from "react-router"; 

export default function Welcome() {
  return (
    <Page title="Thumb-Zone Nav">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .pro-welcome-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #4B5563;
        }
        .pro-card {
          background: white;
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
          border: 1px solid #E5E7EB;
        }

        /* BUTTONS */
        .vibrant-button {
          background: linear-gradient(135deg, #5c6ac4 0%, #4f46e5 100%);
          color: white !important;
          font-weight: 600;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          display: inline-block;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }
        .vibrant-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.4);
          text-decoration: none;
        }

        .ghost-button {
          color: #6B7280;
          font-weight: 500;
          padding: 16px 24px;
          border-radius: 12px;
          text-decoration: none;
          border: 1px solid transparent;
          display: inline-block;
          cursor: pointer;
        }
        .ghost-button:hover {
          color: #111827;
          background: #F3F4F6;
          text-decoration: none;
        }

        /* PHONE FRAME */
        .phone-frame {
          width: 280px;
          height: 560px;
          background: #000;
          border-radius: 40px;
          padding: 12px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          margin: 0 auto;
          position: relative;
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
          
          /* FIXED: Use 'contain' to fit the whole image inside */
          background-image: url('/screenshot.png'); 
          background-size: contain; 
          background-position: center; 
          background-repeat: no-repeat;
          background-color: #000; /* Adds black bars if image ratio is different */
        }
        .phone-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 25px;
          background: #000;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          z-index: 10;
        }
        .gradient-bg {
           background: linear-gradient(180deg, #eff6ff 0%, #ffffff 100%);
           border-radius: 20px;
           padding: 40px 0;
        }
      `}</style>

      <div className="pro-welcome-container">
        <Layout>
          <Layout.Section>
            <Box paddingBlockEnd="800" paddingBlockStart="400">
               <BlockStack align="center" inlineAlign="center" gap="400">
                  <Text as="h1" variant="heading2xl" alignment="center" fontWeight="bold">
                     Welcome to Thumb-Zone Nav
                  </Text>
                  <Text as="p" variant="bodyLg" tone="subdued" alignment="center">
                     Boost your mobile conversions with one-handed navigation.
                  </Text>
               </BlockStack>
            </Box>
          </Layout.Section>

          <Layout.Section>
            <div className="pro-card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
                    
                    {/* LEFT COLUMN */}
                    <BlockStack gap="600">
                        <BlockStack gap="400">
                          <Text as="h2" variant="headingXl" fontWeight="bold">
                            Stop making thumbs stretch.
                          </Text>
                          <div style={{ maxWidth: '450px' }}>
                            <Text as="p" variant="bodyLg" tone="subdued">
                              75% of users browse with one hand. Traditional top menus are hard to reach. 
                              <b> Thumb-Zone Nav</b> moves key links to the bottom, right where the thumb rests naturally.
                            </Text>
                          </div>
                        </BlockStack>

                        <InlineStack gap="300" align="start" blockAlign="center">
                            {/* LINK 1: DASHBOARD */}
                            <Link to="/app" className="vibrant-button">
                               Go to Dashboard & Enable
                            </Link>

                            {/* LINK 2: SCIENCE PAGE (Must match the new file name) */}
                            <Link to="/app/instruction" className="ghost-button">
                               How to Use & Science
                            </Link>
                        </InlineStack>
                    </BlockStack>

                    {/* RIGHT COLUMN */}
                    <div className="gradient-bg">
                        <div className="phone-frame">
                            <div className="phone-notch"></div>
                            {/* This div uses the background-image defined in CSS above */}
                            <div className="phone-screen"></div>
                        </div>
                    </div>

                </div>
            </div>
          </Layout.Section>
        </Layout>
      </div>
    </Page>
  );
}