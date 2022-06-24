import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
let url = "";
let anonKey = "";

class SupaBase {
  sbClient = new SupabaseClient(url, anonKey);
  constructor() {
    if (!this.sbClient) {
      this.sbClient = createClient(url, anonKey);
    }
  }
  selectFromTable = (table) => {
    this.sbClient
      .from(table)
      .select("*")
      .then((response) => console.log(response.data));
  };
  insertToTable = (table, payload) => {
    SupabaseGateway.sbClient
      .from(table)
      .insert(payload)
      .then((response) => console.log(response));
  };
}
export const SupabaseGateway = new SupaBase();
