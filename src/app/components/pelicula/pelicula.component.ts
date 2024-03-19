import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Pelicula } from '../../interfaces/pelicula';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css',
})
export class PeliculaComponent implements OnInit {
  pelicula!: Pelicula;

  constructor(
    private _apiServices: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPelicula();
  }

  getPelicula() {
    this.route.params.subscribe((params) => {
      this._apiServices.getPelicula(params['params']).subscribe((data) => {
        this.pelicula = data;
      });
    });
  }
}
