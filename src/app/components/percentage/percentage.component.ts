import { Component } from '@angular/core';
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputNumberModule} from "primeng/inputnumber";

@Component({
  selector: 'app-percentage',
  standalone: true,
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ButtonModule, InputNumberModule],
  templateUrl: './percentage.component.html',
  styleUrl: './percentage.component.scss'
})
export class PercentageComponent {

  save() {

  }
}
