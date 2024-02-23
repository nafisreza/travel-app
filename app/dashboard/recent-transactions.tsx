
import Transaction from "./transaction";


export const RecentTransactions: React.FC = () => {
    return (
        <>
        <div className="w-full h-full flex flex-col bg-green-500/10 rounded-lg space-y-4 py-6 px-1">
            <h1 className="text-green-500 font-semibold text-lg mx-4 mb-2">Recent Transactions</h1>
            <Transaction
              profilePicture='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              transactionType='credit'
              personName='John Snow'
              amount={5300}
              currency='$'
            />
            <hr className="h-[2px] w-64 mx-auto my-4 bg-gray-500 border-0 rounded"/>
            <Transaction
              profilePicture='https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              transactionType='debit'
              personName='Walter White'
              amount={6480}
              currency='$'
            />
            <hr className="h-[2px] w-64 mx-auto my-4 bg-gray-500 border-0 rounded"/>
            <Transaction
              profilePicture='https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              transactionType='credit'
              personName='Elon Musk'
              amount={3260}
              currency='$'
            />
            <hr className="h-[2px] w-64 mx-auto my-4 bg-gray-500 border-0 rounded"/>
            <Transaction
              profilePicture='https://images.unsplash.com/photo-1485893086445-ed75865251e0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              transactionType='debit'
              personName='Steve Jobs'
              amount={9824}
              currency='$'
            />
            
        </div>
        </>
    )
}

export default RecentTransactions