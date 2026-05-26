import type { GameCard } from '../types/game'

// Starting wealth: ₹5L  |  Win goal: ₹50 Lakhs  |  ~20-25 turns to win with good play
// Card values are tuned so invest choices gain ~₹2-5L, attacks cost ~₹1-3L
// A focused player can win in ~15 turns; a bad run might take 25-30.

export const DECISION_CARDS: GameCard[] = [
  {
    id: 'dc_diwali_bonus',
    name: 'Diwali Bonus',
    type: 'decision',
    tier: 'common',
    flavor: 'Festival season brings extra cash. How will you use it?',
    options: [
      { type: 'spend', label: 'Celebrate', description: 'Spend on festivities', effect: { type: 'wealth_change', value: -50000, target: 'self' } },
      { type: 'save', label: 'Fixed Deposit', description: 'Park it safely', effect: { type: 'wealth_next_turn', value: 150000, target: 'self' } },
      { type: 'invest', label: 'Start a SIP', description: 'Long-term wealth', effect: { type: 'wealth_change', value: 250000, target: 'self' } },
    ],
  },
  {
    id: 'dc_salary_hike',
    name: 'Salary Hike',
    type: 'decision',
    tier: 'common',
    flavor: 'You got a 30% raise. Your lifestyle choice now.',
    options: [
      { type: 'spend', label: 'Upgrade Lifestyle', description: 'New car, new apartment', effect: { type: 'wealth_change', value: -75000, target: 'self' } },
      { type: 'save', label: 'Emergency Fund', description: 'Build a safety net', effect: { type: 'wealth_change', value: 200000, target: 'self' } },
      { type: 'invest', label: 'Stock Market', description: 'High risk, high reward', effect: { type: 'wealth_change', value: 400000, target: 'self' }, investRisk: 30, failEffect: { type: 'wealth_change', value: -200000, target: 'self' } },
    ],
  },
  {
    id: 'dc_freelance_gig',
    name: 'Freelance Gig',
    type: 'decision',
    tier: 'common',
    flavor: 'A side project pays ₹2L. What do you do?',
    options: [
      { type: 'spend', label: 'Treat Yourself', description: 'You earned it', effect: { type: 'wealth_change', value: -25000, target: 'self' } },
      { type: 'save', label: 'Bank It', description: 'Safe and steady', effect: { type: 'wealth_change', value: 200000, target: 'self' } },
      { type: 'invest', label: 'Angel Invest', description: 'Back a startup', effect: { type: 'wealth_change', value: 450000, target: 'self' }, investRisk: 25, failEffect: { type: 'wealth_change', value: -100000, target: 'self' } },
    ],
  },
  {
    id: 'dc_rental_income',
    name: 'Rental Income',
    type: 'decision',
    tier: 'common',
    flavor: 'Your property generates rent. Use it wisely.',
    options: [
      { type: 'spend', label: 'Family Vacation', description: 'Life is short', effect: { type: 'wealth_change', value: -50000, target: 'self' } },
      { type: 'save', label: 'Reinvest in Property', description: 'Maintenance pays off', effect: { type: 'wealth_change', value: 175000, target: 'self' } },
      { type: 'invest', label: 'Mutual Funds', description: 'Compounding magic', effect: { type: 'wealth_change', value: 350000, target: 'self' } },
    ],
  },
  {
    id: 'dc_business_idea',
    name: 'Business Idea',
    type: 'decision',
    tier: 'rare',
    flavor: 'You have capital and a brilliant idea. Risk it?',
    options: [
      { type: 'spend', label: 'Bootstrap Now', description: 'All in, right now', effect: { type: 'wealth_change', value: -150000, target: 'self' } },
      { type: 'save', label: 'Research First', description: 'Slow and safe', effect: { type: 'wealth_change', value: 250000, target: 'self' } },
      { type: 'invest', label: 'Seek VC Funding', description: 'Scale or fail', effect: { type: 'wealth_change', value: 700000, target: 'self' }, investRisk: 35, failEffect: { type: 'wealth_change', value: -300000, target: 'self' } },
    ],
  },
  {
    id: 'dc_ipo_opportunity',
    name: 'IPO Opportunity',
    type: 'decision',
    tier: 'rare',
    flavor: 'A hot IPO just opened. Apply with how much?',
    options: [
      { type: 'spend', label: 'Skip It', description: 'IPOs are risky', effect: { type: 'wealth_change', value: 0, target: 'self' } },
      { type: 'save', label: 'Apply Minimum', description: 'Small safe bet', effect: { type: 'wealth_change', value: 200000, target: 'self' } },
      { type: 'invest', label: 'Go All In', description: 'Maximum application', effect: { type: 'wealth_change', value: 600000, target: 'self' }, investRisk: 25, failEffect: { type: 'wealth_change', value: -200000, target: 'self' } },
    ],
  },
  {
    id: 'dc_crypto_buzz',
    name: 'Crypto Buzz',
    type: 'decision',
    tier: 'rare',
    flavor: 'Your friend says this crypto will 10x.',
    options: [
      { type: 'spend', label: 'FOMO In', description: 'Buy the hype', effect: { type: 'wealth_change', value: -100000, target: 'self' } },
      { type: 'save', label: 'Research First', description: 'Due diligence', effect: { type: 'wealth_change', value: 100000, target: 'self' } },
      { type: 'invest', label: 'Small Position', description: 'Only what you can lose', effect: { type: 'wealth_change', value: 500000, target: 'self' }, investRisk: 35, failEffect: { type: 'wealth_change', value: -150000, target: 'self' } },
    ],
  },
  {
    id: 'dc_home_loan',
    name: 'Dream Home',
    type: 'decision',
    tier: 'common',
    flavor: 'You qualify for a home loan. Your choice.',
    options: [
      { type: 'spend', label: 'Take Full Loan', description: 'Max property, max EMI', effect: { type: 'wealth_change', value: -100000, target: 'self' } },
      { type: 'save', label: 'Wait and Save', description: 'Bigger down payment', effect: { type: 'wealth_change', value: 150000, target: 'self' } },
      { type: 'invest', label: 'Rent and Invest', description: 'Real estate via REITs', effect: { type: 'wealth_change', value: 300000, target: 'self' } },
    ],
  },
  {
    id: 'dc_medical_emergency',
    name: 'Medical Emergency',
    type: 'decision',
    tier: 'common',
    flavor: 'A family member needs urgent care.',
    options: [
      { type: 'spend', label: 'Pay Cash', description: 'Use your savings', effect: { type: 'wealth_change', value: -200000, target: 'self' } },
      { type: 'save', label: 'Use Insurance', description: 'Smart planning pays off', effect: { type: 'wealth_change', value: -25000, target: 'self' } },
      { type: 'invest', label: 'Crowd-fund', description: 'Community support', effect: { type: 'wealth_change', value: 50000, target: 'self' } },
    ],
  },
  {
    id: 'dc_startup_equity',
    name: 'Startup Equity',
    type: 'decision',
    tier: 'epic',
    flavor: 'Join a startup for equity or keep your corporate salary?',
    options: [
      { type: 'spend', label: 'Stay Corporate', description: 'Stable income', effect: { type: 'wealth_change', value: 200000, target: 'self' } },
      { type: 'save', label: 'Consult Part-time', description: 'Best of both worlds', effect: { type: 'wealth_change', value: 350000, target: 'self' } },
      { type: 'invest', label: 'Go Full Startup', description: 'Swing for the fences', effect: { type: 'wealth_change', value: 800000, target: 'self' }, investRisk: 40, failEffect: { type: 'wealth_change', value: -400000, target: 'self' } },
    ],
  },
  {
    id: 'dc_gold_sale',
    name: 'Gold Rush',
    type: 'decision',
    tier: 'common',
    flavor: 'Family gold. Sell or hold?',
    options: [
      { type: 'spend', label: 'Sell Now', description: 'Cash in hand', effect: { type: 'wealth_change', value: 300000, target: 'self' } },
      { type: 'save', label: 'Hold the Gold', description: 'Inflation hedge', effect: { type: 'wealth_next_turn', value: 375000, target: 'self' } },
      { type: 'invest', label: 'Buy More Gold', description: 'Double down', effect: { type: 'wealth_change', value: 550000, target: 'self' }, investRisk: 20, failEffect: { type: 'wealth_change', value: -100000, target: 'self' } },
    ],
  },
  {
    id: 'dc_tax_refund',
    name: 'Tax Refund',
    type: 'decision',
    tier: 'common',
    flavor: 'Unexpected windfall from the government!',
    options: [
      { type: 'spend', label: 'Splurge', description: 'New gadget time', effect: { type: 'wealth_change', value: -25000, target: 'self' } },
      { type: 'save', label: 'Add to Savings', description: 'Boring but smart', effect: { type: 'wealth_change', value: 150000, target: 'self' } },
      { type: 'invest', label: 'ELSS Fund', description: 'Tax benefit + growth', effect: { type: 'wealth_change', value: 280000, target: 'self' } },
    ],
  },
]

export const ACTION_CARDS: GameCard[] = [
  {
    id: 'ac_tax_raid',
    name: 'Tax Raid',
    type: 'action',
    tier: 'common',
    flavor: 'Income Tax officials arrive at their door.',
    effect: { type: 'wealth_change', value: -150000, target: 'target' },
  },
  {
    id: 'ac_market_crash',
    name: 'Market Crash',
    type: 'action',
    tier: 'rare',
    flavor: 'Sensex crashes 20%. The entire market bleeds.',
    effect: { type: 'attack_all_pct', value: 15, target: 'all' },
  },
  {
    id: 'ac_steal',
    name: 'Steal',
    type: 'action',
    tier: 'common',
    flavor: 'A quick hustle. Take what you can.',
    effect: { type: 'steal', value: 150000, target: 'target' },
  },
  {
    id: 'ac_upi_fraud',
    name: 'UPI Fraud',
    type: 'action',
    tier: 'common',
    flavor: 'A scammer sends a fake payment request.',
    effect: { type: 'wealth_change', value: -100000, target: 'target' },
  },
  {
    id: 'ac_skip_turn',
    name: 'Skip Turn',
    type: 'action',
    tier: 'common',
    flavor: 'Too many meetings. They miss their turn.',
    effect: { type: 'skip_turn', value: 1, target: 'target' },
  },
  {
    id: 'ac_bank_freeze',
    name: 'Bank Freeze',
    type: 'action',
    tier: 'rare',
    flavor: 'Their account is frozen for suspicious activity.',
    effect: { type: 'wealth_change', value: -250000, target: 'target' },
  },
  {
    id: 'ac_job_loss',
    name: 'Job Loss',
    type: 'action',
    tier: 'rare',
    flavor: 'Layoff season hits them hard.',
    effect: { type: 'wealth_change', value: -200000, target: 'target' },
  },
  {
    id: 'ac_inflation_spike',
    name: 'Inflation Spike',
    type: 'action',
    tier: 'common',
    flavor: 'Prices surge. Everyone else pays more.',
    effect: { type: 'attack_all_pct', value: 10, target: 'others' },
  },
  {
    id: 'ac_hostile_takeover',
    name: 'Hostile Takeover',
    type: 'action',
    tier: 'epic',
    flavor: 'You seize a chunk of their empire.',
    effect: { type: 'steal', value: 300000, target: 'target' },
  },
  {
    id: 'ac_emi_bomb',
    name: 'EMI Bomb',
    type: 'action',
    tier: 'common',
    flavor: 'They forgot about 3 pending EMIs.',
    effect: { type: 'wealth_change', value: -125000, target: 'target' },
  },
  {
    id: 'ac_regulatory_fine',
    name: 'Regulatory Fine',
    type: 'action',
    tier: 'common',
    flavor: 'SEBI finds a violation in their portfolio.',
    effect: { type: 'wealth_change', value: -100000, target: 'target' },
  },
  {
    id: 'ac_recession_wave',
    name: 'Recession Wave',
    type: 'action',
    tier: 'epic',
    flavor: 'Global economy tanks. Everyone loses wealth.',
    effect: { type: 'attack_all_pct', value: 20, target: 'all' },
  },
]

export const DEFENSE_CARDS: GameCard[] = [
  {
    id: 'def_health_insurance',
    name: 'Health Insurance',
    type: 'defense',
    tier: 'common',
    flavor: 'Smart planning saves the day.',
    effect: { type: 'block_card', blocks: ['Medical Emergency', 'Job Loss'], target: 'self' },
  },
  {
    id: 'def_emergency_fund',
    name: 'Emergency Fund',
    type: 'defense',
    tier: 'common',
    flavor: '6 months of expenses. Unshakeable.',
    effect: { type: 'reduce_attack_pct', value: 50, target: 'self' },
  },
  {
    id: 'def_cyber_shield',
    name: 'Cyber Shield',
    type: 'defense',
    tier: 'common',
    flavor: 'Two-factor auth. Scammers lose.',
    effect: { type: 'block_card', blocks: ['UPI Fraud', 'Steal'], target: 'self' },
  },
  {
    id: 'def_diversified_portfolio',
    name: 'Diversified Portfolio',
    type: 'defense',
    tier: 'rare',
    flavor: 'Never put all eggs in one basket.',
    effect: { type: 'reduce_attack_pct', value: 50, target: 'self', condition: 'market_crash' },
  },
  {
    id: 'def_legal_shield',
    name: 'Legal Shield',
    type: 'defense',
    tier: 'rare',
    flavor: 'Your lawyer makes the fine disappear.',
    effect: { type: 'block_card', blocks: ['Tax Raid', 'Regulatory Fine', 'Bank Freeze'], target: 'self' },
  },
  {
    id: 'def_gold_reserve',
    name: 'Gold Reserve',
    type: 'defense',
    tier: 'rare',
    flavor: 'Gold holds value when everything else falls.',
    effect: { type: 'reduce_attack_pct', value: 70, target: 'self', condition: 'market_crash' },
  },
  {
    id: 'def_term_insurance',
    name: 'Term Insurance',
    type: 'defense',
    tier: 'common',
    flavor: "Protect your family's future.",
    effect: { type: 'block_card', blocks: ['Job Loss', 'EMI Bomb'], target: 'self' },
  },
]

export const LEGENDARY_CARDS: GameCard[] = [
  {
    id: 'leg_warren_buffett',
    name: 'The Warren Buffett',
    type: 'defense',
    tier: 'legendary',
    flavor: 'Be fearful when others are greedy.',
    effect: { type: 'block_card', blocks: ['any'], target: 'self' },
  },
  {
    id: 'leg_black_swan',
    name: 'The Black Swan',
    type: 'action',
    tier: 'legendary',
    flavor: 'An impossible event that changes everything.',
    effect: { type: 'market_crash_player', value: 40, target: 'target' },
  },
  {
    id: 'leg_bankruptcy_shield',
    name: 'Bankruptcy Shield',
    type: 'defense',
    tier: 'legendary',
    flavor: 'Chapter 11 for the win.',
    effect: { type: 'wealth_floor', value: 300000, target: 'self' },
  },
  {
    id: 'leg_compound_machine',
    name: 'The Compound Machine',
    type: 'decision',
    tier: 'legendary',
    flavor: 'Compound interest: the 8th wonder of the world.',
    options: [
      { type: 'spend', label: 'Cash Out', description: 'Take profits now', effect: { type: 'wealth_change', value: 400000, target: 'self' } },
      { type: 'save', label: 'Reinvest 50%', description: 'Balanced approach', effect: { type: 'wealth_change', value: 650000, target: 'self' } },
      { type: 'invest', label: 'Full Compounding', description: 'Let it ride', effect: { type: 'wealth_change', value: 1000000, target: 'self' }, investRisk: 45, failEffect: { type: 'wealth_change', value: -400000, target: 'self' } },
    ],
  },
  {
    id: 'leg_daanik_founder',
    name: 'The DAANIK Founder',
    type: 'decision',
    tier: 'legendary',
    flavor: 'You set the rules of the game.',
    options: [
      { type: 'spend', label: 'IPO Now', description: 'Cash out big', effect: { type: 'wealth_change', value: 1000000, target: 'self' } },
      { type: 'save', label: 'Strategic Partner', description: 'Steady growth', effect: { type: 'wealth_change', value: 800000, target: 'self' } },
      { type: 'invest', label: 'Global Expansion', description: 'Build the empire', effect: { type: 'wealth_change', value: 1500000, target: 'self' } },
    ],
  },
]

// Base card pool (no legendary — those are separate, rare additions)
const BASE_CARDS: GameCard[] = [
  ...DECISION_CARDS,
  ...ACTION_CARDS,
  ...DEFENSE_CARDS,
]

export const ALL_CARDS: GameCard[] = [
  ...BASE_CARDS,
  ...LEGENDARY_CARDS,
]

// Build a properly sized deck with 2 copies of each base card + 1 copy of each legendary
// This gives ~68 cards — enough for a full game without reshuffling too often.
// Cards are given unique instance IDs so duplicates are distinct objects.
export function createGameDeck(): GameCard[] {
  const deck: GameCard[] = []

  // 2 copies of each base card
  for (const card of BASE_CARDS) {
    deck.push({ ...card, id: `${card.id}_a` })
    deck.push({ ...card, id: `${card.id}_b` })
  }

  // 1 copy of each legendary (rare, exciting)
  for (const card of LEGENDARY_CARDS) {
    deck.push({ ...card, id: `${card.id}_1` })
  }

  // Shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }

  return deck
}

// Daanik Market data
export const DAANIK_STOCKS_DATA = [
  { ticker: 'MSIP', name: 'MegaSIP Corp', description: 'Rises when players choose INVEST', base_price: 1240 },
  { ticker: 'CSHLD', name: 'CrashShield Ltd', description: 'Rises when defense cards are played', base_price: 880 },
  { ticker: 'EMIF', name: 'EMI Finance', description: 'Rises when players take losses', base_price: 2100 },
  { ticker: 'BNPL', name: 'BNPL Holdings', description: 'Falls when players avoid bad debt', base_price: 340 },
  { ticker: 'GLDR', name: 'Gold Reserve', description: 'Stable, rises after market crashes', base_price: 3400 },
  { ticker: 'CRPT', name: 'CryptoVault', description: 'Volatile, mirrors crypto sentiment', base_price: 1100 },
  { ticker: 'TAXR', name: 'TaxRaid Inc', description: 'Rises when attack cards are played', base_price: 650 },
  { ticker: 'SIPA', name: 'SIPAlpha', description: 'Steady growth based on save choices', base_price: 1800 },
]
