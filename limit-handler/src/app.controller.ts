import { Controller, Logger, Sse } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { interval, map, Observable } from 'rxjs';

@Controller()
export class AppController {
  @EventPattern('wfm-limit-event')
  async handleLimitRequestAction(data: Record<string, unknown>) {
    Logger.log('handling limit management event');
    Logger.log(data);
  }
}
