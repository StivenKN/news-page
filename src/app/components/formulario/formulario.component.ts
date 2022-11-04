import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() paramSeleccionado = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'co';
  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertaiment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' },
  ];

  paises: any[] = [
    { value: 'co', nombre: 'Colombia' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'ch', nombre: 'Chile' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'pr', nombre: 'Puerto Rico' },
  ];

  constructor() {}

  ngOnInit(): void {}

  buscarNoticia() {
    const PARAMS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };
    this.paramSeleccionado.emit(PARAMS);
  }
}
