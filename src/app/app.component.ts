import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = "Superuser";
  }

  // the form data that comes in is actually a JS object but is of type ngForm by default bc of angular.
  onSubmit(f: NgForm) {
    console.log(f);
  }
}
