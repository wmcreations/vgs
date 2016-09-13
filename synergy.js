// --------------------------------------------------------------
// Mutual Drive Synergy.js Framework v1.08:
// 
// Unique Javascript Framework functions made to work only for the company 
// of Mutualcare. Although, these functions are still limited for open source
// use. Some valueable functions are programmed to be useful.
// 
//
// Developed by Mutualcare (Mark Libre, Neo Punzalan).
// 
// Changelogs:
// - Added fnJoin function for easy to search data-binding
// - Added functions for Animations
// - Added data-binding functions for Content
// - 
// --------------------------------------------------------------

(function(window, document, synergy, MODULE){
    
    window = window || {};
    var a = [], b, contentPageIndex = [],      
        fnMod = function(m){
        return m = {
            
                //
                // These are your restricted global function 
                // related to URL paths
                //
            
                fnPaths: function(){
                    return a = {
                        prot: location.protocol,
                        url: location.href,
                        path: location.pathname,
                        host: location.hostname,
                        domain: document.domain,
                        subdomain: {
                            logicFn:function(x){
                                var _subA = fnMod().fnPaths(),
                                    _subB = new Object(_subA.url.split("/")),
                                    _trimPath = new Object(_subA.path.split("/"));
                                
                                $.each(_subB, function(i, val){
                                    //console.log(val + " " + i);
                                    if(i == 3){
                                        //console.log(val)
                                        if(val == _trimPath[1]){
                                            //console.log(val)
                                            fnReturnVar.fn = val;
                                        }
                                    }
                                })
                            }
                        },
                        access: "data",
                        content: "content.json",
                        blog: "blog.json",
                        _dynamicParts: "dynamic_sect.json",
                        gallery: "",
                        skype: "callto://+1300659608",
                        mobileCall: "tel:1300659608"
                    }
                }
             }
        },
                
        //
        // This is a React functionfn
        //
        
        fnReact = (function(reAct){
            return reAct = {
                fn: function(fnS){
                    $(window).on('load', fnMod)                
                }
            }
            
        })(),
        
        //
        // This is a listening function. Empty function for now, saving for future purpose.
        //
        
        fnListen = function(fnL){
           console.log('Function Listener')
        },
        
        //
        // This is a Returning Variable Function.
        // Very useful for any situation converting function into a variable
        //
        
        fnReturnVar = {
            fn: (function(val){
                return val;
            })(),
            
            fnD: (function(val){
                return val;
            })()
        }
    
        //
        // 
        //
        window._fnSPV = (function(_returnResult){
            return _returnResult = {
                fn: function(val){
                    this.val = this.val;
                    return val;
                }
            }
        })()
    
        //
        // This is HTML5 localStorage. This can be use in a situation for Offline purposes.
        // All important function are stored in this function if neccessary.
        // 
        //
    
        fnStorage = (function(StorageName){
        
            /*StorageName.content = function(){
            
                //window.localStorage[].setItem
                
            }*/
            
        })()
        
        

    // ------------------------------------------ ^^ Synergy Globals  -------------------------------------------------------------------

    // This function starts the AngularJS Framework function and any of your code solutions for secured functionality. 
    //
    //
    window.fnEasy = {
      fnStartIgnition: {
          app: "",
          logicFn: function(angular){
          "use strict"
          
                return angular.module('MainAppControllers', ['ngSanitize']);
                //console.log('Angular Framework Start Engine');
          
          },
          fnStopIgnition: function(_fn){
          "use strict"
                return console.log('This is a Stop Test Function!');
          }
      }  
    } 
    
    // ------------------------------------------ ^^ Synergy Easy Ignition Function ------------------------
    
    // This is just a Destroy Sample Function. This may change in the future of development
    window.fnDestroy = {
        _fnTitle: function(_fnTitle){
        "use strict"
            this._fnTitle = function(value){
               if(value == null || ""){
                return _fnTitle = 'Welcome to Valuegreenslips';
               } else {
                return _fnTitle = "Bye bye!";
               }
            }
        },
        _fnSubject: function(_fnSubject){
        "use strict"

        },
        _fnExtra: function(_fnExtra){
        "use strict"

        },
        _fnRFlags: function(flagDfn){
        
            var destroyFlags = fnBridge.routesFlag;
            
            destroyFlags.content = flagDfn;
            destroyFlags.blog = flagDfn;
            destroyFlags.subContent = flagDfn;
            
            return true;
            
        }
    }
    
    // ------------------------------------------ ^^ Synergy Destroy Burning Function ------------------------
    
    // #####################################################
    // Synergy Bridge Function (window.fnBridge) that allows 
    // you to get connected to specific functions
    // #####################################################
    //
    // -- RESERVED SPACE --
    //
    // To create your own customed modular function, 
    // indicate the proper syntax:
    //
    // Example:
    // 
    // Ensure you are inside the
    //
    // window.fnBridge = {
    //
    //      customfnName1: {
    //          updateVersion: "",
    //          date: "  ",
    //          changeRemarks: "  ",
    //          editor: "developer",
    //
    //          logic: function($scope, ){
    //              
    //          }
    //      },
    //      customfnName2: { },
    //      customfnName3: { },
    //      customfnName4: { }
    //
    // }
    //
    
    window.fnBridge = {
        
        routes: function(_urlDfn){
        "use strict"    
        
            //
            //   /*window
            //        .fnBridge
            //        ._routeDynamic = function(_thisPath){
            //            return _thisPath = _urlFetch.dynamic;
            //        }*/
            //
            //
            // 
            // Check the Synergy Globals, scroll at the top section
            var _this = fnMod().fnPaths(),
                _thisWin = $(window),
                winWidth = _thisWin.width(),
                _urlProt = _this.prot,
                _urlDomain = _this.domain,
                _urlSubdomainFn = _this.subdomain.logicFn(),
                _urlData = _this.access,
                _urlDynamicParts = _this._dynamicParts,
                _urlContent = _this.content,
                _urlBlog = _this.blog,
                _urlFetch = _urlFetch || {},
                _pathDummy = "",
                _category = {                
                    dynamic: "Dynamic",
                    content: "Content",
                    blog: "Blog"
                };
            
            // Define Extensions
            
            _urlSubdomainFn;
            var _urlSubdomain = fnReturnVar.fn;
            
            if((_urlDfn == _category.dynamic) || (_urlDfn == _category.dynamic.toLowerCase())){
                _urlFetch.dynamic = _urlProt+"//"+_urlDomain+"/"+_urlSubdomain+"/"+_urlData+"/"+_urlDynamicParts;
                //_urlFetch.dynamic.prototype.findPage = window.fnBridge.condRts._dContent._find();
                // _urlFetch.findPart = fnBridge.findPart;
                //_urlFetch.bindRoute = _urlFetch.dynamic;
                return _urlFetch.dynamic;  
            }
            
            if((_urlDfn == _category.content) || (_urlDfn == _category.content.toLowerCase())){
                _urlFetch.content = _urlProt+"//"+_urlDomain+"/"+_urlSubdomain+"/"+_urlData+"/"+_urlContent;
                _urlFetch.findPage = fnBridge.findContentPage;
                _urlFetch.bindRoute = _urlFetch.content;

                // Init
                fnBridge.routesFlag.content = true;
                return _urlFetch;
            }
            
            if((_urlDfn == _category.blog) || (_urlDfn == _category.blog.toLowerCase())){
                _urlFetch.blog = _urlProt+"//"+_urlDomain+"/"+_urlSubdomain+"/"+_urlData+"/"+_urlBlog;
                _urlFetch.findPage = fnBridge.findBlogPage;
                _urlFetch.bindRoute = _urlFetch.blog;
                
                // Init
                fnBridge.routesFlag.blog = true;
                
                return _urlFetch;
            }
            
            if((_urlDfn == "") || (_urlDfn == undefined) || (_urlDfn == null)){
                _urlFetch = "";
                
                throw ("Specify your route definition");
                return _urlFetch;
            }
            
            //window.fnBridge.routes.prototype.findPage = fnBridge.condRts._dContent._find(_urlDfn, _urlFetch);
            
        },
        routesFlag: {
            dynamic: false,
            content: false,
            blog: false,
            subContent: false
        },
        
        //
        // This is a function for finding a content page.
        // UpdateVersion: 1.06
        // Date: 19-06-2015
        // Remarks: Updated and improved the function for finding/searching more deeper pages that are subpages 
        // or subitems under the parent page or parent item. These are only for the content pages.
        // 
        findContentPage: function(_pageDfn, _subPageDfn, $http, $scope){
            
            var weburl = fnBridge.routes,
                webVal = webVal || {}, 
                _rFlags = fnBridge.routesFlag, images;
                webVal.content = "Content" || "content";
            
            if((_rFlags.content === true) && (_rFlags.dynamic === false) && (_rFlags.blog === false) && (_rFlags.subContent == false)){
                console.log("Passed! You are in the Content Database (JSON).");
                var path = weburl(webVal.content).bindRoute, _dFind = _dFind || {};
                
                //_dFind.findSubPage = fnBridge.findSubPage;
                _dFind.bindRoute = path;
                _dFind.bindData = new Array();
                
                // Get Data and Segregate
                $.get(path)
                 .done(function(dataPath){
                    
                    $.each(dataPath, function(index, val){
                        
                        // Find Content
                        // Home Page
                        if((index === 0)){
                            
                            var page = validateStringCase(val.pagetitle);
                            
                            if( ((_pageDfn === page.normalStr) || (_pageDfn === page.lowerStr)) && (_subPageDfn === null || _subPageDfn === "" || _subPageDfn === "none" || _subPageDfn === "no")){
                            
                                fnDestroy
                                         ._fnRFlags(false)
                                fnJoin
                                      .content
                                      .home(val, images, $http, $scope);
                            }
                        }
                        
                        // CTP Greenslip Page
                        if(index === 1){
                            
                            var page = validateStringCase(val.pagetitle);
                            
                            if(( (_pageDfn === page.normalStr) || (_pageDfn === page.lowerStr)) && (_subPageDfn === null || _subPageDfn === "" || _subPageDfn === "none" || _subPageDfn === "no")){
                            
                                fnDestroy
                                         ._fnRFlags(false)
                                fnJoin
                                      .content
                                      .ctpGreenslips(val, images, $http, $scope);
                            
                            } else if((_pageDfn == page.normalStr) && (_subPageDfn !== val.pagetitle)){
                            
                                findSubPage(val, _subPageDfn);
                                
                            } 
                        }
                        
                        // Greenslip FAQs Page
                        if(index === 2){
                            
                            var page = validateStringCase(val.pagetitle);
                            
                            if(((_pageDfn === page.normalStr) || (_pageDfn === page.lowerStr)) && (_subPageDfn === null || _subPageDfn === "" || _subPageDfn === "none" || _subPageDfn === "no")){
                            
                                fnDestroy
                                         ._fnRFlags(false)
                                fnJoin
                                      .content
                                      .greenslipFaqs(val, images, $http, $scope);
                                
                                //console.log(val.page)
                            } else if ((_pageDfn === page.normalStr) && (_subPageDfn !== page.normalStr)){
                            
                                findSubPage(val, _subPageDfn);
                                
                            }
                        }
                        
                        // Car Insurance Page
                        if(index === 3){
                            
                            var page = validateStringCase(val.pagetitle);
                            
                            if(((_pageDfn === page.normalStr) || (_pageDfn === page.lowerStr)) && (_subPageDfn === null || _subPageDfn === "" || _subPageDfn === "none" || _subPageDfn === "no")){
                            
                                fnDestroy
                                         ._fnRFlags(false);
                                fnJoin
                                      .content
                                      .carInsurance(val, images, $http, $scope);
                                
                            }
                            
                        }
                        
                        // Articles Page
                        if((index === 4) && (_pageDfn === val.pagetitle)){
                            
                            _rFlags.content = false;
                            _rFlags.blog = false;
                            
                            fnJoin
                                  .content
                                  .articles(val, images, $http, $scope);
                        }
                        
                        // Contact Us Page
                        if((index === 5) && (_pageDfn === val.pagetitle)){
                            
                            _rFlags.content = false;
                            _rFlags.blog = false;
                            
                            fnJoin
                                  .content
                                  .contactUs(val, images, $http, $scope);
                        }
                        
                        // Privacy Policy Page
                        if((index === 6) && (_pageDfn === val.pagetitle)){
                            
                            _rFlags.content = false;
                            _rFlags.blog = false;
                            
                            fnJoin
                                  .content
                                  .privacyPolicy(val, images, $http, $scope)
                        }
                        
                        // Terms of Use Page
                        if((index === 7) && (_pageDfn === val.pagetitle)){
                            
                            _rFlags.content = false;
                            _rFlags.blog = false;
                            
                            fnJoin
                                  .content
                                  .termsOfUse(val, images, $http, $scope);
                        }
                        
                        if((index == 8) && (_pageDfn === val.pagetitle)){
                            
                            _rFlags.content = false;
                            _rFlags.blog = false;
                            
                            fnJoin
                                  .content
                                  .motorVehicleInsurance(val, images, $http, $scope);
                        }
                        
                        //
                        // Callback Functions
                        //
                        // Identify string value to lowerCase, upperCase or normalCase
                        function validateStringCase(strCase){
                            var newStr;
                            return newStr = {
                                lowerStr: strCase.toLowerCase(),
                                normalStr: strCase,
                                upperStr: strCase.toUpperCase()
                            }
                        }
                        
                        // Find SubPage Contents
                        function findSubPage(val, _subPageDfn){
                        
                            //console.log("Empty for now...")
                            _rFlags.content = true;
                            _rFlags.blog = false;
                            _rFlags.subContent = true;

                            if((_rFlags.content === true) && (_rFlags.subContent === true)){

                                $.each(val.subpages, function(index, val){

                                    // Destroys all flags and restart back to false
                                    fnDestroy._fnRFlags(false)

                                    // You are inside the subpage content
                                    if(index == 0){
                                        if(_subPageDfn == val.pagetitle){
                                            fnJoin
                                                  .content
                                                  ._sub_ctpGreenslips
                                                  .aboutUs(val, images, $http, $scope);
                                            return true;
                                        }
                                    } else if(index == 1){
                                        if(_subPageDfn == val.pagetitle){
                                            fnJoin
                                                  .content
                                                  ._sub_ctpGreenslips
                                                  .whatIsGreenslip(val, images, $http, $scope);
                                            return true;
                                        }
                                    }

                                    if(index == 2){
                                        if(_subPageDfn == val.pagetitle){
                                            fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .ctpGreenslipRenw(val, images, $http, $scope);
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    }

                                    if(index == 3){
                                        if(_subPageDfn == val.pagetitle){
                                            fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .aboutUs(val, images, $http, $scope);
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    }

                                    if(index == 4){
                                        if(_subPageDfn == val.pagetitle){
                                            fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .compareGreenslips(val, images, $http, $scope);
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    }

                                    if(index == 5){
                                        if(_subPageDfn == val.pagetitle){
                                            fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .ctpGreenslipCalculator(val, images, $http, $scope);
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    }

                                    if(index == 6){
                                        if(_subPageDfn == val.pagetitle){
                                            fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .motorbikeGreenslips(val, images, $http, $scope);
                                            return true;    
                                        } else {
                                            return false;
                                        }
                                    }

                                    if(index == 7){
                                        if(_subPageDfn == val.pagetitle){
                                            fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .busAndTruckGreenslips(val, images, $http, $scope);    
                                            return true;    
                                        } else {
                                            return false;
                                        }
                                    }

                                    if((index == 8) && (_subPageDfn == val.pagetitle)){

                                        fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .businessFleetGreenslips(val, images, $http, $scope);

                                        return true;

                                    }

                                    if((index == 9) && (_subPageDfn == val.pagetitle)){

                                        fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .rtaDemeritPoints(val, images, $http, $scope);

                                        return true;

                                    }

                                    if((index == 10) && (_subPageDfn == val.pagetitle)){

                                        fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .greenslipsByState(val, images, $http, $scope)

                                        return true;
                                    }

                                    if((index == 11) && (_subPageDfn == val.pagetitle)){

                                        fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .additionalGreenslipInformation(val, images, $http, $scope)

                                        return true;
                                    }

                                    if((index == 12) && (_subPageDfn == val.pagetitle)){

                                        fnJoin
                                              .content
                                              ._sub_ctpGreenslips
                                              .ctpGreenslipCalculator(val, images, $http, $scope)

                                        return true;
                                    }
                                })
                            }
                        }
                    })
                 })
                 .fail(fnBridge.error.dataRetrieve)
                return _dFind;
            } 
            
        },
        contentRes: [],
        findBlogPage: function(_blogPageDfn, $http, $scope){
        
            var blogurl = fnBridge.routes,
                blogPath = {},
                _rFlags = fnBridge.routesFlag;
                blogPath.blog = "Blog" || "blog";
            
            if((_rFlags.content === false) && (_rFlags.blog === true) && (_rFlags.subContent === false)){
            
                console.log("Passed! You gain access to Blog Database.");
                var path = blogurl(blogPath.blog).bindRoute, _dFind = _dFind || {};
                
                $.get(path)
                     .done(function(dataBlog){
                
                        // View Blog Data
                        //console.log(dataBlog)
                        
                        $.each(dataBlog, function(index, val){
                        
                            if((index == val.id) && (_blogPageDfn == val.pagetitle)){
                                
                                console.log("Page: "+ val.pagetitle)
                                console.log(val)
                            }
                            
                        })
                    
                     })
                     .fail(fnBridge.error.dataRetrieve)
            }
        },
        findPart: function(_thisPart){
        
            var dynamicurl = fnBridge.routes,
                dynamicPath = {},
                _rFlags = fnBridge.routesFlag;
                dynamicPath.dynamic = "Dynamic" || "dynamic";
            
            
            if((_rFlags.dynamic === true) && ( _rFlags.content === false) && (_rFlags.blog === false)){
            
                
                
            }
            
        },
        fnContactNumber: {
        
            // --------------------
            // Monitoring Changes
            // --------------------
            
            // updateVersion: "1.02",
            // date: "04-06-2015",
            // time: "14:00",
            // changeRemarks: "Simplified call condition functions. Created single function to evaluate desktop or mobile view",
            // editor: "Mark",
            // description: "Contact Number function triggering for Skype Call and Mobile Telephone Call",
        
            // -------------------------
            // Logic Functions
            // -------------------------
            
            logicFn: function(){
            "use strict"
                
                $(window)
                .on('load', function(){

                    var WinX = $(window).width(),
                        _thisCall = fnMod().fnPaths(),
                        urlCall = _thisCall.skype,
                        urlCallMob = _thisCall.mobileCall;
                    
                    //console.log(WinX);
                    fnBridge
                            .fnContactNumber
                            .callCond(WinX, urlCall, urlCallMob);

                })
                .on('resize', function(){

                    // Mobile Version
                    var WinX = $(window).width(),
                        _thisResizeCall = fnMod().fnPaths(),
                        _resizeUrlCall = _thisResizeCall.skype,
                        _resizeUrlCallMob = _thisResizeCall.mobileCall;

                    //console.log('Resize window: '+ WinX);
                    fnBridge
                            .fnContactNumber
                            .callCond(WinX, _resizeUrlCall, _resizeUrlCallMob);
                    
                })
                
            },
            
            callCond: function(_winRes, _callSkype, _callMobile){
            "use strict"
                
                // Desktop View
                if(_winRes > 900){
                        return $('.callContact')
                                                .attr("href", _callSkype);
                }

                // Apple Phone or Common Mobile View
                if(_winRes < 770){
                    return $('.callContact')
                                            .attr("href", _callMobile);
                } else if (_winRes < 645){
                    return $('.callContact')
                                            .attr("href", _callMobile);
                } else {
                    return $('.callContact')
                                            .attr("href", _callMobile);
                }

                // Samsung Galaxy Y Emulator - Smaller Mobile View
                if(_winRes < 245){
                    return $('urlContact')
                                          .attr("href", _callMobile);
                }
                
                return false;
                
            }
        },
        
        _dynamicQuicklinks: {
        
            // -----------------------------
            // Monitoring for changes
            // -----------------------------
            
            // updateVersion: "1.02",
            // date: "08-06-2015",
            // changeRemarks: "",
            // time: "9:00",
            // editor: "Mark",
            
            // ------------------------------
            // Logic Function
            // ------------------------------
            
            logicFn: function($scope, $http, dynamicurl){
            "use strict"
                
                dynamicurl = fnBridge.routes("Dynamic");
                
                $http.get(dynamicurl)
                     .success(function(data){
                    
                        //console.log(data);
                        angular.forEach(data, function(value, key){
                            
                            if(key == 0){
                                // Global Data for Quick Links
                                $scope.QuickLinks                   = value;
                                $scope.QuickLinksID                 = value.id;
                                $scope.QuickLinksTitle              = value.title;
                                $scope.QuickLinksLinks              = value.links;
                            }
                            
                        })
                        
                     })
                     .error(fnBridge.error.dataRetrieve)
            }
            
        },
        
        _dynamicFooter: {
            
            // ----------------------------
            // Monitoring for any changes
            // ----------------------------
            
            // updateVersion: "0.04",
            // date: "08-06-2015",
            // changeRemarks: "Improved Route Definition",
            // editor: "Neo & Mark",
            
            // ----------------------------
            // Logic Function
            // ----------------------------
            
            logicFn: function ($scope, $http, dynamicurl){
            "use strict"
            
                // Define Route definition
                dynamicurl = fnBridge.routes("Dynamic");
            
                $http.get(dynamicurl)
                     .success(function(data){
                      // ------------------
                      // This is your Map
                      // ------------------
                      //console.log(data)   
                  
                          angular.forEach(data, function(value, key){
                          //console.log(data)
                                if(key==3) {
                                    //console.log(value.content);
                                    $scope.dFooterSection = value.content;
                                }
                          })
                      }) // -- End $http.get
                      .error(fnBridge.error.dataRetrieve)
                
                //
                // Disclaimer Button function that will show Disclaimer Section
                //
                
                var switchMsg = 0;
                
                $("#message").on('click', function(){
                    
                    if(switchMsg <= 0){
                        
                        //$("#disclaimer").css({
                        //    "display":"block",
                        //    "z-index":"10",
                        //    "bottom":"0px"
                        //})
                        
                        //$("#disclaimer").show(1000);
                        $("#disclaimer").removeClass("hide-disclaimer");
                        $("#disclaimer").addClass("show-disclaimer");
                        
                        return switchMsg = switchMsg + 1;
                        
                    } else if (switchMsg > 0){
                        
                        //$("#disclaimer").css({
                        //    "display":"none",
                        //    "z-index":"-1",
                        //    "bottom":"0px"
                        //})
                        
                        //$("#disclaimer").hide(1000);
                        
                        $("#disclaimer").addClass("hide-disclaimer");
                        $("#disclaimer").removeClass("show-disclaimer");
                        
                        return switchMsg = switchMsg - 1;
                    }
                })
                
            } // -- End logicFn
        },
        
        _dynamicNavbar: {
        
            // ----------------------
            // Monitor
            // ----------------------
            
            // updateVersion: "1.02",
            // date: "08-06-2015",
            // time: ":",
            // changeRemarks: "",
            
            // ----------------------
            // Logic Function
            // ----------------------
            logicFn: function($scope, $http, dynamicurl){
            "use strict"
            
                // Define Route definition
                dynamicurl = fnBridge.routes("Dynamic");
            
                $http.get(dynamicurl).success(function(dataNav){
                    //console.log(dataNav);
                    angular.forEach(dataNav, function(value, key){
                        if(key == 1){
                            //Global Navigation Data
                            $scope.navbar = value;

                            // Specific Navigation Data
                            $scope.homeNav = value.homeNav;
                            $scope.ctpGreenslipsNav = value.ctpGreenslipsNav;
                            $scope.greenslipsFaqsNav = value.greenslipsFaqsNav;
                            $scope.carInsuranceNav = value.carInsuranceNav;
                            $scope.articlesNav = value.articlesNav;
                            $scope.contactUsNav = value.contactUsNav;
                        }
                    });
                })
                
                return true;
            }
        },
        
        _dynamicTestimonial: {
        
            // -----------------------------
            // Monitor
            // -----------------------------
            
            // updateVersion: "1.00",
            // date: "01-06-2015",
            // time: "",
            // changeRemarks: "",
            // editor: "Mark",
            
            // -----------------------------
            // Logic Function
            // -----------------------------
            
            logicFn: function($scope, $http, dynamicurl){
            "use strict"
            
                // Define Route destination
                dynamicurl = fnBridge.routes("Dynamic");
            
                $http.get(dynamicurl).success(function(dataTesti){
                       //console.log(dataTesti)
                       angular.forEach(dataTesti, function(value, key){
                           if(key == 2){
                               angular.forEach(value.content, function(value, key){
                                
                                   //console.log(value)
                                   if(key == 0){  
                                        // Global Name
                                        $scope.testi1 = value; 
                                    } else if(key == 1){ 
                                        // Global Name
                                        $scope.testi2 = value; 
                                    } else if(key == 2){ 
                                        // Global Name
                                        $scope.testi3 = value; 
                                    } else if (key == 3){
                                        // Global Name
                                        $scope.testi4 = value;
                                    } else if (key == 4){
                                        // Global Name
                                        $scope.testi5 = value;
                                    } else if (key == 5){
                                        // Global Name
                                        $scope.testi6 = value;
                                    } else if (key == 6){
                                        // Global Name
                                        $scope.testi7 = value;
                                    } else if (key == 7){
                                        // Global Name
                                        $scope.testi8 = value;   
                                    }
                               })
                           }
                       })
                     }).error(fnBridge.error.dataRetrieve)
                return true;
            }
        },
        
        _dynamicSideTabQuotes: {
        
            // -----------------------------
            // Monitor
            // -----------------------------
            
            // updateVersion: "1.00",
            // date: "03-06-2015",
            // time: "7:45",
            // changeRemarks: "",
            // editor: "Mark",
            // description: "This is dynamic part: Greenslip Quotes",
            
            // -----------------------------
            // Logic Function
            // -----------------------------
            
            logicFn: function($scope, $http, dynamicurl){
            "use strict"
                
                // Define Route destination
                dynamicurl = fnBridge.routes("Dynamic")
                
                $http.get(dynamicurl)
                     .success(function(dataSideTabs){
                    
                        //console.log(dataSideTabs);
                        angular.forEach(dataSideTabs, function(value, key){
                            if(key == 4){
                                $scope.sideTabs = value;
                            }
                        })
                    
                     })
                     .error(fnBridge.error.dataRetrieve);
                
                return true;
                
            }
        
        },
        
        _dynamicSlider: function($scope, $http, dynamicurl){
        
            // -------------------------------------------- 
            // Monitor
            // --------------------------------------------
            // updateVersion: "1.00",
            // date: "16-07-2015",
            // time: "8:45",
            // changeRemarks: "Implement Left and Right Arrow Sliding function",
            // editor: "Mark",
            // description: "Implementing slider section with interaction function"
            //
            
            // Interaction Slider Animation - Carousel Automatic Sliding
            var interact = jQuery.Event("load"),
                originSection = $(".total-slides-wrapper"),
                slides = $(".slide-sections"),
                allSlides = slides.length,
                fnAutoPlaySlides,
                fnClickAnimate,
                slideCount = 1,
                autoSlide = 1;
                
            
            // ---------------------------------------------------    
            // Functions for Sliders
            // ---------------------------------------------------
            //
            //
            
            function autoPlaySlides(setAction){
                /*if(setAction == "auto"){
                    
                }*/
            }
            
            //fnAutoPlaySlides = new autoPlaySlides("auto");
            //fnClickAnimate = new clickAnimateSlide();
            
            // Interaction Slider Animation - Clicking Indicator Function
            
            
            // ---------------------------------------------------
            // Event Listeners for Sliders
            // ---------------------------------------------------
            //
            //
            // Load - Automatic Play Slide
            
            $(window).on('load', function(){
            
                autoSlide++;
                
                /*do{
                
                    if((autoSlide >= 1) && (autoSlide <= allSlides)){
                        $(slides).addClass("slide");
                        $("#slide-"+autoSlide).removeClass("");
                    }
                    
                } while( (autoSlide != 0) && (autoSlide > allSlides)){
                
                };*/
                
            });
            
            // ---------------------------------------------------
            // Click - Interact Slide when indicator is clicked
            //
            $(this).on('click', function(){
                var selected = $(this).selector;
                
                console.log(selected)
            })
            
            $(".indicator-slides").on('click', function(){

                var _this = $(this),
                    allIndicators = $(".indicator-slides"),
                    indSelectThis = "indicator-selected",
                    indDeSelectThis = "indicator-deselected",
                    goToSlide = _this.attr("data-indicator-slide"),
                    selectSlide = $("#"+goToSlide),
                    slideOffset = selectSlide.offset(),
                    slideOffsetLeft = slideOffset.left,
                    slides = $('.slide-sections'),
                    originPos = $(".total-slides-wrapper").offset().left,
                    fnSlide;
                
                allIndicators.removeClass(indSelectThis);
                _this.addClass(indSelectThis);
                
                function startSlide(speed){
                    var getOffset = originPos - slideOffsetLeft;
                    slides
                          .animate({
                            left: "+="+getOffset
                          }, speed)
                    
                    return slideOffsetLeft;
                }

                fnSlide = new startSlide(500);
                fnSlide;

            })
            
            // -----------------------------------------------
            // Click - Interact Slide Left and Right Arrow
            //
            //
            $(".slider-arrows").on('click', function(){
            
                var _this = $(this),
                    goToArrowSlide = _this.attr("data-slide-arrow"),
                    originPos = $(".total-slides-wrapper").offset().left,
                    TotalSlides = slides.length,
                    fnSlideLeft, fnSlideRight;
                
                function startArrowSlide(speed){
                    
                    //var selectSlideLeft = $("#slide-"+slideCount--),
                    //    slideOffsetLeft = selectSlideLeft.offset().left;
                    
                    if(goToArrowSlide == "right"){
                        
                        slideCount++;
                        //console.log(slideCount)
                        if((slideCount <= TotalSlides) && (slideCount >= 1)){
                            
                            slideRun(slideCount);
                            return slideCount;
                            
                        } else if ( slideCount >= TotalSlides){
                            
                            var resetCount = slideCount - TotalSlides;
                            slideCount = 0;
                            
                            slideCount++;
                            slideRun(slideCount)                                                    
                            return slideCount;
                            
                        }
                        
                    } else if (goToArrowSlide == "left"){
                    
                        var slideCountNeg = 0,
                            slideCountRes;
                        
                        slideCount--;
                        //console.log(slideCount)
                        if(slideCount <= 0){
                            
                            slideCountNeg = slideCount;
                            if(slideCountNeg == -1){
                                slideCountRes = (-1) * slideCountNeg;
                            } else if(slideCountNeg == 0){
                                slideCountRes = slides.length;
                            }
                            
                            slideRun(slideCountRes)                        
                            return slideCount = slideCountRes;
                            
                        } else if ( slideCount >= 1 ){
                        
                            slideRun(slideCount);
                            return slideCount;
                            
                        } else if (slideCount <= TotalSlides){
                        
                            slideRun(slideCount);
                            return slideCount;
                            
                        }

                    }
                    
                    function slideRun(_slideCount){
                        
                        var selectSlide = $("#slide-"+_slideCount),
                            selectIndicator = $("#slide-indicator-"+_slideCount),
                            indSelectThis = "indicator-selected",
                            allIndicators = $(".indicator-slides"),
                            slideOffset = selectSlide.offset().left,
                            currentSlide = selectSlide.selector;
                                
                            //console.log(currentSlide+" position is: "+slideOffset)
                            var getOffset = originPos - slideOffset;

                            allIndicators.removeClass(indSelectThis)
                            selectIndicator.addClass(indSelectThis)
                        
                            slides
                                  .animate({
                                    left: "+="+getOffset
                                  }, speed)
                    }
                    
                }
                
                fnArrowRight = new startArrowSlide(500);
                fnArrowRight;
                
            })
            
            
            
        },
        
        _sidebarFunctions: function($scope, $http, dynamicurl){
        
            
            // ---------------------------------------
            // Monitoring
            // ---------------------------------------
            // updateVersion: "1.02"
            // date: "23-07-2015"
            // time: "14:18"
            // changeRemarks: "Added hovering effects "
            // editor: "Mark"
            // description: "Implementing Animation and Link Functions when hovering each section from sidebar"
            //
            
            var sideSections = $(".sidebar-sections"),
                msgMouseIn = "This effect is triggered when the mouse has entered side bar elements.",
                msgMouseOut = "This effect is triggered when the mouse has leaves side bar elements.",
                _selectElm, originContent;
            
            var _select = {
                    sect1: "CTP Greenslip Quote",
                    sect2: "Car Insurance Quote",
                    sect3: "News and Resource Centre",
                    sect4: "Contact Us",
                    sect5: "Business Hours"
                };
            
            function fxMouseIn(event){
                
                _selectElm = $(this);
                typeElement = _selectElm.attr("data-sidebar");
                
                console.log(typeElement);
                
                if((typeElement == _select.sect1) || (typeElement == _select.sect1.toLowerCase())){
                    originContent =_selectElm.html();
                    _selectElm.html(_select.sect1+":\n"+msgMouseIn)
                    event.stopPropagation;
                } else if((typeElement == _select.sect2) || (typeElement == _select.sect2.toLowerCase())){
                    originContent = _selectElm.html();
                    _selectElm.html(_select.sect2+":\n"+msgMouseIn)
                    event.stopPropagation;
                } else if((typeElement == _select.sect3) || (typeElement == _select.sect3.toLowerCase())){
                    originContent = _selectElm.html();
                    _selectElm.html(_select.sect3+":\n"+msgMouseIn)
                    event.stopPropagation;
                } else if((typeElement == _select.sect4) || (typeElement == _select.sect4.toLowerCase())){
                    originContent = _selectElm.html();
                    _selectElm.html(_select.sect4+":\n"+msgMouseIn)
                    event.stopPropagation;
                } else if((typeElement == _select.sect5) || (typeElement == _select.sect5.toLowerCase())){
                    originContent = _selectElm.html();
                    _selectElm.html(_select.sect5+":\n"+msgMouseIn)
                    event.stopPropagation;
                } 
                
            }
            
            function fxMouseOut(event){
                //console.log(originContent);
                _selectElm.html(originContent);
                event.stopPropagation;
            }
            
            sideSections
                        .on('mouseenter', fxMouseIn)
                        .on('mouseleave', fxMouseOut);
        
        },
        
        _tabsectionFunctions: function($scope, $http, dynamicurl){
            
            // ---------------------------------------
            // Monitoring
            // ---------------------------------------
            //
            // updateVersion: "1.00"
            // date: "24-07-2015"
            // time: "12:19"
            // changeRemarks: ""
            // editor: "Mark"
            // description : "Adding indicator functions for the tab sections about the calculator."
            //
            
            var tabSections = $(".how-it-works-tabs"),
                totalTabSections = $("total-tab-sections"),
                selectedTabInd = $(".tab-section-indicators > li");
            
            selectedTabInd.on('click', fnTabSectionSlide)
            
            function fnTabSectionSlide(){
                
                var totalTabSections = $(".how-it-works-wrapper"),
                totalTabOriginX = totalTabSections.offset(),
                thisTab = $(this),
                tabValue = thisTab.html(),
                selectTab = $("#section-tab-"+tabValue),
                fnHL;
                
                // Trigger Slide Animation
                function fnSlideTabInfo(){
                    
                    
                    
                }

                // Trigger Function for Highlighting Tab
                function highlightTab(){
                    selectedTabInd.removeClass("tab-section-selected")
                    thisTab.addClass("tab-section-selected")    
                }
                
                console.log(totalTabOriginX)
                
                fnHL = new highlightTab();
                fnHL;
                
            }
                
            
            
        },
               
        // ################################
        // Error Functions
        // ################################
        // 
        // 
        
        error: {
        
            dataRetrieve: function(){
                throw("Retrieving Data Error! Either the URL Path is not defined.");
            },
            malfunction: function(){
                throw("Error call method function!");
            },
            pageRequest: function(){
                throw("Your request page does not exist. Please specify your page definition.");
            },
            pageDefine: function(){
                throw("Can't find your page. Please specify the page title or subpage title.")
            }
            
        },        
        version: {
            v: 1.09,
            update: "latest",
            // Any new updates on the current code, edit this to keep code tracking
            dateUpdate: "22-07-2015",
            // Any old updates replacing the new update code, put it here to keep code tracking
            dateOld: "16-07-2015"
        }, 
        copyrights: {
            website: "Valuegreenslips.com.au",
            author: "CTP Greenslips",
            developers: [ "Alien Legend", "The Best", "Iron Man" ], 
            seo: "Gwapo Ako"
        }
        
    }

// Bridge-List of Contents for Data-Binding
window.fnJoin = {

        content: {
            
            // updateVersion: 1.01
            // date: 16-06-2015
            // time: 9:50
            // changeRemarks: This is just a test phase
            // editor: Mark
            // description: Home Page
            //
            
            home: function(val, gallery, $http, $scope){
            "use strict"
                // View entire data/content for Home Page
                console.log(val)
            
                // IMPLEMENT YOUR LOGIC CODE HERE OR DATA-BINDING
                
            },
            
            // updateVersion: 1.03
            // date: 18-06-2015
            // time: 9:00
            // changeRemarks: Transferred completely into the specific page for data-binding
            // editor: Mark
            // description: CTP Greenslips Page
            //
            
            ctpGreenslips: function(val, gallery, $http, $scope){
            "use strict"
                // View Entire Data/Content for CTP Greenslip Page
                console.log(val)
                
                var value = val;
                
                angular.forEach(value.subpages, function(value, key){
                    if(key == 0){
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                        $scope.aboutus = value;
                        
                        // About Value Greenslips
                        $scope.aboutusID = value.id;
                        $scope.aboutusMetaTitle = value.metatitle;
                        $scope.aboutusPageTitle = value.pagetitle;
                        $scope.aboutusKeywords = value.keywords;
                        $scope.aboutusDescription = value.description;
                        $scope.aboutusContentTitle = value.contenttitle;
                        $scope.aboutusContent = value.content;
                        $scope.aboutusBot = value.bot;
                        $scope.aboutusURL = value.url;

                        botValidate();
                    } else if(key == 1){
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          

                        // What is a Greenslip
                        $scope.whatIsGreenslipID = value.id;
                        $scope.whatIsGreenslipMetaTitle = value.metatitle;
                        $scope.whatIsGreenslipPageTitle = value.pagetitle;
                        $scope.whatIsGreenslipKeywords = value.keywords;
                        $scope.whatIsGreenslipDescription = value.description;
                        $scope.whatIsGreenslipContentTitle = value.contenttitle;
                        $scope.whatIsGreenslipContent = value.content;
                        $scope.whatIsGreenslipBot = value.bot;
                        $scope.whatIsGreenslipURL = value.url;
                        botValidate();
                    } else if(key == 2){
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                        
                        // CTP Greenslip Renewal
                        $scope.ctpGreenslipRenwID = value.id;
                        $scope.ctpGreenslipRenwMetaTitle = value.metatitle;
                        $scope.ctpGreenslipRenwPageTitle = value.pagetitle;
                        $scope.ctpGreenslipRenwKeywords = value.keywords;
                        $scope.ctpGreenslipRenwDescription = value.description;
                        $scope.ctpGreenslipRenwContentTitle = value.contenttitle;
                        $scope.ctpGreenslipRenwContent = value.content;
                        $scope.ctpGreenslipRenwBot = value.bot;
                        $scope.ctpGreenslipRenwURL = value.url;                        
                        
                        botValidate();
                        
                    } else if(key == 3){
                    
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                        
                        // Greenslips Insurance Cover
                        $scope.greenslipInsuranceCoverID = value.id;
                        $scope.greenslipInsuranceCoverMetaTitle = value.metatitle;
                        $scope.greenslipInsuranceCoverPageTitle = value.pagetitle;
                        $scope.greenslipInsuranceCoverKeywords = value.keywords;
                        $scope.greenslipInsuranceCoverDescription = value.description;
                        $scope.greenslipInsuranceCoverContentTitle = value.contenttitle;
                        $scope.greenslipInsuranceCoverContent = value.content;
                        $scope.greenslipInsuranceCoverBot = value.bot;
                        $scope.greenslipInsuranceCoverURL = value.url;

                        botValidate();
                        
                    } else if(key == 4){
                        
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                        // Parent Page -- Compare Greenslips
                        
                        angular.forEach(value.subpages, function(value, key){
                            
                            if(key == 0){
                                
                                // Enable console.log for testing
                                //console.log('Details:\n'+'\nSub-Page ID: '+ value.id + '\nSub-Page Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                                
                                // Sub Page -- Greenslip Price Comparison
                                $scope.greenslipPriceComparisonID = value.id;
                                $scope.greenslipPriceComparisonMetaTitle = value.metatitle;
                                $scope.greenslipPriceComparisonPageTitle = value.pagetitle;
                                $scope.greenslipPriceComparisonKeywords = value.keywords;
                                $scope.greenslipPriceComparisonDescription = value.description;
                                $scope.greenslipPriceComparisonContentTitle = value.contenttitle;
                                $scope.greenslipPriceComparisonContent = value.content;
                                $scope.greenslipPriceComparisonBot = value.bot;
                                $scope.greenslipPriceComparisonURL = value.url;

                                botValidate();
                                
                            } else if(key == 1){
                                
                                // Enable console.log for testing
                                //console.log('Details:\n'+'\nSub-Page ID: '+ value.id + '\nSub-Page Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                                
                                // Sub Page -- Compare Cheap Greenslips
                                $scope.compareCheapGreenslipsID = value.id;
                                $scope.compareCheapGreenslipsMetaTitle = value.metatitle;
                                $scope.compareCheapGreenslipsPageTitle = value.pagetitle;
                                $scope.compareCheapGreenslipsKeywords = value.keywords;
                                $scope.compareCheapGreenslipsDescription = value.description;
                                $scope.compareCheapGreenslipsContentTitle = value.contenttitle;
                                $scope.compareCheapGreenslipsContent = value.content;
                                $scope.compareCheapGreenslipsBot = value.bot;
                                $scope.compareCheapGreenslipsURL = value.url;
                                
                                botValidate();
                                
                            }
                            
                        });
                        
                    } else if (key == 5){
                        
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                        
                        // Greenslips Calculator
                        $scope.greenslipCalculatorID = value.id;
                        $scope.greenslipCalculatorMetaTitle = value.metatitle;
                        $scope.greenslipCalculatorPageTitle = value.pagetitle;
                        $scope.greenslipCalculatorKeywords = value.keywords;
                        $scope.greenslipCalculatorDescription = value.description;
                        $scope.greenslipCalculatorContentTitle = value.contenttitle;
                        $scope.greenslipCalculatorContent = value.content;
                        $scope.greenslipCalculatorBot = value.bot;
                        $scope.greenslipCalculatorURL = value.url;
                        
                        botValidate();
                        
                    } else if (key == 6){
                    
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                        
                        // Motorbike Greenslips
                        $scope.motorbikeGreenslipsID = value.id;
                        $scope.motorbikeGreenslipsMetaTitle = value.metatitle;
                        $scope.motorbikeGreenslipsPageTitle = value.pagetitle;
                        $scope.motorbikeGreenslipsKeywords = value.keywords;
                        $scope.motorbikeGreenslipsDescription = value.description;
                        $scope.motorbikeGreenslipsContentTitle = value.contenttitle;
                        $scope.motorbikeGreenslipsContent = value.content;
                        $scope.motorbikeGreenslipsBot = value.bot;
                        $scope.motorbikeGreenslipsURL = value.url;
                        
                        botValidate();
                        
                    } else if (key == 7){
                    
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                        
                        // Bus and Truck Greenslips
                        $scope.busTruckGreenslipsID = value.id;                    
                        $scope.busTruckGreenslipsMetaTitle = value.metatitle;
                        $scope.busTruckGreenslipsPageTitle = value.pagetitle;
                        $scope.busTruckGreenslipsKeywords = value.keywords;
                        $scope.busTruckGreenslipsDescription = value.description;
                        $scope.busTruckGreenslipsContentTitle = value.contenttitle;
                        $scope.busTruckGreenslipsContent = value.content;
                        $scope.busTruckGreenslipsBot = value.bot;
                        $scope.busTruckGreenslipsURL = value.url;

                        botValidate();
                        
                    } else if(key == 8){
                    
                        // Business and Fleet CTP Greenslips
                        $scope.businessFleetGreenslipsID = value.id;
                        $scope.businessFleetGreenslipsMetaTitle = value.metatitle;
                        $scope.businessFleetGreenslipsPageTitle = value.pagetitle;
                        $scope.businessFleetGreenslipsKeywords = value.keywords;
                        $scope.businessFleetGreenslipsDescription = value.description;
                        $scope.businessFleetGreenslipsContentTitle = value.contenttitle;
                        $scope.businessFleetGreenslipsContent = value.content;
                        $scope.businessFleetGreenslipsBot = value.bot;
                        $scope.businessFleetGreenslipsURL = value.url;

                        botValidate();
                        
                    } else if (key == 9){
                    
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                        
                        // RMS Demerit Points Check
                        $scope.rmsDemeritPtsCheckID = value.id;
                        $scope.rmsDemeritPtsCheckMetaTitle = value.metatitle;
                        $scope.rmsDemeritPtsCheckPageTitle = value.pagetitle;
                        $scope.rmsDemeritPtsCheckKeywords = value.keywords;
                        $scope.rmsDemeritPtsCheckDescription = value.description;
                        $scope.rmsDemeritPtsCheckContentTitle = value.contenttitle;
                        $scope.rmsDemeritPtsCheckContent = value.content;
                        $scope.rmsDemeritPtsCheckBot = value.bot;
                        $scope.rmsDemeritPtsCheckURL = value.url;

                        botValidate();
                        
                    } else if (key == 10){
                    
                        angular.forEach(value.subpages, function(value, key){
                        
                            if(key == 0){
                            
                                // Enable console.log for testing
                                //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                                
                                // Sub Page -- CTP Greenslips by State
                                $scope.ctpGreenslipbyStateID = value.id;
                                $scope.ctpGreenslipbyStateMetaTitle = value.metatitle;
                                $scope.ctpGreenslipbyStatePageTitle = value.pagetitle;
                                $scope.ctpGreenslipbyStateKeywords = value.keywords;
                                $scope.ctpGreenslipbyStateDescription = value.description;
                                $scope.ctpGreenslipbyStateContentTitle = value.contenttitle;
                                $scope.ctpGreenslipbyStateContent = value.content;
                                $scope.ctpGreenslipbyStateBot = value.bot;
                                $scope.ctpGreenslipbyStateURL = value.url;
                                
                                botValidate();
                                
                            } else if (key == 1){
                            
                                // Enable console.log for testing
                                //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                                
                                // Sub Page -- Greenslips in NSW
                                $scope.greenslipsinNSWID = value.id;
                                $scope.greenslipsinNSWMetaTitle = value.metatitle;
                                $scope.greenslipsinNSWPageTitle = value.pagetitle;
                                $scope.greenslipsinNSWKeywords = value.keywords;
                                $scope.greenslipsinNSWDescription = value.description;
                                $scope.greenslipsinNSWContentTitle = value.contenttitle;
                                $scope.greenslipsinNSWContent = value.content;
                                $scope.greenslipsinNSWBot = value.bot;
                                $scope.greenslipsinNSWURL = value.url;
                                
                                botValidate();
                            } else if(key == 2){
                            
                                // Enable console.log for testing
                                //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                                
                                // Sub Page -- Greenslips in Queensland
                                $scope.greenslipsinQueenslandID = value.id;
                                $scope.greenslipsinQueenslandMetaTitle = value.metatitle;
                                $scope.greenslipsinQueenslandPageTitle = value.pagetitle;
                                $scope.greenslipsinQueenslandKeywords = value.keywords;
                                $scope.greenslipsinQueenslandDescription = value.description;
                                $scope.greenslipsinQueenslandContentTitle = value.contenttitle;
                                $scope.greenslipsinQueenslandContent = value.content;
                                $scope.greenslipsinQueenslandBot = value.bot;
                                $scope.greenslipsinQueenslandURL = value.url;
                            
                            } else if(key == 3){
                            
                                // Enable console.log for testing
                                //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          
                                
                                // Sub Page -- Greenslips in MAIC
                                $scope.greenslipsinMAICID = value.id;
                                $scope.greenslipsinMAICMetaTitle = value.metatitle;
                                $scope.greenslipsinMAICPageTitle = value.pagetitle;
                                $scope.greenslipsinMAICKeywords = value.keywords;
                                $scope.greenslipsinMAICDescription = value.description;
                                $scope.greenslipsinMAICContentTitle = value.contenttitle;
                                $scope.greenslipsinMAICContent = value.content;
                                $scope.greenslipsinMAICBot = value.bot;
                                $scope.greenslipsinMAICURL = value.url;
                            
                            }
                        });
                        
                    } else if (key == 11){
                        
                        // Enable console.log for testing
                        //console.log('Details:\n'+'\nPage ID: '+ value.id + '\nPage Title: ' + value.pagetitle + '\nMeta Title:' + value.metatitle);          

                        angular.forEach(value.subpages, function(value, key){
                        
                            if(key == 0){
                            
                                // Sub Page -- CTP Greenslip Prices
                                $scope.greenslipsinCTPGreenslipPricesID = value.id;
                                $scope.greenslipsinCTPGreenslipPricesMetaTitle = value.metatitle;
                                $scope.greenslipsinCTPGreenslipPricesPageTitle = value.pagetitle;
                                $scope.greenslipsinCTPGreenslipPricesKeywords = value.keywords;
                                $scope.greenslipsinCTPGreenslipPricesDescription = value.description;
                                $scope.greenslipsinCTPGreenslipPricesContentTitle = value.contenttitle;
                                $scope.greenslipsinCTPGreenslipPricesContent = value.content;
                                $scope.greenslipsinCTPGreenslipPricesBot = value.bot;
                                $scope.greenslipsinCTPGreenslipPricesURL = value.url;
                                
                            } else if(key == 1){
                            
                                // Sub Page -- CTP Greenslip Zones
                                $scope.greenslipsinCTPGreenslipZonesID = value.id;
                                $scope.greenslipsinCTPGreenslipZonesMetaTitle = value.metatitle;
                                $scope.greenslipsinCTPGreenslipZonesPageTitle = value.pagetitle;
                                $scope.greenslipsinCTPGreenslipZonesKeywords = value.keywords;
                                $scope.greenslipsinCTPGreenslipZonesDescription = value.description;
                                $scope.greenslipsinCTPGreenslipZonesContentTitle = value.contenttitle;
                                $scope.greenslipsinCTPGreenslipZonesContent = value.content;
                                $scope.greenslipsinCTPGreenslipZonesBot = value.bot;
                                $scope.greenslipsinCTPGreenslipZonesURL = value.url;
                                
                            } else if(key == 2){
                            
                                // Sub Page -- Greenslip Operations
                                $scope.greenslipsinGreenslipOperationsID = value.id;
                                $scope.greenslipsinGreenslipOperationsMetaTitle = value.metatitle;
                                $scope.greenslipsinGreenslipOperationsPageTitle = value.pagetitle;
                                $scope.greenslipsinGreenslipOperationsKeywords = value.keywords;
                                $scope.greenslipsinGreenslipOperationsDescription = value.description;
                                $scope.greenslipsinGreenslipOperationsContentTitle = value.contenttitle;
                                $scope.greenslipsinGreenslipOperationsContent = value.content;
                                $scope.greenslipsinGreenslipOperationsBot = value.bot;
                                $scope.greenslipsinGreenslipOperationsURL = value.url;
                                
                            } else if(key == 3){
                            
                                // Sub Page -- CTP Greenslip & RTA Registration
                                $scope.greenslipsinCTPGreenslipRTARegID = value.id;
                                $scope.greenslipsinCTPGreenslipRTARegMetaTitle = value.metatitle;
                                $scope.greenslipsinCTPGreenslipRTARegPageTitle = value.pagetitle;
                                $scope.greenslipsinCTPGreenslipRTARegKeywords = value.keywords;
                                $scope.greenslipsinCTPGreenslipRTARegDescription = value.description;
                                $scope.greenslipsinCTPGreenslipRTARegContentTitle = value.contenttitle;
                                $scope.greenslipsinCTPGreenslipRTARegContent = value.content;
                                $scope.greenslipsinCTPGreenslipRTARegBot = value.bot;
                                $scope.greenslipsinCTPGreenslipRTARegURL = value.url;
                                
                                
                            } else if(key == 4){
                            
                                // Sub Page -- MAA News
                                $scope.greenslipsinMAANewsID = value.id;
                                $scope.greenslipsinMAANewsMetaTitle = value.metatitle;
                                $scope.greenslipsinMAANewsPageTitle = value.pagetitle;
                                $scope.greenslipsinMAANewsKeywords = value.keywords;
                                $scope.greenslipsinMAANewsDescription = value.description;
                                $scope.greenslipsinMAANewsContentTitle = value.contenttitle;
                                $scope.greenslipsinMAANewsContent = value.content;
                                $scope.greenslipsinMAANewsBot = value.bot;
                                $scope.greenslipsinMAANewsURL = value.url;
                                
                            } else if(key == 5){
                            
                                // Sub Page -- Industry News
                                $scope.greenslipsinIndustryNewsID = value.id;
                                $scope.greenslipsinIndustryNewsMetaTitle = value.metatitle;
                                $scope.greenslipsinIndustryNewsPageTitle = value.pagetitle;
                                $scope.greenslipsinIndustryNewsKeywords = value.keywords;
                                $scope.greenslipsinIndustryNewsDescription = value.description;
                                $scope.greenslipsinIndustryNewsContentTitle = value.contenttitle;
                                $scope.greenslipsinIndustryNewsContent = value.content;
                                $scope.greenslipsinIndustryNewsBot = value.bot;
                                $scope.greenslipsinIndustryNewsURL = value.url;
                                
                                
                            } else if(key == 6){
                            
                                // Sub Page -- RTA News
                                $scope.greenslipsinRTANewsID = value.id;
                                $scope.greenslipsinRTANewsMetaTitle = value.metatitle;
                                $scope.greenslipsinRTANewsPageTitle = value.pagetitle;
                                $scope.greenslipsinRTANewsKeywords = value.keywords;
                                $scope.greenslipsinRTANewsDescription = value.description;
                                $scope.greenslipsinRTANewsContentTitle = value.contenttitle;
                                $scope.greenslipsinRTANewsContent = value.content;
                                $scope.greenslipsinRTANewsBot = value.bot;
                                $scope.greenslipsinRTANewsURL = value.url;
                                
                            }
                            
                        });
                        
                        
                    } else if(key == 12){

                        // Global
                        $scope.ctpGreenslipCalculator = value;

                        // Specific Data of CTP Greenslip Calculator
                        $scope.ctpGreenslipCalculatorID = value.id;
                        $scope.ctpGreenslipCalculatorMetaTitle = value.metatitle;
                        $scope.ctpGreenslipCalculatorPageTitle = value.pagetitle;
                        $scope.ctpGreenslipCalculatorKeywords = value.keywords;
                        $scope.ctpGreenslipCalculatorDescription = value.description;
                        $scope.ctpGreenslipCalculatorContentTitle = value.contenttitle;
                        $scope.ctpGreenslipCalculatorContent = value.content;
                        $scope.ctpGreenslipCalculatorBot = value.bot;
                        $scope.ctpGreenslipCalculatorURL = value.url;

                    }
                    
                    function botValidate(){                        
                        if(value.bot != true){ $scope.botValidate = 'noindex, nofollow'; } else { $scope.botValidate = 'index, follow'; }
                    }
                })
            },
            
            _sub_ctpGreenslips: {
                            
                aboutUs: function(val, gallery, $http, $scope){
                "use strict"
                
                    console.log(val)
                    
                    var value = val;
                    
                    // About Value Greenslips
                    $scope.aboutusID = value.id;
                    $scope.aboutusMetaTitle = value.metatitle;
                    $scope.aboutusPageTitle = value.pagetitle;
                    $scope.aboutusKeywords = value.keywords;
                    $scope.aboutusDescription = value.description;
                    $scope.aboutusContentTitle = value.contenttitle;
                    $scope.aboutusContent = value.content;
                    $scope.aboutusBot = value.bot;
                    $scope.aboutusURL = value.url;

                },
                
                whatIsGreenslip: function(val, gallery, $http, $scope){
                "use strict"
                    
                    console.log(val)
                    
                    var value = val;
                    
                    // What is a Greenslip
                    $scope.whatIsGreenslipID = value.id;
                    $scope.whatIsGreenslipMetaTitle = value.metatitle;
                    $scope.whatIsGreenslipPageTitle = value.pagetitle;
                    $scope.whatIsGreenslipKeywords = value.keywords;
                    $scope.whatIsGreenslipDescription = value.description;
                    $scope.whatIsGreenslipContentTitle = value.contenttitle;
                    $scope.whatIsGreenslipContent = value.content;
                    $scope.whatIsGreenslipBot = value.bot;
                    $scope.whatIsGreenslipURL = value.url;
                    
                },
                
                ctpGreenslipRenw: function(val, gallery, $http, $scope){
                "use strict"
                    
                    console.log(val)
                
                },
                
                greenslipsInsuranceCover: function(val, gallery, $http, $scope){
                "use strict"
                    
                    console.log(val)
                
                },
                
                compareGreenslips: function(val, gallery, $http, $scope){
                "use strict"
                    
                    console.log(val)
                
                },
                
                ctpGreenslipCalculator: function(val, gallery, $http, $scope){
                "use strict"
                    
                    console.log(val)
                    
                },
                
                motorbikeGreenslips: function(val, gallery, $http, $scope){
                "use strict"
                
                    console.log(val)
                
                },
                
                busAndTruckGreenslips: function(val, gallery, $http, $scope){
                "use strict"
                    
                    console.log(val)
                    
                },
                
                businessFleetGreenslips: function(val, gallery, $http, $scope){
                "use strict"
                
                    console.log(val)
                
                },
                
                rtaDemeritPoints: function(val, gallery, $http, $scope){
                "use strict"
                
                    console.log(val)
                    
                },
                
                greenslipsByState: function(val, gallery, $http, $scope){
                "use strict"
                
                    console.log(val)
                
                },
                
                additionalGreenslipInformation: function(val, gallery, $http, $scope){
                "use strict"
                
                    console.log(val)
                
                },
                
                ctpGreenslipCalculator: function(val, gallery, $http, $scope){
                "use strict"
                    
                    console.log(val)
                
                }
                
            },
            
            // updateVersion: 1.00
            // date: 16-06-2015
            // time: 10:00
            // changeRemarks:
            // editor: Mark
            // description: Greenslip FAQs Page
            //
            
            greenslipFaqs: function(val, gallery, $http, $scope){
            "use strict"
                
                console.log(val)
            
                // IMPLEMENT YOUR LOGIC CODE HERE OR DATA-BINDING
                
            },
            
            // updateVersion: 1.00
            // date: 16-06-2015
            // time: 10:45
            // changeRemarks: 
            // editor: 
            // description: Car Insurance Page
            // 
            
            carInsurance: function(val, gallery, $http, $scope){
            "use strict"
                
                console.log(val)
                
                
            },
            
            // updateVersion: 1.00
            // date: 16-06-2015
            // time: 10:45
            // changeRemarks:
            // editor: Mark
            // description: Articles Page
            // 
            
            articles: function(val, gallery, $http, $scope){
            "use strict"
                
                console.log(val)
            
            },
            
            // updateVersion: 1.00
            // date: 16-06-2015
            // time: 12:07
            // changeRemarks:
            // editor: Mark
            // description: Contact Us Page
            // 
            
            contactUs: function(val, gallery, $http, $scope){
            
                console.log(val)
                
            },
            
            // updateVersion: 1.02
            // date: 18-06-2015
            // time: 9:00
            // changeRemarks: Successfully data-bind content for Privacy Policy
            // editor: Mark
            // description: Privacy Policy Page
            // 
            
            privacyPolicy: function(val, gallery, $http, $scope){

                //console.log(val)
                
                var _value = val;                
                
                console.log(_value);
                
                $scope.privacyPolicyBot = _value.bot;
                $scope.privacyPolicyMetaTitle = _value.metatitle;
                $scope.privacyPolicyPageTitle = _value.pagetitle;
                $scope.privacyPolicyKeywords = _value.keywords;
                $scope.privacyPolicyDescription = _value.description;
                $scope.privacyPolicyContent = _value.content;
                $scope.privacyPolicyContentTitle = _value.contenttitle;
                $scope.privacyPolicyURL = _value.url;
                
            },
            
            // updateVersion: 1.02
            // date: 18-06-2015
            // time: 9:00
            // changeRemarks: Successfully data-bind content for Terms of Use
            // editor: Mark
            // description: Terms of Use Page
            // 
            
            termsOfUse: function(val, gallery, $http, $scope){

                var _value = val;
                                
                console.log(val)
                
                $scope.termsOfUseData = _value;
                $scope.termsOfUseBot = _value.bot;
                $scope.termsOfUseMetaTitle = _value.metatitle;
                $scope.termsOfUsePageTitle = _value.pagetitle;
                $scope.termsOfUseKeywords = _value.keywords;
                $scope.termsOfUseDescription = _value.description;
                $scope.termsOfUseContent = _value.content;
                $scope.termsOfUseContentTitle = _value.contenttitle;
                $scope.termsOfUseURL = _value.url;
                
            }
            
        },
    
        blog: {
        
            blogPage1: function(){
            
                
                
            },
            blogPage2: function(){
            
                
                
            },
            blogPage3: function(){
            
                
            
            },
            blogPage4: function(){
            
                
            
            }
            
        },
    
        dynamic: {
        
            QuickLinks: function(val, $http, $scope){
            
            },
            
            PrimaryNavigation: function(val, $http, $scope){
            
            },
            
            Testimonial: function(val, $http, $scope){
            
            },
            
            FooterSection: function(val, $http, $scope){
            
            }
            
        }
        
    }
        
    
})(window, document)