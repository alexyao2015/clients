import { CardView } from '../view/cardView';

import { Card as CardDomain } from '../domain/card';

export class Card {
    static template(): Card {
        const req = new Card();
        req.cardholderName = 'John Doe';
        req.brand = 'visa';
        req.number = '4242424242424242';
        req.expMonth = '04';
        req.expYear = '2023';
        req.code = '123';
        return req;
    }

    static toView(req: Card, view = new CardView()) {
        view.cardholderName = req.cardholderName;
        view.brand = req.brand;
        view.number = req.number;
        view.expMonth = req.expMonth;
        view.expYear = req.expYear;
        view.code = req.code;
        return view;
    }

    cardholderName: string;
    brand: string;
    number: string;
    expMonth: string;
    expYear: string;
    code: string;

    constructor(o?: CardView | CardDomain) {
        if (o == null) {
            return;
        }

        if (o instanceof CardView) {
            this.cardholderName = o.cardholderName;
            this.brand = o.brand;
            this.number = o.number;
            this.expMonth = o.expMonth;
            this.expYear = o.expYear;
            this.code = o.code;
        } else {
            this.cardholderName = o.cardholderName?.encryptedString;
            this.brand = o.brand?.encryptedString;
            this.number = o.number?.encryptedString;
            this.expMonth = o.expMonth?.encryptedString;
            this.expYear = o.expYear?.encryptedString;
            this.code = o.code?.encryptedString;
        }
    }
}
