import { Module } from '@nestjs/common';
import { XeraseCmsService } from './xerase-cms.service';

@Module({
  providers: [XeraseCmsService],
  exports: [XeraseCmsService],
})
export class XeraseCmsModule {}
