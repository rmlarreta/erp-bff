import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    // Agrega el interceptor a Axios para configurar el encabezado de autorización en cada solicitud
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = token;
      return config;
    });

    return next.handle();
  }
}

