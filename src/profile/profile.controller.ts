import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Get,
  UseGuards,
  Request,
  Patch,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from './profile.service';
import { Language, ProfileType } from './Dto/profile.types';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { constructSuccessResponse } from '../common/wrappers';

@Controller('profile')
@ApiBearerAuth('JWT-auth')
@ApiTags('Profile')
export class ProfileController {
  constructor(private profileService: ProfileService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async me(@Request() req) {
    const data = await this.profileService.findUserAndPopulateProfile(req.user);
    return constructSuccessResponse(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('')
  async update(@Request() req, @Body() data: ProfileType): Promise<any> {
    data.userId = req.user.person;
    return this.profileService.updateProfile(data);
  }
}
