import React from "react";

const SecondsCounter = (props) => {

    // const segundo = (tiempo) => {
    //     let segundos = tiempo
    //     let longitud = String(segundos).length
    //     let ultimaPosición = String(segundos)[longitud - 1]
        
    //     return ultimaPosición

    return (
        <>
        <div className="row container-fluid clase">
        <div className="col reloj">
        <i className="far fa-clock"></i>
            </div>
            <div className="col reloj">
            {props.digito6}
            </div>
            <div className="col reloj">
            {props.digito5}
            </div>
            <div className="col reloj">
            {props.digito4}
            </div>
            <div className="col reloj">
            {props.digito3}
            </div>
            <div className="col reloj">
            {props.digito2}
            </div>
            <div className="col reloj">
            {props.digito1}
            </div>
        </div>
        
        </>
    )
}

export default SecondsCounter;