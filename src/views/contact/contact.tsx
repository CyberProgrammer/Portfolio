import Navigation from "../../components/navigation/navigation.tsx";

interface Params{
    isActive: number,
    setIsActive: (num: number) => void,
}

const Contact = ({isActive,setIsActive}:Params) => {

    return(
        <div id={"app"}>
            <Navigation isActive={isActive} setIsActive={setIsActive} />
        </div>
    )
}

export default Contact;