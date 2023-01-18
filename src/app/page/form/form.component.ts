import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]
      ],
      email:[
        '',
        [
          Validators.email,
          Validators.required
        ]
      ],
      pass:[
        '',
        [Validators.required,
        Validators.minLength(4)]
      ],
      pass2:[
        '',
        [
          Validators.required
        ]
      ]
      
    })
  }

}
