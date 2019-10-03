import { Component, OnInit } from '@angular/core';
import { EvaluarseService } from './evaluarse.service';
import { Preguntas } from 'src/app/models/preguntas';
import { Secciones } from 'src/app/models/secciones';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-evaluarse',
  templateUrl: './evaluarse.component.html',
  styleUrls: ['./evaluarse.component.css']
})
export class EvaluarseComponent implements OnInit {

  isSubmitted = false;
  pregunti: Preguntas[];
  Seccion: Secciones [];
  array: any[] =[];
  form: FormGroup;

  constructor(private evaluarseService: EvaluarseService, public fb: FormBuilder) { }

  ngOnInit() {
  //  this.mostrarcarl();
    this.mostrarcal();
    this.form = this.fb.group({
      punto: new FormControl('')
    });

  }

  get myForm() {
    return this.form.get('punto');
  }

  mostrarcarl(id: number) {

      this.evaluarseService.getPreguntas(id).subscribe( reas => {
        this.pregunti = reas;
      });
  }
  mostrarcal() {
    this.evaluarseService.getSecciones().subscribe(as => {
      this.Seccion = as;
      console.log('seccion', as);
      as.forEach( (e: any) => {
        this.mostrarcarl(e.id);
      });
    });
  }
  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false ;
    } else {
      alert(JSON.stringify(form.value));
      this.array.push(form.value);
      console.log(this.array)
    }
  }
}




