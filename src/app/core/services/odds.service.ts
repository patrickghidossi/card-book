import { Injectable } from '@angular/core';
import { AppSettings } from '../../app-settings';

@Injectable({
  providedIn: 'root'
})
export class OddsService {

  constructor(
    private _appSettings: AppSettings
  ) { }

}
