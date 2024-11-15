import axios from "axios";
import { useState } from "react";
import AdressData from "./components/AdressData";
import Modal from "./components/Modal";
import PersonalData from "./components/PersonalData";
import ProfissionalData from "./components/ProfissionalData";

export default function App() {

  interface FormData {
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
    cobrancaCep: string

    cargo: string,
    enterprise: string,
    ramo: string,
    salario: string

  }

  const [formData, setFormData] = useState<FormData>({
    nome: '',
    dataNascimento: '',
    email: '',
    telefone: '',

    pais: '',
    estado: '',
    cidade: '',
    rua: '',
    cep: '',

    cobrancaPais: '',
    cobrancaEstado: '',
    cobrancaCidade: '',
    cobrancaRua: '',
    cobrancaCep: '',

    cargo: '',
    enterprise: '',
    ramo: '',
    salario: ''
  });

  const url = "https://localhost:3006/api/main/create";

  const [screen, setScreen] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handlePreviousPage() {
    setScreen(screen - 1);
  }

  function handleNextPage() {
    setScreen(screen + 1);
  }

  function handleInputChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setIsModalOpen(true);

    axios.post(url, {
      nome: formData.nome,
      dataNascimento: formData.dataNascimento,
      email: formData.email,
      telefone: parseInt(formData.telefone),

      pais: formData.pais,
      estado: formData.estado,
      cidade: formData.cidade,
      rua: formData.rua,
      cep: formData.cep,

      cobrancaPais: formData.cobrancaPais,
      cobrancaEstado: formData.cobrancaEstado,
      cobrancaCidade: formData.cobrancaCidade,
      cobrancaRua: formData.cobrancaRua,
      cobrancaCep: parseInt(formData.cobrancaCep),

      cargo: formData.cargo,
      enterprise: formData.enterprise,
      ramo: formData.ramo,
      salario: parseFloat(formData.salario)
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log("error ao cadastrar:", error);
    })
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  console.log(formData);

  return (
    <>
      <html>
        <body>
          <div className="container">
            <div className="container-form">
              <form onSubmit={handleFormSubmit} method="post" className="container-teste">
                {screen === 0 &&
                  <PersonalData formData={formData} handleInputChange={handleInputChange} />
                }
                {screen === 1 &&
                  <AdressData formData={formData} handleInputChange={handleInputChange} />
                }
                {screen === 2 &&
                  <ProfissionalData formData={formData} handleInputChange={handleInputChange} />
                }
              </form>


              <div className="container-buttons">
                {screen > 0 &&
                  <button onClick={handlePreviousPage}>Previous</button>
                }
                {screen < 2 &&
                  <button onClick={handleNextPage}>Next</button>
                }
                {screen === 2 &&
                  <div>
                    <button type="submit" onClick={handleFormSubmit}>Enviar</button>

                    {isModalOpen && (
                      <Modal formData={formData} handleClose={handleCloseModal} />
                    )}
                  </div>
                }
              </div>
            </div>
          </div>
          <script src="utils/fetch.js"></script>
        </body>
      </html>
    </>
  )
}