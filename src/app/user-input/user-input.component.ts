import { Component, Output, EventEmitter} from '@angular/core';
import { ReactiveFormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';

export interface InvestmentInput { 
  initialInvestment: number;
   annualInvestment: number; 
   expectedReturn: number;
    duration: number; } 

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate= new EventEmitter<InvestmentInput>();

investmentForm = new FormGroup({
  initialInvestment: new FormControl(0, Validators.required),
  annualInvestment: new FormControl(0, Validators.required),
  expectedReturn: new FormControl(0, Validators.required),
  duration: new FormControl(0, Validators.required),
});


onSubmit() { 
  if (this.investmentForm.valid) { 
      const formValue = this.investmentForm.value; 
      const investmentData: InvestmentInput = { 
        initialInvestment: Number(formValue.initialInvestment), 
        annualInvestment: Number(formValue.annualInvestment), 
        expectedReturn: Number(formValue.expectedReturn), 
        duration: Number(formValue.duration) }; 
      this.calculate.emit(investmentData); } 
  } 
}
