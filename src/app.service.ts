import { Injectable } from '@nestjs/common';
import axios from 'axios';
import dayjs from 'dayjs';
import { PayLog } from './types';

@Injectable()
export class AppService {
  constructor() {}

  async savePayLog(data: PayLog) {
    const microsoftTeamsWebhookUrl = process.env.MICROSOFT_TEAMS_WEBHOOK_URL;

    if (!microsoftTeamsWebhookUrl) {
      console.log('MICROSOFT_TEAMS_WEBHOOK_URL is not set');
    }

    try {
      await axios.post(microsoftTeamsWebhookUrl, {
        '@type': 'MessageCard',
        '@context': 'http://schema.org/extensions',
        themeColor: '0076D7',
        summary: '결제 완료 알림',
        sections: [
          {
            activityTitle: '결제 완료 알림',
            facts: [
              {
                name: '상품명',
                value: data.goodsName,
              },
              {
                name: '구매자 이름',
                value: data.buyerName,
              },
              {
                name: '구매자 전화번호',
                value: data.buyerTel || '없음',
              },
              {
                name: '구매자 이메일',
                value: data.buyerEmail || '없음',
              },
              {
                name: '결제 금액',
                value: data.amount,
              },
              {
                name: '결제 일시',
                value: dayjs(data.paidAt).format('YYYY-MM-DD HH:mm:ss'),
              },
              {
                name: '카드 이름',
                value: data.cardName || '없음',
              },
              {
                name: '카드 번호',
                value: data.cardNum || '없음',
              },
            ],
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  }
}
