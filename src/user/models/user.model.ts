
import { BillingStructure, OfficeType, OralProficiency, RepresentType, BusinessType, UserType, AddressTypeEnum, DesignationTypeEnum } from '../../common/enums';
import * as mongoose from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Category } from 'src/general/models/category.model';
import { State } from 'src/general/models/state.model';
import { Language as LanguageModel } from 'src/general/models/language.model';

export type UserDocument = HydratedDocument<User>;
class Address {
  @Prop()
  address: string;

  @Prop({ type: String, enum: OfficeType })
  officeType: OfficeType;

  @Prop({ type: String, enum: AddressTypeEnum })
  addressType: AddressTypeEnum;

  @Prop()
  postalCode: string;

  @Prop()
  city: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'State' })
  state: State;

  @Prop()
  country: string;
}

class Business {
  @Prop()
  name: string;

  @Prop()
  isGeneralCounselor?: boolean;

  @Prop({ type: [String], enum: BusinessType })
  businessType?: BusinessType;

  @Prop()
  registeredDate?: Date;

  @Prop()
  EIN?: string;

  @Prop()
  businessPhone?: string;

  @Prop()
  website?: string;

  @Prop()
  businessDescription?: string;


  @Prop()
  addresses?: Address[];

}

class Experience {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] })
  practiceAreas: Category[];

  @Prop()
  industry: string;

  @Prop()
  court: string;
}

class Language {
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Language' } })
  language: LanguageModel;

  @Prop({ type: String, enum: OralProficiency })
  oralProficiency: OralProficiency;

  @Prop({ type: String, enum: OralProficiency })
  writtenProficiency: OralProficiency;
}

class License {
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'State' } })
  state: State;

  @Prop()
  licenseNumber: string;
}

@Schema()
export class User {
  @Prop()
  profilePhoto: string;

  @Prop()
  businessLogo: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  verificationToken: number;

  @Prop({ type: String, enum: UserType })
  userType: string;

  @Prop()
  isEmailVerified: boolean;

  @Prop()
  emailVerificationAttempts: number;

  @Prop({ type: String, enum: DesignationTypeEnum })
  designation: string;

  @Prop()
  roleAtCompany: string;

  @Prop()
  stepsCompleted: number

  @Prop()
  firmName: string;

  @Prop()
  firmWebsite: string;

  @Prop({ type: [String], enum: BillingStructure })
  billingStructure: BillingStructure[];

  @Prop()
  ratePerHourMin?: number;

  @Prop()
  ratePerHourMax?: number;

  @Prop()
  onContingency: number;

  @Prop([Language])
  languages: Language[]

  @Prop({ type: [String], enum: RepresentType })
  represent: RepresentType[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] })
  practiceAreas: Category[];

  @Prop({ type: Date })
  practicingLawSince: Date;

  @Prop([License])
  licenses: License[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'State' }] })
  locationPermitted: State[];

  @Prop()
  biography: string;

  @Prop([Experience])
  experiences: Experience[];

  @Prop([Business])
  businesses: Business[];

  @Prop([Address])
  addresses: Address[];

  @Prop()
  subscription: string;
}


export const UserSchema = SchemaFactory.createForClass(User);

