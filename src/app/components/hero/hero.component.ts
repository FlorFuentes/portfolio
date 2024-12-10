import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPortfolioService } from '../../services/datos-portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  hero: any;

  constructor(private datosHero: DatosPortfolioService){}

  ngOnInit(): void{
    this.datosHero.obtenerDatos().subscribe(data => {
      console.log(data)
      this.hero = data.hero;
    });
  }

  
}
