import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ftpyddrihubnrakkxoyw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0cHlkZHJpaHVibnJha2t4b3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3NzYzMjYsImV4cCI6MjA1ODM1MjMyNn0.3bNL6TnfuaM7ShY7q5U0QRxkCppOjTuj78CjahgUl7A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
