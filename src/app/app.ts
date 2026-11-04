import { Component } from '@angular/core';
import { HomePage } from './presentation/pages/home/home.page';

@Component({
  selector: 'app-root',
  imports: [HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
