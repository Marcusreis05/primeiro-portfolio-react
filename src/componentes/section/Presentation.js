import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return (
        <div id="Presentation" className={style.presentation}>
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou Marcus Reis</h1>
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