import Phaser from 'phaser'

// Level data based on Python reference
const LEVELS = [
  {
    id: 1,
    name: 'Cemetery in the Forest',
    bg: 'bg1',
    width: 3000,
    platforms: [
      { x: 0, y: 600, w: 1000, h: 32 },
      { x: 100, y: 400, w: 300, h: 20 },
      { x: 600, y: 300, w: 300, h: 20 },
      { x: 175, y: 200, w: 200, h: 20 },
      { x: 475, y: 100, w: 50, h: 20 },
      { x: 625, y: 100, w: 200, h: 20 }
    ],
    ladders: [
      { x: 200, y: 600, h: 200 },
      { x: 800, y: 600, h: 200 },
      { x: 300, y: 400, h: 200 }
    ],
    enemies: [
      { type: 'zombi', x: 300, y: 570 },
      { type: 'zombi', x: 330, y: 570 },
      { type: 'zombi', x: 920, y: 570 },
      { type: 'zombi', x: 980, y: 570 },
      { type: 'zombi', x: 1000, y: 570 },
      { type: 'saltarin', x: 500, y: 475 },
      { type: 'saltarin', x: 900, y: 475 },
      { type: 'escuder', x: 1800, y: 50, v: -7 },
      { type: 'escuder', x: 1500, y: 50, v: -7 },
      { type: 'escuder', x: 1200, y: 50, v: -7 },
      { type: 'escuder', x: 900, y: 250, v: 0 },
      { type: 'escuder', x: 1500, y: 250, v: 0 },
      { type: 'escuder', x: 2200, y: 250, v: 0 }
    ],
    items: [
      { type: 'arma', weapon: 2, x: 700, y: 470 },
      { type: 'arma', weapon: 1, x: 170, y: 70 },
      { type: 'armor', x: 120, y: 270 }
    ],
    keys: [
      { x: 700, y: 250, id: 0 }
    ],
    doors: [
      { x: 675, y: 20, w: 100, h: 80, targetLevel: 1 }
    ],
    startY: 450
  },
  {
    id: 2,
    name: 'Frozen World',
    bg: 'bg2',
    width: 3000,
    platforms: [
      { x: 0, y: 550, w: 1000, h: 60 },
      { x: 40, y: 455, w: 160, h: 20 },
      { x: 200, y: 393, w: 600, h: 20 },
      { x: 805, y: 455, w: 160, h: 20 },
      { x: 400, y: 301, w: 200, h: 20 },
      { x: 430, y: 208, w: 140, h: 20 },
      { x: 173, y: 208, w: 160, h: 20 },
      { x: 668, y: 208, w: 160, h: 20 },
      { x: 65, y: 115, w: 100, h: 20 },
      { x: 838, y: 115, w: 100, h: 20 }
    ],
    ladders: [],
    enemies: [
      { type: 'ocell', variant: 1, x: 500, y: 330, v: -5 },
      { type: 'ocell', variant: 1, x: 750, y: 330, v: -5 },
      { type: 'ocell', variant: 1, x: 1000, y: 330, v: -5 },
      { type: 'ocell', variant: 4, x: 485, y: 161 },
      { type: 'ocell', variant: 4, x: 100, y: 161 },
      { type: 'ocell', variant: 4, x: 870, y: 161 }
    ],
    items: [
      { type: 'arma', weapon: 3, x: 400, y: 370 },
      { type: 'armor', x: 880, y: 415 }
    ],
    keys: [
      { x: 105, y: 75, id: 0 },
      { x: 242, y: 170, id: 1 },
      { x: 415, y: 260, id: 2 },
      { x: 565, y: 260, id: 3 },
      { x: 880, y: 75, id: 4 }
    ],
    doors: [
      { x: 470, y: 150, w: 60, h: 60, targetLevel: 2 }
    ],
    startY: 405
  },
  {
    id: 3,
    name: 'Goblin Town',
    bg: 'bg3',
    width: 5000,
    platforms: [
      { x: 0, y: 550, w: 1000, h: 50 },
      { x: 0, y: 410, w: 1000, h: 25 },
      { x: 0, y: 270, w: 1000, h: 25 },
      { x: 0, y: 130, w: 1000, h: 20 }
    ],
    ladders: [
      { x: 50, y: 550, h: 140 },
      { x: 627, y: 550, h: 140 },
      { x: 915, y: 550, h: 140 },
      { x: 250, y: 410, h: 140 },
      { x: 535, y: 410, h: 140 },
      { x: 915, y: 410, h: 140 },
      { x: 715, y: 410, h: 140 },
      { x: 150, y: 270, h: 140 },
      { x: 715, y: 270, h: 140 }
    ],
    enemies: [
      { type: 'goblin', x: 1000, y: 520 },
      { type: 'goblin', x: 460, y: 520 },
      { type: 'goblin', x: 1500, y: 380 },
      { type: 'saltarin', x: 700, y: 385 },
      { type: 'saltarin', x: 1000, y: 385 },
      { type: 'saltarin', x: 1300, y: 385 },
      { type: 'ocell', variant: 3, x: 300, y: 210 },
      { type: 'ocell', variant: 3, x: 1700, y: 210 },
      { type: 'ocell', variant: 3, x: 3800, y: 210 },
      { type: 'saltarin', x: 2700, y: 385 },
      { type: 'saltarin', x: 3000, y: 385 },
      { type: 'saltarin', x: 3300, y: 385 },
      { type: 'goblin', x: 900, y: 100 },
      { type: 'goblin', x: 2300, y: 100 },
      { type: 'ocell', variant: 3, x: 1000, y: 70 },
      { type: 'ocell', variant: 3, x: 2700, y: 70 }
    ],
    items: [
      { type: 'arma', weapon: 4, x: 830, y: 230 }
    ],
    keys: [
      { x: 415, y: 500, id: 0 },
      { x: 378, y: 200, id: 1 },
      { x: 738, y: 350, id: 2 },
      { x: 600, y: 500, id: 3 }
    ],
    doors: [
      { x: 248, y: 465, w: 66, h: 85, targetLevel: 3 }
    ],
    startY: 500
  },
  {
    id: 4,
    name: 'Underground Passage',
    bg: 'bg4',
    width: 5000,
    platforms: [
      { x: 0, y: 550, w: 1000, h: 50 },
      { x: 600, y: 450, w: 200, h: 20 },
      { x: 100, y: 350, w: 300, h: 20 },
      { x: 580, y: 350, w: 100, h: 20 },
      { x: 740, y: 350, w: 100, h: 20 },
      { x: 890, y: 350, w: 100, h: 20 },
      { x: 330, y: 250, w: 150, h: 20 },
      { x: 550, y: 250, w: 150, h: 20 },
      { x: 750, y: 250, w: 200, h: 20 },
      { x: 330, y: 150, w: 150, h: 20 },
      { x: 250, y: 120, w: 50, h: 20 },
      { x: 170, y: 90, w: 50, h: 20 },
      { x: 50, y: 120, w: 70, h: 20 },
      { x: 800, y: 150, w: 200, h: 20 }
    ],
    ladders: [
      { x: 675, y: 550, h: 100 },
      { x: 740, y: 450, h: 100 },
      { x: 340, y: 350, h: 100 },
      { x: 590, y: 350, h: 100 },
      { x: 740, y: 350, h: 100 },
      { x: 420, y: 250, h: 100 },
      { x: 800, y: 250, h: 100 },
      { x: 240, y: 150, h: 100 },
      { x: 750, y: 150, h: 100 },
      { x: 70, y: 330, h: 120 },
      { x: 200, y: 330, h: 120 },
      { x: 205, y: 450, h: 120 },
      { x: 473.5, y: 200, h: 280 },
      { x: 820, y: 230, h: 160 }
    ],
    enemies: [
      { type: 'escuder', variant: 2, x: 700, y: 500 },
      { type: 'escuder', variant: 2, x: 1300, y: 500 },
      { type: 'ocell', variant: 0, x: 730, y: 323 },
      { type: 'ocell', variant: 0, x: 530, y: 300 },
      { type: 'ocell', variant: 0, x: 130, y: 312 },
      { type: 'ocell', variant: 0, x: 730, y: 1123 },
      { type: 'ocell', variant: 0, x: 1560, y: 100 },
      { type: 'ocell', variant: 0, x: 1030, y: 112 },
      { type: 'escuder', variant: 1, x: 900, y: 500, v: -5 },
      { type: 'escuder', variant: 1, x: 1300, y: 500, v: -5 },
      { type: 'escuder', variant: 1, x: 400, y: 500, v: -5 },
      { type: 'ocell', variant: 2, x: 800, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 850, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 900, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 1300, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 1350, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 1400, y: 260, v: -15 }
    ],
    items: [
      { type: 'arma', weapon: 2, x: 600, y: 410 },
      { type: 'arma', weapon: 0, x: 650, y: 230 },
      { type: 'armor', x: 880, y: 415 },
      { type: 'armor', x: 390, y: 520 },
      { type: 'armor', x: 60, y: 90 },
      { type: 'armor', x: 910, y: 360 }
    ],
    keys: [
      { x: 110, y: 320, id: 0 },
      { x: 900, y: 310, id: 1 },
      { x: 920, y: 220, id: 2 }
    ],
    doors: [
      { x: 850, y: 50, w: 100, h: 105, targetLevel: 4 }
    ],
    startY: 500
  },
  {
    id: 5,
    name: 'Astaroth\'s Castle',
    bg: 'bg5',
    width: 5000,
    platforms: [
      { x: 0, y: 550, w: 1000, h: 50 },
      { x: 200, y: 450, w: 100, h: 20 },
      { x: 55, y: 330, w: 200, h: 20 },
      { x: 30, y: 210, w: 220, h: 20 },
      { x: 305, y: 145, w: 80, h: 20 },
      { x: 620, y: 145, w: 80, h: 20 },
      { x: 446, y: 480, w: 105, h: 20 },
      { x: 446, y: 200, w: 105, h: 20 },
      { x: 690, y: 390, w: 310, h: 20 },
      { x: 800, y: 230, w: 80, h: 20 }
    ],
    ladders: [
      { x: 240, y: 550, h: 100 },
      { x: 750, y: 550, h: 160 },
      { x: 205, y: 450, h: 120 },
      { x: 70, y: 330, h: 120 },
      { x: 200, y: 330, h: 120 },
      { x: 473.5, y: 200, h: 280 },
      { x: 820, y: 230, h: 160 }
    ],
    enemies: [
      { type: 'escuder', variant: 1, x: 900, y: 500, v: -5 },
      { type: 'escuder', variant: 1, x: 1300, y: 500, v: -5 },
      { type: 'escuder', variant: 1, x: 400, y: 500, v: -5 },
      { type: 'ocell', variant: 2, x: 800, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 850, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 900, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 1300, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 1350, y: 260, v: -15 },
      { type: 'ocell', variant: 2, x: 1400, y: 260, v: -15 }
    ],
    items: [
      { type: 'arma', weapon: 4, x: 570, y: 515 },
      { type: 'arma', weapon: 2, x: 330, y: 120 },
      { type: 'armor', x: 390, y: 520 },
      { type: 'armor', x: 910, y: 360 }
    ],
    keys: [
      { x: 493, y: 155, id: 0 },
      { x: 125, y: 290, id: 1 },
      { x: 490, y: 510, id: 2 }
    ],
    doors: [
      { x: 880, y: 470, w: 80, h: 80, targetLevel: 5 }
    ],
    startY: 500
  }
]

export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
  }

  init(data) {
    this.currentLevel = data.level || 1
    this.weapon = data.weapon || 0
    this.lives = data.lives || 3
    this.score = data.score || 0
  }

  create() {
    const level = LEVELS[this.currentLevel - 1]
    this.levelData = level
    this.worldWidth = level.width
    this.keysCollected = []
    this.doorUnlocked = false
    
    // Background
    this.bg = this.add.tileSprite(0, 0, this.worldWidth, 720, level.bg)
    this.bg.setOrigin(0, 0).setScrollFactor(0).setDepth(-10)

    // Platforms (static physics)
    this.platforms = this.physics.add.staticGroup()
    level.platforms.forEach(p => {
      const plat = this.platforms.create(p.x + p.w/2, p.y + p.h/2, 'platform')
      plat.setDisplaySize(p.w, p.h)
      plat.refreshBody()
      plat.setVisible(true)
    })

    // Ground
    this.groundBody = this.platforms.create(this.worldWidth/2, 704, 'ground')
    this.groundBody.setDisplaySize(this.worldWidth, 64)
    this.groundBody.refreshBody()
    this.groundBody.setVisible(false)

    // Ladders
    this.ladders = this.physics.add.staticGroup()
    level.ladders.forEach(l => {
      const lad = this.ladders.create(l.x, l.y - l.h/2, 'ladder')
      lad.setDisplaySize(24, l.h)
      lad.setOrigin(0.5, 1)
      lad.refreshBody()
      lad.body.setSize(24, l.h)
    })

    // Player
    this.player = new Player(this, 50, level.startY, this.weapon)
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1)
    this.cameras.main.setBounds(0, 0, this.worldWidth, 720)
    this.cameras.main.setDeadzone(300, 200)

    // Enemies
    this.enemies = this.physics.add.group()
    level.enemies.forEach(e => {
      const enemy = this.createEnemy(e)
      if (enemy) this.enemies.add(enemy)
    })

    // Items (weapons, armor)
    this.items = this.physics.add.group()
    level.items.forEach(i => {
      const item = this.createItem(i)
      if (item) this.items.add(item)
    })

    // Keys
    this.keys = this.physics.add.group()
    level.keys.forEach(k => {
      const key = new Key(this, k.x, k.y, k.id)
      this.keys.add(key)
    })

    // Doors
    this.doors = this.physics.add.staticGroup()
    level.doors.forEach(d => {
      const door = this.doors.create(d.x + d.w/2, d.y + d.h/2, 'door')
      door.setDisplaySize(d.w, d.h)
      door.refreshBody()
      door.targetLevel = d.targetLevel
      door.setVisible(true)
    })

    // Collisions
    this.physics.add.collider(this.player, this.platforms)
    this.physics.add.collider(this.player, this.groundBody)
    this.physics.add.collider(this.enemies, this.platforms)
    this.physics.add.collider(this.enemies, this.groundBody)
    this.physics.add.collider(this.items, this.platforms)
    this.physics.add.collider(this.items, this.groundBody)
    
    // Overlaps
    this.physics.add.overlap(this.player, this.ladders, this.onLadder, null, this)
    this.physics.add.overlap(this.player, this.items, this.collectItem, null, this)
    this.physics.add.overlap(this.player, this.keys, this.collectKey, null, this)
    this.physics.add.overlap(this.player, this.doors, this.enterDoor, null, this)
    this.physics.add.overlap(this.player.projectiles, this.enemies, this.hitEnemy, null, this)
    this.physics.add.overlap(this.enemies, this.player, this.hitPlayer, null, this)
    this.physics.add.overlap(this.player.meleeHitbox, this.enemies, this.hitEnemyMelee, null, this)

    // Input
    this.cursors = this.input.keyboard.createCursorKeys()
    this.keysWASD = this.input.keyboard.addKeys('W,A,S,D,SPACE,SHIFT')
    this.setupTouchControls()

    // Game state
    this.gameOver = false
    this.levelComplete = false
    this.invulnerable = false
    this.invulnTimer = 0

    // Events for UI
    this.events.emit('level-start', { level: this.currentLevel, name: level.name })
    this.events.emit('lives-changed', this.lives)
    this.events.emit('weapon-changed', this.weapon)
    this.events.emit('score-changed', this.score)
    this.events.emit('keys-changed', { collected: 0, total: level.keys.length })
  }

  createEnemy(data) {
    switch (data.type) {
      case 'zombi':
        return new Zombi(this, data.x, data.y)
      case 'goblin':
        return new Goblin(this, data.x, data.y)
      case 'ocell':
        return new Ocell(this, data.x, data.y, data.variant || 0, data.v || -5)
      case 'escuder':
        return new Escuder(this, data.x, data.y, data.variant || 0, data.v || 0)
      case 'saltarin':
        return new Saltarin(this, data.x, data.y)
    }
    return null
  }

  createItem(data) {
    switch (data.type) {
      case 'arma':
        return new WeaponPickup(this, data.x, data.y, data.weapon)
      case 'armor':
        return new ArmorPickup(this, data.x, data.y)
    }
    return null
  }

  onLadder(player, ladder) {
    player.onLadder = true
    player.currentLadder = ladder
  }

  collectItem(player, item) {
    if (item.type === 'weapon') {
      player.setWeapon(item.weaponId)
      this.weapon = item.weaponId
      this.events.emit('weapon-changed', this.weapon)
    } else if (item.type === 'armor') {
      player.addArmor()
      this.events.emit('armor-changed', player.armorLevel)
    }
    this.events.emit('pickup', { x: item.x, y: item.y })
    item.destroy()
    this.sound.play('pickup')
  }

  collectKey(player, key) {
    this.keysCollected.push(key.id)
    this.events.emit('keys-changed', { 
      collected: this.keysCollected.length, 
      total: this.levelData.keys.length 
    })
    key.destroy()
    this.sound.play('pickup')
  }

  enterDoor(player, door) {
    if (door.targetLevel === 5 || this.keysCollected.length >= this.levelData.keys.length) {
      this.completeLevel(door.targetLevel)
    }
  }

  hitEnemy(projectile, enemy) {
    projectile.destroy()
    const killed = enemy.takeDamage(projectile.damage)
    if (killed) {
      this.score += enemy.scoreValue
      this.events.emit('score-changed', this.score)
      // Drop weapon sometimes
      if (Math.random() < 0.3) {
        const pickup = new WeaponPickup(this, enemy.x, enemy.y, Phaser.Math.Between(0, 4))
        this.items.add(pickup)
      }
    }
  }

  hitEnemyMelee(hitbox, enemy) {
    const killed = enemy.takeDamage(hitbox.damage)
    if (killed) {
      this.score += enemy.scoreValue
      this.events.emit('score-changed', this.score)
      if (Math.random() < 0.3) {
        const pickup = new WeaponPickup(this, enemy.x, enemy.y, Phaser.Math.Between(0, 4))
        this.items.add(pickup)
      }
    }
  }

  hitPlayer(player, enemy) {
    if (this.invulnerable || player.invulnerable) return
    this.playerHit(enemy.damage || 1)
  }

  playerHit(damage) {
    this.invulnerable = true
    this.invulnTimer = this.time.now + 2000
    this.player.takeDamage(damage)
    this.lives = this.player.lives
    this.events.emit('lives-changed', this.lives)
    this.events.emit('player-hit')
    this.cameras.main.shake(100, 0.01)
    this.sound.play('hurt')
    
    if (this.lives <= 0) {
      this.gameOver = true
      this.events.emit('game-over')
    }
  }

  completeLevel(nextLevel) {
    this.levelComplete = true
    this.player.freeze()
    
    // Bonus score
    const bonus = this.currentLevel * 1000
    this.score += bonus
    this.events.emit('score-changed', this.score)
    this.events.emit('level-complete', { level: this.currentLevel, bonus })
    
    this.time.delayedCall(3000, () => {
      if (nextLevel <= 5) {
        this.scene.start('MainScene', { 
          level: nextLevel, 
          weapon: this.weapon, 
          lives: this.lives, 
          score: this.score 
        })
      } else {
        this.events.emit('game-won', { score: this.score })
      }
    })
  }

  update() {
    if (this.gameOver || this.levelComplete) return

    // Handle invulnerability
    if (this.invulnerable && this.time.now > this.invulnTimer) {
      this.invulnerable = false
      this.player.clearTint()
    }

    // Update player
    this.player.update(this.cursors, this.keysWASD)

    // Update enemies
    this.enemies.getChildren().forEach(enemy => {
      if (enemy.active) enemy.update(this.player)
    })

    // Check fall death
    if (this.player.y > 750) {
      this.playerHit(999)
    }
  }

  setupTouchControls() {
    // Touch control handling for mobile
    this.touchInput = { left: false, right: false, up: false, down: false, jump: false, attack: false, special: false }
    
    document.querySelectorAll('.dpad-btn').forEach(btn => {
      const dir = btn.dataset.dir
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); this.touchInput[dir] = true })
      btn.addEventListener('touchend', (e) => { e.preventDefault(); this.touchInput[dir] = false })
      btn.addEventListener('mousedown', (e) => { e.preventDefault(); this.touchInput[dir] = true })
      btn.addEventListener('mouseup', (e) => { e.preventDefault(); this.touchInput[dir] = false })
    })
    document.querySelectorAll('.action-btn').forEach(btn => {
      const action = btn.dataset.action
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); this.touchInput[action] = true })
      btn.addEventListener('touchend', (e) => { e.preventDefault(); this.touchInput[action] = false })
      btn.addEventListener('mousedown', (e) => { e.preventDefault(); this.touchInput[action] = true })
      btn.addEventListener('mouseup', (e) => { e.preventDefault(); this.touchInput[action] = false })
    })
  }
}

// Player class
class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, weapon = 0) {
    super(scene, x, y, 'arthur', 'arthur_0')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    
    this.scene = scene
    this.weapon = weapon
    this.lives = 3
    this.armorLevel = 0
    this.score = 0
    this.invulnerable = false
    this.invulnTimer = 0
    
    this.setScale(1.5)
    this.setDepth(10)
    this.body.setSize(30, 50)
    this.body.setOffset(5, 10)
    this.body.setCollideWorldBounds(true)
    this.body.setGravityY(800)
    
    // Animation state
    this.facingRight = true
    this.onGround = false
    this.onLadder = false
    this.currentLadder = null
    this.isClimbing = false
    this.isAttacking = false
    this.isBending = false
    this.isJumping = false
    this.jumpCount = 0
    this.maxJumps = 2
    this.moveSpeed = 200
    this.jumpPower = 450
    this.climbSpeed = 150
    
    // Combat
    this.projectiles = scene.physics.add.group()
    this.meleeHitbox = null
    this.meleeCooldown = 0
    this.attackDamage = [1, 2, 2, 3, 4][weapon] || 1
    this.attackRange = [60, 50, 40, 50, 60][weapon] || 60
    
    // Input buffer
    this.inputBuffer = { left: false, right: false, up: false, down: false, jump: false, attack: false, special: false }
    
    this.play('arthur_idle_right')
  }

  update(cursors, wasd) {
    if (this.scene.gameOver || this.scene.levelComplete) return

    // Read input (keyboard + touch)
    const left = cursors.left.isDown || wasd.A.isDown || this.inputBuffer.left
    const right = cursors.right.isDown || wasd.D.isDown || this.inputBuffer.right
    const up = cursors.up.isDown || wasd.W.isDown || this.inputBuffer.up
    const down = cursors.down.isDown || wasd.S.isDown || this.inputBuffer.down
    const jumpPressed = Phaser.Input.Keyboard.JustDown(cursors.up) || Phaser.Input.Keyboard.JustDown(wasd.W) || Phaser.Input.Keyboard.JustDown(wasd.SPACE) || this.inputBuffer.jump
    const attackPressed = Phaser.Input.Keyboard.JustDown(cursors.space) || this.inputBuffer.attack
    const specialPressed = Phaser.Input.Keyboard.JustDown(wasd.SHIFT) || this.inputBuffer.special
    
    // Clear one-shot buffers
    this.inputBuffer.jump = false
    this.inputBuffer.attack = false
    this.inputBuffer.special = false

    // Ground check
    this.onGround = this.body.blocked.down || this.body.touching.down
    if (this.onGround) this.jumpCount = 0

    // Ladder climbing
    if (this.onLadder && this.currentLadder) {
      if (up && !this.isClimbing) {
        this.startClimbing()
      } else if (this.isClimbing) {
        this.handleClimbing(up, down)
        if (!this.onLadder) this.stopClimbing()
      }
    }

    if (!this.isClimbing && !this.isAttacking) {
      // Horizontal movement
      if (left && !right) {
        this.body.setVelocityX(-this.moveSpeed)
        this.facingRight = false
        if (this.onGround && !this.isBending) this.play('arthur_walk_left', true)
      } else if (right && !left) {
        this.body.setVelocityX(this.moveSpeed)
        this.facingRight = true
        if (this.onGround && !this.isBending) this.play('arthur_walk_right', true)
      } else {
        this.body.setVelocityX(0)
        if (this.onGround && !this.isBending && !this.isAttacking) {
          this.play(this.facingRight ? 'arthur_idle_right' : 'arthur_idle_left', true)
        }
      }

      // Bending
      if (down && this.onGround && !this.isClimbing) {
        if (!this.isBending) {
          this.isBending = true
          this.body.setSize(30, 25)
          this.body.setOffset(5, 35)
          this.play(this.facingRight ? 'arthur_bend_right' : 'arthur_bend_left', true)
        }
      } else if (this.isBending) {
        this.isBending = false
        this.body.setSize(30, 50)
        this.body.setOffset(5, 10)
      }

      // Jumping
      if (jumpPressed && (this.onGround || this.jumpCount < this.maxJumps)) {
        this.jump()
      }

      // Attack
      if (attackPressed && !this.isAttacking && this.meleeCooldown < this.scene.time.now) {
        this.meleeAttack()
      }

      // Special / Ranged attack
      if (specialPressed && !this.isAttacking && this.meleeCooldown < this.scene.time.now) {
        this.rangedAttack()
      }
    }

    // Update melee cooldown
    if (this.meleeHitbox) {
      this.meleeHitbox.lifetime--
      if (this.meleeHitbox.lifetime <= 0) {
        this.meleeHitbox.destroy()
        this.meleeHitbox = null
        this.isAttacking = false
      }
    }

    // Update projectiles
    this.projectiles.getChildren().forEach(p => {
      if (p.active) p.update()
    })

    // Update animations
    this.updateAnimations()
  }

  startClimbing() {
    this.isClimbing = true
    this.body.setAllowGravity(false)
    this.body.setVelocity(0, 0)
    this.body.setSize(24, 50)
    this.setPosition(this.currentLadder.x, this.y)
  }

  handleClimbing(up, down) {
    if (up) this.body.setVelocityY(-this.climbSpeed)
    else if (down) this.body.setVelocityY(this.climbSpeed)
    else this.body.setVelocityY(0)
    this.play('arthur_climb', true)
  }

  stopClimbing() {
    this.isClimbing = false
    this.body.setAllowGravity(true)
    this.body.setSize(30, 50)
    this.body.setOffset(5, 10)
  }

  jump() {
    this.body.setVelocityY(-this.jumpPower)
    this.jumpCount++
    this.onGround = false
    this.play(this.facingRight ? 'arthur_jump_right' : 'arthur_jump_left', true)
    this.scene.sound.play('jump', { volume: 0.3 })
  }

  meleeAttack() {
    this.isAttacking = true
    this.meleeCooldown = this.scene.time.now + 400
    
    const animKey = this.facingRight ? 'arthur_melee_right' : 'arthur_melee_left'
    this.play(animKey, true)
    
    // Create melee hitbox
    const range = this.attackRange
    const x = this.facingRight ? this.x + range/2 : this.x - range/2
    const y = this.y - 10
    
    this.meleeHitbox = this.scene.add.zone(x, y, range, 40)
    this.scene.physics.add.existing(this.meleeHitbox)
    this.meleeHitbox.body.setAllowGravity(false)
    this.meleeHitbox.body.setImmovable(true)
    this.meleeHitbox.damage = this.attackDamage
    this.meleeHitbox.lifetime = 10
    this.meleeHitbox.setDepth(15)
    
    // Visual effect
    const slash = this.scene.add.graphics()
    slash.lineStyle(4, this.facingRight ? 0x4ade80 : 0xffd700, 1)
    slash.beginPath()
    slash.moveTo(x - this.facingRight * range/2, y)
    slash.lineTo(x + this.facingRight * range/2, y - 20)
    slash.lineTo(x + this.facingRight * range/2, y + 20)
    slash.closePath()
    slash.fillPath()
    slash.setDepth(15)
    this.scene.tweens.add({
      targets: slash,
      alpha: 0,
      scale: 1.5,
      duration: 100,
      onComplete: () => slash.destroy()
    })
    
    this.scene.sound.play('attack', { volume: 0.4 })
  }

  rangedAttack() {
    this.isAttacking = true
    this.meleeCooldown = this.scene.time.now + 500
    
    const animKey = this.facingRight ? 'arthur_shoot_right' : 'arthur_shoot_left'
    this.play(animKey, true)
    
    // Create projectile after short delay
    this.scene.time.delayedCall(100, () => {
      const proj = new Projectile(this.scene, 
        this.facingRight ? this.x + 30 : this.x - 30, 
        this.y - 10, 
        this.facingRight ? 1 : -1, 
        this.weapon,
        this.attackDamage
      )
      this.projectiles.add(proj)
      this.scene.physics.add.existing(proj)
    })
    
    this.scene.sound.play('attack', { volume: 0.4 })
  }

  takeDamage(amount) {
    this.lives -= amount
    this.setTint(0xff0000)
    this.scene.time.delayedCall(200, () => this.clearTint())
    this.body.setVelocityX(this.facingRight ? -300 : 300)
    this.body.setVelocityY(-200)
  }

  setWeapon(weaponId) {
    this.weapon = weaponId
    this.attackDamage = [1, 2, 2, 3, 4][weaponId] || 1
    this.attackRange = [60, 50, 40, 50, 60][weaponId] || 60
  }

  addArmor() {
    this.armorLevel = Math.min(this.armorLevel + 1, 3)
  }

  freeze() {
    this.body.setVelocity(0, 0)
    this.body.setAllowGravity(false)
  }

  updateAnimations() {
    if (this.isClimbing) return
    if (this.isAttacking) return
    if (!this.onGround && !this.isClimbing) {
      this.play(this.facingRight ? 'arthur_jump_right' : 'arthur_jump_left', true)
    }
  }
}

// Projectile class
class Projectile extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, direction, weaponType, damage) {
    super(scene, x, y, `arma${weaponType}`)
    this.scene = scene
    this.direction = direction
    this.weaponType = weaponType
    this.damage = damage
    this.speed = [400, 500, 300, 350, 450][weaponType] || 400
    this.gravity = [false, false, true, true, false][weaponType] || false
    this.setScale(1)
    this.setDepth(8)
    this.setFlipX(direction < 0)
    scene.physics.world.enable(this)
    this.body.setAllowGravity(this.gravity)
    this.body.setVelocity(this.speed * direction, this.gravity ? -150 : 0)
    this.body.setSize(this.width * 0.8, this.height * 0.8)
    this.lifetime = 3000
    this.spawnTime = scene.time.now
  }

  update() {
    if (this.scene.time.now - this.spawnTime > this.lifetime) {
      this.destroy()
      return
    }
    if (this.x < this.scene.cameras.main.scrollX - 100 || 
        this.x > this.scene.cameras.main.scrollX + this.scene.cameras.main.width + 100) {
      this.destroy()
    }
    // Arc for axe and fire
    if ([2, 3].includes(this.weaponType) && this.body) {
      this.body.velocityY += 30
    }
  }
}

// Enemy classes
class Zombi extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'zombi', 'zombi_0')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setSize(32, 56).setOffset(4, 10)
    this.body.setCollideWorldBounds(true)
    this.body.setGravityY(800)
    this.setScale(1.5)
    this.setDepth(5)
    this.health = 1
    this.maxHealth = 1
    this.speed = 60
    this.damage = 1
    this.scoreValue = 100
    this.patrolLeft = x - 200
    this.patrolRight = x + 200
    this.direction = -1
    this.animFrame = 0
    this.animTimer = 0
    this.play('zombi_walk')
  }

  update(player) {
    if (!this.active) return
    this.body.setVelocityX(this.direction * this.speed)
    if (this.x <= this.patrolLeft) this.direction = 1
    else if (this.x >= this.patrolRight) this.direction = -1
    this.setFlipX(this.direction > 0)
  }

  takeDamage(amount) {
    this.health -= amount
    this.setTint(0xff0000)
    this.scene.time.delayedCall(100, () => this.clearTint())
    if (this.health <= 0) {
      this.destroy()
      return true
    }
    return false
  }
}

class Goblin extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'goblin', 'goblin_0')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setSize(64, 80).setOffset(8, 16)
    this.body.setCollideWorldBounds(true)
    this.body.setGravityY(800)
    this.setScale(1.5)
    this.setDepth(5)
    this.health = 5
    this.maxHealth = 5
    this.speed = 40
    this.damage = 2
    this.scoreValue = 300
    this.patrolLeft = x - 300
    this.patrolRight = x + 300
    this.direction = -1
    this.play('goblin_walk')
  }

  update(player) {
    if (!this.active) return
    this.body.setVelocityX(this.direction * this.speed)
    if (this.x <= this.patrolLeft) this.direction = 1
    else if (this.x >= this.patrolRight) this.direction = -1
    this.setFlipX(this.direction > 0)
  }

  takeDamage(amount) {
    this.health -= amount
    this.setTint(0xff0000)
    this.scene.time.delayedCall(100, () => this.clearTint())
    if (this.health <= 0) {
      this.destroy()
      return true
    }
    return false
  }
}

class Ocell extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, variant = 0, velocity = -5) {
    const types = ['bat', 'blue', 'red', 'mayfly', 'petite']
    const type = types[variant] || 'bat'
    super(scene, x, y, type, `${type}_0`)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setAllowGravity(false)
    this.body.setVelocityX(velocity)
    this.setScale(2)
    this.setDepth(5)
    this.health = variant === 2 ? 3 : 1
    this.damage = 1
    this.scoreValue = [50, 100, 200, 150, 80][variant] || 100
    this.variant = variant
    this.animFrame = 0
    this.animTimer = 0
    this.play(`${type}_fly`)
  }

  update(player) {
    if (!this.active) return
    // Simple flying pattern
    if (this.variant === 3) { // Mayfly - vertical oscillation
      this.body.velocityY = Math.sin(this.scene.time.now / 500) * 100
    }
    if (this.x < -50 || this.x > this.scene.worldWidth + 50) {
      this.destroy()
    }
  }

  takeDamage(amount) {
    this.health -= amount
    this.setTint(0xff0000)
    this.scene.time.delayedCall(100, () => this.clearTint())
    if (this.health <= 0) {
      this.destroy()
      return true
    }
    return false
  }
}

class Escuder extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, variant = 0, velocity = 0) {
    super(scene, x, y, 'escuder', 'escuder_0')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setSize(40, 50).setOffset(5, 10)
    this.body.setCollideWorldBounds(true)
    this.body.setGravityY(800)
    this.setScale(1.5)
    this.setDepth(5)
    this.variant = variant
    this.health = [3, 5, 2, 2][variant] || 3
    this.damage = [1, 2, 2, 2][variant] || 1
    this.scoreValue = [150, 300, 200, 200][variant] || 150
    this.speed = velocity || 80
    this.direction = velocity < 0 ? -1 : 1
    this.play('escuder_walk')
  }

  update(player) {
    if (!this.active) return
    this.body.setVelocityX(this.direction * this.speed)
    if (this.x <= 50) this.direction = 1
    else if (this.x >= this.scene.worldWidth - 50) this.direction = -1
    this.setFlipX(this.direction > 0)
  }

  takeDamage(amount) {
    this.health -= amount
    this.setTint(0xff0000)
    this.scene.time.delayedCall(100, () => this.clearTint())
    if (this.health <= 0) {
      this.destroy()
      return true
    }
    return false
  }
}

class Saltarin extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'saltarin', 'saltarin_0')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setSize(24, 40).setOffset(3, 15)
    this.body.setCollideWorldBounds(true)
    this.body.setGravityY(800)
    this.setScale(2)
    this.setDepth(5)
    this.health = 2
    this.damage = 1
    this.scoreValue = 150
    this.jumpTimer = 0
    this.play('saltarin_jump')
  }

  update(player) {
    if (!this.active) return
    if (this.body.blocked.down && this.scene.time.now > this.jumpTimer) {
      this.body.setVelocityY(-400)
      this.body.setVelocityX(Phaser.Math.Between(-100, 100))
      this.jumpTimer = this.scene.time.now + Phaser.Math.Between(1000, 3000)
    }
  }

  takeDamage(amount) {
    this.health -= amount
    this.setTint(0xff0000)
    this.scene.time.delayedCall(100, () => this.clearTint())
    if (this.health <= 0) {
      this.destroy()
      return true
    }
    return false
  }
}

// Pickup classes
class WeaponPickup extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, weaponId) {
    super(scene, x, y, `arma${weaponId}`)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setAllowGravity(true)
    this.body.setVelocityY(-100)
    this.body.setVelocityX(Phaser.Math.Between(-50, 50))
    this.body.setCollideWorldBounds(true)
    this.setScale(1)
    this.setDepth(8)
    this.type = 'weapon'
    this.weaponId = weaponId
    this.scene.tweens.add({
      targets: this,
      y: y - 20,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    })
  }
}

class ArmorPickup extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'armor')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setAllowGravity(true)
    this.body.setVelocityY(-150)
    this.body.setCollideWorldBounds(true)
    this.setScale(1)
    this.setDepth(8)
    this.type = 'armor'
    this.scene.tweens.add({
      targets: this,
      y: y - 20,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    })
  }
}

class Key extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, id) {
    super(scene, x, y, 'key')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.body.setAllowGravity(false)
    this.body.setImmovable(true)
    this.setScale(1.5)
    this.setDepth(8)
    this.id = id
    this.scene.tweens.add({
      targets: this,
      y: y - 10,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    })
  }
}

// Animation creation (called after textures are ready)
function createAnimations(scene) {
  // Arthur animations
  scene.anims.create({ key: 'arthur_idle_right', frames: [{ key: 'arthur', frame: 'arthur_0' }], frameRate: 1, repeat: -1 })
  scene.anims.create({ key: 'arthur_idle_left', frames: [{ key: 'arthur', frame: 'arthur_1' }], frameRate: 1, repeat: -1 })
  scene.anims.create({ key: 'arthur_walk_right', frames: [2,3,4,5].map(i => ({ key: 'arthur', frame: `arthur_${i}` })), frameRate: 10, repeat: -1 })
  scene.anims.create({ key: 'arthur_walk_left', frames: [6,7,8,9].map(i => ({ key: 'arthur', frame: `arthur_${i}` })), frameRate: 10, repeat: -1 })
  scene.anims.create({ key: 'arthur_jump_right', frames: [{ key: 'arthur', frame: 'arthur_10' }], frameRate: 1, repeat: 0 })
  scene.anims.create({ key: 'arthur_jump_left', frames: [{ key: 'arthur', frame: 'arthur_11' }], frameRate: 1, repeat: 0 })
  scene.anims.create({ key: 'arthur_bend_right', frames: [{ key: 'arthur', frame: 'arthur_12' }], frameRate: 1, repeat: 0 })
  scene.anims.create({ key: 'arthur_bend_left', frames: [{ key: 'arthur', frame: 'arthur_13' }], frameRate: 1, repeat: 0 })
  scene.anims.create({ key: 'arthur_melee_right', frames: [14,15].map(i => ({ key: 'arthur', frame: `arthur_${i}`, duration: 80 })), frameRate: 20, repeat: 0 })
  scene.anims.create({ key: 'arthur_melee_left', frames: [16,17].map(i => ({ key: 'arthur', frame: `arthur_${i}`, duration: 80 })), frameRate: 20, repeat: 0 })
  scene.anims.create({ key: 'arthur_shoot_right', frames: [{ key: 'arthur', frame: 'arthur_14' }], frameRate: 1, repeat: 0 })
  scene.anims.create({ key: 'arthur_shoot_left', frames: [{ key: 'arthur', frame: 'arthur_16' }], frameRate: 1, repeat: 0 })
  scene.anims.create({ key: 'arthur_hurt_right', frames: [{ key: 'arthur', frame: 'arthur_18' }], frameRate: 1, repeat: 0 })
  scene.anims.create({ key: 'arthur_hurt_left', frames: [{ key: 'arthur', frame: 'arthur_19' }], frameRate: 1, repeat: 0 })
  scene.anims.create({ key: 'arthur_die_right', frames: [20,21].map(i => ({ key: 'arthur', frame: `arthur_${i}`, duration: 150 })), frameRate: 7, repeat: 0 })
  scene.anims.create({ key: 'arthur_die_left', frames: [22,23].map(i => ({ key: 'arthur', frame: `arthur_${i}`, duration: 150 })), frameRate: 7, repeat: 0 })
  scene.anims.create({ key: 'arthur_climb', frames: [12,13].map(i => ({ key: 'arthur', frame: `arthur_${i}` })), frameRate: 5, repeat: -1 })

  // Enemy animations
  scene.anims.create({ key: 'zombi_walk', frames: [0,1].map(i => ({ key: 'zombi', frame: `zombi_${i}` })), frameRate: 4, repeat: -1 })
  scene.anims.create({ key: 'goblin_walk', frames: [0,1].map(i => ({ key: 'goblin', frame: `goblin_${i}` })), frameRate: 4, repeat: -1 })
  
  const birds = ['bat', 'blue', 'red', 'mayfly', 'petite']
  birds.forEach(b => {
    scene.anims.create({ key: `${b}_fly`, frames: [0,1].map(i => ({ key: b, frame: `${b}_${i}` })), frameRate: 6, repeat: -1 })
  })
  
  scene.anims.create({ key: 'escuder_walk', frames: [0,1].map(i => ({ key: 'escuder', frame: `escuder_${i}` })), frameRate: 6, repeat: -1 })
  scene.anims.create({ key: 'saltarin_jump', frames: [0,1].map(i => ({ key: 'saltarin', frame: `saltarin_${i}` })), frameRate: 4, repeat: -1 })
}

// Call animation creation in MainScene create()
// createAnimations(this)
