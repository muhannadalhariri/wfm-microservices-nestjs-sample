import { Controller, Get, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { interval, map, Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Sse('sse')
  @EventPattern('wfm-limit-event')
  sse(data: Record<string, unknown>): Observable<MessageEvent> {
    console.log(data);
    return interval(1000).pipe(map((_) => ({ data: data } as MessageEvent)));
  }

  @Get('/perform-action')
  async publishEvent(action) {
    console.log(action);
    return this.appService.performRequestAction( action);
  }
}
