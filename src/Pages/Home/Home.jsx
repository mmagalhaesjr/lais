
import { StyledHome } from "./styled";

import foto1 from '../../assets/inicial/1.png'
import foto2 from '../../assets/inicial/2.png'
import foto3 from '../../assets/inicial/3.png'
import foto4 from '../../assets/inicial/4.png'
import foto5 from '../../assets/inicial/5.png'
import foto6 from '../../assets/inicial/6.png'

import { Link } from "react-router-dom";



export default function Home() {


    return (
        <StyledHome>

            <Link to={'/lais'}>
                <h1>LAIS SINDORF</h1>
            </Link>

            <section>

                <Link to={'/projetos'} >
                    <img id="img1" src={foto1} alt="img" />
                </Link>
                <Link to={'/projetos'} >
                    <img id="img2" src={foto2} alt="img" />
                </Link>
                <Link to={'/projetos'} >
                    <img id="img3" src={foto3} alt="img" />
                </Link>
                <Link to={'/projetos'} >
                    <img id="img4" src={foto4} alt="img" />
                </Link>
                <Link to={'/projetos'} >
                    <img id="img5" src={foto5} alt="img" />
                </Link>
                <Link to={'/projetos'} >
                    <img id="img6" src={foto6} alt="img" />
                </Link>

            </section>


            <div id="rodape">
                <Link to={'/projetos'}>
                    <p>
                        Projetos
                    </p>
                </Link>

                <Link to={"/contato"}>
                    <p>
                        Contato
                    </p>
                </Link>

            </div>



        </StyledHome>
    );
}
