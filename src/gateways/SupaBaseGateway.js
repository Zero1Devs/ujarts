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
  selectFromTableWithForeignKey2 = async (table, select) => {
    return await this.sbClient
      .from(table)
      .select("*," + select)
      .order("state", { ascending: true });

    //.then((response) => console.log(response.data));
  };
  selectGridEvents = async () => {
    return await this.sbClient
      .from("events")
      .select("*, event_types(id,type), venues(name),schedule(event_id,*)")
      .gte("schedule.date", new Date().toLocaleDateString("fr-CA"))
      .order("state", { ascending: true })
      .order("id", { ascending: true });
  };
  selectGridEventsByType = async (type) => {
    return await this.sbClient
      .from("events")
      .select("*, event_types(id,type), venues(name),schedule(event_id,*)")
      .gte("schedule.date", new Date().toLocaleDateString("fr-CA"))
      .eq("id_type", type)
      .order("state", { ascending: true })
      .order("id", { ascending: true });
  };
  selectDates = async (id) => {
    return await this.sbClient
      .from("schedule")
      .select("*")
      .eq("event_id", id)

      .gte("date", new Date().toLocaleDateString("fr-CA"))
      .gt("available_seats", 0);
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
  uploadPhoto = async (filePath, file) => {
    return await SupabaseGateway.sbClient.storage
      .from("photos")
      .upload(filePath, file);
  };
  downloadPhoto = async (url) => {
    return await SupabaseGateway.sbClient.storage.from("photos").download(url);
  };
}
export const SupabaseGateway = new Supabase();
