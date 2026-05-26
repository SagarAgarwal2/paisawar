import { supabase } from './supabase'
import { DAANIK_STOCKS_DATA } from '../data/cards'

export interface MarketStock {
  ticker: string
  name: string
  description: string
  base_price: number
  current_price: number
  price_change_pct: number
  trend: 'up' | 'down' | 'stable'
}

// A simple deterministic pseudo-random number generator
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

// Generate stock prices deterministically based on the current hour.
// This way, all users see the exact same prices without needing a backend cron job!
export function getDeterministicMarketPrices(): MarketStock[] {
  // Use the current hour as the seed so it changes every hour
  const now = new Date()
  const seedBase = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate() * 24 + now.getHours()

  return DAANIK_STOCKS_DATA.map((stock, i) => {
    // Generate a unique seed for this stock and this hour
    const seed = seedBase + i * 1337
    
    // Random volatility between -15% and +15%
    const volatility = (seededRandom(seed) * 0.3) - 0.15
    
    const currentPrice = Math.round(stock.base_price * (1 + volatility))
    const priceChangePct = volatility * 100
    
    let trend: 'up' | 'down' | 'stable' = 'stable'
    if (priceChangePct > 2) trend = 'up'
    else if (priceChangePct < -2) trend = 'down'

    return {
      ...stock,
      current_price: currentPrice,
      price_change_pct: priceChangePct,
      trend
    }
  })
}

export async function fetchUserHoldings(): Promise<Record<string, number>> {
  const { data, error } = await supabase.from('user_stocks').select('ticker, shares')
  if (error) {
    console.error('Failed to fetch holdings:', error)
    return {}
  }
  
  const holdings: Record<string, number> = {}
  for (const row of data) {
    holdings[row.ticker] = row.shares
  }
  return holdings
}

export async function buyStock(ticker: string, shares: number, currentPrice: number): Promise<void> {
  const totalCost = shares * currentPrice
  const { error } = await supabase.rpc('buy_stock', {
    p_ticker: ticker,
    p_shares: shares,
    p_total_cost: totalCost
  })
  if (error) throw error
}

export async function sellStock(ticker: string, shares: number, currentPrice: number): Promise<void> {
  const totalRevenue = shares * currentPrice
  const { error } = await supabase.rpc('sell_stock', {
    p_ticker: ticker,
    p_shares: shares,
    p_total_revenue: totalRevenue
  })
  if (error) throw error
}
