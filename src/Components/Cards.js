import React from 'react'


function Cards({title, imageSource, url}){
    return(
        <div className="card text-center bg-dark">
            <img src={imageSource} alt=""/>
            <div className="card-body text-align">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">Trabajo de desarrollo pagina web con responsive</p>
                <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank"> Click Aquí</a>
            </div>
        </div>
    ) 
 }
 export default Cards