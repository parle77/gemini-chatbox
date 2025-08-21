// config.js - Store your API keys here
// WARNING: For production, use environment variables or a backend service
// This method is only for testing/development

const APP_CONFIG = {
    // Get your Gemini API key from: https://makersuite.google.com/app/apikey
    GEMINI_API_KEY: 'AIzaSyDQO8Majb1NLtqQ-MhS2l9ivCu7yEjTpoc',
    
    // Get these from your Supabase project settings
    SUPABASE_URL: 'https://nvnopwfkbkslvrvvvji.supabase.co' ,
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52bm9wd2ZrYmtzbHZydnZ2amlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk3NDUwNjUsImV4cCI6MjA1NTMyMTA2NX0.mdphOoFUFujVx2Z7YgbAa9HggJHFVuthjRy9DI9zZZ0',
    
    // Optional: Firebase configuration
    FIREBASE_CONFIG: {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    },
    
    // Default system prompt for training the bot
    DEFAULT_SYSTEM_PROMPT: `You are a helpful AI assistant. Be concise and friendly in your responses.`,
    
    // Bot customization
    BOT_NAME: 'AI Assistant',
    BOT_AVATAR: '🤖',
    
    // Theme colors (in hex)
    PRIMARY_COLOR: '#667eea',
    SECONDARY_COLOR: '#764ba2'
};
