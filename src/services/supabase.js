import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://gxrdnbddpcnwtqbsixnl.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cmRuYmRkcGNud3RxYnNpeG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4Njg4NzgsImV4cCI6MjAwNzQ0NDg3OH0.PC2pbJCQ7mjejUnWg-J2dKPGvr2n4RKoWXlDeX92El4`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
