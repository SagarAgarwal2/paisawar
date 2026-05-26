export type CardType = 'decision' | 'action' | 'defense'
export type CardTier = 'common' | 'rare' | 'epic' | 'legendary'
export type DecisionChoice = 'spend' | 'save' | 'invest'

export interface CardEffect {
  type: 'wealth_change' | 'wealth_pct' | 'wealth_next_turn' | 'wealth_end_game' | 'skip_turn' | 'steal' | 'attack_all_pct' | 'block_card' | 'reduce_attack_pct' | 'copy_card' | 'set_goal' | 'market_crash_player' | 'wealth_floor' | 'double_invest'
  value?: number
  target?: 'self' | 'target' | 'all' | 'others'
  condition?: string
  blocks?: string[]
}

export interface DecisionOption {
  type: DecisionChoice
  label: string
  description: string
  effect: CardEffect
  /** 0-100: percentage chance that an INVEST choice will FAIL and apply failEffect instead */
  investRisk?: number
  /** Applied when investRisk triggers (e.g. -₹200K loss) */
  failEffect?: CardEffect
}

export interface GameCard {
  id: string
  name: string
  type: CardType
  tier: CardTier
  flavor: string
  art?: string
  options?: DecisionOption[]
  effect?: CardEffect
  blocksCardTypes?: string[]
}

export interface PlayerState {
  id: string
  name: string
  isBot: boolean
  wealth: number
  hand: GameCard[]
  skippedTurns: number
  pendingGains: { amount: number; triggerAt: 'next_turn' | 'end_game'; cardId: string }[]
  wealthFloor: number
  doubleInvestActive: boolean
  profile?: {
    rank_points: number
    avatar_url: string | null
  }
}

export interface GameState {
  id: string
  players: PlayerState[]
  deck: GameCard[]
  discardPile: GameCard[]
  currentPlayerIndex: number
  turn: number
  phase: 'draw' | 'play' | 'effect' | 'end_turn' | 'game_over'
  drawnCard: GameCard | null
  playedCard: GameCard | null
  pendingDecision: { card: GameCard; playerIndex: number } | null
  pendingTarget: { card: GameCard; playerIndex: number; effect: CardEffect } | null
  winner: PlayerState | null
  log: string[]
  wealthGoal: number
  timeLimit: number
  startTime: number
  turnStartTime: number
}

export interface MogulRank {
  name: string
  emoji: string
  minRP: number
  maxRP: number
  color: string
}

export const MOGUL_RANKS: MogulRank[] = [
  { name: 'Rookie', emoji: '🌱', minRP: 0, maxRP: 499, color: '#6B7280' },
  { name: 'Hustler', emoji: '🔥', minRP: 500, maxRP: 1499, color: '#F97316' },
  { name: 'Grinder', emoji: '📈', minRP: 1500, maxRP: 3499, color: '#22C55E' },
  { name: 'Elite', emoji: '💎', minRP: 3500, maxRP: 6999, color: '#3B82F6' },
  { name: 'Mogul', emoji: '👑', minRP: 7000, maxRP: 14999, color: '#EAB308' },
  { name: 'Tycoon', emoji: '🏦', minRP: 15000, maxRP: 29999, color: '#F59E0B' },
  { name: 'Billionaire', emoji: '🌍', minRP: 30000, maxRP: 59999, color: '#8B5CF6' },
  { name: 'DAANIK Legend', emoji: '🚀', minRP: 60000, maxRP: Infinity, color: '#EC4899' },
]

export function getRankForRP(rp: number): MogulRank {
  return MOGUL_RANKS.find(r => rp >= r.minRP && rp <= r.maxRP) ?? MOGUL_RANKS[0]
}

export function formatWealth(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`
  return `₹${amount}`
}
