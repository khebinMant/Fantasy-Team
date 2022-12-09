import React, { useRef } from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { startLogout } from '../../store/auth/thunks';
import { useDispatch } from 'react-redux';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

export const NavBar = () => {

  const navigation = useNavigate()
  const dispatch =  useDispatch()
  const menu = useRef(null);

  const itemsLog = [
      {
          label: 'Cerrar Sesión',
          command:()=> {
            dispatch(startLogout());
        }
      },
      {
          label: 'Navigate',
          command:(e) => {
            window.location.hash = "/fileupload"
        }
      }
  ];

  const items = [
    {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        command:()=> {navigation('/')}
    },
    {
        label: 'Explorar',
        icon: 'pi pi-fw pi-search',
        items: [
            {
                label: 'Ligas',
                icon: 'pi pi-fw pi-flag-fill'
            },
            {
                label: 'Equipos',
                icon: 'pi pi-fw pi-flag-fill'
            },
            {
                label: 'Jugadores',
                icon: 'pi pi-fw pi-flag-fill'
            },
        ]
    },
    {
        label: 'Fantasy Teams',
        icon: 'pi pi-fw pi-star',
        command:()=> {navigation('/create-fantasy')}
    },
    {
        label: 'Crear',
        icon: 'pi pi-fw pi-bolt',
        command:()=> {navigation('/create-fantasy')}
    }
];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <>
        <InputText placeholder="Buscar" type="text" />
        <Menu model={itemsLog} popup ref={menu} id="popup_menu" />
        <Avatar
            onClick={(event) => menu.current.toggle(event)} 
            image="images/avatar/amyelsner.png" 
            className="mr-2" size="circle" 
            shape="circle" 
        />
    </>

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    );
}
