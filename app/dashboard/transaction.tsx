import React from "react";

interface TransactionProps {
  profilePicture?: string;
  transactionType?: "debit" | "credit";
  personName?: string;
  amount?: number;
  currency?: string;
}

const Transaction: React.FC<TransactionProps> = ({
  profilePicture,
  transactionType,
  personName,
  amount,
  currency
}) => {
  const getAmountWithSign = (): string => {
    const sign = transactionType === "debit" ? "+" : "-";
    return `${sign}${currency}${amount}`;
  };

  return (
    <div className="transaction-container px-4 grid grid-cols-5">
      <div className="profile-picture col-span-1">
        <img src={profilePicture} alt="Profile" className="w-12 h-12 rounded-lg object-center object-cover" />
      </div>
      <div className="transaction-details col-span-3">
          <div className="text-gray-500 text-sm font-light">
          {transactionType === "debit" ? "Transferred from" : "Transferred to"}
          </div>
          <div className="person-name text-green-500 font-medium mt-1">{personName}</div>
        </div>
        <div className={`amount col-span-1 ${transactionType === "debit" ? "text-green-500" : "text-yellow-500"}`}>{getAmountWithSign()}</div>
      </div>

  );
};

export default Transaction;
