export interface PayLog {
  status: string;
  goodsName: string;
  buyerName: string;
  buyerTel: string;
  buyerEmail: string;
  amount: number;
  paidAt: Date;
  cardName: string | null;
  cardNum: string | null;
  receiptUrl: string;
}
