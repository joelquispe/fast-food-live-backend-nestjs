import { Injectable } from '@nestjs/common';
import { scryptSync } from 'crypto';

@Injectable()
export class DetailOrdersService {
  async getData() {
    return scryptSync('1234', 'salt', 32);
  }
}
