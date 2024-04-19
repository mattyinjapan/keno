import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberTicket } from '../../core/models/number-ticket';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'game-board-layout',
  templateUrl: './game-board-layout.component.html',
  styleUrls: ['./game-board-layout.component.css'],
})
export class GameBoardLayoutComponent implements OnInit {
  headsCount: number = 0;
  tailsCount: number = 0;
  @Input() ticketNumbers: NumberTicket[] = [];

  @Output() gameEndedEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() headsCountEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() tailsCountEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private gameService: GameService) {}

  ngOnInit() {}

  startBallDraw(): void {
    let drawnNumbers: number[] =
      this.gameService.generateRandomNumbersAndSortSequentially(10, 1, 80);
    this.updateCurrentNumber(drawnNumbers);
  }

  updateCurrentNumber(drawnNumbers: number[]) {
    let currentNumber: number = drawnNumbers[0];
    this.isHeads(currentNumber) ? this.incrementHeads() : this.incrementTails();
    this.ticketNumbers[currentNumber - 1].drawn = true;

    drawnNumbers.shift(); // Remove the first number from the array and update currentNumber
    if (drawnNumbers.length > 0) {
      setTimeout(() => {
        this.updateCurrentNumber(drawnNumbers);
      }, 2000); //Schedule the function to run again after 2 seconds
    } else {
      // emit game finished
      this.gameEndedEvent.emit();
    }
  }

  isHeads(num: number): boolean {
    return num < 41;
  }

  incrementHeads(): void {
    this.headsCount ++;
    this.headsCountEvent.emit(this.headsCount);
  }

  incrementTails(): void {
    this.tailsCount ++;
    this.tailsCountEvent.emit(this.tailsCount);
  }
}
