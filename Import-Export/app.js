// 4.В модуле app.js одним импортом импортируйте Game, GameSavingData 
// и функции readGameSaving, writeGameSaving 
// (их при импорте переименуйте в loadGame и saveGame соответственно)

const {Game, GameSavingData, readGameSaving:loadGame, writeGameSaving:writeGameSaving} = require ('./game.js');
// console.log (Game);
// console.log (GameSavingData);
// console.log (loadGame);
// console.log (writeGameSaving);


const game = new Game();
game.start();