import { Component } from "@angular/core";
import { NativeScriptFormsModule  } from "nativescript-angular/forms";
import * as LabelModule from "tns-core-modules/ui/label";
import { EventData } from "data/observable";
import { Label } from "ui/label";
var http = require("http");

@Component({
    selector: "my-app",
    template: `
        <StackLayout orientation="vertical">
            <TextField id="username" [(ngModel)]="username"></TextField>
            <Button text="Llamar a la api de github" (tap)="submit()"></Button>
        </StackLayout>`
})
export class AppComponent {

    username :string = "";
    name: string;
    location: string;
    submit(): void {

        http.getJSON("https://api.github.com/users/" + this.username).then(function (data) {
            alert(data.name + ' ' + data.location)
        }, function (error) {
            alert("ocurrio un error al consultar la api");
        });
    }
}