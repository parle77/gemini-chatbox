# Gemini AI Chatbot with Cloud Storage

A modern AI chatbot powered by Google's Gemini API with cloud storage on Supabase and seamless Adalo integration.

## 🌟 Features

- 💬 Real-time AI conversations using Gemini API
- 💾 Automatic chat history backup to Supabase
- 🎨 Customizable UI with modern design
- 📱 Mobile-responsive layout
- 🔧 Easy integration with Adalo via WebView
- 🧠 Custom training through system prompts
- 👤 User-specific chat history

## 🚀 Live Demo

[View Live Demo](https://YOUR_USERNAME.github.io/gemini-chatbot/)

## 📋 Prerequisites

Before you begin, you'll need:

1. **Gemini API Key** - [Get it here](https://makersuite.google.com/app/apikey)
2. **Supabase Account** - [Sign up free](https://supabase.com)
3. **GitHub Account** - For hosting
4. **Adalo Account** (optional) - For mobile app integration

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/gemini-chatbot.git
cd gemini-chatbot
```

### 2. Configure API Keys

Edit the `config.js` file and add your API keys:

```javascript
const APP_CONFIG = {
    GEMINI_API_KEY: 'your-gemini-api-key',
    SUPABASE_URL: 'https://your-project.supabase.co',
    SUPABASE_ANON_KEY: 'your-supabase-anon-key',
};
```

### 3. Set Up Supabase Database

Run these SQL commands in your Supabase SQL editor:

```sql
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create chat sessions table
CREATE TABLE chat_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  started_at TIMESTAMP DEFAULT NOW(),
  ended_at TIMESTAMP
);

-- Create chat messages table
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id UUID REFERENCES chat_sessions(id),
  user_id UUID REFERENCES users(id),
  message TEXT NOT NULL,
  sender TEXT NOT NULL CHECK (sender IN ('user', 'bot')),
  timestamp TIMESTAMP DEFAULT NOW()
);
```

### 4. Deploy to GitHub Pages

1. Go to your repository settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click Save
6. Your site will be available at: `https://YOUR_USERNAME.github.io/gemini-chatbot/`

## 📱 Adalo Integration

### Adding to Adalo

1. Add a **WebView** component to your Adalo screen
2. Set the URL to: `https://YOUR_USERNAME.github.io/gemini-chatbot/?userId={LoggedInUser.id}`
3. Configure WebView settings:
   - Enable JavaScript: ✅
   - Enable Cookies: ✅
   - Full Screen Height: Recommended

### Passing User Data

The chatbot accepts URL parameters:
- `userId` - Unique user identifier
- `userName` - User's display name (optional)
- `theme` - Color theme (optional)

Example:
```
https://YOUR_USERNAME.github.io/gemini-chatbot/?userId=123&userName=John
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `index.html`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Training the Bot

Click the settings icon (⚙️) and add your custom system prompt:

```
You are an expert in [YOUR TOPIC]. 
Focus on [SPECIFIC AREAS].
Always maintain a [TONE] tone.
```

### Bot Personality Examples

**Customer Support Bot:**
```
You are a friendly customer support agent for [COMPANY].
Help users with product questions, orders, and technical issues.
Always be patient, empathetic, and solution-focused.
```

**Educational Tutor:**
```
You are an educational tutor specializing in [SUBJECT].
Break down complex concepts into simple explanations.
Use examples and analogies to help students understand.
```

## 🔒 Security Notes

⚠️ **Important Security Considerations:**

1. **Never commit real API keys to public repositories**
2. For production, use:
   - Environment variables
   - Backend proxy server
   - Netlify/Vercel functions for API calls
3. Enable Row Level Security in Supabase
4. Implement rate limiting
5. Add user authentication

## 📊 Monitoring

### View Chat History

1. Go to Supabase Dashboard
2. Navigate to Table Editor
3. Select `chat_messages` table
4. Filter by user_id or session_id

### Analytics Queries

```sql
-- Get message count by user
SELECT user_id, COUNT(*) as message_count 
FROM chat_messages 
GROUP BY user_id;

-- Get daily active users
SELECT DATE(timestamp), COUNT(DISTINCT user_id) 
FROM chat_messages 
GROUP BY DATE(timestamp);
```

## 🐛 Troubleshooting

### Common Issues

1. **"API Key Invalid"**
   - Check if your Gemini API key is correctly added to `config.js`
   - Ensure the API key has proper permissions

2. **Messages not saving to Supabase**
   - Verify Supabase URL and anon key
   - Check if tables are created correctly
   - Ensure Row Level Security allows inserts

3. **Chatbot not responding**
   - Check browser console for errors
   - Verify internet connection
   - Ensure API rate limits aren't exceeded

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue on GitHub or contact [your-email@example.com]

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- Supabase for database and authentication
- Adalo for no-code app development

---

Made with ❤️ by [Your Name]
