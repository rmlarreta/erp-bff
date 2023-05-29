import { Injectable } from '@nestjs/common';
import { UserRequest } from './dtos/user.request';
import { UserAuth } from './dtos/user.auth';

@Injectable()
export class SecurityService {
  async authenticate(userRequest: UserRequest): Promise<any> {
    // Lógica de autenticación aquí
    return {
      token: 'TOKEN_GENERATED'  // 1 hora
    };
  }

  async changePassword(userRequest: UserRequest): Promise<any> {
    // Lógica de cambio de contraseña aquí
    return {
        token: 'TOKEN_GENERATED'  // 1 hora
    };
  }
}
