import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _apiUrl: string = '';
  public get apiUrl(): string {
    return this._apiUrl;
  }

  private _environment: string;
  public get environment(): string {
    return this._environment;
  }

  constructor() {
    this._environment = (<any>window).env || 'local';

    switch (this._environment) {
      case 'local':
        this._apiUrl = 'https://swapi.dev/api/people/1';
        break;
      case 'dev':
        this._apiUrl = 'https://swapi.dev/api/planets/3';
        break;
      case 'prod':
        this._apiUrl = 'https://swapi.dev/api/starships/9';
        break;
    }
  }
}
