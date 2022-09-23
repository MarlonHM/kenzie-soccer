import Input from "../../components/Input";

const Test = () => {
    return (
        <div>
        <Input label='Teste:' name='teste' register={()=>{console.log('teste')}}/>
        </div>
    )
}

export default Test;