import styled from "styled-components";

export const DivContainer = styled.div`
    width: 100vw;
    height: 500px;
    background-color: orange;
`
export const DivDisplay = styled.div`
    display: grid;
`
export const DivProj1 = styled.div`
   width: 100px;
    height: 50px;
`
export const DivContImg = styled.div`

    width: 100vw;
    height: 50vh;
    background: url(${(props)=>props.imgUrl});
`