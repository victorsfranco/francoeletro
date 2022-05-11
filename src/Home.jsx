import {
    FiEdit,
    FiTrash2,
    FiPlusCircle,
    FiPackage,
    FiDollarSign,
    FiImage
} from "react-icons/fi";
import "./Home.css";
import { useState } from "react";

const Home = () => {
    const [name, setName] = useState();
    const [visible, setVisible] = useState(true);

    if(2 > 1 && 5 < 10) {

    }

    return (
        <>
            {visible && (
                <div className="ProdReg">
                    <h3>Adicionar Produto</h3>
                    <div id="NameProd">
                        <FiPackage />
                        <input placeholder="Nome do Produto" type="text" />
                    </div>
                    <div id="PriceProd">
                        <FiDollarSign />
                        <input placeholder="Valor" type="text" />
                    </div>
                    <div id="ImageProd">
                        <FiImage />
                        <input placeholder="Url da Imagem" type="text" />
                    </div>
                    <div>
                        <button onClick={() => {
                            //alguma ação para adicionar o prod na api
                            setVisible(false)
                        }}>Adicionar</button>
                    </div>
                </div>
            )}
            <div className="">
                <input type="text" />
                <button onClick={() => {setVisible(true)}}>
                    <FiPlusCircle /> Adicionar Produto
                </button>
            </div>
            <table>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Imagem</th>
                </tr>
                <tr>
                    <td>Televisão</td>
                    <td>R$5000,00</td>
                    <td>
                        <img
                            style={{ width: "5rem" }}
                            src="https://s2.glbimg.com/ppNkzAMfS2rLyYwWa8ORyNm2ovU=/0x0:695x463/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/p/b/AunsLbRASXhHCFPTMeaQ/2015-08-04-led.jpg"
                            alt=""
                        />
                    </td>
                    <td>
                        <button>
                            <FiEdit /> Editar
                        </button>
                        <button>
                            <FiTrash2 /> Remover
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
};

export default Home;
