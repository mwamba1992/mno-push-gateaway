import { IsString, IsNotEmpty, IsNumberString, IsUUID, IsDateString, IsMobilePhone, IsOptional } from 'class-validator';

export class CreatePaymentTransactionDto {
  @IsString()
  @IsNotEmpty()
  merchantRequestId: string;

  @IsUUID()
  @IsNotEmpty()
  checkoutRequestId: string;

  @IsString()
  @IsNotEmpty()
  paymentRequestId: string;

  @IsString()
  @IsNotEmpty()
  resultCode: string;

  @IsString()
  @IsNotEmpty()
  resultDesc: string;

  @IsString()
  @IsNotEmpty()
  sourceChannel: string;

  @IsNumberString()
  @IsNotEmpty()
  transAmount: string;  // Amount is typically a string to preserve precision.

  @IsString()
  @IsNotEmpty()
  billRefNumber: string;

  @IsDateString()
  @IsNotEmpty()
  transactionDate: string; // Assuming date is in ISO 8601 format

  @IsNotEmpty()
  customerMobile: string;

  @IsString()
  @IsNotEmpty()
  transactionCode: string;

  @IsString()
  @IsNotEmpty()
  thirdPartyTransId: string;
}
