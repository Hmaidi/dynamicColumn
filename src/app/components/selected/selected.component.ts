import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-selected',
  standalone: true,
  imports: [FormsModule, DropdownModule, ButtonModule, InputGroupAddonModule, InputGroupModule, InputTextModule],
  templateUrl: './selected.component.html',
  styleUrl: './selected.component.scss'
})
export class SelectedComponent  implements OnInit {

  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  save() {

  }
}
