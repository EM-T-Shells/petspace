import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pkxgkefbacqjktuyhrlk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBreGdrZWZiYWNxamt0dXlocmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2NTAzNjAsImV4cCI6MjA0ODIyNjM2MH0.8Ho_xR66mlL-h_gI1v9jfQrt4sA5Dd06jeNgSdfBe1o";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
