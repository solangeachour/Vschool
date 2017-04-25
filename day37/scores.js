
var app = angular.module("App", []);
app.service("Redservice", function () {
    this.score = 100;
    this.increment = function () {
        this.score++;
    };

    this.decrement = function () {
        this.score--;
    };
    this.reset = function () {
        this.score = 100;
    };
});
app.service("BlueService", function () {
            this.score = 100;
            this.decrement = function () {
                this.score--;
            };

            this.increment = function () {
                this.score++;
            };
            this.reset = function (score) {

                this.score = 100;
            }
        });

        app.controller("mainCtrl", function ($scope, Redservice, BlueService) {
            $scope.redscore = BlueService.score;
            $scope.bluescore = Redservice.score;
            var check = function () {
                if (Redservice.score <= 0) {
                    Redservice.reset()
                }
                if (BlueService.score <= 0) {
                    BlueService.reset()
                }
            }

            $scope.red = function () {
                Redservice.increment();
                BlueService.decrement();
                $scope.redscore = Redservice.score;
                $scope.bluescore = BlueService.score;
                check();
            }
            $scope.blue = function () {
                BlueService.increment();
                Redservice.decrement();
                $scope.redscore = Redservice.score;
                $scope.bluescore = BlueService.score;
                check();
            }
        });
