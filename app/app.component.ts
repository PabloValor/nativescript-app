import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Testin app"></ActionBar>
    <StackLayout orientation="vertical">
        <Image src="https://img.abiosgaming.com/competitors/geek-fam-team-logo.png" stretch="none" horizontalAlignment="center"></Image>
        <TextField hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
        <TextField hint="Password" secure="true"></TextField>

        <Button text="Entrar"></Button>
        <Button text="Registrarse"></Button>

    </StackLayout>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
}
