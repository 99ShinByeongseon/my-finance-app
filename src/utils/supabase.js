import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rcchllqwsrabqzwriydr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjY2hsbHF3c3JhYnF6d3JpeWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NjU2NjAsImV4cCI6MjA1ODQ0MTY2MH0.B_bj6XUD_sK6koX000Xkd9iV2OlD9htYikFDXYIAfnk';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
