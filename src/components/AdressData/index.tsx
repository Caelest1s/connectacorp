import { useState } from 'react';
import InputMask from 'react-input-mask';
import './style.css';

interface StepProps {
    formData: {
        pais: string;
        estado: string,
        cidade: string,
        rua: string,
        cep: string

        cobrancaPais: string;
        cobrancaEstado: string,
        cobrancaCidade: string,
        cobrancaRua: string,
        cobrancaCep: string
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AdressData({ formData, handleInputChange }: StepProps) {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    function handleCheckboxChange(event: any) {
        setIsChecked(event.target.checked);
        if (!isChecked) {
            formData.cobrancaPais = formData.pais;
            formData.cobrancaEstado = formData.estado;
            formData.cobrancaCidade = formData.cidade;
            formData.cobrancaRua = formData.rua;
            formData.cobrancaCep = formData.cep;
        } else if (isChecked) {
            formData.cobrancaPais = '';
            formData.cobrancaEstado = '';
            formData.cobrancaCidade = '';
            formData.cobrancaRua = '';
            formData.cobrancaCep = '';
        }
    }

    return (
        <div className="connCorp-form">
            <h2>Endereço de Residência</h2>
            <div className="connCorp-box-adress">
                <h2>País</h2>
                <input type="text"
                    className='input-adress'
                    id="pais"
                    name="pais"
                    placeholder="Insira o País"
                    value={formData.pais}
                    onChange={handleInputChange}
                />
                <h2>Estado</h2>
                <input type="text"
                    className='input-adress'
                    id="estado"
                    name="estado"
                    placeholder="Insira o Estado"
                    value={formData.estado}
                    onChange={handleInputChange}
                />
                <h2>Cidade</h2>
                <input type="text"
                    className='input-adress'
                    id="cidade"
                    name="cidade"
                    placeholder="Insira a cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                />
            </div>
            <div className="connCorp-box-adress">

                <h2>Rua</h2>
                <input type="text"
                    className='input-adress'
                    id="rua"
                    name="rua"
                    placeholder="Insira a rua"
                    value={formData.rua}
                    onChange={handleInputChange}
                />
                <h2>CEP</h2>

                <InputMask
                    mask="99-999-999"
                    value={formData.cep}
                    onChange={handleInputChange}
                    // maskChar={null}
                    className="input-adress"
                    placeholder="Digite o CEP"
                    id="cep" type="text" name="cep"
                />
            </div>
            <div className="markdown mb-20">
                <input type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <output>Utilizar o endereço de residência para o de cobrança</output>
            </div>

            <div className="mt-20">
                <h2>Endereço de Cobrança</h2>
            </div>
            <div className="connCorp-box-adress">
                <h2>País</h2>
                <input type="text"
                    className='input-adress'
                    id="cobrancaPais"
                    name="cobrancaPais"
                    placeholder="Insira o País"
                    value={formData.cobrancaPais}
                    onChange={handleInputChange}
                    disabled={isChecked}
                />
                <h2>Estado</h2>
                <input type="text"
                    className='input-adress'
                    id="cobrancaEstado"
                    name="cobrancaEstado"
                    placeholder="Insira o Estado"
                    value={formData.cobrancaEstado}
                    onChange={handleInputChange}
                    disabled={isChecked}
                />
                <h2>Cidade</h2>
                <input type="text"
                    className='input-adress'
                    id="cobrancaCidade"
                    name="cobrancaCidade"
                    placeholder="Insira a cidade"
                    value={formData.cobrancaCidade}
                    onChange={handleInputChange}
                    disabled={isChecked}
                />
            </div>
            <div className="connCorp-box-adress">

                <h2>Rua</h2>
                <input type="text"
                    className='input-adress'
                    id="cobrancaRua"
                    name="cobrancaRua"
                    placeholder="Insira a rua"
                    value={formData.cobrancaRua}
                    onChange={handleInputChange}
                    disabled={isChecked}
                />
                <h2>CEP</h2>
                <InputMask
                    type="text"
                    mask="99-999-999"
                    value={formData.cobrancaCep}
                    onChange={handleInputChange}
                    // maskChar={null}
                    id="cobrancaCep"
                    name="cobrancaCep"
                    className="input-adress"
                    placeholder="Digite o CEP"
                    disabled={isChecked}
                />
            </div>
        </div>
    );
}
