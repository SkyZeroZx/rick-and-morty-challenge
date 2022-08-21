import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { ThemeService } from '../../services/theme.service';

const ID_ACCEPT_BUTTON = 'accept-button';
const ID_CANCEL_BUTTON = 'cancel-button';

@Component({
  selector: 'app-game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['./game-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameButtonsComponent implements OnInit {
  /**
   * constructor method
   * @param gameService instance of the service that manage the game
   * @param themeService instance of the service for Theme Service
   * @param translate instance of the service for translations
   */
  constructor(
    public gameService: GameService,
    private translate: TranslateService,
    private themeService: ThemeService
  ) {}

  /**
   * ngOnInit
   * starts a subscription for the buttons of the dialog modal
   */
  ngOnInit() {}

  /**
   * playGame
   * starts the game
   */
  playGame(): void {
    this.gameService.startGame();
  }

  /**
   * stopGame
   * stops the game
   */
  stopGame(): void {
    this.gameService.stopGame();
    Swal.fire({
      icon: 'warning',
      title: this.translate.instant('finish-dialog.title'),
      text: this.translate.instant('finish-dialog.message'),
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant(
        `finish-dialog.${ID_ACCEPT_BUTTON}`
      ),
      cancelButtonText: this.translate.instant(
        `finish-dialog.${ID_CANCEL_BUTTON}`
      ),
    }).then((result) => {
      if (result.isConfirmed) {
        this.gameService.finishGame();
      } else {
        this.gameService.restartCrono();
      }
    });
  }

  // Method for call prompt install PWA
  installPwa() {
    this.themeService.getInstallPwa.prompt();
  }

  // Method for validate installed PWA
  shouldInstall(): boolean {
    return !this.isRunningStandalone() && this.themeService.getInstallPwa;
  }

  // Method for validate standalone mode
  isRunningStandalone(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches;
  }
}
