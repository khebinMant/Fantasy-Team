import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import wave from '../../assets/waves.png'
import { setInitialState } from '../../store/auth/authSlice';
import { toggleLoginRegister } from '../../store/loginregister/loginRegisterSlice';

export const SwitchRegister = () => {

    const dispatch = useDispatch()
    
    const handleClick = ()=>{
        dispatch(toggleLoginRegister())
        dispatch(setInitialState())
    }

    return (
        
        <div className='card-switch animate__animated animate__fadeInDown'>
            <div className="flex justify-content-center">
                    <div className="card">
                        <h1 className="text-center">¿Ya tienes tu cuenta?</h1>
                        <div className="p-fluid">
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    Entonces Inicia sesión
                                </span>
                            </div>
                        </div>
                        <img className='wave-left' src={wave} alt="waves"/>
                        <Button 
                            label="Iniciar Sesión" 
                            className="p-button-success singupbtn" 
                            onClick={handleClick}
                        />
                    </div>
                </div>
        </div>
  )
}
