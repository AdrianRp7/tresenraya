import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { Tile } from "@/classes/Tile";
import { Player } from "@/classes/Player";

export const usePartidaStore = defineStore('counter', () => {
  const numberColumnsRows = ref<number>(3);
  const board = ref<Tile[][]>([]);
  const players = ref<[Player, Player]>([new Player("Player 1", "O", ""), new Player("Player 2", "X", "")])
  

  function createBoard() {
    for(let i: number = 0; i < numberColumnsRows.value; i++)
      for(let j: number = 0; j < numberColumnsRows.value; j++)
        board.value[i][j] = new Tile("", "");
  }

  function setRowsColumns(rows: number): void {
    numberColumnsRows.value = rows;
    createBoard();
  }

  function changeIconBoardPosition(row: number, column: number, tilePlayer:string) {
    if(row < numberColumnsRows.value && column < numberColumnsRows.value) {
      if(tilePlayer.length === 1)
        board.value[row][column].icon = tilePlayer
      else {
        board.value[row][column].background = tilePlayer;
      }
    }
  }

  function isAWinner() {
    // for(let column: number = 0; column < numberColumnsRows.value; column++) {

    // }
  }

  function ValidateColumnWinner(column: number) {
    let lineSameIcon = true;
    let iconActual = "";

    for(let row = 0; row < numberColumnsRows.value; row++) {
      if(iconActual !== "") {
        lineSameIcon = iconActual !== board.value[row][column].returnActualTile() && lineSameIcon;
      }
      else {
        iconActual = board.value[row][column].returnActualTile();
      }
    }
  }

  function whoWins(symbol: string) {
    return players.value[0].returnPlayerSymbol() === symbol ? players.value[0].name : players.value[1].name; 
  }

  return { numberColumnsRows, board, createBoard, setRowsColumns}
})
