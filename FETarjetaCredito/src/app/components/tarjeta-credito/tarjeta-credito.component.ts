import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css'],
})
export class TarjetaCreditoComponent {
  listTarjetas: any[] = [
    {
      titular: 'Juan Perez',
      numeroTarjeta: '123456789',
      fechaExpiracion: '11/12',
      cvv: '123',
    },
    {
      titular: 'Miguel Gonzales',
      numeroTarjeta: '098765432',
      fechaExpiracion: '09/12',
      cvv: '321',
    },
  ];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: [''],
      numeroTarjeta: [''],
      fechaExpiracion: [''],
      cvv: [''],
    });
  }

  onSubmit(){
    console.log(this.form);
    
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    };
    this.listTarjetas.push(tarjeta);

    this.form.reset()
  }
}
