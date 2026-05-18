import { signOut } from "firebase/auth";

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  useEffect,
  useState,
} from "react";

import {
  auth,
  db,
} from "../firebase/firebase";

function Dashboard() {

  const [data, setData] = useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  const [recipient, setRecipient] =
    useState("");

  const [amount, setAmount] =
    useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {

    const user = auth.currentUser;

    if (!user) return;

    const docRef = doc(
      db,
      "users",
      user.uid
    );

    const docSnap =
      await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const sendMoney = async () => {

    const user = auth.currentUser;

    if (!user || !data) return;

    const sendAmount =
      Number(amount);

    if (!recipient || !sendAmount) {
      alert("Fill all fields");
      return;
    }

    if (sendAmount > data.balance) {
      alert("Insufficient balance");
      return;
    }

    const newBalance =
      data.balance - sendAmount;

    const newExpenses =
      data.expenses + sendAmount;

    const newTransactions = [

      `Transfer to ${recipient} -$${sendAmount}`,

      ...(data.transactions || []),

    ];

    const docRef = doc(
      db,
      "users",
      user.uid
    );

    await updateDoc(docRef, {

      balance: newBalance,

      expenses: newExpenses,

      transactions:
        newTransactions,

    });

    setData({

      ...data,

      balance: newBalance,

      expenses: newExpenses,

      transactions:
        newTransactions,

    });

    setRecipient("");

    setAmount("");

    alert("Transfer Successful 🔥");

  };

  const today =
    new Date().toLocaleDateString();

  const hour =
    new Date().getHours();

  let greeting =
    "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  if (loading) {
    return (
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Loading...
      </h1>
    );
  }

  return (

    <div className="dashboard">

      <div className="top-bar">

        <div>

          <h1>
            Silver Bank
          </h1>

          <p>
            {greeting} 👋
          </p>

          <p>
            {auth.currentUser?.email}
          </p>

          <p>
            {today}
          </p>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      <div className="cards">

        <div className="card">
          <h3>Balance</h3>
          <h2>
            $
            {data.balance}
          </h2>
        </div>

        <div className="card">
          <h3>Income</h3>
          <h2>
            $
            {data.income}
          </h2>
        </div>

        <div className="card">
          <h3>Expenses</h3>
          <h2>
            $
            {data.expenses}
          </h2>
        </div>

        <div className="card">
          <h3>Savings</h3>
          <h2>
            $
            {data.savings}
          </h2>
        </div>

        <div className="card">
          <h3>Investments</h3>
          <h2>
            $
            {data.investments}
          </h2>
        </div>

      </div>

      <div className="transfer-box">

        <h2>
          Send Money
        </h2>

        <input
          type="text"
          placeholder="Recipient Name"
          value={recipient}
          onChange={(e) =>
            setRecipient(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            setAmount(
              e.target.value
            )
          }
        />

        <button
          onClick={sendMoney}
        >
          Send Money
        </button>

      </div>

      <div className="transactions">

        <h2>
          Recent Transactions
        </h2>

        {data.transactions?.map(

          (
            item: string,
            index: number
          ) => (

            <div
              key={index}
              className={
                item.includes("+")
                  ? "transaction-item income"
                  : "transaction-item expense"
              }
            >
              {item}
            </div>

          )
        )}

      </div>

    </div>

  );
}

export default Dashboard;