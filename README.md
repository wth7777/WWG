# WWG - Ghosts 'n Goblins Clone

A faithful web-based recreation of the classic 1985 arcade game **Ghosts 'n Goblins**, built with Phaser 3 and Vite.

## Features

- **5 Complete Levels** based on the original arcade progression:
  1. **Cemetery in the Forest** - Zombies, Jumpers, Shield Bearers
  2. **Frozen World** - Bats, Petites
  3. **Goblin Town** - Goblins, MayFlies, Jumpers
  4. **Underground Passage** - Death, Bats, Shield Bearers
  5. **Astaroth's Castle** - Pigs, Reds, Final Boss

- **Authentic Gameplay Mechanics**:
  - Arthur with 19-frame animations (idle, walk, jump, bend, shoot, hurt, die)
  - 5 Weapons: Lance, Sword, Fire, Axe, Magic
  - Double-jump, ladder climbing, crouching
  - Armor pickups (3 levels)
  - Keys and doors progression

- **Enemy Types** (faithful to original):
  - **Zombi** - Basic ground enemy, 1 HP
  - **Goblin** - Large, 5 HP, turns at edges
  - **Ocell/Birds** - Bat, Blue, Red, MayFly, Petite variants
  - **Escuder** - Shield bearers: Woody, Cerdo (Pig), Mort
  - **Saltarin** - Jumping enemies

- **Mobile-Friendly Touch Controls** - D-pad + action buttons
- **Procedural Graphics** - No external assets required, runs immediately
- **Full HUD** - Lives, Score, Weapon, Keys, Armor, Level

## Play Online

Once deployed to GitHub Pages: `https://<username>.github.io/WWG/`

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to GitHub Pages

1. Create a new repository named `WWG` on GitHub
2. Push the `gh-pages` branch:

```bash
git remote add origin https://github.com/<your-username>/WWG.git
git push -u origin gh-pages --force
```

3. Enable GitHub Pages in repository settings:
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`
   - Save

4. Access at: `https://<username>.github.io/WWG/`

## Controls

| Action | Keyboard | Touch |
|--------|----------|-------|
| Move Left | ← / A | ◀ button |
| Move Right | → / D | ▶ button |
| Jump | ↑ / W / Space | JUMP button |
| Crouch | ↓ / S | ▼ button |
| Climb Ladder | ↑ / ↓ near ladder | ▲ / ▼ near ladder |
| Melee Attack | Space | ATTACK button |
| Ranged Attack | Shift | MAGIC button |

## Technical Details

- **Engine**: Phaser 3.70+
- **Build Tool**: Vite 5
- **Language**: ES Modules (JavaScript)
- **Rendering**: WebGL with Canvas fallback
- **Physics**: Arcade Physics
- **Scale Manager**: Phaser.Scale.FIT (responsive)
- **Pixel Art**: Round pixels, nearest-neighbor scaling

## Level Design

Based on the Python reference implementation (ericjimenezbarril/Gost_and_Goblins) with authentic enemy placement, platform layouts, and progression mechanics.

## Credits

- Original game: **Ghosts 'n Goblins** (Capcom, 1985)
- Reference implementations:
  - enzoam/game-lab-construct2-GhostsAndGoblinsClone (Construct 2)
  - ericjimenezbarril/Gost_and_Goblins (Python/tkinter)
- This implementation: **WWG** - Web-based Ghosts 'n Goblins
