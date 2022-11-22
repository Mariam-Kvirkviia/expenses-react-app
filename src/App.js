import { useState, useEffect } from "react";
import Context from "./Context";
import { Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage.js";
import HomePage from "./pages/HomePage.js";
import ProfilePage from "./pages/ProfilePage.js";
import ExpensesPage from "./pages/ExpensesPage.js";
import Layout from "./component/Layout/Layout.js";
import { Switch } from "react-router-dom/cjs/react-router-dom.min.js";
function App() {
  let [fetching, setFetch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  let [addExpense, setAddExpense] = useState("");
  let [token, setToken] = useState("");
  let [id, setId] = useState("");
  let userLoggedIn = !!token;

  useEffect(() => {
    if (id) {
      fetch(
        `https://react-projects-160bb-default-rtdb.firebaseio.com/expenses/${id
          .split(".")
          .join("")}.json`
      )
        .then((response) => response.json())
        .then((data) => {
          let fetchedData = [];
          for (let key in data) {
            let d = {
              id: key,
              amount: data[key].amount,
              title: data[key].title,
              date: new Date(data[key].date),
            };
            fetchedData.push(d);
          }

          setAddExpense(fetchedData);
        });
    }
  }, [fetching, id]);

  let onDate = (expense) => {
    //if id

    fetch(
      `https://react-projects-160bb-default-rtdb.firebaseio.com/expenses/${id
        .split(".")
        .join("")}.json`,
      {
        method: "POST",
        body: JSON.stringify(expense),
      }
    );
  };
  let handleLogging = (token) => {
    setToken(token);
  };
  let handleOut = () => {
    setToken(null);
  };

  return (
    <Context.Provider
      className="App"
      value={{
        DataF: onDate,
        expenses: addExpense,
        reFetch: setFetch,
        token,
        set: setIsLogin,
        isLogin: isLogin,
        userLoggedIn,
        login: handleLogging,
        logout: handleOut,
        setId,
        id,
      }}
    >
      <Layout>
        <Switch>
          <Route path="/auth" exact>
            <AuthPage />
          </Route>
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/expenses">
            <ExpensesPage />
          </Route>
        </Switch>
      </Layout>
    </Context.Provider>
  );
}

export default App;
/** <Context.Provider
      className="App"
      value={{ DataF: onDate, expenses: addExpense, reFetch: setFetch }}
    >
      <NewExpense />
      <AllExpenses />
    </Context.Provider> */
