import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderLayoutComponent } from './header/header-layout/header-layout.component';
import { GameBoardLayoutComponent } from './game-board/game-board-layout/game-board-layout.component';
import { LogoComponent } from './header/logo/logo.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [						
    AppComponent,
      FaqComponent,
      HeaderLayoutComponent,
      GameBoardLayoutComponent,
      LogoComponent,
      CreateTicketComponent,
      GameComponent
   ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
