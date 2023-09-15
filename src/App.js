import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes , privateRoutes } from "~/routes";
import {DefaultLayout} from "~/components/layouts";
import WebLayout from "./components/layouts/WebLayout/WebLayout";
import AccountManagementLayout from "./components/layouts/AccountManagementLayout/AccountManagementLayout";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            privateRoutes.map((route, index) =>{
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
                return (
                  <Route 
                    key={index} 
                    path={route.path} 
                    element={
                      <Layout>
                        <Page/>
                      </Layout>
                    }
                  />
                )
            })
          }
          {
            publicRoutes.map((route,index) => {
              const Layout = route.layout !== null ? (route.pageCode === 1 ? WebLayout : AccountManagementLayout) : Fragment ;
              const Page = route.component;
                return (
                  <Route 
                    key={index} 
                    path={route.path} 
                    element={
                      <Layout>
                        <Page/>
                      </Layout>
                    }
                  />
                )
            })
          }     
        </Routes> 
        <ToastContainer/>
      </div>
    </Router>
  );
}
export default App;
