class Seat {
    constructor() {
        this._isAvailable = true;
    }

    isAvailable() {
        return this._isAvailable;
    }

    reserve() {
        if (this._isAvailable) {
            this._isAvailable = false;
            return true;
        }
        return false;
    }

    toString() {
        return this._isAvailable ? "O" : "X";
    }
}

class Cinema {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.seats = this._initializeSeats(columns, rows);
    }

    _initializeSeats(columns, rows) {
        const seats = [];
        for (let i = 0; i < rows; i++) {
            seats[i] = [];
            for (let j = 0; j < columns; j++) {
                seats[i][j] = new Seat();
            }
        }
        return seats;
    }

    reserveSeat(column, row) {
        if (this._isValidSeat(column, row)) {
            if (this.seats[row][column].reserve()) {
                console.log(`Seat ${row}:${column} has been reserved.`);
            } else {
                console.log(`Seat ${row}:${column} is already reserved.`);
            }
        } else {
            console.log(`Seat ${row}:${column} is out of bounds.`);
        }
    }

    _isValidSeat(column, row) {
        return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
    }

    displaySeats() {
        console.log("Cinema Layout:");
        for (let i = 0; i < this.rows; i++) {
            let rowStr = '';
            for (let j = 0; j < this.columns; j++) {
                rowStr += this.seats[i][j].toString() + " ";
            }
            console.log(rowStr.trim());
        }
    }
}

const myCinema = new Cinema(5, 4);
myCinema.reserveSeat(2, 2);
myCinema.displaySeats();
myCinema.reserveSeat(2, 2);
myCinema.displaySeats();
myCinema.reserveSeat(1, 3);
myCinema.displaySeats();
