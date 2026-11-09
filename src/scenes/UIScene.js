import Phaser from 'phaser'

export class UIScene extends Phaser.Scene {
  constructor() {
    super('UIScene')
  }

  create() {
    this.setupHUD()
    this.setupEventListeners()
  }

  setupHUD() {
    const cam = this.cameras.main
    const width = cam.width
    const height = cam.height

    // Health hearts (top-left)
    this.hearts = []
    for (let i = 0; i < 3; i++) {
      const heart = this.add.image(20 + i * 30, 20, 'heart')
      heart.setScale(1.5).setScrollFactor(0).setDepth(100)
      this.hearts.push(heart)
    }

    // Score (top-center)
    this.scoreText = this.add.text(width / 2, 20, 'SCORE: 0', {
      fontSize: '24px',
      fontFamily: 'Courier New, monospace',
      color: '#FFD700',
      stroke: '#000000',
      strokeThickness: 4
    }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(100)

    // Weapon icon (top-right)
    this.weaponIcon = this.add.image(width - 50, 30, 'w_lance')
    this.weaponIcon.setScale(1.5).setScrollFactor(0).setDepth(100)

    // Keys collected (below score)
    this.keysText = this.add.text(width / 2, 55, 'KEYS: 0/0', {
      fontSize: '18px',
      fontFamily: 'Courier New, monospace',
      color: '#4ADE80',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5, 0).setScrollFactor(0).setDepth(100)

    // Level name (bottom-left)
    this.levelText = this.add.text(20, height - 40, 'LEVEL 1: CEMETERY', {
      fontSize: '16px',
      fontFamily: 'Courier New, monospace',
      color: '#FFFFFF',
      stroke: '#000000',
      strokeThickness: 3
    }).setScrollFactor(0).setDepth(100)

    // Armor indicator (bottom-right)
    this.armorText = this.add.text(width - 150, height - 40, 'ARMOR: 0', {
      fontSize: '16px',
      fontFamily: 'Courier New, monospace',
      color: '#C0C0C0',
      stroke: '#000000',
      strokeThickness: 3
    }).setScrollFactor(0).setDepth(100)

    // Game over / level complete overlay
    this.overlay = this.add.graphics()
    this.overlay.setDepth(200).setScrollFactor(0)
    this.overlayMessage = this.add.text(width / 2, height / 2, '', {
      fontSize: '48px',
      fontFamily: 'Courier New, monospace',
      color: '#4ADE80',
      stroke: '#000000',
      strokeThickness: 6
    }).setOrigin(0.5).setScrollFactor(0).setDepth(201)
    this.hideOverlay()
  }

  setupEventListeners() {
    const mainScene = this.scene.get('MainScene')
    if (!mainScene) return

    mainScene.events.on('lives-changed', (lives) => this.updateLives(lives))
    mainScene.events.on('score-changed', (score) => this.updateScore(score))
    mainScene.events.on('weapon-changed', (weapon) => this.updateWeapon(weapon))
    mainScene.events.on('keys-changed', (data) => this.updateKeys(data.collected, data.total))
    mainScene.events.on('level-start', (data) => this.updateLevel(data.level, data.name))
    mainScene.events.on('armor-changed', (level) => this.updateArmor(level))
    mainScene.events.on('player-hit', () => this.flashDamage())
    mainScene.events.on('level-complete', (data) => this.showLevelComplete(data))
    mainScene.events.on('game-over', () => this.showGameOver())
    mainScene.events.on('game-won', (data) => this.showGameWon(data))
    mainScene.events.on('pickup', (pos) => this.showPickupEffect(pos))
  }

  updateLives(lives) {
    this.hearts.forEach((heart, i) => {
      heart.setVisible(i < lives)
      if (i < lives) heart.setTint(0xFFFFFF)
    })
  }

  updateScore(score) {
    this.scoreText.setText(`SCORE: ${score.toString().padStart(6, '0')}`)
  }

  updateWeapon(weapon) {
    const icons = ['w_lance', 'w_sword', 'w_fire', 'w_axe', 'w_magic']
    const names = ['LANCE', 'SWORD', 'FIRE', 'AXE', 'MAGIC']
    if (icons[weapon]) {
      this.weaponIcon.setTexture(icons[weapon])
    }
  }

  updateKeys(collected, total) {
    this.keysText.setText(`KEYS: ${collected}/${total}`)
  }

  updateLevel(level, name) {
    this.levelText.setText(`LEVEL ${level}: ${name.toUpperCase()}`)
  }

  updateArmor(level) {
    this.armorText.setText(`ARMOR: ${level}`)
  }

  flashDamage() {
    this.cameras.main.flash(100, 255, 0, 0, false)
  }

  showLevelComplete(data) {
    this.overlay.fillStyle(0x000000, 0.85)
    this.overlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height)
    this.overlayMessage.setText(`LEVEL ${data.level} COMPLETE!\nBONUS: +${data.bonus}`)
    this.overlayMessage.setVisible(true)
    this.overlay.setVisible(true)
  }

  showGameOver() {
    this.overlay.fillStyle(0x000000, 0.9)
    this.overlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height)
    this.overlayMessage.setColor('#FF4444')
    this.overlayMessage.setText('GAME OVER\nPRESS ENTER TO RESTART')
    this.overlayMessage.setVisible(true)
    this.overlay.setVisible(true)
    
    this.input.keyboard.once('keydown-ENTER', () => {
      this.hideOverlay()
      this.scene.start('MainScene', { level: 1, weapon: 0, lives: 3, score: 0 })
    })
  }

  showGameWon(data) {
    this.overlay.fillStyle(0x000000, 0.9)
    this.overlay.fillRect(0, 0, this.cameras.main.width, this.cameras.main.height)
    this.overlayMessage.setColor('#FFD700')
    this.overlayMessage.setText(`PRINCESS RESCUED!\nFINAL SCORE: ${data.score}\n\nPRESS ENTER TO PLAY AGAIN`)
    this.overlayMessage.setVisible(true)
    this.overlay.setVisible(true)
    
    this.input.keyboard.once('keydown-ENTER', () => {
      this.hideOverlay()
      this.scene.start('MainScene', { level: 1, weapon: 0, lives: 3, score: 0 })
    })
  }

  showPickupEffect(pos) {
    const cam = this.cameras.main
    const screenX = pos.x - cam.scrollX
    const screenY = pos.y - cam.scrollY
    const text = this.add.text(screenX, screenY, '+ITEM', {
      fontSize: '18px',
      fontFamily: 'Courier New, monospace',
      color: '#4ADE80',
      stroke: '#000000',
      strokeThickness: 3
    }).setOrigin(0.5).setDepth(150)
    this.tweens.add({
      targets: text,
      y: screenY - 50,
      alpha: 0,
      duration: 1000,
      onComplete: () => text.destroy()
    })
  }

  hideOverlay() {
    this.overlay.setVisible(false)
    this.overlayMessage.setVisible(false)
    this.overlayMessage.setColor('#4ADE80')
  }
}
