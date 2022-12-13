import { Module, forwardRef } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileController } from './profile.controller';
import { AreaSchema, LanguageSchema, ProfileSchema } from './profile.schema';
import { ProfileService } from './profile.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema },{ name: 'Language', schema: LanguageSchema },{ name: 'Area', schema: AreaSchema }]),
    forwardRef(() => AuthModule),
  ],
  providers: [ProfileService],
  exports: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}