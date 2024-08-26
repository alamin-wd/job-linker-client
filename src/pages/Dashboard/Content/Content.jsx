import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Content = () => {

    const { user } = useContext(AuthContext);

    return (

        <div className="w-full h-full shadow-xl">
            
            <div>
                <h3></h3>
            </div>
        </div>
    );
};

export default Content;