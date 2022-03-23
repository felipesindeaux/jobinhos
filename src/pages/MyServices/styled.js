import styled from "styled-components";


export const Container = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`
export const Tittle = styled.h1 `
text-align: center;

`
export const Card = styled.div `
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 270px;
  border: 1px solid var(--dark-6);
  border-radius: 10px;
  box-shadow:  10px 9px 14px -5px rgb(0 0 0 / 40%);
  margin: 20px 20px;

  img {
    width: 100%;
    height: 30vh;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  div {
      display: flex;
      margin: 18px 15px;
      flex-direction: column;
      padding-bottom: 60px;
      font-weight: 500;
      height: 20px;
      align-items: center;

      .price{
        margin-top: 20px;
      }
  
  }

  button{
    pointer-events: auto;
    cursor: pointer;
    background: var(--light-1);
    border: none;
    padding: 1.5rem 3rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;

 }
  button::before,
  button::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }


 .button--hyperion {
	font-family: input-mono-narrow, monospace;
	font-weight: 500;
	padding: 1rem 1.5rem;
	border: 1px solid var(--brand);
	overflow: hidden;
	color: var(--light-1);
}

.button--hyperion span {
	display: block;
	position: relative;

}
.button--hyperion > span {
	overflow: hidden;

}

.button--hyperion > span > span {
	overflow: hidden;
	mix-blend-mode: difference;
}

.button--hyperion:hover > span > span {
	animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
}

.button--hyperion::before {
	content: '';
	background: var(--brand);
	transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
	transform-origin: 100% 50%;
}

.button--hyperion:hover::before {
	transform: scale3d(0,1,1);
	transform-origin: 0% 50%;
}


  @media screen and (min-width: 1000px) {
    margin:20px 
  }
`;

export const Name = styled.p `
  color: var(--brand);
  margin: 20px 15px;
  font-size: 24px;
  letter-spacing: 0.08em;
`;

export const Desc = styled.p `
  color: var(--dark-3);
  margin: 20px 15px;
  height: 100px;
  overflow-y: auto;
  font-weight: 500;
`;