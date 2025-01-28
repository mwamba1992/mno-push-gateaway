import { IsString, IsNumber, IsUrl, IsNotEmpty, IsOptional, IsPhoneNumber } from 'class-validator';

export class PushRequestDto {
  @IsString()
  @IsNotEmpty()
  merchantCode: string;

  @IsString()
  @IsNotEmpty()
  networkCode: string;

  @IsNumber()
  @IsNotEmpty()
  transactionFee: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsUrl()
  @IsNotEmpty()
  callbackUrl: string;

  @IsPhoneNumber('TZ')  // Assuming 'TZ' (Tanzania) is the country code. Adjust if needed.
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsOptional()  // Optional field
  transactionDescription: string;

  @IsString()
  @IsNotEmpty()
  accountReference: string;
}
