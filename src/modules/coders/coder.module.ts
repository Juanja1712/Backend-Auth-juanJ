import { Students, StudentsSchema } from './entities/coder.entity';
import { Module } from '@nestjs/common';
import { CoderService } from './service/coder.service';
import { CoderController } from './controller/coder.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Students.name,
        schema: StudentsSchema,
      },
    ]),
  ],
  providers: [CoderService],
  controllers: [CoderController],
  exports: [CoderService],
})
export class CoderModule {}
