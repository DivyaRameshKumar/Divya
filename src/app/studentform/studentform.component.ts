import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent {
userForm: FormGroup;
  listData: any;
  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contactNo: ['', Validators.required],
    });
  }
  public addItem(): void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
 removeItem(e: any) {
    this.listData.forEach((value: any, index: any) => {
      if (value == e) this.listData.splice(index, 1);
    });
  }
  ngOnInit(): void {}
}

