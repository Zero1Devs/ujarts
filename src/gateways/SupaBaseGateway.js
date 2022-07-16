import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
let url = "https://rejvaycjmxvuyulhrizp.supabase.co";
let anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlanZheWNqbXh2dXl1bGhyaXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU4MDI0NTgsImV4cCI6MTk3MTM3ODQ1OH0.cobJwV0rCJI6lvw0IcyEIJcshT1Crx7WC7v9qNfETpc";

class Supabase {
  sbClient = new SupabaseClient(url, anonKey);
  constructor() {
    if (!this.sbClient) {
      this.sbClient = createClient(url, anonKey);
    }
  }
  selectFromTable = async (table) => {
    return await this.sbClient.from(table).select("*");
    //.then((response) => console.log(response.data));
  };
  selectFromTableWithForeignKey = async (table, select) => {
    return await this.sbClient.from(table).select("*," + select);
    //.then((response) => console.log(response.data));
  };
  getUserData = (match) => {
    this.sbClient
      .from("users")
      .select("*")
      .match(match)
      .then((response) => console.log(response.data));
  };
  insertToTable = async (table, payload) => {
    return await SupabaseGateway.sbClient.from(table).insert(payload);
    // .then((response) => console.log(response));
  };
  updateTable = async (table, payload, match) => {
    return await SupabaseGateway.sbClient
      .from(table)
      .update(payload)
      .match(match);
  };
  deleteFromTable = (table, match) => {
    SupabaseGateway.sbClient.from(table).delete().match(match);
  };
}
export const SupabaseGateway = new Supabase();
