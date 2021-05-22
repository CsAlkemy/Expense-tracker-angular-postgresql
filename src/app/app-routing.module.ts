import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddExpenseComponent } from './expenses/add-expense/add-expense.component';
const routes: Routes = [
  { path: 'expenses', component: ExpensesComponent },
  { path: 'add-expenses', component: AddExpenseComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ExpensesComponent,
  DashboardComponent,
  AddExpenseComponent,
];
