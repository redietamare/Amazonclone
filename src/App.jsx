import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import Routing from "./Router.jsx";
import React, { useCallback, useContext, useEffect } from "react";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";

function App() {
    const [{user},dispatch] = useContext(DataContext)
    useEffect(() => {
      auth.onAuthStateChanged((authUser)=>{
        if (authUser){
          dispatch({
            type:Type.SET_USER,
            user:authUser
          })
        }else{
          dispatch({
            type:Type.SET_USER,
            user:null
          })
        }
      })
    }, [ ])
    




  return <Routing />;
}

export default App;