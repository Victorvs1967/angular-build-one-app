import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Victor';

  configService = inject(ConfigService);

  apiUrl = this.configService.readConfig().API_URL;

  constructor() {
    console.log(this.configService.readConfig().API_URL);
  }
}
