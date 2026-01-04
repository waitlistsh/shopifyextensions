import type { LoaderFunctionArgs } from "react-router";

// This loader ensures the page is public and doesn't require Shopify login
export const loader = async ({ request }: LoaderFunctionArgs) => {
  return null; 
};

export default function PrivacyPolicy() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Introduction</h2>
      <p>
        Thumb-Zone Nav: Mobile Bar ("we", "our", or "us") provides this Privacy Policy to describe how we collect, use, 
        and handle your personal information when you use our Shopify app.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        When you install the App, we are automatically able to access certain types of information from your Shopify account:
      </p>
      <ul>
        <li>Shopify account data (e.g., shop name, email, address).</li>
        <li>Product data (to display and manage your products).</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use the personal information we collect from you and your customers in order to provide the Service 
        and to operate the App.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain your personal information only for as long as necessary to provide you with our services 
        and as described in this Privacy Policy.
      </p>

      <h2>5. Contact Us</h2>
      <p>
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, 
        please contact us by e-mail at navexeui@outlook.com.
      </p>
    </div>
  );
}
