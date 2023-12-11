import ButtonB from '../elements/ButtonB'
import style from './Projects.module.css'
import Card from '../elements/Card'
import ccxp from '../../Image/projects/ccxp.svg'
import arqui from '../../Image/projects/potifolioAqt.svg'
import pais from '../../Image/projects/projetopais.svg'

function Projects(){
    return (
        <div className={style.projects} id="Projects">
            <h1> Projetos </h1>
            <Card
            img={ccxp}
            site="https://ccxp-dnc-projeto.netlify.app"
            title="CCXP - DNC"
            tech="HTML5, CSS e JS" 
            description=" &quot; Desenvolvimento de landing page da CCXP com seleção de ingressos e um vídeos. (Abre um pop up com os ingressos selecionados.) &quot;"
            repo="https://github.com/Marcusreis05/CCXP-DNC"/>

            <Card
            img={arqui}
            site="https://desafio-1-dnc.netlify.app"
            title="Portifolio - Arquitetura - DNC"
            tech="HTML5, CSS" 
            description="&quot; Desenvolvimento de uma Landing Page basica, somente com HTML e CSS, uma landing page minimalista com planilha de registro de informações. &quot;"
            repo="https://github.com/Marcusreis05/Projeto-DNC-Desafio-1"/>

            <Card
            img={pais}
            site="https://projeto-pais-dnc.netlify.app"
            title="Projeto País - DNC"
            tech="HTML5 e JS" 
            description="&quot;     Este é o projeto de desenvolvimento com API, escreva o nome de um país em inglês e ele retornará informações. &quot;"
            repo="https://github.com/Marcusreis05/Projeto-Pais?tab=readme-ov-file"/>
            
            <section><ButtonB text='Ver repositório Completo' link='https://github.com/Marcusreis05?tab=repositories'/></section>
        </div>
    )
}

export default Projects