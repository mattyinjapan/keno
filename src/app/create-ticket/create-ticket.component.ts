import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumberTicket } from '../core/models/number-ticket';
import { DEFAULT_CONSTS } from '../core/consts/const';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent implements OnInit {
  @Output() enableStartDrawButtonEvent: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() cancelDrawEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() gameInProgress = false;

  ticketNumbers: NumberTicket[] = [];
  showTicketNumbers = false;
  selectedBalls = 0;
  selectableBallCount = DEFAULT_CONSTS.MAX_SELECTABLE_BALL_COUNT;

  constructor(private gameService: GameService) {}

  ngOnInit() {}

  generateNewNumberBoard(): void  {
    // TODO move to service
    this.ticketNumbers = [];
    this.ticketNumbers = this.gameService.generateNewNumberBoard();
  }

  createTicket(): void  {
    this.generateNewNumberBoard();
    this.showTicketNumbers = true;
  }

  handleSelect(index: number): void  {
    let currentSelectFlag = this.ticketNumbers[index].selectFlag;

    if (this.selectedBalls === this.selectableBallCount) {
      // if currently max selected
      if (currentSelectFlag) {
        this.ticketNumbers[index].selectFlag = !currentSelectFlag;
        this.calculateRemainingBallsNeeded();
        this.cancelDrawEnabler();
      } // else max at 10 and selected ball selected again so do nothing
    } else {
      // less than 10 selected
      this.ticketNumbers[index].selectFlag = !currentSelectFlag;
      this.calculateRemainingBallsNeeded();
      if (this.selectedBalls === this.selectableBallCount) {
        // now at max
        this.startDrawEnabler();
      }
    }
  }

  startDrawEnabler(): void  {
    // disable ticket selection and reset selection

    // send event to start the draw
    this.enableStartDrawButtonEvent.emit(this.ticketNumbers);
    // this.enableStartDrawButtonEvent.emit(
    //   this.ticketNumbers
    //     .filter((ticket) => ticket.selectFlag)
    //     .map((item) => item.displayNumber)
    // );
  }

  cancelDrawEnabler(): void  {
    // enable ticket selection

    // cancel event to start the draw
    this.cancelDrawEvent.emit();
  }

  calculateRemainingBallsNeeded(): void  {
    this.selectedBalls = this.ticketNumbers.filter(
      (ticket) => ticket.selectFlag
    ).length;
  }
}
