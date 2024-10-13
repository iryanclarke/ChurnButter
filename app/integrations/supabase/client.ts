import { createClient } from "@supabase/supabase-js";

import {
	SUPABASE_URL,
	SUPABASE_KEY,
} from "@utils/env";

// ⚠️ cloudflare needs you define fetch option : https://github.com/supabase/supabase-js#custom-fetch-implementation
// Use Remix fetch polyfill for node (See https://remix.run/docs/en/v1/other-api/node)
function getSupabaseClient() {
    console.log("SUPABASE_URL", SUPABASE_URL);
    console.log("SUPABASE_KEY", SUPABASE_KEY);
	return createClient(SUPABASE_URL, SUPABASE_KEY);
}

/**
 * Provides a Supabase Admin Client with full admin privileges
 *
 * It's a per request scoped client, to prevent access token leaking if you don't use it like `getSupabaseAdmin().auth.api`.
 *
 * Reason : https://github.com/rphlmr/supa-fly-stack/pull/43#issue-1336412790
 */
// function getSupabaseAdmin() {
// 	if (isBrowser)
// 		throw new Error(
// 			"getSupabaseAdmin is not available in browser and should NOT be used in insecure environments",
// 		);

// 	return getSupabaseClient(SUPABASE_SERVICE_ROLE);
// }

const supabaseClient = getSupabaseClient();

export { supabaseClient };