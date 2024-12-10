import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPortfolioService } from '../../services/datos-portfolio.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  toContacto(){document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});}

  foo:any;
  constructor( private datosFooter:DatosPortfolioService){}

  ngOnInit(): void{
    this.datosFooter.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.foo=data
    });
  }
}
