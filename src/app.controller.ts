import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('pay')
  @HttpCode(200)
  async postPayWebHook(@Body() body: any) {
    const {
      goodsName,
      buyerName,
      buyerTel,
      buyerEmail,
      amount,
      paidAt,
      card,
      status,
      receiptUrl,
    } = body;

    const { cardName, cardNum } = card;

    try {
      await this.appService.savePayLog({
        goodsName,
        buyerName,
        buyerTel,
        buyerEmail,
        amount,
        paidAt,
        cardName,
        cardNum,
        status,
        receiptUrl,
      });
    } catch (err) {
      console.log(err);
    }

    return 'OK';
  }
}
