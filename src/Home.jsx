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

    if (2 > 1 && 5 < 10) {
    }

    return (
        <>
            {visible && (
                <div id="prodreg">
                    <h3>Adicionar Produto</h3>
                    <div className="icon">
                        <FiPackage size={25} />
                        <input placeholder="Nome do Produto" type="text" />
                    </div>
                    <div className="icon">
                        <FiDollarSign size={25} />
                        <input placeholder="Valor" type="text" />
                    </div>
                    <div className="icon">
                        <FiImage size={25} />
                        <input placeholder="Url da Imagem" type="text" />
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                //alguma ação para adicionar o prod na api
                                setVisible(false);
                            }}
                        >
                            Adicionar
                        </button>
                    </div>
                </div>
            )}

            <div id="search">
                <input placeholder="Buscar..." type="text" />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Imagem</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Televisão</td>
                        <td>R$5.000,00</td>
                        <td>
                            <img
                                style={{ width: "5rem" }}
                                src="https://s2.glbimg.com/ppNkzAMfS2rLyYwWa8ORyNm2ovU=/0x0:695x463/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/p/b/AunsLbRASXhHCFPTMeaQ/2015-08-04-led.jpg"
                                alt=""
                            />
                        </td>
                        <td>
                            <button id="edit">
                                <FiEdit color=" rgb(127,36,255);" /> Editar
                            </button>
                            <button id="remove">
                                <FiTrash2 /> Remover
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Notebook</td>
                        <td>R$7.000,00</td>
                        <td>
                            <img
                                style={{ width: "5rem" }}
                                src="https://supportkb.dell.com/img/ka02R000000kvtcQAA/ka02R000000kvtcQAA_pt_BR_4.jpeg"
                                alt=""
                            />
                        </td>
                        <td>
                            <button id="edit">
                                <FiEdit color=" rgb(127,36,255);" /> Editar
                            </button>
                            <button id="remove">
                                <FiTrash2 /> Remover
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Celular</td>
                        <td>R$2.500,00</td>
                        <td>
                            <img
                                style={{ width: "4rem" }}
                                src="https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-galaxy-a32-6-4-128gb-samsung_472403.jpg"
                                alt="Foto do celular Samsung"
                            />
                        </td>
                        <td>
                            <button id="edit">
                                <FiEdit color=" rgb(127,36,255);" /> Editar
                            </button>
                            <button id="remove">
                                <FiTrash2 /> Remover
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="footer">
                <button
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    <FiPlusCircle /> Novo Produto
                </button>
            </div>
        </>
    );
};

export default Home;
