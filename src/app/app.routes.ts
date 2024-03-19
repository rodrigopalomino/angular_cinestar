import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CinesComponent } from './components/cines/cines.component';
import { CineComponent } from './components/cine/cine.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'cines',
    component: CinesComponent,
  },
  {
    path: 'cine/:params',
    component: CineComponent,
  },
  {
    path: 'peliculas/:params',
    component: PeliculasComponent,
  },
  {
    path: 'pelicula/:params',
    component: PeliculaComponent,
  },
];
