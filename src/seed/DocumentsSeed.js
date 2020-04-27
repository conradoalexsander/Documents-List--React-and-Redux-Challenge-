const DocumentsSeed = [
  {
    id: Math.floor(Math.random() * 100),
    status: "Em andamento",
    description: "Validação do novo sistema de irrigação"
  },
  {
    id: Math.floor(Math.random() * 100),
    status: "Não iniciado",
    description: "Ordem de serviço de manutenção de tratores"
  },
  {
    id: Math.floor(Math.random() * 100),
    status: "Finalizado",
    description: "Ordem de compra de novos containers para orgânicos"
  }
];

export default DocumentsSeed;
