import { Button } from 'primereact/button';
import wave from '../../assets/waves.png'
export const SwitchLogin = ({isLogin, changeSwitch}) => {
    

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
                            label="Registrarse" 
                            className="p-button-success singupbtn" 
                            onClick={changeSwitch}
                        />
                    </div>
                </div>
        </div>
  )
}
