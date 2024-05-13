import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsNumber,
  IsDate,
  Length,
  Matches,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCoderDto {
  @IsString()
  @Length(3, 50)
  readonly name: string;

  @IsNotEmpty()
  readonly lastname: string;

  @IsNumber()
  readonly document: number;

  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  readonly email: string;

  @IsString()
  @Length(6, 8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'password too weak',
  })
  readonly password: string;

  @IsNumber()
  readonly phone: number;

  @IsDate()
  readonly dateBirth: Date;

  @IsNotEmpty()
  readonly clan: string;
}
