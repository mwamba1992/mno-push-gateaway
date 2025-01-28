import { IsString, IsBoolean, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateTransactionResponseDto {
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsString()
  @IsNotEmpty()
  detail: string;

  @IsString()
  @IsNotEmpty()
  paymentGateway: string;

  @IsString()
  @IsNotEmpty()
  merchantRequestId: string;

  @IsUUID()
  @IsNotEmpty()
  checkoutRequestId: string;

  @IsString()
  @IsNotEmpty()
  transactionReference: string;

  @IsString()
  @IsNotEmpty()
  responseCode: string;

  @IsString()
  @IsNotEmpty()
  responseDescription: string;

  @IsString()
  @IsOptional()
  customerMessage: string;
}
