import { Component, OnInit } from '@angular/core';
import { Instrumentos } from 'src/app/models/instrumento';
import { CkService } from './ck.service';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-configurar-evaluacion',
  templateUrl: './configurar-evaluacion.component.html',
  styleUrls: ['./configurar-evaluacion.component.css']
})
export class ConfigurarEvaluacionComponent implements OnInit {

  instrument: Instrumentos;
 // configurar: FormGroup;

  constructor(private ckService: CkService  /*private fb: FormBuilder*/) { }

  ngOnInit() {
    this.getlistarInstrumento();
 //   this.createform();
  }
  /*createform(): void {
    this.configurar = this.fb.group({
      cantidad: new FormControl(''),
      porcentaje: new FormControl(''),
      descripcion: new FormControl(''),

    });
  }*/

  getlistarInstrumento() {
    this.ckService.getinstrumento('1').subscribe(restr => {
      this.instrument = restr;
    });
  }

  actualizarInstrumento(objec) {
    this.instrument = objec;
    console.log(this.instrument);

    this.ckService.actualizarInstrumento('1', this.instrument).subscribe(res => {
      console.log(res);
    });
  }

}
