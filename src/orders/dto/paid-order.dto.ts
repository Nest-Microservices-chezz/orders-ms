import { IsString, IsUrl, IsUUID } from 'class-validator';

export class paidOrderDto {
  @IsString()
  stripePaymentId: string;

  @IsString()
  @IsUUID()
  orderId: string;
  
  @IsString()
  @IsUrl()
  receiptUrl: string;
}
