angular.module('starter.controllers', [])


.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $rootScope) {

    
    $rootScope.messageNotification = { checked: false };
    $rootScope.vibrateNotification = {checked: false };
    
    $scope.loginData = {};

  // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

      // Triggered in the login modal to close it
      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function() {
        $scope.modal.show();
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };


})

.controller('PersonalCtrl', function ($scope, LocalStorageService, $rootScope, $cordovaVibration, $cordovaLocalNotification) {

    //sync with localstorage

    if (LocalStorageService.getStorageList('personalList')) {
        $scope.tasks = JSON.parse(LocalStorageService.getStorageList('personalList'));
    } 
    else {
        $scope.tasks = [];

    }
    
    //add a new item
    $scope.addTask = function () {
        if ($scope.newPerson != null) {
            $scope.tasks.push({person:$scope.newPerson, isChecked: false});
            LocalStorageService.setStorageList('personalList', JSON.stringify($scope.tasks));
            $scope.newPerson = '';
        } else {
            alert('Please enter a valid todo task!');
        }
    }
    
    //remove an item
    $scope.removeTask = function (person) {
        //delete $scope.tasks[index];
        var i = $scope.tasks.indexOf(person);
        $scope.tasks.splice(i, 1);
        LocalStorageService.setStorageList('personalList', JSON.stringify($scope.tasks));
    }


    $scope.foo = function (index) {
        if ($rootScope.vibrateNotification.checked) {
            if ($scope.tasks[index].isChecked == true) {
                $cordovaVibration.vibrate(100);
            }
        }

           /*if ($scope.$rootScope.messageNotification.checked) {
                

                    $cordovaLocalNotification.schedule({

                        alert("Notification");

                    });
                }
            }*/

    };

});

/*.controller('WorkCtrl', function ($scope, $localStorage) {
    $scope.todowork = {
        task: ''
    };

    if ($localStorage.worktasks) {
        $scope.tasks = $localStorage.worktasks;
    } else {
        $scope.tasks = ['Print Schedule', 'Meeting with Lisa', 'Call John'];
    }

    $scope.addTask = function () {
        if ($scope.todowork.task) {

            $scope.tasks.push($scope.todowork.task);

            $localStorage.worktasks = $scope.tasks;

            $scope.todowork.task = '';
        } else {
            alert('Please enter a valid todo task!');
        }
    }

    $scope.removeTask = function (index) {
        delete $scope.tasks[index];

        $localStorage.worktasks = $scope.tasks;

    }
})*/

/*.controller('OtherCtrl', function ($scope, $localStorage) {
    $scope.todoother = {
        task: ''
    };

    if ($localStorage.othertasks) {
        $scope.tasks = $localStorage.othertasks;
    } else {
        $scope.tasks = ['Call Timmy', 'Clean Room', 'Email Johnny'];
    }

    $scope.addTask = function () {
        if ($scope.todoother.task) {

            $scope.tasks.push($scope.todoother.task);

            $localStorage.othertasks = $scope.tasks;

            $scope.todoother.task = '';
        } else {
            alert('Please enter a valid todo task!');
        }
    }

    $scope.removeTask = function (index) {
        delete $scope.tasks[index];

        $localStorage.othertasks = $scope.tasks;

    }
});*/

//.controller('PlaylistCtrl', function($scope, $stateParams) {
//});