import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vgcjpjqogscntrtfdgsv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnY2pwanFvZ3NjbnRydGZkZ3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyMjYxOTIsImV4cCI6MjA4OTgwMjE5Mn0.-pkveK5uEgCNdG6bDAc0N6UHUQ0AET8TJCe0T5ijezE"

export const supabase = createClient(supabaseUrl, supabaseKey)