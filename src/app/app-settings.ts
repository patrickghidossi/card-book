import { Injectable } from "@angular/core";
import { environment } from '../environments/environment';

@Injectable()
export class AppSettings {
  public ODDS_API_KEY!: string;

  constructor() {
    this._setApiConfig();
  }

  private _setApiConfig(): void {
    this.ODDS_API_KEY = environment.ODDS_API_KEY;
  }
}
