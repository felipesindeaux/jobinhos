import { Container, DivEmail, DivName } from "./styled"
import { Button } from "grommet"
const CardUsers = ({handleOpenModal}) => {
    return (
        <Container>
            
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png' alt="" />
                <DivName>Nome:<p>Jeferson Vieira Bruno</p></DivName>
                <DivEmail>Email: <p>jeferson.bruno@live.com</p></DivEmail>

                <Button primary label='Editar' onClick={handleOpenModal}/>
            
        </Container >
    )
}

export default CardUsers