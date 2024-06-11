import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from './../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Full-Stack | Angular | Java | ADVPL | SqlServer ',
        p: 'Diamante Agricola | Fev 2022 - Atual',
      },
      text: '<p>Minhas responsabilidades incluem a utilização da metodologia Kanban através do Trello para aprimorar a organização e aumentar a produtividade da equipe. Tenho trabalhado com a administração de banco de dados SQL Server, onde realizo a modelagem, criação de Procedures e Views para facilitar integrações e personalizações.</p> <p>Na área de desenvolvimento, tenho implementado soluções robustas utilizando Java para o backend e Angular para o frontend, criando aplicações web dinâmicas e escaláveis que atendem às necessidades da empresa. Além disso, dedico-me ao desenvolvimento no ERP Protheus, customizando e desenvolvendo funcionalidades específicas, bem como criando APIs para integração, proporcionando soluções eficientes e adaptáveis aos sistemas internos. A elaboração de dashboards com Power BI é outra responsabilidade minha, oferecendo insights valiosos que auxiliam na tomada de decisões estratégicas.</p> <p>Além das atividades de programação e desenvolvimento, também realizo treinamentos com as equipes para disseminar conhecimentos técnicos e melhores práticas, promovendo um ambiente de constante aprendizado e melhoria.</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor Full-Stack | ADVPL | SqlServer | Angular | Java',
        p: 'Libert Solutions | Set 2019 - Fev 2022',
      },
      text: '<p>Na minha experiência anterior, fui responsável pelo desenvolvimento contínuo e pela atualização de Stored Procedures com o objetivo de otimizar o desempenho do sistema. Este trabalho envolvia identificar gargalos de performance, reescrever códigos ineficientes e implementar melhorias para garantir que o sistema operasse com máxima eficiência.</p><p>Regularmente executei atualizações de versão e ambiente para manter o sistema atualizado com as últimas melhorias e correções. Este processo era crítico para assegurar a estabilidade e a segurança do sistema, além de implementar novas funcionalidades que melhorassem a experiência do usuário e a operação geral do sistema.</p> <p>Desenvolvi rotinas específicas em ADVL para o ERP Protheus, incluindo a criação de relatórios, telas FWMBrowse, Execauto e a importação de arquivos. Para a elaboração de relatórios eficientes e personalizados, utilizei ferramentas como TReport e FWMSExcel. Além disso, realizei análises aprofundadas das customizações existentes e desenvolvi soluções personalizadas conforme necessário, garantindo que as necessidades específicas dos clientes fossem atendidas de maneira eficaz e eficiente.</p>',
    },
  ]);
}
