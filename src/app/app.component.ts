import { Component } from '@angular/core';
import { IJobModel } from './interfaces/IJobModel';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portifolio';

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  jobs: IJobModel[] = [
    {
      ocupation: "Desenvolvedor",
      company: "NDD Tech",
      description: "Minhas principais atividades foram de Desenvolvimento de Sistemas de Gestão, Documentador de Integrações, Suporte de Sistemas Internos e Gestão da Intranet  da Empresa. Estou em uma equipe de sistemas internos, onde existe bastante contato com a regra de negócio. Atualmente estamos desenvolvendo dois sistemas para a gestão jurídica da sede. A gestão de tarefas era feita seguindo os padrões ágeis (Planning, Daily, Review e Retrospective) ",
      chipList: ['Angular', 'HTML', 'CSS', 'JavaScript'],
      startYear: "2023",
      lastYear: "Atual",
    },
    {
      ocupation: "Suporte",
      company: "Plasoft",
      description: "Aperfeiçoei minhas habilidades de comunicação e trabalho em equipe como suporte técnico para produto de notas eletrônicas. Atuei com um time maior, trabalhando a assincronia de atividades e compartilhamento de informações",
      chipList: ['Comunicação', 'Solução de Problemas', 'Trabalho em Equipe'],
      startYear: "2022",
      lastYear: "2023",
    },
  ]
}

function update(e: MouseEvent) {
  var x = e.clientX;
  var y = e.clientY;

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove', update)