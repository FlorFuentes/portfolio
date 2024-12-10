import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPortfolioService } from '../../services/datos-portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects:any;
  projecLista:any;
  constructor( private datosProjects:DatosPortfolioService){}

  ngOnInit(): void{
    this.datosProjects.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.projects=data.projects;
      this.projecLista=data.projects.proj;
    });
  }
}
