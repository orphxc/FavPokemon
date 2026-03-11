import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

pokemon = [
  {
    name: 'Pikachu',
    region: 'Kanto',
    type: 'Electric',
    heldItem: 'Light Ball',
    description: 'A small electric Pokémon that stores electricity in its cheeks.'
  },
  {
    name: 'Charmander',
    region: 'Kanto',
    type: 'Fire',
    heldItem: 'Charcoal',
    description: 'The flame on its tail shows the strength of its life force.'
  },
  {
    name: 'Bulbasaur',
    region: 'Kanto',
    type: 'Grass/Poison',
    heldItem: 'Miracle Seed',
    description: 'A seed on its back grows larger as it absorbs sunlight.'
  },
  {
    name: 'Mewtwo',
    region: 'Kanto',
    type: 'Psychic',
    heldItem: 'Twisted Spoon',
    description: 'A powerful psychic Pokémon created through genetic experiments.'
  },
  {
    name: 'Eevee',
    region: 'Kanto',
    type: 'Normal',
    heldItem: 'Silk Scarf',
    description: 'A Pokémon with unstable DNA that can evolve in many ways.'
  },
  {
    name: 'Psyduck',
    region: 'Kanto',
    type: 'Water',
    heldItem: 'Mystic Water',
    description: 'Constant headaches cause it to unleash powerful psychic abilities.'
  }
];

  items = [
{ name: 'Max Potion', price: 2500 },
{ name: 'Full Restore', price: 3000 },
{ name: 'Max Revive', price: 4000 },
{ name: 'Burn Heal', price: 250 },
{ name: 'Ice Heal', price: 250 },
{ name: 'Awakening', price: 250 },
{ name: 'Full Heal', price: 600 },
{ name: 'Max Repel', price: 900 },
{ name: 'Rare Candy', price: 4800 },
{ name: 'PP Up', price: 3000 }
  ];

  cart = signal<any[]>([]);

  addToCart(item: any) {
    this.cart.update(cart => [...cart, item]);
  }

  totalPrice = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );

  clearCart() {
  this.cart.set([]);
  }

  checkout() {
    const total = this.totalPrice();
    alert("Total payment: ₱" + total);
    this.clearCart();
  }
}

