import styled from 'styled-components'

export const HomeFixedImg = styled.img`
position: absolute;
top: 0;
left: 0;
z-index: -1;
width: 100vw;
`

export const LogoColor = styled.img`
width: 259px;
`

export const Header = styled.header`
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 65px 0;

nav{
    display: flex;
    gap: 73px;

    a{
        color: #EF7C00;
        font-size: 26px;
        font-weight: 400;
    }
}
`

export const Info = styled.div`
width: 837px;
height: 400px;
background-color: #EAEAEA;
margin: 630px 0 0 194px;
padding: 61px 0 0 43px;
border-bottom: 17px solid #EF7C00;

h2{
    color: #EF7C00;
    font-size: 26px;
    font-weight: 400;
}

h1{
    color: #EF7C00;
    font-size: 40px;
    font-weight: 900;
}

p{
    color: #000;
    font-size: 24px;
    font-weight: 400;
    margin-top: 51px;
}
`

export const Hero = styled.section`
margin: 100px 0 0 100px;
display: flex;
justify-content: space-between;
`

export const DivLeft = styled.div`
width: 50%;

h2{
    color: #EF7C00;
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 70px;
}

p{
    color: #000;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 35px;
}
`

export const DivRight = styled.div`
display: flex;
gap: 22px;
`

export const Images = styled.div`
display: flex;
flex-direction: column;
gap: 22px;
`

export const Section = styled.section`
margin-top: 82px;

h2{
    color: #EF7C00;
    font-size: 65px;
    font-weight: 400;
    text-align: center;
}

span{
    color: #EF7C00;
    font-size: 65px;
    font-weight: 800;
}

h3{
    color: #EF7C00;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
}
`

export const Section2 = styled.section`
position: relative;
z-index: -1;
`

export const ImgProduct = styled.img`
z-index: -9;
`

export const WtMask = styled.img`
position: absolute;
top: 0;
height: 750px;
width: 100vw;
`

export const GMask = styled.img`
position: absolute;
bottom: 0px;
height: 850px;
width: 100vw;
`

export const Info2 = styled.div`
width: 1493px;
height: 320px;
border-bottom: 17px solid #EF7C00;
background-color: #EAEAEA;
display: flex;
z-index: 999;
margin: -150px auto 0;
align-items: center;
justify-content: space-around;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
}

p{
    color: #EF7C00;
    font-size: 24px;
    font-weight: 400;
    max-width: 199px;
    text-align: center;
}
`