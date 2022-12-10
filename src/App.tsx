// import React, { useState, useEffect } from 'react';
// import LoginForm from './components/login/LoginForm';
// import MainForm from './components/app/MainForm';
// import Container from '@mui/material/Container';


// function App() {
//   const [isLogin, setIsLogin] = useState(false)

//   useEffect(() => {
//     // 어떤식으로 로그인 여부를 체크할지??
//     // if (localStorage.getItem('jwt')) {
//     //   setIsLogin(true)
//     // } else {
//     //   setIsLogin(false);
//     // }
//   }, [isLogin]);

//   const onClickLogin = (id: String, password: String) => {
//     console.log(`id: ${id} / password: ${password}`)
//     setIsLogin(!isLogin)
    
//   }

//   return (
//     <Container maxWidth="sm">
//       {isLogin ? 
//         <MainForm /> : 
//         <LoginForm onClickLogin={onClickLogin} />
//       }
//       {/* <MainForm /> */}
//     </Container>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./pages/AppRoutes";
function App () {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;