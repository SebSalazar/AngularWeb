import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  juegos = [
    {
      nombre: 'GTA V',
      img: 'https://www.futbolred.com/files/article_main/files/crop/uploads/2020/05/14/5ebd6e4c2aa23.r_1589484072050.0-0-1366-684.jpeg',
      info: 'Consigue este GOTY del 2013 ' +
           'Descubre un mundo en constante evolución repleto de opciones y formas de jugar mientras llegas' +
           ' a lo más alto del escalafón criminal de Los Santos y el condado de Blaine en la mejor experiencia compartida en línea.'
    },
    {
      nombre: 'Apex Legends',
      img: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg',
      info: 'Apex Legends es un videojuego gratuito perteneciente al género Battle Royale desarrollado por Respawn Entertainment y publicado por Electronic Arts.' +
      ' ADQUIERELO GRATIS AHORA!'
    },
    {
      nombre: 'Fifa 20',
      img: 'https://wallpaperaccess.com/full/1607418.jpg',
      info: 'Que mas se puede decir de este juego, adquiere ya el mejor simulador de futbol del mundo.'
    },
    {
      nombre: 'Fortnite',
      img: 'https://i.pinimg.com/originals/f1/73/1d/f1731d7c701d2703b731fa3028f245c0.jpg',
      info: 'Que esperar para jugar el juego del momento, unete y aprovecha este Battle Royale totalmente GRATIS.'

    }
  ];
  boton = false;
  constructor() { }
  auxi = 2;

  cambio(){
    this.boton = !this.boton;
    const botoncito = document.getElementById('but');
    if (this.auxi % 2 === 0){
      botoncito.innerHTML = 'Esconder juego';
    }else {
      botoncito.innerHTML = 'Revelar juego';
    }
    this.auxi++;
  }

  ngOnInit(): void {
  }

}
