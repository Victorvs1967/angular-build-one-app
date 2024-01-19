import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface AppConfig {
  API_URL: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configuration: AppConfig = {
    API_URL: '/api',
  };

  private http: HttpClient;

  constructor(private readonly httpHandler: HttpBackend) {
    this.http = new HttpClient(this.httpHandler);
  }

  setConfig(): Promise<void | AppConfig> {
    return firstValueFrom(this.http.get<AppConfig>('./app-config.json'))
      .then((config: AppConfig) => this.configuration = config)
      .catch(error => console.log(error));
  }

  readConfig(): AppConfig {
    return this.configuration;
  }
}
