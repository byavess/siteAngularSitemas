import { Component } from '@angular/core';
import { HeaderComponent } from './features/home/components/header/header.component';
import { SOLUTIONS_DATA } from './core/data/solutions.data';
import { HeroComponent } from './features/home/components/hero/hero.component';

interface Solution {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
HeaderComponent,
HeroComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
readonly solutions = SOLUTIONS_DATA;
    
}