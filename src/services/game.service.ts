import { Injectable } from '@angular/core';
import { NumberTicket } from 'src/app/core/models/number-ticket';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  generateNewNumberBoard(): any[] {
    let ticketNumbers = [];
    for (let i = 1; i <= 80; i++) {
      let numberObject: NumberTicket = {
        displayNumber: i,
        selectFlag: false,
        drawn: false,
      };
      ticketNumbers.push(numberObject);
    }

    return ticketNumbers;
  }

  generateRandomNumbersAndSortSequentially(
    count: number,
    min: number,
    max: number
  ): number[] {
    const numbers: number[] = [];
    while (numbers.length < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers.sort((a, b) => a - b);
  }
}
