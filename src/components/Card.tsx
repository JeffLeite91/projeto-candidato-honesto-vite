import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Modal from "./Modal";
import PorqueVotar from "./PorqueVotar";
import LikeAndDisLike from "./LikeAndDisLike";

export default function Card(props: Candidato) {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);

    return (
        <div className="relative text-center bg-white rounded-md w-72 h-auto">
            <button onClick={abrirModal} className="w-full h-full">
                <div className="flex max-lg:flex-col items-center justify-evenly gap-10 p-4 h-96">
                    <div className="p-7 bg-gray-500 rounded-full absolute top-4 ">
                        <FaUser className="w-10 h-10 " />
                    </div>
                    <div className="flex flex-col items-center pt-28">
                        <div className="font-bold text-lg">{props.nome}</div>
                        <div className="flex flex-col">
                            <div>{props.numero}</div>
                            <div>{props.partido}</div>
                        </div>
                        <div className="p-2">{props.propostas}</div>
                    </div>
                </div>
            </button>

            <Modal abrirModal={modalAberto} fecharModal={fecharModal}>
                <div className="flex flex-col justify-center items-center gap-3 mb-4 -m-5">
                    <div className="w-20 h-20 bg-black rounded-full" />
                    <p className="text-xl font-semibold">{props.nome}</p>
                    <p>Número do partido: {props.numero}</p>
                    <p>Partido: {props.partido}</p>
                    <p>{props.biografia}</p>
                    <p>{props.propostas}</p>
                </div>
                <PorqueVotar>
                    <LikeAndDisLike id={props.id} nome={props.nome} numero={props.numero} biografia={props.biografia}></LikeAndDisLike>
                </PorqueVotar>
            </Modal>
        </div>
    );
}
