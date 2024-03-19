import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterModule } from '@angular/router';
import { Cines } from '../../interfaces/cines';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-cines',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './cines.component.html',
  styleUrl: './cines.component.css',
})
export class CinesComponent implements OnInit {
  cines!: Cines[];

  constructor(private _apiServices: ApiService) {}

  ngOnInit(): void {
    console.log('cines');
    this.getCines();
  }

  getCines() {
    this._apiServices.getCines().subscribe((data) => {
      console.log(data);
      this.cines = data;
    });
  }
}
