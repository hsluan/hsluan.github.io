System.register("chunks:///_virtual/Constant.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a4f92tVbVlEJaUSeVNM1jR6", "Constant", undefined);

      var Constant = exports('Constant', function Constant() {});
      Constant.FLAG_COCOS = "isCocosForce=true";
      Constant.DEFAULT_CHAIN_NAME = "tomo";
      Constant.SIGNIN_ENDPOINT = "wallet/signin";
      Constant.SIGN_MESSAGE_ENDPOINT = "unity/sign-message?" + Constant.FLAG_COCOS + "&message=";
      Constant.SIGN_TRANSACTION_ENDPOINT = "unity/sign-transaction?" + Constant.FLAG_COCOS;
      Constant.SIGN_OUT = "signout";
      Constant.END_POINT = "https://ramper-v2-auth-test.coin98.dev/";
      Constant.SIGN_MESSAGE = Constant.END_POINT + Constant.SIGN_MESSAGE_ENDPOINT;
      Constant.MOCK_SIGN_IN_USERPROFILE = {
        "UID": "7hHx5CYIhkZ5kZQdPczwXdW11yM2",
        "signupSource": "google.com",
        "email": "luan.tryhard@gmail.com",
        "wallets": {
          "tomo": {
            "blockchain": "tomo",
            "walletId": "tomo-7_0x3DC92dE04bfbd34cb47C6Cc328B8E1725DE48d5e",
            "publicKey": "0x3DC92dE04bfbd34cb47C6Cc328B8E1725DE48d5e",
            "creationDate": 1721465102783,
            "version": 7
          },
          "ethereum": {
            "blockchain": "ethereum",
            "walletId": "ethereum-7_0x3DC92dE04bfbd34cb47C6Cc328B8E1725DE48d5e",
            "publicKey": "0x3DC92dE04bfbd34cb47C6Cc328B8E1725DE48d5e",
            "creationDate": 1721465102783,
            "version": 7
          },
          "chiliz": {
            "blockchain": "chiliz",
            "walletId": "chiliz-7_0x3DC92dE04bfbd34cb47C6Cc328B8E1725DE48d5e",
            "publicKey": "0x3DC92dE04bfbd34cb47C6Cc328B8E1725DE48d5e",
            "creationDate": 1721465102783,
            "version": 7
          },
          "zkSyncEra": {
            "blockchain": "zkSyncEra",
            "walletId": "zkSyncEra-7_0x3DC92dE04bfbd34cb47C6Cc328B8E1725DE48d5e",
            "publicKey": "0x3DC92dE04bfbd34cb47C6Cc328B8E1725DE48d5e",
            "creationDate": 1721465102783,
            "version": 7
          }
        },
        "isV2": true,
        "chainConfig": "tomo"
      };

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Canvas, UITransform, instantiate, Label, Color, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct TRT', 'Env TRT', 'TRT All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'TRT', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Constant.ts', './Main.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Main.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Constant.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _extends, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, WebView, Label, Button, Component, Constant;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      WebView = module.WebView;
      Label = module.Label;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      Constant = module.Constant;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "b7b6exX0YBCO6JenEvKiSGG", "Main", undefined); // declare var firebase: any;


      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Main = exports('Main', (_dec = ccclass('Main'), _dec2 = property(WebView), _dec3 = property(Label), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Main, _Component);

        function Main() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "wb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "webMsgText", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "signinButton", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "signMessageButton", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "logoutButton", _descriptor5, _assertThisInitialized(_this));

          _this.loginBase64 = '';
          return _this;
        }

        var _proto = Main.prototype;

        _proto.start = function start() {
          this.wb.url = "";
          this.signinButton.node.active = true;
          this.signMessageButton.node.active = false;
          this.logoutButton.node.active = true;
          RamperInstant.initializeAsync(this.onRecievedMsg.bind(this)).then(function (identityCredentials) {
            console.log("Initialize CCNESDK success", identityCredentials); // google.accounts.id.initialize({
            //     //client_id: '114789873055-e2sktrogsg2k12rj9lhhvfhpg796ebsf.apps.googleusercontent.com',
            //     client_id: '663197326394-ngu7bcpsbo6t6ampt433aqceei7mbhjm.apps.googleusercontent.com',
            //     callback: (identityCredentials) => {
            //         console.log("callback!!", identityCredentials)
            //         this.onClickSignin(`${Constant.END_POINT}test?credentialResponse=${identityCredentials['credential']}&message=Welcome&partner=coin98&provider=google&${Constant.FLAG_COCOS}`);
            //     }
            // });
            // google.accounts.id.prompt();
            // /this.onClickSignin(`${Constant.END_POINT}test?credentialResponse=${identityCredentials['credential']}&message=Welcome&partner=coin98&provider=google&${Constant.FLAG_COCOS}`);
            //var provider = new fire .auth.GoogleAuthProvider();
            // TODO: Replace the following with your app's Firebase project configuration
            //#region FIREBASE INITIALIZE
            //#endregion
          });
        } // makeGoogleCredential(googleUser) {
        //     // [START auth_make_google_credential]
        //     var credential = firebase.auth.GoogleAuthProvider.credential(
        //         googleUser.getAuthResponse().id_token
        //     );
        //     // [END auth_make_google_credential]
        // }
        // makeFacebookCredential(response) {
        //     // [START auth_make_facebook_credential]
        //     var credential = firebase.auth.FacebookAuthProvider.credential(
        //         response.authResponse.accessToken);
        //     // [END auth_make_facebook_credential]
        // }
        // makeEmailCredential(email, password) {
        //     // [START auth_make_email_credential]
        //     var credential = firebase.auth.EmailAuthProvider.credential(email, password);
        //     // [END auth_make_email_credential]
        // }
        ;

        _proto.utf8Encode = function utf8Encode(msg) {
          var encoder = new TextEncoder();
          return encoder.encode(msg);
        };

        _proto.bytesToBase64 = function bytesToBase64(bytes) {
          var binary = "";
          bytes.forEach(function (_byte) {
            binary += String.fromCharCode(_byte);
          });
          return btoa(binary);
        };

        _proto.onClickSignin = function onClickSignin(url) {
          console.log("---------------------onClickSignin START"); // this.wb.url = '';
          // //this.wb.url = `${Constant.END_POINT}${Constant.SIGNIN_ENDPOINT}?partner=coin98&chainName=${Constant.DEFAULT_CHAIN_NAME}&${Constant.FLAG_COCOS}`;
          // var params = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?${new URLSearchParams({
          //     response_type: 'code',
          //     scope: 'openid profile email',
          //     client_id: false
          //         ? '897776340259-fqksgtjpo49c4em216lt6tm837klar2l.apps.googleusercontent.com'
          //         : '114789873055-e2sktrogsg2k12rj9lhhvfhpg796ebsf.apps.googleusercontent.com',
          //     state: JSON.stringify({
          //         provider: 'google',
          //         appId: 'ramper',
          //     }),
          // })}`;
          // console.log(params);
          // var urlTemp = params;

          this.wb.url = url;
          this.wb.node.active = true;
        };

        _proto.onClickSignOut = function onClickSignOut() {
          console.log("onClickSignOut ");
          this.wb.url = "";
          this.wb.url = "" + Constant.END_POINT + Constant.SIGN_OUT + "?" + Constant.FLAG_COCOS;
          this.wb.node.active = true;
        };

        _proto.getCurrentDateFormatted = function getCurrentDateFormatted() {
          var date = new Date();
          var year = date.getFullYear();
          var month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based, so add 1

          var day = ("0" + date.getDate()).slice(-2);
          return year + "-" + month + "-" + day;
        };

        _proto.onClickSignMessage = function onClickSignMessage() {
          var msg = "Welcome to NinetyEight ecosystem!|Match3|" + this.getCurrentDateFormatted();
          this.wb.url = "";
          var url = "" + Constant.END_POINT + Constant.SIGN_MESSAGE_ENDPOINT + encodeURI(msg) + "&partner=" + "coin98" + "&chainName=" + Constant.DEFAULT_CHAIN_NAME + "&config=" + this.loginBase64;
          this.wb.url = url;
          this.wb.node.active = true;
        };

        _proto.onJSCall = function onJSCall(we) {
          console.log('[onJSCall]', we);
        };

        _proto.onRecievedMsg = function onRecievedMsg(data) {
          console.log("[onRecievedMsg]" + _extends({}, data));
          this.wb.node.active = false;
          this.webMsgText.string = JSON.stringify(data);

          switch (data.eventName) {
            case "sign_out_success":
              {
                this.signinButton.node.active = true;
                this.signMessageButton.node.active = false;
                this.logoutButton.node.active = false;
              }
              break;

            case "sign_out_fail":
              {
                this.signinButton.node.active = true;
                this.logoutButton.node.active = true;
              }
              break;

            case "sign_transaction_success":
              break;

            case "sign_transaction_fail":
              break;

            case "sign_message_success":
              break;

            case "sign_message_cancel":
              break;

            case "cancel":
            case "sign_in_success":
              {
                // this.loginBase64 = this.bytesToBase64(this.utf8Encode(JSON.stringify(data))).replace(/=/g, ""); //no padding
                // console.log("[LoginBase64] " + data, this.loginBase64);
                // localStorage.setItem('ramper_loggedInUser_' + data['email'], this.loginBase64);
                this.signinButton.node.active = false;
                this.signMessageButton.node.active = true;
                this.logoutButton.node.active = true;
              }
              break;
          }
        };

        _proto.validateUser = function validateUser() {
          return false;
        };

        _proto.update = function update(deltaTime) {};

        return Main;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "webMsgText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "signinButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "signMessageButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "logoutButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});