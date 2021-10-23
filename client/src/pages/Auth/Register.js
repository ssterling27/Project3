import RegisterForm from "../../components/RegisterForm/RegisterForm";
import './Register.css'

const Register = () => {
 return (
   <div id={'register'} style={{ height: '100vh', width: '100vw', position: 'relative', float: 'right'}}>
    <RegisterForm />
   </div>
 )
}

export default Register