import React, { useRef } from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import { startLogout } from '../../store/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import balon from '../../assets/balon.png'
import '../../styles/NavBarFooter.css'

export const NavBar = () => {

  const navigation = useNavigate()
  const dispatch =  useDispatch()
  const { photoURL } = useSelector( state=> state.auth ) 
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
        command:()=> {navigation('/fantasy-teams')}
    },
    {
        label: 'Crear',
        icon: 'pi pi-fw pi-bolt',
        command:()=> {navigation('/create-fantasy')}
    }    
];

    const start = <>
        <img alt="logo" src={balon} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>
    </>
    const end = <>
        <InputText className='search-input' placeholder="Buscar" type="text" />
        <Menu model={itemsLog} popup ref={menu} id="popup_menu" />
    </>

    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end} />
                <Avatar
                    onClick={(event) => menu.current.toggle(event)} 
                    image='https://cdn-icons-png.flaticon.com/512/219/219983.png'
                    className="user-avatar" size="circle" 
                    shape="circle" 
                />
            </div>
        </div>
    );
}
