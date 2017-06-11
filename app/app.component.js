"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http = require("http");
var AppComponent = (function () {
    function AppComponent() {
        this.username = "";
    }
    AppComponent.prototype.submit = function () {
        http.getJSON("https://api.github.com/users/" + this.username).then(function (data) {
            alert(data.name + ' ' + data.location);
        }, function (error) {
            alert("ocurrio un error al consultar la api");
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n        <StackLayout orientation=\"vertical\">\n            <TextField id=\"username\" [(ngModel)]=\"username\"></TextField>\n            <Button text=\"Llamar a la api de github\" (tap)=\"submit()\"></Button>\n        </StackLayout>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFLMUMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBVTNCLElBQWEsWUFBWTtJQVJ6QjtRQVVJLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFXMUIsQ0FBQztJQVJHLDZCQUFNLEdBQU47UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLCtCQUErQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQzdFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDMUMsQ0FBQyxFQUFFLFVBQVUsS0FBSztZQUNkLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxZQUFZO0lBUnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsNk9BSVM7S0FDdEIsQ0FBQztHQUNXLFlBQVksQ0FheEI7QUFiWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSAgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAqIGFzIExhYmVsTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xudmFyIGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJ1c2VybmFtZVwiIFsobmdNb2RlbCldPVwidXNlcm5hbWVcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIkxsYW1hciBhIGxhIGFwaSBkZSBnaXRodWJcIiAodGFwKT1cInN1Ym1pdCgpXCI+PC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+YFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgdXNlcm5hbWUgOnN0cmluZyA9IFwiXCI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gICAgc3VibWl0KCk6IHZvaWQge1xuXG4gICAgICAgIGh0dHAuZ2V0SlNPTihcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvXCIgKyB0aGlzLnVzZXJuYW1lKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBhbGVydChkYXRhLm5hbWUgKyAnICcgKyBkYXRhLmxvY2F0aW9uKVxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwib2N1cnJpbyB1biBlcnJvciBhbCBjb25zdWx0YXIgbGEgYXBpXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19