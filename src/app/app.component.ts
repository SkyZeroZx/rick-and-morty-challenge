import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
 import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * constructor method
   * @param gameService instance for the services that manage the game
   * @param translate instance for the service of translations
   */
  constructor(
    private gameService: GameService,
    private translate: TranslateService
  ) {}

  /**
   * ngOnInit inits a subscription to control when user wins the game
   */
  ngOnInit(): void {
    this.gameService.winedGame.subscribe((value) => {
      if (value) {
        Swal.fire({
          icon: 'success',
          showConfirmButton : false,
          title: this.translate.instant('finish-message.title'),
          text: this.translate.instant('finish-message.win-game'),
        }) 
      }
    });
  }

  /**
   * returns if the game is started or not
   */
  getGameStarted(): Observable<boolean> {
    return this.gameService.started;
  }
}
