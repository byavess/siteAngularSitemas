import { Component, signal } from '@angular/core';
import { Solution } from '../../../../core/models/solution.model';
import { SOLUTIONS_DATA } from '../../../../core/data/solutions.data';

@Component({
  selector: 'app-solutions',
  standalone: true,
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  // Uso de Signal do Angular 21 para otimização de renderização
  readonly solutions = signal<Solution[]>(SOLUTIONS_DATA);
}
