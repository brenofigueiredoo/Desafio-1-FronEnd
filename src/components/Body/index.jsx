import { useForm } from "react-hook-form"
import { BackBody, ContainerInput, ContainerMain } from "./style"
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCalculation } from "../../validators"
import api from "../../service";
import { useState } from "react";

const Body = () => {
    const [calculation, setCalculation] = useState([]);
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schemaCalculation)}) 

    const onSubmit = (data) => {
     api
      .post("", { ...data })
      .then((res) => {
        setCalculation(res.data);
      })
      .catch((err) => console.log(err.config.data));
    }

    return (
        <BackBody>
        <ContainerMain>
            <div className="divInfo">
                <h2>Simule sua Antecipação</h2>
                <div className="divInputs">
                    <form id="myForm" onSubmit={handleSubmit(data => onSubmit(data))}>
                        <ContainerInput>
                            <label>Informe o valor da venda *</label>
                            <input id="inputAmount" type="text" name="amount" {...register("amount")}/>
                            <p className="pError">{errors.amount?.message}</p>

                            <label>Em quantas parcelas *</label>
                            <input id="inputInstallments" type="text" name="installments" {...register("installments")}/>
                            <p>"Máximo de 12 parcelas"</p>
                            <p className="pError">{errors.installments?.message}</p>

                            <label>Informe o percentual de MDR *</label>
                            <input id="inputMdr"type="text" name="mdr" {...register("mdr")}/>
                            <p className="pError">{errors.mdr?.message}</p>

                            <button type="submit">Enviar</button>      
                        </ContainerInput>
                    </form>
                </div>
            </div>
            <div className="containterResponseFull">
                <div className="divResponse">
                    <h2 className="h2Response">VOCÊ RECEBERÁ:</h2>
                    <h3 className="h3Response">Amanhã: <h3 className="h3RCivrão">&#160;R$ {calculation['1']},00</h3></h3>
                    <h3 className="h3Response">Em 15 dias: <h3 className="h3RCivrão">&#160;R$ {calculation['15']},00</h3></h3>
                    <h3 className="h3Response">Em 30 dias: <h3 className="h3RCivrão">&#160;R$ {calculation['30']},00</h3></h3>
                    <h3 className="h3Response">Em 90 dias: <h3 className="h3RCivrão">&#160;R$ {calculation['90']},00</h3></h3>
                </div>
            </div>
        </ContainerMain>
        </BackBody>
    )
}

export default Body