// isLogin

export const isLogin=()=>
{
  console.log('in login::');
  
  let data=  sessionStorage.getItem("data");
  if(data==null)
  {
    return false;
     
  }else
  {
    
    return true;
  }
}
// doLogin

export const doLogin=(data)=>
{
    sessionStorage.setItem("data",data);
   
    
}

// doLogout
export  const doLogout=()=>
{
    sessionStorage.removeItem("data");
 
}

// getCurrent user 

export  const getCurrentUser=()=>
{
    if(isLogin)
    {
            return JSON.parse(sessionStorage.getItem("data"));
    }else
    {
        return false;
    }
}
export const setAuthToken=(token)=>
{
 
  if(token)
  {
//       console.log("Inside token :::::::::::::::::::::::::::::::::::::::: "+token);
// //      const token = store.getState().session.token;
//       config.headers.Authorization =  token;
       
//       return config;
//   });


    // axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
    // alert(axios.defaults.headers.common.Authorization); 
  }
}