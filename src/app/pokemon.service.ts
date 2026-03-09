import { Injectable, signal } from '@angular/core';
import { signalSetFn } from '@angular/core/primitives/signals';

export interface Pokemon {
  name: String;
  Type: string;
  item: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
}
