// config.js - Store your API keys here
// WARNING: For production, use environment variables or a backend service
// This method is only for testing/development

const APP_CONFIG = {
    // Get your Gemini API key from: https://makersuite.google.com/app/apikey
    GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
    
    // Get these from your Supabase project settings
    SUPABASE_URL: 'https://YOUR_PROJECT.supabase.co',
    SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_KEY_HERE',
    
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
