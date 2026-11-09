import Phaser from 'phaser'

export class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene')
  }

  preload() {
    const { width, height } = this.cameras.main
    
    // Loading progress bar
    const progressBar = this.add.graphics()
    this.load.on('progress', (value) => {
      progressBar.clear()
      progressBar.fillStyle(0x4ade80, 1)
      progressBar.fillRect(width / 2 - 150, height / 2 + 40, 300 * value, 20)
    })
    this.load.on('complete', () => { progressBar.destroy() })

    // Try to load external assets (will fail gracefully)
    this.load.on('loaderror', (file) => {
      console.warn('Failed to load:', file.key, file.url)
    })

    // Background images (procedural fallback will be used)
    for (let i = 1; i <= 5; i++) {
      this.load.image(`bg${i}`, `assets/images/bg${i}.png`)
    }

    // Character spritesheet
    this.load.atlas('arthur', 'assets/images/arthur.png', 'assets/images/arthur.json')

    // Enemy sprites
    const enemies = ['zombi', 'goblin', 'ocell', 'escuder', 'saltarin']
    enemies.forEach(e => {
      this.load.atlas(e, `assets/images/${e}.png`, `assets/images/${e}.json`)
    })

    // Weapons
    for (let i = 0; i < 5; i++) {
      this.load.image(`arma${i}`, `assets/images/arma${i}.png`)
    }

    // UI elements
    this.load.image('armor', 'assets/images/armor.png')
    this.load.image('key', 'assets/images/key.png')
    this.load.image('door', 'assets/images/door.png')
    this.load.image('ladder', 'assets/images/ladder.png')
    this.load.image('platform', 'assets/images/platform.png')
    this.load.image('wall', 'assets/images/wall.png')

    // Audio
    this.load.audio('jump', 'assets/audio/jump.mp3')
    this.load.audio('attack', 'assets/audio/attack.mp3')
    this.load.audio('hurt', 'assets/audio/hurt.mp3')
    this.load.audio('death', 'assets/audio/death.mp3')
    this.load.audio('pickup', 'assets/audio/pickup.mp3')
    this.load.audio('bgm1', 'assets/audio/bgm1.mp3')
    this.load.audio('bgm2', 'assets/audio/bgm2.mp3')
  }

  create() {
    // Generate procedural fallback textures for all assets
    this.createProceduralTextures()
    
    // Start main scene
    this.scene.start('MainScene')
    this.scene.launch('UIScene')
  }

  createProceduralTextures() {
    // Arthur sprites (19 frames: idle, walk, jump, bend, shoot, hurt, die)
    this.createArthurTextures()
    
    // Enemy textures
    this.createEnemyTextures()
    
    // Weapon textures
    this.createWeaponTextures()
    
    // Environment textures
    this.createEnvironmentTextures()
    
    // UI textures
    this.createUITextures()
  }

  createArthurTextures() {
    // Frame mapping:
    // 0: idle right, 1: idle left
    // 2-5: walk right (4 frames), 6-9: walk left
    // 10-11: jump right/left
    // 12-13: bend right/left
    // 14-17: shoot right/left (4 frames)
    // 18-19: hurt right/left
    // 20-23: die right/left (4 frames)
    
    const frames = [
      // idle right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 12, 8, 16); },
      // idle left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 12, 8, 16); },
      // walk 1 right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 16, 8, 12); g.fillRect(8, 24, 8, 12); },
      // walk 2 right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 12, 8, 16); g.fillRect(8, 20, 8, 16); },
      // walk 3 right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 20, 8, 12); g.fillRect(8, 16, 8, 12); },
      // walk 4 right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 12, 8, 16); g.fillRect(8, 20, 8, 16); },
      // walk 1 left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 16, 8, 12); g.fillRect(24, 24, 8, 12); },
      // walk 2 left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 12, 8, 16); g.fillRect(24, 20, 8, 16); },
      // walk 3 left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 20, 8, 12); g.fillRect(24, 16, 8, 12); },
      // walk 4 left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 12, 8, 16); g.fillRect(24, 20, 8, 16); },
      // jump right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 4, 16, 28); g.fillStyle(0xFFD700); g.fillRect(8, 0, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 20, 8, 12); g.fillRect(8, 20, 8, 12); },
      // jump left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 4, 16, 28); g.fillStyle(0xFFD700); g.fillRect(8, 0, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 20, 8, 12); g.fillRect(24, 20, 8, 12); },
      // bend right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 16, 16, 16); g.fillStyle(0xFFD700); g.fillRect(8, 12, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 16, 8, 16); },
      // bend left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 16, 16, 16); g.fillStyle(0xFFD700); g.fillRect(8, 12, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 16, 8, 16); },
      // shoot 1 right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 12, 16, 4); g.fillStyle(0xFFFF00); g.fillRect(40, 10, 8, 8); },
      // shoot 2 right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 12, 24, 4); g.fillStyle(0xFFFF00); g.fillRect(48, 10, 12, 8); },
      // shoot 1 left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(0, 12, 16, 4); g.fillStyle(0xFFFF00); g.fillRect(-8, 10, 8, 8); },
      // shoot 2 left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFFD700); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(-12, 12, 24, 4); g.fillStyle(0xFFFF00); g.fillRect(-20, 10, 12, 8); },
      // hurt right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFF0000); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 12, 8, 16); g.fillRect(24, 20, 8, 12); },
      // hurt left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 8, 16, 24); g.fillStyle(0xFF0000); g.fillRect(8, 4, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 12, 8, 16); g.fillRect(8, 20, 8, 12); },
      // die 1 right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 16, 16, 16); g.fillStyle(0xFF0000); g.fillRect(8, 12, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 20, 8, 12); g.fillRect(8, 20, 8, 12); },
      // die 2 right
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 20, 16, 12); g.fillStyle(0xFF0000); g.fillRect(8, 16, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(24, 16, 8, 16); g.fillRect(8, 24, 8, 8); },
      // die 1 left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 16, 16, 16); g.fillStyle(0xFF0000); g.fillRect(8, 12, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 20, 8, 12); g.fillRect(24, 20, 8, 12); },
      // die 2 left
      (g) => { g.fillStyle(0x8B4513); g.fillRect(12, 20, 16, 12); g.fillStyle(0xFF0000); g.fillRect(8, 16, 24, 8); g.fillStyle(0xC0C0C0); g.fillRect(8, 16, 8, 16); g.fillRect(24, 24, 8, 8); },
    ]

    frames.forEach((drawFn, i) => {
      const key = `arthur_${i}`
      if (!this.textures.exists(key)) {
        const g = this.make.graphics({ x: 0, y: 0, add: false })
        drawFn(g)
        g.generateTexture(key, 40, 40)
      }
    })

    // Create atlas JSON
    const atlasFrames = frames.map((_, i) => ({ frame: { x: 0, y: 0, w: 40, h: 40 }, filename: `arthur_${i}.png` }))
    const atlasData = { frames: atlasFrames.reduce((acc, f, i) => { acc[`arthur_${i}.png`] = f.frame; return acc }, {}), meta: { image: 'arthur.png', size: { w: 40, h: 40 } } }
    this.cache.json.add('arthur_atlas', atlasData)
  }

  createEnemyTextures() {
    // Zombi (green, 2 frames)
    for (let i = 0; i < 2; i++) {
      const g = this.make.graphics({ x: 0, y: 0, add: false })
      g.fillStyle(0x2E8B2E)
      g.fillEllipse(20, 30, 32, 40)
      g.fillStyle(0x1A5E1A)
      g.fillEllipse(20, 18, 24, 24)
      g.fillStyle(0xFF0000)
      g.fillCircle(14, 16, 3); g.fillCircle(26, 16, 3)
      g.fillStyle(0x8B0000)
      g.fillRect(12, 50, 8, 18); g.fillRect(28, 50, 8, 18)
      if (i === 1) {
        g.fillRect(10, 52, 8, 14); g.fillRect(30, 48, 8, 18)
      }
      g.generateTexture(`zombi_${i}`, 40, 70)
    }

    // Goblin (larger, brown, 2 frames)
    for (let i = 0; i < 2; i++) {
      const g = this.make.graphics({ x: 0, y: 0, add: false })
      g.fillStyle(0x8B4513)
      g.fillEllipse(40, 50, 60, 60)
      g.fillStyle(0x5D3A1A)
      g.fillEllipse(40, 30, 40, 30)
      g.fillStyle(0xFF0000)
      g.fillCircle(30, 28, 4); g.fillCircle(50, 28, 4)
      g.fillStyle(0x8B0000)
      g.fillRect(20, 80, 16, 20); g.fillRect(56, 80, 16, 20)
      if (i === 1) {
        g.fillRect(18, 82, 16, 16); g.fillRect(58, 78, 16, 18)
      }
      g.generateTexture(`goblin_${i}`, 80, 100)
    }

    // Ocell/Bird (multiple types)
    const birdTypes = [
      { key: 'bat', color: 0x1A1A2E, w: 30, h: 20 },
      { key: 'blue', color: 0x4A90D9, w: 30, h: 20 },
      { key: 'red', color: 0xCC3333, w: 40, h: 25 },
      { key: 'mayfly', color: 0x8FBC8F, w: 40, h: 20 },
      { key: 'petite', color: 0xFFB6C1, w: 25, h: 18 }
    ]
    birdTypes.forEach(b => {
      for (let i = 0; i < 2; i++) {
        const g = this.make.graphics({ x: 0, y: 0, add: false })
        g.fillStyle(b.color)
        g.fillEllipse(b.w/2, b.h/2, b.w, b.h)
        g.fillStyle(0xFFD700)
        g.fillCircle(b.w/2 - 5, b.h/2 - 2, 3)
        g.fillCircle(b.w/2 + 5, b.h/2 - 2, 3)
        if (i === 1) {
          g.fillStyle(0xFFFFFF)
          g.fillTriangle(b.w/2 - 10, b.h/2, b.w/2, b.h/2 - 8, b.w/2, b.h/2 + 8)
          g.fillTriangle(b.w/2 + 10, b.h/2, b.w/2, b.h/2 - 8, b.w/2, b.h/2 + 8)
        }
        g.generateTexture(`${b.key}_${i}`, b.w, b.h)
      }
    })

    // Escuder (shield bearer, gray/blue)
    for (let i = 0; i < 2; i++) {
      const g = this.make.graphics({ x: 0, y: 0, add: false })
      g.fillStyle(0x4682B4)
      g.fillRect(10, 10, 30, 40)
      g.fillStyle(0x2E4A6B)
      g.fillRect(12, 12, 26, 36)
      g.fillStyle(0xC0C0C0)
      g.fillCircle(25, 25, 12)
      g.fillStyle(0xFFD700)
      g.fillCircle(25, 25, 6)
      g.generateTexture(`escuder_${i}`, 50, 60)
    }

    // Saltarin (jumper, purple)
    for (let i = 0; i < 2; i++) {
      const g = this.make.graphics({ x: 0, y: 0, add: false })
      g.fillStyle(0x8A2BE2)
      g.fillEllipse(15, 25, 24, 30)
      g.fillStyle(0x4B0082)
      g.fillEllipse(15, 15, 16, 16)
      g.fillStyle(0xFF00FF)
      g.fillCircle(10, 14, 3); g.fillCircle(20, 14, 3)
      g.fillStyle(0xFFFFFF)
      g.fillRect(8, 40, 6, 12); g.fillRect(22, 40, 6, 12)
      if (i === 1) {
        g.fillRect(6, 42, 6, 10); g.fillRect(24, 38, 6, 12)
      }
      g.generateTexture(`saltarin_${i}`, 30, 55)
    }
  }

  createWeaponTextures() {
    // Arma 0: Lance (gray, long)
    let g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0xC0C0C0)
    g.fillRect(0, 10, 60, 4)
    g.fillStyle(0xFFFFFF)
    g.fillTriangle(60, 8, 72, 12, 60, 16)
    g.generateTexture('arma0', 72, 24)

    // Arma 1: Sword (gold, medium)
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0xFFD700)
    g.fillRect(0, 8, 40, 5)
    g.fillStyle(0xFFFFFF)
    g.fillTriangle(40, 5, 48, 10, 40, 15)
    g.generateTexture('arma1', 48, 20)

    // Arma 2: Fire (orange/red)
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0xFF8C00)
    g.fillCircle(12, 12, 12)
    g.fillStyle(0xFF4500)
    g.fillCircle(12, 12, 8)
    g.fillStyle(0xFFFF00)
    g.fillCircle(12, 12, 4)
    g.generateTexture('arma2', 24, 24)

    // Arma 3: Axe (brown/steel)
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0x8B4513)
    g.fillTriangle(0, 0, 24, 24, 0, 24)
    g.fillStyle(0x654321)
    g.fillRect(0, 20, 8, 16)
    g.generateTexture('arma3', 24, 40)

    // Arma 4: Magic (purple)
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0x9932CC)
    g.fillCircle(15, 15, 15)
    g.fillStyle(0xDA70D6)
    g.fillCircle(15, 15, 10)
    g.fillStyle(0xFFFFFF)
    g.fillCircle(15, 15, 5)
    g.generateTexture('arma4', 30, 30)
  }

  createEnvironmentTextures() {
    // Platform tile
    let g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0x2F2F2F)
    g.fillRect(0, 0, 64, 32)
    g.fillStyle(0x3F3F3F)
    g.fillRect(0, 0, 64, 4)
    g.generateTexture('platform', 64, 32)

    // Ground tile
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0x1A1A1A)
    g.fillRect(0, 0, 64, 64)
    g.fillStyle(0x2A2A2A)
    for (let x = 0; x < 64; x += 8) {
      for (let y = 0; y < 64; y += 8) {
        if ((x + y) % 16 === 0) g.fillRect(x, y, 8, 8)
      }
    }
    g.generateTexture('ground', 64, 64)

    // Ladder
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0x8B4513)
    g.fillRect(0, 0, 24, 120)
    g.fillStyle(0xA0522D)
    for (let y = 0; y < 120; y += 20) {
      g.fillRect(0, y, 24, 4)
    }
    g.generateTexture('ladder', 24, 120)

    // Wall
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0x3A3A3A)
    g.fillRect(0, 0, 32, 64)
    g.fillStyle(0x4A4A4A)
    g.fillRect(0, 0, 32, 4)
    g.generateTexture('wall', 32, 64)

    // Door
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0x8B4513)
    g.fillRect(0, 0, 48, 64)
    g.fillStyle(0xA0522D)
    g.fillRect(8, 8, 32, 48)
    g.fillStyle(0xFFD700)
    g.fillCircle(36, 32, 4)
    g.generateTexture('door', 48, 64)

    // Key
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0xFFD700)
    g.fillCircle(12, 8, 8)
    g.fillRect(8, 8, 4, 16)
    g.fillRect(10, 20, 4, 8)
    g.fillRect(8, 24, 8, 4)
    g.generateTexture('key', 24, 32)

    // Armor
    g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0xC0C0C0)
    g.fillRect(8, 4, 24, 8)
    g.fillRect(4, 12, 32, 24)
    g.fillStyle(0xE8E8E8)
    g.fillRect(10, 14, 8, 6)
    g.fillRect(22, 14, 8, 6)
    g.generateTexture('armor', 40, 40)

    // Backgrounds (5 levels)
    const bgColors = [
      0x1A0A2E, // Level 1: Cemetery - dark purple
      0x0D1B2A, // Level 2: Ice - dark blue
      0x1B1A2E, // Level 3: Goblin Town - dark purple
      0x0F0F1A, // Level 4: Cave - near black
      0x1A0A2E  // Level 5: Castle - dark purple
    ]
    bgColors.forEach((color, i) => {
      g = this.make.graphics({ x: 0, y: 0, add: false })
      g.fillStyle(color)
      g.fillRect(0, 0, 1280, 720)
      // Add some parallax elements
      g.fillStyle(Phaser.Display.Color.GetColor32(color).color & 0xFFFFFF | 0x202020)
      for (let x = 0; x < 1280; x += 64) {
        for (let y = 0; y < 720; y += 64) {
          if (Math.random() < 0.1) g.fillRect(x, y, 32, 32)
        }
      }
      g.generateTexture(`bg${i+1}`, 1280, 720)
    })
  }

  createUITextures() {
    // Health heart
    let g = this.make.graphics({ x: 0, y: 0, add: false })
    g.fillStyle(0xFF0000)
    g.fillCircle(10, 8, 8)
    g.fillCircle(18, 8, 8)
    g.fillRect(6, 8, 16, 12)
    g.generateTexture('heart', 24, 24)

    // Weapon icons
    const weapons = [
      { key: 'w_lance', color: 0xC0C0C0 },
      { key: 'w_sword', color: 0xFFD700 },
      { key: 'w_fire', color: 0xFF8C00 },
      { key: 'w_axe', color: 0x8B4513 },
      { key: 'w_magic', color: 0x9932CC }
    ]
    weapons.forEach(w => {
      g = this.make.graphics({ x: 0, y: 0, add: false })
      g.fillStyle(w.color)
      g.fillRect(4, 4, 24, 24)
      g.lineStyle(2, 0xFFFFFF)
      g.strokeRect(4, 4, 24, 24)
      g.generateTexture(w.key, 32, 32)
    })
  }
}
