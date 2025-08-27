declare module 'iyzipay' {
  export default class Iyzipay {
    constructor(config: {
      apiKey: string;
      secretKey: string;
      uri: string;
    });

    static LOCALE: {
      TR: string;
    };

    static CURRENCY: {
      TRY: string;
    };

    static PAYMENT_CHANNEL: {
      WEB: string;
    };

    static PAYMENT_GROUP: {
      PRODUCT: string;
    };

    static BASKET_ITEM_TYPE: {
      VIRTUAL: string;
    };

    payment: {
      create: (request: any, callback: (err: any, result: any) => void) => void;
    };

    installmentInfo: {
      retrieve: (request: any, callback: (err: any, result: any) => void) => void;
    };
  }
}
