import { Injectable } from '@nestjs/common';
import { PushRequestDto } from './dto/push-request.dto';

@Injectable()
export class C2bService {
  create(createC2bDto: PushRequestDto) {
    return 'This action adds a new c2b';
  }

  findAll() {
    return `This action returns all c2b`;
  }

  findOne(id: number) {
    return `This action returns a #${id} c2b`;
  }

}
