import LogInForm from "../../components/SignInForm/SignInForm"
import './Login.css'

const Login = () => {
 return (
  <div id={'loginPage'} style={{ height: '100vh', width: '100vw', position: 'relative', float: 'right' }}>
   <LogInForm/>
  </div>
 )
}

export default Login