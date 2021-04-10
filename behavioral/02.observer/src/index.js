import Payment from "./events/payment.js";
import Marketing from "./observers/marketing.js";
import Shipment from "./observers/shipment.js";
import PaymentSubject from "./subjects/payment.js";


const subject = new PaymentSubject();
const marketing = new Marketing();
subject.subscribe(marketing)

const shipment = new Shipment();
subject.subscribe(shipment)

const payment = new Payment(subject);

payment.creditCard({ userName: 'Vagner', id: Date.now() });

subject.unsubscribe(marketing);
payment.creditCard({ userName: 'Davi', id: Date.now() });
