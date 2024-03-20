import { useState } from "react";
import { IoMdWallet } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

const InstantDeposit = () => {
  return (
    <>
      <div className="w-full">
        <input
          className="w-full rounded-md bg-green-50/80 py-3 px-4 text-base text-body-color placeholder:text-green-500 text-green-500 outline-none focus:border-primary focus-visible:shadow-none"
          type="text"
          placeholder="Amount"
        />
      </div>
      <div className="mt-10">
        <p className="text-gray-500 ">with 2% extra gateway charge</p>
      </div>
      <div className="w-full flex items-center justify-center gap-6 mt-5">
        <img
          className="w-16 h-12 rounded-md max-w-xs object-contain border p-2"
          src="/assets/images/payment-gateways/bkash.png"
          alt="payment"
        />
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
      <button
        className="items-center px-16 py-4 my-5 bg-green-500 font-medium gap-2 hover:bg-green-600 inline-flex rounded-lg text-center text-white"
        type="submit"
      >
        <IoMdWallet size="24" />
        Pay now
      </button>
    </>
  );
};


const BankManual = () => {
    const [selectedBank, setSelectedBank] = useState(0); // Default selected bank index
    
    const bankData = [
      {
        bankName: 'BRAC BANK PLC',
        acName: 'Guideasy Ltd.',
        acNo: '6008 121 003400 4626',
        branch: 'Uttara 7 Sub Branch',
        routing: '1537736736',
        swift: 'BBBDDH',
        logo: '/assets/images/payment-gateways/bracbank.png',
      },
      {
        bankName: 'EASTERN BANK LTD',
        acName: 'Guideasy Ltd.',
        acNo: '2008 1321 003200 4626',
        branch: 'Uttara 12 Sub Branch',
        routing: '1537736736',
        swift: 'BBBDDH',
        logo: '/assets/images/payment-gateways/ebl.jpg',
      },
      {
        bankName: 'CITY BANK LTD',
        acName: 'Guideasy Ltd.',
        acNo: '1238 121 03200 4626',
        branch: 'Uttara 13 Sub Branch',
        routing: '1537736736',
        swift: 'BBBDDH',
        logo: '/assets/images/payment-gateways/citybank.png',
      },
      {
        bankName: 'DUTCH BANGLA BANK',
        acName: 'Guideasy Ltd.',
        acNo: '5238 121 01300 15126',
        branch: 'Uttara 6 Sub Branch',
        routing: '1537736736',
        swift: 'BBBDDH',
        logo: '/assets/images/payment-gateways/dbbl.png',
      },
    ];
  
    const handleBankClick = (index: any) => {
      setSelectedBank(index);
    };
  
    return (
      <>
        <div className="w-full">
          <input
            className="w-full rounded-md bg-green-50/80 py-3 px-4 text-base text-body-color placeholder:text-green-500 text-green-500 outline-none focus:border-primary focus-visible:shadow-none"
            type="text"
            placeholder="Amount"
          />
        </div>
        <div className="w-full flex items-center justify-center gap-6 mt-5">
          {bankData.map((bank, index) => (
            <img
              key={index}
              className={`w-16 h-12 rounded-md max-w-xs object-contain border p-2 cursor-pointer ${selectedBank === index ? 'border-2 border-green-500' : ''}`}
              src={bank.logo}
              alt="payment"
              onClick={() => handleBankClick(index)}
            />
          ))}
        </div>
  
        <div className="w-full mt-6 px-6">
          <div className="flex justify-between font-semibold mb-1">
            <p>{bankData[selectedBank].bankName}</p>
            <MdContentCopy />
          </div>
          <div className="flex font-semibold gap-3">
            <div className="space-y-1">
              <p>AC Name:</p>
              <p>AC No:</p>
              <p>Branch:</p>
              <p>Routing:</p>
              <p>SWIFT:</p>
            </div>
            <div className="space-y-1">
              <p>{bankData[selectedBank].acName}</p>
              <p>{bankData[selectedBank].acNo}</p>
              <p>{bankData[selectedBank].branch}</p>
              <p>{bankData[selectedBank].routing}</p>
              <p>{bankData[selectedBank].swift}</p>
            </div>
          </div>
        </div>
  
        <button
          className="items-center px-16 py-4 my-5 bg-green-500 font-medium gap-2 hover:bg-green-600 inline-flex rounded-lg text-center text-white"
          type="submit"
        >
          <IoMdWallet size="24" />
          Deposit Request
        </button>
      </>
    );
  };

  const Payment: React.FC<any> = () => {
    const [selectedMethod, setSelectedMethod] = useState('instant');
  
    return (
      <div className="bg-white rounded-xl shadow-md border flex flex-col justify-center items-center p-4">
        <p className="font-semibold text-start">Payment Method</p>
        <div className="flex w-full justify-between items-center gap-4 my-5">
        <button
          className={`items-center px-8 py-3 border-2 shadow ${selectedMethod === 'instant' ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-white hover:bg-gray-100'} font-medium gap-2  inline-flex rounded-lg text-center whitespace-nowrap`}
          type="button"
          onClick={() => setSelectedMethod('instant')}
        >
          Instant Deposit
        </button>
        <button
          className={`items-center px-8 py-3 border-2 shadow ${selectedMethod === 'manual' ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-white hover:bg-gray-100'} font-medium gap-2  inline-flex rounded-lg text-center whitespace-nowrap`}
          type="button"
          onClick={() => setSelectedMethod('manual')}
        >
          Bank (Manual)
        </button>
        </div>
        {selectedMethod === 'instant' ? <InstantDeposit /> : <BankManual />}
      </div>
    );
  };
  
  export default Payment;
