'use client'

import { useState } from "react";
import Image from "next/image";
import Input from "./src/components/Input";
import Button from "./src/components/Button";
import Select from "./src/components/Select";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Checkbox from "./src/components/Checkbox";
import Modal from "./src/components/Modal";
import logo from "./src/assets/logo.png";
import materiais from "./src/data/materiais";
import modelos from "./src/data/modelos";
import { calcularValoresTotais } from "./src/calculos/total";

export default function Home() {
  const [materialIndex, setMaterialIndex] = useState<string>("0");
  const [modeloIndex, setModeloIndex] = useState<string>("0");
  const [comprimento, setComprimento] = useState<string>("");
  const [largura, setLargura] = useState<string>("");
  const [furoColagemCuba, setFuroColagemCuba] = useState<boolean>(true);
  const [quantidadeFechas, setQuantidadeFechas] = useState<number>(0);
  const [mostrarFecha, setMostrarFecha] = useState<boolean>(false);
  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const [larguraFrontao, setLarguraFrontao] = useState<string>("0.10");
  const [larguraSaia, setLarguraSaia] = useState<string>("0.06");
  const [valorMetroAcabamento, setValorMetroAcabamento] = useState<string>("45");
  const [valorMaterialPersonalizado, setValorMaterialPersonalizado] = useState<string>("450");
  const [quantidadeGrapas, setQuantidadeGrapas] = useState<string>("3");
  const [valorInstalacao, setValorInstalacao] = useState<string>("250");
  const [cubaInclusa, setCubaInclusa] = useState<boolean>(modelos[0].cuba);
  const [mensagemCopiada, setMensagemCopiada] = useState<boolean>(false);
  const valorUnitarioGrapa = 30;

  const modeloSelecionado = modeloIndex ? modelos[parseInt(modeloIndex)] : modelos[0];

  const handleMaterialChange = (value: string) => {
    setMaterialIndex(value);
    const materialSelecionado = materiais[parseInt(value)];
    if (materialSelecionado) setValorMaterialPersonalizado(materialSelecionado.preco.toString());
  };

  const handleModeloChange = (value: string) => {
    setModeloIndex(value);
    const modelo = modelos[parseInt(value)];
    if (modelo) setCubaInclusa(modelo.cuba);
  };

  const getValores = () => {
    const quantidadeGrapasConvertida = parseInt(quantidadeGrapas);

    return calcularValoresTotais({
      material: materialIndex ? materiais[parseInt(materialIndex)] : null,
      modelo: modeloSelecionado,
      comprimento,
      largura,
      larguraFrontao,
      larguraSaia,
      valorMetroAcabamento,
      valorMaterialPersonalizado,
      furoColagemCuba,
      cubaInclusa,
      quantidadeGrapas: Number.isNaN(quantidadeGrapasConvertida) ? 0 : quantidadeGrapasConvertida,
      valorUnitarioGrapa,
      valorInstalacao,
      quantidadeFechas,
    });
  };

  const calculateTotal = () => {
    const { valorTotal } = getValores();
    return valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const getSaudacao = () => {
    const horaAtual = new Date().getHours();

    if (horaAtual < 12) return "Bom dia";
    if (horaAtual < 18) return "Boa tarde";
    return "Boa noite";
  };

  const handleCopiarMensagem = async () => {
    const saudacao = getSaudacao();
    const total = calculateTotal();
    const mensagem = `${saudacao}! O valor do seu orçamento ficou em R$${total}. Se estiver tudo certo para você, já posso te passar os próximos passos para fechar o seu pedido.`;

    try {
      await navigator.clipboard.writeText(mensagem);
      setMensagemCopiada(true);
      setTimeout(() => setMensagemCopiada(false), 2000);
    } catch {
      console.error("Não foi possível copiar a mensagem.");
    }
  };

  const imagemModelo = modeloSelecionado.imagem;
  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16">
      <Image src={logo} alt="Logo" className="w-[140px] sm:w-[180px] lg:w-[200px] h-auto mb-6 sm:mb-8 lg:mb-10 mx-auto" priority />
      <Image src={imagemModelo} alt="Modelo" className="w-full max-w-[800px] h-auto mb-4 sm:mb-6 mx-auto" priority />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Select 
          text="Material" 
          placeholder="selecione" 
          value={materialIndex}
          onChange={handleMaterialChange}
          options={materiais.map((material, index) => ({ value: index.toString(), label: material.nome }))} 
        />
        <Select 
          text="Modelo" 
          placeholder="selecione" 
          value={modeloIndex}
          onChange={handleModeloChange}
          options={modelos.map((modelo) => ({ value: modelo.id, label: modelo.nome }))} 
        />
        <Input 
          text="Comprimento" 
          placeholder="Adicione o comprimento em metros. Ex.: 2,5"
          value={comprimento}
          onChange={setComprimento}
        />
        <Input 
          text="Largura" 
          placeholder="Se não especificado será usado 0,60cm"
          value={largura}
          onChange={setLargura}
        />

        <div className="bg-[#E8E2E2] min-h-[35px] px-2 rounded flex justify-between items-center text-[#522727]">
          <p>Total: <span className="font-bold">R${calculateTotal()}</span></p>
          <button className="cursor-pointer hover:text-[#170303]" onClick={handleCopiarMensagem} title="Copiar mensagem de orçamento">
            <ContentCopyIcon style={{ fontSize: 16 }} />
          </button>
        </div>
        {mensagemCopiada && (
          <span className="fixed top-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:top-6 sm:right-6 z-50 bg-[#522727] text-[#E8E2E2] text-sm px-4 py-2 rounded shadow-md whitespace-nowrap">
            Mensagem copiada com sucesso!
          </span>
        )}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <Checkbox text="Furo e colagem de coockie" checked={furoColagemCuba} onChange={setFuroColagemCuba} />
          {mostrarFecha && (
            <div className="flex items-center gap-1 sm:ml-auto">
              <button
                onClick={() => setQuantidadeFechas(q => Math.max(0, q - 1))}
                className="w-[26px] h-[26px] rounded border border-[#CBB5B5] text-[#522727] flex items-center justify-center hover:bg-[#E8E2E2] cursor-pointer"
              >-</button>
              <span className="w-[24px] text-center text-[#522727] font-bold text-sm">{quantidadeFechas}</span>
              <button
                onClick={() => setQuantidadeFechas(q => Math.min(2, q + 1))}
                className="w-[26px] h-[26px] rounded border border-[#CBB5B5] text-[#522727] flex items-center justify-center hover:bg-[#E8E2E2] cursor-pointer"
              >+</button>
              <span className="text-[#A07B7B] text-xs ml-1">fecha(s)</span>
            </div>
          )}
        </div>
        
        <span className="text-[#A07B7B] text-sm leading-relaxed">
          O valor está sendo calculado com {larguraSaia}m de saia e {larguraFrontao}m de frontão.<br/> O valor do material é de R${valorMaterialPersonalizado || "0"},00 m²
        </span>
        <div className="flex flex-row gap-2 w-full">
          <Button text="Adicionar Fecha" onClick={() => {
            setMostrarFecha(v => {
              if (v) setQuantidadeFechas(0);
              else setQuantidadeFechas(1);
              return !v;
            });
          }} />
          <Button text="Editar informações" variant="secundario" onClick={() => setModalAberto(true)} />
        </div>
      </div>
      <Modal isOpen={modalAberto} onClose={() => setModalAberto(false)} title="Editar informações">
        <div className="flex flex-col gap-4">
          <Input
            text="Largura da saia (m)"
            placeholder="Ex.: 0.06"
            value={larguraSaia}
            onChange={setLarguraSaia}
          />
          <Input
            text="Largura do frontão (m)"
            placeholder="Ex.: 0.10"
            value={larguraFrontao}
            onChange={setLarguraFrontao}
          />
          <Input
            text="Valor do metro do acabamento"
            placeholder="Ex.: 45"
            value={valorMetroAcabamento}
            onChange={setValorMetroAcabamento}
          />
          <Input
            text="Valor do material (m²)"
            placeholder="Ex.: 450"
            value={valorMaterialPersonalizado}
            onChange={setValorMaterialPersonalizado}
          />
          <Input
            text="Quantidade de grapas"
            placeholder="Ex.: 3"
            value={quantidadeGrapas}
            onChange={setQuantidadeGrapas}
          />
          <Input
            text="Valor da instalação"
            placeholder="Ex.: 250"
            value={valorInstalacao}
            onChange={setValorInstalacao}
          />
          <Checkbox text="Cuba inclusa" checked={cubaInclusa} onChange={setCubaInclusa} />
          <div className="flex justify-end mt-2">
            <Button text="Fechar" variant="secundario" onClick={() => setModalAberto(false)} />
          </div>
        </div>
      </Modal>
    </main>
  );
}
