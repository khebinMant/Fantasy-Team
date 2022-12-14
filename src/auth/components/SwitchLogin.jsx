import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import wave from '../../assets/waves.png'
import { toggleLoginRegister } from '../../store/loginregister/loginRegisterSlice';
import { setInitialState } from '../../store/auth/authSlice';
export const SwitchLogin = () => {
    
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(toggleLoginRegister())
        dispatch(setInitialState())
    }

    return (
        
        <div className='card-switch animate__animated animate__fadeInDown'>
            <div className="flex justify-content-center">
                    <div className="card">
                        <h1 className="text-center">Bienvenido</h1>
                        <div className="p-fluid">
                            <div className="field">
                                <span className="p-float-label p-input-icon-right">
                                    Crear tu cuenta gratuitamente
                                </span>
                            </div>
                        </div>
                        <img className='wave-right' src={wave} alt="waves"/>
                        <Button
                            label="Registrate" 
                            className="p-button-success singupbtn" 
                            onClick={handleClick}
                        />
                    </div>
                </div>
        </div>
  )
}
