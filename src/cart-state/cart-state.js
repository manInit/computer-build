import { BehaviorSubject, tap } from 'rxjs';


const prevState = JSON.parse(localStorage.getItem('cart') || '{}');

export const cartStateSubject = new BehaviorSubject(prevState);
export const cartState$ = cartStateSubject
  .asObservable()
  .pipe(tap(state => {
    localStorage.setItem('cart', JSON.stringify(state))
  }));