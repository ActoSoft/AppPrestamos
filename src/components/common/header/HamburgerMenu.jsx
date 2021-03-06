import React from 'react'
import sun from '../../../assets/icons/sun.svg'
import close from './../../../assets/icons/delete.svg'
import {Link} from 'react-router-dom'
const HamburgerMenu = (props) =>{
    return(
        <div className={ "side-bar-content " + props.active }>
            <div className="side-bar">
            <div className="side-bar-close" onClick={props.sidebar}><img src={close} alt="close"/></div>
                <div className="day">
                    <p>{props.day}</p>
                    <Link onClick={props.sidebar} to="/dashboard/"><img className="Link-option-img" src={sun} alt="sol"/></Link>
                    <p>{props.user}</p>
                </div>
                <div className="options-side-bar">
                    <Link onClick={props.sidebar} to="/dashboard/" className="Link-option"><p>Visitas</p></Link>
                    <Link onClick={props.sidebar} to="/general/prestamos/" className="Link-option"><p>Préstamos</p></Link>
                    <Link onClick={props.sidebar} to="/clientes/prestamos/" className="Link-option"><p>Clientes</p></Link>
                    <Link onClick={props.sidebar} to="/general/corte-dia/" className="Link-option"><p>Corte del día</p></Link>
                    <Link onClick={props.sidebar} to="/general/resumen/" className="Link-option"><p>Resumen Gral.</p></Link>
                    <Link onClick={props.sidebar} to="/general/historial/" className="Link-option"><p>Historial</p></Link>
                    <Link onClick={props.sidebar} to="/opciones/lista" className="Link-option"><p>Configuración</p></Link>
                </div>
            </div>
            <div className="on-click-exit" onClick={props.sidebar}></div>
        </div>
    )
}

export default HamburgerMenu