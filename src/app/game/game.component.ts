import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberTicket } from '../core/models/number-ticket';
import { GameBoardLayoutComponent } from '../game-board/game-board-layout/game-board-layout.component';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  @ViewChild(GameBoardLayoutComponent)
  gameBoardLayoutComponent!: GameBoardLayoutComponent;
  
  startGameEvent = false;
  gameInProgress = false;
  ticketNumbers: NumberTicket[] = [];
  headsCount: number = 0;
  tailsCount: number = 0;

  constructor() {}

  ngOnInit() {}

  handleStartDrawEvent(): void {
    // Start the game
    this.gameInProgress = true;
    this.gameBoardLayoutComponent.startBallDraw();
  }

  handleEnableStartDrawButtonEvent(event: any) {
    // Enable the Start Game button
    this.ticketNumbers = event;
    this.startGameEvent = true;
  }

  handleGameEndedEvent(): void {
    // TODO set up next game
  }
  handleHeadsCountEvent(event: any): void {
    this.headsCount = event;
  }
  handleTailsCountEvent(event: any): void {
    this.tailsCount = event;
  }
}
