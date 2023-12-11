import style from './ButtonA.module.css'

function ButtonA({text, link}){
    return(
        <div className={style.buttonA}>
            <a href={link} target='_blank' rel="noopener noreferrer">
                <button>{text}</button>
            </a>
        </div>
    )
}

export default ButtonA