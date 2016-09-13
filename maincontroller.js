var app = fnEasy.fnStartIgnition.logicFn(angular) , // --> Start Ignition --> angular.module('MainAppControllers', [ 'ngSanitize' ])
    weburl,
    dynamicurl,
    blogurl;

app
   .controller('testimonials', function($scope, $http, $window){
      
        // Testimonial Section
        fnBridge
                ._dynamicTestimonial
                .logicFn($scope, $http, dynamicurl)
    
})
  .controller('footerSection', function($scope, $http, $window){
        
        // Footer Section
        fnBridge
                ._dynamicFooter
                .logicFn($scope, $http, dynamicurl)
    
})
  .controller('sidebarSection',function($scope, $http){
    
        // Quicklink Sidebar Section
        fnBridge
                ._dynamicQuicklinks
                .logicFn($scope, $http, dynamicurl)
    
})
  .controller('navbarController', function($scope, $http){
    
        // Contact Us function for Skype Call and Mobile Telephone Call
        fnBridge
                .fnContactNumber
                .logicFn();

        // Call Dynamic Navbar Function
        fnBridge
                ._dynamicNavbar
                .logicFn($scope, $http, dynamicurl)
    
})
  .controller('sideTabQuoteController', function($scope, $http, $window){ 
   
        // Call Side Tabe Quote Function
        fnBridge
                ._dynamicSideTabQuotes
                .logicFn($scope, $http, dynamicurl)
})
  .controller('sliderController', function($scope, $http){

        // Slider Section
        fnBridge
                ._dynamicSlider($scope, $http, dynamicurl);
    
})
  .controller('sidebarController', function($scope, $http){

        // Sidebar Section
        fnBridge
                ._sidebarFunctions($scope, $http, dynamicurl);
    
})
  .controller('tabsectionsController', function($scope, $http){
    
        // Tab Section
        fnBridge
                ._tabsectionFunctions($scope, $http, dynamicurl);
    
})
// ------------------------------------------- CONTENT PAGES --------------------------------------------------------

  .controller('homeController', function($scope, $http, $window){

        var category = "Content",                   // Define Content or Dynamic or Blog. Can be in normal case, upper case or lower case
            mainContent = "home",                   // Normal Case or Upper Case or Lower Case
            subContent = "";
    
        fnBridge
                .routes(category)
                .findPage(mainContent, subContent, $http, $scope);
    
})
  .controller('ctpgreenslipController', function($scope, $http, $window){
    
        var category = "Content",                   // Define Content or Dynamic or Blog
            mainContent = "CTP Greenslips",         // Normal Case or Upper Case or Lower Case
            subContent = "";                      
        
        fnBridge
                .routes(category)
                .findPage(mainContent, subContent, $http, $scope)
        
})
  .controller('privacyPolicyController', function($scope, $http, $window){

        var category = "Content",                   // Define Content or Dynamic or Blog
            mainContent = "Privacy Policy",         // Normal Case or Upper Case or Lower Case
            subContent = "";                        
    
        fnBridge
                .routes(category)
                .findPage(mainContent, subContent, $http, $scope)
    
})
  .controller('termsOfUseController', function($scope, $http, $window){

        var category = "Content",                   // Define Content or Dynamic or Blog
            mainContent = "Terms of Use",           // Normal Case or Upper Case or Lower Case
            subContent = "";
    
        fnBridge
                .routes(category)
                .findPage(mainContent, subContent, $http, $scope)
})

// ------------------------------------------- Specific Pages -------------------------------------------------------

  /*.controller('ctpgreenslipController', function($scope, $http, $window){

    var category = "Content",
        mainContent = "CTP Greenslips",
        subContent = "What is a Greenslip";
    
    fnBridge
            .routes(category)
            .findPage(mainContent, subContent, $http, $scope)

})*/


// ------------------------------------------- Blog Pages -----------------------------------------------------------

  /*.controller("blogPages", function(){

        var category = "Blog",
            blogContent = "Making Registration Renewals easier for many drivers";
        
        // Artciles Content
        fnBridge
                .routes(category)
                .findPage(blogContent, $http, $scope)
      
})*/
    // Testing Phase for Singularity Content Controller

/*    .controller('ContentController', function($scope, $http, $window){

        // Create an If Condition that will detect specific URL page and only call the function triggering the Content Controller.
        // Output $scope will bind to that specific page content

})*/


// ------------------------------------------- APP ANGULARJS CONFIGURATION ------------------------------------------


/*app.config(['$compileProvider', function($compileProvider){
    
    $compileProvider.aHre
    
}])*/