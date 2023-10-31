import { Injectable, Inject } from '@angular/core';
import { Logger } from '../interfaces/logger';
import { environment } from 'src/environments/environment';
import { MODULE_TOKEN } from 'src/tokens/moduleToken';

interface UserInterface {
  id: number,
  name: string,
  age: number,
  getMessage(): string
}

interface ProfileInterface {
  name: string,
  profileUrl: string,
  isActive: boolean
}

const transform = (user: UserInterface, isActive: boolean = true): ProfileInterface => {
  return {
    name: user.name,
    profileUrl: `/profiles/${user.name}`,
    isActive
  }
}

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


