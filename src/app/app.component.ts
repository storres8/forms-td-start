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
  genders = ["male", "female"];

  suggestUserName() {
    const suggestedName = "Superuser";
    // // using the setValue method we can override any values that were already on the form when the button is
    // // pressed. If we want to path a form we can use the patchValue method on the form as shown below.
    // this.signupForm.setValue({
    //   userData: {
    //     username: "suggestedName",
    //     email: ""
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male"
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: "suggestedName"
      }
    });
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
