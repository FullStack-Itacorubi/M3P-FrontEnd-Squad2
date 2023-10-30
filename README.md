-# M3P-FrontEnd-Squad2
# Aplicativo Lab Medical

## Visão Geral

O Aplicativo Lab Medical é uma aplicação web desenvolvida usando Angular que fornece uma plataforma para o gerenciamento de registros médicos e consultas para profissionais de saúde. Ele permite que os provedores de cuidados de saúde agendem consultas, visualizem informações de pacientes e acompanhem o histórico médico de seus pacientes.

## Descrição do Problema

Gerenciar informações de pacientes e consultas em um ambiente de saúde pode ser uma tarefa complexa e demorada. O Aplicativo Lab Medical visa simplificar esse processo, fornecendo uma interface amigável para que os profissionais de saúde gerenciem eficientemente seus pacientes e consultas.

## Tecnologias Utilizadas

- Angular: Angular é um popular framework JavaScript usado para criar aplicativos web. O Aplicativo Lab Medical utiliza o Angular para o desenvolvimento do front-end.

- RxJS: RxJS é uma biblioteca para programação reativa em JavaScript. Ela é usada no Aplicativo Lab Medical para lidar com operações assíncronas.

- ngx-mask: ngx-mask é uma biblioteca Angular para adicionar máscaras de entrada a campos de formulário. O Aplicativo Lab Medical usa o ngx-mask para formatar dados de entrada, como números de telefone.

- Tailwind CSS: Tailwind CSS é um framework CSS "utility-first" que simplifica a estilização e o design. O Aplicativo Lab Medical aproveita o Tailwind CSS para estilizar sua interface de usuário.

## Executando a Aplicação

Para executar o Aplicativo Lab Medical em sua máquina local, siga estas etapas:
1. Clone o repositório em sua máquina local:

   ```bash
   git clone https://github.com/seunome/usina-med.git

1. Navegue até o diretório do projeto:

   ```bash
   cd LabMedical

1. Instale as dependências necessárias:

   ```bash
   npm install

1. Inicie o servidor de desenvolvimento:

   ```bash
   ng serve

1. Abra seu navegador da web e acesse http://localhost:4200 para acessar o Aplicativo Lab Medical.
2. Lembre-se de disponibilizar/expor acesso a base de dados (back-end) no endereco http://localhost:8080/api . Por favor clonar o repositorio do back-end de ser necessario (https://github.com/FullStack-Itacorubi/M3P-BackEnd-Squad2/)

## Melhorias Futuras

Embora o Aplicativo Lab Medical forneça recursos essenciais para o gerenciamento de registros médicos e consultas, existem várias áreas onde melhorias podem ser feitas:

- **Autenticação do Usuário**: Implemente autenticação e autorização de usuários para proteger os dados dos pacientes e o controle de acesso.

- **Interface de Usuário Aprimorada**: Melhore a interface do usuário com melhor navegação e um design mais atraente.

- **Notificações**: Adicione notificações em tempo real para lembretes e atualizações de consultas.

- **Testes**: Implemente testes abrangentes de unidade e integração para garantir a confiabilidade da aplicação.

- **Contêiner Docker Unificado**: Considere a criação de um contêiner Docker único que inclua tanto o front-end quanto o back-end para uma execução simplificada da aplicação.

Essas melhorias podem aprimorar a funcionalidade e a usabilidade do Aplicativo Lab Medical.

## Feedback

Seu feedback é importante para nós. Se você encontrar problemas ou tiver sugestões de melhorias, sinta-se à vontade para abrir um problema no repositório do GitHub ou entre em contato conosco.

Obrigado por usar o Aplicativo Lab Medical!
