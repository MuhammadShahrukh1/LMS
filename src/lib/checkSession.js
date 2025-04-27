import { useNavigate } from "react-router-dom";
import supabase from "./Database";
const PageNavigate = useNavigate();
import Dashboard from "../pages/Dashboard";
import Login from '../pages/login'

async function CheckSection(){
        try {
        const {data, error} = await supabase.auth.getSession();
        const authPage = ['/index.html', '/login.html', '/'];
        const currentPath = window.location.pathname;
        const isAuthPage = authPage.some((pages) => pages.includes(currentPath));
        console.log(data)
        if(data.session){
            if(isAuthPage){
                PageNavigate('/dashboard')
                // window.location.href = './dashboard.html';
            }
        }
        else{
            if(!(isAuthPage)){
                PageNavigate('/login')
                // window.location.href = './login.html'
            }
        }
        if(error) throw error
    } catch (error) {
        console.log(error)
 
 }

 return(
    data.session ? <Dashboard /> : <Login />
 )


}
export default CheckSection