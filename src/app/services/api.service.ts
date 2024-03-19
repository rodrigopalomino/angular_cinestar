import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peliculas } from '../interfaces/peliculas';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula';
import { Cines } from '../interfaces/cines';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPeliculas(params: string): Observable<Peliculas[]> {
    return this.http.get<Peliculas[]>(
      `https://oaemdl.es/cinestar_sweb_php/peliculas/${params}`
    );
  }

  getPelicula(params: string): Observable<Pelicula> {
    return this.http.get<Pelicula>(
      `https://oaemdl.es/cinestar_sweb_php/peliculas/${params}`
    );
  }

  getCines(): Observable<Cines[]> {
    return this.http.get<Cines[]>(`https://oaemdl.es/cinestar_sweb_php/cines`);
  }

  getCine(id: number) {
    return this.http.get(`https://oaemdl.es/cinestar_sweb_php/cines/${id}`);
  }

  getTarifa(id: number) {
    return this.http.get(
      `https://oaemdl.es/cinestar_sweb_php/cines/${id}/tarifas`
    );
  }

  getCinePeliculas(id: number) {
    return this.http.get(
      `https://oaemdl.es/cinestar_sweb_php/cines/${id}/peliculas`
    );
  }
}
