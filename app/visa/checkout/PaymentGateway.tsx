import Link from "next/link";

const PaymentGateway = ({priceId:any}) => {
    return (
      <>
        <div className="w-full flex items-center justify-center gap-6">
          <Link href="#">
          <img
            className="w-16 h-12 rounded-md max-w-xs object-contain border p-2"
            src="/assets/images/payment-gateways/bkash.png"
            alt="payment"
          />
          </Link>
          <img
            className="w-16 h-12 rounded-md max-w-xs object-contain border p-2"
            src="/assets/images/payment-gateways/nagad.png"
            alt="payment"
          />
          <img
            className="w-16 h-12 rounded-md max-w-xs object-contain border p-2"
            src="/assets/images/payment-gateways/citybank.png"
            alt="payment"
          />
          <img
            className="w-16 h-12 rounded-md max-w-xs object-contain border p-2"
            src="/assets/images/payment-gateways/dbbl.png"
            alt="payment"
          />
        </div>
      </>
    );
  };

  export default PaymentGateway;