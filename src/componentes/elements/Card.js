import style from './Card.module.css'
import ButtonB from './ButtonB'

function Card({site, img, title, tech, description, repo}){
    return(
        <div className={style.card}>
            <a href={site} target='_blank' rel="noopener noreferrer">
                <img src={img} alt='Erro'/>
            </a>
            <section>
                <h2>{title}</h2>
                <p><strong>Tecnologias:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>
            </section>
        </div>
    )
}

export default Card