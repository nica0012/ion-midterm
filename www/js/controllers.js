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
            
            
            var test = $scope.tasks[index].isChecked
            
            if (test) {
              try{ 
                  $cordovaVibration.vibrate(100);
              }catch(ex){
               alert("fake vibrate");   
              }
                  
                  
            }
        }

           /*if ($scope.$rootScope.messageNotification.checked) {
                

                    $cordovaLocalNotification.schedule({

                        alert("Notification");

                    });
                }
            }*/

    };

})

.controller('WorkCtrl', function ($scope, LocalStorageService, $rootScope, $cordovaVibration, $cordovaLocalNotification) {

    //sync with localstorage

    if (LocalStorageService.getStorageList('workList')) {
        $scope.tasks = JSON.parse(LocalStorageService.getStorageList('workList'));
    } 
    else {
        $scope.tasks = [];

    }
    
    //add a new item
    $scope.addTask = function () {
        if ($scope.newWork != null) {
            $scope.tasks.push({work:$scope.newWork, isChecked: false});
            LocalStorageService.setStorageList('workList', JSON.stringify($scope.tasks));
            $scope.newWork = '';
        } else {
            alert('Please enter a valid todo task!');
        }
    }
    
    //remove an item
    $scope.removeTask = function (work) {
        //delete $scope.tasks[index];
        var i = $scope.tasks.indexOf(work);
        $scope.tasks.splice(i, 1);
        LocalStorageService.setStorageList('workList', JSON.stringify($scope.tasks));
    }


    $scope.foo = function (index) {
        if ($rootScope.vibrateNotification.checked) {
            
            
            var test = $scope.tasks[index].isChecked
            
            if (test) {
              try{ 
                  $cordovaVibration.vibrate(100);
              }catch(ex){
               alert("fake vibrate");   
              }
                  
                  
            }
        }

           /*if ($scope.$rootScope.messageNotification.checked) {
                

                    $cordovaLocalNotification.schedule({

                        alert("Notification");

                    });
                }
            }*/

    };

})


.controller('OtherCtrl', function ($scope, LocalStorageService, $rootScope, $cordovaVibration, $cordovaLocalNotification) {

    //sync with localstorage

    if (LocalStorageService.getStorageList('otherList')) {
        $scope.tasks = JSON.parse(LocalStorageService.getStorageList('otherList'));
    } 
    else {
        $scope.tasks = [];

    }
    
    //add a new item
    $scope.addTask = function () {
        if ($scope.newOther != null) {
            $scope.tasks.push({other:$scope.newOther, isChecked: false});
            LocalStorageService.setStorageList('otherList', JSON.stringify($scope.tasks));
            $scope.newOther = '';
        } else {
            alert('Please enter a valid todo task!');
        }
    }
    
    //remove an item
    $scope.removeTask = function (other) {
        //delete $scope.tasks[index];
        var i = $scope.tasks.indexOf(other);
        $scope.tasks.splice(i, 1);
        LocalStorageService.setStorageList('otherList', JSON.stringify($scope.tasks));
    }


  $scope.foo = function (index) {
        if ($rootScope.vibrateNotification.checked) {
            
            
            var test = $scope.tasks[index].isChecked
            
            if (test) {
              try{ 
                  $cordovaVibration.vibrate(100);
              }catch(ex){
               alert("fake vibrate");   
              }
                  
                  
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

