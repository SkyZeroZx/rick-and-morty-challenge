import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Declare event for listening for button install PWA
  public promptEvent;
  constructor() {}

  get getInstallPwa() {
    return this.promptEvent;
  }
}
