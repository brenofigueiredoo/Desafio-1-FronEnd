import { useContext } from "react"
import { Context } from "../../Context/Context"
import { Container } from "./styled"

const DivResult = () => {
    const {calculation, dataResult} = useContext(Context)
    return (
        <Container>
            <div className="divResponse">
                    <h2>VOCÊ RECEBERÁ:</h2>
                    {dataResult ? dataResult.map((elem, index) => <h3 key={index}>Em {elem} dias: <strong>&#160; R$ {calculation[elem]},00</strong></h3>) : <><h3>Amanhã: <strong>&#160; R$ {calculation['1'] ? calculation['1'] : 0},00</strong></h3>
                    <h3>Em 15 dias: <strong>&#160; R${calculation['15'] ? calculation['15'] : 0},00</strong></h3>
                    <h3>Em 30 dias: <strong>&#160; R${calculation['30'] ? calculation['30'] : 0},00</strong></h3>
                    <h3>Em 90 dias: <strong>&#160; R${calculation['90'] ? calculation['90'] : 0},00</strong></h3></>}
                </div>
        </Container>
    )
}
export default DivResult