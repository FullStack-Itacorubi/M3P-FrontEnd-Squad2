import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../components/shared/services/auth.service';
import { inject } from '@angular/core';

export const privateGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).logged())
    return true;
  else
    return inject(Router).createUrlTree(['/register-not-allowed']);
};


export const publicGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).logged())
    return true;
  else
    return inject(Router).createUrlTree(['/labmedical/homepage']);
};

export const privateChildGuard: CanActivateChildFn = (route, state) => {
  if (inject(AuthService).logged())
  return true;
else
  return inject(Router).createUrlTree(['/register-not-allowed']);
}
