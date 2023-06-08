import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha-foto.png';


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Salve salve, techs lovers! 
                </h1>

                <p className={styles.paragrafo}>
                Bem vindo(a) ao meu espaço pessoal.
                </p>                 

                <p className={styles.paragrafo}>
                    Neuropsicopedagoga que viu na programação e engenharia de dados, uma oportuniade de se reiventar e trabalhar com tecnologia e inovação.
                </p>                 
                
                <p className={styles.paragrafo}>
                    Aqui compartilho alguns conhecimentos na área tecnológica, espero que aprenda algo novo. 🙂👋
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                src={circuloColorido}
                aria-hidden={true}
                />

                <img
                
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="foto de Alexsandra sorrindo"
                />
            </div>
        </div>
    )
}