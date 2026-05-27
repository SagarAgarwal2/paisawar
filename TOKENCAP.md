# TokenCap Snapshot

| Field | Value |
| --- | --- |
| Generated | 2026-05-27T11:27:26.325Z |
| Workspace | /Users/somyaupadhyay/Desktop/PAISAWAR/paisawar |
| Profile | balanced |
| Selected files | 44 |
| Source bytes | 218592 |
| Estimated tokens | 60904 |

## Read First

This file is a compressed coding-session handoff. Read it before editing, then inspect the referenced files directly. Prefer the live repository over this snapshot when there is a conflict.

## Handoff Summary

| Field | Value |
| --- | --- |
| Read order | src/components/game/GameLog.tsx > src/components/game/PlayerBoard.tsx > src/components/game/TurnTimer.tsx > src/components/GameCard.tsx > src/components/ui/Button.tsx |
| Primary anchors | src/components/game/GameLog.tsx, src/components/game/PlayerBoard.tsx, src/components/game/TurnTimer.tsx |
| Changed files | 14 |
| TODO notes | 0 |
| File budget used | 49% |
| Source budget used | 99% |
| Token estimate | 60904 |
| Contents mode | enabled |

## Operating Rules For The Next Agent

- Preserve user changes and do not revert unrelated work.
- Start with changed files and files marked `high-signal` in the manifest.
- Use the Git diff as intent, not as a complete source of truth.
- Refresh this capsule after meaningful edits or before ending the session.

## Git Snapshot

| Field | Value |
| --- | --- |
| Branch | main |
| Git root | /Users/somyaupadhyay/Desktop/PAISAWAR/paisawar |

Recent commits:
```text
b95319f colorsssss
5501d8b colorsssss
096481f contracts
aeb3b6a contracts
bb79a07 contracts
9167eb5 semi final
4414eed semi final
1de0867 semi final
```

Status:
```text
 M src/components/GameCard.tsx
 M src/components/game/GameLog.tsx
 M src/components/game/PlayerBoard.tsx
 M src/components/game/TurnTimer.tsx
 M src/components/ui/Button.tsx
 M src/components/ui/Card.tsx
 M src/components/ui/Input.tsx
 M src/index.css
 M src/pages/Auth.tsx
 M src/pages/Dashboard.tsx
 M src/pages/Game.tsx
 M src/pages/Landing.tsx
 M src/pages/Lobby.tsx
 M src/pages/MultiplayerGame.tsx
```

## Project Map

```text
.github/
.github/workflows/
src/
src/components/
src/components/game/
src/components/ui/
src/data/
src/hooks/
src/lib/
src/pages/
src/types/
supabase/
supabase/migrations/
.env
.github/workflows/main.yml
README.md
index.html
package.json
src/App.tsx
src/components/ForfeitModal.tsx
src/components/GameCard.tsx
src/components/RankBadge.tsx
src/components/TutorialModal.tsx
src/components/game/GameLog.tsx
src/components/game/PlayerBoard.tsx
src/components/game/TurnTimer.tsx
src/components/ui/Button.tsx
src/components/ui/Card.tsx
src/components/ui/Input.tsx
src/data/cards.ts
src/data/mockData.ts
src/hooks/useAuth.tsx
src/index.css
src/lib/audio.ts
src/lib/auth.ts
src/lib/gameEngine.ts
src/lib/market.ts
src/lib/multiplayerEngine.ts
src/lib/supabase.ts
src/main.tsx
src/pages/Auth.tsx
src/pages/Dashboard.tsx
src/pages/Game.tsx
src/pages/Landing.tsx
src/pages/Lobby.tsx
src/pages/MultiplayerGame.tsx
src/types/database.ts
src/types/game.ts
src/vite-env.d.ts
supabase/migrations/20260525101309_create_profiles_table.sql
supabase/migrations/20260525102916_multiplayer_rooms.sql
supabase/migrations/20260525103316_rooms_allow_player_state_update.sql
supabase/migrations/20260526000000_create_leaderboard.sql
supabase/migrations/20260526000001_rename_daanik_coins.sql
supabase/migrations/20260526000002_create_market.sql
supabase/migrations/20260526000003_create_contracts.sql
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## File Manifest

| File | Bytes | Score | Why |
| --- | ---: | ---: | --- |
| src/components/game/GameLog.tsx | 1827 | 150 | changed, source |
| src/components/game/PlayerBoard.tsx | 7963 | 150 | changed, source |
| src/components/game/TurnTimer.tsx | 2400 | 150 | changed, source |
| src/components/GameCard.tsx | 7097 | 150 | changed, source |
| src/components/ui/Button.tsx | 1961 | 150 | changed, source |
| src/components/ui/Card.tsx | 1359 | 150 | changed, source |
| src/components/ui/Input.tsx | 1259 | 150 | changed, source |
| src/index.css | 7795 | 150 | changed, source |
| src/pages/Auth.tsx | 5932 | 150 | changed, source |
| src/pages/Landing.tsx | 10004 | 150 | changed, source |
| src/pages/Lobby.tsx | 17785 | 149 | changed, source |
| src/pages/Dashboard.tsx | 26944 | 148 | changed, source |
| src/pages/Game.tsx | 31257 | 148 | changed, source |
| src/pages/MultiplayerGame.tsx | 30725 | 148 | changed, source |
| README.md | 3408 | 105 | project-metadata, high-signal-doc |
| package.json | 647 | 70 | project-metadata |
| tsconfig.json | 562 | 70 | project-metadata |
| vite.config.ts | 133 | 70 | project-metadata |
| src/App.tsx | 2020 | 30 | source |
| src/components/ForfeitModal.tsx | 1782 | 30 | source |
| src/components/RankBadge.tsx | 1569 | 30 | source |
| src/components/TutorialModal.tsx | 7315 | 30 | source |
| src/data/mockData.ts | 3860 | 30 | source |
| src/hooks/useAuth.tsx | 3052 | 30 | source |
| src/lib/audio.ts | 1756 | 30 | source |
| src/lib/auth.ts | 5758 | 30 | source |
| src/lib/market.ts | 2524 | 30 | source |
| src/lib/multiplayerEngine.ts | 7649 | 30 | source |
| src/lib/supabase.ts | 327 | 30 | source |
| src/main.tsx | 226 | 30 | source |
| src/types/database.ts | 4084 | 30 | source |
| src/types/game.ts | 3305 | 30 | source |
| src/vite-env.d.ts | 38 | 30 | source |
| .env | 531 | 0 | context |
| .github/workflows/main.yml | 438 | 0 | context |
| index.html | 911 | 0 | context |
| supabase/migrations/20260525101309_create_profiles_table.sql | 1937 | 0 | context |
| supabase/migrations/20260525102916_multiplayer_rooms.sql | 3366 | 0 | context |
| supabase/migrations/20260525103316_rooms_allow_player_state_update.sql | 745 | 0 | context |
| supabase/migrations/20260526000000_create_leaderboard.sql | 1009 | 0 | context |
| supabase/migrations/20260526000001_rename_daanik_coins.sql | 64 | 0 | context |
| supabase/migrations/20260526000002_create_market.sql | 2836 | 0 | context |
| supabase/migrations/20260526000003_create_contracts.sql | 2199 | 0 | context |
| tsconfig.node.json | 233 | 0 | context |

## Changed Files

-  M src/components/GameCard.tsx
-  M src/components/game/GameLog.tsx
-  M src/components/game/PlayerBoard.tsx
-  M src/components/game/TurnTimer.tsx
-  M src/components/ui/Button.tsx
-  M src/components/ui/Card.tsx
-  M src/components/ui/Input.tsx
-  M src/index.css
-  M src/pages/Auth.tsx
-  M src/pages/Dashboard.tsx
-  M src/pages/Game.tsx
-  M src/pages/Landing.tsx
-  M src/pages/Lobby.tsx
-  M src/pages/MultiplayerGame.tsx

## Git Diff Snippets

### Unstaged Changes Diff

```diff
diff --git a/src/components/GameCard.tsx b/src/components/GameCard.tsx
index 15d3c98..645a46f 100644
--- a/src/components/GameCard.tsx
+++ b/src/components/GameCard.tsx
@@ -1,5 +1,6 @@
 import { motion } from 'framer-motion'
 import type { GameCard as GameCardType } from '../types/game'
+import { FileWarning, Shield, Zap, IndianRupee } from 'lucide-react'
 
 interface GameCardProps {
   card: GameCardType
@@ -11,167 +12,222 @@ interface GameCardProps {
 }
 
 const TYPE_COLORS = {
-  decision: { bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.4)', label: '#34d399', badge: '#059669' },
-  action: { bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.4)', label: '#f87171', badge: '#dc2626' },
-  defense: { bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.4)', label: '#60a5fa', badge: '#2563eb' },
+  action: {
+    bg: 'linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%)',
+    border: '#fca5a5',
+    borderHover: '#ef4444',
+    badge: '#ef4444',
+    iconBg: '#fee2e2',
+    iconColor: '#dc2626',
+    icon: Zap,
+  },
+  decision: {
+    bg: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)',
+    border: '#86efac',
+    borderHover: '#22c55e',
+    badge: '#22c55e',
+    iconBg: '#dcfce7',
+    iconColor: '#16a34a',
+    icon: FileWarning,
+  },
+  defense: {
+    bg: 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)',
+    border: '#93c5fd',
+    borderHover: '#3b82f6',
+    badge: '#3b82f6',
+    iconBg: '#dbeafe',
+    iconColor: '#2563eb',
+    icon: Shield,
+  },
 }
 
 // Per-tier visual configuration
 const TIER_CONFIG: Record<string, {
   color: string
   glow: string
-  borderColor: string
   shimmer: boolean
   frameLabel: string
-  frameColor: string
 }> = {
-  common:    { color: '#64748b', glow: 'none', borderColor: 'rgba(255,255,255,0.15)', shimmer: false, frameLabel: 'COMMON', frameColor: '#475569' },
-  rare:      { color: '#3b82f6', glow: '0 0 14px rgba(59,130,246,0.35)', borderColor: 'rgba(59,130,246,0.5)', shimmer: false, frameLabel: 'RARE', frameColor: '#2563eb' },
-  epic:      { color: '#a855f7', glow: '0 0 20px rgba(168,85,247,0.45)', borderColor: 'rgba(168,85,247,0.6)', shimmer: true, frameLabel: 'EPIC', frameColor: '#7c3aed' },
-  legendary: { color: '#f59e0b', glow: '0 0 30px rgba(245,158,11,0.55)', borderColor: 'rgba(245,158,11,0.7)', shimmer: true, frameLabel: 'LEGENDARY', frameColor: '#d97706' },
+  common:    { color: '#6b7280', glow: 'none', shimmer: false, frameLabel: 'COMMON' },
+  rare:      { color: '#3b82f6', glow: '0 4px 14px rgba(59,130,246,0.2)', shimmer: false, frameLabel: 'RARE' },
+  epic:      { color: '#a855f7', glow: '0 6px 20px rgba(168,85,247,0.3)', shimmer: true, frameLabel: 'EPIC' },
+  legendary: { color: '#eab308', glow: '0 8px 30px rgba(234,179,8,0.45)', shimmer: true, frameLabel: 'LEGENDARY' },
 }
 
-const TYPE_ICONS = { decision: '🟢', action: '🔴', defense: '🔵' }
-
 export function GameCard({ card, onClick, selected, disabled, compact, faceDown }: GameCardProps) {
   const colors = TYPE_COLORS[card.type] ?? TYPE_COLORS.decision
   const tier = TIER_CONFIG[card.tier] ?? TIER_CONFIG.common
   const isLegendary = card.tier === 'legendary'
-  const isEpic = card.tier === 'epic'
+  const Icon = colors.icon
 
   if (faceDown) {
     return (
       <motion.div
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
-        className="glass-card"
         style={{
-          width: compact ? 64 : 120,
-          height: compact ? 90 : 168,
+          width: compact ? 80 : 140,
+          height: compact ? 110 : 200,
           borderRadius: compact ? 12 : 16,
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
-          fontSize: compact ? 18 : 28,
+          background: 'linear-gradient(135deg, #004030, #002020)',
+          border: '3px dashed #FFD050',
+          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
+          flexShrink: 0,
         }}
       >
-        💰
+        <IndianRupee className="text-yellow-400" size={compact ? 24 : 40} />
       </motion.div>
     )
   }
 
-  // Build card background based on tier
-  const cardBg = isLegendary
-    ? 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(120,53,15,0.1), rgba(0,0,0,0.5))'
-    : isEpic
-    ? 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(0,0,0,0.4))'
-    : `linear-gradient(135deg, ${colors.bg}, rgba(0,0,0,0.2))`
-
-  const cardBorder = selected
-    ? '#f59e0b'
-    : tier.borderColor
-
-  const cardShadow = selected
-    ? '0 8px 32px rgba(245,158,11,0.4)'
-    : tier.glow !== 'none'
-    ? tier.glow
-    : '0 4px 16px rgba(0,0,0,0.3)'
+  // Base dimensions
+  const width = compact ? 90 : 140
+  const height = compact ? 120 : 200
+  const padding = compact ? '8px' : '12px'
 
   return (
-    <motion.div
+    <motion.button
       layoutId={card.id}
       initial={{ opacity: 0, y: 20, scale: 0.9 }}
       animate={{
         opacity: disabled ? 0.5 : 1,
-        y: selected ? -8 : 0,
-        scale: 1,
+        y: selected ? -10 : 0,
+        scale: selected ? 1.05 : 1,
       }}
-      whileHover={onClick && !disabled && !selected ? { y: -8, scale: 1.05, rotateY: 10, rotateX: -5 } : {}}
+      whileHover={onClick && !disabled && !selected ? { y: -5, scale: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' } : {}}
       whileTap={onClick && !disabled ? { scale: 0.95 } : {}}
       onClick={!disabled ? onClick : undefined}
-      className="glass-card"
       style={{
-        width: compact ? 80 : 140,
-        height: compact ? 110 : 200,
-        background: cardBg,
-        border: `${(isLegendary || isEpic) ? 2 : 1}px solid ${cardBorder}`,
+        width,
+        height,
+        background: colors.bg,
+        border: `2px solid ${selected ? '#eab308' : colors.border}`,
         borderRadius: compact ? 12 : 16,
         cursor: onClick && !disabled ? 'pointer' : 'default',
-        padding: compact ? '8px' : '12px',
+        padding,
         display: 'flex',
         flexDirection: 'column',
-        gap: compact ? 4 : 6,
-        boxShadow: cardShadow,
+        alignItems: 'center',
+        gap: compact ? 4 : 8,
+        boxShadow: selected ? '0 0 0 2px #fef08a, 0 8px 16px rgba(0,0,0,0.1)' : '0 4px 6px -1px rgba(0,0,0,0.1)',
         flexShrink: 0,
         position: 'relative',
         overflow: 'hidden',
-        transition: 'box-shadow 0.3s ease',
+        transition: 'border-color 0.2s ease',
+      }}
+      onMouseEnter={(e) => {
+        if (onClick && !disabled && !selected) {
+          e.currentTarget.style.borderColor = colors.borderHover
+        }
+      }}
+      onMouseLeave={(e) => {
+        if (!selected) {
+          e.currentTarget.style.borderColor = colors.border
+        }
       }}
     >
       {/* Top shimmer bar for epic/legendary */}
       {tier.shimmer && (
         <div style={{
           position: 'absolute', top: 0, left: 0, right: 0,
-          height: isLegendary ? 3 : 2,
+          height: isLegendary ? 4 : 3,
           background: isLegendary
-            ? 'linear-gradient(90deg, transparent, #f59e0b, #fbbf24, #f59e0b, transparent)'
-            : 'linear-gradient(90deg, transparent, #a855f7, #c084fc, #a855f7, transparent)',
+            ? 'linear-gradient(90deg, transparent, #fde047, #fef08a, #fde047, transparent)'
+            : 'linear-gradient(90deg, transparent, #d8b4fe, #e9d5ff, #d8b4fe, transparent)',
           animation: 'shimmer 2.5s linear infinite',
         }} />
       )}
 
-      {/* Legendary corner accent */}
-      {isLegendary && (
-        <>
-          <div style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 20, borderTop: '2px solid #f59e0b', borderLeft: '2px solid #f59e0b', borderRadius: '16px 0 0 0', zIndex: 1 }} />
-          <div style={{ position: 'absolute', top: 0, right: 0, width: 20, height: 20, borderTop: '2px solid #f59e0b', borderRight: '2px solid #f59e0b', borderRadius: '0 16px 0 0', zIndex: 1 }} />
-          <div style={{ position: 'absolute', bottom: 0, left: 0, width: 20, height: 20, borderBottom: '2px solid #f59e0b', borderLeft: '2px solid #f59e0b', borderRadius: '0 0 0 16px', zIndex: 1 }} />
-          <div style={{ position: 'absolute', bottom: 0, right: 0, width: 20, height: 20, borderBottom: '2px solid #f59e0b', borderRight: '2px solid #f59e0b', borderRadius: '0 0 16px 0', zIndex: 1 }} />
-        </>
-      )}
+      {/* Tier Badge */}
+      <div style={{
+        position: 'absolute',
+        top: -4,
+        left: -4,
+        display: 'flex',
+        alignItems: 'center',
+        justifyContent: 'center',
+        background: tier.color,
+        color: '#fff',
+        fontSize: compact ? 9 : 10,
+        fontWeight: 800,
+        padding: compact ? '4px 6px' : '4px 8px',
+        borderRadius: 8,
+        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
+        zIndex: 10,
+      }}>
+        {compact ? tier.frameLabel[0] : tier.frameLabel}
+      </div>
 
-      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
-        <span style={{ fontSize: compact ? 10 : 11, color: colors.label, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
-          {TYPE_ICONS[card.type]} {compact ? '' : card.type}
-        </span>
-        <span style={{
-          fontSize: 10,
-          fontWeight: 800,
-          padding: '2px 6px',
-          borderRadius: 4,
-          background: `${tier.color}22`,
-          color: tier.color,
-          border: `1px solid ${tier.color}55`,
-          textTransform: 'uppercase',
-          letterSpacing: '0.05em',
-        }}>
-          {compact ? card.tier[0].toUpperCase() : tier.frameLabel}
-        </span>
+      {/* Rupee decoration */}
+      <div style={{ position: 'absolute', top: 8, right: 8, opacity: 0.5 }}>
+        <IndianRupee size={12} color="#ca8a04" />
       </div>
 
-      <div style={{ fontSize: compact ? 11 : 13, fontWeight: 700, color: isLegendary ? '#fde68a' : isEpic ? '#e9d5ff' : '#f1f5f9', lineHeight: 1.2, fontFamily: 'Space Grotesk, sans-serif' }}>
+      {/* Icon Area */}
+      <div style={{
+        marginTop: compact ? 8 : 12,
+        width: compact ? 36 : 48,
+        height: compact ? 36 : 48,
+        display: 'flex',
+        alignItems: 'center',
+        justifyContent: 'center',
+        background: colors.iconBg,
+        color: colors.iconColor,
+        borderRadius: 8,
+        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
+      }}>
+        <Icon size={compact ? 20 : 24} />
+      </div>
+
+      {/* Title */}
+      <div style={{
+        fontSize: compact ? 10 : 12,
+        fontWeight: 800,
+        color: '#1f2937',
+        textAlign: 'center',
+        lineHeight: 1.1,
+        marginTop: 2,
+      }}>
         {card.name}
       </div>
 
+      {/* Description */}
       {!compact && (
-        <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.4, flexGrow: 1, overflow: 'hidden' }}>
+        <div style={{
+          fontSize: 9,
+          color: '#4b5563',
+          textAlign: 'center',
+          lineHeight: 1.2,
+          display: '-webkit-box',
+          WebkitLineClamp: 3,
+          WebkitBoxOrient: 'vertical',
+          overflow: 'hidden',
+          padding: '0 4px',
+        }}>
           {card.flavor}
         </div>
       )}
 
-      {/* Show invest risk warning on risky invest options */}
+      {/* Invest options indicator (only for full view) */}
       {!compact && card.type === 'decision' && card.options && (
-        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
-          {card.options.map(opt => (
-            <div key={opt.type} style={{ fontSize: 11, padding: '2px 4px', borderRadius: 4, background: 'rgba(255,255,255,0.05)', color: opt.type === 'invest' ? '#34d399' : opt.type === 'save' ? '#60a5fa' : '#f87171', display: 'flex', justifyContent: 'space-between' }}>
-              <span>{opt.type.toUpperCase()}: {opt.label}</span>
-              {opt.type === 'invest' && opt.investRisk && (
-                <span style={{ color: '#f97316', fontSize: 10 }}>⚠️ {opt.investRisk}% fail</span>
-              )}
-            </div>
-          ))}
+        <div style={{ marginTop: 'auto', display: 'flex', gap: 2, width: '100%', padding: '0 4px' }}>
+          {card.options.map(opt => {
+            const optColor = opt.type === 'save' ? '#22c55e' : opt.type === 'invest' ? '#3b82f6' : '#ef4444'
+            return (
+              <div key={opt.type} style={{
+                flex: 1,
+                height: 4,
+                background: optColor,
+                borderRadius: 2,
+                opacity: 0.7
+              }} />
+            )
+          })}
         </div>
       )}
-    </motion.div>
+    </motion.button>
   )
 }
diff --git a/src/components/game/GameLog.tsx b/src/components/game/GameLog.tsx
index 2935970..070a8fa 100644
--- a/src/components/game/GameLog.tsx
+++ b/src/components/game/GameLog.tsx
@@ -1,21 +1,51 @@
+import { ScrollText } from 'lucide-react'
+
 interface GameLogProps {
   log: string[]
 }
 
 export function GameLog({ log }: GameLogProps) {
   return (
-    <div className="glass-panel" style={{
-      borderRadius: 12, padding: '12px 16px', maxHeight: 90, overflowY: 'auto', boxShadow: 'none'
+    <div style={{
+      background: 'rgba(255, 255, 255, 0.45)',
+      backdropFilter: 'blur(16px)',
+      WebkitBackdropFilter: 'blur(16px)',
+      borderRadius: 20,
+      padding: '24px',
+      border: '1px solid rgba(255, 255, 255, 0.6)',
+      boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
+      display: 'flex',
+      flexDirection: 'column',
+      gap: 16,
+      minHeight: 300,
+      maxHeight: 500,
     }}>
-      {log.slice(0, 5).map((entry, i) => (
-        <div key={i} style={{
-          fontSize: 15, color: i === 0 ? '#94a3b8' : '#475569',
-          padding: '2px 0',
-          borderBottom: i < Math.min(4, log.length - 1) ? '1px solid rgba(255,255,255,0.04)' : 'none',
-        }}>
-          {entry}
-        </div>
-      ))}
+      <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: 12, marginBottom: 4 }}>
+        <ScrollText size={18} color="var(--text-muted)" />
+        <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
+          Game Log
+        </h3>
+      </div>
+      <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8, paddingRight: 4 }}>
+        {log.length === 0 ? (
+          <div style={{ fontSize: 15, color: 'var(--text-muted)', fontStyle: 'italic' }}>Game started. Waiting for first move...</div>
+        ) : (
+          log.slice(0, 10).map((entry, i) => (
+            <div key={i} style={{
+              fontSize: 15,
+              color: i === 0 ? 'var(--text-dark)' : 'var(--text-muted)',
+              fontWeight: i === 0 ? 600 : 400,
+              display: 'flex',
+              alignItems: 'flex-start',
+              gap: 8,
+              lineHeight: 1.5,
+            }}>
+              <span style={{ color: i === 0 ? 'var(--blue-deep)' : 'var(--text-muted)', marginTop: 2 }}>•</span>
+              {entry}
+            </div>
+          ))
+        )}
+      </div>
     </div>
   )
 }
diff --git a/src/components/game/PlayerBoard.tsx b/src/components/game/PlayerBoard.tsx
index b553f6a..91da036 100644
--- a/src/components/game/PlayerBoard.tsx
+++ b/src/components/game/PlayerBoard.tsx
@@ -2,6 +2,7 @@ import { useState, useEffect } from 'react'
 import { motion, AnimatePresence } from 'framer-motion'
 import type { PlayerState } from '../../types/game'
 import { formatWealth } from '../../types/game'
+import { IndianRupee, User } from 'lucide-react'
 
 interface PlayerBoardProps {
   player: PlayerState
@@ -11,15 +12,27 @@ interface PlayerBoardProps {
   isOffline?: boolean
   wealthGoal: number
   onClick?: () => void
+  index?: number
 }
 
-export function PlayerBoard({ player, isCurrent, isMe, isTarget, isOffline, wealthGoal, onClick }: PlayerBoardProps) {
+const COLOR_SCHEMES = [
+  { bg: 'linear-gradient(180deg, #10b981 0%, #047857 100%)', border: '#34d399', glow: 'rgba(16, 185, 129, 0.4)' }, // emerald
+  { bg: 'linear-gradient(180deg, #a855f7 0%, #7e22ce 100%)', border: '#c084fc', glow: 'rgba(168, 85, 247, 0.4)' }, // purple
+  { bg: 'linear-gradient(180deg, #f97316 0%, #c2410c 100%)', border: '#fb923c', glow: 'rgba(249, 115, 22, 0.4)' }, // orange
+  { bg: 'linear-gradient(180deg, #eab308 0%, #a16207 100%)', border: '#facc15', glow: 'rgba(234, 179, 8, 0.4)' }, // yellow
+]
+
+export function PlayerBoard({ player, isCurrent, isMe, isTarget, isOffline, wealthGoal, onClick, index = 0 }: PlayerBoardProps) {
   const wealthPct = Math.min(100, (player.wealth / wealthGoal) * 100)
   
   const [prevWealth, setPrevWealth] = useState(player.wealth)
   const [floatingText, setFloatingText] = useState<{ id: number; diff: number }[]>([])
   const [isShaking, setIsShaking] = useState(false)
 
+  // Use the ID to pick a consistent color if index isn't provided/stable
+  const colorIndex = typeof index === 'number' ? index % COLOR_SCHEMES.length : 0
+  const scheme = COLOR_SCHEMES[colorIndex]
+
   useEffect(() => {
     if (player.wealth !== prevWealth) {
       const diff = player.wealth - prevWealth
@@ -39,19 +52,29 @@ export function PlayerBoard({ player, isCurrent, isMe, isTarget, isOffline, weal
     <motion.div
       layout
       initial={{ opacity: 0, scale: 0.95 }}
-      animate={{ opacity: 1, scale: 1, x: isShaking ? [-6, 6, -6, 6, -3, 3, 0] : 0 }}
+      animate={{ opacity: isOffline ? 0.6 : 1, scale: 1, x: isShaking ? [-6, 6, -6, 6, -3, 3, 0] : 0 }}
       transition={{ x: { duration: 0.4 } }}
-      whileHover={isTarget ? { scale: 1.02, backgroundColor: 'rgba(239,68,68,0.08)' } : {}}
+      whileHover={isTarget ? { scale: 1.05, y: -5 } : { y: -2 }}
       whileTap={isTarget ? { scale: 0.95 } : {}}
       onClick={isTarget ? onClick : undefined}
-      className="glass-panel"
       style={{
-        background: isCurrent ? 'rgba(59,130,246,0.1)' : undefined,
-        border: `1px solid ${isCurrent ? 'rgba(59,130,246,0.5)' : isTarget ? 'rgba(239,68,68,0.7)' : 'rgba(255,255,255,0.08)'}`,
-        borderRadius: 16, padding: '16px',
+        background: scheme.bg,
+        border: `2px solid ${isCurrent ? '#fef08a' : scheme.border}`,
+        borderRadius: 16,
+        padding: '16px 12px',
         cursor: isTarget ? 'pointer' : 'default',
         position: 'relative',
-        boxShadow: isCurrent ? '0 0 20px rgba(59,130,246,0.2)' : undefined,
+        boxShadow: isCurrent 
+          ? `0 0 0 2px #fef08a, 0 8px 24px ${scheme.glow}` 
+          : isTarget 
+            ? '0 0 0 2px #ef4444, 0 8px 24px rgba(239, 68, 68, 0.4)' 
+            : `0 8px 16px rgba(0,0,0,0.2)`,
+        display: 'flex',
+        flexDirection: 'column',
+        alignItems: 'center',
+        width: 140,
+        gap: 8,
+        transition: 'all 0.2s ease',
       }}
     >
       <AnimatePresence>
@@ -63,9 +86,9 @@ export function PlayerBoard({ player, isCurrent, isMe, isTarget, isOffline, weal
             exit={{ opacity: 0 }}
             transition={{ duration: 1.5, ease: 'easeOut' }}
             style={{
-              position: 'absolute', top: 30, right: 20,
-              fontSize: 23, fontWeight: 800, fontFamily: 'Space Grotesk, sans-serif',
-              color: ft.diff > 0 ? '#10b981' : '#ef4444',
+              position: 'absolute', top: -20, right: '50%', transform: 'translateX(50%)',
+              fontSize: 20, fontWeight: 800, fontFamily: 'var(--font-display)',
+              color: ft.diff > 0 ? '#4ade80' : '#ef4444',
               pointerEvents: 'none', zIndex: 10,
               textShadow: '0 2px 4px rgba(0,0,0,0.5)'
             }}
@@ -76,53 +99,104 @@ export function PlayerBoard({ player, isCurrent, isMe, isTarget, isOffline, weal
         ))}
       </AnimatePresence>
 
-      {isCurrent && !isOffline && (
-        <div className="glass-pill" style={{
-          position: 'absolute', top: -12, right: 10,
-          fontSize: 11, fontWeight: 700, color: '#60a5fa',
-          padding: '4px 10px',
-          letterSpacing: '0.1em',
-        }}>
-          PLAYING
-        </div>
+      {/* Position / Status Badge */}
+      <div style={{
+        position: 'absolute', top: -8, right: -8,
+        background: isOffline ? '#6b7280' : isCurrent ? '#fef08a' : '#ef4444',
+        color: isCurrent ? '#854d0e' : '#ffffff',
+        fontSize: 10, fontWeight: 800,
+        padding: '4px 8px', borderRadius: 12,
+        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
+        zIndex: 2,
+      }}>
+        {isOffline ? 'OFFLINE' : isCurrent ? 'PLAYING' : `P${index + 1}`}
+      </div>
+
+      {/* Target Overlay Indicator */}
+      {isTarget && (
+        <div style={{
+          position: 'absolute', inset: 0,
+          background: 'rgba(239, 68, 68, 0.1)',
+          borderRadius: 14, zIndex: 1, pointerEvents: 'none'
+        }} />
       )}
-      {isOffline && (
-        <div className="glass-pill" style={{
-          position: 'absolute', top: -12, right: 10,
-          fontSize: 11, fontWeight: 700, color: '#94a3b8',
-          padding: '4px 10px',
-          letterSpacing: '0.1em',
-        }}>
-          OFFLINE
+
+      {/* Avatar Circle */}
+      <div style={{
+        width: 56, height: 56,
+        borderRadius: '50%',
+        background: 'rgba(255,255,255,0.2)',
+        border: '2px solid rgba(255,255,255,0.5)',
+        display: 'flex', alignItems: 'center', justifyContent: 'center',
+        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
+        overflow: 'hidden',
+        position: 'relative',
+        zIndex: 2,
+      }}>
+        {player.profile?.avatar_url ? (
+          <img src={player.profile.avatar_url} alt={player.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
+        ) : (
+          <User size={32} color="#ffffff" opacity={0.8} />
+        )}
+      </div>
+
+      {/* Player Name & Tag */}
+      <div style={{ textAlign: 'center', zIndex: 2 }}>
+        <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>
+          {player.name}
         </div>
-      )}
-      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, opacity: isOffline ? 0.5 : 1 }}>
-        <div>
-          <div style={{ fontSize: 16, fontWeight: 700, color: isMe ? '#60a5fa' : '#e2e8f0', fontFamily: 'Space Grotesk, sans-serif' }}>
-            {player.name}{isMe ? ' (You)' : player.isBot ? ' 🤖' : ''}
+        {(isMe || player.isBot) && (
+          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
+            {isMe ? '(You)' : 'Bot 🤖'}
           </div>
-          <div style={{ fontSize: 13, color: '#475569', marginTop: 1 }}>{player.hand.length} cards in hand</div>
+        )}
+      </div>
+
+      {/* Wealth Display */}
+      <div style={{
+        display: 'flex', alignItems: 'center', gap: 4,
+        background: 'rgba(0,0,0,0.25)', padding: '4px 8px', borderRadius: 8,
+        backdropFilter: 'blur(4px)', zIndex: 2,
+      }}>
+        <IndianRupee size={12} color="#fde047" />
+        <span style={{ fontSize: 14, fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
+          {formatWealth(player.wealth)}
+        </span>
+      </div>
+
+      {/* Stats row: Cards in Hand & Skips */}
+      <div style={{ display: 'flex', gap: 4, width: '100%', justifyContent: 'space-between', zIndex: 2 }}>
+        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.9)', background: 'rgba(0,0,0,0.15)', padding: '2px 6px', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
+          🃏 {player.hand.length}
         </div>
         {player.skippedTurns > 0 && (
-          <span style={{ fontSize: 13, color: '#f59e0b', background: 'rgba(245,158,11,0.12)', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
+          <div style={{ fontSize: 10, color: '#fef08a', background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
             SKIP×{player.skippedTurns}
-          </span>
+          </div>
         )}
       </div>
-      <div style={{ fontSize: 24, fontWeight: 800, color: '#10b981', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 8 }}>
-        {formatWealth(player.wealth)}
-      </div>
-      <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
-        <div style={{
-          height: '100%', width: `${wealthPct}%`,
-          background: isMe ? '#2563eb' : '#059669',
-          borderRadius: 3, transition: 'width 0.5s ease',
-        }} />
+
+      {/* Progress Bar */}
+      

/* ...truncated for capsule budget... */
```

## TODO / FIXME / HACK Notes

No TODO/FIXME/HACK notes found in selected files.

## Selected File Context

### src/components/game/GameLog.tsx

| Field | Value |
| --- | --- |
| Bytes | 1827 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
import { ScrollText } from 'lucide-react'

interface GameLogProps {
  log: string[]
}

export function GameLog({ log }: GameLogProps) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.45)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderRadius: 20,
      padding: '24px',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minHeight: 300,
      maxHeight: 500,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: 12, marginBottom: 4 }}>
        <ScrollText size={18} color="var(--text-muted)" />
        <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
          Game Log
        </h3>
      </div>
      <div style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8, paddingRight: 4 }}>
        {log.length === 0 ? (
          <div style={{ fontSize: 15, color: 'var(--text-muted)', fontStyle: 'italic' }}>Game started. Waiting for first move...</div>
        ) : (
          log.slice(0, 10).map((entry, i) => (
            <div key={i} style={{
              fontSize: 15,
              color: i === 0 ? 'var(--text-dark)' : 'var(--text-muted)',
              fontWeight: i === 0 ? 600 : 400,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 8,
              lineHeight: 1.5,
            }}>
              <span style={{ color: i === 0 ? 'var(--blue-deep)' : 'var(--text-muted)', marginTop: 2 }}>•</span>
              {entry}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
```

### src/components/game/PlayerBoard.tsx

| Field | Value |
| --- | --- |
| Bytes | 7963 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { PlayerState } from '../../types/game'
import { formatWealth } from '../../types/game'
import { IndianRupee, User } from 'lucide-react'

interface PlayerBoardProps {
  player: PlayerState
  isCurrent: boolean
  isMe: boolean
  isTarget: boolean
  isOffline?: boolean
  wealthGoal: number
  onClick?: () => void
  index?: number
}

const COLOR_SCHEMES = [
  { bg: 'linear-gradient(180deg, #10b981 0%, #047857 100%)', border: '#34d399', glow: 'rgba(16, 185, 129, 0.4)' }, // emerald
  { bg: 'linear-gradient(180deg, #a855f7 0%, #7e22ce 100%)', border: '#c084fc', glow: 'rgba(168, 85, 247, 0.4)' }, // purple
  { bg: 'linear-gradient(180deg, #f97316 0%, #c2410c 100%)', border: '#fb923c', glow: 'rgba(249, 115, 22, 0.4)' }, // orange
  { bg: 'linear-gradient(180deg, #eab308 0%, #a16207 100%)', border: '#facc15', glow: 'rgba(234, 179, 8, 0.4)' }, // yellow
]

export function PlayerBoard({ player, isCurrent, isMe, isTarget, isOffline, wealthGoal, onClick, index = 0 }: PlayerBoardProps) {
  const wealthPct = Math.min(100, (player.wealth / wealthGoal) * 100)
  
  const [prevWealth, setPrevWealth] = useState(player.wealth)
  const [floatingText, setFloatingText] = useState<{ id: number; diff: number }[]>([])
  const [isShaking, setIsShaking] = useState(false)

  // Use the ID to pick a consistent color if index isn't provided/stable
  const colorIndex = typeof index === 'number' ? index % COLOR_SCHEMES.length : 0
  const scheme = COLOR_SCHEMES[colorIndex]

  useEffect(() => {
    if (player.wealth !== prevWealth) {
      const diff = player.wealth - prevWealth
      setPrevWealth(player.wealth)
      
      if (diff !== 0) {
        setFloatingText(prev => [...prev, { id: Date.now(), diff }])
        if (diff < 0) {
          setIsShaking(true)
          setTimeout(() => setIsShaking(false), 500)
        }
      }
    }
  }, [player.wealth, prevWealth])

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isOffline ? 0.6 : 1, scale: 1, x: isShaking ? [-6, 6, -6, 6, -3, 3, 0] : 0 }}
      transition={{ x: { duration: 0.4 } }}
      whileHover={isTarget ? { scale: 1.05, y: -5 } : { y: -2 }}
      whileTap={isTarget ? { scale: 0.95 } : {}}
      onClick={isTarget ? onClick : undefined}
      style={{
        background: scheme.bg,
        border: `2px solid ${isCurrent ? '#fef08a' : scheme.border}`,
        borderRadius: 16,
        padding: '16px 12px',
        cursor: isTarget ? 'pointer' : 'default',
        position: 'relative',
        boxShadow: isCurrent 
          ? `0 0 0 2px #fef08a, 0 8px 24px ${scheme.glow}` 
          : isTarget 
            ? '0 0 0 2px #ef4444, 0 8px 24px rgba(239, 68, 68, 0.4)' 
            : `0 8px 16px rgba(0,0,0,0.2)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 140,
        gap: 8,
        transition: 'all 0.2s ease',
      }}
    >
      <AnimatePresence>
        {floatingText.map(ft => (
          <motion.div
            key={ft.id}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 0, y: -40, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'absolute', top: -20, right: '50%', transform: 'translateX(50%)',
              fontSize: 20, fontWeight: 800, fontFamily: 'var(--font-display)',
              color: ft.diff > 0 ? '#4ade80' : '#ef4444',
              pointerEvents: 'none', zIndex: 10,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
            onAnimationComplete={() => setFloatingText(prev => prev.filter(item => item.id !== ft.id))}
          >
            {ft.diff > 0 ? '+' : ''}₹{Math.abs(ft.diff).toLocaleString()}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Position / Status Badge */}
      <div style={{
        position: 'absolute', top: -8, right: -8,
        background: isOffline ? '#6b7280' : isCurrent ? '#fef08a' : '#ef4444',
        color: isCurrent ? '#854d0e' : '#ffffff',
        fontSize: 10, fontWeight: 800,
        padding: '4px 8px', borderRadius: 12,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        zIndex: 2,
      }}>
        {isOffline ? 'OFFLINE' : isCurrent ? 'PLAYING' : `P${index + 1}`}
      </div>

      {/* Target Overlay Indicator */}
      {isTarget && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(239, 68, 68, 0.1)',
          borderRadius: 14, zIndex: 1, pointerEvents: 'none'
        }} />
      )}

      {/* Avatar Circle */}
      <div style={{
        width: 56, height: 56,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.2)',
        border: '2px solid rgba(255,255,255,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
      }}>
        {player.profile?.avatar_url ? (
          <img src={player.profile.avatar_url} alt={player.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <User size={32} color="#ffffff" opacity={0.8} />
        )}
      </div>

      {/* Player Name & Tag */}
      <div style={{ textAlign: 'center', zIndex: 2 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.3)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>
          {player.name}
        </div>
        {(isMe || player.isBot) && (
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
            {isMe ? '(You)' : 'Bot 🤖'}
          </div>
        )}
      </div>

      {/* Wealth Display */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 4,
        background: 'rgba(0,0,0,0.25)', padding: '4px 8px', borderRadius: 8,
        backdropFilter: 'blur(4px)', zIndex: 2,
      }}>
        <IndianRupee size={12} color="#fde047" />
        <span style={{ fontSize: 14, fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
          {formatWealth(player.wealth)}
        </span>
      </div>

      {/* Stats row: Cards in Hand & Skips */}
      <div style={{ display: 'flex', gap: 4, width: '100%', justifyContent: 'space-between', zIndex: 2 }}>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.9)', background: 'rgba(0,0,0,0.15)', padding: '2px 6px', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
          🃏 {player.hand.length}
        </div>
        {player.skippedTurns > 0 && (
          <div style={{ fontSize: 10, color: '#fef08a', background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
            SKIP×{player.skippedTurns}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div style={{ width: '100%', marginTop: 2, zIndex: 2 }}>
        <div style={{ height: 4, background: 'rgba(0,0,0,0.2)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            height: '100%', width: `${wealthPct}%`,
            background: '#fef08a',
            borderRadius: 2, transition: 'width 0.5s ease',
          }} />
        </div>
      </div>

      {/* Interactive indicator for Target Phase */}
      {isTarget && (
        <div style={{
          position: 'absolute', bottom: -12, left: '50%', transform: 'translateX(-50%)',
          background: '#ef4444', color: '#fff', fontSize: 10, fontWeight: 800,
          padding: '2px 8px', borderRadius: 8, whiteSpace: 'nowrap',
          boxShadow: '0 2px 4px rgba(239, 68, 68, 0.4)',
          zIndex: 10, pointerEvents: 'none'
        }}>
          ATTACK
        </div>
      )}
    </motion.div>
  )
}
```

### src/components/game/TurnTimer.tsx

| Field | Value |
| --- | --- |
| Bytes | 2400 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { playSound } from '../../lib/audio'
import { Timer } from 'lucide-react'

interface TurnTimerProps {
  turnStartTime: number
  timeLimit: number
  onTimeout: () => void
  active: boolean
}

export function TurnTimer({ turnStartTime, timeLimit, onTimeout, active }: TurnTimerProps) {
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  
  useEffect(() => {
    if (!active) return

    const checkTime = () => {
      const elapsed = Date.now() - turnStartTime
      const remaining = Math.max(0, timeLimit - elapsed)
      setTimeLeft(remaining)
      
      // Play a ticking sound when time is running out (under 5 seconds)
      if (remaining > 0 && remaining <= 5000 && remaining % 1000 < 100) {
        playSound('play') // tick
      }

      if (remaining <= 0) {
        onTimeout()
      }
    }

    const timer = setInterval(checkTime, 100)
    checkTime()
    return () => clearInterval(timer)
  }, [turnStartTime, timeLimit, active, onTimeout])

  if (!active) return null

  const pct = Math.max(0, Math.min(100, (timeLeft / timeLimit) * 100))
  const isDanger = timeLeft <= 10000

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: isDanger ? '#ef4444' : '#64748b', fontSize: 12, fontWeight: 700 }}>
          <Timer size={14} className={isDanger ? 'animate-pulse' : ''} />
          {isDanger ? 'HURRY UP!' : 'TIME REMAINING'}
        </div>
        <div style={{ color: isDanger ? '#ef4444' : '#94a3b8', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-display)' }}>
          {Math.ceil(timeLeft / 1000)}s
        </div>
      </div>
      <div style={{
        width: '100%', height: 8, background: 'rgba(0,0,0,0.05)',
        borderRadius: 4, overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.05)'
      }}>
        <motion.div
          animate={{ 
            width: `${pct}%`, 
            backgroundColor: isDanger ? '#ef4444' : '#10b981',
            boxShadow: isDanger ? '0 0 8px rgba(239,68,68,0.5)' : 'none'
          }}
          transition={{ duration: 0.1, ease: 'linear' }}
          style={{ height: '100%', borderRadius: 3 }}
        />
      </div>
    </div>
  )
}
```

### src/components/GameCard.tsx

| Field | Value |
| --- | --- |
| Bytes | 7097 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
import { motion } from 'framer-motion'
import type { GameCard as GameCardType } from '../types/game'
import { FileWarning, Shield, Zap, IndianRupee } from 'lucide-react'

interface GameCardProps {
  card: GameCardType
  onClick?: () => void
  selected?: boolean
  disabled?: boolean
  compact?: boolean
  faceDown?: boolean
}

const TYPE_COLORS = {
  action: {
    bg: 'linear-gradient(180deg, #fef2f2 0%, #fee2e2 100%)',
    border: '#fca5a5',
    borderHover: '#ef4444',
    badge: '#ef4444',
    iconBg: '#fee2e2',
    iconColor: '#dc2626',
    icon: Zap,
  },
  decision: {
    bg: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%)',
    border: '#86efac',
    borderHover: '#22c55e',
    badge: '#22c55e',
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
    icon: FileWarning,
  },
  defense: {
    bg: 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)',
    border: '#93c5fd',
    borderHover: '#3b82f6',
    badge: '#3b82f6',
    iconBg: '#dbeafe',
    iconColor: '#2563eb',
    icon: Shield,
  },
}

// Per-tier visual configuration
const TIER_CONFIG: Record<string, {
  color: string
  glow: string
  shimmer: boolean
  frameLabel: string
}> = {
  common:    { color: '#6b7280', glow: 'none', shimmer: false, frameLabel: 'COMMON' },
  rare:      { color: '#3b82f6', glow: '0 4px 14px rgba(59,130,246,0.2)', shimmer: false, frameLabel: 'RARE' },
  epic:      { color: '#a855f7', glow: '0 6px 20px rgba(168,85,247,0.3)', shimmer: true, frameLabel: 'EPIC' },
  legendary: { color: '#eab308', glow: '0 8px 30px rgba(234,179,8,0.45)', shimmer: true, frameLabel: 'LEGENDARY' },
}

export function GameCard({ card, onClick, selected, disabled, compact, faceDown }: GameCardProps) {
  const colors = TYPE_COLORS[card.type] ?? TYPE_COLORS.decision
  const tier = TIER_CONFIG[card.tier] ?? TIER_CONFIG.common
  const isLegendary = card.tier === 'legendary'
  const Icon = colors.icon

  if (faceDown) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          width: compact ? 80 : 140,
          height: compact ? 110 : 200,
          borderRadius: compact ? 12 : 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #004030, #002020)',
          border: '3px dashed #FFD050',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          flexShrink: 0,
        }}
      >
        <IndianRupee className="text-yellow-400" size={compact ? 24 : 40} />
      </motion.div>
    )
  }

  // Base dimensions
  const width = compact ? 90 : 140
  const height = compact ? 120 : 200
  const padding = compact ? '8px' : '12px'

  return (
    <motion.button
      layoutId={card.id}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{
        opacity: disabled ? 0.5 : 1,
        y: selected ? -10 : 0,
        scale: selected ? 1.05 : 1,
      }}
      whileHover={onClick && !disabled && !selected ? { y: -5, scale: 1.05, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' } : {}}
      whileTap={onClick && !disabled ? { scale: 0.95 } : {}}
      onClick={!disabled ? onClick : undefined}
      style={{
        width,
        height,
        background: colors.bg,
        border: `2px solid ${selected ? '#eab308' : colors.border}`,
        borderRadius: compact ? 12 : 16,
        cursor: onClick && !disabled ? 'pointer' : 'default',
        padding,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: compact ? 4 : 8,
        boxShadow: selected ? '0 0 0 2px #fef08a, 0 8px 16px rgba(0,0,0,0.1)' : '0 4px 6px -1px rgba(0,0,0,0.1)',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        if (onClick && !disabled && !selected) {
          e.currentTarget.style.borderColor = colors.borderHover
        }
      }}
      onMouseLeave={(e) => {
        if (!selected) {
          e.currentTarget.style.borderColor = colors.border
        }
      }}
    >
      {/* Top shimmer bar for epic/legendary */}
      {tier.shimmer && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: isLegendary ? 4 : 3,
          background: isLegendary
            ? 'linear-gradient(90deg, transparent, #fde047, #fef08a, #fde047, transparent)'
            : 'linear-gradient(90deg, transparent, #d8b4fe, #e9d5ff, #d8b4fe, transparent)',
          animation: 'shimmer 2.5s linear infinite',
        }} />
      )}

      {/* Tier Badge */}
      <div style={{
        position: 'absolute',
        top: -4,
        left: -4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: tier.color,
        color: '#fff',
        fontSize: compact ? 9 : 10,
        fontWeight: 800,
        padding: compact ? '4px 6px' : '4px 8px',
        borderRadius: 8,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        zIndex: 10,
      }}>
        {compact ? tier.frameLabel[0] : tier.frameLabel}
      </div>

      {/* Rupee decoration */}
      <div style={{ position: 'absolute', top: 8, right: 8, opacity: 0.5 }}>
        <IndianRupee size={12} color="#ca8a04" />
      </div>

      {/* Icon Area */}
      <div style={{
        marginTop: compact ? 8 : 12,
        width: compact ? 36 : 48,
        height: compact ? 36 : 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: colors.iconBg,
        color: colors.iconColor,
        borderRadius: 8,
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
      }}>
        <Icon size={compact ? 20 : 24} />
      </div>

      {/* Title */}
      <div style={{
        fontSize: compact ? 10 : 12,
        fontWeight: 800,
        color: '#1f2937',
        textAlign: 'center',
        lineHeight: 1.1,
        marginTop: 2,
      }}>
        {card.name}
      </div>

      {/* Description */}
      {!compact && (
        <div style={{
          fontSize: 9,
          color: '#4b5563',
          textAlign: 'center',
          lineHeight: 1.2,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          padding: '0 4px',
        }}>
          {card.flavor}
        </div>
      )}

      {/* Invest options indicator (only for full view) */}
      {!compact && card.type === 'decision' && card.options && (
        <div style={{ marginTop: 'auto', display: 'flex', gap: 2, width: '100%', padding: '0 4px' }}>
          {card.options.map(opt => {
            const optColor = opt.type === 'save' ? '#22c55e' : opt.type === 'invest' ? '#3b82f6' : '#ef4444'
            return (
              <div key={opt.type} style={{
                flex: 1,
                height: 4,
                background: optColor,
                borderRadius: 2,
                opacity: 0.7
              }} />
            )
          })}
        </div>
      )}
    </motion.button>
  )
}
```

### src/components/ui/Button.tsx

| Field | Value |
| --- | --- |
| Bytes | 1961 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  loading?: boolean
}

export function Button({ variant = 'primary', size = 'md', children, loading, className = '', disabled, ...props }: ButtonProps) {
  const variantStyle = {
    primary: { background: 'var(--green-action)', color: 'var(--white)', border: '1px solid var(--green-bright)' },
    secondary: { background: 'var(--green-deep)', color: 'var(--green-light)', border: '1px solid var(--green-primary)' },
    ghost: { background: 'transparent', color: 'var(--gray-light)' },
    danger: { background: 'var(--orange-primary)', color: 'var(--white)', border: '1px solid var(--orange-bright)' },
    gold: { background: 'var(--gold)', color: 'var(--green-black)', border: '1px solid var(--coin-orange)' },
  }

  const sizeStyle = {
    sm: { padding: '6px 12px', fontSize: '15px' },
    md: { padding: '10px 20px', fontSize: '17px' },
    lg: { padding: '14px 28px', fontSize: '19px' },
  }

  return (
    <button
      {...props}
      disabled={disabled || loading}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontWeight: 600,
        borderRadius: '10px',
        border: 'none',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled || loading ? 0.6 : 1,
        transition: 'all 0.2s',
        fontFamily: 'inherit',
        ...variantStyle[variant],
        ...sizeStyle[size],
      }}
    >
      {loading && (
        <span style={{ width: 16, height: 16, border: '2px solid currentColor', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
      )}
      {children}
    </button>
  )
}
```

### src/components/ui/Card.tsx

| Field | Value |
| --- | --- |
| Bytes | 1359 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
import type { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  onClick?: () => void
  hoverable?: boolean
  glow?: 'blue' | 'gold' | 'green' | 'red'
}

export function Card({ children, style, className, onClick, hoverable, glow }: CardProps) {
  const glowColors = {
    blue: 'var(--shadow-glow-blue)',
    gold: 'var(--shadow-glow-gold)',
    green: 'var(--shadow-glow-green)',
    red: 'var(--shadow-glow-orange)',
  }

  return (
    <div
      onClick={onClick}
      className={`glass-panel ${className ?? ''}`}
      style={{
        borderRadius: '20px',
        padding: '24px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.3s ease',
        boxShadow: glow ? glowColors[glow] : '0 8px 32px rgba(0, 0, 0, 0.2)',
        ...style,
      }}
      onMouseEnter={hoverable && onClick ? (e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(255,255,255,0.16)'
        el.style.transform = 'translateY(-2px)'
      } : undefined}
      onMouseLeave={hoverable && onClick ? (e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'rgba(255,255,255,0.08)'
        el.style.transform = 'translateY(0)'
      } : undefined}
    >
      {children}
    </div>
  )
}
```

### src/components/ui/Input.tsx

| Field | Value |
| --- | --- |
| Bytes | 1259 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, id, style, ...props }: InputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <label htmlFor={id} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--gray-light)' }}>
          {label}
        </label>
      )}
      <input
        id={id}
        style={{
          background: 'var(--green-deep)',
          border: `1px solid ${error ? 'var(--orange-primary)' : 'var(--green-primary)'}`,
          borderRadius: '10px',
          padding: '10px 14px',
          color: 'var(--green-light)',
          fontSize: '18px',
          outline: 'none',
          width: '100%',
          transition: 'border-color 0.2s',
          ...style,
        }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--green-bright)'; }}
        onBlur={(e) => { e.target.style.borderColor = error ? 'var(--orange-primary)' : 'var(--green-primary)'; }}
        {...props}
      />
      {error && <span style={{ fontSize: '15px', color: 'var(--orange-primary)' }}>{error}</span>}
    </div>
  )
}
```

### src/index.css

| Field | Value |
| --- | --- |
| Bytes | 7795 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Background / paper */
  --bg-mint-white: #F0FFF0;
  --bg-soft-cream: #F0F0E0;
  --bg-warm-white: #FFFFF0;
  --card-paper: #FFF0D0;
  --card-cream: #F0E0C0;
  --border-soft: #D0D0C0;

  /* Main dark green UI */
  --green-black: #001010;
  --green-deep: #002020;
  --green-forest: #003020;
  --green-teal-dark: #003030;
  --green-primary: #004030;
  --green-mid: #005030;

  /* Bright green accents */
  --green-action: #107050;
  --green-success: #208050;
  --green-bright: #209060;
  --green-highlight: #30A060;
  --green-light: #E0F0E0;

  /* Gold / coin / reward */
  --gold: #FFD050;
  --gold-light: #FFF0C0;
  --coin-orange: #F0A030;
  --coin-shadow: #B07010;

  /* Orange / spend button */
  --orange-primary: #E05020;
  --orange-dark: #D05020;
  --orange-bright: #E06020;
  --orange-soft: #F09060;
  --orange-light: #FFD0A0;

  /* Blue / invest / shield */
  --blue-primary: #1070C0;
  --blue-deep: #1060B0;
  --blue-light: #E0E0F0;
  --blue-soft: #D0E0E0;

  /* Text / neutrals */
  --text-dark: #101010;
  --text-soft-black: #202020;
  --text-muted: #708070;
  --gray: #A0B0A0;
  --gray-light: #C0D0C0;
  --white: #FFFFFF;
  --black: #000000;

  /* Mappings to preserve existing component styles */
  --color-bg: var(--green-black);
  --color-bg-2: var(--green-deep);
  --color-bg-3: var(--green-forest);
  --color-surface: rgba(255, 255, 255, 0.03);
  --color-surface-2: rgba(255, 255, 255, 0.08);
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-hover: rgba(255, 255, 255, 0.2);

  --color-primary: var(--blue-primary);
  --color-primary-light: var(--blue-light);
  --color-primary-dark: var(--blue-deep);

  --color-secondary: var(--green-bright);
  --color-secondary-light: var(--green-light);

  --color-gold: var(--gold);
  --color-gold-light: var(--gold-light);

  --color-success: var(--green-success);
  --color-warning: var(--coin-orange);
  --color-error: var(--orange-primary);
  --color-info: var(--blue-primary);

  --color-decision: rgba(32, 144, 96, 0.8);
  --color-action: rgba(224, 80, 32, 0.8);
  --color-defense: rgba(16, 112, 192, 0.8);
  --color-legendary: rgba(255, 208, 80, 0.8);

  --color-text: var(--text-dark);
  --color-text-2: var(--text-soft-black);
  --color-text-3: var(--text-muted);

  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;

  --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.15);
  --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.35);
  --shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.5);
  --shadow-glow-blue: 0 0 24px rgba(16, 112, 192, 0.35);
  --shadow-glow-gold: 0 0 24px rgba(255, 208, 80, 0.35);
  --shadow-glow-green: 0 0 24px rgba(48, 160, 96, 0.35);
  --shadow-glow-orange: 0 0 24px rgba(224, 80, 32, 0.35);

  --font-sans: 'Outfit', 'Inter', system-ui, sans-serif;
  --font-display: 'Space Grotesk', 'Outfit', 'Inter', system-ui, sans-serif;
  
  --bg-gradient: linear-gradient(135deg, #EEEFE0 0%, #9FC7AA 100%);
}

.spend {
  background: linear-gradient(180deg, #F09060, #E05020 55%, #D05020) !important;
  color: #FFFFFF !important;
}

.save {
  background: linear-gradient(180deg, #30A060, #107050 60%, #004030) !important;
  color: #FFFFFF !important;
}

.invest {
  background: linear-gradient(180deg, #1070C0, #1060B0 60%, #004070) !important;
  color: #FFFFFF !important;
}

.dark-panel {
  background: linear-gradient(180deg, #004030, #002020) !important;
}


html, body {
  height: 100%;
  background: var(--bg-gradient);
  background-attachment: fixed;
  color: var(--color-text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5 {
  font-family: var(--font-display);
  line-height: 1.2;
  font-weight: 700;
}

a {
  color: var(--color-primary-light);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  cursor: pointer;
  font-family: inherit;
}

input, textarea, select {
  font-family: inherit;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: var(--color-bg);
}
::-webkit-scrollbar-thumb {
  background: var(--color-surface-2);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-border-hover);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes glow {
  0%, 100% { box-shadow: 0 0 10px rgba(245,158,11,0.3); }
  50% { box-shadow: 0 0 25px rgba(245,158,11,0.7); }
}
@keyframes floatCard {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50% { transform: translateY(-8px) rotate(-2deg); }
}

.animate-fade-in { animation: fadeIn 0.3s ease forwards; }
.animate-slide-up { animation: slideUp 0.4s ease forwards; }
.animate-pulse { animation: pulse 2s infinite; }
.animate-spin { animation: spin 1s linear infinite; }
.animate-glow { animation: glow 2s ease-in-out infinite; }

.card-decision { --card-color: var(--color-decision); }
.card-action { --card-color: var(--color-action); }
.card-defense { --card-color: var(--color-defense); }
.card-legendary { --card-color: var(--color-legendary); }

/* Glassmorphism Utilities */
.glass-panel {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
}

.glass-card {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.glass-pill {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 9999px;
}

/* Mobile Responsiveness Utilities */
.mobile-only {
  display: none !important;
}

.desktop-only {
  display: block !important;
}

.desktop-flex {
  display: flex !important;
}

.scroll-x {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
}
.scroll-x::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* Base Responsive Rules */
@media (max-width: 768px) {
  .mobile-only {
    display: block !important;
  }
  .mobile-flex {
    display: flex !important;
  }
  .desktop-only, .desktop-flex {
    display: none !important;
  }

  /* Modals */
  .modal-content {
    width: 95vw !important;
    padding: 20px !important;
    max-height: 90vh !important;
    overflow-y: auto !important;
  }

  .players-container {
    display: flex !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
    padding-bottom: 8px !important;
  }
  .players-container::-webkit-scrollbar {
    display: none !important;
  }
  .players-container > div {
    flex: 0 0 200px !important;
  }
}

.players-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}
```

### src/pages/Auth.tsx

| Field | Value |
| --- | --- |
| Bytes | 5932 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export function Auth() {
  const [params] = useSearchParams()
  const [mode, setMode] = useState<'login' | 'register'>(params.get('mode') === 'register' ? 'register' : 'login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, register, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/dashboard')
  }, [user, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        if (username.length < 3) { setError('Username must be at least 3 characters'); setLoading(false); return }
        await register(email, password, username)
        localStorage.setItem('justRegistered', 'true')
      }
      navigate('/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: 'transparent',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(32,160,96,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
 
      <div style={{ width: '100%', maxWidth: 400, position: 'relative', animation: 'slideUp 0.4s ease forwards' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 35, color: 'var(--orange-dark)', letterSpacing: '-0.02em', marginBottom: 8 }}>
              PAISA WAR
            </div>
          </Link>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6 }}>
            {mode === 'login' ? 'Welcome back' : 'Join the game'}
          </h1>
          <p style={{ fontSize: 18, color: 'var(--text-muted)' }}>
            {mode === 'login' ? 'Sign in to your account' : 'Create your account to start playing'}
          </p>
        </div>
 
        <div style={{ background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.4)', borderRadius: 20, padding: 32, boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}>
          {/* Mode Toggle */}
          <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.4)', borderRadius: 10, padding: 4, marginBottom: 24, border: '1px solid rgba(255, 255, 255, 0.5)' }}>
            {(['login', 'register'] as const).map(m => (
              <button
                key={m}
                onClick={() => { setMode(m); setError('') }}
                style={{
                  flex: 1, padding: '8px 16px', borderRadius: 7, border: 'none', cursor: 'pointer',
                  background: mode === m ? 'var(--green-action)' : 'transparent',
                  color: mode === m ? 'var(--bg-mint-white)' : 'var(--text-muted)',
                  fontSize: 18, fontWeight: 600, transition: 'all 0.2s', fontFamily: 'inherit',
                }}
              >
                {m === 'login' ? 'Sign In' : 'Register'}
              </button>
            ))}
          </div>
 
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {mode === 'register' && (
              <Input
                label="Username"
                id="username"
                type="text"
                placeholder="your_mogul_name"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            )}
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
            />
 
            {error && (
              <div style={{ background: 'rgba(224,80,32,0.1)', border: '1px solid var(--orange-primary)', borderRadius: 8, padding: '10px 14px', fontSize: 16, color: 'var(--orange-dark)' }}>
                {error}
              </div>
            )}
 
            <Button type="submit" size="lg" loading={loading} style={{ width: '100%', marginTop: 4 }}>
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>
        </div>
 
        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 16, color: 'var(--text-muted)' }}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError('') }}
            style={{ color: 'var(--green-primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 16, fontWeight: 600 }}
          >
            {mode === 'login' ? 'Register' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  )
}
```

### src/pages/Landing.tsx

| Field | Value |
| --- | --- |
| Bytes | 10004 |
| Score | 150 |
| Why | changed, source |
| Status | Full content |


```tsx
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

const FEATURE_CARDS = [
  { icon: '🎴', title: 'Real Indian Money Decisions', desc: 'Every card puts you in a situation you might face in real life. SIPs, EMIs, Tax Raids, IPOs — your choices decide your fate.' },
  { icon: '⚔️', title: 'Attack & Defend', desc: 'Play Action cards to attack rivals with Tax Raids, Market Crashes, and UPI Frauds. Counter with Defense cards.' },
  { icon: '👑', title: 'Mogul Rank Ladder', desc: 'Climb from Rookie to DAANIK Legend through 8 rank tiers. RP gained, RP lost — the ladder never lies.' },
  { icon: '🏦', title: 'DAANIK Economy', desc: 'Earn DAANIK Coins, trade cards, join Guilds, and invest in the in-game stock market that mirrors player behavior.' },
  { icon: '📅', title: 'Prestige Seasons', desc: '30-day seasons with unique themes — IPO Boom, Crypto Cycle, Election Economy. New rules every month.' },
  { icon: '⚡', title: 'Daily Contracts', desc: '3 contracts reset every midnight. Miss them and they\'re gone. Build your streak, earn rare cards.' },
]

const PREVIEW_CARDS = [
  { name: 'Diwali Bonus', type: 'decision', color: '#209060', icon: '🟢', tier: 'COMMON' },
  { name: 'Market Crash', type: 'action', color: '#E05020', icon: '🔴', tier: 'RARE' },
  { name: 'Emergency Fund', type: 'defense', color: '#1070C0', icon: '🔵', tier: 'COMMON' },
  { name: 'The Black Swan', type: 'action', color: '#FFD050', icon: '⚡', tier: 'LEGENDARY' },
]

export function Landing() {
  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 50,
        padding: '0 24px',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(238, 239, 224, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--green-primary)',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--green-primary)', letterSpacing: '-0.02em' }}>
          PAISA WAR
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link to="/auth" style={{ color: 'var(--text-dark)', textDecoration: 'none', fontSize: 18, fontWeight: 500 }}>Sign In</Link>
          <Link to="/auth?mode=register">
            <Button size="sm">Play Now</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '120px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background is now handled globally in index.css */}

        <div style={{ animation: 'fadeIn 0.6s ease forwards', position: 'relative' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, border: '1px solid rgba(224,80,32,0.3)', background: 'rgba(224,80,32,0.08)', marginBottom: 24 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--orange-primary)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 15, color: 'var(--orange-dark)', fontWeight: 600, letterSpacing: '0.05em' }}>THE MONEY DECISION GAME</span>
          </div>

          <h1 style={{ fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 800, fontFamily: 'var(--font-display)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 24 }}>
            <span style={{ color: 'var(--text-dark)' }}>Earn.</span>{' '}
            <span style={{ color: 'var(--orange-dark)' }}>Attack.</span>{' '}
            <span style={{ color: 'var(--green-primary)' }}>Dominate.</span>
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: 'var(--text-muted)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6 }}>
            A fast-paced financial card game with real Indian money decisions. Race to ₹50 Lakhs through SIPs, Market Crashes, Tax Raids, and more.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/auth?mode=register">
              <Button size="lg" variant="gold">Start Playing Free</Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="secondary">Sign In</Button>
            </Link>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div style={{ marginTop: 64, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
          {PREVIEW_CARDS.map((card, i) => (
            <div key={card.name} style={{
              width: 120, height: 168,
              background: 'var(--card-paper)',
              border: `2px solid ${card.color}`,
              borderRadius: 12,
              padding: 12,
              display: 'flex', flexDirection: 'column', gap: 8,
              animation: `floatCard ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: card.color, fontWeight: 800 }}>{card.icon} {card.type.toUpperCase()}</span>
                <span style={{ fontSize: 10, fontWeight: 800, padding: '1px 4px', borderRadius: 3, background: card.color, color: card.color === '#FFD050' ? '#000' : '#fff' }}>{card.tier[0]}</span>
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-soft-black)', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>
                {card.name}
              </div>
              <div style={{ flex: 1, borderRadius: 6, background: 'rgba(0,0,0,0.03)', border: `1px solid ${card.color}33` }} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="glass-panel" style={{ padding: '32px 24px', borderRadius: 0, borderLeft: 'none', borderRight: 'none', borderTop: '1px solid var(--green-primary)', borderBottom: '1px solid var(--green-primary)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 24, textAlign: 'center' }}>
          {[
            { label: 'Cards', value: '108' },
            { label: 'Player Goal', value: '₹50L' },
            { label: 'Rank Tiers', value: '8' },
            { label: 'Game Time', value: '20-30 min' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: 35, fontWeight: 800, color: 'var(--orange-dark)', fontFamily: 'var(--font-display)' }}>{stat.value}</div>
              <div style={{ fontSize: 16, color: 'var(--text-muted)', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 45, fontFamily: 'var(--font-display)', color: 'var(--green-primary)', marginBottom: 8 }}>Why Paisa War?</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: 56, fontSize: 18 }}>Everything you love about competitive card games, built around Indian financial life.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {FEATURE_CARDS.map(f => (
            <div key={f.title} className="glass-panel" style={{
              padding: '28px', borderRadius: '24px',
              transition: 'all 0.3s ease',
              border: '1px solid var(--green-primary)',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--blue-primary)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--green-primary)'; (e.currentTarget as HTMLDivElement).style.transform = 'none' }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8, fontFamily: 'var(--font-display)' }}>{f.title}</h3>
              <p style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="glass-panel" style={{ padding: '80px 24px', textAlign: 'center', borderRadius: 0, borderLeft: 'none', borderRight: 'none', borderTop: '1px solid var(--green-primary)', borderBottom: '1px solid var(--green-primary)' }}>
        <h2 style={{ fontSize: 50, fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--green-primary)', marginBottom: 16 }}>Ready to build your empire?</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 23, marginBottom: 40 }}>Join thousands of players racing to ₹50 Lakhs.</p>
        <Link to="/auth?mode=register">
          <Button size="lg" variant="gold">Play Now — It's Free</Button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid var(--green-primary)', textAlign: 'center', color: 'var(--text-muted)', fontSize: 18 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--orange-dark)', marginBottom: 8 }}>PAISA WAR</div>
        <div>The Money Decision Game — For entertainment & financial literacy purposes.</div>
      </footer>
    </div>
  )
}
```

### src/pages/Lobby.tsx

| Field | Value |
| --- | --- |
| Bytes | 17785 |
| Score | 149 |
| Why | changed, source |
| Status | Truncated (budget limit) |

**Structural Outline:**
  - `fn Lobby` (line 15)
  - `fn WaitingRoom` (line 270)
  - `fn copyCode` (line 289)


```tsx
import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import {
  createRoom, joinRoom, leaveRoom, setReady, startGame,
  subscribeToRoom, getRoomPlayers, broadcastPlayersChanged, getRoom,
  type Room, type RoomPlayer,
} from '../lib/multiplayerEngine'
import type { RealtimeChannel } from '@supabase/supabase-js'

type LobbyView = 'menu' | 'waiting'

export function Lobby() {
  const { profile } = useAuth()
  const navigate = useNavigate()

  const [view, setView] = useState<LobbyView>('menu')
  const [joinCode, setJoinCode] = useState('')
  const [maxPlayers, setMaxPlayers] = useState(2)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [room, setRoom] = useState<Room | null>(null)
  const [roomPlayers, setRoomPlayers] = useState<RoomPlayer[]>([])
  const channelRef = useRef<RealtimeChannel | null>(null)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const isHost = room?.host_id === profile?.id
  const myPlayer = roomPlayers.find(p => p.player_id === profile?.id)
  // Host doesn't need to click Ready — their intent to start is enough.
  // All non-host players must be ready, and there must be at least 2 players total.
  const nonHostPlayers = roomPlayers.filter(p => p.player_id !== room?.host_id)
  const allReady = roomPlayers.length >= 2 && nonHostPlayers.length > 0 && nonHostPlayers.every(p => p.is_ready)
  const canStart = isHost && allReady

  const startPolling = useCallback((roomId: string) => {
    if (pollRef.current) clearInterval(pollRef.current)
    pollRef.current = setInterval(async () => {
      const players = await getRoomPlayers(roomId)
      setRoomPlayers(players)
      // Also poll the room state to catch status changes (e.g. game start)
      const r = await getRoom(roomId)
      if (r) setRoom(r)
    }, 3000)
  }, [])

  const stopPolling = useCallback(() => {
    if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null }
  }, [])

  useEffect(() => {
    return () => {
      channelRef.current?.unsubscribe()
      stopPolling()
    }
  }, [stopPolling])

  // Watch for game start — redirect non-host players too
  useEffect(() => {
    if (room?.status === 'in_progress' && room.game_state) {
      stopPolling()
      navigate(`/multiplayer/${room.id}`)
    }
  }, [room?.status, room?.id, navigate, stopPolling]) // eslint-disable-line

  const enterRoom = useCallback((newRoom: Room) => {
    setRoom(newRoom)
    setView('waiting')

    // Subscribe to realtime
    if (channelRef.current) channelRef.current.unsubscribe()
    channelRef.current = subscribeToRoom(
      newRoom.id,
      (updatedRoom) => setRoom(updatedRoom as Room),
      (players) => setRoomPlayers(players),
    )

    // Also poll as fallback
    startPolling(newRoom.id)
  }, [startPolling])

  const handleCreate = async () => {
    if (!profile) {
      setError('Profile not found. If you just signed up, your username might have been taken. Try signing out and signing up again with a different username.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const newRoom = await createRoom(profile.id, profile.username, maxPlayers)
      const players = await getRoomPlayers(newRoom.id)
      setRoomPlayers(players)
      enterRoom(newRoom)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to create room')
    } finally {
      setLoading(false)
    }
  }

  const handleJoin = async () => {
    if (!profile) {
      setError('Profile not found. If you just signed up, your username might have been taken. Try signing out and signing up again with a different username.')
      return
    }
    if (!joinCode.trim()) return
    setLoading(true)
    setError('')
    try {
      const joinedRoom = await joinRoom(joinCode.trim(), profile.id, profile.username)
      const players = await getRoomPlayers(joinedRoom.id)
      setRoomPlayers(players)
      enterRoom(joinedRoom)
      // After subscribing in enterRoom, broadcast so host sees the new player immediately
      setTimeout(() => broadcastPlayersChanged(joinedRoom.id), 500)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to join room')
    } finally {
      setLoading(false)
    }
  }

  const handleToggleReady = async () => {
    if (!room || !profile) return
    try {
      await setReady(room.id, profile.id, !myPlayer?.is_ready)
      // Broadcast change so everyone updates immediately
      await broadcastPlayersChanged(room.id)
      // Also update local state immediately for responsiveness
      const players = await getRoomPlayers(room.id)
      setRoomPlayers(players)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to update ready status')
    }
  }

  const handleStartGame = async () => {
    if (!room || !profile || !canStart) return
    setLoading(true)
    setError('')
    try {
      await startGame(room.id, roomPlayers)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to start game')
      setLoading(false)
    }
  }

  const handleLeave = async () => {
    if (!room || !profile) return
    await leaveRoom(room.id, profile.id)
    await broadcastPlayersChanged(room.id)
    channelRef.current?.unsubscribe()
    stopPolling()
    setRoom(null)
    setRoomPlayers([])
    setView('menu')
  }

  if (view === 'waiting' && room) {
    return (
      <WaitingRoom
        room={room}
        roomPlayers={roomPlayers}
        nonHostPlayers={nonHostPlayers}
        isHost={isHost}
        myPlayer={myPlayer}
        canStart={canStart}
        allReady={allReady}
        loading={loading}
        error={error}
        onToggleReady={handleToggleReady}
        onStart={handleStartGame}
        onLeave={handleLeave}
      />
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 480, animation: 'slideUp 0.4s ease' }}>
        <button
          onClick={() => navigate('/dashboard')}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 16, fontFamily: 'inherit', marginBottom: 28, display: 'flex', alignItems: 'center', gap: 6 }}
        >
          ← Back to Dashboard
        </button>

        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ fontSize: 50, marginBottom: 12 }}>🌐</div>
          <h1 style={{ fontSize: 35, fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'var(--font-display)', marginBottom: 8 }}>
            Play Online
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 18 }}>
            Create a room or join a friend's game with a code.
          </p>
        </div>

        {error && (
          <div style={{ background: 'rgba(224,80,32,0.1)', border: '1px solid var(--orange-primary)', borderRadius: 10, padding: '12px 16px', fontSize: 16, color: 'var(--orange-soft)', marginBottom: 20 }}>
            {error}
          </div>
        )}

        {/* Create Room */}
        <Card style={{ padding: 24, marginBottom: 16 }}>
          <h2 style={{ fontSize: 21, fontWeight: 700, color: 'var(--text-dark)', fontFamily: 'var(--font-display)', marginBottom: 16 }}>
            Create a Room
          </h2>
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 500 }}>Max Players</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[2, 3, 4, 5, 6].map(n => (
                <button
                  key={n}
                  onClick={() => setMaxPlayers(n)}
                  style={{
                    width: 44, height: 44, borderRadius: 8,
                    border: `2px solid ${maxPlayers === n ? 'var(--blue-primary)' : 'rgba(0,0,0,0.1)'}`,
                    background: maxPlayers === n ? 'rgba(16,112,192,0.1)' : 'transparent',
                    color: maxPlayers === n ? 'var(--blue-deep)' : 'var(--text-muted)',
                    fontWeight: 700, fontSize: 19, cursor: 'pointer',
                    transition: 'all 0.15s', fontFamily: 'inherit',
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <Button variant="gold" size="lg" loading={loading} onClick={handleCreate} style={{ width: '100%' }}>
            Create Room
          </Button>
        </Card>

        {/* Join Room */}
        <Card style={{ padding: 24 }}>
          <h2 style={{ fontSize: 21, fontWeight: 700, color: 'var(--text-dark)', fontFamily: 'var(--font-display)', marginBottom: 16 }}>
            Join a Room
          </h2>
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              value={joinCode}
              onChange={e => setJoinCode(e.target.value.toUpperCase())}
              placeholder="Enter room code..."
              maxLength={6}
              onKeyDown={e => e.key === 'Enter' && handleJoin()}
              style={{
                flex: 1, padding: '10px 14px', background: 'rgba(0,0,0,0.02)',
                border: '1px solid rgba(0,0,0,0.1)', borderRadius: 10,
                color: 'var(--text-dark)', fontSize: 20, fontWeight: 700,
                letterSpacing: '0.15em', fontFamily: 'var(--font-display)',
                outline: 'none',
              }}
              onFocus={e => { e.target.style.borderColor = 'var(--blue-primary)' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(0,0,0,0.1)' }}
            />
            <Button onClick={handleJoin} loading={loading} disabled={joinCode.length < 4}>
              Join
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

function WaitingRoom({
  room, roomPlayers, nonHostPlayers, isHost, myPlayer, canStart, allReady, loading, error,
  onToggleReady, onStart, onLeave,
}: {
  room: Room
  roomPlayers: RoomPlayer[]
  nonHostPlayers: RoomPlayer[]
  isHost: boolean
  myPlayer: RoomPlayer | undefined
  canStart: boolean
  allReady: boolean
  loading: boolean
  error: string
  onToggleReady: () => void
  onStart: () => void
  onLeave: () => void
}) {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(room.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 520, animation: 'slideUp 0.4s ease' }}>

        {/* Room Code */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Share this code to invite players
          </div>
          <div
            onClick={copyCode}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              background: 'rgba(0,0,0,0.05)', border: '2px solid var(--orange-dark)',
              borderRadius: 16, padding: '16px 32px', cursor: 'pointer',
              transition: 'all 0.2s', userSelect: 'none',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--orange-primary)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--orange-dark)' }}
          >
            <span style={{ fontSize: 45, fontWeight: 800, letterSpacing: '0.25em', color: 'var(--orange-dark)', fontFamily: 'var(--font-display)' }}>
              {room.code}
            </span>
            <span style={{ fontSize: 15, color: copied ? 'var(--green-primary)' : 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>
              {copied ? '✓ Copied!' : 'Click to copy'}
            </span>
          </div>
        </div>

        {error && (
          <div style={{ background: 'rgba(224,80,32,0.1)', border: '1px solid var(--orange-primary)', borderRadius: 10, padding: '12px 16px', fontSize: 16, color: 'var(--orange-soft)', marginBottom: 16 }}>
            {error}
          </div>
        )}

        {/* Players List */}
        <Card style={{ padding: 20, marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h2 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-dark)', fontFamily: 'var(--font-display)' }}>
              Players ({roomPlayers.length}/{room.max_players})
            </h2>
            <div style={{ fontSize: 15, color: 'var(--text-muted)' }}>
              {allReady
                ? <span style={{ color: 'var(--green-primary)', fontWeight: 700 }}>All ready!</span>
                : nonHostPlayers.length === 0
                  ? <span>Waiting for players...</span>
                  : <span>{nonHostPlayers.filter(p => p.is_ready).length}/{nonHostPlayers.length} ready</span>
              }
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {roomPlayers.map(p => (
              <div
                key={p.id}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 14px', borderRadius: 10,
                  background: p.player_id === room.host_id ? 'rgba(224,80,32,0.06)' : 'rgba(0,0,0,0.05)',
                  border: `1px solid ${p.player_id === room.host_id ? 'var(--orange-primary)' : 'rgba(0,0,0,0.1)'}`,
       

/* ...truncated for capsule budget... */
```

### src/pages/Dashboard.tsx

| Field | Value |
| --- | --- |
| Bytes | 26944 |
| Score | 148 |
| Why | changed, source |
| Status | Truncated (budget limit) |

**Structural Outline:**
  - `interface LeaderboardEntry` (line 15)
  - `fn Dashboard` (line 25)
  - `fn HomeTab` (line 204)
  - `fn updateTimer` (line 213)
  - `fn LeaderboardTab` (line 307)
  - `fn ContractsTab` (line 364)
  - `fn fetchContracts` (line 372)
  - `fn updateTimer` (line 404)
  - `fn ProfileTab` (line 487)


```tsx
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { RankBadge } from '../components/RankBadge'
import { SEASONS } from '../data/mockData'
import { formatWealth } from '../types/game'
import { supabase } from '../lib/supabase'
import { TutorialModal } from '../components/TutorialModal'

type Tab = 'home' | 'leaderboard' | 'contracts' | 'profile'


interface LeaderboardEntry {
  id: string
  user_id: string
  username: string
  wins: number
  losses: number
  total_games: number
  highest_net_worth: number
}

export function Dashboard() {
  const { profile, logout } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState<Tab>('home')
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [leaderboardLoading, setLeaderboardLoading] = useState(false)
  const [showTutorial, setShowTutorial] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('justRegistered') === 'true') {
      setShowTutorial(true)
      localStorage.removeItem('justRegistered')
      localStorage.setItem('hasSeenTutorial', 'true')
    }
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  useEffect(() => {
    if (tab === 'leaderboard') fetchLeaderboard()
  }, [tab])

  const fetchLeaderboard = async () => {
    setLeaderboardLoading(true)
    const { data } = await supabase
      .from('leaderboard')
      .select('*')
      .order('wins', { ascending: false })
      .limit(50)
    setLeaderboard(data ?? [])
    setLeaderboardLoading(false)
  }

  const rp = profile?.rank_points ?? 0
  const coins = profile?.daanik_coins ?? 100
  const currentSeason = SEASONS[0]


  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showTutorial && (
        <TutorialModal onClose={() => {
          setShowTutorial(false)
          localStorage.setItem('hasSeenTutorial', 'true')
        }} />
      )}
      {/* Top Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 40,
        background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--green-primary)',
        padding: '0 20px',
        height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button 
            className="desktop-only"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            style={{ background: 'transparent', border: 'none', color: 'var(--text-dark)', cursor: 'pointer', fontSize: 25, display: 'flex', alignItems: 'center', padding: 4 }}
          >
            ☰
          </button>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 23, color: 'var(--green-primary)' }}>PAISA WAR</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8, padding: '5px 12px' }}>
            <span style={{ fontSize: 18 }}>🪙</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--orange-dark)' }}>{coins.toLocaleString()} DC</span>
          </div>
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 16, fontFamily: 'inherit' }}>Sign Out</button>
        </div>
      </nav>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar (Desktop) */}
        {isSidebarOpen && (
        <aside className="glass-panel desktop-flex" style={{
          width: 220, flexShrink: 0,
          borderTop: 'none', borderLeft: 'none', borderBottom: 'none',
          padding: '24px 16px',
          flexDirection: 'column', gap: 6,
          position: 'sticky', top: 60, height: 'calc(100vh - 60px)',
          overflowY: 'auto',
          borderRadius: 0,
          borderRight: '1px solid var(--green-primary)',
        }}>
          {([
            { id: 'home', label: 'Home', icon: '🏠' },
            { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
            { id: 'contracts', label: 'Contracts', icon: '📋' },
            { id: 'profile', label: 'Profile', icon: '👤' },
          ] as const).map(item => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 16px', borderRadius: 12, border: 'none',
                background: tab === item.id ? 'rgba(0,0,0,0.05)' : 'transparent',
                color: tab === item.id ? 'var(--green-primary)' : 'var(--text-muted)',
                cursor: 'pointer', fontSize: 16, fontWeight: 600, fontFamily: 'inherit',
                textAlign: 'left', width: '100%',
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}

          <div style={{ marginTop: 'auto', padding: '12px 0', borderTop: '1px solid var(--green-primary)' }}>
            <button
              onClick={() => setShowTutorial(true)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 16px', borderRadius: 12,
                background: 'rgba(224,80,32,0.05)', border: '1px solid var(--orange-primary)',
                color: 'var(--orange-primary)',
                cursor: 'pointer', fontSize: 16, fontWeight: 700, fontFamily: 'inherit',
                textAlign: 'left', width: '100%', marginBottom: 16,
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 20 }}>📖</span>
              How to Play
            </button>
            {profile && <RankBadge rp={rp} showProgress size="sm" />}
          </div>
        </aside>
        )}

        <main style={{ flex: 1, padding: '24px', overflowY: 'auto', animation: 'fadeIn 0.3s ease', paddingBottom: '90px' }}>
          {tab === 'home' && <HomeTab navigate={navigate} profile={profile} currentSeason={currentSeason} />}
          {tab === 'leaderboard' && <LeaderboardTab leaderboard={leaderboard} loading={leaderboardLoading} profile={profile} onRefresh={fetchLeaderboard} />}
          {tab === 'contracts' && <ContractsTab />}
          {tab === 'profile' && <ProfileTab profile={profile} />}
        </main>
      </div>

      {/* Bottom Nav (Mobile) */}
      <nav className="glass-panel mobile-flex" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
        padding: '8px 16px',
        justifyContent: 'space-around', alignItems: 'center',
        borderLeft: 'none', borderRight: 'none', borderBottom: 'none',
        borderRadius: 0,
        display: 'none', // Hidden by default, shown by .mobile-flex
      }}>
        {([
          { id: 'home', label: 'Home', icon: '🏠' },
          { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
          { id: 'contracts', label: 'Contracts', icon: '📋' },
          { id: 'profile', label: 'Profile', icon: '👤' },
        ] as const).map(item => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: '8px', border: 'none', background: 'transparent',
              color: tab === item.id ? 'var(--green-primary)' : 'var(--text-muted)',
              cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'inherit',
              transition: 'all 0.15s',
            }}
          >
            <span style={{ fontSize: 25, marginBottom: 2 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

function HomeTab({ navigate, profile, currentSeason }: { navigate: (path: string) => void; profile: ReturnType<typeof useAuth>['profile']; currentSeason: typeof SEASONS[0] }) {
  const [seasonTimeLeft, setSeasonTimeLeft] = useState('Calculating...')

  useEffect(() => {
    const end = new Date()
    end.setDate(end.getDate() + 12)
    end.setHours(end.getHours() + 4)
    const endTime = end.getTime()

    const updateTimer = () => {
      const diff = endTime - Date.now()
      if (diff <= 0) {
        setSeasonTimeLeft('Ended')
        return
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      setSeasonTimeLeft(`${d}d ${h}h`)
    }
    updateTimer()
    const interval = setInterval(updateTimer, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 900, width: '100%', margin: '0 auto' }}>
      {/* Welcome */}
      <div style={{ background: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.6)', borderRadius: 16, padding: '24px 28px', boxShadow: '0 8px 32px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'var(--font-display)', marginBottom: 4 }}>
              Welcome, {profile?.username ?? 'Mogul'} 👋
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 18 }}>Ready to build your empire?</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Button variant="gold" size="lg" onClick={() => navigate('/multiplayer')}>Play Online</Button>
            <Button variant="primary" onClick={() => navigate('/game')}>vs AI</Button>
            <Button variant="secondary" onClick={() => navigate('/game?mode=casual')}>Casual</Button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
        {[
          { label: 'Games Played', value: (profile?.games_played ?? 0).toString(), icon: '🎮', color: 'var(--blue-deep)' },
          { label: 'Games Won', value: (profile?.games_won ?? 0).toString(), icon: '🏆', color: 'var(--green-primary)' },
          { label: 'Win Streak', value: `${profile?.win_streak ?? 0}🔥`, icon: '🔥', color: 'var(--orange-dark)' },
          { label: 'Total XP', value: (profile?.total_xp ?? 0).toLocaleString(), icon: '⭐', color: 'var(--orange-dark)' },
        ].map(stat => (
          <Card key={stat.label} style={{ padding: '16px 20px' }}>
            <div style={{ fontSize: 30, marginBottom: 6 }}>{stat.icon}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: stat.color, fontFamily: 'var(--font-display)' }}>{stat.value}</div>
            <div style={{ fontSize: 15, color: 'var(--text-muted)', marginTop: 2 }}>{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Season Banner */}
      <Card glow="gold" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 15, color: 'var(--orange-dark)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: 6 }}>ACTIVE SEASON</div>
            <h2 style={{ fontSize: 25, fontWeight: 800, color: 'var(--text-dark)', fontFamily: 'var(--font-display)', marginBottom: 4 }}>
              Season {currentSeason.number}: {currentSeason.name}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16 }}>{currentSeason.theme}</p>
            <div style={{ marginTop: 8, padding: '4px 10px', borderRadius: 6, background: 'rgba(224,80,32,0.08)', border: '1px solid var(--orange-dark)', display: 'inline-block', fontSize: 15, color: 'var(--orange-dark)', fontWeight: 600 }}>
              ⚡ {currentSeason.special_rule}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 4 }}>Season ends in</div>
            <div style={{ fontSize: 35, fontWeight: 800, color: 'var(--orange-dark)', fontFamily: 'var(--font-display)' }}>{seasonTimeLeft}</div>
          </div>
        </div>
      </Card>

      {/* Quick Play Options */}
      <div>
        <h2 style={{ fontSize: 23, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 16, fontFamily: 'var(--font-display)' }}>Game Modes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            { title: 'Play Online', desc: 'Create or join a room. Play against real players worldwide.', icon: '🌐', action: () => navigate('/multiplayer'), color: 'var(--orange-dark)' },
            { title: 'vs AI', desc: 'Practice against adaptive AI opponents.', icon: '🤖', action: () => navigate('/game?mode=ai'), color: 'var(--green-primary)' },
            { title: 'Ranked Match', desc: 'Earn/lose RP. Climb the Mogul ladder.', icon: '🏆', action: () => navigate('/game?mode=ranked'), color: 'var(--blue-deep)' },
          ].map(m => (
            <Card key={m.title} hoverable onClick={m.action} style={{ padding: 20, cursor: 'pointer' }}>
              <div style={{ fontSize: 35, marginBottom: 12 }}>{m.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-dark)', marginBottom: 6, fontFamily: 'var(--font-display)' }}>{m.title}</h3>
              <p style={{ fontSize: 1

/* ...truncated for capsule budget... */
```

### src/pages/Game.tsx

| Field | Value |
| --- | --- |
| Bytes | 31257 |
| Score | 148 |
| Why | changed, source |
| Status | Truncated (budget limit) |

**Structural Outline:**
  - `fn Game` (line 22)
  - `fn notify` (line 44)
  - `fn handleForfeit` (line 75)
  - `fn handleDrawCard` (line 126)
  - `fn handlePlayCard` (line 136)
  - `fn handleDecision` (line 167)
  - `fn handleTargetSelect` (line 178)
  - `fn handleDefend` (line 189)
  - `fn SetupScreen` (line 474)
  - `fn ResultScreen` (line 524)


```tsx
import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { GameCard } from '../components/GameCard'
import { Button } from '../components/ui/Button'
import { ForfeitModal } from '../components/ForfeitModal'
import type { GameState, PlayerState, GameCard as GameCardType } from '../types/game'
import { formatWealth } from '../types/game'
import {
  initGame, startDrawPhase, processDecision, processAction,
  processDefense, advanceTurn, doBotTurn, calculateRPChange, forceSkipTurn, TURN_TIME_LIMIT_MS
} from '../lib/gameEngine'
import { PlayerBoard } from '../components/game/PlayerBoard'
import { GameLog } from '../components/game/GameLog'
import { TurnTimer } from '../components/game/TurnTimer'
import { saveGameResult } from '../lib/auth'
import { playSound } from '../lib/audio'
import Confetti from 'react-confetti'

type GamePhaseUI = 'setup' | 'playing' | 'decision' | 'targeting' | 'result'

export function Game() {
  const [params] = useSearchParams()
  const mode = params.get('mode') ?? 'ranked'
  const navigate = useNavigate()
  const { profile, refreshProfile } = useAuth()

  const [gameState, setGameState] = useState<GameState | null>(null)
  const gameStateRef = useRef<GameState | null>(null)
  const [uiPhase, setUiPhase] = useState<GamePhaseUI>('setup')

  // Keep ref in sync
  useEffect(() => {
    gameStateRef.current = gameState
  }, [gameState])
  const [botCount, setBotCount] = useState(2)
  const [animating, setAnimating] = useState(false)
  const [notification, setNotification] = useState<string | null>(null)
  const [showForfeitModal, setShowForfeitModal] = useState(false)
  const botTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const humanPlayerIndex = 0

  const notify = (msg: string) => {
    setNotification(msg)
    setTimeout(() => setNotification(null), 3000)
  }

  const startGame = useCallback(() => {
    const humanName = profile?.username ?? 'You'
    const state = initGame({ id: profile?.id ?? 'human', name: humanName }, botCount)
    setGameState(state)
    setUiPhase('playing')
  }, [profile, botCount])

  const handleGameOver = useCallback((finalState: GameState) => {
    setGameState(finalState)
    setUiPhase('result')
    if (profile?.id && profile?.username) {
      const humanPlayer = finalState.players[humanPlayerIndex]
      const isWinner = finalState.winner?.id === humanPlayer.id
      const placement = [...finalState.players]
        .sort((a, b) => b.wealth - a.wealth)
        .findIndex(p => p.id === humanPlayer.id) + 1
      if (isWinner) playSound('win')
      else playSound('lose')
      saveGameResult(
        profile.id, profile.username, isWinner, humanPlayer.wealth,
        placement, finalState.players.length, profile.win_streak ?? 0,
        { investChoices: humanPlayer.investChoices, emiDamageTaken: humanPlayer.emiDamageTaken }
      ).then(() => { refreshProfile() })
    }
  }, [profile, humanPlayerIndex, refreshProfile])

  const handleForfeit = () => {
    setShowForfeitModal(false)
    if (!gameState) {
      navigate('/dashboard')
      return
    }
    // Record a loss automatically
    const forfeitState = { ...gameState, phase: 'game_over' as const }
    setGameState(forfeitState)
    setUiPhase('result')
    if (profile?.id && profile?.username) {
      const humanPlayer = forfeitState.players[humanPlayerIndex]
      playSound('lose')
      saveGameResult(profile.id, profile.username, false, humanPlayer.wealth).then(() => {
        refreshProfile()
        navigate('/dashboard')
      })
    } else {
      navigate('/dashboard')
    }
  }

  // Bot turn handler
  useEffect(() => {
    if (!gameState || uiPhase !== 'playing' || gameState.phase === 'game_over') return
    const currentPlayer = gameState.players[gameState.currentPlayerIndex]
    if (!currentPlayer.isBot) return

    setAnimating(true)
    botTimerRef.current = setTimeout(() => {
      const { state: newState } = doBotTurn(gameState)
      setAnimating(false)
      if (newState.phase === 'game_over') {
        handleGameOver(newState)
      } else {
        setGameState(newState)
      }
    }, 1200)

    return () => { if (botTimerRef.current) clearTimeout(botTimerRef.current) }
  }, [gameState, uiPhase, handleGameOver])

  const handleTimeout = useCallback(() => {
    const gs = gameStateRef.current
    if (!gs || gs.phase === 'game_over' || gs.currentPlayerIndex !== humanPlayerIndex) return
    const newState = forceSkipTurn(gs)
    if (newState.phase === 'game_over') { handleGameOver(newState) } else { setGameState(newState); setUiPhase('playing') }
    playSound('lose')
    notify('Time ran out! Turn skipped.')
  }, [humanPlayerIndex, handleGameOver])

  const handleDrawCard = () => {
    if (!gameState || animating) return
    const currentPlayer = gameState.players[gameState.currentPlayerIndex]
    if (currentPlayer.isBot || gameState.currentPlayerIndex !== humanPlayerIndex) return

    const { state: newState } = startDrawPhase(gameState, humanPlayerIndex)
    setGameState({ ...newState, phase: 'play' })
    playSound('draw')
  }

  const handlePlayCard = (card: GameCardType) => {
    if (!gameState || animating) return
    if (gameState.phase !== 'play') return
    if (gameState.currentPlayerIndex !== humanPlayerIndex) return

    if (card.type === 'decision') {
      setGameState({ ...gameState, pendingDecision: { card, playerIndex: humanPlayerIndex } })
      setUiPhase('decision')
    } else if (card.type === 'action') {
      const needsTarget = card.effect?.target === 'target'
      if (needsTarget) {
        setGameState({ ...gameState, pendingTarget: { card, playerIndex: humanPlayerIndex, effect: card.effect! } })
        setUiPhase('targeting')
      } else {
        const newState = processAction(gameState, humanPlayerIndex, card, humanPlayerIndex)
        const finalState = newState.phase !== 'game_over' ? advanceTurn(newState) : newState
        if (finalState.phase === 'game_over') { handleGameOver(finalState) } else { setGameState(finalState) }
        playSound('play')
        notify(`Played ${card.name}!`)
      }
    } else if (card.type === 'defense') {
      const discard = [...gameState.discardPile, card]
      const hand = gameState.players[humanPlayerIndex].hand.filter(c => c.id !== card.id)
      const updatedPlayers = gameState.players.map((p, i) => i === humanPlayerIndex ? { ...p, hand } : p)
      const newState = advanceTurn({ ...gameState, players: updatedPlayers, discardPile: discard })
      if (newState.phase === 'game_over') { handleGameOver(newState) } else { setGameState(newState) }
      playSound('defend')
      notify('Defense card saved for later!')
    }
  }

  const handleDecision = (choice: 'spend' | 'save' | 'invest') => {
    if (!gameState?.pendingDecision) return
    const { card } = gameState.pendingDecision
    const newState = processDecision(gameState, humanPlayerIndex, choice, card)
    const finalState = newState.phase !== 'game_over' ? advanceTurn(newState) : newState
    const withClear = { ...finalState, pendingDecision: null }
    if (finalState.phase === 'game_over') { handleGameOver(withClear) } else { setGameState(withClear); setUiPhase('playing') }
    playSound('play')
    notify(`${choice.charAt(0).toUpperCase() + choice.slice(1)} choice made!`)
  }

  const handleTargetSelect = (targetIndex: number) => {
    if (!gameState?.pendingTarget) return
    const { card } = gameState.pendingTarget
    const newState = processAction(gameState, humanPlayerIndex, card, targetIndex)
    const finalState = newState.phase !== 'game_over' ? advanceTurn(newState) : newState
    const withClear = { ...finalState, pendingTarget: null }
    if (finalState.phase === 'game_over') { handleGameOver(withClear) } else { setGameState(withClear); setUiPhase('playing') }
    playSound('attack')
    notify(`${card.name} hit ${gameState.players[targetIndex].name}!`)
  }

  const handleDefend = (defenseCard: GameCardType) => {
    if (!gameState?.pendingTarget) return
    const newState = processDefense(gameState, humanPlayerIndex, defenseCard, gameState.pendingTarget.card)
    const finalState = advanceTurn({ ...newState, pendingTarget: null })
    if (finalState.phase === 'game_over') { handleGameOver(finalState) } else { setGameState(finalState); setUiPhase('playing') }
    playSound('defend')
    notify('Defense successful!')
  }

  if (uiPhase === 'setup') {
    return <SetupScreen mode={mode} botCount={botCount} setBotCount={setBotCount} onStart={startGame} onBack={() => navigate('/dashboard')} />
  }

  if (uiPhase === 'result' && gameState) {
    const humanPlayer = gameState.players[humanPlayerIndex]
    const isWinner = gameState.winner?.id === humanPlayer.id
    const placement = [...gameState.players]
      .sort((a, b) => b.wealth - a.wealth)
      .findIndex(p => p.id === humanPlayer.id) + 1
    const rpChange = mode === 'ranked' ? calculateRPChange(placement, gameState.players.length, profile?.win_streak ?? 0) : 0
    // Near-miss: player was within 20% of the goal but didn't win
    const wealthGap = gameState.wealthGoal - humanPlayer.wealth
    const nearMiss = !isWinner && wealthGap > 0 && wealthGap < gameState.wealthGoal * 0.2

    return (
      <ResultScreen
        isWinner={isWinner}
        placement={placement}
        finalWealth={humanPlayer.wealth}
        rpChange={rpChange}
        nearMiss={nearMiss}
        wealthGap={wealthGap}
        players={gameState.players}
        mode={mode}
        onPlayAgain={() => { setGameState(null); setUiPhase('setup') }}
        onDashboard={() => navigate('/dashboard')}
      />
    )
  }

  if (!gameState) return null

  const currentPlayer = gameState.players[gameState.currentPlayerIndex]
  const humanPlayer = gameState.players[humanPlayerIndex]
  const isMyTurn = gameState.currentPlayerIndex === humanPlayerIndex && !currentPlayer.isBot
  const defenseCards = humanPlayer.hand.filter(c => c.type === 'defense')
  const elapsed = Date.now() - gameState.startTime
  const remaining = Math.max(0, gameState.timeLimit - elapsed)
  const minutesLeft = Math.floor(remaining / 60000)
  const secondsLeft = Math.floor((remaining % 60000) / 1000)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showForfeitModal && (
        <ForfeitModal 
          onCancel={() => setShowForfeitModal(false)}
          onConfirm={handleForfeit}
        />
      )}
      {/* Game Header */}
      <div className="glass-panel" style={{
        position: 'sticky', top: 0, zIndex: 40,
        padding: '0 20px', height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none',
      }}>
        <button onClick={() => setShowForfeitModal(true)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 16, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6 }}>
          ← Dashboard
        </button>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <div style={{ fontSize: 16, color: 'var(--text-muted)' }}>
            Turn <span style={{ color: 'var(--text-dark)', fontWeight: 700 }}>{gameState.turn}</span>
          </div>
          <div style={{ fontSize: 16, color: minutesLeft < 5 ? 'var(--orange-primary)' : 'var(--text-muted)', fontWeight: minutesLeft < 5 ? 700 : 400 }}>
            ⏱ {minutesLeft}:{secondsLeft.toString().padStart(2, '0')}
          </div>
          <div style={{ padding: '4px 12px', borderRadius: 6, background: mode === 'ranked' ? 'rgba(37,99,235,0.2)' : 'rgba(10,185,129,0.15)', color: mode === 'ranked' ? '#60a5fa' : '#34d399', fontSize: 15, fontWeight: 700, textTransform: 'uppercase' }}>
            {mode}
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '16px 24px', gap: 24, maxWidth: 1500, margin: '0 auto', width: '100%', alignItems: 'flex-start' }}>
        {/* Notification */}
        {notification && (
          <div style={{ position: 'fixed', top: 72, right: 20, background: '#1a2235', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '12px 20px', fontSize: 18, color: '#f1f5f9', zIndex: 100, animation: 'slideUp 0.3s ease', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
            {notification}
          </div>
        )}

        {/* Left Spacer to perfectly balance the center column */}
        <div style={{ flex: 1, minWidth: 20 }} />

        {/* Center Column: Players + Action Area */}
        <div style={{ flex: '0 1 900px', width: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Players Responsive Grid/Scroll Row */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {gameState.players.map((player, i) => (
              <PlayerBoard
                key={player.id}
                player={player}
                isCurrent={i === gameState.currentPlayerIndex}
                isMe={i === humanPlayerIndex}
                isTarget={uiPhase === 'targeting' && i !== humanPlayerIndex}
                wealthGoal={gameState.wealthGoal}
                onClick={() => handleTargetSelect(i)}
              />
            ))}
          </div>

          {/* Action Area */}
          <div style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', borderRadius: 20, padding: '28px', minHeight: 480, position: 'relative' }}>
          
            {/* Top Deck Removed - Hand stays in center now */}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'cent

/* ...truncated for capsule budget... */
```

### src/pages/MultiplayerGame.tsx

| Field | Value |
| --- | --- |
| Bytes | 30725 |
| Score | 148 |
| Why | changed, source |
| Status | Truncated (budget limit) |

**Structural Outline:**
  - `fn MultiplayerGame` (line 23)
  - `fn setPhase` (line 52)
  - `fn notify` (line 57)
  - `fn saveResult` (line 62)
  - `fn applyRemoteState` (line 80)
  - `fn pushState` (line 183)
  - `fn handleDrawCard` (line 190)
  - `fn handlePlayCard` (line 203)
  - `fn handleDecision` (line 249)
  - `fn handleTargetSelect` (line 265)
  - `fn handleDefend` (line 281)


```tsx
import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { GameCard } from '../components/GameCard'
import { Button } from '../components/ui/Button'
import type { GameState, GameCard as GameCardType } from '../types/game'
import { formatWealth } from '../types/game'
import {
  processDecision, processAction, processDefense, advanceTurn, startDrawPhase, forceSkipTurn, TURN_TIME_LIMIT_MS
} from '../lib/gameEngine'
import { pushGameState } from '../lib/multiplayerEngine'
import { saveGameResult } from '../lib/auth'
import Confetti from 'react-confetti'
import { supabase } from '../lib/supabase'
import { PlayerBoard } from '../components/game/PlayerBoard'
import { GameLog } from '../components/game/GameLog'
import { TurnTimer } from '../components/game/TurnTimer'
import { ForfeitModal } from '../components/ForfeitModal'
import { playSound } from '../lib/audio'

type UIPhase = 'loading' | 'playing' | 'decision' | 'targeting' | 'result'

export function MultiplayerGame() {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const { profile, refreshProfile } = useAuth()

  const [gameState, setGameState] = useState<GameState | null>(null)
  const [uiPhase, setUiPhase] = useState<UIPhase>('loading')
  const [notification, setNotification] = useState<string | null>(null)
  const [showForfeitModal, setShowForfeitModal] = useState(false)
  const [onlinePlayers, setOnlinePlayers] = useState<Set<string>>(new Set())

  // Use refs to avoid stale closures in async callbacks and subscriptions
  const gameStateRef = useRef<GameState | null>(null)
  const uiPhaseRef = useRef<UIPhase>('loading')
  const resultSavedRef = useRef(false)
  const profileRef = useRef(profile)
  profileRef.current = profile

  const myPlayerId = profile?.id ?? ''

  // Derive these from gameState on every render
  const myPlayerIndex = gameState?.players.findIndex(p => p.id === myPlayerId) ?? -1
  const isMyTurn = gameState
    ? gameState.players[gameState.currentPlayerIndex]?.id === myPlayerId
    : false
  const myPlayer = myPlayerIndex >= 0 ? gameState?.players[myPlayerIndex] ?? null : null
  const currentPlayer = gameState?.players[gameState.currentPlayerIndex]
  const defenseCards = myPlayer?.hand.filter(c => c.type === 'defense') ?? []

  function setPhase(phase: UIPhase) {
    uiPhaseRef.current = phase
    setUiPhase(phase)
  }

  function notify(msg: string) {
    setNotification(msg)
    setTimeout(() => setNotification(null), 3000)
  }

  async function saveResult(state: GameState) {
    if (resultSavedRef.current) return
    const p = profileRef.current
    if (!p) return
    resultSavedRef.current = true
    const isWinner = state.winner?.id === p.id
    const myFinalPlayer = state.players.find(pl => pl.id === p.id)
    const myWealth = myFinalPlayer?.wealth ?? 0
    const placement = [...state.players]
      .sort((a, b) => b.wealth - a.wealth)
      .findIndex(pl => pl.id === p.id) + 1
    await saveGameResult(p.id, p.username, isWinner, myWealth, placement, state.players.length, p.win_streak ?? 0, {
      investChoices: myFinalPlayer?.investChoices ?? 0,
      emiDamageTaken: myFinalPlayer?.emiDamageTaken ?? false
    })
    await refreshProfile()
  }

  function applyRemoteState(gs: GameState) {
    setGameState(gs)
    gameStateRef.current = gs
    if (gs.phase === 'game_over') {
      setPhase('result')
      saveResult(gs)
      if (gs.winner?.id === myPlayerId) playSound('win')
      else playSound('lose')
    } else {
      // Only reset to 'playing' if not mid-local-interaction
      const cur = uiPhaseRef.current
      if (cur !== 'decision' && cur !== 'targeting' && cur !== 'result') {
        setPhase('playing')
      }
    }
  }

  // Helper to determine if we should accept remote state over local optimistic state
  const shouldApplyRemoteState = useCallback((remoteState: GameState) => {
    const localState = gameStateRef.current
    if (!localState) return true
    
    // Always accept if the remote state advanced to a newer turn
    if (remoteState.turn > localState.turn) return true
    
    // If it's NOT our turn, we must accept phase/log changes from the active player
    const isMyTurnLocally = localState.players[localState.currentPlayerIndex]?.id === myPlayerId
    if (!isMyTurnLocally) {
      if (remoteState.phase !== localState.phase || 
          remoteState.currentPlayerIndex !== localState.currentPlayerIndex ||
          JSON.stringify(remoteState.log[0]) !== JSON.stringify(localState.log[0])) {
        return true
      }
    }
    
    return false
  }, [myPlayerId])

  // Single effect: subscribe first, then do initial fetch.
  // This way we never miss an update that arrives between fetch and subscribe.
  useEffect(() => {
    if (!roomId) return

    // Use a unique channel name for the game view so it doesn't clash with the lobby channel
    const channel = supabase
      .channel(`game-${roomId}`)
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState()
        const onlineIds = new Set<string>()
        Object.values(state).forEach(presences => {
          presences.forEach((p: any) => {
            if (p.player_id) onlineIds.add(p.player_id)
          })
        })
        setOnlinePlayers(onlineIds)
      })
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'multiplayer_rooms', filter: `id=eq.${roomId}` },
        (payload) => {
          const updated = payload.new as { game_state: GameState | null }
          if (updated.game_state && shouldApplyRemoteState(updated.game_state)) {
            applyRemoteState(updated.game_state)
          }
        },
      )
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          if (myPlayerId) await channel.track({ player_id: myPlayerId })
          
          // Initial fetch after subscription is live — no missed updates
          const { data } = await supabase
            .from('multiplayer_rooms')
            .select('game_state, status')
            .eq('id', roomId)
            .single()
          if (data?.game_state) {
            applyRemoteState(data.game_state as GameState)
          }
        }
      })

    return () => { channel.unsubscribe() }
  }, [roomId, shouldApplyRemoteState]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleTimeout = useCallback(async () => {
    const gs = gameStateRef.current
    if (!gs || gs.phase === 'game_over') return
    
    const isHost = gs.players[0].id === myPlayerId
    const isMe = gs.players[gs.currentPlayerIndex].id === myPlayerId
    
    if (!isHost && !isMe) return

    const newState = forceSkipTurn(gs)
    setGameState(newState)
    gameStateRef.current = newState
    setPhase(newState.phase === 'game_over' ? 'result' : 'playing')
    await pushState(newState)
    playSound('lose')
    notify(`Time ran out for ${gs.players[gs.currentPlayerIndex].name}!`)
  }, [myPlayerId])

  async function pushState(state: GameState) {
    if (!roomId) return
    await pushGameState(roomId, state)
  }

  // --- Game action handlers ---

  async function handleDrawCard() {
    const gs = gameStateRef.current
    if (!gs || gs.players[gs.currentPlayerIndex]?.id !== myPlayerId) return
    if (gs.phase !== 'draw') return

    const { state: drawn } = startDrawPhase(gs, myPlayerIndex)
    const updated = { ...drawn, phase: 'play' as const }
    setGameState(updated)
    gameStateRef.current = updated
    playSound('draw')
    // Don't push yet — player needs to pick a card
  }

  async function handlePlayCard(card: GameCardType) {
    const gs = gameStateRef.current
    if (!gs || gs.players[gs.currentPlayerIndex]?.id !== myPlayerId) return
    if (gs.phase !== 'play') return

    if (card.type === 'decision') {
      const updated = { ...gs, pendingDecision: { card, playerIndex: myPlayerIndex } }
      setGameState(updated)
      gameStateRef.current = updated
      setPhase('decision')
      // Don't push — decision hasn't been made yet
    } else if (card.type === 'action') {
      if (card.effect?.target === 'target') {
        const updated = { ...gs, pendingTarget: { card, playerIndex: myPlayerIndex, effect: card.effect } }
        setGameState(updated)
        gameStateRef.current = updated
        setPhase('targeting')
        // Don't push — target not picked yet
      } else {
        // AoE or self action — apply immediately
        const next = processAction(gs, myPlayerIndex, card, myPlayerIndex)
        const final = next.phase !== 'game_over' ? advanceTurn(next) : next
        setGameState(final)
        gameStateRef.current = final
        setPhase(final.phase === 'game_over' ? 'result' : 'playing')
        await pushState(final)
        playSound('play')
        if (final.phase === 'game_over') saveResult(final)
        notify(`Played ${card.name}!`)
      }
    } else if (card.type === 'defense') {
      // Playing defense as regular turn action — discard it and end turn
      const discard = [...gs.discardPile, card]
      const hand = gs.players[myPlayerIndex].hand.filter(c => c.id !== card.id)
      const players = gs.players.map((p, i) => i === myPlayerIndex ? { ...p, hand } : p)
      const next = advanceTurn({ ...gs, players, discardPile: discard })
      setGameState(next)
      gameStateRef.current = next
      setPhase(next.phase === 'game_over' ? 'result' : 'playing')
      await pushState(next)
      playSound('defend')
      if (next.phase === 'game_over') saveResult(next)
      notify('Discarded defense card.')
    }
  }

  async function handleDecision(choice: 'spend' | 'save' | 'invest') {
    const gs = gameStateRef.current
    if (!gs?.pendingDecision) return
    const { card } = gs.pendingDecision
    const next = processDecision(gs, myPlayerIndex, choice, card)
    const final = next.phase !== 'game_over' ? advanceTurn(next) : next
    const cleared = { ...final, pendingDecision: null }
    setGameState(cleared)
    gameStateRef.current = cleared
    setPhase(final.phase === 'game_over' ? 'result' : 'playing')
    await pushState(cleared)
    playSound('play')
    if (final.phase === 'game_over') saveResult(final)
    notify(`${choice.charAt(0).toUpperCase() + choice.slice(1)}!`)
  }

  async function handleTargetSelect(targetIndex: number) {
    const gs = gameStateRef.current
    if (!gs?.pendingTarget) return
    const { card } = gs.pendingTarget
    const next = processAction(gs, myPlayerIndex, card, targetIndex)
    const final = next.phase !== 'game_over' ? advanceTurn(next) : next
    const cleared = { ...final, pendingTarget: null }
    setGameState(cleared)
    gameStateRef.current = cleared
    setPhase(final.phase === 'game_over' ? 'result' : 'playing')
    await pushState(cleared)
    playSound('attack')
    if (final.phase === 'game_over') saveResult(final)
    notify(`${card.name} hit ${gs.players[targetIndex].name}!`)
  }

  async function handleDefend(defenseCard: GameCardType) {
    const gs = gameStateRef.current
    if (!gs?.pendingTarget) return
    const next = processDefense(gs, myPlayerIndex, defenseCard, gs.pendingTarget.card)
    const final = advanceTurn({ ...next, pendingTarget: null })
    setGameState(final)
    gameStateRef.current = final
    setPhase(final.phase === 'game_over' ? 'result' : 'playing')
    await pushState(final)
    playSound('defend')
    if (final.phase === 'game_over') saveResult(final)
    notify('Blocked the attack!')
  }

  const handleForfeit = async () => {
    setShowForfeitModal(false)
    const gs = gameStateRef.current
    if (!gs || !roomId || !myPlayerId) {
      navigate('/dashboard')
      return
    }

    // Set wealth to 0 to guarantee last place and end the game
    const updatedPlayers = gs.players.map(p => {
      if (p.id === myPlayerId) {
        return { ...p, wealth: 0 }
      }
      return p
    })
    
    const forfeitState = { 
      ...gs, 
      players: updatedPlayers, 
      phase: 'game_over' as const,
      log: [`${myPlayer?.name} forfeited the match.`, ...gs.log]
    }
    
    setGameState(forfeitState)
    gameStateRef.current = forfeitState
    
    await pushState(forfeitState)
    // The player who forfeited is instantly navigated out to Dashboard.
    // The remaining players will receive the updated game_over state and the ResultScreen.
    navigate('/dashboard')
  }

  // ---- Render ----

  if (uiPhase === 'loading' || !gameState) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--green-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          border: '3px solid var(--green-primary)',
          borderTopColor: 'var(--gold)',
          animation: 'spin 0.8s linear infinite',
        }} />
        <div style={{ color: 'var(--gray)', fontSize: 18 }}>Loading game...</div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  if (uiPhase === 'result') {
    const sorted = [...gameState.players].sort((a, b) => b.wealth - a.wealth)
    const myFinalPlayer = gameState.players.find(p => p.id === myPlayerId)
    const isWinner = gameState.winner?.id === myPlayerId
    const placement = sorted.findIndex(p => p.id === myPlayerId) + 1
    const ordinal = placement === 1 ? 'st' : placement === 2 ? 'nd' : placement === 3 ? 'rd' : 'th'

    return (
      <div style={{ minHeight: '100vh', background: 'var(--green-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        {isWinner && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={500} colors={['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#f1f5f9']} />}
        <div style={{ width: '100%', maxWidth

/* ...truncated for capsule budget... */
```

### README.md

| Field | Value |
| --- | --- |
| Bytes | 3408 |
| Score | 105 |
| Why | project-metadata, high-signal-doc |
| Status | Full content |


```markdown
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

1. **The Goal:** Start with ₹5 Lakhs and be the first player to reach the **₹50 Lakhs** wealth goal.
2. **Turn Phases:** 
   - **Draw Phase:** Draw a card from the deck.
   - **Play Phase:** Choose a card from your hand to play.
3. **Card Types:**
   - **🟢 Decision Cards:** Choose how to spend your money. You can *Spend*, *Save*, or *Invest*.
   - **🔴 Action Cards:** Attack your opponents (e.g., Tax Raid, Steal, Market Crash).
   - **🔵 Defense Cards:** Protect yourself against incoming attacks (e.g., Health Insurance, Cyber Shield).
4. **Market & Coins:** Complete matches to earn DAANIK Coins. Visit the Dashboard to invest your coins into the DAANIK Market!

---

## 🌐 Deployment

This project is configured to be easily deployed on **Vercel**. 
Simply link your GitHub repository to Vercel, and it will automatically detect the Vite build settings. Remember to add your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to your Vercel Environment Variables before building!

---

## 📜 License
This project is built for entertainment and financial literacy purposes.
```

### package.json

| Field | Value |
| --- | --- |
| Bytes | 647 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "name": "paisa-war",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.45.0",
    "framer-motion": "^12.40.0",
    "lucide-react": "^0.468.0",
    "react": "^18.3.1",
    "react-confetti": "^6.4.0",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0",
    "use-sound": "^5.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^6.0.3"
  }
}
```

### tsconfig.json

| Field | Value |
| --- | --- |
| Bytes | 562 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### vite.config.ts

| Field | Value |
| --- | --- |
| Bytes | 133 |
| Score | 70 |
| Why | project-metadata |
| Status | Full content |


```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### src/App.tsx

| Field | Value |
| --- | --- |
| Bytes | 2020 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './hooks/useAuth'
import { Landing } from './pages/Landing'
import { Auth } from './pages/Auth'
import { Dashboard } from './pages/Dashboard'
import { Game } from './pages/Game'
import { Lobby } from './pages/Lobby'
import { MultiplayerGame } from './pages/MultiplayerGame'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0e1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        <div style={{ width: 40, height: 40, border: '3px solid rgba(255,255,255,0.1)', borderTopColor: '#f59e0b', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <div style={{ color: '#64748b', fontSize: 18 }}>Loading...</div>
      </div>
    )
  }
  return user ? <>{children}</> : <Navigate to="/auth" replace />
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  if (loading) return null
  return user ? <Navigate to="/dashboard" replace /> : <>{children}</>
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<PublicRoute><Auth /></PublicRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/game" element={<ProtectedRoute><Game /></ProtectedRoute>} />
      <Route path="/multiplayer" element={<ProtectedRoute><Lobby /></ProtectedRoute>} />
      <Route path="/multiplayer/:roomId" element={<ProtectedRoute><MultiplayerGame /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}
```

### src/components/ForfeitModal.tsx

| Field | Value |
| --- | --- |
| Bytes | 1782 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import { Button } from './ui/Button'

interface ForfeitModalProps {
  onCancel: () => void
  onConfirm: () => void
}

export function ForfeitModal({ onCancel, onConfirm }: ForfeitModalProps) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 24, animation: 'fadeIn 0.2s ease'
    }}>
      <div className="glass-panel" style={{
        maxWidth: 400, width: '100%', borderRadius: 20, padding: 32,
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
      }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(239,68,68,0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, marginBottom: 20 }}>
          ⚠️
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 12 }}>
          Forfeit Match?
        </h2>
        <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.5, marginBottom: 32 }}>
          Are you sure you want to leave? If you leave now, you will automatically <strong>lose this match</strong> and incur any rank point deductions.
        </p>
        <div style={{ display: 'flex', gap: 12, width: '100%' }}>
          <Button variant="secondary" onClick={onCancel} style={{ flex: 1 }}>
            Cancel
          </Button>
          <Button onClick={onConfirm} style={{ flex: 1, background: '#ef4444', borderColor: '#ef4444', color: 'white' }}>
            Yes, Forfeit
          </Button>
        </div>
      </div>
    </div>
  )
}
```

### src/components/RankBadge.tsx

| Field | Value |
| --- | --- |
| Bytes | 1569 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import { getRankForRP } from '../types/game'

interface RankBadgeProps {
  rp: number
  showProgress?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function RankBadge({ rp, showProgress, size = 'md' }: RankBadgeProps) {
  const rank = getRankForRP(rp)
  const nextRank = rank.maxRP === Infinity ? null : { minRP: rank.maxRP + 1 }
  const progress = rank.maxRP === Infinity ? 100 : ((rp - rank.minRP) / (rank.maxRP - rank.minRP)) * 100

  const fontSize = size === 'sm' ? 12 : size === 'lg' ? 16 : 14
  const emojiSize = size === 'sm' ? 14 : size === 'lg' ? 22 : 18

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: emojiSize }}>{rank.emoji}</span>
        <span style={{ fontSize, fontWeight: 700, color: rank.color, fontFamily: 'Space Grotesk, sans-serif' }}>
          {rank.name}
        </span>
        <span style={{ fontSize: fontSize - 2, color: '#64748b' }}>{rp.toLocaleString()} RP</span>
      </div>
      {showProgress && (
        <div style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 2, background: rank.color,
            width: `${Math.min(100, progress)}%`,
            transition: 'width 0.5s ease',
          }} />
        </div>
      )}
      {showProgress && nextRank && (
        <div style={{ fontSize: 14, color: '#64748b' }}>{rank.maxRP - rp} RP to next rank</div>
      )}
    </div>
  )
}
```

### src/components/TutorialModal.tsx

| Field | Value |
| --- | --- |
| Bytes | 7315 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import { useState } from 'react'
import { Button } from './ui/Button'

interface TutorialModalProps {
  onClose: () => void
}

export function TutorialModal({ onClose }: TutorialModalProps) {
  const [step, setStep] = useState(1)

  const handleNext = () => setStep((s) => s + 1)
  const handlePrev = () => setStep((s) => s - 1)

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 24, animation: 'fadeIn 0.3s ease'
    }}>
      <div className="glass-panel" style={{
        maxWidth: 550, width: '100%', borderRadius: 24, padding: 0,
        overflow: 'hidden', display: 'flex', flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: '#f1f5f9', fontFamily: 'Space Grotesk, sans-serif' }}>
            {step === 1 && "Welcome to Paisa War! 🎯"}
            {step === 2 && "The Cards 🃏"}
            {step === 3 && "How to Play ⚔️"}
          </h2>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', flex: 1, minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {step === 1 && (
            <div style={{ animation: 'slideUp 0.3s ease' }}>
              <p style={{ fontSize: 20, color: '#94a3b8', lineHeight: 1.6, marginBottom: 20 }}>
                Paisa War is a turn-based financial strategy game. 
              </p>
              <div className="glass-panel" style={{ padding: 20, borderRadius: 16, background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.2)' }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f59e0b', marginBottom: 8 }}>The Goal</h3>
                <p style={{ fontSize: 18, color: '#f1f5f9', lineHeight: 1.5 }}>
                  Race against your opponents to reach a Net Worth of <strong style={{ color: '#f59e0b' }}>₹50 Lakhs</strong> before the 25-minute timer runs out! The first player to hit the goal wins the match.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ animation: 'slideUp 0.3s ease' }}>
              <p style={{ fontSize: 19, color: '#94a3b8', marginBottom: 24 }}>There are three types of cards you will draw:</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 60, height: 80, borderRadius: 8, background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.1))', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>🟩</div>
                  <div>
                    <h4 style={{ color: '#10b981', fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Decision Cards</h4>
                    <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.4 }}>Gives you a scenario where you must choose to Spend, Save, or Invest. Investing yields high wealth but carries risks!</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 60, height: 80, borderRadius: 8, background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(220,38,38,0.1))', border: '1px solid rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>🟥</div>
                  <div>
                    <h4 style={{ color: '#ef4444', fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Action Cards</h4>
                    <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.4 }}>Used to attack your opponents! (e.g., Tax Raids, Market Crashes) to drastically reduce their net worth.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ width: 60, height: 80, borderRadius: 8, background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.1))', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>🟦</div>
                  <div>
                    <h4 style={{ color: '#3b82f6', fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Defense Cards</h4>
                    <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.4 }}>Keep these in your hand. When an opponent attacks you, you can play a defense card to block the attack.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div style={{ animation: 'slideUp 0.3s ease' }}>
              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Your Turn</h3>
                <ol style={{ paddingLeft: 20, color: '#94a3b8', fontSize: 18, lineHeight: 1.6 }}>
                  <li><strong>Draw:</strong> Start your turn by drawing 1 card from the deck.</li>
                  <li><strong>Play:</strong> Play 1 card from your hand (either a Decision or an Action).</li>
                </ol>
              </div>

              <div className="glass-panel" style={{ padding: 20, borderRadius: 16, background: 'rgba(37,99,235,0.1)', borderColor: 'rgba(37,99,235,0.2)' }}>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: '#60a5fa', marginBottom: 8 }}>Winning & Rewards</h3>
                <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.5 }}>
                  Winning matches earns you <strong>Rank Points (RP)</strong> and <strong>DAANIK Coins</strong>. Climb the leaderboard to become a Paisa Mogul!
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div style={{ padding: '20px 32px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: step === i ? '#3b82f6' : 'rgba(255,255,255,0.2)', transition: 'all 0.3s' }} />
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            {step > 1 && (
              <Button variant="secondary" onClick={handlePrev} style={{ padding: '8px 20px' }}>
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button variant="gold" onClick={handleNext} style={{ padding: '8px 24px' }}>
                Next
              </Button>
            ) : (
              <Button variant="primary" onClick={onClose} style={{ padding: '8px 24px' }}>
                Start Playing!
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

### src/data/mockData.ts

| Field | Value |
| --- | --- |
| Bytes | 3860 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
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
```

### src/hooks/useAuth.tsx

| Field | Value |
| --- | --- |
| Bytes | 3052 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import { getProfile, signIn, signOut, signUp } from '../lib/auth'
import type { Profile } from '../types/database'

interface AuthState {
  user: User | null
  profile: Profile | null
  loading: boolean
}

interface AuthContextValue extends AuthState {
  login: (email: string, password: [REDACTED] => Promise<void>
  register: (email: string, password: [REDACTED] username: string) => Promise<void>
  logout: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, profile: null, loading: true })

  const loadProfile = useCallback(async (user: User) => {
    let profile = await getProfile(user.id)
    
    // Auto-create missing profile (e.g. if signup failed halfway or email confirmations were required)
    if (!profile) {
      try {
        const baseName = user.email?.split('@')[0] || 'player'
        const username = `${baseName}${Math.floor(Math.random() * 10000)}`
        
        await supabase.from('profiles').insert({ id: user.id, username })
        await supabase.from('leaderboard').insert({ user_id: user.id, username })
        
        profile = await getProfile(user.id)
      } catch (e) {
        console.error('Failed to auto-create missing profile', e)
      }
    }
    
    setState(s => ({ ...s, user, profile, loading: false }))
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session?.user) {
        loadProfile(data.session.user)
      } else {
        setState(s => ({ ...s, loading: false }))
      }
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      (async () => {
        if (event === 'SIGNED_IN' && session?.user) {
          await loadProfile(session.user)
        } else if (event === 'SIGNED_OUT') {
          setState({ user: null, profile: null, loading: false })
        }
      })()
    })

    return () => subscription.unsubscribe()
  }, [loadProfile])

  const login = async (email: string, password: [REDACTED] => {
    await signIn(email, password)
  }

  const register = async (email: string, password: [REDACTED] username: string) => {
    await signUp(email, password, username)
  }

  const logout = async () => {
    await signOut()
  }

  const refreshProfile = async () => {
    if (state.user) {
      const profile = await getProfile(state.user.id)
      setState(s => ({ ...s, profile }))
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
```

### src/lib/audio.ts

| Field | Value |
| --- | --- |
| Bytes | 1756 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
// Simple Web Audio API synthesizer for game sound effects

const audioCtx = typeof window !== 'undefined' ? new (window.AudioContext || (window as any).webkitAudioContext)() : null

function playTone(freq: number, type: OscillatorType, duration: number, vol = 0.1) {
  if (!audioCtx) return
  if (audioCtx.state === 'suspended') audioCtx.resume()

  const osc = audioCtx.createOscillator()
  const gain = audioCtx.createGain()

  osc.type = type
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime)

  gain.gain.setValueAtTime(vol, audioCtx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration)

  osc.connect(gain)
  gain.connect(audioCtx.destination)

  osc.start()
  osc.stop(audioCtx.currentTime + duration)
}

export function playSound(effect: 'draw' | 'play' | 'attack' | 'defend' | 'win' | 'lose') {
  if (!audioCtx) return

  switch (effect) {
    case 'draw':
      playTone(400, 'sine', 0.1, 0.05)
      setTimeout(() => playTone(600, 'sine', 0.1, 0.05), 50)
      break
    case 'play':
      playTone(300, 'triangle', 0.1, 0.1)
      setTimeout(() => playTone(800, 'triangle', 0.15, 0.1), 100)
      break
    case 'attack':
      playTone(150, 'sawtooth', 0.3, 0.15)
      setTimeout(() => playTone(100, 'sawtooth', 0.4, 0.15), 100)
      break
    case 'defend':
      playTone(800, 'square', 0.1, 0.05)
      setTimeout(() => playTone(1200, 'square', 0.2, 0.05), 100)
      break
    case 'win':
      [400, 500, 600, 800, 1000].forEach((f, i) => {
        setTimeout(() => playTone(f, 'sine', 0.3, 0.1), i * 150)
      })
      break
    case 'lose':
      [300, 250, 200, 150].forEach((f, i) => {
        setTimeout(() => playTone(f, 'sawtooth', 0.4, 0.1), i * 200)
      })
      break
  }
}
```

### src/lib/auth.ts

| Field | Value |
| --- | --- |
| Bytes | 5758 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
import { supabase } from './supabase'
import type { Profile } from '../types/database'
import { calculateRPChange } from './gameEngine'

export async function signUp(email: string, password: [REDACTED] username: string): Promise<void> {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) throw error
  if (!data.user) throw new Error('No user returned')

  const { error: profileError } = await supabase
    .from('profiles')
    .insert({ id: data.user.id, username })

  if (profileError) throw profileError

  // Also create a leaderboard entry
  await supabase
    .from('leaderboard')
    .insert({ user_id: data.user.id, username })
}

export async function signIn(email: string, password: [REDACTED] Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
}

export async function signOut(): Promise<void> {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle()
  return data
}

export async function updateProfile(userId: string, updates: Partial<Profile>): Promise<void> {
  const { error } = await supabase
    .from('profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
  if (error) throw error
}

export interface GameStats {
  investChoices: number;
  emiDamageTaken: boolean;
}

export async function saveGameResult(
  userId: string,
  username: string,
  won: boolean,
  finalWealth: number,
  placement: number = 1,
  totalPlayers: number = 2,
  winStreak: number = 0,
  stats: GameStats = { investChoices: 0, emiDamageTaken: false }
): Promise<void> {
  // Upsert leaderboard entry
  const { data: existing } = await supabase
    .from('leaderboard')
    .select('id, wins, losses, total_games, highest_net_worth')
    .eq('user_id', userId)
    .maybeSingle()

  if (existing) {
    await supabase
      .from('leaderboard')
      .update({
        wins: existing.wins + (won ? 1 : 0),
        losses: existing.losses + (won ? 0 : 1),
        total_games: existing.total_games + 1,
        highest_net_worth: Math.max(existing.highest_net_worth, finalWealth),
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId)
  } else {
    await supabase
      .from('leaderboard')
      .insert({
        user_id: userId,
        username,
        wins: won ? 1 : 0,
        losses: won ? 0 : 1,
        total_games: 1,
        highest_net_worth: finalWealth,
      })
  }

  // Update profile stats
  let awardedDc = 0;
  const { data: profile } = await supabase
    .from('profiles')
    .select('games_played, games_won, win_streak, max_win_streak, rank_points, total_xp, daanik_coins')
    .eq('id', userId)
    .maybeSingle()

  if (profile) {
    const newStreak = won ? profile.win_streak + 1 : 0
    // Use the proper placement-based RP formula
    const rpGain = calculateRPChange(placement, totalPlayers, winStreak)
    await supabase
      .from('profiles')
      .update({
        games_played: profile.games_played + 1,
        games_won: profile.games_won + (won ? 1 : 0),
        win_streak: newStreak,
        max_win_streak: Math.max(profile.max_win_streak, newStreak),
        rank_points: Math.max(0, profile.rank_points + rpGain),
        total_xp: profile.total_xp + (won ? 100 : 25),
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId)

    // Process Contracts
    try {
      const { data: activeContracts } = await supabase
        .from('daily_contracts')
        .select('*')
        .gte('contract_date', new Date().toISOString().split('T')[0])

      if (activeContracts && activeContracts.length > 0) {
        for (const contract of activeContracts) {
          // Calculate progress increment for this game
          let increment = 0;
          if (contract.requirement_type === 'wins' && won) increment = 1;
          if (contract.requirement_type === 'weekly_wins' && won) increment = 1;
          if (contract.requirement_type === 'invest_choices') increment = stats.investChoices;
          if (contract.requirement_type === 'no_emi_win' && won && !stats.emiDamageTaken) increment = 1;

          if (increment > 0) {
            // Check existing progress
            const { data: pContract } = await supabase
              .from('player_contracts')
              .select('*')
              .eq('player_id', userId)
              .eq('contract_id', contract.id)
              .maybeSingle();

            const currentProgress = pContract ? pContract.progress : 0;
            const newProgress = currentProgress + increment;
            const isNewlyCompleted = !pContract?.completed && newProgress >= contract.requirement_value;

            // Upsert progress
            await supabase.from('player_contracts').upsert({
              player_id: userId,
              contract_id: contract.id,
              progress: newProgress,
              completed: isNewlyCompleted || (pContract?.completed ?? false),
              completed_at: isNewlyCompleted ? new Date().toISOString() : pContract?.completed_at,
            });

            if (isNewlyCompleted) {
              awardedDc += contract.reward_dc;
            }
          }
        }

        // Award DC if any contracts were completed
        if (awardedDc > 0) {
          await supabase
            .from('profiles')
            .update({ daanik_coins: (profile.daanik_coins || 0) + awardedDc })
            .eq('id', userId);
        }
      }
    } catch (e) {
      console.error('Failed to process contracts', e);
    }
  }
}
```

### src/lib/market.ts

| Field | Value |
| --- | --- |
| Bytes | 2524 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
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
```

### src/lib/multiplayerEngine.ts

| Field | Value |
| --- | --- |
| Bytes | 7649 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
import { supabase } from './supabase'
import type { GameState, PlayerState } from '../types/game'
import { createGameDeck } from '../data/cards'

const STARTING_WEALTH = 500000
const WEALTH_GOAL = 5000000      // ₹50 Lakhs — matches single-player
const TIME_LIMIT_MS = 15 * 60 * 1000  // 15 minutes per game

function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

export interface RoomPlayer {
  id: string
  room_id: string
  player_id: string
  username: string
  seat_order: number
  is_ready: boolean
  joined_at: string
}

export interface Room {
  id: string
  code: string
  host_id: string
  host_username: string
  status: 'waiting' | 'in_progress' | 'completed'
  max_players: number
  game_state: GameState | null
  current_player_id: string | null
  winner_id: string | null
  created_at: string
  updated_at: string
}

export async function createRoom(hostId: string, hostUsername: string, maxPlayers: number): Promise<Room> {
  let code = generateRoomCode()
  let tries = 0
  while (tries < 10) {
    const { data } = await supabase.from('multiplayer_rooms').select('id').eq('code', code).maybeSingle()
    if (!data) break
    code = generateRoomCode()
    tries++
  }

  const { data, error } = await supabase
    .from('multiplayer_rooms')
    .insert({ host_id: hostId, host_username: hostUsername, code, max_players: maxPlayers, status: 'waiting' })
    .select()
    .single()
  if (error) throw error

  const { error: playerError } = await supabase.from('room_players').insert({
    room_id: data.id, player_id: hostId, username: hostUsername, seat_order: 0, is_ready: false,
  })
  if (playerError) throw playerError

  return data
}

export async function joinRoom(code: string, playerId: string, username: string): Promise<Room> {
  const { data: room, error } = await supabase
    .from('multiplayer_rooms')
    .select('*')
    .eq('code', code.toUpperCase())
    .maybeSingle()

  if (error) throw error
  if (!room) throw new Error('Room not found. Check the code and try again.')
  if (room.status !== 'waiting') throw new Error('This game has already started.')

  const { data: existingPlayers } = await supabase
    .from('room_players')
    .select('*')
    .eq('room_id', room.id)

  const players = existingPlayers ?? []
  if (players.length >= room.max_players) throw new Error('Room is full.')

  const alreadyIn = players.find((p: RoomPlayer) => p.player_id === playerId)
  if (!alreadyIn) {
    const { error: insertError } = await supabase.from('room_players').insert({
      room_id: room.id, player_id: playerId, username, seat_order: players.length, is_ready: false,
    })
    if (insertError) throw insertError
  }

  return room
}

export async function setReady(roomId: string, playerId: string, ready: boolean): Promise<void> {
  const { error } = await supabase
    .from('room_players')
    .update({ is_ready: ready })
    .eq('room_id', roomId)
    .eq('player_id', playerId)
  if (error) throw error
}

export async function leaveRoom(roomId: string, playerId: string): Promise<void> {
  await supabase
    .from('room_players')
    .delete()
    .eq('room_id', roomId)
    .eq('player_id', playerId)
}

export async function getRoomPlayers(roomId: string): Promise<RoomPlayer[]> {
  const { data } = await supabase
    .from('room_players')
    .select('*')
    .eq('room_id', roomId)
    .order('seat_order', { ascending: true })
  return data ?? []
}

export async function getRoom(roomId: string): Promise<Room | null> {
  const { data } = await supabase
    .from('multiplayer_rooms')
    .select('*')
    .eq('id', roomId)
    .maybeSingle()
  return data
}

export function buildInitialGameState(players: RoomPlayer[]): GameState {
  const deck = createGameDeck()
  const sorted = [...players].sort((a, b) => a.seat_order - b.seat_order)

  const playerStates: PlayerState[] = sorted.map(p => ({
    id: p.player_id,
    name: p.username,
    isBot: false,
    wealth: STARTING_WEALTH,
    hand: [],
    skippedTurns: 0,
    pendingGains: [],
    wealthFloor: 0,
    doubleInvestActive: false,
    investChoices: 0,
    emiDamageTaken: false,
  }))

  const remaining = [...deck]
  for (let i = 0; i < 3; i++) {
    for (let p = 0; p < playerStates.length; p++) {
      const card = remaining.shift()
      if (card) playerStates[p].hand.push(card)
    }
  }

  return {
    id: crypto.randomUUID(),
    players: playerStates,
    deck: remaining,
    discardPile: [],
    currentPlayerIndex: 0,
    turn: 1,
    phase: 'draw',
    drawnCard: null,
    playedCard: null,
    pendingDecision: null,
    pendingTarget: null,
    winner: null,
    log: ['Game started! First to ₹50 Lakhs wins.'],
    wealthGoal: WEALTH_GOAL,
    timeLimit: TIME_LIMIT_MS,
    startTime: Date.now(),
    turnStartTime: Date.now(),
  }
}

export async function startGame(roomId: string, players: RoomPlayer[]): Promise<void> {
  const gameState = buildInitialGameState(players)
  const currentPlayerId = players.find(p => p.seat_order === 0)?.player_id ?? null

  const { error } = await supabase
    .from('multiplayer_rooms')
    .update({
      status: 'in_progress',
      game_state: gameState,
      current_player_id: currentPlayerId,
      updated_at: new Date().toISOString(),
    })
    .eq('id', roomId)

  if (error) throw error
}

export async function pushGameState(roomId: string, gameState: GameState): Promise<void> {
  const currentPlayer = gameState.players[gameState.currentPlayerIndex]
  const { error } = await supabase
    .from('multiplayer_rooms')
    .update({
      game_state: gameState,
      current_player_id: currentPlayer.id,
      winner_id: gameState.winner?.id ?? null,
      status: gameState.phase === 'game_over' ? 'completed' : 'in_progress',
      updated_at: new Date().toISOString(),
    })
    .eq('id', roomId)

  if (error) throw error
}

// Single unified subscription. Uses a named broadcast channel on the room so that
// postgres_changes for room_players (which can't reliably filter by room_id on
// non-PK columns) are supplemented by broadcast events the clients emit themselves.
export function subscribeToRoom(
  roomId: string,
  onRoomUpdate: (room: Room) => void,
  onPlayersUpdate: (players: RoomPlayer[]) => void,
) {
  const channelName = `room-${roomId}`

  const channel = supabase
    .channel(channelName, { config: { broadcast: { self: true } } })
    // Listen for room row updates (game_state, status)
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'multiplayer_rooms', filter: `id=eq.${roomId}` },
      (payload) => {
        onRoomUpdate(payload.new as Room)
      },
    )
    // Broadcast events: when a player joins/leaves/readies, they broadcast to the channel
    // so everyone gets a fresh player list fetch
    .on('broadcast', { event: 'players_changed' }, () => {
      getRoomPlayers(roomId).then(onPlayersUpdate)
    })
    .subscribe((status) => {
      // Once subscribed, fetch current state immediately
      if (status === 'SUBSCRIBED') {
        getRoomPlayers(roomId).then(onPlayersUpdate)
        getRoom(roomId).then(room => { if (room) onRoomUpdate(room) })
      }
    })

  return channel
}

// Call this after any room_players mutation so all subscribers get a fresh list
export async function broadcastPlayersChanged(roomId: string): Promise<void> {
  await supabase
    .channel(`room-${roomId}`, { config: { broadcast: { self: true } } })
    .send({ type: 'broadcast', event: 'players_changed', payload: {} })
}
```

### src/lib/supabase.ts

| Field | Value |
| --- | --- |
| Bytes | 327 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase = createClient<any>(supabaseUrl, supabaseAnonKey)
```

### src/main.tsx

| Field | Value |
| --- | --- |
| Bytes | 226 |
| Score | 30 |
| Why | source |
| Status | Full content |


```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### src/types/database.ts

| Field | Value |
| --- | --- |
| Bytes | 4084 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile
        Insert: Partial<Profile> & { id: string; username: string }
        Update: Partial<Profile>
      }
      games: {
        Row: Game
        Insert: Partial<Game> & { host_id: string }
        Update: Partial<Game>
      }
      game_players: {
        Row: GamePlayer
        Insert: Partial<GamePlayer> & { game_id: string; player_id: string }
        Update: Partial<GamePlayer>
      }
      player_cards: {
        Row: PlayerCard
        Insert: Partial<PlayerCard> & { player_id: string; card_id: string }
        Update: Partial<PlayerCard>
      }
      daily_contracts: {
        Row: DailyContract
        Insert: Partial<DailyContract>
        Update: Partial<DailyContract>
      }
      player_contracts: {
        Row: PlayerContract
        Insert: Partial<PlayerContract> & { player_id: string; contract_id: string }
        Update: Partial<PlayerContract>
      }
      daanik_stocks: {
        Row: DaanikStock
        Insert: Partial<DaanikStock>
        Update: Partial<DaanikStock>
      }
      stock_holdings: {
        Row: StockHolding
        Insert: Partial<StockHolding> & { player_id: string; stock_id: string }
        Update: Partial<StockHolding>
      }
      guilds: {
        Row: Guild
        Insert: Partial<Guild> & { name: string; tag: string; owner_id: string }
        Update: Partial<Guild>
      }
      guild_members: {
        Row: GuildMember
        Insert: Partial<GuildMember> & { guild_id: string; player_id: string }
        Update: Partial<GuildMember>
      }
    }
  }
}

export interface Profile {
  id: string
  username: string
  avatar_url: string | null
  rank_points: number
  daanik_coins: number
  total_xp: number
  games_played: number
  games_won: number
  win_streak: number
  max_win_streak: number
  current_season_rank_points: number
  placement_games_done: number
  guild_id: string | null
  created_at: string
  updated_at: string
}

export interface Game {
  id: string
  host_id: string
  season_id: string | null
  status: 'waiting' | 'in_progress' | 'completed'
  game_mode: 'casual' | 'ranked' | 'tutorial'
  player_count: number
  max_players: number
  winner_id: string | null
  final_state: Record<string, unknown> | null
  started_at: string | null
  ended_at: string | null
  created_at: string
}

export interface GamePlayer {
  id: string
  game_id: string
  player_id: string
  seat_order: number
  final_wealth: number | null
  rp_change: number
  placement: number | null
  is_bot: boolean
  created_at: string
}

export interface PlayerCard {
  id: string
  player_id: string
  card_id: string
  card_tier: 'common' | 'rare' | 'epic' | 'legendary'
  quantity: number
  acquired_at: string
}

export interface DailyContract {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  reward_dc: number
  reward_card_tier: string | null
  requirement_type: string
  requirement_value: number
  contract_date: string
  is_weekly: boolean
  created_at: string
}

export interface PlayerContract {
  id: string
  player_id: string
  contract_id: string
  progress: number
  completed: boolean
  completed_at: string | null
  created_at: string
}

export interface DaanikStock {
  id: string
  ticker: string
  name: string
  description: string
  base_price: number
  current_price: number
  price_change_pct: number
  trend: 'up' | 'down' | 'stable'
  created_at: string
  updated_at: string
}

export interface StockHolding {
  id: string
  player_id: string
  stock_id: string
  shares: number
  avg_buy_price: number
  created_at: string
  updated_at: string
}

export interface Guild {
  id: string
  name: string
  tag: string
  description: string | null
  owner_id: string
  treasury_dc: number
  max_members: number
  season_wins: number
  created_at: string
  updated_at: string
}

export interface GuildMember {
  id: string
  guild_id: string
  player_id: string
  role: 'owner' | 'officer' | 'member'
  contribution_dc: number
  joined_at: string
}
```

### src/types/game.ts

| Field | Value |
| --- | --- |
| Bytes | 3305 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
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
  investChoices: number
  emiDamageTaken: boolean
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
```

### src/vite-env.d.ts

| Field | Value |
| --- | --- |
| Bytes | 38 |
| Score | 30 |
| Why | source |
| Status | Full content |


```ts
/// <reference types="vite/client" />
```

### .env

| Field | Value |
| --- | --- |
| Bytes | 531 |
| Score | 0 |
| Why | context |
| Status | Full content |


```
VITE_SUPABASE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlbHNlbHd1Ym1tb3Bva2ZnYnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MDk5NjEsImV4cCI6MjA5NTI4NTk2MX0.kXsYDGVxFGXiABQIiaY1rypCocg72IxiRNDvvcAjauU
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlbHNlbHd1Ym1tb3Bva2ZnYnluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MDk5NjEsImV4cCI6MjA5NTI4NTk2MX0.kXsYDGVxFGXiABQIiaY1rypCocg72IxiRNDvvcAjauU
VITE_SUPABASE_URL=https://pelselwubmmopokfgbyn.supabase.co
```

### .github/workflows/main.yml

| Field | Value |
| --- | --- |
| Bytes | 438 |
| Score | 0 |
| Why | context |
| Status | Full content |


```yaml
name: CI

on:
  push:
    branches: [ "main", "master" ]
  pull_request:
    branches: [ "main", "master" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4
    
    - name: Use Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20.x'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build
```

### index.html

| Field | Value |
| --- | --- |
| Bytes | 911 |
| Score | 0 |
| Why | context |
| Status | Full content |


```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Paisa War — The Money Decision Game</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <meta property="og:image" content="https://bolt.new/static/og_default.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="https://bolt.new/static/og_default.png">
</head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### supabase/migrations/20260525101309_create_profiles_table.sql

| Field | Value |
| --- | --- |
| Bytes | 1937 |
| Score | 0 |
| Why | context |
| Status | Full content |


```sql
/*
  # Create profiles table

  1. New Tables
    - `profiles` — stores user profile data linked to auth.users
      - `id` (uuid, primary key, references auth.users)
      - `username` (text, unique)
      - `rank_points` (integer, default 0)
      - `daanik_coins` (integer, default 100)
      - `total_xp` (integer, default 0)
      - `games_played` (integer, default 0)
      - `games_won` (integer, default 0)
      - `win_streak` (integer, default 0)
      - `max_win_streak` (integer, default 0)
      - `created_at`, `updated_at` timestamps

  2. Security
    - RLS enabled
    - Any authenticated user can read any profile (for leaderboard/social)
    - Users can only insert/update their own profile

  3. Trigger
    - Auto-create a leaderboard entry when a profile is created
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  username text UNIQUE NOT NULL,
  avatar_url text,
  rank_points integer NOT NULL DEFAULT 0,
  daanik_coins integer NOT NULL DEFAULT 100,
  total_xp integer NOT NULL DEFAULT 0,
  games_played integer NOT NULL DEFAULT 0,
  games_won integer NOT NULL DEFAULT 0,
  win_streak integer NOT NULL DEFAULT 0,
  max_win_streak integer NOT NULL DEFAULT 0,
  current_season_rank_points integer NOT NULL DEFAULT 0,
  guild_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read any profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE INDEX IF NOT EXISTS idx_profiles_rank_points ON profiles(rank_points DESC);
```

### supabase/migrations/20260525102916_multiplayer_rooms.sql

| Field | Value |
| --- | --- |
| Bytes | 3366 |
| Score | 0 |
| Why | context |
| Status | Full content |


```sql
/*
  # Multiplayer Rooms

  1. New Tables
    - `multiplayer_rooms` — Lobby rooms players create and join
      - `id` (uuid, primary key)
      - `code` (text, unique 6-char room code)
      - `host_id` (uuid, references profiles)
      - `host_username` (text)
      - `status` (text): 'waiting' | 'in_progress' | 'completed'
      - `max_players` (int, default 4)
      - `game_state` (jsonb) — full serialized GameState, updated on every action
      - `current_player_id` (uuid) — whose turn it is
      - `winner_id` (uuid, nullable)
      - `created_at`, `updated_at`

    - `room_players` — Players in each room
      - `id` (uuid, primary key)
      - `room_id` (uuid, references multiplayer_rooms)
      - `player_id` (uuid, references profiles)
      - `username` (text)
      - `seat_order` (int) — turn order
      - `is_ready` (bool)
      - `joined_at`

  2. Security
    - RLS enabled on both tables
    - Any authenticated user can read rooms (to join by code)
    - Only host can update room game_state
    - Players can update their own ready status

  3. Notes
    - game_state is the full serialized GameState JSON — host writes it, all players read it
    - Supabase Realtime on game_state column drives all clients
*/

CREATE TABLE IF NOT EXISTS multiplayer_rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  host_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  host_username text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'waiting',
  max_players integer NOT NULL DEFAULT 4,
  game_state jsonb,
  current_player_id uuid,
  winner_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE multiplayer_rooms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read rooms"
  ON multiplayer_rooms FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Host can insert room"
  ON multiplayer_rooms FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = host_id);

CREATE POLICY "Host can update room"
  ON multiplayer_rooms FOR UPDATE
  TO authenticated
  USING (auth.uid() = host_id);

-- Room players
CREATE TABLE IF NOT EXISTS room_players (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id uuid NOT NULL REFERENCES multiplayer_rooms(id) ON DELETE CASCADE,
  player_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  username text NOT NULL DEFAULT '',
  seat_order integer NOT NULL DEFAULT 0,
  is_ready boolean NOT NULL DEFAULT false,
  joined_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(room_id, player_id)
);

ALTER TABLE room_players ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read room players"
  ON room_players FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Players can insert own seat"
  ON room_players FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = player_id);

CREATE POLICY "Players can update own seat"
  ON room_players FOR UPDATE
  TO authenticated
  USING (auth.uid() = player_id)
  WITH CHECK (auth.uid() = player_id);

CREATE POLICY "Players can delete own seat"
  ON room_players FOR DELETE
  TO authenticated
  USING (auth.uid() = player_id);

CREATE INDEX IF NOT EXISTS idx_rooms_code ON multiplayer_rooms(code);
CREATE INDEX IF NOT EXISTS idx_room_players_room ON room_players(room_id);
```

### supabase/migrations/20260525103316_rooms_allow_player_state_update.sql

| Field | Value |
| --- | --- |
| Bytes | 745 |
| Score | 0 |
| Why | context |
| Status | Full content |


```sql
/*
  # Allow room players to update game state

  In our multiplayer model, whichever player's turn it is pushes the new game_state.
  The host-only UPDATE policy is too restrictive — any authenticated player who is
  a member of the room needs to be able to push state updates.

  We drop the host-only policy and replace it with one that allows any player
  who is a member of the room to update it.
*/

DROP POLICY IF EXISTS "Host can update room" ON multiplayer_rooms;

CREATE POLICY "Room members can update room"
  ON multiplayer_rooms FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM room_players
      WHERE room_players.room_id = multiplayer_rooms.id
        AND room_players.player_id = auth.uid()
    )
  );
```

### supabase/migrations/20260526000000_create_leaderboard.sql

| Field | Value |
| --- | --- |
| Bytes | 1009 |
| Score | 0 |
| Why | context |
| Status | Full content |


```sql
CREATE TABLE IF NOT EXISTS leaderboard (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  username text NOT NULL,
  wins integer DEFAULT 0 NOT NULL,
  losses integer DEFAULT 0 NOT NULL,
  total_games integer DEFAULT 0 NOT NULL,
  highest_net_worth bigint DEFAULT 0 NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(user_id)
);

ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read leaderboard"
  ON leaderboard FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own leaderboard entry"
  ON leaderboard FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own leaderboard entry"
  ON leaderboard FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Optional: Create an index for faster sorting on the UI
CREATE INDEX IF NOT EXISTS idx_leaderboard_wins ON leaderboard(wins DESC);
```

### supabase/migrations/20260526000001_rename_daanik_coins.sql

| Field | Value |
| --- | --- |
| Bytes | 64 |
| Score | 0 |
| Why | context |
| Status | Full content |


```sql
ALTER TABLE profiles RENAME COLUMN daank_coins TO daanik_coins;
```

### supabase/migrations/20260526000002_create_market.sql

| Field | Value |
| --- | --- |
| Bytes | 2836 |
| Score | 0 |
| Why | context |
| Status | Full content |


```sql
CREATE TABLE IF NOT EXISTS user_stocks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  ticker text NOT NULL,
  shares integer DEFAULT 0 NOT NULL,
  avg_buy_price numeric DEFAULT 0 NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(user_id, ticker)
);

ALTER TABLE user_stocks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own stocks"
  ON user_stocks FOR SELECT
  USING (auth.uid() = user_id);

-- We will use a database function to handle transactions safely

CREATE OR REPLACE FUNCTION buy_stock(p_ticker text, p_shares integer, p_total_cost integer)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id uuid;
  v_current_coins integer;
  v_current_shares integer;
  v_avg_price numeric;
BEGIN
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF p_shares <= 0 THEN
    RAISE EXCEPTION 'Shares must be positive';
  END IF;

  -- Check if user has enough coins
  SELECT daanik_coins INTO v_current_coins FROM profiles WHERE id = v_user_id;
  IF v_current_coins < p_total_cost THEN
    RAISE EXCEPTION 'Not enough DAANIK coins';
  END IF;

  -- Deduct coins
  UPDATE profiles SET daanik_coins = daanik_coins - p_total_cost WHERE id = v_user_id;

  -- Upsert stock holding
  INSERT INTO user_stocks (user_id, ticker, shares, avg_buy_price)
  VALUES (v_user_id, p_ticker, p_shares, p_total_cost::numeric / p_shares)
  ON CONFLICT (user_id, ticker) DO UPDATE
  SET 
    avg_buy_price = ((user_stocks.shares * user_stocks.avg_buy_price) + p_total_cost) / (user_stocks.shares + p_shares),
    shares = user_stocks.shares + p_shares,
    updated_at = now();
END;
$$;


CREATE OR REPLACE FUNCTION sell_stock(p_ticker text, p_shares integer, p_total_revenue integer)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id uuid;
  v_current_shares integer;
BEGIN
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  IF p_shares <= 0 THEN
    RAISE EXCEPTION 'Shares must be positive';
  END IF;

  -- Check if user has enough shares
  SELECT shares INTO v_current_shares FROM user_stocks WHERE user_id = v_user_id AND ticker = p_ticker;
  IF v_current_shares IS NULL OR v_current_shares < p_shares THEN
    RAISE EXCEPTION 'Not enough shares';
  END IF;

  -- Add coins
  UPDATE profiles SET daanik_coins = daanik_coins + p_total_revenue WHERE id = v_user_id;

  -- Deduct shares
  IF v_current_shares = p_shares THEN
    DELETE FROM user_stocks WHERE user_id = v_user_id AND ticker = p_ticker;
  ELSE
    UPDATE user_stocks SET shares = shares - p_shares, updated_at = now() WHERE user_id = v_user_id AND ticker = p_ticker;
  END IF;
END;
$$;
```

### supabase/migrations/20260526000003_create_contracts.sql

| Field | Value |
| --- | --- |
| Bytes | 2199 |
| Score | 0 |
| Why | context |
| Status | Full content |


```sql
CREATE TABLE IF NOT EXISTS daily_contracts (
  id text PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  reward_dc integer NOT NULL DEFAULT 0,
  reward_card_tier text,
  requirement_type text NOT NULL,
  requirement_value integer NOT NULL,
  contract_date date NOT NULL DEFAULT CURRENT_DATE,
  is_weekly boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS player_contracts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  player_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  contract_id text REFERENCES daily_contracts(id) ON DELETE CASCADE NOT NULL,
  progress integer NOT NULL DEFAULT 0,
  completed boolean NOT NULL DEFAULT false,
  completed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(player_id, contract_id)
);

ALTER TABLE daily_contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE player_contracts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read daily_contracts"
  ON daily_contracts FOR SELECT
  USING (true);

CREATE POLICY "Users can read own contracts"
  ON player_contracts FOR SELECT
  USING (auth.uid() = player_id);

CREATE POLICY "Users can insert own contracts"
  ON player_contracts FOR INSERT
  WITH CHECK (auth.uid() = player_id);

CREATE POLICY "Users can update own contracts"
  ON player_contracts FOR UPDATE
  USING (auth.uid() = player_id)
  WITH CHECK (auth.uid() = player_id);

-- Seed Initial Contracts
INSERT INTO daily_contracts (id, title, description, difficulty, reward_dc, reward_card_tier, requirement_type, requirement_value, contract_date, is_weekly)
VALUES
  ('1', 'First Win', 'Win 1 game at any level', 'easy', 15, null, 'wins', 1, CURRENT_DATE, false),
  ('2', 'Investor Mindset', 'Make 5 INVEST choices in one game', 'medium', 40, 'common', 'invest_choices', 5, CURRENT_DATE, false),
  ('3', 'Unbreakable', 'Win a game without taking EMI damage', 'hard', 100, 'rare', 'no_emi_win', 1, CURRENT_DATE, false),
  ('w1', 'Weekly Champion', 'Win 5 games this week', 'hard', 500, 'epic', 'weekly_wins', 5, CURRENT_DATE, true)
ON CONFLICT (id) DO NOTHING;
```

### tsconfig.node.json

| Field | Value |
| --- | --- |
| Bytes | 233 |
| Score | 0 |
| Why | context |
| Status | Full content |


```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```