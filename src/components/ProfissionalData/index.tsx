import { useState } from 'react';
import './style.css';

interface StepProps {
    formData: {
        cargo: string;
        enterprise: string,
        ramo: string,
        salario: string
    };
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProfissionalData({ formData, handleInputChange }: StepProps) {

    const SALARIOS_RANGES = [
        { value: '1000-2000', label: 'R$ 1.000 - R$ 2.000' },
        { value: '2001-3000', label: 'R$ 2.001 - R$ 3.000' },
        { value: '3001-4000', label: 'R$ 3.001 - R$ 4.000' },
        { value: '4001-5000', label: 'R$ 4.001 - R$ 5.000' },
        { value: '5001-6000', label: 'R$ 5.001 - R$ 6.000' },
        { value: '6001-7000', label: 'R$ 6.001 - R$ 7.000' },
        { value: '7001-8000', label: 'R$ 7.001 - R$ 8.000' },
        { value: 'acima_8000', label: 'Acima de R$ 8.000' }
    ];

    // Estado para armazenar o salário selecionado
    const [salarioSelecionado, setSalarioSelecionado] = useState<string>(SALARIOS_RANGES[0].label);

    // Função para lidar com a mudança de seleção
    const handleChange = (event: any) => {
        setSalarioSelecionado(event.target.value);
        formData.salario = salarioSelecionado;
        console.log("salario: ", formData.salario, " input: ", salarioSelecionado);
    };

    return (
        <div className="connCorp-form">
            <div className="connCorp-box">
                <h2>Cargo</h2>
                <input type="text"
                    className='input-personal-label'
                    id="cargo"
                    name="cargo"
                    placeholder="insira..."
                    value={formData.cargo}
                    onChange={handleInputChange}
                />
            </div>
            <div className="connCorp-box">
                <h2>Nome da Empresa</h2>
                <input type="text" className='input-personal-label' placeholder="insira..."
                    id="enterprise"
                    name="enterprise"
                    value={formData.enterprise}
                    onChange={handleInputChange}
                />
            </div>
            <div className="connCorp-box">
                <h2>Ramo da Atividade</h2>
                <input type="text" className='input-personal-label' placeholder="insira..."
                    id="ramo"
                    name="ramo"
                    value={formData.ramo}
                    onChange={handleInputChange}
                />
            </div>
            <div className="connCorp-box">
                <h2>Salário</h2>
                <select
                    id="salario"
                    name="salario"
                    value={formData.salario}
                    onChange={handleChange}
                >
                    {SALARIOS_RANGES.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <p>Salário Selecionado: {salarioSelecionado}</p>
            </div>
        </div >
    );
}
