import modelo1 from "../assets/1_frontão_3_saias.png";
import modelo2 from "../assets/2_frontão_duas_saias.png";
import modelo3 from "../assets/3_frontão_uma_saia.png";
import balcaoModelo1 from "../assets/balcão_1_frontão_3_saias.png";
import balcaoModelo2 from "../assets/Balcão_2_frontão_duas_saias.png";
import balcaoModelo3 from "../assets/balcão_3_frontão_uma_saia.png";

const modelos = [
  { 
    id: "0",
    nome: "1 Frontão - 3 Saias", 
    imagem: modelo1,
    frontao: 1,
    saia: 3,
    cuba: true,
  },
  { 
    id: "1",
    nome: "2 Frontões - 2 Saias", 
    imagem: modelo2,
    frontao: 2,
    saia: 2,
    cuba: true,
  },
  {
    id: "2",
    nome: "3 Frontões - 1 Saia",
    imagem: modelo3,
    frontao: 3,
    saia: 1,
    cuba: true,
  },
  {
    id: "3",
    nome: "Balcão - 1 Frontão - 3 Saias",
    imagem: balcaoModelo1,
    frontao: 1,
    saia: 3,
    cuba: false,
  },
  {
    id: "4",
    nome: "Balcão - 2 Frontões - 2 Saias",
    imagem: balcaoModelo2,
    frontao: 2,
    saia: 2,
    cuba: false,
  },
  {
    id: "5",
    nome: "Balcão - 3 Frontões - 1 Saia",
    imagem: balcaoModelo3,
    frontao: 3,
    saia: 1,
    cuba: false,
  }
]

export default modelos;
