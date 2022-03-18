import { FormBuilder, FormGroup } from "@angular/forms";

export class LoginPageForm {
    //Create FormBuilder to create our form
    private formBuilder: FormBuilder;
    constructor (formBuilder:FormBuilder){
        this.formBuilder = formBuilder;
    }
    // Create a function to receive  properties from the informed object and how each property will be validated
    createForm () : FormGroup{
        return this.formBuilder.group({

        });
    }
}