import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
let url = "";
let anonKey = "";

class Supabase {
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
  updateTable = (table, payload, match) => {
    SupabaseGateway.sbClient.from(table).update(payload).match(match);
  };
  deleteFromTable = (table, match) => {
    SupabaseGateway.sbClient.from(table).delete().match(match);
  };
}
export const SupabaseGateway = new Supabase();
