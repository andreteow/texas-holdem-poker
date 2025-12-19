# Texas Hold'em Poker Simulator

A fully playable Texas Hold'em poker simulator game with AI opponents built with vanilla JavaScript (ES6 modules).

## Features

- **Single-player vs AI**: Play against 2-6 AI opponents with realistic poker strategies
- **Texas Hold'em Rules**: Full implementation of standard Texas Hold'em poker rules
- **Realistic Betting**: Support for fold, check, call, raise, and all-in actions
- **Chip Management**: Track player stacks, blinds, and pot amounts
- **Professional UI**: Clean poker table interface with card display
- **No Backend Required**: Completely client-side application - works in any browser

## Game Features

- Pre-flop, flop, turn, and river betting rounds
- Automated pot calculation
- Small blind and big blind management
- AI opponent decision-making with multiple strategies
- Hand ranking and winner determination
- Configurable number of players

## Project Structure

```
texas-holdem-poker/
├── index.html          # Main HTML file
├── style.css           # Game styling
├── js/
│   ├── main.js         # Entry point and event handling
│   ├── Deck.js         # Card deck management
│   ├── Game.js         # Core game logic
│   └── UIManager.js    # User interface management
└── README.md          # This file
```

## How to Play

1. **Open the Game**: Simply open `index.html` in your web browser
2. **Starting Hand**: You'll be dealt two cards at the bottom of the table
3. **Make Actions**: Use the buttons to fold, check, call, or raise
4. **Betting Round**: Players take turns in order around the table
5. **Win**: Be the last player standing or have the best hand!

## Deployment to Netlify

### Option 1: Direct GitHub Connection (Recommended)

1. Go to [Netlify](https://netlify.com)
2. Sign up or log in
3. Click "Add new project" → "Import an existing project"
4. Select "GitHub" and authorize Netlify
5. Choose the `texas-holdem-poker` repository
6. Netlify will auto-detect this as a static site
7. Click "Deploy site"
8. Your game will be live at a Netlify URL within seconds!

### Option 2: Manual Deployment

1. Clone the repository:
   ```bash
   git clone https://github.com/andreteow/texas-holdem-poker.git
   cd texas-holdem-poker
   ```

2. Drag and drop the project folder to Netlify dashboard
3. Or use the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=.
   ```

## Local Development

Since this is a static site with ES6 modules, you need to run it on a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using Live Server (VS Code extension)
Open in Live Server
```

Then visit `http://localhost:8000` in your browser.

## Game Rules

### Hand Rankings (Highest to Lowest)
1. Royal Flush: A-K-Q-J-10, same suit
2. Straight Flush: Five consecutive cards, same suit
3. Four of a Kind: Four cards of same rank
4. Full House: Three of a kind + pair
5. Flush: Five cards of same suit
6. Straight: Five consecutive cards
7. Three of a Kind: Three cards of same rank
8. Two Pair: Two different pairs
9. One Pair: Two cards of same rank
10. High Card: Highest single card

### Betting Rules
- **Fold**: Discard your hand and exit the round
- **Check**: Pass without betting (only if current bet is 0)
- **Call**: Match the current bet
- **Raise**: Increase the bet amount
- **All-in**: Bet all remaining chips

## AI Opponent Strategy

AI opponents use a simplified but effective strategy:
- Evaluate hand strength based on current cards
- Consider pot odds for betting decisions
- Different playing styles (aggressive, conservative)
- Adapt to game flow and player actions

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling and layout
- **JavaScript ES6**: Modules, classes, and modern syntax
- **No Dependencies**: Pure vanilla JavaScript

## Browser Support

- Chrome/Edge (v60+)
- Firefox (v55+)
- Safari (v11+)
- Any modern browser with ES6 module support

## Future Enhancements

- [ ] Hand history and statistics tracking
- [ ] Different game variants (Omaha, 5-Card Draw)
- [ ] Tournament mode
- [ ] Multiplayer online (with WebSockets)
- [ ] Sound effects and animations
- [ ] Mobile responsive design improvements
- [ ] Customizable AI difficulty levels
- [ ] Player profiles and settings

## License

MIT License - Feel free to use this for personal or commercial projects

## Author

Built with Gemini + Manual Development

## Deployment URL

Once deployed to Netlify, your game will be accessible at: `https://your-netlify-url.netlify.app`

---

**Enjoy your game! May the best poker hand win! 🎰♠️♥️♣️♦️**
