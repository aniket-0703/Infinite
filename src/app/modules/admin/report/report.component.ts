import { Component } from '@angular/core';

interface Event {
  id: number;
  Tkt_No: number;
  name: string;
  tokens: number;
  Meal: string;
  SpouseMeal: string;
  MemberId: string;
  Pinlevel: string;
  SpouseName: string;
  TeamName: string;
}

interface Meal {
  pinLevel: string;
  veg: number;
  nonVeg: number;
  shake: number;
  total: number;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  events: Event[] = [
    { id: 1, Tkt_No: 23456, name: 'A.Ayaan', tokens: 2, Meal: 'Non-Veg', SpouseMeal: 'Non-veg', MemberId: 'W11346578', Pinlevel: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    { id: 2, Tkt_No: 23456, name: 'A.Ayaan', tokens: 2, Meal: 'Non-Veg', SpouseMeal: 'Non-veg', MemberId: 'W11346578', Pinlevel: 'Manager', SpouseName: 'Kavita.M', TeamName: 'Infinite' },
    // More data...
  ];

  meals: Meal[] = [
    { pinLevel: 'World Team', veg: 100, nonVeg: 200, shake: 130, total: 430 },
    { pinLevel: 'World Team', veg: 100, nonVeg: 200, shake: 130, total: 430 },
    // More data...
  ];

  selectedTab: 'master' | 'meal' = 'master';

  selectTab(tab: 'master' | 'meal'): void {
    this.selectedTab = tab;
  }

  exportCSV(): void {
    const data = this.selectedTab === 'master' ? this.events : this.meals;
    const csvContent = this.convertToCSV(data);
    this.downloadCSV(csvContent, `${this.selectedTab}-report.csv`);
  }

  private convertToCSV(data: any[]): string {
    if (data.length === 0) return '';

    const keys = Object.keys(data[0]);
    const header = keys.join(',');
    const rows = data.map(row => keys.map(key => this.escapeCSVValue(row[key])).join(',')).join('\n');

    return `${header}\n${rows}`;
  }

  private escapeCSVValue(value: any): string {
    if (typeof value === 'string') {
      return `"${value.replace(/"/g, '""')}"`; // Escape double quotes
    }
    return value;
  }

  private downloadCSV(csvContent: string, fileName: string): void {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
