import { CanDeactivateFn } from '@angular/router';

export const auth2Guard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
