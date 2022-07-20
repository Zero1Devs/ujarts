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
  selectFromTable = async (table) => {
    return await this.sbClient.from(table).select("*");
    //.then((response) => console.log(response.data));
  };
  selectFromTableWithForeignKey = async (table, select) => {
    return await this.sbClient.from(table).select("*," + select);
    //.then((response) => console.log(response.data));
  };
  getUserData = async (match) => {
    return await this.sbClient.from("users").select("*").match(match);
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
