import { Component } from '@angular/core';
import { HeaderComponent } from './features/home/components/header/header.component';


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

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly solutions: Solution[] = [
    {
      id: 'sistemas-apis',
      title: 'Sistemas & APIs',
      description: 'Desenvolvimento Java robusto para automação de estoque e gestão financeira. Menos erro manual, mais lucro.',
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Placa de circuito e processamento'
    },
    {
      id: 'web-performance',
      title: 'Web & Performance',
      description: 'Sites em Angular e WordPress de alta velocidade. Otimizados para o Google entregar sua empresa em 1º lugar.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Painel de análise de dados'
    },
    {
      id: 'power-bi',
      title: 'Power BI & Automação',
      description: 'Criação de dashboards inteligentes e automação de relatórios. Tome decisões baseadas em dados reais e em tempo real.',
      imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=600&q=80',
      imageAlt: 'Dashboard futurista de Power BI'
    },
    {
      id: 'automacao-social',
      title: 'Automação & Social',
      description: 'Gestão estratégica de redes sociais com sua marca vendendo 24h por dia.',
      imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Automação de dados e gráficos'
    },
    {
      id: 'desenvolvimento-custom',
      title: 'Desenvolvimento Personalizado',
      description: 'Do "Hello World" ao sistema completo. Criamos soluções sob medida para as necessidades específicas do seu negócio.',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Código Hello World'
    },
    {
      id: 'atendimento-digital',
      title: 'Atendimento Digital',
      description: 'Sistema completo de atendimento ao cliente. Centralize seus canais de comunicação e ofereça suporte de excelência.',
      imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80',
      imageAlt: 'Sistema de Atendimento'
    }
  ];
}