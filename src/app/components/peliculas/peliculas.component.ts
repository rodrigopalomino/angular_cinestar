import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { Peliculas } from '../../interfaces/peliculas';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
})
export class PeliculasComponent implements OnInit {
  peliculas!: Peliculas[];

  constructor(
    private _apiServices: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('peliculas');
    this.getPeliculas();
  }

  getPeliculas() {
    this.route.params.subscribe((params) => {
      this._apiServices.getPeliculas(params['params']).subscribe((data) => {
        this.peliculas = data;
      });
    });
  }
}
