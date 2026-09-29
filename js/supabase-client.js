(function () {
  'use strict';

  var config = window.MC_SUPABASE_CONFIG || {};
  var sdk = window.supabase;

  window.mcSupabase = null;
  if (sdk && config.url && config.anonKey) {
    window.mcSupabase = sdk.createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  }
})();