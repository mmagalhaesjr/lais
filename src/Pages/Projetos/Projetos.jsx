import { Link } from "react-router-dom";
import { StyledProjetos } from "./styled";

import boneco from '../../assets/inicial/6.png'
import poster from '../../assets/inicial/8.png'
import cd from '../../assets/inicial/2.png'
import coporosa from '../../assets/inicial/3.png'
import copo from '../../assets/inicial/5.png'
import jornal from '../../assets/inicial/7.png'
import vermelho from '../../assets/inicial/9.png'
import adesivorosa from '../../assets/inicial/10.png'
import adesivoroxo from '../../assets/inicial/11.png'

export default function Projetos() {
    return (
        <StyledProjetos>

            <Link to={"/"}>
                <p id="voltar">
                    &lt; Voltar
                </p>
            </Link>

        <img id="boneco" src={boneco} alt="img" />
        <img id="poster" src={poster} alt="img" />
        <img id="cd" src={cd} alt="img" />
        <img id="coporosa" src={coporosa} alt="img" />
        <img id="copo" src={copo} alt="img" />
        <img id="jornal" src={jornal} alt="img" />
        <img id="vermelho" src={vermelho} alt="img" />
        <img id="adesivorosa" src={adesivorosa} alt="img" />
        <img id="adesivoroxo" src={adesivoroxo} alt="img" />
          

        </StyledProjetos>
    )
}