import React from 'react';

const TableData = () => {
    const data = [
        { refNo: 'GEMER001', amount: '50,000 BDT', method: 'bKash - 013***550', status: 'Approved' },
        { refNo: 'GEMER002', amount: '150,000 BDT', method: 'Bank - HSBC', status: 'Approved' },
        { refNo: 'GEMER003', amount: '40,000 BDT', method: 'Nagad - 013***550', status: 'Approved' },
        { refNo: 'GEMER004', amount: '75,000 BDT', method: 'Bank - IBBL', status: 'Approved' },
        { refNo: 'GEMER001', amount: '50,000 BDT', method: 'bKash - 013***550', status: 'Approved' },
        { refNo: 'GEMER002', amount: '150,000 BDT', method: 'Bank - HSBC', status: 'Approved' },
        { refNo: 'GEMER003', amount: '40,000 BDT', method: 'Nagad - 013***550', status: 'Approved' },
        { refNo: 'GEMER004', amount: '75,000 BDT', method: 'Bank - IBBL', status: 'Approved' },
        { refNo: 'GEMER001', amount: '50,000 BDT', method: 'bKash - 013***550', status: 'Approved' },
        { refNo: 'GEMER002', amount: '150,000 BDT', method: 'Bank - HSBC', status: 'Approved' },
        { refNo: 'GEMER003', amount: '40,000 BDT', method: 'Nagad - 013***550', status: 'Approved' },
        { refNo: 'GEMER004', amount: '75,000 BDT', method: 'Bank - IBBL', status: 'Approved' },
    ];

    return (
        <table className="">
            <thead className="">
                <tr className="bg-gray-300">
                    <th className="px-8 py-2">Ref</th>
                    <th className="px-8 py-2">Amount</th>
                    <th className="px-8 py-2">Method</th>
                    <th className="px-8 py-2">Status</th>
                    <th className="px-8 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} className={index % 2 === 1 ? "bg-gray-100 text-center" : "text-center"}>
                        <td>{item.refNo}</td>
                        <td>{item.amount}</td>
                        <td>{item.method}</td>
                        <td>{item.status}</td>
                        <td><button className="bg-green-500 text-white px-6 py-1 rounded-lg my-1">View</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const Payment: React.FC<any> = () => {

	return (
            <div className="w-full justify-center items-center border px-12 py-2">
                <div className='flex justify-between my-5'>
                <button className='bg-gray-100 px-8 py-2 rounded-lg'>Show</button>
                <input
				className=' rounded-md bg-gray-100 py-3 px-4 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none'
				type='text'
                placeholder="Search"
			/>
                </div>
                <TableData/>
		</div>
	);
};

export default Payment;
