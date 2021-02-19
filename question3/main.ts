export class Connect4 {
    closedFields = [];
    countGames = 0;
    winning = 0;
    returnText = "";


    play(col: number): string {
        // Good luck
        let playerNr = 0;
        // Check if the game is already over (somebody has won)
        if (this.winning === 0) {
            // check if it's the first move
            if (this.closedFields.length !== 0) {
                //Find the max y (row) value in the column
                let maxYValue = 0;
                for (let i = 0; i < this.closedFields.length; i++) {
                    if (this.closedFields[i].x === col) {
                        let allYValues = []
                        allYValues.push(this.closedFields[i].y);
                        maxYValue = Math.max.apply(null, allYValues);
                    }
                }
                //If column is not full yet, add line to the object
                if (maxYValue > 5) {
                    this.returnText = "Column full!";
                }
                else {
                    // Count games and determin, which player plays (odd or even game number)
                    if (this.countGames % 2 === 0) {
                        playerNr = 1;
                    }
                    else {
                        playerNr = 2;
                    }

                    //Add filled field data to the object
                    this.closedFields.push({
                        x: col, y: maxYValue + 1, player: playerNr
                    });
                    this.countGames++;
                    this.returnText = `Player ${playerNr} has a turn`;

                    //Check the winner
                    //Check columns below if same player has filled 
                    for (let i = 0; i < this.closedFields.length; i++) {
                        if (this.closedFields[i].player === playerNr && this.closedFields[i].y === maxYValue && this.closedFields[i].x === col) {
                            for (let j = 0; j < this.closedFields.length; j++) {
                                if (this.closedFields[j].player === playerNr && this.closedFields[j].y === maxYValue - 1 && this.closedFields[j].x === col) {
                                    for (let m = 0; m < this.closedFields.length; m++) {
                                        if (this.closedFields[m].player === playerNr && this.closedFields[m].y === maxYValue - 2 && this.closedFields[m].x === col) {
                                            this.winning++;
                                            this.returnText = `Player ${playerNr} wins!`;
                                        }
                                    }
                                }
                            }
                        }
                    }


                    //Check columns left if same player has filled 
                    let countRightLeft = 0;
                    for (let i = 0; i < this.closedFields.length; i++) {
                        if (this.closedFields[i].player === playerNr && this.closedFields[i].y === maxYValue + 1 && this.closedFields[i].x === col - 1) {
                            countRightLeft++;
                            for (let j = 0; j < this.closedFields.length; j++) {
                                if (this.closedFields[j].player === playerNr && this.closedFields[j].y === maxYValue + 1 && this.closedFields[j].x === col - 2) {
                                    countRightLeft++;
                                    for (let m = 0; m < this.closedFields.length; m++) {
                                        if (this.closedFields[m].player === playerNr && this.closedFields[m].y === maxYValue + 1 && this.closedFields[m].x === col - 3) {
                                            this.winning++;
                                            this.returnText = `Player ${playerNr} wins!`;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    //Check columns right if same player has filled 
                    for (let i = 0; i < this.closedFields.length; i++) {
                        if (this.closedFields[i].player === playerNr && this.closedFields[i].y === maxYValue + 1 && this.closedFields[i].x === col + 1) {
                            countRightLeft++;
                            for (let j = 0; j < this.closedFields.length; j++) {
                                if (this.closedFields[j].player === playerNr && this.closedFields[j].y === maxYValue + 1 && this.closedFields[j].x === col + 2) {
                                    countRightLeft++;
                                    for (let m = 0; m < this.closedFields.length; m++) {
                                        if (this.closedFields[m].player === playerNr && this.closedFields[m].y === maxYValue + 1 && this.closedFields[m].x === col + 3) {
                                            this.winning++;
                                            this.returnText = `Player ${playerNr} wins!`;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // Check if the new filed was just entered in the middle (left - right)
                    if (countRightLeft === 3) {
                        this.winning++;
                        this.returnText = `Player ${playerNr} wins!`;
                    }

                    //Check diognal bottom right if same player has filled 
                    let diogBottomRightTopLeft = 0;
                    for (let i = 0; i < this.closedFields.length; i++) {
                        if (this.closedFields[i].player === playerNr && this.closedFields[i].y === maxYValue && this.closedFields[i].x === col + 1) {
                            diogBottomRightTopLeft++;
                            for (let j = 0; j < this.closedFields.length; j++) {
                                if (this.closedFields[j].player === playerNr && this.closedFields[j].y === maxYValue - 1 && this.closedFields[j].x === col + 2) {
                                    diogBottomRightTopLeft++;
                                    for (let m = 0; m < this.closedFields.length; m++) {
                                        if (this.closedFields[m].player === playerNr && this.closedFields[m].y === maxYValue - 2 && this.closedFields[m].x === col + 3) {
                                            this.winning++;
                                            this.returnText = `Player ${playerNr} wins!`;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    //Check diognal top left if same player has filled 
                    for (let i = 0; i < this.closedFields.length; i++) {
                        if (this.closedFields[i].player === playerNr && this.closedFields[i].y === maxYValue + 2 && this.closedFields[i].x === col - 1) {
                            diogBottomRightTopLeft++;
                            for (let j = 0; j < this.closedFields.length; j++) {
                                if (this.closedFields[j].player === playerNr && this.closedFields[j].y === maxYValue + 3 && this.closedFields[j].x === col - 2) {
                                    diogBottomRightTopLeft++;
                                    for (let m = 0; m < this.closedFields.length; m++) {
                                        if (this.closedFields[m].player === playerNr && this.closedFields[m].y === maxYValue + 4 && this.closedFields[m].x === col - 3) {
                                            this.winning++;
                                            this.returnText = `Player ${playerNr} wins!`;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    //Check if the new field filled in the diognal in the middle (Bottom Right - Top Left)
                    if (diogBottomRightTopLeft === 3) {
                        this.winning++;
                        this.returnText = `Player ${playerNr} wins!`;
                    }

                    let diogBottomLeftTopRight = 0;
                    //Check diognal top right if same player has filled 
                    for (let i = 0; i < this.closedFields.length; i++) {
                        if (this.closedFields[i].player === playerNr && this.closedFields[i].y === maxYValue + 2 && this.closedFields[i].x === col + 1) {
                            diogBottomLeftTopRight++;
                            for (let j = 0; j < this.closedFields.length; j++) {
                                if (this.closedFields[j].player === playerNr && this.closedFields[j].y === maxYValue + 3 && this.closedFields[j].x === col + 2) {
                                    diogBottomLeftTopRight++;
                                    for (let m = 0; m < this.closedFields.length; m++) {
                                        if (this.closedFields[m].player === playerNr && this.closedFields[m].y === maxYValue + 4 && this.closedFields[m].x === col + 3) {
                                            this.winning++;
                                            this.returnText = `Player ${playerNr} wins!`;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    //Check diognal bottom left if same player has filled 
                    for (let i = 0; i < this.closedFields.length; i++) {
                        if (this.closedFields[i].player === playerNr && this.closedFields[i].y === maxYValue && this.closedFields[i].x === col - 1) {
                            diogBottomLeftTopRight++;
                            for (let j = 0; j < this.closedFields.length; j++) {
                                if (this.closedFields[j].player === playerNr && this.closedFields[j].y === maxYValue - 1 && this.closedFields[j].x === col - 2) {
                                    diogBottomLeftTopRight++;
                                    for (let m = 0; m < this.closedFields.length; m++) {
                                        if (this.closedFields[m].player === playerNr && this.closedFields[m].y === maxYValue - 2 && this.closedFields[m].x === col - 3) {
                                            this.winning++;
                                            this.returnText = `Player ${playerNr} wins!`;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    //Check if the new field filled in the diognal in the middle (Bottom Left - Top Right)
                    if (diogBottomLeftTopRight === 3) {
                        this.winning++;
                        this.returnText = `Player ${playerNr} wins!`;
                    }
                }
            }
            else {
                //If it's the first move, add one line for the first player
                this.closedFields.push({ x: col, y: 1, player: 1 });
                this.returnText = `Player 1 has a turn`;
                playerNr = 1;
                this.countGames++;
            }
            //Return text for the function
            return this.returnText;
        }

        else {
            //Return error if game has finished (somebody has won already)
            this.returnText = "Game has finished!"
            return this.returnText;
        }

    }

}
