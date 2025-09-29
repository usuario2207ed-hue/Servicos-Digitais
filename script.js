const services = {
  redesim: { title:"REDESIM", desc:"Evita inclusão do CPF em empresas sem autorização. Login GOV.BR necessário.", url:"https://www.gov.br/empresas-e-negocios/pt-br/redesim" },
  receita: { title:"Receita Federal", desc:"Consulta a situação cadastral do CPF e ativa proteções.", url:"https://servicos.receitafederal.gov.br" },
  anpd: { title:"ANPD", desc:"Registre reclamações relacionadas à LGPD e proteção de dados.", url:"https://www.gov.br/anpd/pt-br" },
  delegacia: { title:"Delegacia Virtual", desc:"Registre boletim de ocorrência em caso de fraudes ou golpes.", url:"https://www.gov.br/pt-br/servicos/registrar-ocorrencia-policial-online" },
  serasa: { title:"Serasa", desc:"Monitora CPF, alertas de consultas e dívidas, possibilidade de bloqueio.", url:"https://www.serasa.com.br" },
  spc: { title:"SPC Brasil", desc:"Monitoramento de CPF e alertas sobre movimentações.", url:"https://www.spcbrasil.org.br" },
  boavista: { title:"Boa Vista Serviços", desc:"Consultas e soluções antifraude para CPF.", url:"https://www.boavistaservicos.com.br" },
  detran: { title:"Detran RJ", desc:"Serviços de veículos, CNH, licenciamento e taxas no Rio de Janeiro.", url:"https://www.detran.rj.gov.br/" },
  cnh: { title:"CNH Digital", desc:"Acesse sua Carteira Nacional de Habilitação em formato digital.", url:"https://www.gov.br/pt-br/temas/servicos-de-transito" },
  sus: { title:"Carteira do SUS", desc:"Solicite ou atualize sua inscrição no Sistema Único de Saúde.", url:"https://meususdigital.saude.gov.br/inicio" },
  irpf: { title:"Imposto de Renda", desc:"Declaração de Imposto de Renda Pessoa Física.", url:"https://www.gov.br/receitafederal/pt-br" },
  dpvat: { title:"DPVAT / Seguros Veículos", desc:"Seguro obrigatório de veículos e informações sobre cobertura.", url:"https://www.rj.gov.br/servico/emitir-boleto-seguro-dpvat51" },
  ctps: { title:"Carteira de Trabalho Digital", desc:"Acesse sua carteira de trabalho digital e histórico.", url:"https://www.gov.br/pt-br/temas/carteira-de-trabalho-digital" },
  inss: { title:"INSS", desc:"Serviços e benefícios previdenciários, consulta e agendamentos.", url:"https://www.gov.br/inss" },
  titulo: { title:"Título de Eleitor", desc:"Solicite, atualize ou regularize sua situação eleitoral.", url:"https://www.tse.jus.br/" },
  certidao: { title:"Certidões Nascimento / Casamento / Óbito", desc:"Solicite a segunda via ou atualize certidões.", url:"https://www.gov.br/pt-br/@@search?origem=keyword&SearchableText=Registro%20Civil" },
  reservista: { title:"Certificado de Reservista", desc:"Solicite seu Certificado de Alistamento Militar ou Dispensa.", url:"https://www.gov.br/pt-br/categorias/forcas-armadas-e-defesa-civil/documentacao-servico-militar-e-defesa-civil" },
  nadaConsta: { title:"Nada Consta Justiça RJ", desc:"Emissão de certidão negativa judicial no Tribunal de Justiça do Rio de Janeiro.", url:"https://www.tjrj.jus.br/consultas/processos_jud/processos_jud" },
  govbr: { title:"Login Acesso GOV.BR", desc:"Página de login oficial da plataforma GOV.BR.", url:"https://servicos.acesso.gov.br/" },
  assinador: { title:"Assinador Digital ITI", desc:"Ferramenta oficial para assinaturas digitais do ITI.", url:"https://assinador.iti.br/assinatura/index.xhtml" },
  serial: { title:"Consulta Serial Aparelho", desc:"Consulta pública de número serial de aparelhos.", url:"https://www.consultaserialaparelho.com.br/public-web/homeSiga" },
  certidoesGov: { title:"Certidões GOV.BR", desc:"Emissão de certidões digitais no GOV.BR.", url:"https://servicos.acesso.gov.br/certidoes" },
  cpfConsulta: { title:"Consulta CPF Nacional", desc:"Consulta nacional de CPF para verificar situação cadastral.", url:"https://consultanacional.org/consultas/cpf/#sabermais" },
  servicoEstadual: { title:"Serviço Estadual RJ", desc:"Portal de serviços estaduais do Rio de Janeiro.", url:"https://www.gov.br/pt-br/servicos-estaduais/servico_estadual?id=17971" },
  categoriasGov1: { title:"Categorias GOV.BR", desc:"Lista de categorias de serviços disponíveis no GOV.BR.", url:"https://www.gov.br/pt-br/categorias" },
  categoriasGov2: { title:"Mais Categorias GOV.BR", desc:"Mais serviços categorizados no GOV.BR.", url:"https://www.gov.br/pt-br/categorias" },
  reclameaqui: { title:"Reclame Aqui", desc:"Acompanhe e registre reclamações contra empresas.", url:"https://www.reclameaqui.com.br/login/consumidor/" }
};

function openPopup(serviceKey){
  const service = services[serviceKey];
  document.getElementById('popupTitle').innerText = service.title;
  document.getElementById('popupDesc').innerText = service.desc;
  document.getElementById('popupLink').onclick = () => { window.open(service.url, "_blank"); };
  document.getElementById('popupOverlay').style.display = "flex";
}

function closePopup(){
  document.getElementById('popupOverlay').style.display = "none";
}
