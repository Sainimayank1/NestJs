import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log("🚀 ~ AuthGuardGuard ~ jwt.verify ~ process.env.secret:", process.env.secret);
    jwt.verify(request.headers.authorization, process.env.secret, (err, decoded) => {
      if (err || decoded.access !== 'superAdmin') {
        return false;
      }
      return true;
    });
    return false;
  };
}
