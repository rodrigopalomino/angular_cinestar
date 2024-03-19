import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css',
})
export class CineComponent implements OnInit {
  cine: any;
  tarifas: any;
  peliculas: any;

  constructor(
    private _apiServices: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCine();
  }

  getCine() {
    this.route.params.subscribe((params) => {
      this._apiServices.getCine(params['params']).subscribe((data) => {
        this.cine = data;
        console.log(this.cine);
      });
      this._apiServices.getTarifa(params['params']).subscribe((data) => {
        this.tarifas = data;
        console.log('tarifas', this.tarifas);
      });
      this._apiServices.getCinePeliculas(params['params']).subscribe((data) => {
        this.peliculas = data;
        console.log(this.peliculas);
      });
    });
  }
}
