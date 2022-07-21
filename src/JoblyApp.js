import React, { useState, useEffect } from "react";
import { BrowserRouter} from "react-router-dom";
import RoutesList from "./RoutesList";
import Navigation from "./Navigation";
import userContext from "./userContext";
import JoblyApi from "./api";


/** Main JoblyApp Component
 *
 *  Props:
 *  - none
 *
 *  States:
 *  - currUser :
 *    {user: {username, password, firstName, lastName, email, isAdmin, [jobs]}}
 * 
 *  - token : string
 *
 *  Houses routes list
 *
 *  JoblyApp -> Routes
 */

function JoblyApp() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState("");


  /** Calls JoblyApi to get user when token changes. */
  useEffect(function fetchUserDataWhenTokenChanges(){
    async function fetchUser(){
      if (token){
        try{
          const userFromAPI = await JoblyApi.getUser(currUser);
          setCurrUser(userFromAPI);
        } catch (err){
          setCurrUser(null);
        }
      }
    };

    fetchUser();

  }, [token]
  );

  /** Login function makes API call
   * 
   *  Takes:
   *  - form data from LoginForm 
   * 
   *  Sets 
   *  - token and currUser.username
  */
  async function login(userData) {
      const token = await JoblyApi.login(userData);
      setToken(token);
      setCurrUser(userData.username);
      

  }

  /** Signup function makes API call
   * 
   *  Takes: 
   *  - form data from SignUpForm
   * 
   *  Sets
   *  - token and currUser.username
  */
  async function signup(userData) {
    const token = await JoblyApi.signUp(userData);
    setToken(token);
    setCurrUser(userData.username);

  }

  /** Logout function 
   * 
   *  Sets
   *  - token to null
   */
  function logout() {
    const token = JoblyApi.logout();
    setToken(token)
    
  }

  return (
    <div className="JoblyApp">
      <userContext.Provider value={{currUser, token}}>
        <BrowserRouter>
          <Navigation logout={logout}/>
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </userContext.Provider>
      
    </div>
  );
}

export default JoblyApp;
