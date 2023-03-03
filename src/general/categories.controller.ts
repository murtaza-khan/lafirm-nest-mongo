import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Request,

} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GeneralService } from './general.service';
import { Category } from './Dto/general.types';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MyAuthGuard } from '../auth/authGuard';

@Controller('')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private generalService: GeneralService) { }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(MyAuthGuard)
  @Get('categories')
  async getCategories(@Request() req): Promise<any> {
    return this.generalService.findCategories(req.user.userType);
  }

  @Get('category/:id')
  async getCategory(@Param('id') id: string): Promise<any> {
    return this.generalService.findCategoryById(id);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(AuthGuard('jwt'))
  @Post('categories')
  async createCategories(@Body() data: Category): Promise<any> {
    return this.generalService.createCategory(data);
  }
}
