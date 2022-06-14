import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('LIMITS_SERVICE') private client: ClientProxy) {}

  async performRequestAction( action: string) {
    console.log('WFM event emitted');
    //console.info(event);
    this.client.emit('wfm-limit-event', {
      action: action,
      data: {
        rejection_reason: 'some reason',
        operation: 'update',
        fields: [
          {
            field_name: 'some_name_1',
            field_value: 'some value 1',
          },
          {
            field_name: 'some_name_2',
            field_value: 'some value 2',
          },
        ],
      },
    });
  }
}
