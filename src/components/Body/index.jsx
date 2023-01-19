import { useForm } from "react-hook-form"
import { BackBody, ContainerInput, ContainerMain } from "./style"
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCalculation } from "../../validators"
import { useContext } from "react";
import Label from "../Label";
import ErrorsP from "../ErrorsP";
import DivResult from "../DivResult";
import { Context } from "../../Context/Context";

const Body = () => {
    const {onSubmit} = useContext(Context)
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schemaCalculation)}) 

    return (
        <BackBody>
        <ContainerMain>
            <div className="divInfo">
                <h2>Simule sua Antecipação</h2>
                <div className="divInputs">
                    <form id="myForm" onSubmit={handleSubmit(data => onSubmit(data))}>
                        <ContainerInput>
                            <Label text="Informe o valor da venda *"/>
                            <input id="inputAmount" type="text" placeholder="R$" name="amount" {...register("amount")}/>
                            <ErrorsP text={errors.amount?.message}/>

                            <Label text="Em quantas parcelas *"/>
                            <input id="inputInstallments" type="text" name="installments" {...register("installments")}/>
                            <p className="pMaxInfo">"Máximo de 12 parcelas"</p>
                            <ErrorsP text={errors.installments?.message}/>

                            <Label text="Informe o percentual de MDR *"/>
                            <input id="inputMdr"type="text" name="mdr" {...register("mdr")}/>
                            <ErrorsP text={errors.mdr?.message}/>

                            <button type="submit"></button>
                        </ContainerInput>
                    </form>
                </div>
            </div>
            <DivResult/>
        </ContainerMain>
        </BackBody>
    )
}

export default Body