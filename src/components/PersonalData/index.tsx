import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './style.css';

interface StepProps {
    formData: {
        nome: string;
        dataNascimento: string,
        email: string,
        telefone: string
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PersonalData({ formData, handleInputChange }: StepProps) {


    // Estados de erro
    const [errors, setErrors] = useState({
        nome: '',
        telefone: '',
        email: '',
        dataNascimento: '',
    });

    function validarTelefone(telefone: string) {
        // Expressão regular para validar telefone no formato: 12-34567-8901
        const regexTelefone = /^[\d]{2}-[\d]{5}-[\d]{4}$/;
        return regexTelefone.test(telefone);
    };

    // Função para validar o formulário
    function validarFormulario() {
        let formErrors = { nome: '', telefone: '', email: '', dataNascimento: '' };

        if (formData.nome.length < 3) {
            formErrors.nome = 'Nome deve ter pelo menos 3 caracteres.';
        }

        if (!validarTelefone(formData.telefone)) {
            formErrors.telefone = 'Telefone inválido. Exemplo: 12-34567-8901';
        }

        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regexEmail.test(formData.email)) {
            formErrors.email = 'Email inválido. Ex.: john@gmail.com';
        }

        if (!formData.dataNascimento) {
            formErrors.dataNascimento = 'Data de nascimento é obrigatória.';
        } else {
            const birthDate = new Date(formData.dataNascimento);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();

            if (age < 18) {
                formErrors.dataNascimento = 'Você deve ter pelo menos 18 anos.';
            }
        }

        setErrors(formErrors);

        // Retorna true se não houver erros
        return !Object.values(formErrors).some((error) => error !== '');
    };

    const handleValidation = (e: React.FormEvent) => {
        e.preventDefault();
        if (validarFormulario()) {
            console.log('Formulário enviado com sucesso');
        }
    };

    return (
        <div className="connCorp-form">
            <div className="connCorp-box">
                <h2>Nome Completo</h2>
                <input name="nome" type="text" className='input-personal-label' placeholder="Nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                />
                {errors.nome && <label>{errors.nome}</label>}
            </div>
            <div className="connCorp-box">
                <h2>Data de Nascimento</h2>
                <input name="dataNascimento" type="date" className='input-personal-label'
                    placeholder="Data de nascimento"
                    value={formData.dataNascimento}
                    onChange={handleInputChange}
                />
                {errors.dataNascimento && (
                    <label>{errors.dataNascimento}</label>)}
            </div>

            <div className="connCorp-box">
                <h2>Email</h2>
                <input name="email" type="text" className='input-personal-label' placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                {errors.email && <label>{errors.email}</label>}
            </div>
            <div className="connCorp-box">
                <h2>Phone</h2>

                <InputMask
                    mask="99-99999-9999"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    // maskChar={null}
                    className="input-personal-label"
                    placeholder="Telefone"
                    name="telefone"
                    type="text"
                />
                {errors.telefone && <label>{errors.telefone}</label>}
            </div>

            <div className="mt-20">
                <button onClick={handleValidation}>
                    Validar
                </button>
            </div>
        </div >
    );
}
