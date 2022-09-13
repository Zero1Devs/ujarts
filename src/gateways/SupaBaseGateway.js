import { createClient, SupabaseClient } from "@supabase/supabase-js";
// Create a single supabase client for interacting with your database
class Supabase {
  sbClient = new SupabaseClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_PUBLIC_ANON_KEY
  );
  constructor() {
    if (!this.sbClient) {
      this.sbClient = createClient(
        process.env.REACT_APP_SUPABASE_URL,
        process.env.REACT_APP_SUPABASE_PUBLIC_ANON_KEY
      );
    }
  }
  selectFromTable = async (table) => {
    return await this.sbClient.from(table).select("*");
    //.then((response) => console.log(response.data));
  };
  selectFromTableFilter = async (table, filter) => {
    return await this.sbClient
      .from(table)
      .select("*")
      .filter(filter.column, "eq", filter.value);
    //.then((response) => console.log(response.data));
  };
  selectFromTableWithForeignKey = async (table, select) => {
    return await this.sbClient
      .from(table)
      .select("*," + select)
      .order("id", { ascending: true });
    //.then((response) => console.log(response.data));
  };
  selectGridEvents = async (table, select) => {
    return await this.sbClient
      .from(table)
      .select("*," + select)
      .gte("schedule.date", new Date().toLocaleDateString("fr-CA"))
      .order("state", { ascending: true })
      .order("id", { ascending: true });
    // .gte("date", "2022-09-07")
    //.then((response) => console.log(response.data));
  };
  selectDates = async (id) => {
    return await this.sbClient
      .from("schedule")
      .select("*")
      .eq("event_id", id)
      //  .filter("date", "gte", new Date().toLocaleDateString())
      .gte("date", new Date().toLocaleDateString())
      .gt("available_seats", 0);
    //.then((response) => console.log(response.data));
  };
  selectFromTableWithForeignKeyFilter = async (table, select, filter) => {
    return await this.sbClient
      .from(table)
      .select("*," + select)
      .filter(filter.column, "eq", filter.value)
      .order("id", { ascending: true });
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
  deleteFromTable = async (table, match) => {
    return await SupabaseGateway.sbClient.from(table).delete().match(match);
  };
}
export const SupabaseGateway = new Supabase();
