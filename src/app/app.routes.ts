import { Routes } from '@angular/router';
//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    { path: "", redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'navbar', component: NavbarComponent },
    { path: 'hero', component: HeroComponent },
    { path: 'sobremi', component: SobreMiComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'footer', component: FooterComponent }
];
