
// 2.В модуле game импорт класса Character
// 3.Экспорт из модуля game класса Game в качестве дефолтного, 
// класса GameSavingData и функций readGameSaving и writeGameSaving
// 4.В модуле app.js одним импортом импортируйте Game, GameSavingData 
// и функции readGameSaving, writeGameSaving 
// (их при импорте переименуйте в loadGame и saveGame соответственно)

// Импорт из модуля domain класса Character
const Characte = require ('./domain.js');
// console.log (Characte)

class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }

//   Экспорт
module.exports= {
    Game,
    GameSavingData,
    readGameSaving,
    writeGameSaving
}
