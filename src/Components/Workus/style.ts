import styled from "styled-components";

export const Container = styled.div`
background-color: rgba(241, 241, 241);
.content{
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    padding: 20px;
    flex-wrap: wrap;
    >div{
        width: 50%;
        min-width: 300px;
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
    p{
        margin: 10px 0;
    }

    @media (max-width: 768px) {
        justify-content: center;
        padding: 5px;
    }
}
.containerRight{
    >div{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    }
}
`