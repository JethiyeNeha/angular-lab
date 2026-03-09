import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // 1. Writable signals
  count = signal(0);
  firstName = signal('Angular');
  lastName = signal('Developer');

  // 2. Computed — derived, lazy, memoized
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  doubleCount = computed(() => this.count() * 2);
  isEven = computed(() => this.count() % 2 === 0);

  // 3. Effect — runs on change, tracks automatically
  constructor() {
    effect(() => {
      console.log('📊 Count changed to:', this.count());
      console.log('📊 Full name is:', this.fullName());
      // This effect tracks BOTH count and fullName's dependencies
    });
  }

  increment() { this.count.update(v => v + 1); }
  decrement() { this.count.update(v => v - 1); }
  reset() { this.count.set(0); }
}