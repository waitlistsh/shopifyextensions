import type { ActionFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    // 1. Validate the webhook (throws error if signature is fake)
    const { topic, shop } = await authenticate.webhook(request);
    console.log(`Received ${topic} webhook for ${shop}`);

    // 2. Return 200 for valid requests
    return new Response("Webhook received", { status: 200 });

  } catch (error) {
    // 3. CATCH THE ERROR: Return 401 Unauthorized explicitly
    // This satisfies the Shopify scanner check
    console.log("Webhook validation failed", error);
    return new Response("Unauthorized", { status: 401 });
  }
};