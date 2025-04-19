import { meta } from "@eslint/js";
import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.VITE_API_UR;
// const supabaseAnonKey = import.meta.env.VITE_API_KEY;
const supabaseUrl = "https://nlbvkabxtsxiflitnnum.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sYnZrYWJ4dHN4aWZsaXRubnVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NTIzMTUsImV4cCI6MjA2MDIyODMxNX0.QrVPJ9Y6lLBBNIfMkmHuKsTjIYyzxZLbCZ3kpfprJKI"

// console.log(supabaseUrl)

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase