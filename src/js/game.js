// 2.В модуле game импорт класса Character
// 3.Экспорт из модуля game класса Game в качестве дефолтного,
// класса GameSavingData и функций readGameSaving и writeGameSaving

// import sum from './basic';
 import Character from './domain';


 export default class Game {
    start() {
      console.log('game started');
    }
  }
  
  export class GameSavingData {
  }
  
  export function readGameSaving() {
  }
  
  export function writeGameSaving() {
  }