import Phaser from 'phaser'
import { BootScene } from './scenes/BootScene.js'
import { MainScene } from './scenes/MainScene.js'
import { UIScene } from './scenes/UIScene.js'

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: false
    }
  },
  scene: [BootScene, MainScene, UIScene],
  pixelArt: true,
  roundPixels: true,
  antialias: false
}

try {
  console.log('Creating Phaser.Game instance...')
  const game = new Phaser.Game(config)
  console.log('Phaser.Game created successfully')
  window.game = game
} catch (err) {
  console.error('PHASER INIT FAILED:', err)
  document.getElementById('loading').innerHTML = 
    '<div style="color: #ff4444;">Failed to start game: ' + err.message + '</div>'
}
