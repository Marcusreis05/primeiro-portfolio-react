import style from './Card.module.css'
import { useState } from 'react'
import ButtonB from './ButtonB'

function Card({site, img, title, tech, description, repo}){

    const [info, setInfo] = useState(false)

    function infoOn(){
        setInfo(true)
    }

    function infoOff(){
        setInfo(false)
    }
    
    return(
        <div className={style.card} onMouseLeave={infoOff}>

            <a href={site} target='_blank' rel="noopener noreferrer" onMouseEnter={infoOn}>
                <img src={img} alt='Erro'/>
            </a>
            
            {info === true &&(
                <section>
                    <h2>{title}</h2>
                    <p><strong>Tecnologias:</strong> {tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Acesse o repositório' link={repo}/>
                </section>
            )}
            
        </div>
    )
}

export default Card