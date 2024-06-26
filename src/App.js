import AccountOperation from './feature/accounts/AccountOperation'
import BalanceDisplay from './feature/accounts/BalanceDisplay';
import CreateCustomer from './feature/customers/CreateCustomer';
import Customer from './feature/customers/Customer';

function App() {
  return (
    <div >
        <h1>🧣 The React Redux Bank 📊</h1>
        <CreateCustomer/>
        <BalanceDisplay/>
        <Customer/>
        <AccountOperation />
    </div>
  );
}

export default App;
