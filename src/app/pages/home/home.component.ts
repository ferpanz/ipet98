import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  nombre: string = '';
  consulta: string = '';

  enviarWhatsApp() {
    const telefono = '5493571347824'; // Reemplaza con el número real, ej: 5493511234567
    const mensaje = `Hola, soy ${this.nombre}. Mi consulta es: ${this.consulta}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
