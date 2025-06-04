import React, { useState, useEffect } from 'react';
import './style/Project.css';

const categories = [
  {
    id: 'puzzle',
    name: 'Puzzle Games',
    games: [
      { id: 'puzzle1', title: 'Jigsaw Puzzle', description: 'Solve the jigsaw puzzle', component: () => <PuzzleGame /> },
      { id: 'puzzle2', title: 'Sudoku', description: 'Classic Sudoku game', component: () => <SudokuGame /> },
      { id: 'puzzle3', title: 'Tile Swap', description: 'Swap tiles to solve', component: () => <TileSwapGame /> },
      { id: 'puzzle4', title: 'Color Match', description: 'Match colors puzzle', component: () => <ColorMatchGame /> },
    ],
  },
  {
    id: 'arcade',
    name: 'Arcade Games',
    games: [
      { id: 'arcade1', title: 'Space Shooter', description: 'Shoot the aliens', component: () => <SpaceShooter /> },
      { id: 'arcade2', title: 'Flappy Bird', description: 'Avoid obstacles', component: () => <FlappyBird /> },
      { id: 'arcade3', title: 'Snake', description: 'Classic snake game', component: () => <SnakeGame /> },
      { id: 'arcade4', title: 'Breakout', description: 'Break the bricks', component: () => <BreakoutGame /> },
    ],
  },
  {
    id: 'memory',
    name: 'Memory Games',
    games: [
      { id: 'memory1', title: 'Match Pairs', description: 'Find matching pairs', component: () => <MatchPairs /> },
      { id: 'memory2', title: 'Simon Says', description: 'Repeat the sequence', component: () => <SimonSays /> },
      { id: 'memory3', title: 'Memory Grid', description: 'Remember grid pattern', component: () => <MemoryGrid /> },
      { id: 'memory4', title: 'Concentration', description: 'Focus and find pairs', component: () => <ConcentrationGame /> },
    ],
  },
  {
    id: 'quiz',
    name: 'Quiz Games',
    games: [
      { id: 'quiz1', title: 'General Quiz', description: 'Test your knowledge', component: () => <GeneralQuiz /> },
      { id: 'quiz2', title: 'Math Quiz', description: 'Solve math problems', component: () => <MathQuiz /> },
      { id: 'quiz3', title: 'Science Quiz', description: 'Science trivia', component: () => <ScienceQuiz /> },
      { id: 'quiz4', title: 'History Quiz', description: 'History questions', component: () => <HistoryQuiz /> },
    ],
  },
];

// Temporary placeholders for game components (replace with your actual game components)
const PuzzleGame = () => <div className="game-placeholder">Puzzle Game Placeholder</div>;
const SudokuGame = () => <div className="game-placeholder">Sudoku Placeholder</div>;
const TileSwapGame = () => <div className="game-placeholder">Tile Swap Placeholder</div>;
const ColorMatchGame = () => <div className="game-placeholder">Color Match Placeholder</div>;

const SpaceShooter = () => <div className="game-placeholder">Space Shooter Placeholder</div>;
const FlappyBird = () => <div className="game-placeholder">Flappy Bird Placeholder</div>;
const SnakeGame = () => <div className="game-placeholder">Snake Placeholder</div>;
const BreakoutGame = () => <div className="game-placeholder">Breakout Placeholder</div>;

const MatchPairs = () => <div className="game-placeholder">Match Pairs Placeholder</div>;
const SimonSays = () => <div className="game-placeholder">Simon Says Placeholder</div>;
const MemoryGrid = () => <div className="game-placeholder">Memory Grid Placeholder</div>;
const ConcentrationGame = () => <div className="game-placeholder">Concentration Placeholder</div>;

const GeneralQuiz = () => <div className="game-placeholder">General Quiz Placeholder</div>;
const MathQuiz = () => <div className="game-placeholder">Math Quiz Placeholder</div>;
const ScienceQuiz = () => <div className="game-placeholder">Science Quiz Placeholder</div>;
const HistoryQuiz = () => <div className="game-placeholder">History Quiz Placeholder</div>;

function Projects() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [activeGame, setActiveGame] = useState(null);
  const [animateCategory, setAnimateCategory] = useState(false);

  useEffect(() => {
    setAnimateCategory(true);
    const timeout = setTimeout(() => setAnimateCategory(false), 600);
    return () => clearTimeout(timeout);
  }, [activeCategory]);

  const selectedCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="projects-container">
      <h1 className="page-title">My Projects</h1>
<h1 className="page-title">This is AliCap</h1>

      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(cat.id);
              setActiveGame(null);
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className={`games-grid ${animateCategory ? 'fade-in' : ''}`}>
        {selectedCategory.games.map(game => (
          <div
            key={game.id}
            className={`game-card ${activeGame === game.id ? 'selected' : ''}`}
            onClick={() => setActiveGame(game.id)}
          >
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
