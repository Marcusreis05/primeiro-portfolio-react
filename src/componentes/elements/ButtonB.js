import style from './ButtonB.module.css'

function ButtonB({text, link}){
    return(
        <div className={style.buttonB}>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <button>{text}</button>
            </a>
        </div>
    )
}

export default ButtonB