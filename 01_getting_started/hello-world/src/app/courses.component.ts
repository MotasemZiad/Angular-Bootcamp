import {Component} from '@angular/core';

@Component({
  selector: 'courses',
  template: `
      {{ text | summary: 100}}
  `,
})
export class CoursesComponent {
  text = `
  Cupidatat eiusmod non aute mollit ea et minim sint elit nostrud labore veniam commodo adipisicing.
  Aute ea voluptate laboris Lorem ut dolore minim tempor occaecat laboris mollit esse dolore.
  Aute elit consectetur ipsum eu aliqua exercitation consectetur laboris esse nostrud anim et.
  Veniam nostrud qui aliquip consequat magna incididunt esse. Non minim aute ullamco do
  reprehenderit magna ut est ut do dolor magna deserunt ad. Exercitation eiusmod id laboris sint esse
  incididunt Lorem dolore non nisi aliqua ad. Eu dolor commodo magna id aliqua magna aute fugiat
  in dolore mollit.Ullamco consectetur tempor officia nostrud exercitation nisi ex eu anim.
  `


}
