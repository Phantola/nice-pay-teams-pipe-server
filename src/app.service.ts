import { Injectable } from '@nestjs/common';
import { PayLog } from './types';

@Injectable()
export class AppService {
  constructor() {}

  async savePayLog(data: PayLog) {
    console.log(data);
  }
}
