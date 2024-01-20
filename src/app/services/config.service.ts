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

  async setConfig(): Promise<void | AppConfig> {
    try {
      const config = await firstValueFrom(this.http.get<AppConfig>('./app-config.json'));
      return this.configuration = config;
    } catch (error) {
      return console.log(error);
    }
  }

  readConfig(): AppConfig {
    return this.configuration;
  }
}
