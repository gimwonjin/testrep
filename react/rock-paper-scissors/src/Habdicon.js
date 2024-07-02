import scissorImg from "./assets/scissor.svg";
import rockImg from "./assets/rock.svg";
import paperImg from "./assets/paper.svg";

function Habdicon({className}) {
    return (
        <img src={rockImg} className={className} />
    );
}

export default Habdicon;