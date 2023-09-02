import { Injectable, Inject } from '@angular/core';
import { Logger } from '../interfaces/logger';
import { environment } from 'src/environments/environment';
import { MODULE_TOKEN } from 'src/tokens/moduleToken';

@Injectable()
export class LoggerService {

  constructor(@Inject(MODULE_TOKEN) private token: string 
              ) { }

  log(message: string): void {
    console.log(`This message came from: ${this.token}: ${message}`)
  }

  logEnvironment() {
    console.log(`Current environment: ${environment.token}`);
  }

}
