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
