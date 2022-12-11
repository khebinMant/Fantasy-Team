import React, { useEffect, useRef, useState } from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { useLocation, useNavigate } from 'react-router-dom';
import { startLogout } from '../../store/auth/thunks';
import { useDispatch } from 'react-redux';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import balon from '../../assets/balon.png'
import '../../styles/NavBarFooter.css'
import { setSearchedPlayer, setSearchedTeam } from '../../store/fantasy/fantasySlice';

export const NavBar = () => {

  const navigation = useNavigate()
  const location = useLocation()
  const [canSearch, setCanSearch] = useState(true)
  const dispatch =  useDispatch()
  const menu = useRef(null);


  useEffect(() => {
    if(location.pathname === '/search-teams' || location.pathname == '/search-players'){
        setCanSearch(true)
    }
    else{
        setCanSearch(false)
    }
    }, [location]);

    const onSearch = (e)=>{
        if(location.pathname === '/search-teams'){
            dispatch(setSearchedTeam(e.target.value))
        }
        else if(location.pathname == '/search-players'){
            dispatch(setSearchedPlayer(e.target.value))
        }
    }

  const itemsLog = [
      {
          label: 'Cerrar Sesión',
          command:()=> {
            dispatch(startLogout());
        }
      },
      {
          label: 'Mis equipos',
          command:()=> {navigation('/fantasy-teams')}
      }
  ];

  const items = [
    {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        command:()=> {navigation('/')}
    },
    {
        label: 'Fantasy Teams',
        icon: 'pi pi-fw pi-star',
        command:()=> {navigation('/fantasy-teams')}
    },
    {
        label: 'Jugadores',
        icon: 'pi pi-fw pi-bolt',
        command:()=> {navigation('/search-players')}
    },
    {
        label: 'Equipos',
        icon: 'pi pi-fw pi-bolt',
        command:()=> {navigation('/search-teams')}
    },    
];

    const start = <>
        <img alt="logo" src={balon} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>
    </>
    const end = <div className='something'>
    {
        canSearch?
        <InputText onChange={onSearch} className='search-input' placeholder="Buscar" type="text" />
        :
        <></>

    }
        <Menu model={itemsLog} popup ref={menu} id="popup_menu" />
        <Avatar
            onClick={(event) => menu.current.toggle(event)} 
            image='https://cdn-icons-png.flaticon.com/512/219/219983.png'
            className="user-avatar" size="circle" 
            shape="circle" 
        />
    </div>

    return (
        <div>
            <div className="card">
                <Menubar style={{backgroundColor:'#6452CE',color:'#FFFF', fontSize:'15px', fontWeight:'bold'}} model={items} start={start} end={end} />
            </div>
        </div>
    );
}
