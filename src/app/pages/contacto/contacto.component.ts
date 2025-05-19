import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre: string = '';
  consulta: string = '';

  enviarWhatsApp() {
    const telefono = '5493571347824'; // Reemplaza con el número real, ej: 5493511234567
    const mensaje = `Hola, soy ${this.nombre}. Mi consulta es: ${this.consulta}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
}
