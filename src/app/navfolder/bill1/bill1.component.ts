import { Component } from '@angular/core';
import { BurgerComponent } from '../../folder/burger/burger.component';

@Component({
  selector: 'app-bill1',
  standalone: true,
  imports: [BurgerComponent],
  templateUrl: './bill1.component.html',
  styleUrl: './bill1.component.css'
})
export class Bill1Component {
  bill: string = '';
  showTable: boolean = false;
  headings: string[] = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6', 'Heading 7', 'Heading 8', 'Heading 9'];
  tableData: any[][] = [];

  generateTable() {
    this.showTable = true;
    this.tableData = [];
    for (let i = 0; i < 6; i++) {
      let row = [];
      for (let j = 0; j < 9; j++) {
        row.push(`Row ${i + 1}, Column ${j + 1}`);
      }
      this.tableData.push(row);
    }
  }

  updateHeading(event: any, index: number) {
    const target = event?.target;
    if (target instanceof HTMLElement) {
      this.headings[index] = target.innerText;
    }
  }
}