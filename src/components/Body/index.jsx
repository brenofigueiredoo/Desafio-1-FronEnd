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
    const {setDataResult, onSubmit} = useContext(Context)
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schemaCalculation)}) 

    const alterData = (data) => {
        if(data["days"] !== '') {
            const tratative = data["days"].replace(/,/g, "").replace(/\./g, "");
            const convertArray = tratative.split(" ")
            const convertToNumber = convertArray.map(char => Number(char))
            data["days"] = convertToNumber
            const sortDays = data.days.sort((a, b) => a - b)
            setDataResult(sortDays)
            onSubmit(data)
        } else {
            delete data["days"]
            setDataResult(data.days)
            onSubmit(data)
        }
    }

    return (
        <BackBody>
        <ContainerMain>
            <div className="divInfo">
                <h2>Simule sua Antecipação</h2>
                <div className="divInputs">
                    <form id="myForm" onSubmit={handleSubmit(data => alterData(data))}>
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

                            <Label text="Informe os dias"/>
                            <input id="inputDays"type="text" name="days" {...register("days")}/>
                            <p className="pMaxInfo">"ex: 10, 20, 30"</p>

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