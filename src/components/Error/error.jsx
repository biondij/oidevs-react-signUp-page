import Title from "../Title/Index";
import Subtitle from "../Subtitle/Index";

const Error = ({ showError }) => {
    let erro;
        if (showError) {
            erro = <Title title="Usuário não encontrado. Reveja se os dados estão corretos e tente novamente." />;
        } else {
            erro = <Subtitle text="Bem vindo usuário  "/>;
        }
        
        return (
        <div>
            {erro}
            </div>
     );
     };
export default Error
    