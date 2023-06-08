import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre-mim-foto.png"


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
             <h3 className={styles.subtitulo}>
                Olá, meu nome é Alexsandra Silva!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Alexsandra Silva sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou de Recife, Pernambuco. Desde de criança me apaixonei pela informática, por ausência de oportunidades na área de tecnológica, 
                estudei pedagogia, e me especializei em neuropsicopedagogia em seguida trabalhei como professora e coordenadora de estágio por 15 anos.
            </p>
            <p className={styles.paragrafo}>
                Logo após, participei do programa Paulo Freire trabalhando como assistente de mobilização social. Posteriomente, atuei como técnica social e pedagoga no Centro de Referência de Serviço Social (CRAS) no Cabo de Santo Agostinho. Durante esse período, procurei enriquecer meus conhecimentos em cursos de TI, participei de bootcamps e programas de formação em tecnologia.
            </p>
            <p className={styles.paragrafo}>
                Atualmente, estou estudando sistema de informação, possuo conhecimentos em linguagens como Python, SQL, JavaScript, PHP e HTML.
            </p>
            <p className={styles.paragrafo}>
                Acredito que a minha experiência na área de educação pode ser aplicada à tecnologia, pois valoriza a adaptabilidade.
            </p>
            <p className={styles.paragrafo}>
                Me defino como uma  pessoa curiosa, organizada, determinada, focada e empenhada em evoluir e colaborar no desenvolvimento de pessoas e projetos. 
            </p>
            <p className={styles.paragrafo}>
                Estou sempre em busca de conhecimento, gosto de compartilhar conteúdos interessantes e apaixonantes, espero que você aprenda bastante com eles.
            </p>
        </PostModelo>
    )
}