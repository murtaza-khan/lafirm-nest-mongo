import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray, IsBoolean } from 'class-validator';

class Language {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;


}


class State {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  code: string;
}

class Category {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Boolean,
  })
  @IsBoolean()
  @IsNotEmpty()
  isIndividual: boolean;

  @ApiProperty({
    type: Boolean,
  })
  @IsBoolean()
  @IsNotEmpty()
  isBusiness: boolean;

  @ApiProperty({
    type: Boolean,
  })
  @IsBoolean()
  @IsNotEmpty()
  isLocationDependent: boolean;


  @ApiProperty({
    type: [String],
  })
  @IsArray()
  @IsNotEmpty()
  states: string[];
}

export { Language, Category, State };
