import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://anhjfdtxtfrixhktcxef.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuaGpmZHR4dGZyaXhoa3RjeGVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NzEwNDYsImV4cCI6MjA5NjU0NzA0Nn0.eyFAVXx6btt-B0bygAO--cFy9IJh5nESLsu0EmrC2Lc";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);