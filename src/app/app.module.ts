import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameButtonsComponent } from './components/game-buttons/game-buttons.component';
import { GameCronoComponent } from './components/game-crono/game-crono.component';
import { GameGridComponent } from './components/game-grid/game-grid.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { GameMovementsComponent } from './components/game-movements/game-movements.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { LevelSelectorComponent } from './components/level-selector/level-selector.component';
import { TileItemComponent } from './components/tile-item/tile-item.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LanguageSelectorComponent,
    HeaderComponent,
    LevelSelectorComponent,
    GameButtonsComponent,
    GameCronoComponent,
    GameInfoComponent,
    GameGridComponent,
    TileItemComponent,
    GameMovementsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TranslateModule.forRoot({
      useDefaultLang: true,
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
