import type { DaanikStock } from '../types/database'

export const MOCK_STOCKS: Omit<DaanikStock, 'id' | 'created_at' | 'updated_at'>[] = [
  { ticker: 'MSIP', name: 'MegaSIP Corp', description: 'Rises when players choose INVEST', base_price: 1240, current_price: 1340, price_change_pct: 8.06, trend: 'up' },
  { ticker: 'CSHLD', name: 'CrashShield Ltd', description: 'Rises when defense cards are played', base_price: 880, current_price: 774, price_change_pct: -12.05, trend: 'down' },
  { ticker: 'EMIF', name: 'EMI Finance', description: 'Rises when players take losses', base_price: 2100, current_price: 2562, price_change_pct: 22.0, trend: 'up' },
  { ticker: 'BNPL', name: 'BNPL Holdings', description: 'Falls when players avoid bad debt', base_price: 340, current_price: 235, price_change_pct: -30.88, trend: 'down' },
  { ticker: 'GLDR', name: 'Gold Reserve', description: 'Stable, rises after market crashes', base_price: 3400, current_price: 3502, price_change_pct: 3.0, trend: 'up' },
  { ticker: 'CRPT', name: 'CryptoVault', description: 'Volatile, mirrors crypto sentiment', base_price: 1100, current_price: 890, price_change_pct: -19.09, trend: 'down' },
  { ticker: 'TAXR', name: 'TaxRaid Inc', description: 'Rises when attack cards are played', base_price: 650, current_price: 728, price_change_pct: 12.0, trend: 'up' },
  { ticker: 'SIPA', name: 'SIPAlpha', description: 'Steady growth from save choices', base_price: 1800, current_price: 1854, price_change_pct: 3.0, trend: 'stable' },
]

export const SEASONS = [
  { number: 1, name: 'IPO Boom', theme: 'Tech IPOs flooding Dalal Street', special_rule: 'All INVEST gains +40%', is_active: true },
  { number: 2, name: 'GST Shock', theme: 'Tax complexity cards dominate', special_rule: 'Every 3rd turn costs a tax', is_active: false },
  { number: 3, name: 'Startup Grind', theme: 'Funding rounds and pivots', special_rule: 'Players can acquire card packs', is_active: false },
  { number: 4, name: 'Real Estate War', theme: 'Property cards and black money', special_rule: 'New asset class — property', is_active: false },
]

export function generateMockLeaderboard() {
  const names = ['Sharma_Ji', 'CryptoRaj', 'MutualFund_Manoj', 'SIP_Sunita', 'GoldHoarder', 'StockBhai', 'TaxSaver99', 'DividendDevi', 'EMI_Escape', 'LoanWolf']
  return names.map((name, i) => ({
    rank: i + 1,
    username: name,
    rp: Math.floor(30000 - i * 2800 + Math.random() * 500),
    games: Math.floor(80 + Math.random() * 200),
    winRate: Math.floor(55 + Math.random() * 30),
  }))
}

export const DAILY_CONTRACTS = [
  { id: '1', title: 'First Win', description: 'Win 1 game at any level', difficulty: 'easy' as const, reward_dc: 15, reward_card_tier: null, requirement_type: 'wins', requirement_value: 1, contract_date: new Date().toISOString().split('T')[0], is_weekly: false, created_at: new Date().toISOString() },
  { id: '2', title: 'Investor Mindset', description: 'Make 5 INVEST choices in one game', difficulty: 'medium' as const, reward_dc: 40, reward_card_tier: 'common', requirement_type: 'invest_choices', requirement_value: 5, contract_date: new Date().toISOString().split('T')[0], is_weekly: false, created_at: new Date().toISOString() },
  { id: '3', title: 'Unbreakable', description: 'Beat an Elite AI without taking EMI damage', difficulty: 'hard' as const, reward_dc: 100, reward_card_tier: 'rare', requirement_type: 'no_emi_win', requirement_value: 1, contract_date: new Date().toISOString().split('T')[0], is_weekly: false, created_at: new Date().toISOString() },
  { id: 'w1', title: 'Weekly Champion', description: 'Win 5 games this week', difficulty: 'hard' as const, reward_dc: 500, reward_card_tier: 'epic', requirement_type: 'weekly_wins', requirement_value: 5, contract_date: new Date().toISOString().split('T')[0], is_weekly: true, created_at: new Date().toISOString() },
]
