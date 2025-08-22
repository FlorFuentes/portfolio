import { Component, HostListener } from '@angular/core';
import { DatosPortfolioService } from '../../services/datos-portfolio.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router:Router, private data:DatosPortfolioService ){}

//Cambio color navbar
  isNavbarBlack: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const aboutSectionOffset = document.getElementById('apartirdeaca')?.offsetTop || 0;
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarBlack = currentScrollPosition >= aboutSectionOffset;
  }
  
  toggleNavbarColor() {
    while (!this.isNavbarBlack) {
      this.isNavbarBlack = !this.isNavbarBlack;
    }
  }
  

  toInicio(){
    this.router.navigate(['']);
    document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});
   }
   toSobremi(){
    this.router.navigate(['']);
    document.getElementById("sobreMi")?.scrollIntoView({behavior:"smooth"});
   }
   toHabilidadestecnicas(){
    this.router.navigate(['']);
    document.getElementById("habilidadestecnicas")?.scrollIntoView({behavior:"smooth"});
   }
   toTrabajos(){
    this.router.navigate(['']);
    document.getElementById("trabajos")?.scrollIntoView({behavior:"smooth"});
   }

   toContacto(){
    this.router.navigate(['']);
    document.getElementById("contacto")?.scrollIntoView({behavior:"smooth"});
   }

   ngOnInit() {
    console.log('NavbarComponent cargado');
  }
  
}
