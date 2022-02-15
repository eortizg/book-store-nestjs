import { Module } from '@nestjs/common';
import { MapperService } from './mapper.service';

@Module({
  controllers: [],
  providers: [MapperService],
  imports: [MapperService],
  exports: [MapperService],
})
export class SharedModule {}
