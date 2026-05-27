# 💸 Paisa War

**Paisa War** is a fast-paced, competitive financial card game based on real Indian money decisions. 
Start with ₹5 Lakhs and race your opponents to reach **₹50 Lakhs** by making smart investments, dodging market crashes, and playing attack cards on your rivals!

---

## 🎯 Features

- **Real Indian Financial Scenarios:** Every card puts you in a situation you might face in real life (SIPs, EMIs, Tax Raids, IPOs).
- **Multiplayer & Single-player:** Play against smart AI bots locally, or join a multiplayer lobby to play with friends in real-time.
- **DAANIK Economy & Stock Market:** A fully deterministic in-game stock market that fluctuates based on time. Use your DAANIK coins to buy and sell stocks!
- **Attack & Defend:** Play Action cards to attack rivals with Tax Raids, Market Crashes, and UPI Frauds. Counter them with Defense cards.
- **Mogul Rank Ladder:** Play ranked matches and climb from Rookie to DAANIK Legend through 8 rank tiers. 
- **Engaging Visuals:** Features 3D card tilt effects, screen shake on damage, floating numbers, and a confetti celebration upon victory!

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Vanilla CSS, Framer Motion (for animations)
- **Backend & Database:** Supabase (PostgreSQL, Realtime, Auth, RPC)
- **Deployment:** Vercel (Frontend), Supabase (Database/Auth)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SagarAgarwal2/paisawar.git
cd paisawar
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup (Supabase)
Run the SQL migrations located in `supabase/migrations/` in your Supabase SQL editor to set up the necessary tables:
1. `20260525101309_create_profiles_table.sql`
2. `20260526000000_create_leaderboard.sql`
3. `20260526000001_rename_daanik_coins.sql`
4. `20260526000002_create_market.sql`

*(Alternatively, you can push them using the Supabase CLI: `npx supabase db push`)*

### 5. Start the Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:5173`.

---

## 🃏 How to Play

1. **The Goal:** Start with ₹5 Lakhs and be the first player to reach the **₹50 Lakhs** wealth goal, or have the most wealth when the **15-minute timer** runs out!
2. **Turn Phases:** 
   - **Draw Phase:** Draw cards until you have a full hand of 4.
   - **Play Phase:** Choose a card from your hand to play, or discard a defense card to pass your turn.
3. **Card Types:**
   - **🟢 Decision Cards:** Choose how to spend your money. You can *Spend*, *Save*, or *Invest*.
   - **🔴 Action Cards:** Attack your opponents (e.g., Tax Raid, Steal, Market Crash).
   - **🔵 Defense Cards:** Keep these in your hand to automatically protect yourself against incoming attacks (e.g., Health Insurance, Cyber Shield).
4. **Market & Coins:** Complete matches to earn DAANIK Coins. Visit the Dashboard to invest your coins into the DAANIK Market!

---

## 🌐 Deployment

This project is configured to be easily deployed on **Vercel**. 
Simply link your GitHub repository to Vercel, and it will automatically detect the Vite build settings. Remember to add your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to your Vercel Environment Variables before building!

---

## 📜 License
This project is built for entertainment and financial literacy purposes.
