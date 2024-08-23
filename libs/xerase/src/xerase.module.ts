import { Module } from '@nestjs/common';
import { XeraseService } from './xerase.service';

@Module({
  providers: [XeraseService],
  exports: [XeraseService],
})
export class XeraseModule {}
