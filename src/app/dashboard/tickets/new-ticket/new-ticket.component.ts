import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from "@angular/core";
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent {
  //   @ViewChild("form") private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  add = output<{ title: string; text: string }>();

  onSubmit(title: string, text: string) {
    this.add.emit({ title: title, text: text });
    this.form()?.nativeElement.reset();
  }
}
