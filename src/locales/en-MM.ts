import { LocaleInterface } from './locale.interface';

export class Locale implements LocaleInterface {
  public currency = {
    name: 'Kyat',
    plural: 'Kyats',
    symbol: 'K',
    fractionalUnit: {
      name: 'Pya',
      plural: 'Pyas',
      symbol: '',
    },
  };

  public texts = {
    and: 'And',
    minus: 'Minus',
    only: 'Only',
    point: 'Point',
  };

  public numberWordsMapping = [
    { number: 10000000, value: 'Crore' },
    { number: 100000, value: 'Lakh' },
    { number: 1000, value: 'Thousand' },
    { number: 100, value: 'Hundred' },
    { number: 90, value: 'Ninety' },
    { number: 80, value: 'Eighty' },
    { number: 70, value: 'Seventy' },
    { number: 60, value: 'Sixty' },
    { number: 50, value: 'Fifty' },
    { number: 40, value: 'Forty' },
    { number: 30, value: 'Thirty' },
    { number: 20, value: 'Twenty' },
    { number: 19, value: 'Nineteen' },
    { number: 18, value: 'Eighteen' },
    { number: 17, value: 'Seventeen' },
    { number: 16, value: 'Sixteen' },
    { number: 15, value: 'Fifteen' },
    { number: 14, value: 'Fourteen' },
    { number: 13, value: 'Thirteen' },
    { number: 12, value: 'Twelve' },
    { number: 11, value: 'Eleven' },
    { number: 10, value: 'Ten' },
    { number: 9, value: 'Nine' },
    { number: 8, value: 'Eight' },
    { number: 7, value: 'Seven' },
    { number: 6, value: 'Six' },
    { number: 5, value: 'Five' },
    { number: 4, value: 'Four' },
    { number: 3, value: 'Three' },
    { number: 2, value: 'Two' },
    { number: 1, value: 'One' },
    { number: 0, value: 'Zero' },
  ];
}
