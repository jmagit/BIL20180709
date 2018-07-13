import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';

export const ERROR_LEVEL = new InjectionToken<number>('ERROR_LEBEL');

@Injectable()
export class LoggerService {
  private lebel: number = 5;

  constructor(@Optional() @Inject(ERROR_LEVEL) lebel: number) {
    if (lebel != null) {
      this.lebel = lebel;
    }
  }

  public error(msg: string): void {
    if (this.lebel > 0) {
      console.error(msg);
    }
  }

  public warn(msg: string): void {
    if (this.lebel > 1) {
      console.warn(msg);
    }
  }

  public info(msg: string): void {
    if (this.lebel > 2) {
      if (console.info) {
        // tslint:disable-next-line:no-console
        console.info(msg);
      } else {
        console.log(msg);
      }
    }
  }

  public log(msg: string): void {
    if (this.lebel > 3) {
      console.log(msg);
    }
  }
}
