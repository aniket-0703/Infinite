import { Component } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  events = [
    { id:1, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
    { id:2, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
    { id:3, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
    { id:4, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
    { id:5, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
    { id:6, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
    { id:7, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
    { id:8, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
    { id:9, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
    { id:10, Tkt_No:23456, name:'A.Ayaan', tokens:2,Meal:'Non-Veg', SpouseMeal:"Non-veg",MemberId:'W11346578', Pinlevel:'Manager', SpouseName:'Kavita.M',TeamName:'Ininite'},
  ];

  meals=[
    { pinLevel:'World Team', veg:100, nonVeg:200, shake:130, total:430},
    { pinLevel:'World Team', veg:100, nonVeg:200, shake:130, total:430},
    { pinLevel:'World Team', veg:100, nonVeg:200, shake:130, total:430},
    { pinLevel:'World Team', veg:100, nonVeg:200, shake:130, total:430},
    { pinLevel:'World Team', veg:100, nonVeg:200, shake:130, total:430},
    { pinLevel:'World Team', veg:100, nonVeg:200, shake:130, total:430},
  ]

  selectedTab: string = 'master';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
