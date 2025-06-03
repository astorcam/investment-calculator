import { Component, ViewChild } from '@angular/core';

import {  InvestmentInput } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {

@ViewChild(InvestmentResultsComponent) resultsComponent!: InvestmentResultsComponent;
  
  // ✅ Método que conecta ambos componentes
  onCalculateInvestment(investmentData: InvestmentInput) {
    this.resultsComponent.calculateInvestmentResults(investmentData);
}
}
