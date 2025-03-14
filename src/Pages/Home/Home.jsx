
import { StyledHome } from "./styled";

import foto1 from '../../assets/1.png'
import foto2 from '../../assets/2.png'
import foto3 from '../../assets/3.png'
import foto4 from '../../assets/4.png'
import foto5 from '../../assets/5.png'
import foto6 from '../../assets/6.png'
import foto7 from '../../assets/7.png'

import foto9 from '../../assets/9.png'


export default function Home() {


    return (
        <StyledHome>

            <h1>LAIS SINDORF</h1>

            <section>
                <img id="img1" src={foto1} alt="img" />
                <img id="img2" src={foto2} alt="img" />
                <img id="img3" src={foto3} alt="img" />
                <img id="img4" src={foto4} alt="img" />
                <img id="img5" src={foto5} alt="img" />
                <img id="img6" src={foto6} alt="img" />
                <img id="img7" src={foto7} alt="img" />
                
                <img id="img9" src={foto9} alt="img" />
            </section>


            <div id="rodape">
                <p>
                    Projetos
                </p>
                <p>
                    Contato
                </p>
            </div>



        </StyledHome>
    );
}
