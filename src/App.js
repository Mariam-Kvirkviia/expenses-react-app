import { useState, useEffect } from "react";
import Context from "./Context";
import { Route, Redirect, useHistory } from "react-router-dom";
import AuthPage from "./pages/AuthPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import ExpensesPage from "./pages/ExpensesPage.js";
import Layout from "./component/Layout/Layout.js";
import { Switch } from "react-router-dom/cjs/react-router-dom.min.js";

function App() {
  let [fetching, setFetch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  let [addExpense, setAddExpense] = useState("");
  let [token, setToken] = useState("");
  let idStorage = localStorage.getItem("id");
  let history = useHistory();
  useEffect(() => {
    if (idStorage) {
      fetch(
        `https://react-projects-160bb-default-rtdb.firebaseio.com/expenses/${idStorage}.json`
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
  }, [fetching, idStorage]);

  let onDate = (expense) => {
    //if id

    fetch(
      `https://react-projects-160bb-default-rtdb.firebaseio.com/expenses/${idStorage}.json`,
      {
        method: "POST",
        body: JSON.stringify(expense),
      }
    );
  };

  let handleLogging = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  let handleOut = () => {
    setToken(null);
    localStorage.clear();
    history.replace("/auth");
  };

  return (
    <Context.Provider
      className="App"
      value={{
        DataF: onDate,
        expenses: addExpense,
        reFetch: setFetch,
        set: setIsLogin,
        isLogin: isLogin,
        login: handleLogging,
        token,
        logout: handleOut,
      }}
    >
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/auth" />
          </Route>
          <Route path="/auth" exact>
            {localStorage.getItem("token") ? (
              <Redirect to="/expenses" />
            ) : (
              <AuthPage />
            )}
          </Route>
          <Route path="/profile">
            {localStorage.getItem("token") ? (
              <ProfilePage />
            ) : (
              <Redirect to="/auth" />
            )}
          </Route>
          <Route path="/expenses">
            {localStorage.getItem("token") ? (
              <ExpensesPage />
            ) : (
              <Redirect to="/auth" />
            )}
          </Route>
          <Route path="*">
            <Redirect to="/auth" />
          </Route>
        </Switch>
      </Layout>
    </Context.Provider>
  );
}
/**{userLoggedIn ? <ExpensesPage /> : <AuthPage />} */

export default App;
/** <Context.Provider
      className="App"
      value={{ DataF: onDate, expenses: addExpense, reFetch: setFetch }}
    >
      <NewExpense />
      <AllExpenses />
    </Context.Provider> */
