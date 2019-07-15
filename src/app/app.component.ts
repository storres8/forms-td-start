import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f", { static: false }) signupForm: NgForm;
  defaultQuestion = "pet";
  answer = "";

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  // // the form data that comes in is actually a JS object but is of type ngForm by default bc of angular.
  // onSubmit(f: NgForm) {
  //   console.log(f);
  // }

  // Since we are using a reference in the template for our form we can also access
  // our from with the @ViewChild.
  // This particular way of accessing the form is useful if you need to access your data before you submit
  // the form.
  onSubmit() {
    console.log(this.signupForm);
  }
}
