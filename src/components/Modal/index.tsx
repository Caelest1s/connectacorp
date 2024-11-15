import './style.css';

interface ModalProps {
    formData: {
        nome: string;
        dataNascimento: string,
        email: string,
        telefone: string,

        pais: string;
        estado: string,
        cidade: string,
        rua: string,
        cep: string,

        cobrancaPais: string;
        cobrancaEstado: string,
        cobrancaCidade: string,
        cobrancaRua: string,
        cobrancaCep: string,

        cargo: string,
        enterprise: string,
        ramo: string,
        salario: string
    };
    handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ formData, handleClose }) => {
    return (
        <div className="modalOverlayStyle">
            <div className="modalContentStyle">
                <h3>Informações do Formulário</h3>
                <p><strong>Nome:</strong> {formData.nome}</p>
                <p><strong>Nome:</strong> {formData.dataNascimento}</p>
                <p><strong>Profissão:</strong> {formData.email}</p>
                <p><strong>Endereço:</strong> {formData.telefone}</p>

                <p><strong>País:</strong> {formData.pais}</p>
                <p><strong>Estado:</strong> {formData.estado}</p>
                <p><strong>Cidade:</strong> {formData.cidade}</p>
                <p><strong>Rua:</strong> {formData.rua}</p>
                <p><strong>CEP:</strong> {formData.cep}</p>

                <p><strong>Payment País:</strong> {formData.cobrancaPais}</p>
                <p><strong>Payment Estado:</strong> {formData.cobrancaEstado}</p>
                <p><strong>Payment Cidade:</strong> {formData.cobrancaCidade}</p>
                <p><strong>Payment Rua:</strong> {formData.cobrancaRua}</p>
                <p><strong>Payment CEP:</strong> {formData.cobrancaCep}</p>

                <p><strong>Nome:</strong> {formData.cargo}</p>
                <p><strong>Nome:</strong> {formData.enterprise}</p>
                <p><strong>Profissão:</strong> {formData.ramo}</p>
                <p><strong>Endereço:</strong> {formData.salario}</p>

                <button onClick={handleClose}>OK</button>
            </div>
        </div>
    );
};

export default Modal;