import React from "react"
import HomeImg from './assets/img/home.png'
import ColorLogo from './assets/logo/logo-color.png'
import Img1 from './assets/img/img1.png'
import Img2 from './assets/img/img2.png'
import Img3 from './assets/img/img3.png'
import Product from './assets/img/last-img.png'
import WhiteMask from './assets/img/white-mask.png'
import GreenMask from './assets/img/green-mask.png'

import Ico1 from './assets/icons/icon1.png'
import Ico2 from './assets/icons/icon2.png'
import Ico3 from './assets/icons/icon3.png'
import Ico4 from './assets/icons/icon4.png'
import Ico5 from './assets/icons/icon5.png'


import { HomeFixedImg, LogoColor, Header, Info, Hero, DivLeft, DivRight, Images, Section, WtMask, Section2, GMask, Info2, ImgProduct } from './styles'

function App() {

  return (
    <>
      <HomeFixedImg src={HomeImg} alt="imagem do início" />

      <Header>
        <div>
          <LogoColor src={ColorLogo} alt="logo" />
        </div>
        <div>
          <nav>
            <a href="">Início</a>
            <a href="">Sobre Nós</a>
            <a href="">Profissionais</a>
            <a href="">Contato</a>
          </nav>
        </div>
      </Header>

      <Info>
        <h2>Instituto</h2>
        <h1>TERAPEUTAS CANNABICOS</h1>
        <p>Terapeutas canábicos auxiliam no uso medicinal da cannabis para promover saúde e bem-estar.</p>
      </Info>

      <Hero>
        <DivLeft>
          <h2>Sobre Nós</h2>
          <p>Somos uma equipe de terapeutas especializados no uso medicinal da cannabis, dedicados a promover o bem-estar e a qualidade de vida de nossos pacientes. Nossa missão é oferecer um acompanhamento personalizado, orientando o uso terapêutico da cannabis de forma segura e eficaz, sempre com base em evidências científicas e nas necessidades individuais de cada pessoa. Trabalhamos com responsabilidade, ética e transparência, buscando alternativas naturais para o alívio de dores crônicas, controle de ansiedade, distúrbios do sono, entre outros desafios de saúde.</p>
          <p>Aqui, acreditamos que a cannabis pode ser uma poderosa aliada no tratamento de diversas condições, e estamos comprometidos em proporcionar um atendimento humanizado e acolhedor para quem busca melhorar sua saúde e qualidade de vida.</p>
        </DivLeft>
        <DivRight>
          <div>
            <img src={Img1} alt="imagem planta" />
          </div>
          <Images>
            <img src={Img2} alt="imagem planta" />
            <img src={Img3} alt="imagem planta" />
          </Images>
        </DivRight>
      </Hero>

      <Section>
        <h2>Nossa <span>FÓRMULA</span></h2>
        <h3>Nossa fórmula usa CBD e THC para tratamentos eficazes e personalizados.</h3>
      </Section>

      <Section2>
        <ImgProduct src={Product} alt="produto" />
        <WtMask src={WhiteMask} alt="mascara branca" />
        <GMask src={GreenMask} alt="mascara verde" />
      </Section2>

      <Info2>
        <div>
          <img src={Ico1} alt="" />
          <p>Alívio da dor crônica</p>
        </div>
        <div>
          <img src={Ico2} alt="" />
          <p>Controle da ansiedade e depressão</p>
        </div>
        <div>
          <img src={Ico3} alt="" />
          <p>Melhora do sono</p>
        </div>
        <div>
          <img src={Ico4} alt="" />
          <p>Tratamento de epilepsia</p>
        </div>
        <div>
          <img src={Ico5} alt="" />
          <p>Tratamento de dependência</p>
        </div>
      </Info2>
    </>
  )
}

export default App
