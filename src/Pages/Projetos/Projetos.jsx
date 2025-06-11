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
import cartao from '../../assets/inicial/cartao.png'
import cardapio from '../../assets/inicial/cardapio.png'

export default function Projetos() {
    return (
        <StyledProjetos>

            <Link to={"/"}>
                <p id="voltar">
                    &lt; Voltar
                </p>
            </Link>

            <Link to={'https://drive.google.com/file/d/1XStk2wqRw_o0nl24EycdjM7PbLyL9NM2/view'}>
                <img id="boneco" src={boneco} alt="img" />
            </Link>

            <Link to={'https://drive.google.com/file/d/1jVm9vh4jhX0BMy8vfGCH3HYzu4SJlKXw/view?usp=sharing'} target="_blank">
                <img id="poster" src={poster} alt="img" />
            </Link>

            <Link to={'https://drive.google.com/file/d/1Lh2lE6fkzEBwpqY3FBpjjF1v_5ucNt0Y/view?usp=sharing'} target="_blank">
                <img id="cd" src={cd} alt="img" />
            </Link>

            <Link to={'https://drive.google.com/file/d/1Yg74rb-LmZD59i6cYW06Aa9TDwF2WJRq/view'}>
                <img id="coporosa" src={coporosa} alt="img" />
            </Link>

            <Link to={'https://drive.google.com/file/d/1nDeNPdxLrO0cFKegJaPUY1Dp8g_iV7kJ/view?usp=sharing'} target="_blank">
                <img id="copo" src={copo} alt="img" />
            </Link>

            <Link to={'https://drive.google.com/file/d/1gc4hK0tolZFl78z5Htgpvo98_MeCHeAH/view'}>
                <img id="jornal" src={jornal} alt="img" />
            </Link>

            <Link to={'https://drive.google.com/file/d/12EwCwsYUKuDEKLeGFe3oVgzQqWjFuyD1/view?usp=sharing'} target="_blank">
                <img id="vermelho" src={vermelho} alt="img" />
            </Link>

            <Link to={'https://drive.google.com/file/d/1MQmbWKwy6M9mjwS4jUhIGratpKDqWhoS/view?usp=sharing'} target="_blank">
                <img id="adesivorosa" src={adesivorosa} alt="img" />
            </Link>

            <Link to={'https://drive.google.com/file/d/1MQmbWKwy6M9mjwS4jUhIGratpKDqWhoS/view?usp=sharing'} target="_blank">
                <img id="adesivoroxo" src={adesivoroxo} alt="img" />
            </Link>

            <Link to={'https://drive.google.com/file/d/16gxTmeiC3ISviQP4cbu_xdYYfVnOhHBU/view?usp=sharing'} target="_blank">
                <img id="cartao" src={cartao} alt="img" />
            </Link>


            <Link to={'https://drive.google.com/file/d/1pceLkhwOWUs-SPqDT_qkF3nPeJkEMYlx/view?usp=sharing'} target="_blank">
                <img id="cardapio" src={cardapio} alt="img" />
            </Link>









        </StyledProjetos>
    )
}