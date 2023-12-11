import style from './Skills.module.css'
import Javascript from '../../Image/skills/JavaScript.svg'
import Css from '../../Image/skills/css.svg'
import Html from '../../Image/skills/html.svg'
import React from '../../Image/skills/react.svg'

function Skills(){
    return (
        <div className={style.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={Html} alt='Error'/>
                <img src={Css} alt='Error'/>
                <img src={Javascript} alt='Error'/>
                <img src={React} alt='Error'/>
            </div>
        </div>
    )
}

export default Skills