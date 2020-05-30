import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gta',
  templateUrl: './gta.component.html',
  styleUrls: ['./gta.component.css']
})
export class GTAComponent implements OnInit {
  juego = {
    nombre: 'Grand the Auto V',
    info: 'Llevate uno de los mejores juegos de la historia, aprovecha este oferton!',
    precio: '$50.00',
    img: 'https://vignette.wikia.nocookie.net/es.gta/images/1/1b/Car%C3%A1tula_GTA_V.jpg/revision/latest/top-crop/width/360/height/450?cb=20130402191528.'
  };
  juegoRegalo = {
    nombre: 'Borderlands 3',
    info: 'Por tu compra te hemos premiado con este espectacular juego de accion, disfrutalo!',
    img: 'https://cnet1.cbsistatic.com/img/V1A2QThEyYjtfs_X7iTgHjQshEU=/1092x0/2019/05/14/f207d0c2-268b-4a8e-9ef8-64d9abb201c9/borderlands-3.jpg'
  };
  regalo = false;
  compraAceptada = false;
  comprar() {
    this.regalo = Math.random() >= 0.5;
    document.getElementById('texto').innerHTML = 'Procesando pago';
    if (this.regalo) {
      this.compraAceptada = !this.compraAceptada;
      document.getElementById('texto').innerHTML = 'Su compra ha sido exitosa!';
      document.getElementById('regalo').innerHTML = 'Regalo habilitado';
      (document.getElementById('regalo') as HTMLInputElement).disabled = false;
      (document.getElementById('pago') as HTMLInputElement).disabled = true;
      (document.getElementById('compra') as HTMLInputElement).remove();
    } else {
      (document.getElementById('pago') as HTMLInputElement).disabled = true;
      document.getElementById('texto').innerHTML = 'Su compra ha sido rechazada!';
      (document.getElementById('compra') as HTMLInputElement).remove();
      document.getElementById('texto2').innerHTML = 'Compra rechazada :( vuelva a recargar la pagina!';
    }
  }
  Ocultar(){
    this.regalo = !this.regalo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
