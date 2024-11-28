import { Component } from '@angular/core';
import { PlacaDatos } from '../interface/Placa.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-placas',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './buscar-placas.component.html',
  styleUrls: ['./buscar-placas.component.css']
})
export default class BuscarPlacasComponent {
  placa: string = '';
  placaDatos: PlacaDatos | null = null;
  showModal: boolean = false;
  private apiUrl = 'https://webapp.mdsmp.gob.pe/viajesegurobackend/public/v1/sigta/consultarplaca';

  constructor(private http: HttpClient) {}

  buscarPlaca(): void {

    if (!this.placa) {
      return;
    }

    const body = { placa: this.placa };

    this.http.post<PlacaDatos[]>(this.apiUrl, body).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.placaDatos = data[0];
        } else {
          this.placaDatos = null;
        }
        this.showModal = true;
      },
      error: (err) => {
        console.error('Error al obtener los datos:', err);
        this.placaDatos = null;
        this.showModal = true;

      },
    });
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
    this.showModal = false;

  }
}
