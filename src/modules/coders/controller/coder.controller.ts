import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CoderService } from '../service/coder.service';
import { Students } from '../entities/coder.entity';
import { CreateCoderDto, UpdateCoderDto } from '../dtos/export';
import { Roles } from 'src/libs/decorators/roles.decorator';

@ApiTags('Coders')
@ApiBearerAuth()
@Controller('coders')
export class CoderController {
  constructor(private readonly service: CoderService) {}

  @Roles('admin')
  @Post('new')
  async create(@Body() createCoder: CreateCoderDto): Promise<Students> {
    return await this.service.create(createCoder);
  }

  @Roles('teacher, admin')
  @Get('all')
  async findAll(): Promise<Students[]> {
    return await this.service.findAll();
  }

  @Roles('teacher')
  @Get(':id')
  async findOne(@Param('_id') id: string): Promise<Students> {
    return await this.service.findOne(id);
  }

  @Roles('admin')
  @Put(':id')
  async update(
    @Param('_id') id: string,
    @Body() updateCoder: UpdateCoderDto,
  ): Promise<Students> {
    return await this.service.update(id, updateCoder);
  }

  @Roles('admin')
  @Delete(':id')
  async remove(@Param('_id') id: string): Promise<void> {
    return await this.service.remove(id);
  }
}
