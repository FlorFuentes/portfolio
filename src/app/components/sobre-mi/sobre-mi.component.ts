import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPortfolioService } from '../../services/datos-portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {

  sobreMi: any;

  constructor (private datosmios: DatosPortfolioService){}

  ngOnInit(): void{
    this.datosmios.obtenerDatos().subscribe(data => {
      console.log(data)
      this.sobreMi= data.sobreMi
    })
  }
  

}
