import { Controller, Logger, Sse } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { interval, map, Observable } from 'rxjs';

@Controller()
export class AppController {
  @EventPattern('wfm-charity-event')
  async handleLimitRequestAction(data: Record<string, unknown>) {
    Logger.log('handling charity management event');
    Logger.log(data);
  }
}
