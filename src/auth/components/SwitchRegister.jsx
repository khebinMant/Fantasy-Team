import { Button } from 'primereact/button';
import wave from '../../assets/waves.png'

export const SwitchRegister = ({isLogin, changeSwitch}) => {

    return (
        
        <div className='card-switch animate__animated animate__fadeInDown'>
            <div className="flex justify-content-center">
                    <div className="card">
                        <h1 className="text-center">Ya tienes una cuenta?</h1>
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
                            onClick={changeSwitch}
                        />
                    </div>
                </div>
        </div>
  )
}
