import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsString,
  IsDate,
  Length,
  Matches,
} from 'class-validator';

@Schema({ timestamps: true })
export class Students extends Document {
  @IsString()
  @Length(3, 50)
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @IsNumber()
  @Prop({ required: true, unique: true })
  document: number;

  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  @Prop({ required: true, unique: true })
  email: string;

  @IsString()
  @Length(6, 8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'password too weak',
  })
  @Prop({ required: true, min: 6, max: 8 })
  password: string;

  @IsNumber()
  @Prop({ required: true })
  phone: number;

  @IsDate()
  @Prop({ required: true })
  dateBirth: Date;

  @Prop({ required: true })
  clan: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export const StudentsSchema = SchemaFactory.createForClass(Students);
