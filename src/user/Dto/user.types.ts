import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsArray, IsString, IsNotEmpty, IsBoolean, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { AddressTypeEnum, BillingStructure, DesignationTypeEnum, OralProficiency, UserType, VerifyCodeSource } from '../../common/enums';
import { OfficeType, RepresentType, SubscriptionPackages, BusinessType as BusinessTypeEnum } from '../../common/enums';

class AddressType {
  @ApiProperty({
    type: String,
    example: 'address detail'
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ enum: OfficeType })
  @IsEnum(OfficeType)
  @IsString()
  @IsOptional()
  officeType?: string;

  @ApiProperty({
    enum: AddressTypeEnum,
  })
  @IsEnum(AddressTypeEnum)
  @IsOptional()
  addressType: string;

  @ApiProperty({
    type: String,
    example: '00112'
  })
  @IsString()
  @IsNotEmpty()
  postalCode: String;

  @ApiProperty({
    type: String,
    example: 'NY'
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    type: String,
    example: 'stateId'
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    type: String,
    example: 'country'
  })
  @IsString()
  @IsNotEmpty()
  country: string;
}

class BusinessType {
  @ApiProperty({
    type: String,
    example: 'Business name'
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Boolean,
    example: true
  })
  @IsBoolean()
  @IsOptional()
  isGeneralCounselor?: boolean;

  @ApiProperty({
    enum: BusinessTypeEnum,
  })
  @IsEnum(BusinessTypeEnum)
  @IsOptional()
  businessType?: BusinessTypeEnum;

  @ApiProperty({
    type: Date,
  })
  @IsString()
  @IsOptional()
  registeredDate?: Date;

  @ApiProperty({
    type: String,
    example: 'EIN 1'
  })
  @IsString()
  @IsOptional()
  EIN?: string;

  @ApiProperty({
    type: String,
    example: '45 66539878'
  })
  @IsString()
  @IsOptional()
  businessPhone?: string;

  @ApiProperty({
    type: String,
    example: 'www.example.com'
  })
  @IsString()
  @IsOptional()
  website?: string;

  @ApiProperty({
    type: String,
    example: 'business description'
  })
  @IsString()
  @IsOptional()
  businessDescription?: string;


  @ApiProperty({
    type: [AddressType]
  })
  @IsArray()
  @IsOptional()
  addresses?: AddressType[];

}

class ExperienceType {
  @ApiProperty({
    type: String,
    example: 'title 1'
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    type: String,
    example: 'Description'
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: Array,
    example: ['categoryId']
  })
  @IsArray()
  @IsNotEmpty()
  practiceAreas: string[];

  @ApiProperty({
    type: String,
    example: 'industry name'
  })
  @IsString()
  @IsNotEmpty()
  industry: string;

  @ApiProperty({
    type: String,
    example: 'court 1'
  })
  @IsString()
  @IsNotEmpty()
  court: string;
}

class LanguageType {
  @ApiProperty({
    type: String,
    example: 'languageId'
  })
  @IsString()
  language: string;

  @ApiProperty({
    enum: OralProficiency,
  })
  @IsEnum(OralProficiency)
  @IsString()
  @IsOptional()
  oralProficiency?: string;

  @ApiProperty({
    enum: OralProficiency,
  })
  @IsEnum(OralProficiency)
  @IsString()
  @IsOptional()
  writtenProficiency?: string;
}

class LicenseType {
  @ApiProperty({
    type: String,
    example: 'stateId'
  })
  @IsString()
  @IsOptional()
  state: string;

  @ApiProperty({
    type: String,
    example: 'Li-123'
  })
  @IsString()
  @IsOptional()
  licenseNumber: string;
}

class ProfileType {
  @ApiProperty({
    enum: DesignationTypeEnum
  })
  @IsEnum(DesignationTypeEnum)
  @IsString()
  @IsOptional()
  designation: string;

  @ApiProperty({
    type: String,
    example: 'Role at the company'
  })
  @IsString()
  @IsOptional()
  roleAtCompany: string;

  @ApiProperty({
    type: Number,
    example: 1
  })
  @IsNumber()
  @IsOptional()
  stepsCompleted: number;

  @ApiProperty({
    type: String,
    example: 'Firm 1'
  })
  @IsString()
  @IsOptional()
  firmName?: string;

  @ApiProperty({
    type: String,
    example: 'firm web name'
  })
  @IsString()
  @IsOptional()
  firmWebsite?: string;

  @ApiProperty({
    enum: BillingStructure,
    isArray: true,
    example: [BillingStructure.FIXED_FEE, BillingStructure.ON_CONTINGENCY, BillingStructure.PER_HOUR]
  })
  @IsEnum(BillingStructure, { each: true })
  @IsArray()
  @IsOptional()
  billingStructure?: BillingStructure[];

  @ApiProperty({
    type: Number,
    example: 10
  })
  @IsNumber()
  @IsOptional()
  ratePerHourMin?: number;

  @ApiProperty({
    type: Number,
    example: 10
  })
  @IsNumber()
  @IsOptional()
  ratePerHourMax?: number;

  @ApiProperty({
    type: Number,
    example: 10
  })
  @IsNumber()
  @IsOptional()
  onContingency?: number;

  @ApiProperty({
    enum: RepresentType,
    isArray: true,
    example: [RepresentType.COMPANIES, RepresentType.INDIVIDUAL]
  })
  @IsEnum(RepresentType, { each: true })
  @IsArray()
  @IsOptional()
  represent?: RepresentType[];

  @ApiProperty({
    type: [String],
    example: ['CategoryId']
  })
  @IsArray()
  @IsOptional()
  practiceAreas?: [string];

  @ApiProperty({
    type: Date,
  })
  @IsString()
  @IsOptional()
  practicingLawSince?: Date;

  @ApiProperty({
    type: LicenseType,
    isArray: true
  })
  @IsArray()
  @IsOptional()
  licenses?: LicenseType[];

  @ApiProperty({
    type: [String],
    example: ['stateId']
  })
  @IsArray()
  @IsOptional()
  locationPermitted?: string[];

  @ApiProperty({
    type: String,
    example: 'biography string'
  })
  @IsString()
  @IsOptional()
  biography?: string;

  @ApiProperty({
    type: [LanguageType],
  })
  @IsOptional()
  @IsArray()
  languages?: LanguageType[];

  @ApiProperty({
    type: [ExperienceType],
  })
  @IsOptional()
  @IsArray()
  experiences?: ExperienceType[];

  @ApiProperty({
    type: [BusinessType],
  })
  @IsOptional()
  @IsArray()
  businesses?: BusinessType[];

  @ApiProperty({
    type: [AddressType],
  })
  @IsOptional()
  @IsArray()
  addresses?: AddressType[];

  @ApiProperty({ enum: SubscriptionPackages })
  @IsEnum(SubscriptionPackages)
  @IsString()
  @IsOptional()
  subscription?: string;
}

class Language {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}


class DefaultMessageType {
  @IsString()
  message: string;
}

class UserDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    type: BusinessType,
  })
  @IsOptional()
  business?: BusinessType;

  @ApiProperty({ enum: UserType })
  @IsEnum(UserType)
  @IsNotEmpty()
  userType: string;
}
class LoginDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

class GenerateTokenDto {
  @ApiProperty({ type: String, enum: VerifyCodeSource })
  @IsEnum(VerifyCodeSource)
  @IsString()
  @IsOptional()
  source: string = VerifyCodeSource.EMAIL_VERIFICATION;

  @ApiProperty({
    type: String,
  })
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
}

class VerificationTokenDto {
  @ApiProperty({ type: String, enum: VerifyCodeSource })
  @IsEnum(VerifyCodeSource)
  @IsString()
  @IsOptional()
  source: string = VerifyCodeSource.EMAIL_VERIFICATION;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  verificationToken: number;
}

class updatePasswordDto {

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export { UserDto, DefaultMessageType, LoginDto, GenerateTokenDto, VerificationTokenDto, ProfileType, AddressType, BusinessType, ExperienceType, Language, updatePasswordDto };
