import '../styles/LoginRegisterPage.css'
import back from '../../assets/back.png'

export const AuthLayout = ({children}) => {
  return (
    <div className='auth-content'>
      <div className='login-register-content'>
      <img className='back' src={back} alt="waves"/>
        { children }
      </div>                 
    </div>
  )
}
