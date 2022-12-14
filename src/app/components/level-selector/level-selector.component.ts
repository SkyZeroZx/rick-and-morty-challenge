import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { levels } from 'src/app/enums/enums';
import { GameService } from 'src/app/services/game.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-level-selector',
  templateUrl: './level-selector.component.html',
  styleUrls: ['./level-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelSelectorComponent {

  @HostBinding('style.width') width = '100%';

  levelsValues: string[] = [];

  /**
   * constructor method
   * gets the values of the levels
   * @param gameService instance of the service that manage the game
   * @param translate instance of service for translations
   */
  constructor(
    public gameService: GameService,
    private translate: TranslateService,
  ) {
    const levelsKeys = Object.keys(levels);
    this.levelsValues = levelsKeys.slice(-(levelsKeys.length / 2));
  }

  /**
   * selectLevel
   * changes the level of the game
   * @param level id of the level selected
   */
  selectLevel(level: string) {
    this.gameService.level = levels[level];
  }

  /**
   * getLevelString
   * gets the name of a level
   * @param level id of the level
   */
  getLevelString(level: string): string {
    return this.translate.instant(`level-selector.levels.${level}.title`);
  }


  getClassButton(level: string) : string {
    switch(level){
      case 'easy' : 
      return "btn btn-outline-success" 
      case 'medium' : 
      return "btn btn-outline-warning" 
      case 'hard':
        return "btn btn-outline-danger"
      default : 
      return "btn btn-outline-secondary"
    }
  }
}
