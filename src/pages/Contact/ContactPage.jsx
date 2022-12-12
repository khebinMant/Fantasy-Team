import { FantasyLayout } from '../../ui/FantasyLayout'
import '../../styles/ContactPage.css'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useState } from 'react';

export const ContactPage = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
  return (
    <FantasyLayout>
        <div className="contact-page-container animate__animated animate__fadeIn">
            <div className='form-container'>
                    <h3><b>Let's Connect with us!</b></h3>
                        <span className="p-float-label">
                            <InputText id="username" value={value1} onChange={(e) => setValue1(e.target.value)} />
                            <label htmlFor="username">Nombre</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="lastname" value={value2} onChange={(e) => setValue2(e.target.value)} />
                            <label htmlFor="lastname">Apellido</label>
                        </span>
                        <span className="p-float-label">
                            <InputText  id="email" value={value3} onChange={(e) => setValue3(e.target.value)} />
                            <label htmlFor="email">Correo electrónico</label>
                        </span>
                        <span className="p-float-label">
                            <InputTextarea  id="message" value={value4} onChange={(e) => setValue4(e.target.value)} rows={5} cols={30} autoResize />
                            <label htmlFor="message">Mensaje</label>
                        </span>
                    <Button label="Contactar" className="p-button-secondary" />
            </div>
        </div>
    </FantasyLayout>
  )
}
