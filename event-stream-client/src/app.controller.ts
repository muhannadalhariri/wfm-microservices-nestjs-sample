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
  async publishEvent(action: string) {
    console.info(action);
    return this.appService.performRequestAction(action);
  }

  @Get('/perform-charity-action')
  async publishCharityEvent(action: string) {
    console.info(action);
    return this.appService.performCharityRequestAction(action);
  }
}
