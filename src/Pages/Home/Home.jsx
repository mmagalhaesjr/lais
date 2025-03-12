
import { StyledHome } from "./styled";

import foto1 from '../../assets/1.png'
import foto3 from '../../assets/3.png'


export default function Home() {


    return (
        <StyledHome>

            <h1>LAIS SINDORF</h1>

            <section>
                <img id="img1" src={foto1} alt="img" />
                <img id="img2" src={foto1} alt="img" />
                <img id="img3" src={foto3} alt="img" />
                <img id="img4" src={foto1} alt="img" />
               
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
