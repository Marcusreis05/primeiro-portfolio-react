import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Marcus Reis!     ', 'um desenvovedor Full Stack.     ', 'também um product Manager.     '];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)}

    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updateText);

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }


    return (
        <div id="Presentation" className={style.presentation}>
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou {text}</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.Como<br/>
                Product Manager, eu tenho o compromisso de resolver<br/>
                problemascomplexos e trazer resultados excepcionais para os <br/>
                negócios.Meus projetos já geraram milhões de reais em receita <br/>
                anualestou sempre em busca de novos desafios para superar.<br/>
            </p>
            <ButtonA link='https://github.com/Marcusreis05' text='Conecte-se comigo!!'/>
        </div>
    )
}
export default Presentation