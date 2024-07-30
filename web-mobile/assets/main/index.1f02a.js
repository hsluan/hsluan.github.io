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

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Constant.ts', './Main.ts', './ramperinstant.umd.development.mjs_cjs=&original=.js'], function () {
  'use strict';

  return {
    setters: [null, null, null, null],
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

System.register("chunks:///_virtual/ramperinstant.umd.development.js", ['./cjs-loader.mjs'], function (exports, module) {
  'use strict';

  var loader;
  return {
    setters: [function (module) {
      loader = module.default;
    }],
    execute: function () {
      exports('default', void 0);

      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };
        return _extends.apply(this, arguments);
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }

      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");

        return typeof key === "symbol" ? key : String(key);
      }

      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];

        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }

        return (hint === "string" ? String : Number)(input);
      }

      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = function _regeneratorRuntime() {
          return exports;
        };

        var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty = Object.defineProperty || function (obj, key, desc) {
          obj[key] = desc.value;
        },
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function define(obj, key, value) {
          return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), obj[key];
        }

        try {
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
          return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
          }), generator;
        }

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        exports.wrap = wrap;
        var ContinueSentinel = {};

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {}

        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if ("throw" !== record.type) {
              var result = record.arg,
                  value = result.value;
              return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              }) : PromiseImpl.resolve(value).then(function (unwrapped) {
                result.value = unwrapped, resolve(result);
              }, function (error) {
                return invoke("throw", error, resolve, reject);
              });
            }

            reject(record.arg);
          }

          var previousPromise;
          defineProperty(this, "_invoke", {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }

        function makeInvokeMethod(innerFn, self, context) {
          var state = "suspendedStart";
          return function (method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");

            if ("completed" === state) {
              if ("throw" === method) throw arg;
              return doneResult();
            }

            for (context.method = method, context.arg = arg;;) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
                if ("suspendedStart" === state) throw state = "completed", context.arg;
                context.dispatchException(context.arg);
              } else "return" === context.method && context.abrupt("return", context.arg);
              state = "executing";
              var record = tryCatch(innerFn, self, context);

              if ("normal" === record.type) {
                if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                return {
                  value: record.arg,
                  done: context.done
                };
              }

              "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
          };
        }

        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method,
              method = delegate.iterator[methodName];
          if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
          var info = record.arg;
          return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
        }

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };
          1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal", delete record.arg, entry.completion = record;
        }

        function Context(tryLocsList) {
          this.tryEntries = [{
            tryLoc: "root"
          }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
        }

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

                return next.value = undefined, next.done = !0, next;
              };

              return next.next = next;
            }
          }

          return {
            next: doneResult
          };
        }

        function doneResult() {
          return {
            value: undefined,
            done: !0
          };
        }

        return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), defineProperty(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
          var ctor = "function" == typeof genFun && genFun.constructor;
          return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
        }, exports.mark = function (genFun) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
        }, exports.awrap = function (arg) {
          return {
            __await: arg
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
          return this;
        }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          void 0 === PromiseImpl && (PromiseImpl = Promise);
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
          return this;
        }), define(Gp, "toString", function () {
          return "[object Generator]";
        }), exports.keys = function (val) {
          var object = Object(val),
              keys = [];

          for (var key in object) keys.push(key);

          return keys.reverse(), function next() {
            for (; keys.length;) {
              var key = keys.pop();
              if (key in object) return next.value = key, next.done = !1, next;
            }

            return next.done = !0, next;
          };
        }, exports.values = values, Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
          },
          stop: function stop() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;

            function handle(loc, caught) {
              return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i],
                  record = entry.completion;
              if ("root" === entry.tryLoc) return handle("end");

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                } else {
                  if (!hasFinally) throw new Error("try statement without catch or finally");
                  if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if ("throw" === record.type) {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            }

            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            return this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
          }
        }, exports;
      }

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);

        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          return function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;

        _setPrototypeOf(subClass, superClass);
      }

      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;

        _wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (Class === null || !_isNativeFunction(Class)) return Class;

          if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }

          if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);

            _cache.set(Class, Wrapper);
          }

          function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
          }

          Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
      }

      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct.bind();
        } else {
          _construct = function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
          };
        }

        return _construct.apply(null, arguments);
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      var _cjsExports;

      var __cjsMetaURL = exports('__cjsMetaURL', module.meta.url);

      loader.define(__cjsMetaURL, function (exports$1, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        (function (global, factory) {
          typeof exports$1 === 'object' && typeof module !== 'undefined' ? factory(exports$1) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.RamperInstant = {}));
        })(this, function (exports) {
          var _ConsoleMethod, _PLATFORM_LOG_STRING, _ERRORS, _SERVER_ERROR_MAP;

          var EventWrapper = /*#__PURE__*/function () {
            function EventWrapper(listenerManager) {
              this.listeners = new Map();
              this.listenerManager = listenerManager;
            }

            var _proto = EventWrapper.prototype;

            _proto.addListener = function addListener(eventName, listener) {
              this.listeners.set(eventName, listener);
              this.listenerManager.add(eventName, listener);
            };

            _proto.removeListener = function removeListener(eventName) {
              var listener = this.listeners.get(eventName);

              if (!listener) {
                return;
              }

              this.listenerManager.remove(eventName, listener);
              this.listeners["delete"](eventName);
            };

            _proto.on = function on(eventName, listener) {
              // Remove previous listener
              this.removeListener(eventName); // Add new listener

              this.addListener(eventName, listener);
            };

            _proto.once = function once(eventName, listener) {
              var _this = this; // eslint-disable-next-line @typescript-eslint/no-explicit-any


              var onceWrapper = function onceWrapper(payload) {
                listener(payload);

                _this.removeListener(eventName);
              };

              this.addListener(eventName, onceWrapper);
            };

            _proto.off = function off(eventName) {
              if (!this.listeners.has(eventName)) {
                return;
              }

              this.removeListener(eventName);
            };

            _proto.clear = function clear() {
              var _this2 = this;

              this.listeners.forEach(function (value, key) {
                _this2.listenerManager.remove(key, value);
              });
              this.listeners.clear();
            };

            return EventWrapper;
          }();

          function emit(eventName, source, payload) {
            if (payload === void 0) {
              payload = null;
            }

            var message = {
              type: eventName,
              source: source,
              data: payload || {}
            }; //eslint-disable-next-line no-undef

            if (typeof window.top !== 'undefined') {
              window.top.postMessage(JSON.stringify(message), '*');
            } else {
              // eslint-disable-next-line no-console
              console.log("emit: " + JSON.stringify(message));
            }
          }

          var Platform = /*#__PURE__*/function () {
            function Platform(source) {
              var _this = this;

              this._onRecieveMessageCallback = null;
              this.eventWrapper = new EventWrapper({
                add: function add(eventName, listener) {
                  window.document.addEventListener(eventName, listener);
                },
                remove: function remove(eventName, listener) {
                  window.document.removeEventListener(eventName, listener);
                }
              });
              this.source = source;
              window.addEventListener('message', function (event) {
                if (event.origin.indexOf('ramper-v2-auth-test') !== 8 && event.origin.indexOf('ramper-v2-auth-stg') !== 8 && event.origin.indexOf('auth.v2.ramper.xyz') !== 8) {
                  return; // Reject message from untrusted origin
                }

                var msg;

                try {
                  var _event$data;

                  msg = JSON.parse((_event$data = event.data) == null ? void 0 : _event$data.message);
                } catch (error) {
                  // console.warn('Error parsing JSON data:', error);
                  return;
                }

                if (typeof event.data.action === 'undefined' || event.data.action !== 'cocosMethod') {
                  return;
                }

                if (_this._onRecieveMessageCallback) {
                  _this._onRecieveMessageCallback(msg);
                }

                switch (msg.eventName) {
                  case "sign_out_success":
                  case "sign_out_fail":
                  case "sign_transaction_success":
                  case "sign_transaction_fail":
                  case "sign_message_success":
                  case "sign_message_cancel":
                  case "cancel":
                  case "sign_in_success":
                    if (_this._onRecieveMessageCallback) {
                      _this._onRecieveMessageCallback(msg);
                    }

                    break;
                }
              });
            }

            var _proto = Platform.prototype;

            _proto.emitCustomEvent = function emitCustomEvent(eventName, payload) {
              if (payload === void 0) {
                payload = {};
              }

              emit(eventName, this.source, payload);
            };

            _proto.on = function on(eventName, listener) {
              this.eventWrapper.on(eventName, this.transform(listener));
            };

            _proto.off = function off(eventName) {
              this.eventWrapper.off(eventName);
            };

            _proto.once = function once(eventName, listener) {
              this.eventWrapper.once(eventName, this.transform(listener));
            };

            _proto.clear = function clear() {
              this.eventWrapper.clear();
            };

            _proto.transform = function transform(listener) {
              var transformedListener = function transformedListener(event) {
                var obj = JSON.parse(event.detail);
                listener(obj);
              };

              return transformedListener;
            };

            _proto.setOnRecieveMessageCallback = function setOnRecieveMessageCallback(callback) {
              this._onRecieveMessageCallback = callback;
            };

            return Platform;
          }();

          var version = "1.1.1";
          var Config = {
            version: version
          };
          /**
           * @license
           * Copyright 2017 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * @license
           * Copyright 2017 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          var stringToByteArray$1 = function stringToByteArray$1(str) {
            // TODO(user): Use native implementations if/when available
            var out = [];
            var p = 0;

            for (var i = 0; i < str.length; i++) {
              var c = str.charCodeAt(i);

              if (c < 128) {
                out[p++] = c;
              } else if (c < 2048) {
                out[p++] = c >> 6 | 192;
                out[p++] = c & 63 | 128;
              } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
                // Surrogate Pair
                c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
                out[p++] = c >> 18 | 240;
                out[p++] = c >> 12 & 63 | 128;
                out[p++] = c >> 6 & 63 | 128;
                out[p++] = c & 63 | 128;
              } else {
                out[p++] = c >> 12 | 224;
                out[p++] = c >> 6 & 63 | 128;
                out[p++] = c & 63 | 128;
              }
            }

            return out;
          };
          /**
           * Turns an array of numbers into the string given by the concatenation of the
           * characters to which the numbers correspond.
           * @param bytes Array of numbers representing characters.
           * @return Stringification of the array.
           */


          var byteArrayToString = function byteArrayToString(bytes) {
            // TODO(user): Use native implementations if/when available
            var out = [];
            var pos = 0,
                c = 0;

            while (pos < bytes.length) {
              var c1 = bytes[pos++];

              if (c1 < 128) {
                out[c++] = String.fromCharCode(c1);
              } else if (c1 > 191 && c1 < 224) {
                var c2 = bytes[pos++];
                out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
              } else if (c1 > 239 && c1 < 365) {
                // Surrogate Pair
                var _c2 = bytes[pos++];
                var c3 = bytes[pos++];
                var c4 = bytes[pos++];
                var u = ((c1 & 7) << 18 | (_c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
                out[c++] = String.fromCharCode(0xd800 + (u >> 10));
                out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
              } else {
                var _c3 = bytes[pos++];
                var _c4 = bytes[pos++];
                out[c++] = String.fromCharCode((c1 & 15) << 12 | (_c3 & 63) << 6 | _c4 & 63);
              }
            }

            return out.join('');
          }; // We define it as an object literal instead of a class because a class compiled down to es5 can't
          // be treeshaked. https://github.com/rollup/rollup/issues/1691
          // Static lookup maps, lazily populated by init_()


          var base64 = {
            /**
             * Maps bytes to characters.
             */
            byteToCharMap_: null,

            /**
             * Maps characters to bytes.
             */
            charToByteMap_: null,

            /**
             * Maps bytes to websafe characters.
             * @private
             */
            byteToCharMapWebSafe_: null,

            /**
             * Maps websafe characters to bytes.
             * @private
             */
            charToByteMapWebSafe_: null,

            /**
             * Our default alphabet, shared between
             * ENCODED_VALS and ENCODED_VALS_WEBSAFE
             */
            ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

            /**
             * Our default alphabet. Value 64 (=) is special; it means "nothing."
             */
            get ENCODED_VALS() {
              return this.ENCODED_VALS_BASE + '+/=';
            },

            /**
             * Our websafe alphabet.
             */
            get ENCODED_VALS_WEBSAFE() {
              return this.ENCODED_VALS_BASE + '-_.';
            },

            /**
             * Whether this browser supports the atob and btoa functions. This extension
             * started at Mozilla but is now implemented by many browsers. We use the
             * ASSUME_* variables to avoid pulling in the full useragent detection library
             * but still allowing the standard per-browser compilations.
             *
             */
            HAS_NATIVE_SUPPORT: typeof atob === 'function',

            /**
             * Base64-encode an array of bytes.
             *
             * @param input An array of bytes (numbers with
             *     value in [0, 255]) to encode.
             * @param webSafe Boolean indicating we should use the
             *     alternative alphabet.
             * @return The base64 encoded string.
             */
            encodeByteArray: function encodeByteArray(input, webSafe) {
              if (!Array.isArray(input)) {
                throw Error('encodeByteArray takes an array as a parameter');
              }

              this.init_();
              var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
              var output = [];

              for (var i = 0; i < input.length; i += 3) {
                var byte1 = input[i];
                var haveByte2 = i + 1 < input.length;
                var byte2 = haveByte2 ? input[i + 1] : 0;
                var haveByte3 = i + 2 < input.length;
                var byte3 = haveByte3 ? input[i + 2] : 0;
                var outByte1 = byte1 >> 2;
                var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
                var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
                var outByte4 = byte3 & 0x3f;

                if (!haveByte3) {
                  outByte4 = 64;

                  if (!haveByte2) {
                    outByte3 = 64;
                  }
                }

                output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
              }

              return output.join('');
            },

            /**
             * Base64-encode a string.
             *
             * @param input A string to encode.
             * @param webSafe If true, we should use the
             *     alternative alphabet.
             * @return The base64 encoded string.
             */
            encodeString: function encodeString(input, webSafe) {
              // Shortcut for Mozilla browsers that implement
              // a native base64 encoder in the form of "btoa/atob"
              if (this.HAS_NATIVE_SUPPORT && !webSafe) {
                return btoa(input);
              }

              return this.encodeByteArray(stringToByteArray$1(input), webSafe);
            },

            /**
             * Base64-decode a string.
             *
             * @param input to decode.
             * @param webSafe True if we should use the
             *     alternative alphabet.
             * @return string representing the decoded value.
             */
            decodeString: function decodeString(input, webSafe) {
              // Shortcut for Mozilla browsers that implement
              // a native base64 encoder in the form of "btoa/atob"
              if (this.HAS_NATIVE_SUPPORT && !webSafe) {
                return atob(input);
              }

              return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
            },

            /**
             * Base64-decode a string.
             *
             * In base-64 decoding, groups of four characters are converted into three
             * bytes.  If the encoder did not apply padding, the input length may not
             * be a multiple of 4.
             *
             * In this case, the last group will have fewer than 4 characters, and
             * padding will be inferred.  If the group has one or two characters, it decodes
             * to one byte.  If the group has three characters, it decodes to two bytes.
             *
             * @param input Input to decode.
             * @param webSafe True if we should use the web-safe alphabet.
             * @return bytes representing the decoded value.
             */
            decodeStringToByteArray: function decodeStringToByteArray(input, webSafe) {
              this.init_();
              var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
              var output = [];

              for (var i = 0; i < input.length;) {
                var byte1 = charToByteMap[input.charAt(i++)];
                var haveByte2 = i < input.length;
                var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
                ++i;
                var haveByte3 = i < input.length;
                var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
                ++i;
                var haveByte4 = i < input.length;
                var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
                ++i;

                if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                  throw new DecodeBase64StringError();
                }

                var outByte1 = byte1 << 2 | byte2 >> 4;
                output.push(outByte1);

                if (byte3 !== 64) {
                  var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
                  output.push(outByte2);

                  if (byte4 !== 64) {
                    var outByte3 = byte3 << 6 & 0xc0 | byte4;
                    output.push(outByte3);
                  }
                }
              }

              return output;
            },

            /**
             * Lazy static initialization function. Called before
             * accessing any of the static map variables.
             * @private
             */
            init_: function init_() {
              if (!this.byteToCharMap_) {
                this.byteToCharMap_ = {};
                this.charToByteMap_ = {};
                this.byteToCharMapWebSafe_ = {};
                this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

                for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                  this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                  this.charToByteMap_[this.byteToCharMap_[i]] = i;
                  this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                  this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

                  if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                  }
                }
              }
            }
          };
          /**
           * An error encountered while decoding base64 string.
           */

          var DecodeBase64StringError = /*#__PURE__*/function (_Error) {
            _inheritsLoose(DecodeBase64StringError, _Error);

            function DecodeBase64StringError() {
              var _this3;

              _this3 = _Error.apply(this, arguments) || this;
              _this3.name = 'DecodeBase64StringError';
              return _this3;
            }

            return DecodeBase64StringError;
          }( /*#__PURE__*/_wrapNativeSuper(Error));
          /**
           * URL-safe base64 encoding
           */


          var base64Encode = function base64Encode(str) {
            var utf8Bytes = stringToByteArray$1(str);
            return base64.encodeByteArray(utf8Bytes, true);
          };
          /**
           * URL-safe base64 encoding (without "." padding in the end).
           * e.g. Used in JSON Web Token (JWT) parts.
           */


          var base64urlEncodeWithoutPadding = function base64urlEncodeWithoutPadding(str) {
            // Use base64url encoding and remove padding in the end (dot characters).
            return base64Encode(str).replace(/\./g, '');
          };
          /**
           * URL-safe base64 decoding
           *
           * NOTE: DO NOT use the global atob() function - it does NOT support the
           * base64Url variant encoding.
           *
           * @param str To be decoded
           * @return Decoded result, if possible
           */


          var base64Decode = function base64Decode(str) {
            try {
              return base64.decodeString(str, true);
            } catch (e) {
              console.error('base64Decode failed: ', e);
            }

            return null;
          };
          /**
           * @license
           * Copyright 2022 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Polyfill for `globalThis` object.
           * @returns the `globalThis` object for the given environment.
           * @public
           */


          function getGlobal() {
            if (typeof self !== 'undefined') {
              return self;
            }

            if (typeof window !== 'undefined') {
              return window;
            }

            if (typeof global !== 'undefined') {
              return global;
            }

            throw new Error('Unable to locate global object.');
          }
          /**
           * @license
           * Copyright 2022 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var getDefaultsFromGlobal = function getDefaultsFromGlobal() {
            return getGlobal().__FIREBASE_DEFAULTS__;
          };
          /**
           * Attempt to read defaults from a JSON string provided to
           * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
           * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
           * The dots are in parens because certain compilers (Vite?) cannot
           * handle seeing that variable in comments.
           * See https://github.com/firebase/firebase-js-sdk/issues/6838
           */


          var getDefaultsFromEnvVariable = function getDefaultsFromEnvVariable() {
            if (typeof process === 'undefined' || typeof process.env === 'undefined') {
              return;
            }

            var defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;

            if (defaultsJsonString) {
              return JSON.parse(defaultsJsonString);
            }
          };

          var getDefaultsFromCookie = function getDefaultsFromCookie() {
            if (typeof document === 'undefined') {
              return;
            }

            var match;

            try {
              match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
            } catch (e) {
              // Some environments such as Angular Universal SSR have a
              // `document` object but error on accessing `document.cookie`.
              return;
            }

            var decoded = match && base64Decode(match[1]);
            return decoded && JSON.parse(decoded);
          };
          /**
           * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
           * (1) if such an object exists as a property of `globalThis`
           * (2) if such an object was provided on a shell environment variable
           * (3) if such an object exists in a cookie
           * @public
           */


          var getDefaults = function getDefaults() {
            try {
              return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
            } catch (e) {
              /**
               * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
               * to any environment case we have not accounted for. Log to
               * info instead of swallowing so we can find these unknown cases
               * and add paths for them if needed.
               */
              console.info("Unable to get __FIREBASE_DEFAULTS__ due to: " + e);
              return;
            }
          };
          /**
           * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
           * for the given product.
           * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
           * @public
           */


          var getDefaultEmulatorHost = function getDefaultEmulatorHost(productName) {
            var _a, _b;

            return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
          };
          /**
           * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
           * @public
           */


          var getDefaultAppConfig = function getDefaultAppConfig() {
            var _a;

            return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
          };
          /**
           * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
           * prefixed by "_")
           * @public
           */


          var getExperimentalSetting = function getExperimentalSetting(name) {
            var _a;

            return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a["_" + name];
          };
          /**
           * @license
           * Copyright 2017 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var Deferred = /*#__PURE__*/function () {
            function Deferred() {
              var _this4 = this;

              this.reject = function () {};

              this.resolve = function () {};

              this.promise = new Promise(function (resolve, reject) {
                _this4.resolve = resolve;
                _this4.reject = reject;
              });
            }
            /**
             * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
             * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
             * and returns a node-style callback which will resolve or reject the Deferred's promise.
             */


            var _proto2 = Deferred.prototype;

            _proto2.wrapCallback = function wrapCallback(callback) {
              var _this5 = this;

              return function (error, value) {
                if (error) {
                  _this5.reject(error);
                } else {
                  _this5.resolve(value);
                }

                if (typeof callback === 'function') {
                  // Attaching noop handler just in case developer wasn't expecting
                  // promises
                  _this5.promise["catch"](function () {}); // Some of our callbacks don't expect a value and our own tests
                  // assert that the parameter length is 1


                  if (callback.length === 1) {
                    callback(error);
                  } else {
                    callback(error, value);
                  }
                }
              };
            };

            return Deferred;
          }();
          /**
           * @license
           * Copyright 2017 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Returns navigator.userAgent string or '' if it's not defined.
           * @return user agent string
           */


          function getUA() {
            if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
              return navigator['userAgent'];
            } else {
              return '';
            }
          }
          /**
           * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
           *
           * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
           * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
           * wait for a callback.
           */


          function isMobileCordova() {
            return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
            // just to deal with this case would probably be a bad idea.
            !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
          }

          function isBrowserExtension() {
            var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
            return typeof runtime === 'object' && runtime.id !== undefined;
          }
          /**
           * Detect React Native.
           *
           * @return true if ReactNative environment is detected.
           */


          function isReactNative() {
            return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
          }
          /** Detects Internet Explorer. */


          function isIE() {
            var ua = getUA();
            return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
          }
          /**
           * This method checks if indexedDB is supported by current browser/service worker context
           * @return true if indexedDB is supported by current browser/service worker context
           */


          function isIndexedDBAvailable() {
            try {
              return typeof indexedDB === 'object';
            } catch (e) {
              return false;
            }
          }
          /**
           * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
           * if errors occur during the database open operation.
           *
           * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
           * private browsing)
           */


          function validateIndexedDBOpenable() {
            return new Promise(function (resolve, reject) {
              try {
                var preExist = true;
                var DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
                var request = self.indexedDB.open(DB_CHECK_NAME);

                request.onsuccess = function () {
                  request.result.close(); // delete database only when it doesn't pre-exist

                  if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                  }

                  resolve(true);
                };

                request.onupgradeneeded = function () {
                  preExist = false;
                };

                request.onerror = function () {
                  var _a;

                  reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
                };
              } catch (error) {
                reject(error);
              }
            });
          }
          /**
           * @license
           * Copyright 2017 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * @fileoverview Standardized Firebase Error.
           *
           * Usage:
           *
           *   // Typescript string literals for type-safe codes
           *   type Err =
           *     'unknown' |
           *     'object-not-found'
           *     ;
           *
           *   // Closure enum for type-safe error codes
           *   // at-enum {string}
           *   var Err = {
           *     UNKNOWN: 'unknown',
           *     OBJECT_NOT_FOUND: 'object-not-found',
           *   }
           *
           *   let errors: Map<Err, string> = {
           *     'generic-error': "Unknown error",
           *     'file-not-found': "Could not find file: {$file}",
           *   };
           *
           *   // Type-safe function - must pass a valid error code as param.
           *   let error = new ErrorFactory<Err>('service', 'Service', errors);
           *
           *   ...
           *   throw error.create(Err.GENERIC);
           *   ...
           *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
           *   ...
           *   // Service: Could not file file: foo.txt (service/file-not-found).
           *
           *   catch (e) {
           *     assert(e.message === "Could not find file: foo.txt.");
           *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
           *       console.log("Could not read file: " + e['file']);
           *     }
           *   }
           */


          var ERROR_NAME = 'FirebaseError'; // Based on code from:
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

          var FirebaseError = /*#__PURE__*/function (_Error2) {
            _inheritsLoose(FirebaseError, _Error2);

            function FirebaseError(
            /** The error code for this error. */
            code, message,
            /** Custom data for this error. */
            customData) {
              var _this6;

              _this6 = _Error2.call(this, message) || this;
              _this6.code = code;
              _this6.customData = customData;
              /** The custom name for all FirebaseErrors. */

              _this6.name = ERROR_NAME; // Fix For ES5
              // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

              Object.setPrototypeOf(_assertThisInitialized(_this6), FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
              // Only available on V8.

              if (Error.captureStackTrace) {
                Error.captureStackTrace(_assertThisInitialized(_this6), ErrorFactory.prototype.create);
              }

              return _this6;
            }

            return FirebaseError;
          }( /*#__PURE__*/_wrapNativeSuper(Error));

          var ErrorFactory = /*#__PURE__*/function () {
            function ErrorFactory(service, serviceName, errors) {
              this.service = service;
              this.serviceName = serviceName;
              this.errors = errors;
            }

            var _proto3 = ErrorFactory.prototype;

            _proto3.create = function create(code) {
              var customData = (arguments.length <= 1 ? undefined : arguments[1]) || {};
              var fullCode = this.service + "/" + code;
              var template = this.errors[code];
              var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

              var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
              var error = new FirebaseError(fullCode, fullMessage, customData);
              return error;
            };

            return ErrorFactory;
          }();

          function replaceTemplate(template, data) {
            return template.replace(PATTERN, function (_, key) {
              var value = data[key];
              return value != null ? String(value) : "<" + key + "?>";
            });
          }

          var PATTERN = /\{\$([^}]+)}/g;

          function isEmpty(obj) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                return false;
              }
            }

            return true;
          }
          /**
           * Deep equal two objects. Support Arrays and Objects.
           */


          function deepEqual(a, b) {
            if (a === b) {
              return true;
            }

            var aKeys = Object.keys(a);
            var bKeys = Object.keys(b);

            for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
              var k = _aKeys[_i];

              if (!bKeys.includes(k)) {
                return false;
              }

              var aProp = a[k];
              var bProp = b[k];

              if (isObject(aProp) && isObject(bProp)) {
                if (!deepEqual(aProp, bProp)) {
                  return false;
                }
              } else if (aProp !== bProp) {
                return false;
              }
            }

            for (var _i2 = 0, _bKeys = bKeys; _i2 < _bKeys.length; _i2++) {
              var _k = _bKeys[_i2];

              if (!aKeys.includes(_k)) {
                return false;
              }
            }

            return true;
          }

          function isObject(thing) {
            return thing !== null && typeof thing === 'object';
          }
          /**
           * @license
           * Copyright 2017 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
           * params object (e.g. {arg: 'val', arg2: 'val2'})
           * Note: You must prepend it with ? when adding it to a URL.
           */


          function querystring(querystringParams) {
            var params = [];

            var _loop = function _loop() {
              var _Object$entries$_i = _Object$entries[_i3],
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              if (Array.isArray(value)) {
                value.forEach(function (arrayVal) {
                  params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
                });
              } else {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
              }
            };

            for (var _i3 = 0, _Object$entries = Object.entries(querystringParams); _i3 < _Object$entries.length; _i3++) {
              _loop();
            }

            return params.length ? '&' + params.join('&') : '';
          }
          /**
           * Helper to make a Subscribe function (just like Promise helps make a
           * Thenable).
           *
           * @param executor Function which can make calls to a single Observer
           *     as a proxy.
           * @param onNoObservers Callback when count of Observers goes to zero.
           */


          function createSubscribe(executor, onNoObservers) {
            var proxy = new ObserverProxy(executor, onNoObservers);
            return proxy.subscribe.bind(proxy);
          }
          /**
           * Implement fan-out for any number of Observers attached via a subscribe
           * function.
           */


          var ObserverProxy = /*#__PURE__*/function () {
            /**
             * @param executor Function which can make calls to a single Observer
             *     as a proxy.
             * @param onNoObservers Callback when count of Observers goes to zero.
             */
            function ObserverProxy(executor, onNoObservers) {
              var _this7 = this;

              this.observers = [];
              this.unsubscribes = [];
              this.observerCount = 0; // Micro-task scheduling by calling task.then().

              this.task = Promise.resolve();
              this.finalized = false;
              this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
              // synchronously after the creation of the subscribe function
              // can still receive the very first value generated in the executor.

              this.task.then(function () {
                executor(_this7);
              })["catch"](function (e) {
                _this7.error(e);
              });
            }

            var _proto4 = ObserverProxy.prototype;

            _proto4.next = function next(value) {
              this.forEachObserver(function (observer) {
                observer.next(value);
              });
            };

            _proto4.error = function error(_error) {
              this.forEachObserver(function (observer) {
                observer.error(_error);
              });
              this.close(_error);
            };

            _proto4.complete = function complete() {
              this.forEachObserver(function (observer) {
                observer.complete();
              });
              this.close();
            }
            /**
             * Subscribe function that can be used to add an Observer to the fan-out list.
             *
             * - We require that no event is sent to a subscriber sychronously to their
             *   call to subscribe().
             */
            ;

            _proto4.subscribe = function subscribe(nextOrObserver, error, complete) {
              var _this8 = this;

              var observer;

              if (nextOrObserver === undefined && error === undefined && complete === undefined) {
                throw new Error('Missing Observer.');
              } // Assemble an Observer object when passed as callback functions.


              if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
                observer = nextOrObserver;
              } else {
                observer = {
                  next: nextOrObserver,
                  error: error,
                  complete: complete
                };
              }

              if (observer.next === undefined) {
                observer.next = noop;
              }

              if (observer.error === undefined) {
                observer.error = noop;
              }

              if (observer.complete === undefined) {
                observer.complete = noop;
              }

              var unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
              // just respond to the Observer with the final error or complete
              // event.

              if (this.finalized) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.task.then(function () {
                  try {
                    if (_this8.finalError) {
                      observer.error(_this8.finalError);
                    } else {
                      observer.complete();
                    }
                  } catch (e) {// nothing
                  }

                  return;
                });
              }

              this.observers.push(observer);
              return unsub;
            } // Unsubscribe is synchronous - we guarantee that no events are sent to
            // any unsubscribed Observer.
            ;

            _proto4.unsubscribeOne = function unsubscribeOne(i) {
              if (this.observers === undefined || this.observers[i] === undefined) {
                return;
              }

              delete this.observers[i];
              this.observerCount -= 1;

              if (this.observerCount === 0 && this.onNoObservers !== undefined) {
                this.onNoObservers(this);
              }
            };

            _proto4.forEachObserver = function forEachObserver(fn) {
              if (this.finalized) {
                // Already closed by previous event....just eat the additional values.
                return;
              } // Since sendOne calls asynchronously - there is no chance that
              // this.observers will become undefined.


              for (var i = 0; i < this.observers.length; i++) {
                this.sendOne(i, fn);
              }
            } // Call the Observer via one of it's callback function. We are careful to
            // confirm that the observe has not been unsubscribed since this asynchronous
            // function had been queued.
            ;

            _proto4.sendOne = function sendOne(i, fn) {
              var _this9 = this; // Execute the callback asynchronously
              // eslint-disable-next-line @typescript-eslint/no-floating-promises


              this.task.then(function () {
                if (_this9.observers !== undefined && _this9.observers[i] !== undefined) {
                  try {
                    fn(_this9.observers[i]);
                  } catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                      console.error(e);
                    }
                  }
                }
              });
            };

            _proto4.close = function close(err) {
              var _this10 = this;

              if (this.finalized) {
                return;
              }

              this.finalized = true;

              if (err !== undefined) {
                this.finalError = err;
              } // Proxy is no longer needed - garbage collect references
              // eslint-disable-next-line @typescript-eslint/no-floating-promises


              this.task.then(function () {
                _this10.observers = undefined;
                _this10.onNoObservers = undefined;
              });
            };

            return ObserverProxy;
          }();
          /**
           * Return true if the object passed in implements any of the named methods.
           */


          function implementsAnyMethods(obj, methods) {
            if (typeof obj !== 'object' || obj === null) {
              return false;
            }

            for (var _iterator = _createForOfIteratorHelperLoose(methods), _step; !(_step = _iterator()).done;) {
              var method = _step.value;

              if (method in obj && typeof obj[method] === 'function') {
                return true;
              }
            }

            return false;
          }

          function noop() {// do nothing
          }
          /**
           * @license
           * Copyright 2021 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function getModularInstance(service) {
            if (service && service._delegate) {
              return service._delegate;
            } else {
              return service;
            }
          }
          /**
           * Component for service name T, e.g. `auth`, `auth-internal`
           */


          var Component = /*#__PURE__*/function () {
            /**
             *
             * @param name The public service name, e.g. app, auth, firestore, database
             * @param instanceFactory Service factory responsible for creating the public interface
             * @param type whether the service provided by the component is public or private
             */
            function Component(name, instanceFactory, type) {
              this.name = name;
              this.instanceFactory = instanceFactory;
              this.type = type;
              this.multipleInstances = false;
              /**
               * Properties to be added to the service namespace
               */

              this.serviceProps = {};
              this.instantiationMode = "LAZY"
              /* InstantiationMode.LAZY */
              ;
              this.onInstanceCreated = null;
            }

            var _proto5 = Component.prototype;

            _proto5.setInstantiationMode = function setInstantiationMode(mode) {
              this.instantiationMode = mode;
              return this;
            };

            _proto5.setMultipleInstances = function setMultipleInstances(multipleInstances) {
              this.multipleInstances = multipleInstances;
              return this;
            };

            _proto5.setServiceProps = function setServiceProps(props) {
              this.serviceProps = props;
              return this;
            };

            _proto5.setInstanceCreatedCallback = function setInstanceCreatedCallback(callback) {
              this.onInstanceCreated = callback;
              return this;
            };

            return Component;
          }();
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var DEFAULT_ENTRY_NAME = '[DEFAULT]';
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
           * NameServiceMapping[T] is an alias for the type of the instance
           */

          var Provider = /*#__PURE__*/function () {
            function Provider(name, container) {
              this.name = name;
              this.container = container;
              this.component = null;
              this.instances = new Map();
              this.instancesDeferred = new Map();
              this.instancesOptions = new Map();
              this.onInitCallbacks = new Map();
            }
            /**
             * @param identifier A provider can provide mulitple instances of a service
             * if this.component.multipleInstances is true.
             */


            var _proto6 = Provider.prototype;

            _proto6.get = function get(identifier) {
              // if multipleInstances is not supported, use the default name
              var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

              if (!this.instancesDeferred.has(normalizedIdentifier)) {
                var deferred = new Deferred();
                this.instancesDeferred.set(normalizedIdentifier, deferred);

                if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
                  // initialize the service if it can be auto-initialized
                  try {
                    var instance = this.getOrInitializeService({
                      instanceIdentifier: normalizedIdentifier
                    });

                    if (instance) {
                      deferred.resolve(instance);
                    }
                  } catch (e) {// when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                  }
                }
              }

              return this.instancesDeferred.get(normalizedIdentifier).promise;
            };

            _proto6.getImmediate = function getImmediate(options) {
              var _a; // if multipleInstances is not supported, use the default name


              var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
              var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;

              if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
                try {
                  return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                  });
                } catch (e) {
                  if (optional) {
                    return null;
                  } else {
                    throw e;
                  }
                }
              } else {
                // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
                if (optional) {
                  return null;
                } else {
                  throw Error("Service " + this.name + " is not available");
                }
              }
            };

            _proto6.getComponent = function getComponent() {
              return this.component;
            };

            _proto6.setComponent = function setComponent(component) {
              if (component.name !== this.name) {
                throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
              }

              if (this.component) {
                throw Error("Component for " + this.name + " has already been provided");
              }

              this.component = component; // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)

              if (!this.shouldAutoInitialize()) {
                return;
              } // if the service is eager, initialize the default instance


              if (isComponentEager(component)) {
                try {
                  this.getOrInitializeService({
                    instanceIdentifier: DEFAULT_ENTRY_NAME
                  });
                } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
                  // initialization, it should not cause a fatal error.
                  // TODO: Investigate if we need to make it configurable, because some component may want to cause
                  // a fatal error in this case?
                }
              } // Create service instances for the pending promises and resolve them
              // NOTE: if this.multipleInstances is false, only the default instance will be created
              // and all promises with resolve with it regardless of the identifier.


              for (var _iterator2 = _createForOfIteratorHelperLoose(this.instancesDeferred.entries()), _step2; !(_step2 = _iterator2()).done;) {
                var _step2$value = _step2.value,
                    instanceIdentifier = _step2$value[0],
                    instanceDeferred = _step2$value[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

                try {
                  // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                  var instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                  });
                  instanceDeferred.resolve(instance);
                } catch (e) {// when the instance factory throws an exception, it should not cause
                  // a fatal error. We just leave the promise unresolved.
                }
              }
            };

            _proto6.clearInstance = function clearInstance(identifier) {
              if (identifier === void 0) {
                identifier = DEFAULT_ENTRY_NAME;
              }

              this.instancesDeferred["delete"](identifier);
              this.instancesOptions["delete"](identifier);
              this.instances["delete"](identifier);
            } // app.delete() will call this method on every provider to delete the services
            // TODO: should we mark the provider as deleted?
            ;

            _proto6["delete"] = /*#__PURE__*/function () {
              var _delete2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var services;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      services = Array.from(this.instances.values());
                      _context.next = 3;
                      return Promise.all([].concat(services.filter(function (service) {
                        return 'INTERNAL' in service;
                      }) // legacy services
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      .map(function (service) {
                        return service.INTERNAL["delete"]();
                      }), services.filter(function (service) {
                        return '_delete' in service;
                      }) // modularized services
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      .map(function (service) {
                        return service._delete();
                      })));

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));

              function _delete() {
                return _delete2.apply(this, arguments);
              }

              return _delete;
            }();

            _proto6.isComponentSet = function isComponentSet() {
              return this.component != null;
            };

            _proto6.isInitialized = function isInitialized(identifier) {
              if (identifier === void 0) {
                identifier = DEFAULT_ENTRY_NAME;
              }

              return this.instances.has(identifier);
            };

            _proto6.getOptions = function getOptions(identifier) {
              if (identifier === void 0) {
                identifier = DEFAULT_ENTRY_NAME;
              }

              return this.instancesOptions.get(identifier) || {};
            };

            _proto6.initialize = function initialize(opts) {
              if (opts === void 0) {
                opts = {};
              }

              var _opts = opts,
                  _opts$options = _opts.options,
                  options = _opts$options === void 0 ? {} : _opts$options;
              var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);

              if (this.isInitialized(normalizedIdentifier)) {
                throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
              }

              if (!this.isComponentSet()) {
                throw Error("Component " + this.name + " has not been registered yet");
              }

              var instance = this.getOrInitializeService({
                instanceIdentifier: normalizedIdentifier,
                options: options
              }); // resolve any pending promise waiting for the service instance

              for (var _iterator3 = _createForOfIteratorHelperLoose(this.instancesDeferred.entries()), _step3; !(_step3 = _iterator3()).done;) {
                var _step3$value = _step3.value,
                    instanceIdentifier = _step3$value[0],
                    instanceDeferred = _step3$value[1];
                var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

                if (normalizedIdentifier === normalizedDeferredIdentifier) {
                  instanceDeferred.resolve(instance);
                }
              }

              return instance;
            }
            /**
             *
             * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
             * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
             *
             * @param identifier An optional instance identifier
             * @returns a function to unregister the callback
             */
            ;

            _proto6.onInit = function onInit(callback, identifier) {
              var _a;

              var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
              var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
              existingCallbacks.add(callback);
              this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
              var existingInstance = this.instances.get(normalizedIdentifier);

              if (existingInstance) {
                callback(existingInstance, normalizedIdentifier);
              }

              return function () {
                existingCallbacks["delete"](callback);
              };
            }
            /**
             * Invoke onInit callbacks synchronously
             * @param instance the service instance`
             */
            ;

            _proto6.invokeOnInitCallbacks = function invokeOnInitCallbacks(instance, identifier) {
              var callbacks = this.onInitCallbacks.get(identifier);

              if (!callbacks) {
                return;
              }

              for (var _iterator4 = _createForOfIteratorHelperLoose(callbacks), _step4; !(_step4 = _iterator4()).done;) {
                var callback = _step4.value;

                try {
                  callback(instance, identifier);
                } catch (_a) {// ignore errors in the onInit callback
                }
              }
            };

            _proto6.getOrInitializeService = function getOrInitializeService(_ref) {
              var instanceIdentifier = _ref.instanceIdentifier,
                  _ref$options = _ref.options,
                  options = _ref$options === void 0 ? {} : _ref$options;
              var instance = this.instances.get(instanceIdentifier);

              if (!instance && this.component) {
                instance = this.component.instanceFactory(this.container, {
                  instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                  options: options
                });
                this.instances.set(instanceIdentifier, instance);
                this.instancesOptions.set(instanceIdentifier, options);
                /**
                 * Invoke onInit listeners.
                 * Note this.component.onInstanceCreated is different, which is used by the component creator,
                 * while onInit listeners are registered by consumers of the provider.
                 */

                this.invokeOnInitCallbacks(instance, instanceIdentifier);
                /**
                 * Order is important
                 * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
                 * makes `isInitialized()` return true.
                 */

                if (this.component.onInstanceCreated) {
                  try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                  } catch (_a) {// ignore errors in the onInstanceCreatedCallback
                  }
                }
              }

              return instance || null;
            };

            _proto6.normalizeInstanceIdentifier = function normalizeInstanceIdentifier(identifier) {
              if (identifier === void 0) {
                identifier = DEFAULT_ENTRY_NAME;
              }

              if (this.component) {
                return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
              } else {
                return identifier; // assume multiple instances are supported before the component is provided.
              }
            };

            _proto6.shouldAutoInitialize = function shouldAutoInitialize() {
              return !!this.component && this.component.instantiationMode !== "EXPLICIT"
              /* InstantiationMode.EXPLICIT */
              ;
            };

            return Provider;
          }(); // undefined should be passed to the service factory for the default instance


          function normalizeIdentifierForFactory(identifier) {
            return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
          }

          function isComponentEager(component) {
            return component.instantiationMode === "EAGER"
            /* InstantiationMode.EAGER */
            ;
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
           */


          var ComponentContainer = /*#__PURE__*/function () {
            function ComponentContainer(name) {
              this.name = name;
              this.providers = new Map();
            }
            /**
             *
             * @param component Component being added
             * @param overwrite When a component with the same name has already been registered,
             * if overwrite is true: overwrite the existing component with the new component and create a new
             * provider with the new component. It can be useful in tests where you want to use different mocks
             * for different tests.
             * if overwrite is false: throw an exception
             */


            var _proto7 = ComponentContainer.prototype;

            _proto7.addComponent = function addComponent(component) {
              var provider = this.getProvider(component.name);

              if (provider.isComponentSet()) {
                throw new Error("Component " + component.name + " has already been registered with " + this.name);
              }

              provider.setComponent(component);
            };

            _proto7.addOrOverwriteComponent = function addOrOverwriteComponent(component) {
              var provider = this.getProvider(component.name);

              if (provider.isComponentSet()) {
                // delete the existing provider from the container, so we can register the new component
                this.providers["delete"](component.name);
              }

              this.addComponent(component);
            }
            /**
             * getProvider provides a type safe interface where it can only be called with a field name
             * present in NameServiceMapping interface.
             *
             * Firebase SDKs providing services should extend NameServiceMapping interface to register
             * themselves.
             */
            ;

            _proto7.getProvider = function getProvider(name) {
              if (this.providers.has(name)) {
                return this.providers.get(name);
              } // create a Provider for a service that hasn't registered with Firebase


              var provider = new Provider(name, this);
              this.providers.set(name, provider);
              return provider;
            };

            _proto7.getProviders = function getProviders() {
              return Array.from(this.providers.values());
            };

            return ComponentContainer;
          }();
          /**
           * @license
           * Copyright 2017 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * The JS SDK supports 5 log levels and also allows a user the ability to
           * silence the logs altogether.
           *
           * The order is a follows:
           * DEBUG < VERBOSE < INFO < WARN < ERROR
           *
           * All of the log types above the current log level will be captured (i.e. if
           * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
           * `VERBOSE` logs will not)
           */


          var LogLevel;

          (function (LogLevel) {
            LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
            LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
            LogLevel[LogLevel["INFO"] = 2] = "INFO";
            LogLevel[LogLevel["WARN"] = 3] = "WARN";
            LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
            LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
          })(LogLevel || (LogLevel = {}));

          var levelStringToEnum = {
            'debug': LogLevel.DEBUG,
            'verbose': LogLevel.VERBOSE,
            'info': LogLevel.INFO,
            'warn': LogLevel.WARN,
            'error': LogLevel.ERROR,
            'silent': LogLevel.SILENT
          };
          /**
           * The default log level
           */

          var defaultLogLevel = LogLevel.INFO;
          /**
           * By default, `console.debug` is not displayed in the developer console (in
           * chrome). To avoid forcing users to have to opt-in to these logs twice
           * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
           * logs to the `console.log` function.
           */

          var ConsoleMethod = (_ConsoleMethod = {}, _ConsoleMethod[LogLevel.DEBUG] = 'log', _ConsoleMethod[LogLevel.VERBOSE] = 'log', _ConsoleMethod[LogLevel.INFO] = 'info', _ConsoleMethod[LogLevel.WARN] = 'warn', _ConsoleMethod[LogLevel.ERROR] = 'error', _ConsoleMethod);
          /**
           * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
           * messages on to their corresponding console counterparts (if the log method
           * is supported by the current log level)
           */

          var defaultLogHandler = function defaultLogHandler(instance, logType) {
            if (logType < instance.logLevel) {
              return;
            }

            var now = new Date().toISOString();
            var method = ConsoleMethod[logType];

            if (method) {
              var _console;

              for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
                args[_key2 - 2] = arguments[_key2];
              }

              (_console = console)[method].apply(_console, ["[" + now + "]  " + instance.name + ":"].concat(args));
            } else {
              throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
            }
          };

          var Logger = /*#__PURE__*/function () {
            /**
             * Gives you an instance of a Logger to capture messages according to
             * Firebase's logging scheme.
             *
             * @param name The name that the logs will be associated with
             */
            function Logger(name) {
              this.name = name;
              /**
               * The log level of the given Logger instance.
               */

              this._logLevel = defaultLogLevel;
              /**
               * The main (internal) log handler for the Logger instance.
               * Can be set to a new function in internal package code but not by user.
               */

              this._logHandler = defaultLogHandler;
              /**
               * The optional, additional, user-defined log handler for the Logger instance.
               */

              this._userLogHandler = null;
            }

            var _proto8 = Logger.prototype; // Workaround for setter/getter having to be the same type.

            _proto8.setLogLevel = function setLogLevel(val) {
              this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
            };
            /**
             * The functions below are all based on the `console` interface
             */


            _proto8.debug = function debug() {
              for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                args[_key3] = arguments[_key3];
              }

              this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.DEBUG].concat(args));

              this._logHandler.apply(this, [this, LogLevel.DEBUG].concat(args));
            };

            _proto8.log = function log() {
              for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
                args[_key4] = arguments[_key4];
              }

              this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.VERBOSE].concat(args));

              this._logHandler.apply(this, [this, LogLevel.VERBOSE].concat(args));
            };

            _proto8.info = function info() {
              for (var _len4 = arguments.length, args = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
                args[_key5] = arguments[_key5];
              }

              this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.INFO].concat(args));

              this._logHandler.apply(this, [this, LogLevel.INFO].concat(args));
            };

            _proto8.warn = function warn() {
              for (var _len5 = arguments.length, args = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
                args[_key6] = arguments[_key6];
              }

              this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.WARN].concat(args));

              this._logHandler.apply(this, [this, LogLevel.WARN].concat(args));
            };

            _proto8.error = function error() {
              for (var _len6 = arguments.length, args = new Array(_len6), _key7 = 0; _key7 < _len6; _key7++) {
                args[_key7] = arguments[_key7];
              }

              this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.ERROR].concat(args));

              this._logHandler.apply(this, [this, LogLevel.ERROR].concat(args));
            };

            _createClass(Logger, [{
              key: "logLevel",
              get: function get() {
                return this._logLevel;
              },
              set: function set(val) {
                if (!(val in LogLevel)) {
                  throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
                }

                this._logLevel = val;
              }
            }, {
              key: "logHandler",
              get: function get() {
                return this._logHandler;
              },
              set: function set(val) {
                if (typeof val !== 'function') {
                  throw new TypeError('Value assigned to `logHandler` must be a function');
                }

                this._logHandler = val;
              }
            }, {
              key: "userLogHandler",
              get: function get() {
                return this._userLogHandler;
              },
              set: function set(val) {
                this._userLogHandler = val;
              }
            }]);

            return Logger;
          }();

          var instanceOfAny = function instanceOfAny(object, constructors) {
            return constructors.some(function (c) {
              return object instanceof c;
            });
          };

          var idbProxyableTypes;
          var cursorAdvanceMethods; // This is a function to prevent it throwing up in node environments.

          function getIdbProxyableTypes() {
            return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
          } // This is a function to prevent it throwing up in node environments.


          function getCursorAdvanceMethods() {
            return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype["continue"], IDBCursor.prototype.continuePrimaryKey]);
          }

          var cursorRequestMap = new WeakMap();
          var transactionDoneMap = new WeakMap();
          var transactionStoreNamesMap = new WeakMap();
          var transformCache = new WeakMap();
          var reverseTransformCache = new WeakMap();

          function promisifyRequest(request) {
            var promise = new Promise(function (resolve, reject) {
              var unlisten = function unlisten() {
                request.removeEventListener('success', success);
                request.removeEventListener('error', error);
              };

              var success = function success() {
                resolve(wrap(request.result));
                unlisten();
              };

              var error = function error() {
                reject(request.error);
                unlisten();
              };

              request.addEventListener('success', success);
              request.addEventListener('error', error);
            });
            promise.then(function (value) {
              // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
              // (see wrapFunction).
              if (value instanceof IDBCursor) {
                cursorRequestMap.set(value, request);
              } // Catching to avoid "Uncaught Promise exceptions"

            })["catch"](function () {}); // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
            // is because we create many promises from a single IDBRequest.

            reverseTransformCache.set(promise, request);
            return promise;
          }

          function cacheDonePromiseForTransaction(tx) {
            // Early bail if we've already created a done promise for this transaction.
            if (transactionDoneMap.has(tx)) return;
            var done = new Promise(function (resolve, reject) {
              var unlisten = function unlisten() {
                tx.removeEventListener('complete', complete);
                tx.removeEventListener('error', error);
                tx.removeEventListener('abort', error);
              };

              var complete = function complete() {
                resolve();
                unlisten();
              };

              var error = function error() {
                reject(tx.error || new DOMException('AbortError', 'AbortError'));
                unlisten();
              };

              tx.addEventListener('complete', complete);
              tx.addEventListener('error', error);
              tx.addEventListener('abort', error);
            }); // Cache it for later retrieval.

            transactionDoneMap.set(tx, done);
          }

          var idbProxyTraps = {
            get: function get(target, prop, receiver) {
              if (target instanceof IDBTransaction) {
                // Special handling for transaction.done.
                if (prop === 'done') return transactionDoneMap.get(target); // Polyfill for objectStoreNames because of Edge.

                if (prop === 'objectStoreNames') {
                  return target.objectStoreNames || transactionStoreNamesMap.get(target);
                } // Make tx.store return the only store in the transaction, or undefined if there are many.


                if (prop === 'store') {
                  return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
                }
              } // Else transform whatever we get back.


              return wrap(target[prop]);
            },
            set: function set(target, prop, value) {
              target[prop] = value;
              return true;
            },
            has: function has(target, prop) {
              if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
                return true;
              }

              return prop in target;
            }
          };

          function replaceTraps(callback) {
            idbProxyTraps = callback(idbProxyTraps);
          }

          function wrapFunction(func) {
            // Due to expected object equality (which is enforced by the caching in `wrap`), we
            // only create one new func per func.
            // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
            if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
              return function (storeNames) {
                for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key8 = 1; _key8 < _len7; _key8++) {
                  args[_key8 - 1] = arguments[_key8];
                }

                var tx = func.call.apply(func, [unwrap(this), storeNames].concat(args));
                transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
                return wrap(tx);
              };
            } // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
            // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
            // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
            // with real promises, so each advance methods returns a new promise for the cursor object, or
            // undefined if the end of the cursor has been reached.


            if (getCursorAdvanceMethods().includes(func)) {
              return function () {
                for (var _len8 = arguments.length, args = new Array(_len8), _key9 = 0; _key9 < _len8; _key9++) {
                  args[_key9] = arguments[_key9];
                } // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
                // the original object.


                func.apply(unwrap(this), args);
                return wrap(cursorRequestMap.get(this));
              };
            }

            return function () {
              for (var _len9 = arguments.length, args = new Array(_len9), _key10 = 0; _key10 < _len9; _key10++) {
                args[_key10] = arguments[_key10];
              } // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
              // the original object.


              return wrap(func.apply(unwrap(this), args));
            };
          }

          function transformCachableValue(value) {
            if (typeof value === 'function') return wrapFunction(value); // This doesn't return, it just creates a 'done' promise for the transaction,
            // which is later returned for transaction.done (see idbObjectHandler).

            if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
            if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps); // Return the same value back if we're not going to transform it.

            return value;
          }

          function wrap(value) {
            // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
            // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
            if (value instanceof IDBRequest) return promisifyRequest(value); // If we've already transformed this value before, reuse the transformed value.
            // This is faster, but it also provides object equality.

            if (transformCache.has(value)) return transformCache.get(value);
            var newValue = transformCachableValue(value); // Not all types are transformed.
            // These may be primitive types, so they can't be WeakMap keys.

            if (newValue !== value) {
              transformCache.set(value, newValue);
              reverseTransformCache.set(newValue, value);
            }

            return newValue;
          }

          var unwrap = function unwrap(value) {
            return reverseTransformCache.get(value);
          };
          /**
           * Open a database.
           *
           * @param name Name of the database.
           * @param version Schema version.
           * @param callbacks Additional callbacks.
           */


          function openDB(name, version, _temp) {
            var _ref2 = _temp === void 0 ? {} : _temp,
                blocked = _ref2.blocked,
                upgrade = _ref2.upgrade,
                blocking = _ref2.blocking,
                terminated = _ref2.terminated;

            var request = indexedDB.open(name, version);
            var openPromise = wrap(request);

            if (upgrade) {
              request.addEventListener('upgradeneeded', function (event) {
                upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
              });
            }

            if (blocked) {
              request.addEventListener('blocked', function (event) {
                return blocked( // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
                event.oldVersion, event.newVersion, event);
              });
            }

            openPromise.then(function (db) {
              if (terminated) db.addEventListener('close', function () {
                return terminated();
              });

              if (blocking) {
                db.addEventListener('versionchange', function (event) {
                  return blocking(event.oldVersion, event.newVersion, event);
                });
              }
            })["catch"](function () {});
            return openPromise;
          }

          var readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
          var writeMethods = ['put', 'add', 'delete', 'clear'];
          var cachedMethods = new Map();

          function getMethod(target, prop) {
            if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
              return;
            }

            if (cachedMethods.get(prop)) return cachedMethods.get(prop);
            var targetFuncName = prop.replace(/FromIndex$/, '');
            var useIndex = prop !== targetFuncName;
            var isWrite = writeMethods.includes(targetFuncName);

            if ( // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
            !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
              return;
            }

            var method = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(storeName) {
                var _target;

                var tx,
                    target,
                    _len10,
                    args,
                    _key11,
                    _args2 = arguments;

                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
                      tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
                      target = tx.store;

                      for (_len10 = _args2.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key11 = 1; _key11 < _len10; _key11++) {
                        args[_key11 - 1] = _args2[_key11];
                      }

                      if (useIndex) target = target.index(args.shift()); // Must reject if op rejects.
                      // If it's a write operation, must reject if tx.done rejects.
                      // Must reject with op rejection first.
                      // Must resolve with op value.
                      // Must handle both promises (no unhandled rejections)

                      _context2.next = 6;
                      return Promise.all([(_target = target)[targetFuncName].apply(_target, args), isWrite && tx.done]);

                    case 6:
                      return _context2.abrupt("return", _context2.sent[0]);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2, this);
              }));

              return function method(_x) {
                return _ref3.apply(this, arguments);
              };
            }();

            cachedMethods.set(prop, method);
            return method;
          }

          replaceTraps(function (oldTraps) {
            return _extends({}, oldTraps, {
              get: function get(target, prop, receiver) {
                return getMethod(target, prop) || oldTraps.get(target, prop, receiver);
              },
              has: function has(target, prop) {
                return !!getMethod(target, prop) || oldTraps.has(target, prop);
              }
            });
          });
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          var PlatformLoggerServiceImpl = /*#__PURE__*/function () {
            function PlatformLoggerServiceImpl(container) {
              this.container = container;
            } // In initial implementation, this will be called by installations on
            // auth token refresh, and installations will send this string.


            var _proto9 = PlatformLoggerServiceImpl.prototype;

            _proto9.getPlatformInfoString = function getPlatformInfoString() {
              var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
              // version components.

              return providers.map(function (provider) {
                if (isVersionServiceProvider(provider)) {
                  var service = provider.getImmediate();
                  return service.library + "/" + service.version;
                } else {
                  return null;
                }
              }).filter(function (logString) {
                return logString;
              }).join(' ');
            };

            return PlatformLoggerServiceImpl;
          }();
          /**
           *
           * @param provider check if this provider provides a VersionService
           *
           * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
           * provides VersionService. The provider is not necessarily a 'app-version'
           * provider.
           */


          function isVersionServiceProvider(provider) {
            var component = provider.getComponent();
            return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
            /* ComponentType.VERSION */
            ;
          }

          var name$p = "@firebase/app";
          var version$1 = "0.10.7";
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          var logger = new Logger('@firebase/app');
          var name$o = "@firebase/app-compat";
          var name$n = "@firebase/analytics-compat";
          var name$m = "@firebase/analytics";
          var name$l = "@firebase/app-check-compat";
          var name$k = "@firebase/app-check";
          var name$j = "@firebase/auth";
          var name$i = "@firebase/auth-compat";
          var name$h = "@firebase/database";
          var name$g = "@firebase/database-compat";
          var name$f = "@firebase/functions";
          var name$e = "@firebase/functions-compat";
          var name$d = "@firebase/installations";
          var name$c = "@firebase/installations-compat";
          var name$b = "@firebase/messaging";
          var name$a = "@firebase/messaging-compat";
          var name$9 = "@firebase/performance";
          var name$8 = "@firebase/performance-compat";
          var name$7 = "@firebase/remote-config";
          var name$6 = "@firebase/remote-config-compat";
          var name$5 = "@firebase/storage";
          var name$4 = "@firebase/storage-compat";
          var name$3 = "@firebase/firestore";
          var name$2 = "@firebase/vertexai-preview";
          var name$1 = "@firebase/firestore-compat";
          var name = "firebase";
          var version$2 = "10.12.4";
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * The default app name
           *
           * @internal
           */

          var DEFAULT_ENTRY_NAME$1 = '[DEFAULT]';
          var PLATFORM_LOG_STRING = (_PLATFORM_LOG_STRING = {}, _PLATFORM_LOG_STRING[name$p] = 'fire-core', _PLATFORM_LOG_STRING[name$o] = 'fire-core-compat', _PLATFORM_LOG_STRING[name$m] = 'fire-analytics', _PLATFORM_LOG_STRING[name$n] = 'fire-analytics-compat', _PLATFORM_LOG_STRING[name$k] = 'fire-app-check', _PLATFORM_LOG_STRING[name$l] = 'fire-app-check-compat', _PLATFORM_LOG_STRING[name$j] = 'fire-auth', _PLATFORM_LOG_STRING[name$i] = 'fire-auth-compat', _PLATFORM_LOG_STRING[name$h] = 'fire-rtdb', _PLATFORM_LOG_STRING[name$g] = 'fire-rtdb-compat', _PLATFORM_LOG_STRING[name$f] = 'fire-fn', _PLATFORM_LOG_STRING[name$e] = 'fire-fn-compat', _PLATFORM_LOG_STRING[name$d] = 'fire-iid', _PLATFORM_LOG_STRING[name$c] = 'fire-iid-compat', _PLATFORM_LOG_STRING[name$b] = 'fire-fcm', _PLATFORM_LOG_STRING[name$a] = 'fire-fcm-compat', _PLATFORM_LOG_STRING[name$9] = 'fire-perf', _PLATFORM_LOG_STRING[name$8] = 'fire-perf-compat', _PLATFORM_LOG_STRING[name$7] = 'fire-rc', _PLATFORM_LOG_STRING[name$6] = 'fire-rc-compat', _PLATFORM_LOG_STRING[name$5] = 'fire-gcs', _PLATFORM_LOG_STRING[name$4] = 'fire-gcs-compat', _PLATFORM_LOG_STRING[name$3] = 'fire-fst', _PLATFORM_LOG_STRING[name$1] = 'fire-fst-compat', _PLATFORM_LOG_STRING[name$2] = 'fire-vertex', _PLATFORM_LOG_STRING['fire-js'] = 'fire-js', _PLATFORM_LOG_STRING[name] = 'fire-js-all', _PLATFORM_LOG_STRING);
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * @internal
           */

          var _apps = new Map();
          /**
           * @internal
           */


          var _serverApps = new Map();
          /**
           * Registered components.
           *
           * @internal
           */
          // eslint-disable-next-line @typescript-eslint/no-explicit-any


          var _components = new Map();
          /**
           * @param component - the component being added to this app's container
           *
           * @internal
           */


          function _addComponent(app, component) {
            try {
              app.container.addComponent(component);
            } catch (e) {
              logger.debug("Component " + component.name + " failed to register with FirebaseApp " + app.name, e);
            }
          }
          /**
           *
           * @param component - the component to register
           * @returns whether or not the component is registered successfully
           *
           * @internal
           */


          function _registerComponent(component) {
            var componentName = component.name;

            if (_components.has(componentName)) {
              logger.debug("There were multiple attempts to register component " + componentName + ".");
              return false;
            }

            _components.set(componentName, component); // add the component to existing app instances


            for (var _iterator5 = _createForOfIteratorHelperLoose(_apps.values()), _step5; !(_step5 = _iterator5()).done;) {
              var app = _step5.value;

              _addComponent(app, component);
            }

            for (var _iterator6 = _createForOfIteratorHelperLoose(_serverApps.values()), _step6; !(_step6 = _iterator6()).done;) {
              var serverApp = _step6.value;

              _addComponent(serverApp, component);
            }

            return true;
          }
          /**
           *
           * @param app - FirebaseApp instance
           * @param name - service name
           *
           * @returns the provider for the service with the matching name
           *
           * @internal
           */


          function _getProvider(app, name) {
            var heartbeatController = app.container.getProvider('heartbeat').getImmediate({
              optional: true
            });

            if (heartbeatController) {
              void heartbeatController.triggerHeartbeat();
            }

            return app.container.getProvider(name);
          }
          /**
           *
           * @param obj - an object of type FirebaseApp.
           *
           * @returns true if the provided object is of type FirebaseServerAppImpl.
           *
           * @internal
           */


          function _isFirebaseServerApp(obj) {
            return obj.settings !== undefined;
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var ERRORS = (_ERRORS = {}, _ERRORS["no-app"
          /* AppError.NO_APP */
          ] = "No Firebase App '{$appName}' has been created - " + 'call initializeApp() first', _ERRORS["bad-app-name"
          /* AppError.BAD_APP_NAME */
          ] = "Illegal App name: '{$appName}'", _ERRORS["duplicate-app"
          /* AppError.DUPLICATE_APP */
          ] = "Firebase App named '{$appName}' already exists with different options or config", _ERRORS["app-deleted"
          /* AppError.APP_DELETED */
          ] = "Firebase App named '{$appName}' already deleted", _ERRORS["server-app-deleted"
          /* AppError.SERVER_APP_DELETED */
          ] = 'Firebase Server App has been deleted', _ERRORS["no-options"
          /* AppError.NO_OPTIONS */
          ] = 'Need to provide options, when not being deployed to hosting via source.', _ERRORS["invalid-app-argument"
          /* AppError.INVALID_APP_ARGUMENT */
          ] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _ERRORS["invalid-log-argument"
          /* AppError.INVALID_LOG_ARGUMENT */
          ] = 'First argument to `onLog` must be null or a function.', _ERRORS["idb-open"
          /* AppError.IDB_OPEN */
          ] = 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.', _ERRORS["idb-get"
          /* AppError.IDB_GET */
          ] = 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.', _ERRORS["idb-set"
          /* AppError.IDB_WRITE */
          ] = 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.', _ERRORS["idb-delete"
          /* AppError.IDB_DELETE */
          ] = 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.', _ERRORS["finalization-registry-not-supported"
          /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */
          ] = 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.', _ERRORS["invalid-server-app-environment"
          /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
          ] = 'FirebaseServerApp is not for use in browser environments.', _ERRORS);
          var ERROR_FACTORY = new ErrorFactory('app', 'Firebase', ERRORS);
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          var FirebaseAppImpl = /*#__PURE__*/function () {
            function FirebaseAppImpl(options, config, container) {
              var _this11 = this;

              this._isDeleted = false;
              this._options = Object.assign({}, options);
              this._config = Object.assign({}, config);
              this._name = config.name;
              this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
              this._container = container;
              this.container.addComponent(new Component('app', function () {
                return _this11;
              }, "PUBLIC"
              /* ComponentType.PUBLIC */
              ));
            }

            var _proto10 = FirebaseAppImpl.prototype;
            /**
             * This function will throw an Error if the App has already been deleted -
             * use before performing API actions on the App.
             */

            _proto10.checkDestroyed = function checkDestroyed() {
              if (this.isDeleted) {
                throw ERROR_FACTORY.create("app-deleted"
                /* AppError.APP_DELETED */
                , {
                  appName: this._name
                });
              }
            };

            _createClass(FirebaseAppImpl, [{
              key: "automaticDataCollectionEnabled",
              get: function get() {
                this.checkDestroyed();
                return this._automaticDataCollectionEnabled;
              },
              set: function set(val) {
                this.checkDestroyed();
                this._automaticDataCollectionEnabled = val;
              }
            }, {
              key: "name",
              get: function get() {
                this.checkDestroyed();
                return this._name;
              }
            }, {
              key: "options",
              get: function get() {
                this.checkDestroyed();
                return this._options;
              }
            }, {
              key: "config",
              get: function get() {
                this.checkDestroyed();
                return this._config;
              }
            }, {
              key: "container",
              get: function get() {
                return this._container;
              }
            }, {
              key: "isDeleted",
              get: function get() {
                return this._isDeleted;
              },
              set: function set(val) {
                this._isDeleted = val;
              }
            }]);

            return FirebaseAppImpl;
          }();
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * The current SDK version.
           *
           * @public
           */


          var SDK_VERSION = version$2;

          function initializeApp(_options, rawConfig) {
            if (rawConfig === void 0) {
              rawConfig = {};
            }

            var options = _options;

            if (typeof rawConfig !== 'object') {
              var _name = rawConfig;
              rawConfig = {
                name: _name
              };
            }

            var config = Object.assign({
              name: DEFAULT_ENTRY_NAME$1,
              automaticDataCollectionEnabled: false
            }, rawConfig);
            var name = config.name;

            if (typeof name !== 'string' || !name) {
              throw ERROR_FACTORY.create("bad-app-name"
              /* AppError.BAD_APP_NAME */
              , {
                appName: String(name)
              });
            }

            options || (options = getDefaultAppConfig());

            if (!options) {
              throw ERROR_FACTORY.create("no-options"
              /* AppError.NO_OPTIONS */
              );
            }

            var existingApp = _apps.get(name);

            if (existingApp) {
              // return the existing app if options and config deep equal the ones in the existing app.
              if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
                return existingApp;
              } else {
                throw ERROR_FACTORY.create("duplicate-app"
                /* AppError.DUPLICATE_APP */
                , {
                  appName: name
                });
              }
            }

            var container = new ComponentContainer(name);

            for (var _iterator7 = _createForOfIteratorHelperLoose(_components.values()), _step7; !(_step7 = _iterator7()).done;) {
              var component = _step7.value;
              container.addComponent(component);
            }

            var newApp = new FirebaseAppImpl(options, config, container);

            _apps.set(name, newApp);

            return newApp;
          }
          /**
           * Retrieves a {@link @firebase/app#FirebaseApp} instance.
           *
           * When called with no arguments, the default app is returned. When an app name
           * is provided, the app corresponding to that name is returned.
           *
           * An exception is thrown if the app being retrieved has not yet been
           * initialized.
           *
           * @example
           * ```javascript
           * // Return the default app
           * const app = getApp();
           * ```
           *
           * @example
           * ```javascript
           * // Return a named app
           * const otherApp = getApp("otherApp");
           * ```
           *
           * @param name - Optional name of the app to return. If no name is
           *   provided, the default is `"[DEFAULT]"`.
           *
           * @returns The app corresponding to the provided app name.
           *   If no app name is provided, the default app is returned.
           *
           * @public
           */


          function getApp(name) {
            if (name === void 0) {
              name = DEFAULT_ENTRY_NAME$1;
            }

            var app = _apps.get(name);

            if (!app && name === DEFAULT_ENTRY_NAME$1 && getDefaultAppConfig()) {
              return initializeApp();
            }

            if (!app) {
              throw ERROR_FACTORY.create("no-app"
              /* AppError.NO_APP */
              , {
                appName: name
              });
            }

            return app;
          }
          /**
           * Registers a library's name and version for platform logging purposes.
           * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
           * @param version - Current version of that library.
           * @param variant - Bundle variant, e.g., node, rn, etc.
           *
           * @public
           */


          function registerVersion(libraryKeyOrName, version, variant) {
            var _a; // TODO: We can use this check to whitelist strings when/if we set up
            // a good whitelist system.


            var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

            if (variant) {
              library += "-" + variant;
            }

            var libraryMismatch = library.match(/\s|\//);
            var versionMismatch = version.match(/\s|\//);

            if (libraryMismatch || versionMismatch) {
              var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];

              if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
              }

              if (libraryMismatch && versionMismatch) {
                warning.push('and');
              }

              if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
              }

              logger.warn(warning.join(' '));
              return;
            }

            _registerComponent(new Component(library + "-version", function () {
              return {
                library: library,
                version: version
              };
            }, "VERSION"
            /* ComponentType.VERSION */
            ));
          }
          /**
           * @license
           * Copyright 2021 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var DB_NAME = 'firebase-heartbeat-database';
          var DB_VERSION = 1;
          var STORE_NAME = 'firebase-heartbeat-store';
          var dbPromise = null;

          function getDbPromise() {
            if (!dbPromise) {
              dbPromise = openDB(DB_NAME, DB_VERSION, {
                upgrade: function upgrade(db, oldVersion) {
                  // We don't use 'break' in this switch statement, the fall-through
                  // behavior is what we want, because if there are multiple versions between
                  // the old version and the current version, we want ALL the migrations
                  // that correspond to those versions to run, not only the last one.
                  // eslint-disable-next-line default-case
                  switch (oldVersion) {
                    case 0:
                      try {
                        db.createObjectStore(STORE_NAME);
                      } catch (e) {
                        // Safari/iOS browsers throw occasional exceptions on
                        // db.createObjectStore() that may be a bug. Avoid blocking
                        // the rest of the app functionality.
                        console.warn(e);
                      }

                  }
                }
              })["catch"](function (e) {
                throw ERROR_FACTORY.create("idb-open"
                /* AppError.IDB_OPEN */
                , {
                  originalErrorMessage: e.message
                });
              });
            }

            return dbPromise;
          }

          function readHeartbeatsFromIndexedDB(_x2) {
            return _readHeartbeatsFromIndexedDB.apply(this, arguments);
          }

          function _readHeartbeatsFromIndexedDB() {
            _readHeartbeatsFromIndexedDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee92(app) {
              var db, tx, result, idbGetError;
              return _regeneratorRuntime().wrap(function _callee92$(_context92) {
                while (1) switch (_context92.prev = _context92.next) {
                  case 0:
                    _context92.prev = 0;
                    _context92.next = 3;
                    return getDbPromise();

                  case 3:
                    db = _context92.sent;
                    tx = db.transaction(STORE_NAME);
                    _context92.next = 7;
                    return tx.objectStore(STORE_NAME).get(computeKey(app));

                  case 7:
                    result = _context92.sent;
                    _context92.next = 10;
                    return tx.done;

                  case 10:
                    return _context92.abrupt("return", result);

                  case 13:
                    _context92.prev = 13;
                    _context92.t0 = _context92["catch"](0);

                    if (_context92.t0 instanceof FirebaseError) {
                      logger.warn(_context92.t0.message);
                    } else {
                      idbGetError = ERROR_FACTORY.create("idb-get"
                      /* AppError.IDB_GET */
                      , {
                        originalErrorMessage: _context92.t0 === null || _context92.t0 === void 0 ? void 0 : _context92.t0.message
                      });
                      logger.warn(idbGetError.message);
                    }

                  case 16:
                  case "end":
                    return _context92.stop();
                }
              }, _callee92, null, [[0, 13]]);
            }));
            return _readHeartbeatsFromIndexedDB.apply(this, arguments);
          }

          function writeHeartbeatsToIndexedDB(_x3, _x4) {
            return _writeHeartbeatsToIndexedDB.apply(this, arguments);
          }

          function _writeHeartbeatsToIndexedDB() {
            _writeHeartbeatsToIndexedDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee93(app, heartbeatObject) {
              var db, tx, objectStore, idbGetError;
              return _regeneratorRuntime().wrap(function _callee93$(_context93) {
                while (1) switch (_context93.prev = _context93.next) {
                  case 0:
                    _context93.prev = 0;
                    _context93.next = 3;
                    return getDbPromise();

                  case 3:
                    db = _context93.sent;
                    tx = db.transaction(STORE_NAME, 'readwrite');
                    objectStore = tx.objectStore(STORE_NAME);
                    _context93.next = 8;
                    return objectStore.put(heartbeatObject, computeKey(app));

                  case 8:
                    _context93.next = 10;
                    return tx.done;

                  case 10:
                    _context93.next = 15;
                    break;

                  case 12:
                    _context93.prev = 12;
                    _context93.t0 = _context93["catch"](0);

                    if (_context93.t0 instanceof FirebaseError) {
                      logger.warn(_context93.t0.message);
                    } else {
                      idbGetError = ERROR_FACTORY.create("idb-set"
                      /* AppError.IDB_WRITE */
                      , {
                        originalErrorMessage: _context93.t0 === null || _context93.t0 === void 0 ? void 0 : _context93.t0.message
                      });
                      logger.warn(idbGetError.message);
                    }

                  case 15:
                  case "end":
                    return _context93.stop();
                }
              }, _callee93, null, [[0, 12]]);
            }));
            return _writeHeartbeatsToIndexedDB.apply(this, arguments);
          }

          function computeKey(app) {
            return app.name + "!" + app.options.appId;
          }
          /**
           * @license
           * Copyright 2021 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var MAX_HEADER_BYTES = 1024; // 30 days

          var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;

          var HeartbeatServiceImpl = /*#__PURE__*/function () {
            function HeartbeatServiceImpl(container) {
              var _this12 = this;

              this.container = container;
              /**
               * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
               * the header string.
               * Stores one record per date. This will be consolidated into the standard
               * format of one record per user agent string before being sent as a header.
               * Populated from indexedDB when the controller is instantiated and should
               * be kept in sync with indexedDB.
               * Leave public for easier testing.
               */

              this._heartbeatsCache = null;
              var app = this.container.getProvider('app').getImmediate();
              this._storage = new HeartbeatStorageImpl(app);
              this._heartbeatsCachePromise = this._storage.read().then(function (result) {
                _this12._heartbeatsCache = result;
                return result;
              });
            }
            /**
             * Called to report a heartbeat. The function will generate
             * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
             * to IndexedDB.
             * Note that we only store one heartbeat per day. So if a heartbeat for today is
             * already logged, subsequent calls to this function in the same day will be ignored.
             */


            var _proto11 = HeartbeatServiceImpl.prototype;

            _proto11.triggerHeartbeat = /*#__PURE__*/function () {
              var _triggerHeartbeat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var _a, _b, platformLogger, agent, date;

                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      platformLogger = this.container.getProvider('platform-logger').getImmediate(); // This is the "Firebase user agent" string from the platform logger
                      // service, not the browser user agent.

                      agent = platformLogger.getPlatformInfoString();
                      date = getUTCDateString();

                      if (!(((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null)) {
                        _context3.next = 9;
                        break;
                      }

                      _context3.next = 6;
                      return this._heartbeatsCachePromise;

                    case 6:
                      this._heartbeatsCache = _context3.sent;

                      if (!(((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null)) {
                        _context3.next = 9;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 9:
                      if (!(this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some(function (singleDateHeartbeat) {
                        return singleDateHeartbeat.date === date;
                      }))) {
                        _context3.next = 13;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 13:
                      // There is no entry for this date. Create one.
                      this._heartbeatsCache.heartbeats.push({
                        date: date,
                        agent: agent
                      });

                    case 14:
                      // Remove entries older than 30 days.
                      this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(function (singleDateHeartbeat) {
                        var hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                        var now = Date.now();
                        return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
                      });
                      return _context3.abrupt("return", this._storage.overwrite(this._heartbeatsCache));

                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, this);
              }));

              function triggerHeartbeat() {
                return _triggerHeartbeat.apply(this, arguments);
              }

              return triggerHeartbeat;
            }()
            /**
             * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
             * It also clears all heartbeats from memory as well as in IndexedDB.
             *
             * NOTE: Consuming product SDKs should not send the header if this method
             * returns an empty string.
             */
            ;

            _proto11.getHeartbeatsHeader = /*#__PURE__*/function () {
              var _getHeartbeatsHeader = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                var _a, date, _extractHeartbeatsFor, heartbeatsToSend, unsentEntries, headerString;

                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this._heartbeatsCache === null)) {
                        _context4.next = 3;
                        break;
                      }

                      _context4.next = 3;
                      return this._heartbeatsCachePromise;

                    case 3:
                      if (!(((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0)) {
                        _context4.next = 5;
                        break;
                      }

                      return _context4.abrupt("return", '');

                    case 5:
                      date = getUTCDateString(); // Extract as many heartbeats from the cache as will fit under the size limit.

                      _extractHeartbeatsFor = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), heartbeatsToSend = _extractHeartbeatsFor.heartbeatsToSend, unsentEntries = _extractHeartbeatsFor.unsentEntries;
                      headerString = base64urlEncodeWithoutPadding(JSON.stringify({
                        version: 2,
                        heartbeats: heartbeatsToSend
                      })); // Store last sent date to prevent another being logged/sent for the same day.

                      this._heartbeatsCache.lastSentHeartbeatDate = date;

                      if (!(unsentEntries.length > 0)) {
                        _context4.next = 15;
                        break;
                      } // Store any unsent entries if they exist.


                      this._heartbeatsCache.heartbeats = unsentEntries; // This seems more likely than emptying the array (below) to lead to some odd state
                      // since the cache isn't empty and this will be called again on the next request,
                      // and is probably safest if we await it.

                      _context4.next = 13;
                      return this._storage.overwrite(this._heartbeatsCache);

                    case 13:
                      _context4.next = 17;
                      break;

                    case 15:
                      this._heartbeatsCache.heartbeats = []; // Do not wait for this, to reduce latency.

                      void this._storage.overwrite(this._heartbeatsCache);

                    case 17:
                      return _context4.abrupt("return", headerString);

                    case 18:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4, this);
              }));

              function getHeartbeatsHeader() {
                return _getHeartbeatsHeader.apply(this, arguments);
              }

              return getHeartbeatsHeader;
            }();

            return HeartbeatServiceImpl;
          }();

          function getUTCDateString() {
            var today = new Date(); // Returns date format 'YYYY-MM-DD'

            return today.toISOString().substring(0, 10);
          }

          function extractHeartbeatsForHeader(heartbeatsCache, maxSize) {
            if (maxSize === void 0) {
              maxSize = MAX_HEADER_BYTES;
            } // Heartbeats grouped by user agent in the standard format to be sent in
            // the header.


            var heartbeatsToSend = []; // Single date format heartbeats that are not sent.

            var unsentEntries = heartbeatsCache.slice();

            var _loop2 = function _loop2() {
              var singleDateHeartbeat = _step8.value; // Look for an existing entry with the same user agent.

              var heartbeatEntry = heartbeatsToSend.find(function (hb) {
                return hb.agent === singleDateHeartbeat.agent;
              });

              if (!heartbeatEntry) {
                // If no entry for this user agent exists, create one.
                heartbeatsToSend.push({
                  agent: singleDateHeartbeat.agent,
                  dates: [singleDateHeartbeat.date]
                });

                if (countBytes(heartbeatsToSend) > maxSize) {
                  // If the header would exceed max size, remove the added heartbeat
                  // entry and stop adding to the header.
                  heartbeatsToSend.pop();
                  return "break";
                }
              } else {
                heartbeatEntry.dates.push(singleDateHeartbeat.date); // If the header would exceed max size, remove the added date
                // and stop adding to the header.

                if (countBytes(heartbeatsToSend) > maxSize) {
                  heartbeatEntry.dates.pop();
                  return "break";
                }
              } // Pop unsent entry from queue. (Skipped if adding the entry exceeded
              // quota and the loop breaks early.)


              unsentEntries = unsentEntries.slice(1);
            };

            for (var _iterator8 = _createForOfIteratorHelperLoose(heartbeatsCache), _step8; !(_step8 = _iterator8()).done;) {
              var _ret = _loop2();

              if (_ret === "break") break;
            }

            return {
              heartbeatsToSend: heartbeatsToSend,
              unsentEntries: unsentEntries
            };
          }

          var HeartbeatStorageImpl = /*#__PURE__*/function () {
            function HeartbeatStorageImpl(app) {
              this.app = app;
              this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
            }

            var _proto12 = HeartbeatStorageImpl.prototype;

            _proto12.runIndexedDBEnvironmentCheck = /*#__PURE__*/function () {
              var _runIndexedDBEnvironmentCheck = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      if (isIndexedDBAvailable()) {
                        _context5.next = 4;
                        break;
                      }

                      return _context5.abrupt("return", false);

                    case 4:
                      return _context5.abrupt("return", validateIndexedDBOpenable().then(function () {
                        return true;
                      })["catch"](function () {
                        return false;
                      }));

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));

              function runIndexedDBEnvironmentCheck() {
                return _runIndexedDBEnvironmentCheck.apply(this, arguments);
              }

              return runIndexedDBEnvironmentCheck;
            }()
            /**
             * Read all heartbeats.
             */
            ;

            _proto12.read = /*#__PURE__*/function () {
              var _read = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var canUseIndexedDB, idbHeartbeatObject;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this._canUseIndexedDBPromise;

                    case 2:
                      canUseIndexedDB = _context6.sent;

                      if (canUseIndexedDB) {
                        _context6.next = 7;
                        break;
                      }

                      return _context6.abrupt("return", {
                        heartbeats: []
                      });

                    case 7:
                      _context6.next = 9;
                      return readHeartbeatsFromIndexedDB(this.app);

                    case 9:
                      idbHeartbeatObject = _context6.sent;

                      if (!(idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats)) {
                        _context6.next = 14;
                        break;
                      }

                      return _context6.abrupt("return", idbHeartbeatObject);

                    case 14:
                      return _context6.abrupt("return", {
                        heartbeats: []
                      });

                    case 15:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, this);
              }));

              function read() {
                return _read.apply(this, arguments);
              }

              return read;
            }() // overwrite the storage with the provided heartbeats
            ;

            _proto12.overwrite = /*#__PURE__*/function () {
              var _overwrite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(heartbeatsObject) {
                var _a, canUseIndexedDB, existingHeartbeatsObject;

                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this._canUseIndexedDBPromise;

                    case 2:
                      canUseIndexedDB = _context7.sent;

                      if (canUseIndexedDB) {
                        _context7.next = 7;
                        break;
                      }

                      return _context7.abrupt("return");

                    case 7:
                      _context7.next = 9;
                      return this.read();

                    case 9:
                      existingHeartbeatsObject = _context7.sent;
                      return _context7.abrupt("return", writeHeartbeatsToIndexedDB(this.app, {
                        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                        heartbeats: heartbeatsObject.heartbeats
                      }));

                    case 11:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7, this);
              }));

              function overwrite(_x5) {
                return _overwrite.apply(this, arguments);
              }

              return overwrite;
            }() // add heartbeats
            ;

            _proto12.add = /*#__PURE__*/function () {
              var _add = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(heartbeatsObject) {
                var _a, canUseIndexedDB, existingHeartbeatsObject;

                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this._canUseIndexedDBPromise;

                    case 2:
                      canUseIndexedDB = _context8.sent;

                      if (canUseIndexedDB) {
                        _context8.next = 7;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 7:
                      _context8.next = 9;
                      return this.read();

                    case 9:
                      existingHeartbeatsObject = _context8.sent;
                      return _context8.abrupt("return", writeHeartbeatsToIndexedDB(this.app, {
                        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                        heartbeats: [].concat(existingHeartbeatsObject.heartbeats, heartbeatsObject.heartbeats)
                      }));

                    case 11:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8, this);
              }));

              function add(_x6) {
                return _add.apply(this, arguments);
              }

              return add;
            }();

            return HeartbeatStorageImpl;
          }();
          /**
           * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
           * in a platform logging header JSON object, stringified, and converted
           * to base 64.
           */


          function countBytes(heartbeatsCache) {
            // base64 has a restricted set of characters, all of which should be 1 byte.
            return base64urlEncodeWithoutPadding( // heartbeatsCache wrapper properties
            JSON.stringify({
              version: 2,
              heartbeats: heartbeatsCache
            })).length;
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function registerCoreComponents(variant) {
            _registerComponent(new Component('platform-logger', function (container) {
              return new PlatformLoggerServiceImpl(container);
            }, "PRIVATE"
            /* ComponentType.PRIVATE */
            ));

            _registerComponent(new Component('heartbeat', function (container) {
              return new HeartbeatServiceImpl(container);
            }, "PRIVATE"
            /* ComponentType.PRIVATE */
            )); // Register `app` package.


            registerVersion(name$p, version$1, variant); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

            registerVersion(name$p, version$1, 'esm2017'); // Register platform SDK identifier (no version).

            registerVersion('fire-js', '');
          }
          /**
           * Firebase App
           *
           * @remarks This package coordinates the communication between the different Firebase components
           * @packageDocumentation
           */


          registerCoreComponents('');
          var name$q = "firebase";
          var version$3 = "10.12.4";
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          registerVersion(name$q, version$3, 'app');
          /******************************************************************************
          Copyright (c) Microsoft Corporation.
            Permission to use, copy, modify, and/or distribute this software for any
          purpose with or without fee is hereby granted.
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
          REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
          AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
          LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
          OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          PERFORMANCE OF THIS SOFTWARE.
          ***************************************************************************** */

          function __rest(s, e) {
            var t = {};

            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

            if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
          }

          var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
            var e = new Error(message);
            return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
          };

          function _prodErrorMap() {
            var _ref4; // We will include this one message in the prod error map since by the very
            // nature of this error, developers will never be able to see the message
            // using the debugErrorMap (which is installed during auth initialization).


            return _ref4 = {}, _ref4["dependent-sdk-initialized-before-auth"
            /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
            ] = 'Another Firebase SDK was initialized and is trying to use Auth before Auth is ' + 'initialized. Please be sure to call `initializeAuth` or `getAuth` before ' + 'starting any other Firebase SDK.', _ref4;
          }
          /**
           * A minimal error map with all verbose error messages stripped.
           *
           * See discussion at {@link AuthErrorMap}
           *
           * @public
           */


          var prodErrorMap = _prodErrorMap;

          var _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory('auth', 'Firebase', _prodErrorMap());
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var logClient = new Logger('@firebase/auth');

          function _logWarn(msg) {
            if (logClient.logLevel <= LogLevel.WARN) {
              for (var _len11 = arguments.length, args = new Array(_len11 > 1 ? _len11 - 1 : 0), _key12 = 1; _key12 < _len11; _key12++) {
                args[_key12 - 1] = arguments[_key12];
              }

              logClient.warn.apply(logClient, ["Auth (" + SDK_VERSION + "): " + msg].concat(args));
            }
          }

          function _logError(msg) {
            if (logClient.logLevel <= LogLevel.ERROR) {
              for (var _len12 = arguments.length, args = new Array(_len12 > 1 ? _len12 - 1 : 0), _key13 = 1; _key13 < _len12; _key13++) {
                args[_key13 - 1] = arguments[_key13];
              }

              logClient.error.apply(logClient, ["Auth (" + SDK_VERSION + "): " + msg].concat(args));
            }
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _fail(authOrCode) {
            for (var _len13 = arguments.length, rest = new Array(_len13 > 1 ? _len13 - 1 : 0), _key14 = 1; _key14 < _len13; _key14++) {
              rest[_key14 - 1] = arguments[_key14];
            }

            throw createErrorInternal.apply(void 0, [authOrCode].concat(rest));
          }

          function _createError(authOrCode) {
            for (var _len14 = arguments.length, rest = new Array(_len14 > 1 ? _len14 - 1 : 0), _key15 = 1; _key15 < _len14; _key15++) {
              rest[_key15 - 1] = arguments[_key15];
            }

            return createErrorInternal.apply(void 0, [authOrCode].concat(rest));
          }

          function _errorWithCustomMessage(auth, code, message) {
            var _Object$assign;

            var errorMap = Object.assign(Object.assign({}, prodErrorMap()), (_Object$assign = {}, _Object$assign[code] = message, _Object$assign));
            var factory = new ErrorFactory('auth', 'Firebase', errorMap);
            return factory.create(code, {
              appName: auth.name
            });
          }

          function _serverAppCurrentUserOperationNotSupportedError(auth) {
            return _errorWithCustomMessage(auth, "operation-not-supported-in-this-environment"
            /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
            , 'Operations that alter the current user are not supported in conjunction with FirebaseServerApp');
          }

          function _assertInstanceOf(auth, object, instance) {
            var constructorInstance = instance;

            if (!(object instanceof constructorInstance)) {
              if (constructorInstance.name !== object.constructor.name) {
                _fail(auth, "argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
                );
              }

              throw _errorWithCustomMessage(auth, "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
              , "Type of " + object.constructor.name + " does not match expected instance." + "Did you pass a reference from a different Auth SDK?");
            }
          }

          function createErrorInternal(authOrCode) {
            for (var _len15 = arguments.length, rest = new Array(_len15 > 1 ? _len15 - 1 : 0), _key16 = 1; _key16 < _len15; _key16++) {
              rest[_key16 - 1] = arguments[_key16];
            }

            if (typeof authOrCode !== 'string') {
              var _authOrCode$_errorFac;

              var code = rest[0];
              var fullParams = [].concat(rest.slice(1));

              if (fullParams[0]) {
                fullParams[0].appName = authOrCode.name;
              }

              return (_authOrCode$_errorFac = authOrCode._errorFactory).create.apply(_authOrCode$_errorFac, [code].concat(fullParams));
            }

            return _DEFAULT_AUTH_ERROR_FACTORY.create.apply(_DEFAULT_AUTH_ERROR_FACTORY, [authOrCode].concat(rest));
          }

          function _assert(assertion, authOrCode) {
            if (!assertion) {
              for (var _len16 = arguments.length, rest = new Array(_len16 > 2 ? _len16 - 2 : 0), _key17 = 2; _key17 < _len16; _key17++) {
                rest[_key17 - 2] = arguments[_key17];
              }

              throw createErrorInternal.apply(void 0, [authOrCode].concat(rest));
            }
          }
          /**
           * Unconditionally fails, throwing an internal error with the given message.
           *
           * @param failure type of failure encountered
           * @throws Error
           */


          function debugFail(failure) {
            // Log the failure in addition to throw an exception, just in case the
            // exception is swallowed.
            var message = "INTERNAL ASSERTION FAILED: " + failure;

            _logError(message); // NOTE: We don't use FirebaseError here because these are internal failures
            // that cannot be handled by the user. (Also it would create a circular
            // dependency between the error and assert modules which doesn't work.)


            throw new Error(message);
          }
          /**
           * Fails if the given assertion condition is false, throwing an Error with the
           * given message if it did.
           *
           * @param assertion
           * @param message
           */


          function debugAssert(assertion, message) {
            if (!assertion) {
              debugFail(message);
            }
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _getCurrentUrl() {
            var _a;

            return typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || '';
          }

          function _isHttpOrHttps() {
            return _getCurrentScheme() === 'http:' || _getCurrentScheme() === 'https:';
          }

          function _getCurrentScheme() {
            var _a;

            return typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Determine whether the browser is working online
           */


          function _isOnline() {
            if (typeof navigator !== 'undefined' && navigator && 'onLine' in navigator && typeof navigator.onLine === 'boolean' && ( // Apply only for traditional web apps and Chrome extensions.
            // This is especially true for Cordova apps which have unreliable
            // navigator.onLine behavior unless cordova-plugin-network-information is
            // installed which overwrites the native navigator.onLine value and
            // defines navigator.connection.
            _isHttpOrHttps() || isBrowserExtension() || 'connection' in navigator)) {
              return navigator.onLine;
            } // If we can't determine the state, assume it is online.


            return true;
          }

          function _getUserLanguage() {
            if (typeof navigator === 'undefined') {
              return null;
            }

            var navigatorLanguage = navigator;
            return (// Most reliable, but only supported in Chrome/Firefox.
              navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
              // UI, not the language set in browser settings.
              navigatorLanguage.language || // Couldn't determine language.
              null
            );
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * A structure to help pick between a range of long and short delay durations
           * depending on the current environment. In general, the long delay is used for
           * mobile environments whereas short delays are used for desktop environments.
           */


          var Delay = /*#__PURE__*/function () {
            function Delay(shortDelay, longDelay) {
              this.shortDelay = shortDelay;
              this.longDelay = longDelay; // Internal error when improperly initialized.

              debugAssert(longDelay > shortDelay, 'Short delay should be less than long delay!');
              this.isMobile = isMobileCordova() || isReactNative();
            }

            var _proto13 = Delay.prototype;

            _proto13.get = function get() {
              if (!_isOnline()) {
                // Pick the shorter timeout.
                return Math.min(5000
                /* DelayMin.OFFLINE */
                , this.shortDelay);
              } // If running in a mobile environment, return the long delay, otherwise
              // return the short delay.
              // This could be improved in the future to dynamically change based on other
              // variables instead of just reading the current environment.


              return this.isMobile ? this.longDelay : this.shortDelay;
            };

            return Delay;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _emulatorUrl(config, path) {
            debugAssert(config.emulator, 'Emulator should always be set here');
            var url = config.emulator.url;

            if (!path) {
              return url;
            }

            return "" + url + (path.startsWith('/') ? path.slice(1) : path);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var FetchProvider = /*#__PURE__*/function () {
            function FetchProvider() {}

            FetchProvider.initialize = function initialize(fetchImpl, headersImpl, responseImpl) {
              this.fetchImpl = fetchImpl;

              if (headersImpl) {
                this.headersImpl = headersImpl;
              }

              if (responseImpl) {
                this.responseImpl = responseImpl;
              }
            };

            FetchProvider.fetch = function (_fetch) {
              function fetch() {
                return _fetch.apply(this, arguments);
              }

              fetch.toString = function () {
                return _fetch.toString();
              };

              return fetch;
            }(function () {
              if (this.fetchImpl) {
                return this.fetchImpl;
              }

              if (typeof self !== 'undefined' && 'fetch' in self) {
                return self.fetch;
              }

              if (typeof globalThis !== 'undefined' && globalThis.fetch) {
                return globalThis.fetch;
              }

              if (typeof fetch !== 'undefined') {
                return fetch;
              }

              debugFail('Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
            });

            FetchProvider.headers = function headers() {
              if (this.headersImpl) {
                return this.headersImpl;
              }

              if (typeof self !== 'undefined' && 'Headers' in self) {
                return self.Headers;
              }

              if (typeof globalThis !== 'undefined' && globalThis.Headers) {
                return globalThis.Headers;
              }

              if (typeof Headers !== 'undefined') {
                return Headers;
              }

              debugFail('Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
            };

            FetchProvider.response = function response() {
              if (this.responseImpl) {
                return this.responseImpl;
              }

              if (typeof self !== 'undefined' && 'Response' in self) {
                return self.Response;
              }

              if (typeof globalThis !== 'undefined' && globalThis.Response) {
                return globalThis.Response;
              }

              if (typeof Response !== 'undefined') {
                return Response;
              }

              debugFail('Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
            };

            return FetchProvider;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Map from errors returned by the server to errors to developer visible errors
           */


          var SERVER_ERROR_MAP = (_SERVER_ERROR_MAP = {}, _SERVER_ERROR_MAP["CREDENTIAL_MISMATCH"
          /* ServerError.CREDENTIAL_MISMATCH */
          ] = "custom-token-mismatch", _SERVER_ERROR_MAP["MISSING_CUSTOM_TOKEN"
          /* ServerError.MISSING_CUSTOM_TOKEN */
          ] = "internal-error", _SERVER_ERROR_MAP["INVALID_IDENTIFIER"
          /* ServerError.INVALID_IDENTIFIER */
          ] = "invalid-email", _SERVER_ERROR_MAP["MISSING_CONTINUE_URI"
          /* ServerError.MISSING_CONTINUE_URI */
          ] = "internal-error", _SERVER_ERROR_MAP["INVALID_PASSWORD"
          /* ServerError.INVALID_PASSWORD */
          ] = "wrong-password", _SERVER_ERROR_MAP["MISSING_PASSWORD"
          /* ServerError.MISSING_PASSWORD */
          ] = "missing-password", _SERVER_ERROR_MAP["INVALID_LOGIN_CREDENTIALS"
          /* ServerError.INVALID_LOGIN_CREDENTIALS */
          ] = "invalid-credential", _SERVER_ERROR_MAP["EMAIL_EXISTS"
          /* ServerError.EMAIL_EXISTS */
          ] = "email-already-in-use", _SERVER_ERROR_MAP["PASSWORD_LOGIN_DISABLED"
          /* ServerError.PASSWORD_LOGIN_DISABLED */
          ] = "operation-not-allowed", _SERVER_ERROR_MAP["INVALID_IDP_RESPONSE"
          /* ServerError.INVALID_IDP_RESPONSE */
          ] = "invalid-credential", _SERVER_ERROR_MAP["INVALID_PENDING_TOKEN"
          /* ServerError.INVALID_PENDING_TOKEN */
          ] = "invalid-credential", _SERVER_ERROR_MAP["FEDERATED_USER_ID_ALREADY_LINKED"
          /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */
          ] = "credential-already-in-use", _SERVER_ERROR_MAP["MISSING_REQ_TYPE"
          /* ServerError.MISSING_REQ_TYPE */
          ] = "internal-error", _SERVER_ERROR_MAP["EMAIL_NOT_FOUND"
          /* ServerError.EMAIL_NOT_FOUND */
          ] = "user-not-found", _SERVER_ERROR_MAP["RESET_PASSWORD_EXCEED_LIMIT"
          /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */
          ] = "too-many-requests", _SERVER_ERROR_MAP["EXPIRED_OOB_CODE"
          /* ServerError.EXPIRED_OOB_CODE */
          ] = "expired-action-code", _SERVER_ERROR_MAP["INVALID_OOB_CODE"
          /* ServerError.INVALID_OOB_CODE */
          ] = "invalid-action-code", _SERVER_ERROR_MAP["MISSING_OOB_CODE"
          /* ServerError.MISSING_OOB_CODE */
          ] = "internal-error", _SERVER_ERROR_MAP["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
          /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
          ] = "requires-recent-login", _SERVER_ERROR_MAP["INVALID_ID_TOKEN"
          /* ServerError.INVALID_ID_TOKEN */
          ] = "invalid-user-token", _SERVER_ERROR_MAP["TOKEN_EXPIRED"
          /* ServerError.TOKEN_EXPIRED */
          ] = "user-token-expired", _SERVER_ERROR_MAP["USER_NOT_FOUND"
          /* ServerError.USER_NOT_FOUND */
          ] = "user-token-expired", _SERVER_ERROR_MAP["TOO_MANY_ATTEMPTS_TRY_LATER"
          /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */
          ] = "too-many-requests", _SERVER_ERROR_MAP["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"
          /* ServerError.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */
          ] = "password-does-not-meet-requirements", _SERVER_ERROR_MAP["INVALID_CODE"
          /* ServerError.INVALID_CODE */
          ] = "invalid-verification-code", _SERVER_ERROR_MAP["INVALID_SESSION_INFO"
          /* ServerError.INVALID_SESSION_INFO */
          ] = "invalid-verification-id", _SERVER_ERROR_MAP["INVALID_TEMPORARY_PROOF"
          /* ServerError.INVALID_TEMPORARY_PROOF */
          ] = "invalid-credential", _SERVER_ERROR_MAP["MISSING_SESSION_INFO"
          /* ServerError.MISSING_SESSION_INFO */
          ] = "missing-verification-id", _SERVER_ERROR_MAP["SESSION_EXPIRED"
          /* ServerError.SESSION_EXPIRED */
          ] = "code-expired", _SERVER_ERROR_MAP["MISSING_ANDROID_PACKAGE_NAME"
          /* ServerError.MISSING_ANDROID_PACKAGE_NAME */
          ] = "missing-android-pkg-name", _SERVER_ERROR_MAP["UNAUTHORIZED_DOMAIN"
          /* ServerError.UNAUTHORIZED_DOMAIN */
          ] = "unauthorized-continue-uri", _SERVER_ERROR_MAP["INVALID_OAUTH_CLIENT_ID"
          /* ServerError.INVALID_OAUTH_CLIENT_ID */
          ] = "invalid-oauth-client-id", _SERVER_ERROR_MAP["ADMIN_ONLY_OPERATION"
          /* ServerError.ADMIN_ONLY_OPERATION */
          ] = "admin-restricted-operation", _SERVER_ERROR_MAP["INVALID_MFA_PENDING_CREDENTIAL"
          /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */
          ] = "invalid-multi-factor-session", _SERVER_ERROR_MAP["MFA_ENROLLMENT_NOT_FOUND"
          /* ServerError.MFA_ENROLLMENT_NOT_FOUND */
          ] = "multi-factor-info-not-found", _SERVER_ERROR_MAP["MISSING_MFA_ENROLLMENT_ID"
          /* ServerError.MISSING_MFA_ENROLLMENT_ID */
          ] = "missing-multi-factor-info", _SERVER_ERROR_MAP["MISSING_MFA_PENDING_CREDENTIAL"
          /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */
          ] = "missing-multi-factor-session", _SERVER_ERROR_MAP["SECOND_FACTOR_EXISTS"
          /* ServerError.SECOND_FACTOR_EXISTS */
          ] = "second-factor-already-in-use", _SERVER_ERROR_MAP["SECOND_FACTOR_LIMIT_EXCEEDED"
          /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */
          ] = "maximum-second-factor-count-exceeded", _SERVER_ERROR_MAP["BLOCKING_FUNCTION_ERROR_RESPONSE"
          /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */
          ] = "internal-error", _SERVER_ERROR_MAP["RECAPTCHA_NOT_ENABLED"
          /* ServerError.RECAPTCHA_NOT_ENABLED */
          ] = "recaptcha-not-enabled", _SERVER_ERROR_MAP["MISSING_RECAPTCHA_TOKEN"
          /* ServerError.MISSING_RECAPTCHA_TOKEN */
          ] = "missing-recaptcha-token", _SERVER_ERROR_MAP["INVALID_RECAPTCHA_TOKEN"
          /* ServerError.INVALID_RECAPTCHA_TOKEN */
          ] = "invalid-recaptcha-token", _SERVER_ERROR_MAP["INVALID_RECAPTCHA_ACTION"
          /* ServerError.INVALID_RECAPTCHA_ACTION */
          ] = "invalid-recaptcha-action", _SERVER_ERROR_MAP["MISSING_CLIENT_TYPE"
          /* ServerError.MISSING_CLIENT_TYPE */
          ] = "missing-client-type", _SERVER_ERROR_MAP["MISSING_RECAPTCHA_VERSION"
          /* ServerError.MISSING_RECAPTCHA_VERSION */
          ] = "missing-recaptcha-version", _SERVER_ERROR_MAP["INVALID_RECAPTCHA_VERSION"
          /* ServerError.INVALID_RECAPTCHA_VERSION */
          ] = "invalid-recaptcha-version", _SERVER_ERROR_MAP["INVALID_REQ_TYPE"
          /* ServerError.INVALID_REQ_TYPE */
          ] = "invalid-req-type", _SERVER_ERROR_MAP);
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          var DEFAULT_API_TIMEOUT_MS = new Delay(30000, 60000);

          function _addTidIfNecessary(auth, request) {
            if (auth.tenantId && !request.tenantId) {
              return Object.assign(Object.assign({}, request), {
                tenantId: auth.tenantId
              });
            }

            return request;
          }

          function _performApiRequest(_x7, _x8, _x9, _x10, _x11) {
            return _performApiRequest2.apply(this, arguments);
          }

          function _performApiRequest2() {
            _performApiRequest2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee95(auth, method, path, request, customErrorMap) {
              return _regeneratorRuntime().wrap(function _callee95$(_context95) {
                while (1) switch (_context95.prev = _context95.next) {
                  case 0:
                    if (customErrorMap === void 0) {
                      customErrorMap = {};
                    }

                    return _context95.abrupt("return", _performFetchWithErrorHandling(auth, customErrorMap, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee94() {
                      var body, params, query, headers;
                      return _regeneratorRuntime().wrap(function _callee94$(_context94) {
                        while (1) switch (_context94.prev = _context94.next) {
                          case 0:
                            body = {};
                            params = {};

                            if (request) {
                              if (method === "GET"
                              /* HttpMethod.GET */
                              ) {
                                  params = request;
                                } else {
                                body = {
                                  body: JSON.stringify(request)
                                };
                              }
                            }

                            query = querystring(Object.assign({
                              key: auth.config.apiKey
                            }, params)).slice(1);
                            _context94.next = 6;
                            return auth._getAdditionalHeaders();

                          case 6:
                            headers = _context94.sent;
                            headers["Content-Type"
                            /* HttpHeader.CONTENT_TYPE */
                            ] = 'application/json';

                            if (auth.languageCode) {
                              headers["X-Firebase-Locale"
                              /* HttpHeader.X_FIREBASE_LOCALE */
                              ] = auth.languageCode;
                            }

                            return _context94.abrupt("return", FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
                              method: method,
                              headers: headers,
                              referrerPolicy: 'no-referrer'
                            }, body)));

                          case 10:
                          case "end":
                            return _context94.stop();
                        }
                      }, _callee94);
                    }))));

                  case 2:
                  case "end":
                    return _context95.stop();
                }
              }, _callee95);
            }));
            return _performApiRequest2.apply(this, arguments);
          }

          function _performFetchWithErrorHandling(_x12, _x13, _x14) {
            return _performFetchWithErrorHandling2.apply(this, arguments);
          }

          function _performFetchWithErrorHandling2() {
            _performFetchWithErrorHandling2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee96(auth, customErrorMap, fetchFn) {
              var errorMap, networkTimeout, response, json, errorMessage, _errorMessage$split, serverErrorCode, serverErrorMessage, authError;

              return _regeneratorRuntime().wrap(function _callee96$(_context96) {
                while (1) switch (_context96.prev = _context96.next) {
                  case 0:
                    auth._canInitEmulator = false;
                    errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
                    _context96.prev = 2;
                    networkTimeout = new NetworkTimeout(auth);
                    _context96.next = 6;
                    return Promise.race([fetchFn(), networkTimeout.promise]);

                  case 6:
                    response = _context96.sent; // If we've reached this point, the fetch succeeded and the networkTimeout
                    // didn't throw; clear the network timeout delay so that Node won't hang

                    networkTimeout.clearNetworkTimeout();
                    _context96.next = 10;
                    return response.json();

                  case 10:
                    json = _context96.sent;

                    if (!('needConfirmation' in json)) {
                      _context96.next = 13;
                      break;
                    }

                    throw _makeTaggedError(auth, "account-exists-with-different-credential"
                    /* AuthErrorCode.NEED_CONFIRMATION */
                    , json);

                  case 13:
                    if (!(response.ok && !('errorMessage' in json))) {
                      _context96.next = 17;
                      break;
                    }

                    return _context96.abrupt("return", json);

                  case 17:
                    errorMessage = response.ok ? json.errorMessage : json.error.message;
                    _errorMessage$split = errorMessage.split(' : '), serverErrorCode = _errorMessage$split[0], serverErrorMessage = _errorMessage$split[1];

                    if (!(serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED"
                    /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */
                    )) {
                      _context96.next = 23;
                      break;
                    }

                    throw _makeTaggedError(auth, "credential-already-in-use"
                    /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */
                    , json);

                  case 23:
                    if (!(serverErrorCode === "EMAIL_EXISTS"
                    /* ServerError.EMAIL_EXISTS */
                    )) {
                      _context96.next = 27;
                      break;
                    }

                    throw _makeTaggedError(auth, "email-already-in-use"
                    /* AuthErrorCode.EMAIL_EXISTS */
                    , json);

                  case 27:
                    if (!(serverErrorCode === "USER_DISABLED"
                    /* ServerError.USER_DISABLED */
                    )) {
                      _context96.next = 29;
                      break;
                    }

                    throw _makeTaggedError(auth, "user-disabled"
                    /* AuthErrorCode.USER_DISABLED */
                    , json);

                  case 29:
                    authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, '-');

                    if (!serverErrorMessage) {
                      _context96.next = 34;
                      break;
                    }

                    throw _errorWithCustomMessage(auth, authError, serverErrorMessage);

                  case 34:
                    _fail(auth, authError);

                  case 35:
                    _context96.next = 42;
                    break;

                  case 37:
                    _context96.prev = 37;
                    _context96.t0 = _context96["catch"](2);

                    if (!(_context96.t0 instanceof FirebaseError)) {
                      _context96.next = 41;
                      break;
                    }

                    throw _context96.t0;

                  case 41:
                    // Changing this to a different error code will log user out when there is a network error
                    // because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
                    // https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
                    _fail(auth, "network-request-failed"
                    /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                    , {
                      'message': String(_context96.t0)
                    });

                  case 42:
                  case "end":
                    return _context96.stop();
                }
              }, _callee96, null, [[2, 37]]);
            }));
            return _performFetchWithErrorHandling2.apply(this, arguments);
          }

          function _performSignInRequest(_x15, _x16, _x17, _x18, _x19) {
            return _performSignInRequest2.apply(this, arguments);
          }

          function _performSignInRequest2() {
            _performSignInRequest2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee97(auth, method, path, request, customErrorMap) {
              var serverResponse;
              return _regeneratorRuntime().wrap(function _callee97$(_context97) {
                while (1) switch (_context97.prev = _context97.next) {
                  case 0:
                    if (customErrorMap === void 0) {
                      customErrorMap = {};
                    }

                    _context97.next = 3;
                    return _performApiRequest(auth, method, path, request, customErrorMap);

                  case 3:
                    serverResponse = _context97.sent;

                    if ('mfaPendingCredential' in serverResponse) {
                      _fail(auth, "multi-factor-auth-required"
                      /* AuthErrorCode.MFA_REQUIRED */
                      , {
                        _serverResponse: serverResponse
                      });
                    }

                    return _context97.abrupt("return", serverResponse);

                  case 6:
                  case "end":
                    return _context97.stop();
                }
              }, _callee97);
            }));
            return _performSignInRequest2.apply(this, arguments);
          }

          function _getFinalTarget(auth, host, path, query) {
            var base = "" + host + path + "?" + query;

            if (!auth.config.emulator) {
              return auth.config.apiScheme + "://" + base;
            }

            return _emulatorUrl(auth.config, base);
          }

          var NetworkTimeout = /*#__PURE__*/function () {
            function NetworkTimeout(auth) {
              var _this13 = this;

              this.auth = auth; // Node timers and browser timers are fundamentally incompatible, but we
              // don't care about the value here
              // eslint-disable-next-line @typescript-eslint/no-explicit-any

              this.timer = null;
              this.promise = new Promise(function (_, reject) {
                _this13.timer = setTimeout(function () {
                  return reject(_createError(_this13.auth, "network-request-failed"
                  /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                  ));
                }, DEFAULT_API_TIMEOUT_MS.get());
              });
            }

            var _proto14 = NetworkTimeout.prototype;

            _proto14.clearNetworkTimeout = function clearNetworkTimeout() {
              clearTimeout(this.timer);
            };

            return NetworkTimeout;
          }();

          function _makeTaggedError(auth, code, response) {
            var errorParams = {
              appName: auth.name
            };

            if (response.email) {
              errorParams.email = response.email;
            }

            if (response.phoneNumber) {
              errorParams.phoneNumber = response.phoneNumber;
            }

            var error = _createError(auth, code, errorParams); // We know customData is defined on error because errorParams is defined


            error.customData._tokenResponse = response;
            return error;
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function deleteAccount(_x20, _x21) {
            return _deleteAccount.apply(this, arguments);
          }

          function _deleteAccount() {
            _deleteAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee98(auth, request) {
              return _regeneratorRuntime().wrap(function _callee98$(_context98) {
                while (1) switch (_context98.prev = _context98.next) {
                  case 0:
                    return _context98.abrupt("return", _performApiRequest(auth, "POST"
                    /* HttpMethod.POST */
                    , "/v1/accounts:delete"
                    /* Endpoint.DELETE_ACCOUNT */
                    , request));

                  case 1:
                  case "end":
                    return _context98.stop();
                }
              }, _callee98);
            }));
            return _deleteAccount.apply(this, arguments);
          }

          function getAccountInfo(_x22, _x23) {
            return _getAccountInfo.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _getAccountInfo() {
            _getAccountInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee99(auth, request) {
              return _regeneratorRuntime().wrap(function _callee99$(_context99) {
                while (1) switch (_context99.prev = _context99.next) {
                  case 0:
                    return _context99.abrupt("return", _performApiRequest(auth, "POST"
                    /* HttpMethod.POST */
                    , "/v1/accounts:lookup"
                    /* Endpoint.GET_ACCOUNT_INFO */
                    , request));

                  case 1:
                  case "end":
                    return _context99.stop();
                }
              }, _callee99);
            }));
            return _getAccountInfo.apply(this, arguments);
          }

          function utcTimestampToDateString(utcTimestamp) {
            if (!utcTimestamp) {
              return undefined;
            }

            try {
              // Convert to date object.
              var date = new Date(Number(utcTimestamp)); // Test date is valid.

              if (!isNaN(date.getTime())) {
                // Convert to UTC date string.
                return date.toUTCString();
              }
            } catch (e) {// Do nothing. undefined will be returned.
            }

            return undefined;
          }
          /**
           * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
           *
           * @remarks
           * Returns the current token if it has not expired or if it will not expire in the next five
           * minutes. Otherwise, this will refresh the token and return a new one.
           *
           * @param user - The user.
           * @param forceRefresh - Force refresh regardless of token expiration.
           *
           * @public
           */


          function _getIdTokenResult2(_x24, _x25) {
            return _getIdTokenResult.apply(this, arguments);
          }

          function _getIdTokenResult() {
            _getIdTokenResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee100(user, forceRefresh) {
              var userInternal, token, claims, firebase, signInProvider;
              return _regeneratorRuntime().wrap(function _callee100$(_context100) {
                while (1) switch (_context100.prev = _context100.next) {
                  case 0:
                    if (forceRefresh === void 0) {
                      forceRefresh = false;
                    }

                    userInternal = getModularInstance(user);
                    _context100.next = 4;
                    return userInternal.getIdToken(forceRefresh);

                  case 4:
                    token = _context100.sent;
                    claims = _parseToken(token);

                    _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error"
                    /* AuthErrorCode.INTERNAL_ERROR */
                    );

                    firebase = typeof claims.firebase === 'object' ? claims.firebase : undefined;
                    signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_provider'];
                    return _context100.abrupt("return", {
                      claims: claims,
                      token: token,
                      authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
                      issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
                      expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
                      signInProvider: signInProvider || null,
                      signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_second_factor']) || null
                    });

                  case 10:
                  case "end":
                    return _context100.stop();
                }
              }, _callee100);
            }));
            return _getIdTokenResult.apply(this, arguments);
          }

          function secondsStringToMilliseconds(seconds) {
            return Number(seconds) * 1000;
          }

          function _parseToken(token) {
            var _token$split = token.split('.'),
                algorithm = _token$split[0],
                payload = _token$split[1],
                signature = _token$split[2];

            if (algorithm === undefined || payload === undefined || signature === undefined) {
              _logError('JWT malformed, contained fewer than 3 sections');

              return null;
            }

            try {
              var decoded = base64Decode(payload);

              if (!decoded) {
                _logError('Failed to decode base64 JWT payload');

                return null;
              }

              return JSON.parse(decoded);
            } catch (e) {
              _logError('Caught error parsing JWT payload as JSON', e === null || e === void 0 ? void 0 : e.toString());

              return null;
            }
          }
          /**
           * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
           */


          function _tokenExpiresIn(token) {
            var parsedToken = _parseToken(token);

            _assert(parsedToken, "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
            );

            _assert(typeof parsedToken.exp !== 'undefined', "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
            );

            _assert(typeof parsedToken.iat !== 'undefined', "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
            );

            return Number(parsedToken.exp) - Number(parsedToken.iat);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _logoutIfInvalidated(_x26, _x27, _x28) {
            return _logoutIfInvalidated2.apply(this, arguments);
          }

          function _logoutIfInvalidated2() {
            _logoutIfInvalidated2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee101(user, promise, bypassAuthState) {
              return _regeneratorRuntime().wrap(function _callee101$(_context101) {
                while (1) switch (_context101.prev = _context101.next) {
                  case 0:
                    if (bypassAuthState === void 0) {
                      bypassAuthState = false;
                    }

                    if (!bypassAuthState) {
                      _context101.next = 3;
                      break;
                    }

                    return _context101.abrupt("return", promise);

                  case 3:
                    _context101.prev = 3;
                    _context101.next = 6;
                    return promise;

                  case 6:
                    return _context101.abrupt("return", _context101.sent);

                  case 9:
                    _context101.prev = 9;
                    _context101.t0 = _context101["catch"](3);

                    if (!(_context101.t0 instanceof FirebaseError && isUserInvalidated(_context101.t0))) {
                      _context101.next = 15;
                      break;
                    }

                    if (!(user.auth.currentUser === user)) {
                      _context101.next = 15;
                      break;
                    }

                    _context101.next = 15;
                    return user.auth.signOut();

                  case 15:
                    throw _context101.t0;

                  case 16:
                  case "end":
                    return _context101.stop();
                }
              }, _callee101, null, [[3, 9]]);
            }));
            return _logoutIfInvalidated2.apply(this, arguments);
          }

          function isUserInvalidated(_ref5) {
            var code = _ref5.code;
            return code === "auth/" + "user-disabled"
            /* AuthErrorCode.USER_DISABLED */
            || code === "auth/" + "user-token-expired"
            /* AuthErrorCode.TOKEN_EXPIRED */
            ;
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var ProactiveRefresh = /*#__PURE__*/function () {
            function ProactiveRefresh(user) {
              this.user = user;
              this.isRunning = false; // Node timers and browser timers return fundamentally different types.
              // We don't actually care what the value is but TS won't accept unknown and
              // we can't cast properly in both environments.
              // eslint-disable-next-line @typescript-eslint/no-explicit-any

              this.timerId = null;
              this.errorBackoff = 30000
              /* Duration.RETRY_BACKOFF_MIN */
              ;
            }

            var _proto15 = ProactiveRefresh.prototype;

            _proto15._start = function _start() {
              if (this.isRunning) {
                return;
              }

              this.isRunning = true;
              this.schedule();
            };

            _proto15._stop = function _stop() {
              if (!this.isRunning) {
                return;
              }

              this.isRunning = false;

              if (this.timerId !== null) {
                clearTimeout(this.timerId);
              }
            };

            _proto15.getInterval = function getInterval(wasError) {
              var _a;

              if (wasError) {
                var interval = this.errorBackoff;
                this.errorBackoff = Math.min(this.errorBackoff * 2, 960000
                /* Duration.RETRY_BACKOFF_MAX */
                );
                return interval;
              } else {
                // Reset the error backoff
                this.errorBackoff = 30000
                /* Duration.RETRY_BACKOFF_MIN */
                ;
                var expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;

                var _interval = expTime - Date.now() - 300000
                /* Duration.OFFSET */
                ;

                return Math.max(0, _interval);
              }
            };

            _proto15.schedule = function schedule(wasError) {
              var _this14 = this;

              if (wasError === void 0) {
                wasError = false;
              }

              if (!this.isRunning) {
                // Just in case...
                return;
              }

              var interval = this.getInterval(wasError);
              this.timerId = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return _this14.iteration();

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              })), interval);
            };

            _proto15.iteration = /*#__PURE__*/function () {
              var _iteration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.prev = 0;
                      _context10.next = 3;
                      return this.user.getIdToken(true);

                    case 3:
                      _context10.next = 9;
                      break;

                    case 5:
                      _context10.prev = 5;
                      _context10.t0 = _context10["catch"](0); // Only retry on network errors

                      if ((_context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.code) === "auth/" + "network-request-failed"
                      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                      ) {
                          this.schedule(
                          /* wasError */
                          true);
                        }

                      return _context10.abrupt("return");

                    case 9:
                      this.schedule();

                    case 10:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10, this, [[0, 5]]);
              }));

              function iteration() {
                return _iteration.apply(this, arguments);
              }

              return iteration;
            }();

            return ProactiveRefresh;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var UserMetadata = /*#__PURE__*/function () {
            function UserMetadata(createdAt, lastLoginAt) {
              this.createdAt = createdAt;
              this.lastLoginAt = lastLoginAt;

              this._initializeTime();
            }

            var _proto16 = UserMetadata.prototype;

            _proto16._initializeTime = function _initializeTime() {
              this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
              this.creationTime = utcTimestampToDateString(this.createdAt);
            };

            _proto16._copy = function _copy(metadata) {
              this.createdAt = metadata.createdAt;
              this.lastLoginAt = metadata.lastLoginAt;

              this._initializeTime();
            };

            _proto16.toJSON = function toJSON() {
              return {
                createdAt: this.createdAt,
                lastLoginAt: this.lastLoginAt
              };
            };

            return UserMetadata;
          }();
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _reloadWithoutSaving(_x29) {
            return _reloadWithoutSaving2.apply(this, arguments);
          }
          /**
           * Reloads user account data, if signed in.
           *
           * @param user - The user.
           *
           * @public
           */


          function _reloadWithoutSaving2() {
            _reloadWithoutSaving2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee102(user) {
              var _a, auth, idToken, response, coreAccount, newProviderData, providerData, oldIsAnonymous, newIsAnonymous, isAnonymous, updates;

              return _regeneratorRuntime().wrap(function _callee102$(_context102) {
                while (1) switch (_context102.prev = _context102.next) {
                  case 0:
                    auth = user.auth;
                    _context102.next = 3;
                    return user.getIdToken();

                  case 3:
                    idToken = _context102.sent;
                    _context102.next = 6;
                    return _logoutIfInvalidated(user, getAccountInfo(auth, {
                      idToken: idToken
                    }));

                  case 6:
                    response = _context102.sent;

                    _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error"
                    /* AuthErrorCode.INTERNAL_ERROR */
                    );

                    coreAccount = response.users[0];

                    user._notifyReloadListener(coreAccount);

                    newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
                    providerData = mergeProviderData(user.providerData, newProviderData); // Preserves the non-nonymous status of the stored user, even if no more
                    // credentials (federated or email/password) are linked to the user. If
                    // the user was previously anonymous, then use provider data to update.
                    // On the other hand, if it was not anonymous before, it should never be
                    // considered anonymous now.

                    oldIsAnonymous = user.isAnonymous;
                    newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
                    isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
                    updates = {
                      uid: coreAccount.localId,
                      displayName: coreAccount.displayName || null,
                      photoURL: coreAccount.photoUrl || null,
                      email: coreAccount.email || null,
                      emailVerified: coreAccount.emailVerified || false,
                      phoneNumber: coreAccount.phoneNumber || null,
                      tenantId: coreAccount.tenantId || null,
                      providerData: providerData,
                      metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
                      isAnonymous: isAnonymous
                    };
                    Object.assign(user, updates);

                  case 17:
                  case "end":
                    return _context102.stop();
                }
              }, _callee102);
            }));
            return _reloadWithoutSaving2.apply(this, arguments);
          }

          function _reload2(_x30) {
            return _reload.apply(this, arguments);
          }

          function _reload() {
            _reload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee103(user) {
              var userInternal;
              return _regeneratorRuntime().wrap(function _callee103$(_context103) {
                while (1) switch (_context103.prev = _context103.next) {
                  case 0:
                    userInternal = getModularInstance(user);
                    _context103.next = 3;
                    return _reloadWithoutSaving(userInternal);

                  case 3:
                    _context103.next = 5;
                    return userInternal.auth._persistUserIfCurrent(userInternal);

                  case 5:
                    userInternal.auth._notifyListenersIfCurrent(userInternal);

                  case 6:
                  case "end":
                    return _context103.stop();
                }
              }, _callee103);
            }));
            return _reload.apply(this, arguments);
          }

          function mergeProviderData(original, newData) {
            var deduped = original.filter(function (o) {
              return !newData.some(function (n) {
                return n.providerId === o.providerId;
              });
            });
            return [].concat(deduped, newData);
          }

          function extractProviderData(providers) {
            return providers.map(function (_a) {
              var providerId = _a.providerId,
                  provider = __rest(_a, ["providerId"]);

              return {
                providerId: providerId,
                uid: provider.rawId || '',
                displayName: provider.displayName || null,
                email: provider.email || null,
                phoneNumber: provider.phoneNumber || null,
                photoURL: provider.photoUrl || null
              };
            });
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function requestStsToken(_x31, _x32) {
            return _requestStsToken.apply(this, arguments);
          }

          function _requestStsToken() {
            _requestStsToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee105(auth, refreshToken) {
              var response;
              return _regeneratorRuntime().wrap(function _callee105$(_context105) {
                while (1) switch (_context105.prev = _context105.next) {
                  case 0:
                    _context105.next = 2;
                    return _performFetchWithErrorHandling(auth, {}, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee104() {
                      var body, _auth$config, tokenApiHost, apiKey, url, headers;

                      return _regeneratorRuntime().wrap(function _callee104$(_context104) {
                        while (1) switch (_context104.prev = _context104.next) {
                          case 0:
                            body = querystring({
                              'grant_type': 'refresh_token',
                              'refresh_token': refreshToken
                            }).slice(1);
                            _auth$config = auth.config, tokenApiHost = _auth$config.tokenApiHost, apiKey = _auth$config.apiKey;
                            url = _getFinalTarget(auth, tokenApiHost, "/v1/token"
                            /* Endpoint.TOKEN */
                            , "key=" + apiKey);
                            _context104.next = 5;
                            return auth._getAdditionalHeaders();

                          case 5:
                            headers = _context104.sent;
                            headers["Content-Type"
                            /* HttpHeader.CONTENT_TYPE */
                            ] = 'application/x-www-form-urlencoded';
                            return _context104.abrupt("return", FetchProvider.fetch()(url, {
                              method: "POST"
                              /* HttpMethod.POST */
                              ,
                              headers: headers,
                              body: body
                            }));

                          case 8:
                          case "end":
                            return _context104.stop();
                        }
                      }, _callee104);
                    })));

                  case 2:
                    response = _context105.sent;
                    return _context105.abrupt("return", {
                      accessToken: response.access_token,
                      expiresIn: response.expires_in,
                      refreshToken: response.refresh_token
                    });

                  case 4:
                  case "end":
                    return _context105.stop();
                }
              }, _callee105);
            }));
            return _requestStsToken.apply(this, arguments);
          }

          function revokeToken(_x33, _x34) {
            return _revokeToken.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * We need to mark this class as internal explicitly to exclude it in the public typings, because
           * it references AuthInternal which has a circular dependency with UserInternal.
           *
           * @internal
           */


          function _revokeToken() {
            _revokeToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee106(auth, request) {
              return _regeneratorRuntime().wrap(function _callee106$(_context106) {
                while (1) switch (_context106.prev = _context106.next) {
                  case 0:
                    return _context106.abrupt("return", _performApiRequest(auth, "POST"
                    /* HttpMethod.POST */
                    , "/v2/accounts:revokeToken"
                    /* Endpoint.REVOKE_TOKEN */
                    , _addTidIfNecessary(auth, request)));

                  case 1:
                  case "end":
                    return _context106.stop();
                }
              }, _callee106);
            }));
            return _revokeToken.apply(this, arguments);
          }

          var StsTokenManager = /*#__PURE__*/function () {
            function StsTokenManager() {
              this.refreshToken = null;
              this.accessToken = null;
              this.expirationTime = null;
            }

            var _proto17 = StsTokenManager.prototype;

            _proto17.updateFromServerResponse = function updateFromServerResponse(response) {
              _assert(response.idToken, "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              _assert(typeof response.idToken !== 'undefined', "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              _assert(typeof response.refreshToken !== 'undefined', "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              var expiresIn = 'expiresIn' in response && typeof response.expiresIn !== 'undefined' ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
              this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
            };

            _proto17.updateFromIdToken = function updateFromIdToken(idToken) {
              _assert(idToken.length !== 0, "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              var expiresIn = _tokenExpiresIn(idToken);

              this.updateTokensAndExpiration(idToken, null, expiresIn);
            };

            _proto17.getToken = /*#__PURE__*/function () {
              var _getToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(auth, forceRefresh) {
                return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      if (forceRefresh === void 0) {
                        forceRefresh = false;
                      }

                      if (!(!forceRefresh && this.accessToken && !this.isExpired)) {
                        _context11.next = 3;
                        break;
                      }

                      return _context11.abrupt("return", this.accessToken);

                    case 3:
                      _assert(this.refreshToken, auth, "user-token-expired"
                      /* AuthErrorCode.TOKEN_EXPIRED */
                      );

                      if (!this.refreshToken) {
                        _context11.next = 8;
                        break;
                      }

                      _context11.next = 7;
                      return this.refresh(auth, this.refreshToken);

                    case 7:
                      return _context11.abrupt("return", this.accessToken);

                    case 8:
                      return _context11.abrupt("return", null);

                    case 9:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11, this);
              }));

              function getToken(_x35, _x36) {
                return _getToken.apply(this, arguments);
              }

              return getToken;
            }();

            _proto17.clearRefreshToken = function clearRefreshToken() {
              this.refreshToken = null;
            };

            _proto17.refresh = /*#__PURE__*/function () {
              var _refresh = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(auth, oldToken) {
                var _yield$requestStsToke, accessToken, refreshToken, expiresIn;

                return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return requestStsToken(auth, oldToken);

                    case 2:
                      _yield$requestStsToke = _context12.sent;
                      accessToken = _yield$requestStsToke.accessToken;
                      refreshToken = _yield$requestStsToke.refreshToken;
                      expiresIn = _yield$requestStsToke.expiresIn;
                      this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));

                    case 7:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12, this);
              }));

              function refresh(_x37, _x38) {
                return _refresh.apply(this, arguments);
              }

              return refresh;
            }();

            _proto17.updateTokensAndExpiration = function updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
              this.refreshToken = refreshToken || null;
              this.accessToken = accessToken || null;
              this.expirationTime = Date.now() + expiresInSec * 1000;
            };

            StsTokenManager.fromJSON = function fromJSON(appName, object) {
              var refreshToken = object.refreshToken,
                  accessToken = object.accessToken,
                  expirationTime = object.expirationTime;
              var manager = new StsTokenManager();

              if (refreshToken) {
                _assert(typeof refreshToken === 'string', "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
                , {
                  appName: appName
                });

                manager.refreshToken = refreshToken;
              }

              if (accessToken) {
                _assert(typeof accessToken === 'string', "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
                , {
                  appName: appName
                });

                manager.accessToken = accessToken;
              }

              if (expirationTime) {
                _assert(typeof expirationTime === 'number', "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
                , {
                  appName: appName
                });

                manager.expirationTime = expirationTime;
              }

              return manager;
            };

            _proto17.toJSON = function toJSON() {
              return {
                refreshToken: this.refreshToken,
                accessToken: this.accessToken,
                expirationTime: this.expirationTime
              };
            };

            _proto17._assign = function _assign(stsTokenManager) {
              this.accessToken = stsTokenManager.accessToken;
              this.refreshToken = stsTokenManager.refreshToken;
              this.expirationTime = stsTokenManager.expirationTime;
            };

            _proto17._clone = function _clone() {
              return Object.assign(new StsTokenManager(), this.toJSON());
            };

            _proto17._performRefresh = function _performRefresh() {
              return debugFail('not implemented');
            };

            _createClass(StsTokenManager, [{
              key: "isExpired",
              get: function get() {
                return !this.expirationTime || Date.now() > this.expirationTime - 30000
                /* Buffer.TOKEN_REFRESH */
                ;
              }
            }]);

            return StsTokenManager;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function assertStringOrUndefined(assertion, appName) {
            _assert(typeof assertion === 'string' || typeof assertion === 'undefined', "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
            , {
              appName: appName
            });
          }

          var UserImpl = /*#__PURE__*/function () {
            function UserImpl(_a) {
              var uid = _a.uid,
                  auth = _a.auth,
                  stsTokenManager = _a.stsTokenManager,
                  opt = __rest(_a, ["uid", "auth", "stsTokenManager"]); // For the user object, provider is always Firebase.


              this.providerId = "firebase"
              /* ProviderId.FIREBASE */
              ;
              this.proactiveRefresh = new ProactiveRefresh(this);
              this.reloadUserInfo = null;
              this.reloadListener = null;
              this.uid = uid;
              this.auth = auth;
              this.stsTokenManager = stsTokenManager;
              this.accessToken = stsTokenManager.accessToken;
              this.displayName = opt.displayName || null;
              this.email = opt.email || null;
              this.emailVerified = opt.emailVerified || false;
              this.phoneNumber = opt.phoneNumber || null;
              this.photoURL = opt.photoURL || null;
              this.isAnonymous = opt.isAnonymous || false;
              this.tenantId = opt.tenantId || null;
              this.providerData = opt.providerData ? [].concat(opt.providerData) : [];
              this.metadata = new UserMetadata(opt.createdAt || undefined, opt.lastLoginAt || undefined);
            }

            var _proto18 = UserImpl.prototype;

            _proto18.getIdToken = /*#__PURE__*/function () {
              var _getIdToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(forceRefresh) {
                var accessToken;
                return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));

                    case 2:
                      accessToken = _context13.sent;

                      _assert(accessToken, this.auth, "internal-error"
                      /* AuthErrorCode.INTERNAL_ERROR */
                      );

                      if (!(this.accessToken !== accessToken)) {
                        _context13.next = 9;
                        break;
                      }

                      this.accessToken = accessToken;
                      _context13.next = 8;
                      return this.auth._persistUserIfCurrent(this);

                    case 8:
                      this.auth._notifyListenersIfCurrent(this);

                    case 9:
                      return _context13.abrupt("return", accessToken);

                    case 10:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee13, this);
              }));

              function getIdToken(_x39) {
                return _getIdToken.apply(this, arguments);
              }

              return getIdToken;
            }();

            _proto18.getIdTokenResult = function getIdTokenResult(forceRefresh) {
              return _getIdTokenResult2(this, forceRefresh);
            };

            _proto18.reload = function reload() {
              return _reload2(this);
            };

            _proto18._assign = function _assign(user) {
              if (this === user) {
                return;
              }

              _assert(this.uid === user.uid, this.auth, "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              this.displayName = user.displayName;
              this.photoURL = user.photoURL;
              this.email = user.email;
              this.emailVerified = user.emailVerified;
              this.phoneNumber = user.phoneNumber;
              this.isAnonymous = user.isAnonymous;
              this.tenantId = user.tenantId;
              this.providerData = user.providerData.map(function (userInfo) {
                return Object.assign({}, userInfo);
              });

              this.metadata._copy(user.metadata);

              this.stsTokenManager._assign(user.stsTokenManager);
            };

            _proto18._clone = function _clone(auth) {
              var newUser = new UserImpl(Object.assign(Object.assign({}, this), {
                auth: auth,
                stsTokenManager: this.stsTokenManager._clone()
              }));

              newUser.metadata._copy(this.metadata);

              return newUser;
            };

            _proto18._onReload = function _onReload(callback) {
              // There should only ever be one listener, and that is a single instance of MultiFactorUser
              _assert(!this.reloadListener, this.auth, "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              this.reloadListener = callback;

              if (this.reloadUserInfo) {
                this._notifyReloadListener(this.reloadUserInfo);

                this.reloadUserInfo = null;
              }
            };

            _proto18._notifyReloadListener = function _notifyReloadListener(userInfo) {
              if (this.reloadListener) {
                this.reloadListener(userInfo);
              } else {
                // If no listener is subscribed yet, save the result so it's available when they do subscribe
                this.reloadUserInfo = userInfo;
              }
            };

            _proto18._startProactiveRefresh = function _startProactiveRefresh() {
              this.proactiveRefresh._start();
            };

            _proto18._stopProactiveRefresh = function _stopProactiveRefresh() {
              this.proactiveRefresh._stop();
            };

            _proto18._updateTokensIfNecessary = /*#__PURE__*/function () {
              var _updateTokensIfNecessary2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(response, reload) {
                var tokensRefreshed;
                return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                  while (1) switch (_context14.prev = _context14.next) {
                    case 0:
                      if (reload === void 0) {
                        reload = false;
                      }

                      tokensRefreshed = false;

                      if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
                        this.stsTokenManager.updateFromServerResponse(response);
                        tokensRefreshed = true;
                      }

                      if (!reload) {
                        _context14.next = 6;
                        break;
                      }

                      _context14.next = 6;
                      return _reloadWithoutSaving(this);

                    case 6:
                      _context14.next = 8;
                      return this.auth._persistUserIfCurrent(this);

                    case 8:
                      if (tokensRefreshed) {
                        this.auth._notifyListenersIfCurrent(this);
                      }

                    case 9:
                    case "end":
                      return _context14.stop();
                  }
                }, _callee14, this);
              }));

              function _updateTokensIfNecessary(_x40, _x41) {
                return _updateTokensIfNecessary2.apply(this, arguments);
              }

              return _updateTokensIfNecessary;
            }();

            _proto18["delete"] = /*#__PURE__*/function () {
              var _delete3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                var idToken;
                return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                  while (1) switch (_context15.prev = _context15.next) {
                    case 0:
                      if (!_isFirebaseServerApp(this.auth.app)) {
                        _context15.next = 2;
                        break;
                      }

                      return _context15.abrupt("return", Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth)));

                    case 2:
                      _context15.next = 4;
                      return this.getIdToken();

                    case 4:
                      idToken = _context15.sent;
                      _context15.next = 7;
                      return _logoutIfInvalidated(this, deleteAccount(this.auth, {
                        idToken: idToken
                      }));

                    case 7:
                      this.stsTokenManager.clearRefreshToken(); // TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
                      //       cancels pending actions...

                      return _context15.abrupt("return", this.auth.signOut());

                    case 9:
                    case "end":
                      return _context15.stop();
                  }
                }, _callee15, this);
              }));

              function _delete() {
                return _delete3.apply(this, arguments);
              }

              return _delete;
            }();

            _proto18.toJSON = function toJSON() {
              return Object.assign(Object.assign({
                uid: this.uid,
                email: this.email || undefined,
                emailVerified: this.emailVerified,
                displayName: this.displayName || undefined,
                isAnonymous: this.isAnonymous,
                photoURL: this.photoURL || undefined,
                phoneNumber: this.phoneNumber || undefined,
                tenantId: this.tenantId || undefined,
                providerData: this.providerData.map(function (userInfo) {
                  return Object.assign({}, userInfo);
                }),
                stsTokenManager: this.stsTokenManager.toJSON(),
                // Redirect event ID must be maintained in case there is a pending
                // redirect event.
                _redirectEventId: this._redirectEventId
              }, this.metadata.toJSON()), {
                // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
                apiKey: this.auth.config.apiKey,
                appName: this.auth.name
              });
            };

            UserImpl._fromJSON = function _fromJSON(auth, object) {
              var _a, _b, _c, _d, _e, _f, _g, _h;

              var displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : undefined;
              var email = (_b = object.email) !== null && _b !== void 0 ? _b : undefined;
              var phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : undefined;
              var photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : undefined;
              var tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : undefined;

              var _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : undefined;

              var createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : undefined;
              var lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : undefined;
              var uid = object.uid,
                  emailVerified = object.emailVerified,
                  isAnonymous = object.isAnonymous,
                  providerData = object.providerData,
                  plainObjectTokenManager = object.stsTokenManager;

              _assert(uid && plainObjectTokenManager, auth, "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              var stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);

              _assert(typeof uid === 'string', auth, "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              assertStringOrUndefined(displayName, auth.name);
              assertStringOrUndefined(email, auth.name);

              _assert(typeof emailVerified === 'boolean', auth, "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              _assert(typeof isAnonymous === 'boolean', auth, "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              );

              assertStringOrUndefined(phoneNumber, auth.name);
              assertStringOrUndefined(photoURL, auth.name);
              assertStringOrUndefined(tenantId, auth.name);
              assertStringOrUndefined(_redirectEventId, auth.name);
              assertStringOrUndefined(createdAt, auth.name);
              assertStringOrUndefined(lastLoginAt, auth.name);
              var user = new UserImpl({
                uid: uid,
                auth: auth,
                email: email,
                emailVerified: emailVerified,
                displayName: displayName,
                isAnonymous: isAnonymous,
                photoURL: photoURL,
                phoneNumber: phoneNumber,
                tenantId: tenantId,
                stsTokenManager: stsTokenManager,
                createdAt: createdAt,
                lastLoginAt: lastLoginAt
              });

              if (providerData && Array.isArray(providerData)) {
                user.providerData = providerData.map(function (userInfo) {
                  return Object.assign({}, userInfo);
                });
              }

              if (_redirectEventId) {
                user._redirectEventId = _redirectEventId;
              }

              return user;
            }
            /**
             * Initialize a User from an idToken server response
             * @param auth
             * @param idTokenResponse
             */
            ;

            UserImpl._fromIdTokenResponse = /*#__PURE__*/function () {
              var _fromIdTokenResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(auth, idTokenResponse, isAnonymous) {
                var stsTokenManager, user;
                return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                  while (1) switch (_context16.prev = _context16.next) {
                    case 0:
                      if (isAnonymous === void 0) {
                        isAnonymous = false;
                      }

                      stsTokenManager = new StsTokenManager();
                      stsTokenManager.updateFromServerResponse(idTokenResponse); // Initialize the Firebase Auth user.

                      user = new UserImpl({
                        uid: idTokenResponse.localId,
                        auth: auth,
                        stsTokenManager: stsTokenManager,
                        isAnonymous: isAnonymous
                      }); // Updates the user info and data and resolves with a user instance.

                      _context16.next = 6;
                      return _reloadWithoutSaving(user);

                    case 6:
                      return _context16.abrupt("return", user);

                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }, _callee16);
              }));

              function _fromIdTokenResponse(_x42, _x43, _x44) {
                return _fromIdTokenResponse2.apply(this, arguments);
              }

              return _fromIdTokenResponse;
            }()
            /**
             * Initialize a User from an idToken server response
             * @param auth
             * @param idTokenResponse
             */
            ;

            UserImpl._fromGetAccountInfoResponse = /*#__PURE__*/function () {
              var _fromGetAccountInfoResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(auth, response, idToken) {
                var coreAccount, providerData, isAnonymous, stsTokenManager, user, updates;
                return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                  while (1) switch (_context17.prev = _context17.next) {
                    case 0:
                      coreAccount = response.users[0];

                      _assert(coreAccount.localId !== undefined, "internal-error"
                      /* AuthErrorCode.INTERNAL_ERROR */
                      );

                      providerData = coreAccount.providerUserInfo !== undefined ? extractProviderData(coreAccount.providerUserInfo) : [];
                      isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
                      stsTokenManager = new StsTokenManager();
                      stsTokenManager.updateFromIdToken(idToken); // Initialize the Firebase Auth user.

                      user = new UserImpl({
                        uid: coreAccount.localId,
                        auth: auth,
                        stsTokenManager: stsTokenManager,
                        isAnonymous: isAnonymous
                      }); // update the user with data from the GetAccountInfo response.

                      updates = {
                        uid: coreAccount.localId,
                        displayName: coreAccount.displayName || null,
                        photoURL: coreAccount.photoUrl || null,
                        email: coreAccount.email || null,
                        emailVerified: coreAccount.emailVerified || false,
                        phoneNumber: coreAccount.phoneNumber || null,
                        tenantId: coreAccount.tenantId || null,
                        providerData: providerData,
                        metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
                        isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length)
                      };
                      Object.assign(user, updates);
                      return _context17.abrupt("return", user);

                    case 10:
                    case "end":
                      return _context17.stop();
                  }
                }, _callee17);
              }));

              function _fromGetAccountInfoResponse(_x45, _x46, _x47) {
                return _fromGetAccountInfoResponse2.apply(this, arguments);
              }

              return _fromGetAccountInfoResponse;
            }();

            _createClass(UserImpl, [{
              key: "refreshToken",
              get: function get() {
                return this.stsTokenManager.refreshToken || '';
              }
            }]);

            return UserImpl;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var instanceCache = new Map();

          function _getInstance(cls) {
            debugAssert(cls instanceof Function, 'Expected a class definition');
            var instance = instanceCache.get(cls);

            if (instance) {
              debugAssert(instance instanceof cls, 'Instance stored in cache mismatched with class');
              return instance;
            }

            instance = new cls();
            instanceCache.set(cls, instance);
            return instance;
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var InMemoryPersistence = /*#__PURE__*/function () {
            function InMemoryPersistence() {
              this.type = "NONE"
              /* PersistenceType.NONE */
              ;
              this.storage = {};
            }

            var _proto19 = InMemoryPersistence.prototype;

            _proto19._isAvailable = /*#__PURE__*/function () {
              var _isAvailable2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
                return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", true);

                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee18);
              }));

              function _isAvailable() {
                return _isAvailable2.apply(this, arguments);
              }

              return _isAvailable;
            }();

            _proto19._set = /*#__PURE__*/function () {
              var _set2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(key, value) {
                return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                  while (1) switch (_context19.prev = _context19.next) {
                    case 0:
                      this.storage[key] = value;

                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }, _callee19, this);
              }));

              function _set(_x48, _x49) {
                return _set2.apply(this, arguments);
              }

              return _set;
            }();

            _proto19._get = /*#__PURE__*/function () {
              var _get2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(key) {
                var value;
                return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                  while (1) switch (_context20.prev = _context20.next) {
                    case 0:
                      value = this.storage[key];
                      return _context20.abrupt("return", value === undefined ? null : value);

                    case 2:
                    case "end":
                      return _context20.stop();
                  }
                }, _callee20, this);
              }));

              function _get(_x50) {
                return _get2.apply(this, arguments);
              }

              return _get;
            }();

            _proto19._remove = /*#__PURE__*/function () {
              var _remove2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(key) {
                return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                  while (1) switch (_context21.prev = _context21.next) {
                    case 0:
                      delete this.storage[key];

                    case 1:
                    case "end":
                      return _context21.stop();
                  }
                }, _callee21, this);
              }));

              function _remove(_x51) {
                return _remove2.apply(this, arguments);
              }

              return _remove;
            }();

            _proto19._addListener = function _addListener(_key, _listener) {
              // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
              return;
            };

            _proto19._removeListener = function _removeListener(_key, _listener) {
              // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
              return;
            };

            return InMemoryPersistence;
          }();

          InMemoryPersistence.type = 'NONE';
          /**
           * An implementation of {@link Persistence} of type 'NONE'.
           *
           * @public
           */

          var inMemoryPersistence = InMemoryPersistence;
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          function _persistenceKeyName(key, apiKey, appName) {
            return "firebase"
            /* Namespace.PERSISTENCE */
            + ":" + key + ":" + apiKey + ":" + appName;
          }

          var PersistenceUserManager = /*#__PURE__*/function () {
            function PersistenceUserManager(persistence, auth, userKey) {
              this.persistence = persistence;
              this.auth = auth;
              this.userKey = userKey;
              var _this$auth = this.auth,
                  config = _this$auth.config,
                  name = _this$auth.name;
              this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name);
              this.fullPersistenceKey = _persistenceKeyName("persistence"
              /* KeyName.PERSISTENCE_USER */
              , config.apiKey, name);
              this.boundEventHandler = auth._onStorageEvent.bind(auth);

              this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
            }

            var _proto20 = PersistenceUserManager.prototype;

            _proto20.setCurrentUser = function setCurrentUser(user) {
              return this.persistence._set(this.fullUserKey, user.toJSON());
            };

            _proto20.getCurrentUser = /*#__PURE__*/function () {
              var _getCurrentUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
                var blob;
                return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                  while (1) switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return this.persistence._get(this.fullUserKey);

                    case 2:
                      blob = _context22.sent;
                      return _context22.abrupt("return", blob ? UserImpl._fromJSON(this.auth, blob) : null);

                    case 4:
                    case "end":
                      return _context22.stop();
                  }
                }, _callee22, this);
              }));

              function getCurrentUser() {
                return _getCurrentUser.apply(this, arguments);
              }

              return getCurrentUser;
            }();

            _proto20.removeCurrentUser = function removeCurrentUser() {
              return this.persistence._remove(this.fullUserKey);
            };

            _proto20.savePersistenceForRedirect = function savePersistenceForRedirect() {
              return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
            };

            _proto20.setPersistence = /*#__PURE__*/function () {
              var _setPersistence = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(newPersistence) {
                var currentUser;
                return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                  while (1) switch (_context23.prev = _context23.next) {
                    case 0:
                      if (!(this.persistence === newPersistence)) {
                        _context23.next = 2;
                        break;
                      }

                      return _context23.abrupt("return");

                    case 2:
                      _context23.next = 4;
                      return this.getCurrentUser();

                    case 4:
                      currentUser = _context23.sent;
                      _context23.next = 7;
                      return this.removeCurrentUser();

                    case 7:
                      this.persistence = newPersistence;

                      if (!currentUser) {
                        _context23.next = 10;
                        break;
                      }

                      return _context23.abrupt("return", this.setCurrentUser(currentUser));

                    case 10:
                    case "end":
                      return _context23.stop();
                  }
                }, _callee23, this);
              }));

              function setPersistence(_x52) {
                return _setPersistence.apply(this, arguments);
              }

              return setPersistence;
            }();

            _proto20["delete"] = function _delete() {
              this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
            };

            PersistenceUserManager.create = /*#__PURE__*/function () {
              var _create = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(auth, persistenceHierarchy, userKey
              /* KeyName.AUTH_USER */
              ) {
                var availablePersistences, selectedPersistence, key, userToMigrate, _iterator9, _step9, persistence, blob, user, migrationHierarchy;

                return _regeneratorRuntime().wrap(function _callee26$(_context26) {
                  while (1) switch (_context26.prev = _context26.next) {
                    case 0:
                      if (userKey === void 0) {
                        userKey = "authUser";
                      }

                      if (persistenceHierarchy.length) {
                        _context26.next = 3;
                        break;
                      }

                      return _context26.abrupt("return", new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey));

                    case 3:
                      _context26.next = 5;
                      return Promise.all(persistenceHierarchy.map( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(persistence) {
                        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                          while (1) switch (_context24.prev = _context24.next) {
                            case 0:
                              _context24.next = 2;
                              return persistence._isAvailable();

                            case 2:
                              if (!_context24.sent) {
                                _context24.next = 4;
                                break;
                              }

                              return _context24.abrupt("return", persistence);

                            case 4:
                              return _context24.abrupt("return", undefined);

                            case 5:
                            case "end":
                              return _context24.stop();
                          }
                        }, _callee24);
                      }))));

                    case 5:
                      availablePersistences = _context26.sent.filter(function (persistence) {
                        return persistence;
                      }); // Fall back to the first persistence listed, or in memory if none available

                      selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
                      key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name); // Pull out the existing user, setting the chosen persistence to that
                      // persistence if the user exists.

                      userToMigrate = null; // Note, here we check for a user in _all_ persistences, not just the
                      // ones deemed available. If we can migrate a user out of a broken
                      // persistence, we will (but only if that persistence supports migration).

                      _iterator9 = _createForOfIteratorHelperLoose(persistenceHierarchy);

                    case 10:
                      if ((_step9 = _iterator9()).done) {
                        _context26.next = 27;
                        break;
                      }

                      persistence = _step9.value;
                      _context26.prev = 12;
                      _context26.next = 15;
                      return persistence._get(key);

                    case 15:
                      blob = _context26.sent;

                      if (!blob) {
                        _context26.next = 21;
                        break;
                      }

                      user = UserImpl._fromJSON(auth, blob); // throws for unparsable blob (wrong format)

                      if (persistence !== selectedPersistence) {
                        userToMigrate = user;
                      }

                      selectedPersistence = persistence;
                      return _context26.abrupt("break", 27);

                    case 21:
                      _context26.next = 25;
                      break;

                    case 23:
                      _context26.prev = 23;
                      _context26.t0 = _context26["catch"](12);

                    case 25:
                      _context26.next = 10;
                      break;

                    case 27:
                      // If we find the user in a persistence that does support migration, use
                      // that migration path (of only persistences that support migration)
                      migrationHierarchy = availablePersistences.filter(function (p) {
                        return p._shouldAllowMigration;
                      }); // If the persistence does _not_ allow migration, just finish off here

                      if (!(!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length)) {
                        _context26.next = 30;
                        break;
                      }

                      return _context26.abrupt("return", new PersistenceUserManager(selectedPersistence, auth, userKey));

                    case 30:
                      selectedPersistence = migrationHierarchy[0];

                      if (!userToMigrate) {
                        _context26.next = 34;
                        break;
                      }

                      _context26.next = 34;
                      return selectedPersistence._set(key, userToMigrate.toJSON());

                    case 34:
                      _context26.next = 36;
                      return Promise.all(persistenceHierarchy.map( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(persistence) {
                        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                          while (1) switch (_context25.prev = _context25.next) {
                            case 0:
                              if (!(persistence !== selectedPersistence)) {
                                _context25.next = 8;
                                break;
                              }

                              _context25.prev = 1;
                              _context25.next = 4;
                              return persistence._remove(key);

                            case 4:
                              _context25.next = 8;
                              break;

                            case 6:
                              _context25.prev = 6;
                              _context25.t0 = _context25["catch"](1);

                            case 8:
                            case "end":
                              return _context25.stop();
                          }
                        }, _callee25, null, [[1, 6]]);
                      }))));

                    case 36:
                      return _context26.abrupt("return", new PersistenceUserManager(selectedPersistence, auth, userKey));

                    case 37:
                    case "end":
                      return _context26.stop();
                  }
                }, _callee26, null, [[12, 23]]);
              }));

              function create(_x53, _x54, _x55) {
                return _create.apply(this, arguments);
              }

              return create;
            }();

            return PersistenceUserManager;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Determine the browser for the purposes of reporting usage to the API
           */


          function _getBrowserName(userAgent) {
            var ua = userAgent.toLowerCase();

            if (ua.includes('opera/') || ua.includes('opr/') || ua.includes('opios/')) {
              return "Opera"
              /* BrowserName.OPERA */
              ;
            } else if (_isIEMobile(ua)) {
              // Windows phone IEMobile browser.
              return "IEMobile"
              /* BrowserName.IEMOBILE */
              ;
            } else if (ua.includes('msie') || ua.includes('trident/')) {
              return "IE"
              /* BrowserName.IE */
              ;
            } else if (ua.includes('edge/')) {
              return "Edge"
              /* BrowserName.EDGE */
              ;
            } else if (_isFirefox(ua)) {
              return "Firefox"
              /* BrowserName.FIREFOX */
              ;
            } else if (ua.includes('silk/')) {
              return "Silk"
              /* BrowserName.SILK */
              ;
            } else if (_isBlackBerry(ua)) {
              // Blackberry browser.
              return "Blackberry"
              /* BrowserName.BLACKBERRY */
              ;
            } else if (_isWebOS(ua)) {
              // WebOS default browser.
              return "Webos"
              /* BrowserName.WEBOS */
              ;
            } else if (_isSafari(ua)) {
              return "Safari"
              /* BrowserName.SAFARI */
              ;
            } else if ((ua.includes('chrome/') || _isChromeIOS(ua)) && !ua.includes('edge/')) {
              return "Chrome"
              /* BrowserName.CHROME */
              ;
            } else if (_isAndroid(ua)) {
              // Android stock browser.
              return "Android"
              /* BrowserName.ANDROID */
              ;
            } else {
              // Most modern browsers have name/version at end of user agent string.
              var re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
              var matches = userAgent.match(re);

              if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
                return matches[1];
              }
            }

            return "Other"
            /* BrowserName.OTHER */
            ;
          }

          function _isFirefox(ua) {
            if (ua === void 0) {
              ua = getUA();
            }

            return /firefox\//i.test(ua);
          }

          function _isSafari(userAgent) {
            if (userAgent === void 0) {
              userAgent = getUA();
            }

            var ua = userAgent.toLowerCase();
            return ua.includes('safari/') && !ua.includes('chrome/') && !ua.includes('crios/') && !ua.includes('android');
          }

          function _isChromeIOS(ua) {
            if (ua === void 0) {
              ua = getUA();
            }

            return /crios\//i.test(ua);
          }

          function _isIEMobile(ua) {
            if (ua === void 0) {
              ua = getUA();
            }

            return /iemobile/i.test(ua);
          }

          function _isAndroid(ua) {
            if (ua === void 0) {
              ua = getUA();
            }

            return /android/i.test(ua);
          }

          function _isBlackBerry(ua) {
            if (ua === void 0) {
              ua = getUA();
            }

            return /blackberry/i.test(ua);
          }

          function _isWebOS(ua) {
            if (ua === void 0) {
              ua = getUA();
            }

            return /webos/i.test(ua);
          }

          function _isIOS(ua) {
            if (ua === void 0) {
              ua = getUA();
            }

            return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
          }

          function _isIOSStandalone(ua) {
            if (ua === void 0) {
              ua = getUA();
            }

            var _a;

            return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
          }

          function _isIE10() {
            return isIE() && document.documentMode === 10;
          }

          function _isMobileBrowser(ua) {
            if (ua === void 0) {
              ua = getUA();
            } // TODO: implement getBrowserName equivalent for OS.


            return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
          }

          function _isIframe() {
            try {
              // Check that the current window is not the top window.
              // If so, return true.
              return !!(window && window !== window.top);
            } catch (e) {
              return false;
            }
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /*
           * Determine the SDK version string
           */


          function _getClientVersion(clientPlatform, frameworks) {
            if (frameworks === void 0) {
              frameworks = [];
            }

            var reportedPlatform;

            switch (clientPlatform) {
              case "Browser"
              /* ClientPlatform.BROWSER */
              :
                // In a browser environment, report the browser name.
                reportedPlatform = _getBrowserName(getUA());
                break;

              case "Worker"
              /* ClientPlatform.WORKER */
              :
                // Technically a worker runs from a browser but we need to differentiate a
                // worker from a browser.
                // For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
                reportedPlatform = _getBrowserName(getUA()) + "-" + clientPlatform;
                break;

              default:
                reportedPlatform = clientPlatform;
            }

            var reportedFrameworks = frameworks.length ? frameworks.join(',') : 'FirebaseCore-web';
            /* default value if no other framework is used */

            return reportedPlatform + "/" + "JsCore"
            /* ClientImplementation.CORE */
            + "/" + SDK_VERSION + "/" + reportedFrameworks;
          }
          /**
           * @license
           * Copyright 2022 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var AuthMiddlewareQueue = /*#__PURE__*/function () {
            function AuthMiddlewareQueue(auth) {
              this.auth = auth;
              this.queue = [];
            }

            var _proto21 = AuthMiddlewareQueue.prototype;

            _proto21.pushCallback = function pushCallback(callback, onAbort) {
              var _this15 = this; // The callback could be sync or async. Wrap it into a
              // function that is always async.


              var wrappedCallback = function wrappedCallback(user) {
                return new Promise(function (resolve, reject) {
                  try {
                    var result = callback(user); // Either resolve with existing promise or wrap a non-promise
                    // return value into a promise.

                    resolve(result);
                  } catch (e) {
                    // Sync callback throws.
                    reject(e);
                  }
                });
              }; // Attach the onAbort if present


              wrappedCallback.onAbort = onAbort;
              this.queue.push(wrappedCallback);
              var index = this.queue.length - 1;
              return function () {
                // Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
                // indexing of other elements.
                _this15.queue[index] = function () {
                  return Promise.resolve();
                };
              };
            };

            _proto21.runMiddleware = /*#__PURE__*/function () {
              var _runMiddleware = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(nextUser) {
                var onAbortStack, _iterator10, _step10, beforeStateCallback, _iterator11, _step11, onAbort;

                return _regeneratorRuntime().wrap(function _callee27$(_context27) {
                  while (1) switch (_context27.prev = _context27.next) {
                    case 0:
                      if (!(this.auth.currentUser === nextUser)) {
                        _context27.next = 2;
                        break;
                      }

                      return _context27.abrupt("return");

                    case 2:
                      // While running the middleware, build a temporary stack of onAbort
                      // callbacks to call if one middleware callback rejects.
                      onAbortStack = [];
                      _context27.prev = 3;
                      _iterator10 = _createForOfIteratorHelperLoose(this.queue);

                    case 5:
                      if ((_step10 = _iterator10()).done) {
                        _context27.next = 12;
                        break;
                      }

                      beforeStateCallback = _step10.value;
                      _context27.next = 9;
                      return beforeStateCallback(nextUser);

                    case 9:
                      // Only push the onAbort if the callback succeeds
                      if (beforeStateCallback.onAbort) {
                        onAbortStack.push(beforeStateCallback.onAbort);
                      }

                    case 10:
                      _context27.next = 5;
                      break;

                    case 12:
                      _context27.next = 19;
                      break;

                    case 14:
                      _context27.prev = 14;
                      _context27.t0 = _context27["catch"](3); // Run all onAbort, with separate try/catch to ignore any errors and
                      // continue

                      onAbortStack.reverse();

                      for (_iterator11 = _createForOfIteratorHelperLoose(onAbortStack); !(_step11 = _iterator11()).done;) {
                        onAbort = _step11.value;

                        try {
                          onAbort();
                        } catch (_) {
                          /* swallow error */
                        }
                      }

                      throw this.auth._errorFactory.create("login-blocked"
                      /* AuthErrorCode.LOGIN_BLOCKED */
                      , {
                        originalMessage: _context27.t0 === null || _context27.t0 === void 0 ? void 0 : _context27.t0.message
                      });

                    case 19:
                    case "end":
                      return _context27.stop();
                  }
                }, _callee27, this, [[3, 14]]);
              }));

              function runMiddleware(_x58) {
                return _runMiddleware.apply(this, arguments);
              }

              return runMiddleware;
            }();

            return AuthMiddlewareQueue;
          }();
          /**
           * @license
           * Copyright 2023 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Fetches the password policy for the currently set tenant or the project if no tenant is set.
           *
           * @param auth Auth object.
           * @param request Password policy request.
           * @returns Password policy response.
           */


          function _getPasswordPolicy(_x59, _x60) {
            return _getPasswordPolicy2.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2023 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */
          // Minimum min password length enforced by the backend, even if no minimum length is set.


          function _getPasswordPolicy2() {
            _getPasswordPolicy2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee107(auth, request) {
              return _regeneratorRuntime().wrap(function _callee107$(_context107) {
                while (1) switch (_context107.prev = _context107.next) {
                  case 0:
                    if (request === void 0) {
                      request = {};
                    }

                    return _context107.abrupt("return", _performApiRequest(auth, "GET"
                    /* HttpMethod.GET */
                    , "/v2/passwordPolicy"
                    /* Endpoint.GET_PASSWORD_POLICY */
                    , _addTidIfNecessary(auth, request)));

                  case 2:
                  case "end":
                    return _context107.stop();
                }
              }, _callee107);
            }));
            return _getPasswordPolicy2.apply(this, arguments);
          }

          var MINIMUM_MIN_PASSWORD_LENGTH = 6;
          /**
           * Stores password policy requirements and provides password validation against the policy.
           *
           * @internal
           */

          var PasswordPolicyImpl = /*#__PURE__*/function () {
            function PasswordPolicyImpl(response) {
              var _a, _b, _c, _d; // Only include custom strength options defined in the response.


              var responseOptions = response.customStrengthOptions;
              this.customStrengthOptions = {}; // TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.

              this.customStrengthOptions.minPasswordLength = (_a = responseOptions.minPasswordLength) !== null && _a !== void 0 ? _a : MINIMUM_MIN_PASSWORD_LENGTH;

              if (responseOptions.maxPasswordLength) {
                this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
              }

              if (responseOptions.containsLowercaseCharacter !== undefined) {
                this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
              }

              if (responseOptions.containsUppercaseCharacter !== undefined) {
                this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
              }

              if (responseOptions.containsNumericCharacter !== undefined) {
                this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
              }

              if (responseOptions.containsNonAlphanumericCharacter !== undefined) {
                this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
              }

              this.enforcementState = response.enforcementState;

              if (this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED') {
                this.enforcementState = 'OFF';
              } // Use an empty string if no non-alphanumeric characters are specified in the response.


              this.allowedNonAlphanumericCharacters = (_c = (_b = response.allowedNonAlphanumericCharacters) === null || _b === void 0 ? void 0 : _b.join('')) !== null && _c !== void 0 ? _c : '';
              this.forceUpgradeOnSignin = (_d = response.forceUpgradeOnSignin) !== null && _d !== void 0 ? _d : false;
              this.schemaVersion = response.schemaVersion;
            }

            var _proto22 = PasswordPolicyImpl.prototype;

            _proto22.validatePassword = function validatePassword(password) {
              var _a, _b, _c, _d, _e, _f;

              var status = {
                isValid: true,
                passwordPolicy: this
              }; // Check the password length and character options.

              this.validatePasswordLengthOptions(password, status);
              this.validatePasswordCharacterOptions(password, status); // Combine the status into single isValid property.

              status.isValid && (status.isValid = (_a = status.meetsMinPasswordLength) !== null && _a !== void 0 ? _a : true);
              status.isValid && (status.isValid = (_b = status.meetsMaxPasswordLength) !== null && _b !== void 0 ? _b : true);
              status.isValid && (status.isValid = (_c = status.containsLowercaseLetter) !== null && _c !== void 0 ? _c : true);
              status.isValid && (status.isValid = (_d = status.containsUppercaseLetter) !== null && _d !== void 0 ? _d : true);
              status.isValid && (status.isValid = (_e = status.containsNumericCharacter) !== null && _e !== void 0 ? _e : true);
              status.isValid && (status.isValid = (_f = status.containsNonAlphanumericCharacter) !== null && _f !== void 0 ? _f : true);
              return status;
            }
            /**
             * Validates that the password meets the length options for the policy.
             *
             * @param password Password to validate.
             * @param status Validation status.
             */
            ;

            _proto22.validatePasswordLengthOptions = function validatePasswordLengthOptions(password, status) {
              var minPasswordLength = this.customStrengthOptions.minPasswordLength;
              var maxPasswordLength = this.customStrengthOptions.maxPasswordLength;

              if (minPasswordLength) {
                status.meetsMinPasswordLength = password.length >= minPasswordLength;
              }

              if (maxPasswordLength) {
                status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
              }
            }
            /**
             * Validates that the password meets the character options for the policy.
             *
             * @param password Password to validate.
             * @param status Validation status.
             */
            ;

            _proto22.validatePasswordCharacterOptions = function validatePasswordCharacterOptions(password, status) {
              // Assign statuses for requirements even if the password is an empty string.
              this.updatePasswordCharacterOptionsStatuses(status,
              /* containsLowercaseCharacter= */
              false,
              /* containsUppercaseCharacter= */
              false,
              /* containsNumericCharacter= */
              false,
              /* containsNonAlphanumericCharacter= */
              false);
              var passwordChar;

              for (var i = 0; i < password.length; i++) {
                passwordChar = password.charAt(i);
                this.updatePasswordCharacterOptionsStatuses(status,
                /* containsLowercaseCharacter= */
                passwordChar >= 'a' && passwordChar <= 'z',
                /* containsUppercaseCharacter= */
                passwordChar >= 'A' && passwordChar <= 'Z',
                /* containsNumericCharacter= */
                passwordChar >= '0' && passwordChar <= '9',
                /* containsNonAlphanumericCharacter= */
                this.allowedNonAlphanumericCharacters.includes(passwordChar));
              }
            }
            /**
             * Updates the running validation status with the statuses for the character options.
             * Expected to be called each time a character is processed to update each option status
             * based on the current character.
             *
             * @param status Validation status.
             * @param containsLowercaseCharacter Whether the character is a lowercase letter.
             * @param containsUppercaseCharacter Whether the character is an uppercase letter.
             * @param containsNumericCharacter Whether the character is a numeric character.
             * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
             */
            ;

            _proto22.updatePasswordCharacterOptionsStatuses = function updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
              if (this.customStrengthOptions.containsLowercaseLetter) {
                status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
              }

              if (this.customStrengthOptions.containsUppercaseLetter) {
                status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
              }

              if (this.customStrengthOptions.containsNumericCharacter) {
                status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
              }

              if (this.customStrengthOptions.containsNonAlphanumericCharacter) {
                status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
              }
            };

            return PasswordPolicyImpl;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var AuthImpl = /*#__PURE__*/function () {
            function AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config) {
              this.app = app;
              this.heartbeatServiceProvider = heartbeatServiceProvider;
              this.appCheckServiceProvider = appCheckServiceProvider;
              this.config = config;
              this.currentUser = null;
              this.emulatorConfig = null;
              this.operations = Promise.resolve();
              this.authStateSubscription = new Subscription(this);
              this.idTokenSubscription = new Subscription(this);
              this.beforeStateQueue = new AuthMiddlewareQueue(this);
              this.redirectUser = null;
              this.isProactiveRefreshEnabled = false;
              this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1; // Any network calls will set this to true and prevent subsequent emulator
              // initialization

              this._canInitEmulator = true;
              this._isInitialized = false;
              this._deleted = false;
              this._initializationPromise = null;
              this._popupRedirectResolver = null;
              this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
              this._agentRecaptchaConfig = null;
              this._tenantRecaptchaConfigs = {};
              this._projectPasswordPolicy = null;
              this._tenantPasswordPolicies = {}; // Tracks the last notified UID for state change listeners to prevent
              // repeated calls to the callbacks. Undefined means it's never been
              // called, whereas null means it's been called with a signed out user

              this.lastNotifiedUid = undefined;
              this.languageCode = null;
              this.tenantId = null;
              this.settings = {
                appVerificationDisabledForTesting: false
              };
              this.frameworks = [];
              this.name = app.name;
              this.clientVersion = config.sdkClientVersion;
            }

            var _proto23 = AuthImpl.prototype;

            _proto23._initializeWithPersistence = function _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
              var _this16 = this;

              if (popupRedirectResolver) {
                this._popupRedirectResolver = _getInstance(popupRedirectResolver);
              } // Have to check for app deletion throughout initialization (after each
              // promise resolution)


              this._initializationPromise = this.queue( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
                var _a, _b;

                return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                  while (1) switch (_context28.prev = _context28.next) {
                    case 0:
                      if (!_this16._deleted) {
                        _context28.next = 2;
                        break;
                      }

                      return _context28.abrupt("return");

                    case 2:
                      _context28.next = 4;
                      return PersistenceUserManager.create(_this16, persistenceHierarchy);

                    case 4:
                      _this16.persistenceManager = _context28.sent;

                      if (!_this16._deleted) {
                        _context28.next = 7;
                        break;
                      }

                      return _context28.abrupt("return");

                    case 7:
                      if (!((_a = _this16._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively)) {
                        _context28.next = 15;
                        break;
                      }

                      _context28.prev = 8;
                      _context28.next = 11;
                      return _this16._popupRedirectResolver._initialize(_this16);

                    case 11:
                      _context28.next = 15;
                      break;

                    case 13:
                      _context28.prev = 13;
                      _context28.t0 = _context28["catch"](8);

                    case 15:
                      _context28.next = 17;
                      return _this16.initializeCurrentUser(popupRedirectResolver);

                    case 17:
                      _this16.lastNotifiedUid = ((_b = _this16.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;

                      if (!_this16._deleted) {
                        _context28.next = 20;
                        break;
                      }

                      return _context28.abrupt("return");

                    case 20:
                      _this16._isInitialized = true;

                    case 21:
                    case "end":
                      return _context28.stop();
                  }
                }, _callee28, null, [[8, 13]]);
              })));
              return this._initializationPromise;
            }
            /**
             * If the persistence is changed in another window, the user manager will let us know
             */
            ;

            _proto23._onStorageEvent = /*#__PURE__*/function () {
              var _onStorageEvent2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
                var user;
                return _regeneratorRuntime().wrap(function _callee29$(_context29) {
                  while (1) switch (_context29.prev = _context29.next) {
                    case 0:
                      if (!this._deleted) {
                        _context29.next = 2;
                        break;
                      }

                      return _context29.abrupt("return");

                    case 2:
                      _context29.next = 4;
                      return this.assertedPersistence.getCurrentUser();

                    case 4:
                      user = _context29.sent;

                      if (!(!this.currentUser && !user)) {
                        _context29.next = 7;
                        break;
                      }

                      return _context29.abrupt("return");

                    case 7:
                      if (!(this.currentUser && user && this.currentUser.uid === user.uid)) {
                        _context29.next = 12;
                        break;
                      } // Data update, simply copy data changes.


                      this._currentUser._assign(user); // If tokens changed from previous user tokens, this will trigger
                      // notifyAuthListeners_.


                      _context29.next = 11;
                      return this.currentUser.getIdToken();

                    case 11:
                      return _context29.abrupt("return");

                    case 12:
                      _context29.next = 14;
                      return this._updateCurrentUser(user,
                      /* skipBeforeStateCallbacks */
                      true);

                    case 14:
                    case "end":
                      return _context29.stop();
                  }
                }, _callee29, this);
              }));

              function _onStorageEvent() {
                return _onStorageEvent2.apply(this, arguments);
              }

              return _onStorageEvent;
            }();

            _proto23.initializeCurrentUserFromIdToken = /*#__PURE__*/function () {
              var _initializeCurrentUserFromIdToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(idToken) {
                var response, user;
                return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                  while (1) switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.prev = 0;
                      _context30.next = 3;
                      return getAccountInfo(this, {
                        idToken: idToken
                      });

                    case 3:
                      response = _context30.sent;
                      _context30.next = 6;
                      return UserImpl._fromGetAccountInfoResponse(this, response, idToken);

                    case 6:
                      user = _context30.sent;
                      _context30.next = 9;
                      return this.directlySetCurrentUser(user);

                    case 9:
                      _context30.next = 16;
                      break;

                    case 11:
                      _context30.prev = 11;
                      _context30.t0 = _context30["catch"](0);
                      console.warn('FirebaseServerApp could not login user with provided authIdToken: ', _context30.t0);
                      _context30.next = 16;
                      return this.directlySetCurrentUser(null);

                    case 16:
                    case "end":
                      return _context30.stop();
                  }
                }, _callee30, this, [[0, 11]]);
              }));

              function initializeCurrentUserFromIdToken(_x61) {
                return _initializeCurrentUserFromIdToken.apply(this, arguments);
              }

              return initializeCurrentUserFromIdToken;
            }();

            _proto23.initializeCurrentUser = /*#__PURE__*/function () {
              var _initializeCurrentUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(popupRedirectResolver) {
                var _this17 = this;

                var _a, idToken, previouslyStoredUser, futureCurrentUser, needsTocheckMiddleware, redirectUserEventId, storedUserEventId, result;

                return _regeneratorRuntime().wrap(function _callee31$(_context31) {
                  while (1) switch (_context31.prev = _context31.next) {
                    case 0:
                      if (!_isFirebaseServerApp(this.app)) {
                        _context31.next = 7;
                        break;
                      }

                      idToken = this.app.settings.authIdToken;

                      if (!idToken) {
                        _context31.next = 6;
                        break;
                      }

                      return _context31.abrupt("return", new Promise(function (resolve) {
                        setTimeout(function () {
                          return _this17.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve);
                        });
                      }));

                    case 6:
                      return _context31.abrupt("return", this.directlySetCurrentUser(null));

                    case 7:
                      _context31.next = 9;
                      return this.assertedPersistence.getCurrentUser();

                    case 9:
                      previouslyStoredUser = _context31.sent;
                      futureCurrentUser = previouslyStoredUser;
                      needsTocheckMiddleware = false;

                      if (!(popupRedirectResolver && this.config.authDomain)) {
                        _context31.next = 21;
                        break;
                      }

                      _context31.next = 15;
                      return this.getOrInitRedirectPersistenceManager();

                    case 15:
                      redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
                      storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
                      _context31.next = 19;
                      return this.tryRedirectSignIn(popupRedirectResolver);

                    case 19:
                      result = _context31.sent; // If the stored user (i.e. the old "currentUser") has a redirectId that
                      // matches the redirect user, then we want to initially sign in with the
                      // new user object from result.
                      // TODO(samgho): More thoroughly test all of this

                      if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
                        futureCurrentUser = result.user;
                        needsTocheckMiddleware = true;
                      }

                    case 21:
                      if (futureCurrentUser) {
                        _context31.next = 23;
                        break;
                      }

                      return _context31.abrupt("return", this.directlySetCurrentUser(null));

                    case 23:
                      if (futureCurrentUser._redirectEventId) {
                        _context31.next = 39;
                        break;
                      }

                      if (!needsTocheckMiddleware) {
                        _context31.next = 34;
                        break;
                      }

                      _context31.prev = 25;
                      _context31.next = 28;
                      return this.beforeStateQueue.runMiddleware(futureCurrentUser);

                    case 28:
                      _context31.next = 34;
                      break;

                    case 30:
                      _context31.prev = 30;
                      _context31.t0 = _context31["catch"](25);
                      futureCurrentUser = previouslyStoredUser; // We know this is available since the bit is only set when the
                      // resolver is available

                      this._popupRedirectResolver._overrideRedirectResult(this, function () {
                        return Promise.reject(_context31.t0);
                      });

                    case 34:
                      if (!futureCurrentUser) {
                        _context31.next = 38;
                        break;
                      }

                      return _context31.abrupt("return", this.reloadAndSetCurrentUserOrClear(futureCurrentUser));

                    case 38:
                      return _context31.abrupt("return", this.directlySetCurrentUser(null));

                    case 39:
                      _assert(this._popupRedirectResolver, this, "argument-error"
                      /* AuthErrorCode.ARGUMENT_ERROR */
                      );

                      _context31.next = 42;
                      return this.getOrInitRedirectPersistenceManager();

                    case 42:
                      if (!(this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId)) {
                        _context31.next = 44;
                        break;
                      }

                      return _context31.abrupt("return", this.directlySetCurrentUser(futureCurrentUser));

                    case 44:
                      return _context31.abrupt("return", this.reloadAndSetCurrentUserOrClear(futureCurrentUser));

                    case 45:
                    case "end":
                      return _context31.stop();
                  }
                }, _callee31, this, [[25, 30]]);
              }));

              function initializeCurrentUser(_x62) {
                return _initializeCurrentUser.apply(this, arguments);
              }

              return initializeCurrentUser;
            }();

            _proto23.tryRedirectSignIn = /*#__PURE__*/function () {
              var _tryRedirectSignIn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(redirectResolver) {
                var result;
                return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                  while (1) switch (_context32.prev = _context32.next) {
                    case 0:
                      // The redirect user needs to be checked (and signed in if available)
                      // during auth initialization. All of the normal sign in and link/reauth
                      // flows call back into auth and push things onto the promise queue. We
                      // need to await the result of the redirect sign in *inside the promise
                      // queue*. This presents a problem: we run into deadlock. See:
                      //    ┌> [Initialization] ─────┐
                      //    ┌> [<other queue tasks>] │
                      //    └─ [getRedirectResult] <─┘
                      //    where [] are tasks on the queue and arrows denote awaits
                      // Initialization will never complete because it's waiting on something
                      // that's waiting for initialization to complete!
                      //
                      // Instead, this method calls getRedirectResult() (stored in
                      // _completeRedirectFn) with an optional parameter that instructs all of
                      // the underlying auth operations to skip anything that mutates auth state.
                      result = null;
                      _context32.prev = 1;
                      _context32.next = 4;
                      return this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);

                    case 4:
                      result = _context32.sent;
                      _context32.next = 11;
                      break;

                    case 7:
                      _context32.prev = 7;
                      _context32.t0 = _context32["catch"](1);
                      _context32.next = 11;
                      return this._setRedirectUser(null);

                    case 11:
                      return _context32.abrupt("return", result);

                    case 12:
                    case "end":
                      return _context32.stop();
                  }
                }, _callee32, this, [[1, 7]]);
              }));

              function tryRedirectSignIn(_x63) {
                return _tryRedirectSignIn.apply(this, arguments);
              }

              return tryRedirectSignIn;
            }();

            _proto23.reloadAndSetCurrentUserOrClear = /*#__PURE__*/function () {
              var _reloadAndSetCurrentUserOrClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(user) {
                return _regeneratorRuntime().wrap(function _callee33$(_context33) {
                  while (1) switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.prev = 0;
                      _context33.next = 3;
                      return _reloadWithoutSaving(user);

                    case 3:
                      _context33.next = 9;
                      break;

                    case 5:
                      _context33.prev = 5;
                      _context33.t0 = _context33["catch"](0);

                      if (!((_context33.t0 === null || _context33.t0 === void 0 ? void 0 : _context33.t0.code) !== "auth/" + "network-request-failed"
                      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                      )) {
                        _context33.next = 9;
                        break;
                      }

                      return _context33.abrupt("return", this.directlySetCurrentUser(null));

                    case 9:
                      return _context33.abrupt("return", this.directlySetCurrentUser(user));

                    case 10:
                    case "end":
                      return _context33.stop();
                  }
                }, _callee33, this, [[0, 5]]);
              }));

              function reloadAndSetCurrentUserOrClear(_x64) {
                return _reloadAndSetCurrentUserOrClear.apply(this, arguments);
              }

              return reloadAndSetCurrentUserOrClear;
            }();

            _proto23.useDeviceLanguage = function useDeviceLanguage() {
              this.languageCode = _getUserLanguage();
            };

            _proto23._delete = /*#__PURE__*/function () {
              var _delete4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
                return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                  while (1) switch (_context34.prev = _context34.next) {
                    case 0:
                      this._deleted = true;

                    case 1:
                    case "end":
                      return _context34.stop();
                  }
                }, _callee34, this);
              }));

              function _delete() {
                return _delete4.apply(this, arguments);
              }

              return _delete;
            }();

            _proto23.updateCurrentUser = /*#__PURE__*/function () {
              var _updateCurrentUser2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(userExtern) {
                var user;
                return _regeneratorRuntime().wrap(function _callee35$(_context35) {
                  while (1) switch (_context35.prev = _context35.next) {
                    case 0:
                      if (!_isFirebaseServerApp(this.app)) {
                        _context35.next = 2;
                        break;
                      }

                      return _context35.abrupt("return", Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)));

                    case 2:
                      // The public updateCurrentUser method needs to make a copy of the user,
                      // and also check that the project matches
                      user = userExtern ? getModularInstance(userExtern) : null;

                      if (user) {
                        _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"
                        /* AuthErrorCode.INVALID_AUTH */
                        );
                      }

                      return _context35.abrupt("return", this._updateCurrentUser(user && user._clone(this)));

                    case 5:
                    case "end":
                      return _context35.stop();
                  }
                }, _callee35, this);
              }));

              function updateCurrentUser(_x65) {
                return _updateCurrentUser2.apply(this, arguments);
              }

              return updateCurrentUser;
            }();

            _proto23._updateCurrentUser = /*#__PURE__*/function () {
              var _updateCurrentUser3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(user, skipBeforeStateCallbacks) {
                var _this18 = this;

                return _regeneratorRuntime().wrap(function _callee37$(_context37) {
                  while (1) switch (_context37.prev = _context37.next) {
                    case 0:
                      if (skipBeforeStateCallbacks === void 0) {
                        skipBeforeStateCallbacks = false;
                      }

                      if (!this._deleted) {
                        _context37.next = 3;
                        break;
                      }

                      return _context37.abrupt("return");

                    case 3:
                      if (user) {
                        _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch"
                        /* AuthErrorCode.TENANT_ID_MISMATCH */
                        );
                      }

                      if (skipBeforeStateCallbacks) {
                        _context37.next = 7;
                        break;
                      }

                      _context37.next = 7;
                      return this.beforeStateQueue.runMiddleware(user);

                    case 7:
                      return _context37.abrupt("return", this.queue( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
                        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                          while (1) switch (_context36.prev = _context36.next) {
                            case 0:
                              _context36.next = 2;
                              return _this18.directlySetCurrentUser(user);

                            case 2:
                              _this18.notifyAuthListeners();

                            case 3:
                            case "end":
                              return _context36.stop();
                          }
                        }, _callee36);
                      }))));

                    case 8:
                    case "end":
                      return _context37.stop();
                  }
                }, _callee37, this);
              }));

              function _updateCurrentUser(_x66, _x67) {
                return _updateCurrentUser3.apply(this, arguments);
              }

              return _updateCurrentUser;
            }();

            _proto23.signOut = /*#__PURE__*/function () {
              var _signOut = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
                return _regeneratorRuntime().wrap(function _callee38$(_context38) {
                  while (1) switch (_context38.prev = _context38.next) {
                    case 0:
                      if (!_isFirebaseServerApp(this.app)) {
                        _context38.next = 2;
                        break;
                      }

                      return _context38.abrupt("return", Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)));

                    case 2:
                      _context38.next = 4;
                      return this.beforeStateQueue.runMiddleware(null);

                    case 4:
                      if (!(this.redirectPersistenceManager || this._popupRedirectResolver)) {
                        _context38.next = 7;
                        break;
                      }

                      _context38.next = 7;
                      return this._setRedirectUser(null);

                    case 7:
                      return _context38.abrupt("return", this._updateCurrentUser(null,
                      /* skipBeforeStateCallbacks */
                      true));

                    case 8:
                    case "end":
                      return _context38.stop();
                  }
                }, _callee38, this);
              }));

              function signOut() {
                return _signOut.apply(this, arguments);
              }

              return signOut;
            }();

            _proto23.setPersistence = function setPersistence(persistence) {
              var _this19 = this;

              if (_isFirebaseServerApp(this.app)) {
                return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
              }

              return this.queue( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
                return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                  while (1) switch (_context39.prev = _context39.next) {
                    case 0:
                      _context39.next = 2;
                      return _this19.assertedPersistence.setPersistence(_getInstance(persistence));

                    case 2:
                    case "end":
                      return _context39.stop();
                  }
                }, _callee39);
              })));
            };

            _proto23._getRecaptchaConfig = function _getRecaptchaConfig() {
              if (this.tenantId == null) {
                return this._agentRecaptchaConfig;
              } else {
                return this._tenantRecaptchaConfigs[this.tenantId];
              }
            };

            _proto23.validatePassword = /*#__PURE__*/function () {
              var _validatePassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(password) {
                var passwordPolicy;
                return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                  while (1) switch (_context40.prev = _context40.next) {
                    case 0:
                      if (this._getPasswordPolicyInternal()) {
                        _context40.next = 3;
                        break;
                      }

                      _context40.next = 3;
                      return this._updatePasswordPolicy();

                    case 3:
                      // Password policy will be defined after fetching.
                      passwordPolicy = this._getPasswordPolicyInternal(); // Check that the policy schema version is supported by the SDK.
                      // TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.

                      if (!(passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION)) {
                        _context40.next = 6;
                        break;
                      }

                      return _context40.abrupt("return", Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"
                      /* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */
                      , {})));

                    case 6:
                      return _context40.abrupt("return", passwordPolicy.validatePassword(password));

                    case 7:
                    case "end":
                      return _context40.stop();
                  }
                }, _callee40, this);
              }));

              function validatePassword(_x68) {
                return _validatePassword.apply(this, arguments);
              }

              return validatePassword;
            }();

            _proto23._getPasswordPolicyInternal = function _getPasswordPolicyInternal() {
              if (this.tenantId === null) {
                return this._projectPasswordPolicy;
              } else {
                return this._tenantPasswordPolicies[this.tenantId];
              }
            };

            _proto23._updatePasswordPolicy = /*#__PURE__*/function () {
              var _updatePasswordPolicy2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
                var response, passwordPolicy;
                return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                  while (1) switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return _getPasswordPolicy(this);

                    case 2:
                      response = _context41.sent;
                      passwordPolicy = new PasswordPolicyImpl(response);

                      if (this.tenantId === null) {
                        this._projectPasswordPolicy = passwordPolicy;
                      } else {
                        this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
                      }

                    case 5:
                    case "end":
                      return _context41.stop();
                  }
                }, _callee41, this);
              }));

              function _updatePasswordPolicy() {
                return _updatePasswordPolicy2.apply(this, arguments);
              }

              return _updatePasswordPolicy;
            }();

            _proto23._getPersistence = function _getPersistence() {
              return this.assertedPersistence.persistence.type;
            };

            _proto23._updateErrorMap = function _updateErrorMap(errorMap) {
              this._errorFactory = new ErrorFactory('auth', 'Firebase', errorMap());
            };

            _proto23.onAuthStateChanged = function onAuthStateChanged(nextOrObserver, error, completed) {
              return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
            };

            _proto23.beforeAuthStateChanged = function beforeAuthStateChanged(callback, onAbort) {
              return this.beforeStateQueue.pushCallback(callback, onAbort);
            };

            _proto23.onIdTokenChanged = function onIdTokenChanged(nextOrObserver, error, completed) {
              return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
            };

            _proto23.authStateReady = function authStateReady() {
              var _this20 = this;

              return new Promise(function (resolve, reject) {
                if (_this20.currentUser) {
                  resolve();
                } else {
                  var unsubscribe = _this20.onAuthStateChanged(function () {
                    unsubscribe();
                    resolve();
                  }, reject);
                }
              });
            }
            /**
             * Revokes the given access token. Currently only supports Apple OAuth access tokens.
             */
            ;

            _proto23.revokeAccessToken = /*#__PURE__*/function () {
              var _revokeAccessToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(token) {
                var idToken, request;
                return _regeneratorRuntime().wrap(function _callee42$(_context42) {
                  while (1) switch (_context42.prev = _context42.next) {
                    case 0:
                      if (!this.currentUser) {
                        _context42.next = 8;
                        break;
                      }

                      _context42.next = 3;
                      return this.currentUser.getIdToken();

                    case 3:
                      idToken = _context42.sent; // Generalize this to accept other providers once supported.

                      request = {
                        providerId: 'apple.com',
                        tokenType: "ACCESS_TOKEN"
                        /* TokenType.ACCESS_TOKEN */
                        ,
                        token: token,
                        idToken: idToken
                      };

                      if (this.tenantId != null) {
                        request.tenantId = this.tenantId;
                      }

                      _context42.next = 8;
                      return revokeToken(this, request);

                    case 8:
                    case "end":
                      return _context42.stop();
                  }
                }, _callee42, this);
              }));

              function revokeAccessToken(_x69) {
                return _revokeAccessToken.apply(this, arguments);
              }

              return revokeAccessToken;
            }();

            _proto23.toJSON = function toJSON() {
              var _a;

              return {
                apiKey: this.config.apiKey,
                authDomain: this.config.authDomain,
                appName: this.name,
                currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
              };
            };

            _proto23._setRedirectUser = /*#__PURE__*/function () {
              var _setRedirectUser2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee43(user, popupRedirectResolver) {
                var redirectManager;
                return _regeneratorRuntime().wrap(function _callee43$(_context43) {
                  while (1) switch (_context43.prev = _context43.next) {
                    case 0:
                      _context43.next = 2;
                      return this.getOrInitRedirectPersistenceManager(popupRedirectResolver);

                    case 2:
                      redirectManager = _context43.sent;
                      return _context43.abrupt("return", user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user));

                    case 4:
                    case "end":
                      return _context43.stop();
                  }
                }, _callee43, this);
              }));

              function _setRedirectUser(_x70, _x71) {
                return _setRedirectUser2.apply(this, arguments);
              }

              return _setRedirectUser;
            }();

            _proto23.getOrInitRedirectPersistenceManager = /*#__PURE__*/function () {
              var _getOrInitRedirectPersistenceManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee44(popupRedirectResolver) {
                var resolver;
                return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                  while (1) switch (_context44.prev = _context44.next) {
                    case 0:
                      if (this.redirectPersistenceManager) {
                        _context44.next = 9;
                        break;
                      }

                      resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;

                      _assert(resolver, this, "argument-error"
                      /* AuthErrorCode.ARGUMENT_ERROR */
                      );

                      _context44.next = 5;
                      return PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser"
                      /* KeyName.REDIRECT_USER */
                      );

                    case 5:
                      this.redirectPersistenceManager = _context44.sent;
                      _context44.next = 8;
                      return this.redirectPersistenceManager.getCurrentUser();

                    case 8:
                      this.redirectUser = _context44.sent;

                    case 9:
                      return _context44.abrupt("return", this.redirectPersistenceManager);

                    case 10:
                    case "end":
                      return _context44.stop();
                  }
                }, _callee44, this);
              }));

              function getOrInitRedirectPersistenceManager(_x72) {
                return _getOrInitRedirectPersistenceManager.apply(this, arguments);
              }

              return getOrInitRedirectPersistenceManager;
            }();

            _proto23._redirectUserForId = /*#__PURE__*/function () {
              var _redirectUserForId2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee46(id) {
                var _a, _b;

                return _regeneratorRuntime().wrap(function _callee46$(_context46) {
                  while (1) switch (_context46.prev = _context46.next) {
                    case 0:
                      if (!this._isInitialized) {
                        _context46.next = 3;
                        break;
                      }

                      _context46.next = 3;
                      return this.queue( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
                        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                          while (1) switch (_context45.prev = _context45.next) {
                            case 0:
                            case "end":
                              return _context45.stop();
                          }
                        }, _callee45);
                      })));

                    case 3:
                      if (!(((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id)) {
                        _context46.next = 5;
                        break;
                      }

                      return _context46.abrupt("return", this._currentUser);

                    case 5:
                      if (!(((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id)) {
                        _context46.next = 7;
                        break;
                      }

                      return _context46.abrupt("return", this.redirectUser);

                    case 7:
                      return _context46.abrupt("return", null);

                    case 8:
                    case "end":
                      return _context46.stop();
                  }
                }, _callee46, this);
              }));

              function _redirectUserForId(_x73) {
                return _redirectUserForId2.apply(this, arguments);
              }

              return _redirectUserForId;
            }();

            _proto23._persistUserIfCurrent = /*#__PURE__*/function () {
              var _persistUserIfCurrent2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee48(user) {
                var _this21 = this;

                return _regeneratorRuntime().wrap(function _callee48$(_context48) {
                  while (1) switch (_context48.prev = _context48.next) {
                    case 0:
                      if (!(user === this.currentUser)) {
                        _context48.next = 2;
                        break;
                      }

                      return _context48.abrupt("return", this.queue( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
                        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
                          while (1) switch (_context47.prev = _context47.next) {
                            case 0:
                              return _context47.abrupt("return", _this21.directlySetCurrentUser(user));

                            case 1:
                            case "end":
                              return _context47.stop();
                          }
                        }, _callee47);
                      }))));

                    case 2:
                    case "end":
                      return _context48.stop();
                  }
                }, _callee48, this);
              }));

              function _persistUserIfCurrent(_x74) {
                return _persistUserIfCurrent2.apply(this, arguments);
              }

              return _persistUserIfCurrent;
            }()
            /** Notifies listeners only if the user is current */
            ;

            _proto23._notifyListenersIfCurrent = function _notifyListenersIfCurrent(user) {
              if (user === this.currentUser) {
                this.notifyAuthListeners();
              }
            };

            _proto23._key = function _key() {
              return this.config.authDomain + ":" + this.config.apiKey + ":" + this.name;
            };

            _proto23._startProactiveRefresh = function _startProactiveRefresh() {
              this.isProactiveRefreshEnabled = true;

              if (this.currentUser) {
                this._currentUser._startProactiveRefresh();
              }
            };

            _proto23._stopProactiveRefresh = function _stopProactiveRefresh() {
              this.isProactiveRefreshEnabled = false;

              if (this.currentUser) {
                this._currentUser._stopProactiveRefresh();
              }
            }
            /** Returns the current user cast as the internal type */
            ;

            _proto23.notifyAuthListeners = function notifyAuthListeners() {
              var _a, _b;

              if (!this._isInitialized) {
                return;
              }

              this.idTokenSubscription.next(this.currentUser);
              var currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;

              if (this.lastNotifiedUid !== currentUid) {
                this.lastNotifiedUid = currentUid;
                this.authStateSubscription.next(this.currentUser);
              }
            };

            _proto23.registerStateListener = function registerStateListener(subscription, nextOrObserver, error, completed) {
              var _this22 = this;

              if (this._deleted) {
                return function () {};
              }

              var cb = typeof nextOrObserver === 'function' ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
              var isUnsubscribed = false;
              var promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;

              _assert(promise, this, "internal-error"
              /* AuthErrorCode.INTERNAL_ERROR */
              ); // The callback needs to be called asynchronously per the spec.
              // eslint-disable-next-line @typescript-eslint/no-floating-promises


              promise.then(function () {
                if (isUnsubscribed) {
                  return;
                }

                cb(_this22.currentUser);
              });

              if (typeof nextOrObserver === 'function') {
                var unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
                return function () {
                  isUnsubscribed = true;
                  unsubscribe();
                };
              } else {
                var _unsubscribe = subscription.addObserver(nextOrObserver);

                return function () {
                  isUnsubscribed = true;

                  _unsubscribe();
                };
              }
            }
            /**
             * Unprotected (from race conditions) method to set the current user. This
             * should only be called from within a queued callback. This is necessary
             * because the queue shouldn't rely on another queued callback.
             */
            ;

            _proto23.directlySetCurrentUser = /*#__PURE__*/function () {
              var _directlySetCurrentUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee49(user) {
                return _regeneratorRuntime().wrap(function _callee49$(_context49) {
                  while (1) switch (_context49.prev = _context49.next) {
                    case 0:
                      if (this.currentUser && this.currentUser !== user) {
                        this._currentUser._stopProactiveRefresh();
                      }

                      if (user && this.isProactiveRefreshEnabled) {
                        user._startProactiveRefresh();
                      }

                      this.currentUser = user;

                      if (!user) {
                        _context49.next = 8;
                        break;
                      }

                      _context49.next = 6;
                      return this.assertedPersistence.setCurrentUser(user);

                    case 6:
                      _context49.next = 10;
                      break;

                    case 8:
                      _context49.next = 10;
                      return this.assertedPersistence.removeCurrentUser();

                    case 10:
                    case "end":
                      return _context49.stop();
                  }
                }, _callee49, this);
              }));

              function directlySetCurrentUser(_x75) {
                return _directlySetCurrentUser.apply(this, arguments);
              }

              return directlySetCurrentUser;
            }();

            _proto23.queue = function queue(action) {
              // In case something errors, the callback still should be called in order
              // to keep the promise chain alive
              this.operations = this.operations.then(action, action);
              return this.operations;
            };

            _proto23._logFramework = function _logFramework(framework) {
              if (!framework || this.frameworks.includes(framework)) {
                return;
              }

              this.frameworks.push(framework); // Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
              // "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.

              this.frameworks.sort();
              this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
            };

            _proto23._getFrameworks = function _getFrameworks() {
              return this.frameworks;
            };

            _proto23._getAdditionalHeaders = /*#__PURE__*/function () {
              var _getAdditionalHeaders2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
                var _headers;

                var _a, headers, heartbeatsHeader, appCheckToken;

                return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                  while (1) switch (_context50.prev = _context50.next) {
                    case 0:
                      // Additional headers on every request
                      headers = (_headers = {}, _headers["X-Client-Version"
                      /* HttpHeader.X_CLIENT_VERSION */
                      ] = this.clientVersion, _headers);

                      if (this.app.options.appId) {
                        headers["X-Firebase-gmpid"
                        /* HttpHeader.X_FIREBASE_GMPID */
                        ] = this.app.options.appId;
                      } // If the heartbeat service exists, add the heartbeat string


                      _context50.next = 4;
                      return (_a = this.heartbeatServiceProvider.getImmediate({
                        optional: true
                      })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader();

                    case 4:
                      heartbeatsHeader = _context50.sent;

                      if (heartbeatsHeader) {
                        headers["X-Firebase-Client"
                        /* HttpHeader.X_FIREBASE_CLIENT */
                        ] = heartbeatsHeader;
                      } // If the App Check service exists, add the App Check token in the headers


                      _context50.next = 8;
                      return this._getAppCheckToken();

                    case 8:
                      appCheckToken = _context50.sent;

                      if (appCheckToken) {
                        headers["X-Firebase-AppCheck"
                        /* HttpHeader.X_FIREBASE_APP_CHECK */
                        ] = appCheckToken;
                      }

                      return _context50.abrupt("return", headers);

                    case 11:
                    case "end":
                      return _context50.stop();
                  }
                }, _callee50, this);
              }));

              function _getAdditionalHeaders() {
                return _getAdditionalHeaders2.apply(this, arguments);
              }

              return _getAdditionalHeaders;
            }();

            _proto23._getAppCheckToken = /*#__PURE__*/function () {
              var _getAppCheckToken2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
                var _a, appCheckTokenResult;

                return _regeneratorRuntime().wrap(function _callee51$(_context51) {
                  while (1) switch (_context51.prev = _context51.next) {
                    case 0:
                      _context51.next = 2;
                      return (_a = this.appCheckServiceProvider.getImmediate({
                        optional: true
                      })) === null || _a === void 0 ? void 0 : _a.getToken();

                    case 2:
                      appCheckTokenResult = _context51.sent;

                      if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
                        // Context: appCheck.getToken() will never throw even if an error happened.
                        // In the error case, a dummy token will be returned along with an error field describing
                        // the error. In general, we shouldn't care about the error condition and just use
                        // the token (actual or dummy) to send requests.
                        _logWarn("Error while retrieving App Check token: " + appCheckTokenResult.error);
                      }

                      return _context51.abrupt("return", appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token);

                    case 5:
                    case "end":
                      return _context51.stop();
                  }
                }, _callee51, this);
              }));

              function _getAppCheckToken() {
                return _getAppCheckToken2.apply(this, arguments);
              }

              return _getAppCheckToken;
            }();

            _createClass(AuthImpl, [{
              key: "_currentUser",
              get: function get() {
                return this.currentUser;
              }
            }, {
              key: "assertedPersistence",
              get: function get() {
                _assert(this.persistenceManager, this, "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
                );

                return this.persistenceManager;
              }
            }]);

            return AuthImpl;
          }();
          /**
           * Method to be used to cast down to our private implmentation of Auth.
           * It will also handle unwrapping from the compat type if necessary
           *
           * @param auth Auth object passed in from developer
           */


          function _castAuth(auth) {
            return getModularInstance(auth);
          }
          /** Helper class to wrap subscriber logic */


          var Subscription = /*#__PURE__*/function () {
            function Subscription(auth) {
              var _this23 = this;

              this.auth = auth;
              this.observer = null;
              this.addObserver = createSubscribe(function (observer) {
                return _this23.observer = observer;
              });
            }

            _createClass(Subscription, [{
              key: "next",
              get: function get() {
                _assert(this.observer, this.auth, "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
                );

                return this.observer.next.bind(this.observer);
              }
            }]);

            return Subscription;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var externalJSProvider = {
            loadJS: function loadJS() {
              return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
                return _regeneratorRuntime().wrap(function _callee52$(_context52) {
                  while (1) switch (_context52.prev = _context52.next) {
                    case 0:
                      throw new Error('Unable to load external scripts');

                    case 1:
                    case "end":
                      return _context52.stop();
                  }
                }, _callee52);
              }))();
            },
            recaptchaV2Script: '',
            recaptchaEnterpriseScript: '',
            gapiScript: ''
          };

          function _setExternalJSProvider(p) {
            externalJSProvider = p;
          }

          function _loadJS(url) {
            return externalJSProvider.loadJS(url);
          }

          function _gapiScriptUrl() {
            return externalJSProvider.gapiScript;
          }

          function _generateCallbackName(prefix) {
            return "__" + prefix + Math.floor(Math.random() * 1000000);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Initializes an {@link Auth} instance with fine-grained control over
           * {@link Dependencies}.
           *
           * @remarks
           *
           * This function allows more control over the {@link Auth} instance than
           * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
           * the {@link Dependencies}. In general, `getAuth` is the easiest way to
           * initialize Auth and works for most use cases. Use `initializeAuth` if you
           * need control over which persistence layer is used, or to minimize bundle
           * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
           *
           * For example, if your app only uses anonymous accounts and you only want
           * accounts saved for the current session, initialize `Auth` with:
           *
           * ```js
           * const auth = initializeAuth(app, {
           *   persistence: browserSessionPersistence,
           *   popupRedirectResolver: undefined,
           * });
           * ```
           *
           * @public
           */


          function initializeAuth(app, deps) {
            var provider = _getProvider(app, 'auth');

            if (provider.isInitialized()) {
              var _auth2 = provider.getImmediate();

              var initialOptions = provider.getOptions();

              if (deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
                return _auth2;
              } else {
                _fail(_auth2, "already-initialized"
                /* AuthErrorCode.ALREADY_INITIALIZED */
                );
              }
            }

            var auth = provider.initialize({
              options: deps
            });
            return auth;
          }

          function _initializeAuthInstance(auth, deps) {
            var persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
            var hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);

            if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
              auth._updateErrorMap(deps.errorMap);
            } // This promise is intended to float; auth initialization happens in the
            // background, meanwhile the auth object may be used by the app.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises


            auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
          }
          /**
           * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
           * Firebase Auth services.
           *
           * @remarks
           * This must be called synchronously immediately following the first call to
           * {@link initializeAuth}.  Do not use with production credentials as emulator
           * traffic is not encrypted.
           *
           *
           * @example
           * ```javascript
           * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
           * ```
           *
           * @param auth - The {@link Auth} instance.
           * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
           * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
           * `true` to disable the warning banner attached to the DOM.
           *
           * @public
           */


          function connectAuthEmulator(auth, url, options) {
            var authInternal = _castAuth(auth);

            _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed"
            /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
            );

            _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme"
            /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
            );

            var disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
            var protocol = extractProtocol(url);

            var _extractHostAndPort = extractHostAndPort(url),
                host = _extractHostAndPort.host,
                port = _extractHostAndPort.port;

            var portStr = port === null ? '' : ":" + port; // Always replace path with "/" (even if input url had no path at all, or had a different one).

            authInternal.config.emulator = {
              url: protocol + "//" + host + portStr + "/"
            };
            authInternal.settings.appVerificationDisabledForTesting = true;
            authInternal.emulatorConfig = Object.freeze({
              host: host,
              port: port,
              protocol: protocol.replace(':', ''),
              options: Object.freeze({
                disableWarnings: disableWarnings
              })
            });

            if (!disableWarnings) {
              emitEmulatorWarning();
            }
          }

          function extractProtocol(url) {
            var protocolEnd = url.indexOf(':');
            return protocolEnd < 0 ? '' : url.substr(0, protocolEnd + 1);
          }

          function extractHostAndPort(url) {
            var protocol = extractProtocol(url);
            var authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length)); // Between // and /, ? or #.

            if (!authority) {
              return {
                host: '',
                port: null
              };
            }

            var hostAndPort = authority[2].split('@').pop() || ''; // Strip out "username:password@".

            var bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);

            if (bracketedIPv6) {
              var host = bracketedIPv6[1];
              return {
                host: host,
                port: parsePort(hostAndPort.substr(host.length + 1))
              };
            } else {
              var _hostAndPort$split = hostAndPort.split(':'),
                  _host = _hostAndPort$split[0],
                  port = _hostAndPort$split[1];

              return {
                host: _host,
                port: parsePort(port)
              };
            }
          }

          function parsePort(portStr) {
            if (!portStr) {
              return null;
            }

            var port = Number(portStr);

            if (isNaN(port)) {
              return null;
            }

            return port;
          }

          function emitEmulatorWarning() {
            function attachBanner() {
              var el = document.createElement('p');
              var sty = el.style;
              el.innerText = 'Running in emulator mode. Do not use with production credentials.';
              sty.position = 'fixed';
              sty.width = '100%';
              sty.backgroundColor = '#ffffff';
              sty.border = '.1em solid #000000';
              sty.color = '#b50000';
              sty.bottom = '0px';
              sty.left = '0px';
              sty.margin = '0px';
              sty.zIndex = '10000';
              sty.textAlign = 'center';
              el.classList.add('firebase-emulator-warning');
              document.body.appendChild(el);
            }

            if (typeof console !== 'undefined' && typeof console.info === 'function') {
              console.info('WARNING: You are using the Auth Emulator,' + ' which is intended for local testing only.  Do not use with' + ' production credentials.');
            }

            if (typeof window !== 'undefined' && typeof document !== 'undefined') {
              if (document.readyState === 'loading') {
                window.addEventListener('DOMContentLoaded', attachBanner);
              } else {
                attachBanner();
              }
            }
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Interface that represents the credentials returned by an {@link AuthProvider}.
           *
           * @remarks
           * Implementations specify the details about each auth provider's credential requirements.
           *
           * @public
           */


          var AuthCredential = /*#__PURE__*/function () {
            /** @internal */
            function AuthCredential(
            /**
             * The authentication provider ID for the credential.
             *
             * @remarks
             * For example, 'facebook.com', or 'google.com'.
             */
            providerId,
            /**
             * The authentication sign in method for the credential.
             *
             * @remarks
             * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
             * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
             * identifier as returned in {@link fetchSignInMethodsForEmail}.
             */
            signInMethod) {
              this.providerId = providerId;
              this.signInMethod = signInMethod;
            }
            /**
             * Returns a JSON-serializable representation of this object.
             *
             * @returns a JSON-serializable representation of this object.
             */


            var _proto24 = AuthCredential.prototype;

            _proto24.toJSON = function toJSON() {
              return debugFail('not implemented');
            }
            /** @internal */
            ;

            _proto24._getIdTokenResponse = function _getIdTokenResponse(_auth) {
              return debugFail('not implemented');
            }
            /** @internal */
            ;

            _proto24._linkToIdToken = function _linkToIdToken(_auth, _idToken) {
              return debugFail('not implemented');
            }
            /** @internal */
            ;

            _proto24._getReauthenticationResolver = function _getReauthenticationResolver(_auth) {
              return debugFail('not implemented');
            };

            return AuthCredential;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function signInWithIdp(_x76, _x77) {
            return _signInWithIdp.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _signInWithIdp() {
            _signInWithIdp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee108(auth, request) {
              return _regeneratorRuntime().wrap(function _callee108$(_context108) {
                while (1) switch (_context108.prev = _context108.next) {
                  case 0:
                    return _context108.abrupt("return", _performSignInRequest(auth, "POST"
                    /* HttpMethod.POST */
                    , "/v1/accounts:signInWithIdp"
                    /* Endpoint.SIGN_IN_WITH_IDP */
                    , _addTidIfNecessary(auth, request)));

                  case 1:
                  case "end":
                    return _context108.stop();
                }
              }, _callee108);
            }));
            return _signInWithIdp.apply(this, arguments);
          }

          var IDP_REQUEST_URI$1 = 'http://localhost';
          /**
           * Represents the OAuth credentials returned by an {@link OAuthProvider}.
           *
           * @remarks
           * Implementations specify the details about each auth provider's credential requirements.
           *
           * @public
           */

          var OAuthCredential = /*#__PURE__*/function (_AuthCredential) {
            _inheritsLoose(OAuthCredential, _AuthCredential);

            function OAuthCredential() {
              var _this24;

              _this24 = _AuthCredential.apply(this, arguments) || this;
              _this24.pendingToken = null;
              return _this24;
            }
            /** @internal */


            OAuthCredential._fromParams = function _fromParams(params) {
              var cred = new OAuthCredential(params.providerId, params.signInMethod);

              if (params.idToken || params.accessToken) {
                // OAuth 2 and either ID token or access token.
                if (params.idToken) {
                  cred.idToken = params.idToken;
                }

                if (params.accessToken) {
                  cred.accessToken = params.accessToken;
                } // Add nonce if available and no pendingToken is present.


                if (params.nonce && !params.pendingToken) {
                  cred.nonce = params.nonce;
                }

                if (params.pendingToken) {
                  cred.pendingToken = params.pendingToken;
                }
              } else if (params.oauthToken && params.oauthTokenSecret) {
                // OAuth 1 and OAuth token with token secret
                cred.accessToken = params.oauthToken;
                cred.secret = params.oauthTokenSecret;
              } else {
                _fail("argument-error"
                /* AuthErrorCode.ARGUMENT_ERROR */
                );
              }

              return cred;
            }
            /** {@inheritdoc AuthCredential.toJSON}  */
            ;

            var _proto25 = OAuthCredential.prototype;

            _proto25.toJSON = function toJSON() {
              return {
                idToken: this.idToken,
                accessToken: this.accessToken,
                secret: this.secret,
                nonce: this.nonce,
                pendingToken: this.pendingToken,
                providerId: this.providerId,
                signInMethod: this.signInMethod
              };
            }
            /**
             * Static method to deserialize a JSON representation of an object into an
             * {@link  AuthCredential}.
             *
             * @param json - Input can be either Object or the stringified representation of the object.
             * When string is provided, JSON.parse would be called first.
             *
             * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
             */
            ;

            OAuthCredential.fromJSON = function fromJSON(json) {
              var obj = typeof json === 'string' ? JSON.parse(json) : json;

              var providerId = obj.providerId,
                  signInMethod = obj.signInMethod,
                  rest = __rest(obj, ["providerId", "signInMethod"]);

              if (!providerId || !signInMethod) {
                return null;
              }

              var cred = new OAuthCredential(providerId, signInMethod);
              cred.idToken = rest.idToken || undefined;
              cred.accessToken = rest.accessToken || undefined;
              cred.secret = rest.secret;
              cred.nonce = rest.nonce;
              cred.pendingToken = rest.pendingToken || null;
              return cred;
            }
            /** @internal */
            ;

            _proto25._getIdTokenResponse = function _getIdTokenResponse(auth) {
              var request = this.buildRequest();
              return signInWithIdp(auth, request);
            }
            /** @internal */
            ;

            _proto25._linkToIdToken = function _linkToIdToken(auth, idToken) {
              var request = this.buildRequest();
              request.idToken = idToken;
              return signInWithIdp(auth, request);
            }
            /** @internal */
            ;

            _proto25._getReauthenticationResolver = function _getReauthenticationResolver(auth) {
              var request = this.buildRequest();
              request.autoCreate = false;
              return signInWithIdp(auth, request);
            };

            _proto25.buildRequest = function buildRequest() {
              var request = {
                requestUri: IDP_REQUEST_URI$1,
                returnSecureToken: true
              };

              if (this.pendingToken) {
                request.pendingToken = this.pendingToken;
              } else {
                var postBody = {};

                if (this.idToken) {
                  postBody['id_token'] = this.idToken;
                }

                if (this.accessToken) {
                  postBody['access_token'] = this.accessToken;
                }

                if (this.secret) {
                  postBody['oauth_token_secret'] = this.secret;
                }

                postBody['providerId'] = this.providerId;

                if (this.nonce && !this.pendingToken) {
                  postBody['nonce'] = this.nonce;
                }

                request.postBody = querystring(postBody);
              }

              return request;
            };

            return OAuthCredential;
          }(AuthCredential);
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * The base class for all Federated providers (OAuth (including OIDC), SAML).
           *
           * This class is not meant to be instantiated directly.
           *
           * @public
           */


          var FederatedAuthProvider = /*#__PURE__*/function () {
            /**
             * Constructor for generic OAuth providers.
             *
             * @param providerId - Provider for which credentials should be generated.
             */
            function FederatedAuthProvider(providerId) {
              this.providerId = providerId;
              /** @internal */

              this.defaultLanguageCode = null;
              /** @internal */

              this.customParameters = {};
            }
            /**
             * Set the language gode.
             *
             * @param languageCode - language code
             */


            var _proto26 = FederatedAuthProvider.prototype;

            _proto26.setDefaultLanguage = function setDefaultLanguage(languageCode) {
              this.defaultLanguageCode = languageCode;
            }
            /**
             * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
             * operations.
             *
             * @remarks
             * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
             * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
             *
             * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
             */
            ;

            _proto26.setCustomParameters = function setCustomParameters(customOAuthParameters) {
              this.customParameters = customOAuthParameters;
              return this;
            }
            /**
             * Retrieve the current list of {@link CustomParameters}.
             */
            ;

            _proto26.getCustomParameters = function getCustomParameters() {
              return this.customParameters;
            };

            return FederatedAuthProvider;
          }();
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Common code to all OAuth providers. This is separate from the
           * {@link OAuthProvider} so that child providers (like
           * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
           * Instead, they rely on a static `credential` method.
           */


          var BaseOAuthProvider = /*#__PURE__*/function (_FederatedAuthProvide) {
            _inheritsLoose(BaseOAuthProvider, _FederatedAuthProvide);

            function BaseOAuthProvider() {
              var _this25;

              _this25 = _FederatedAuthProvide.apply(this, arguments) || this;
              /** @internal */

              _this25.scopes = [];
              return _this25;
            }
            /**
             * Add an OAuth scope to the credential.
             *
             * @param scope - Provider OAuth scope to add.
             */


            var _proto27 = BaseOAuthProvider.prototype;

            _proto27.addScope = function addScope(scope) {
              // If not already added, add scope to list.
              if (!this.scopes.includes(scope)) {
                this.scopes.push(scope);
              }

              return this;
            }
            /**
             * Retrieve the current list of OAuth scopes.
             */
            ;

            _proto27.getScopes = function getScopes() {
              return [].concat(this.scopes);
            };

            return BaseOAuthProvider;
          }(FederatedAuthProvider);
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
           *
           * @example
           * ```javascript
           * // Sign in using a redirect.
           * const provider = new GoogleAuthProvider();
           * // Start a sign in process for an unauthenticated user.
           * provider.addScope('profile');
           * provider.addScope('email');
           * await signInWithRedirect(auth, provider);
           * // This will trigger a full page redirect away from your app
           *
           * // After returning from the redirect when your app initializes you can obtain the result
           * const result = await getRedirectResult(auth);
           * if (result) {
           *   // This is the signed-in user
           *   const user = result.user;
           *   // This gives you a Google Access Token.
           *   const credential = GoogleAuthProvider.credentialFromResult(result);
           *   const token = credential.accessToken;
           * }
           * ```
           *
           * @example
           * ```javascript
           * // Sign in using a popup.
           * const provider = new GoogleAuthProvider();
           * provider.addScope('profile');
           * provider.addScope('email');
           * const result = await signInWithPopup(auth, provider);
           *
           * // The signed-in user info.
           * const user = result.user;
           * // This gives you a Google Access Token.
           * const credential = GoogleAuthProvider.credentialFromResult(result);
           * const token = credential.accessToken;
           * ```
           *
           * @public
           */


          var GoogleAuthProvider = /*#__PURE__*/function (_BaseOAuthProvider) {
            _inheritsLoose(GoogleAuthProvider, _BaseOAuthProvider);

            function GoogleAuthProvider() {
              var _this26;

              _this26 = _BaseOAuthProvider.call(this, "google.com"
              /* ProviderId.GOOGLE */
              ) || this;

              _this26.addScope('profile');

              return _this26;
            }
            /**
             * Creates a credential for Google. At least one of ID token and access token is required.
             *
             * @example
             * ```javascript
             * // \`googleUser\` from the onsuccess Google Sign In callback.
             * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
             * const result = await signInWithCredential(credential);
             * ```
             *
             * @param idToken - Google ID token.
             * @param accessToken - Google access token.
             */


            GoogleAuthProvider.credential = function credential(idToken, accessToken) {
              return OAuthCredential._fromParams({
                providerId: GoogleAuthProvider.PROVIDER_ID,
                signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
                idToken: idToken,
                accessToken: accessToken
              });
            }
            /**
             * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
             *
             * @param userCredential - The user credential.
             */
            ;

            GoogleAuthProvider.credentialFromResult = function credentialFromResult(userCredential) {
              return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
            }
            /**
             * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
             * thrown during a sign-in, link, or reauthenticate operation.
             *
             * @param userCredential - The user credential.
             */
            ;

            GoogleAuthProvider.credentialFromError = function credentialFromError(error) {
              return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
            };

            GoogleAuthProvider.credentialFromTaggedObject = function credentialFromTaggedObject(_ref14) {
              var tokenResponse = _ref14._tokenResponse;

              if (!tokenResponse) {
                return null;
              }

              var oauthIdToken = tokenResponse.oauthIdToken,
                  oauthAccessToken = tokenResponse.oauthAccessToken;

              if (!oauthIdToken && !oauthAccessToken) {
                // This could be an oauth 1 credential or a phone credential
                return null;
              }

              try {
                return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
              } catch (_a) {
                return null;
              }
            };

            return GoogleAuthProvider;
          }(BaseOAuthProvider);
          /** Always set to {@link SignInMethod}.GOOGLE. */


          GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com"
          /* SignInMethod.GOOGLE */
          ;
          /** Always set to {@link ProviderId}.GOOGLE. */

          GoogleAuthProvider.PROVIDER_ID = "google.com"
          /* ProviderId.GOOGLE */
          ;
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          var UserCredentialImpl = /*#__PURE__*/function () {
            function UserCredentialImpl(params) {
              this.user = params.user;
              this.providerId = params.providerId;
              this._tokenResponse = params._tokenResponse;
              this.operationType = params.operationType;
            }

            UserCredentialImpl._fromIdTokenResponse = /*#__PURE__*/function () {
              var _fromIdTokenResponse3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee53(auth, operationType, idTokenResponse, isAnonymous) {
                var user, providerId, userCred;
                return _regeneratorRuntime().wrap(function _callee53$(_context53) {
                  while (1) switch (_context53.prev = _context53.next) {
                    case 0:
                      if (isAnonymous === void 0) {
                        isAnonymous = false;
                      }

                      _context53.next = 3;
                      return UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);

                    case 3:
                      user = _context53.sent;
                      providerId = providerIdForResponse(idTokenResponse);
                      userCred = new UserCredentialImpl({
                        user: user,
                        providerId: providerId,
                        _tokenResponse: idTokenResponse,
                        operationType: operationType
                      });
                      return _context53.abrupt("return", userCred);

                    case 7:
                    case "end":
                      return _context53.stop();
                  }
                }, _callee53);
              }));

              function _fromIdTokenResponse(_x78, _x79, _x80, _x81) {
                return _fromIdTokenResponse3.apply(this, arguments);
              }

              return _fromIdTokenResponse;
            }();

            UserCredentialImpl._forOperation = /*#__PURE__*/function () {
              var _forOperation2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee54(user, operationType, response) {
                var providerId;
                return _regeneratorRuntime().wrap(function _callee54$(_context54) {
                  while (1) switch (_context54.prev = _context54.next) {
                    case 0:
                      _context54.next = 2;
                      return user._updateTokensIfNecessary(response,
                      /* reload */
                      true);

                    case 2:
                      providerId = providerIdForResponse(response);
                      return _context54.abrupt("return", new UserCredentialImpl({
                        user: user,
                        providerId: providerId,
                        _tokenResponse: response,
                        operationType: operationType
                      }));

                    case 4:
                    case "end":
                      return _context54.stop();
                  }
                }, _callee54);
              }));

              function _forOperation(_x82, _x83, _x84) {
                return _forOperation2.apply(this, arguments);
              }

              return _forOperation;
            }();

            return UserCredentialImpl;
          }();

          function providerIdForResponse(response) {
            if (response.providerId) {
              return response.providerId;
            }

            if ('phoneNumber' in response) {
              return "phone"
              /* ProviderId.PHONE */
              ;
            }

            return null;
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var MultiFactorError = /*#__PURE__*/function (_FirebaseError) {
            _inheritsLoose(MultiFactorError, _FirebaseError);

            function MultiFactorError(auth, error, operationType, user) {
              var _this27;

              var _a;

              _this27 = _FirebaseError.call(this, error.code, error.message) || this;
              _this27.operationType = operationType;
              _this27.user = user; // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

              Object.setPrototypeOf(_assertThisInitialized(_this27), MultiFactorError.prototype);
              _this27.customData = {
                appName: auth.name,
                tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : undefined,
                _serverResponse: error.customData._serverResponse,
                operationType: operationType
              };
              return _this27;
            }

            MultiFactorError._fromErrorAndOperation = function _fromErrorAndOperation(auth, error, operationType, user) {
              return new MultiFactorError(auth, error, operationType, user);
            };

            return MultiFactorError;
          }(FirebaseError);

          function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
            var idTokenProvider = operationType === "reauthenticate"
            /* OperationType.REAUTHENTICATE */
            ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
            return idTokenProvider["catch"](function (error) {
              if (error.code === "auth/" + "multi-factor-auth-required"
              /* AuthErrorCode.MFA_REQUIRED */
              ) {
                  throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
                }

              throw error;
            });
          }

          function _link$1(_x85, _x86, _x87) {
            return _link$.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _link$() {
            _link$ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee109(user, credential, bypassAuthState) {
              var response;
              return _regeneratorRuntime().wrap(function _callee109$(_context109) {
                while (1) switch (_context109.prev = _context109.next) {
                  case 0:
                    if (bypassAuthState === void 0) {
                      bypassAuthState = false;
                    }

                    _context109.t0 = _logoutIfInvalidated;
                    _context109.t1 = user;
                    _context109.t2 = credential;
                    _context109.t3 = user.auth;
                    _context109.next = 7;
                    return user.getIdToken();

                  case 7:
                    _context109.t4 = _context109.sent;
                    _context109.t5 = _context109.t2._linkToIdToken.call(_context109.t2, _context109.t3, _context109.t4);
                    _context109.t6 = bypassAuthState;
                    _context109.next = 12;
                    return (0, _context109.t0)(_context109.t1, _context109.t5, _context109.t6);

                  case 12:
                    response = _context109.sent;
                    return _context109.abrupt("return", UserCredentialImpl._forOperation(user, "link"
                    /* OperationType.LINK */
                    , response));

                  case 14:
                  case "end":
                    return _context109.stop();
                }
              }, _callee109);
            }));
            return _link$.apply(this, arguments);
          }

          function _reauthenticate(_x88, _x89, _x90) {
            return _reauthenticate2.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _reauthenticate2() {
            _reauthenticate2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee110(user, credential, bypassAuthState) {
              var auth, operationType, response, parsed, localId;
              return _regeneratorRuntime().wrap(function _callee110$(_context110) {
                while (1) switch (_context110.prev = _context110.next) {
                  case 0:
                    if (bypassAuthState === void 0) {
                      bypassAuthState = false;
                    }

                    auth = user.auth;

                    if (!_isFirebaseServerApp(auth.app)) {
                      _context110.next = 4;
                      break;
                    }

                    return _context110.abrupt("return", Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth)));

                  case 4:
                    operationType = "reauthenticate";
                    _context110.prev = 5;
                    _context110.next = 8;
                    return _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);

                  case 8:
                    response = _context110.sent;

                    _assert(response.idToken, auth, "internal-error"
                    /* AuthErrorCode.INTERNAL_ERROR */
                    );

                    parsed = _parseToken(response.idToken);

                    _assert(parsed, auth, "internal-error"
                    /* AuthErrorCode.INTERNAL_ERROR */
                    );

                    localId = parsed.sub;

                    _assert(user.uid === localId, auth, "user-mismatch"
                    /* AuthErrorCode.USER_MISMATCH */
                    );

                    return _context110.abrupt("return", UserCredentialImpl._forOperation(user, operationType, response));

                  case 17:
                    _context110.prev = 17;
                    _context110.t0 = _context110["catch"](5); // Convert user deleted error into user mismatch

                    if ((_context110.t0 === null || _context110.t0 === void 0 ? void 0 : _context110.t0.code) === "auth/" + "user-not-found"
                    /* AuthErrorCode.USER_DELETED */
                    ) {
                        _fail(auth, "user-mismatch"
                        /* AuthErrorCode.USER_MISMATCH */
                        );
                      }

                    throw _context110.t0;

                  case 21:
                  case "end":
                    return _context110.stop();
                }
              }, _callee110, null, [[5, 17]]);
            }));
            return _reauthenticate2.apply(this, arguments);
          }

          function _signInWithCredential(_x91, _x92, _x93) {
            return _signInWithCredential2.apply(this, arguments);
          }
          /**
           * Adds an observer for changes to the signed-in user's ID token.
           *
           * @remarks
           * This includes sign-in, sign-out, and token refresh events.
           * This will not be triggered automatically upon ID token expiration. Use {@link User.getIdToken} to refresh the ID token.
           *
           * @param auth - The {@link Auth} instance.
           * @param nextOrObserver - callback triggered on change.
           * @param error - Deprecated. This callback is never triggered. Errors
           * on signing in/out can be caught in promises returned from
           * sign-in/sign-out functions.
           * @param completed - Deprecated. This callback is never triggered.
           *
           * @public
           */


          function _signInWithCredential2() {
            _signInWithCredential2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee111(auth, credential, bypassAuthState) {
              var operationType, response, userCredential;
              return _regeneratorRuntime().wrap(function _callee111$(_context111) {
                while (1) switch (_context111.prev = _context111.next) {
                  case 0:
                    if (bypassAuthState === void 0) {
                      bypassAuthState = false;
                    }

                    if (!_isFirebaseServerApp(auth.app)) {
                      _context111.next = 3;
                      break;
                    }

                    return _context111.abrupt("return", Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth)));

                  case 3:
                    operationType = "signIn";
                    _context111.next = 6;
                    return _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);

                  case 6:
                    response = _context111.sent;
                    _context111.next = 9;
                    return UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);

                  case 9:
                    userCredential = _context111.sent;

                    if (bypassAuthState) {
                      _context111.next = 13;
                      break;
                    }

                    _context111.next = 13;
                    return auth._updateCurrentUser(userCredential.user);

                  case 13:
                    return _context111.abrupt("return", userCredential);

                  case 14:
                  case "end":
                    return _context111.stop();
                }
              }, _callee111);
            }));
            return _signInWithCredential2.apply(this, arguments);
          }

          function onIdTokenChanged(auth, nextOrObserver, error, completed) {
            return getModularInstance(auth).onIdTokenChanged(nextOrObserver, error, completed);
          }
          /**
           * Adds a blocking callback that runs before an auth state change
           * sets a new user.
           *
           * @param auth - The {@link Auth} instance.
           * @param callback - callback triggered before new user value is set.
           *   If this throws, it blocks the user from being set.
           * @param onAbort - callback triggered if a later `beforeAuthStateChanged()`
           *   callback throws, allowing you to undo any side effects.
           */


          function beforeAuthStateChanged(auth, callback, onAbort) {
            return getModularInstance(auth).beforeAuthStateChanged(callback, onAbort);
          }

          var STORAGE_AVAILABLE_KEY = '__sak';
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */
          // There are two different browser persistence types: local and session.
          // Both have the same implementation but use a different underlying storage
          // object.

          var BrowserPersistenceClass = /*#__PURE__*/function () {
            function BrowserPersistenceClass(storageRetriever, type) {
              this.storageRetriever = storageRetriever;
              this.type = type;
            }

            var _proto28 = BrowserPersistenceClass.prototype;

            _proto28._isAvailable = function _isAvailable() {
              try {
                if (!this.storage) {
                  return Promise.resolve(false);
                }

                this.storage.setItem(STORAGE_AVAILABLE_KEY, '1');
                this.storage.removeItem(STORAGE_AVAILABLE_KEY);
                return Promise.resolve(true);
              } catch (_a) {
                return Promise.resolve(false);
              }
            };

            _proto28._set = function _set(key, value) {
              this.storage.setItem(key, JSON.stringify(value));
              return Promise.resolve();
            };

            _proto28._get = function _get(key) {
              var json = this.storage.getItem(key);
              return Promise.resolve(json ? JSON.parse(json) : null);
            };

            _proto28._remove = function _remove(key) {
              this.storage.removeItem(key);
              return Promise.resolve();
            };

            _createClass(BrowserPersistenceClass, [{
              key: "storage",
              get: function get() {
                return this.storageRetriever();
              }
            }]);

            return BrowserPersistenceClass;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _iframeCannotSyncWebStorage() {
            var ua = getUA();
            return _isSafari(ua) || _isIOS(ua);
          } // The polling period in case events are not supported


          var _POLLING_INTERVAL_MS$1 = 1000; // The IE 10 localStorage cross tab synchronization delay in milliseconds

          var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;

          var BrowserLocalPersistence = /*#__PURE__*/function (_BrowserPersistenceCl) {
            _inheritsLoose(BrowserLocalPersistence, _BrowserPersistenceCl);

            function BrowserLocalPersistence() {
              var _this28;

              _this28 = _BrowserPersistenceCl.call(this, function () {
                return window.localStorage;
              }, "LOCAL"
              /* PersistenceType.LOCAL */
              ) || this;

              _this28.boundEventHandler = function (event, poll) {
                return _this28.onStorageEvent(event, poll);
              };

              _this28.listeners = {};
              _this28.localCache = {}; // setTimeout return value is platform specific
              // eslint-disable-next-line @typescript-eslint/no-explicit-any

              _this28.pollTimer = null; // Safari or iOS browser and embedded in an iframe.

              _this28.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe(); // Whether to use polling instead of depending on window events

              _this28.fallbackToPolling = _isMobileBrowser();
              _this28._shouldAllowMigration = true;
              return _this28;
            }

            var _proto29 = BrowserLocalPersistence.prototype;

            _proto29.forAllChangedKeys = function forAllChangedKeys(cb) {
              // Check all keys with listeners on them.
              for (var _i4 = 0, _Object$keys = Object.keys(this.listeners); _i4 < _Object$keys.length; _i4++) {
                var key = _Object$keys[_i4]; // Get value from localStorage.

                var newValue = this.storage.getItem(key);
                var oldValue = this.localCache[key]; // If local map value does not match, trigger listener with storage event.
                // Differentiate this simulated event from the real storage event.

                if (newValue !== oldValue) {
                  cb(key, oldValue, newValue);
                }
              }
            };

            _proto29.onStorageEvent = function onStorageEvent(event, poll) {
              var _this29 = this;

              if (poll === void 0) {
                poll = false;
              } // Key would be null in some situations, like when localStorage is cleared


              if (!event.key) {
                this.forAllChangedKeys(function (key, _oldValue, newValue) {
                  _this29.notifyListeners(key, newValue);
                });
                return;
              }

              var key = event.key; // Check the mechanism how this event was detected.
              // The first event will dictate the mechanism to be used.

              if (poll) {
                // Environment detects storage changes via polling.
                // Remove storage event listener to prevent possible event duplication.
                this.detachListener();
              } else {
                // Environment detects storage changes via storage event listener.
                // Remove polling listener to prevent possible event duplication.
                this.stopPolling();
              } // Safari embedded iframe. Storage event will trigger with the delta
              // changes but no changes will be applied to the iframe localStorage.


              if (this.safariLocalStorageNotSynced) {
                // Get current iframe page value.
                var _storedValue = this.storage.getItem(key); // Value not synchronized, synchronize manually.


                if (event.newValue !== _storedValue) {
                  if (event.newValue !== null) {
                    // Value changed from current value.
                    this.storage.setItem(key, event.newValue);
                  } else {
                    // Current value deleted.
                    this.storage.removeItem(key);
                  }
                } else if (this.localCache[key] === event.newValue && !poll) {
                  // Already detected and processed, do not trigger listeners again.
                  return;
                }
              }

              var triggerListeners = function triggerListeners() {
                // Keep local map up to date in case storage event is triggered before
                // poll.
                var storedValue = _this29.storage.getItem(key);

                if (!poll && _this29.localCache[key] === storedValue) {
                  // Real storage event which has already been detected, do nothing.
                  // This seems to trigger in some IE browsers for some reason.
                  return;
                }

                _this29.notifyListeners(key, storedValue);
              };

              var storedValue = this.storage.getItem(key);

              if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
                // IE 10 has this weird bug where a storage event would trigger with the
                // correct key, oldValue and newValue but localStorage.getItem(key) does
                // not yield the updated value until a few milliseconds. This ensures
                // this recovers from that situation.
                setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
              } else {
                triggerListeners();
              }
            };

            _proto29.notifyListeners = function notifyListeners(key, value) {
              this.localCache[key] = value;
              var listeners = this.listeners[key];

              if (listeners) {
                for (var _i5 = 0, _Array$from = Array.from(listeners); _i5 < _Array$from.length; _i5++) {
                  var listener = _Array$from[_i5];
                  listener(value ? JSON.parse(value) : value);
                }
              }
            };

            _proto29.startPolling = function startPolling() {
              var _this30 = this;

              this.stopPolling();
              this.pollTimer = setInterval(function () {
                _this30.forAllChangedKeys(function (key, oldValue, newValue) {
                  _this30.onStorageEvent(new StorageEvent('storage', {
                    key: key,
                    oldValue: oldValue,
                    newValue: newValue
                  }),
                  /* poll */
                  true);
                });
              }, _POLLING_INTERVAL_MS$1);
            };

            _proto29.stopPolling = function stopPolling() {
              if (this.pollTimer) {
                clearInterval(this.pollTimer);
                this.pollTimer = null;
              }
            };

            _proto29.attachListener = function attachListener() {
              window.addEventListener('storage', this.boundEventHandler);
            };

            _proto29.detachListener = function detachListener() {
              window.removeEventListener('storage', this.boundEventHandler);
            };

            _proto29._addListener = function _addListener(key, listener) {
              if (Object.keys(this.listeners).length === 0) {
                // Whether browser can detect storage event when it had already been pushed to the background.
                // This may happen in some mobile browsers. A localStorage change in the foreground window
                // will not be detected in the background window via the storage event.
                // This was detected in iOS 7.x mobile browsers
                if (this.fallbackToPolling) {
                  this.startPolling();
                } else {
                  this.attachListener();
                }
              }

              if (!this.listeners[key]) {
                this.listeners[key] = new Set(); // Populate the cache to avoid spuriously triggering on first poll.

                this.localCache[key] = this.storage.getItem(key);
              }

              this.listeners[key].add(listener);
            };

            _proto29._removeListener = function _removeListener(key, listener) {
              if (this.listeners[key]) {
                this.listeners[key]["delete"](listener);

                if (this.listeners[key].size === 0) {
                  delete this.listeners[key];
                }
              }

              if (Object.keys(this.listeners).length === 0) {
                this.detachListener();
                this.stopPolling();
              }
            } // Update local cache on base operations:
            ;

            _proto29._set = /*#__PURE__*/function () {
              var _set3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee55(key, value) {
                return _regeneratorRuntime().wrap(function _callee55$(_context55) {
                  while (1) switch (_context55.prev = _context55.next) {
                    case 0:
                      _context55.next = 2;
                      return _BrowserPersistenceCl.prototype._set.call(this, key, value);

                    case 2:
                      this.localCache[key] = JSON.stringify(value);

                    case 3:
                    case "end":
                      return _context55.stop();
                  }
                }, _callee55, this);
              }));

              function _set(_x94, _x95) {
                return _set3.apply(this, arguments);
              }

              return _set;
            }();

            _proto29._get = /*#__PURE__*/function () {
              var _get3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee56(key) {
                var value;
                return _regeneratorRuntime().wrap(function _callee56$(_context56) {
                  while (1) switch (_context56.prev = _context56.next) {
                    case 0:
                      _context56.next = 2;
                      return _BrowserPersistenceCl.prototype._get.call(this, key);

                    case 2:
                      value = _context56.sent;
                      this.localCache[key] = JSON.stringify(value);
                      return _context56.abrupt("return", value);

                    case 5:
                    case "end":
                      return _context56.stop();
                  }
                }, _callee56, this);
              }));

              function _get(_x96) {
                return _get3.apply(this, arguments);
              }

              return _get;
            }();

            _proto29._remove = /*#__PURE__*/function () {
              var _remove3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee57(key) {
                return _regeneratorRuntime().wrap(function _callee57$(_context57) {
                  while (1) switch (_context57.prev = _context57.next) {
                    case 0:
                      _context57.next = 2;
                      return _BrowserPersistenceCl.prototype._remove.call(this, key);

                    case 2:
                      delete this.localCache[key];

                    case 3:
                    case "end":
                      return _context57.stop();
                  }
                }, _callee57, this);
              }));

              function _remove(_x97) {
                return _remove3.apply(this, arguments);
              }

              return _remove;
            }();

            return BrowserLocalPersistence;
          }(BrowserPersistenceClass);

          BrowserLocalPersistence.type = 'LOCAL';
          /**
           * An implementation of {@link Persistence} of type `LOCAL` using `localStorage`
           * for the underlying storage.
           *
           * @public
           */

          var browserLocalPersistence = BrowserLocalPersistence;
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          var BrowserSessionPersistence = /*#__PURE__*/function (_BrowserPersistenceCl2) {
            _inheritsLoose(BrowserSessionPersistence, _BrowserPersistenceCl2);

            function BrowserSessionPersistence() {
              return _BrowserPersistenceCl2.call(this, function () {
                return window.sessionStorage;
              }, "SESSION"
              /* PersistenceType.SESSION */
              ) || this;
            }

            var _proto30 = BrowserSessionPersistence.prototype;

            _proto30._addListener = function _addListener(_key, _listener) {
              // Listeners are not supported for session storage since it cannot be shared across windows
              return;
            };

            _proto30._removeListener = function _removeListener(_key, _listener) {
              // Listeners are not supported for session storage since it cannot be shared across windows
              return;
            };

            return BrowserSessionPersistence;
          }(BrowserPersistenceClass);

          BrowserSessionPersistence.type = 'SESSION';
          /**
           * An implementation of {@link Persistence} of `SESSION` using `sessionStorage`
           * for the underlying storage.
           *
           * @public
           */

          var browserSessionPersistence = BrowserSessionPersistence;
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Shim for Promise.allSettled, note the slightly different format of `fulfilled` vs `status`.
           *
           * @param promises - Array of promises to wait on.
           */

          function _allSettled(promises) {
            return Promise.all(promises.map( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee58(promise) {
              var value;
              return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                while (1) switch (_context58.prev = _context58.next) {
                  case 0:
                    _context58.prev = 0;
                    _context58.next = 3;
                    return promise;

                  case 3:
                    value = _context58.sent;
                    return _context58.abrupt("return", {
                      fulfilled: true,
                      value: value
                    });

                  case 7:
                    _context58.prev = 7;
                    _context58.t0 = _context58["catch"](0);
                    return _context58.abrupt("return", {
                      fulfilled: false,
                      reason: _context58.t0
                    });

                  case 10:
                  case "end":
                    return _context58.stop();
                }
              }, _callee58, null, [[0, 7]]);
            }))));
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Interface class for receiving messages.
           *
           */


          var Receiver = /*#__PURE__*/function () {
            function Receiver(eventTarget) {
              this.eventTarget = eventTarget;
              this.handlersMap = {};
              this.boundEventHandler = this.handleEvent.bind(this);
            }
            /**
             * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
             *
             * @param eventTarget - An event target (such as window or self) through which the underlying
             * messages will be received.
             */


            Receiver._getInstance = function _getInstance(eventTarget) {
              // The results are stored in an array since objects can't be keys for other
              // objects. In addition, setting a unique property on an event target as a
              // hash map key may not be allowed due to CORS restrictions.
              var existingInstance = this.receivers.find(function (receiver) {
                return receiver.isListeningto(eventTarget);
              });

              if (existingInstance) {
                return existingInstance;
              }

              var newInstance = new Receiver(eventTarget);
              this.receivers.push(newInstance);
              return newInstance;
            };

            var _proto31 = Receiver.prototype;

            _proto31.isListeningto = function isListeningto(eventTarget) {
              return this.eventTarget === eventTarget;
            }
            /**
             * Fans out a MessageEvent to the appropriate listeners.
             *
             * @remarks
             * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
             * finished processing.
             *
             * @param event - The MessageEvent.
             *
             */
            ;

            _proto31.handleEvent = /*#__PURE__*/function () {
              var _handleEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee60(event) {
                var messageEvent, _messageEvent$data, eventId, eventType, data, handlers, promises, response;

                return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                  while (1) switch (_context60.prev = _context60.next) {
                    case 0:
                      messageEvent = event;
                      _messageEvent$data = messageEvent.data, eventId = _messageEvent$data.eventId, eventType = _messageEvent$data.eventType, data = _messageEvent$data.data;
                      handlers = this.handlersMap[eventType];

                      if (handlers === null || handlers === void 0 ? void 0 : handlers.size) {
                        _context60.next = 5;
                        break;
                      }

                      return _context60.abrupt("return");

                    case 5:
                      messageEvent.ports[0].postMessage({
                        status: "ack"
                        /* _Status.ACK */
                        ,
                        eventId: eventId,
                        eventType: eventType
                      });
                      promises = Array.from(handlers).map( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee59(handler) {
                        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
                          while (1) switch (_context59.prev = _context59.next) {
                            case 0:
                              return _context59.abrupt("return", handler(messageEvent.origin, data));

                            case 1:
                            case "end":
                              return _context59.stop();
                          }
                        }, _callee59);
                      })));
                      _context60.next = 9;
                      return _allSettled(promises);

                    case 9:
                      response = _context60.sent;
                      messageEvent.ports[0].postMessage({
                        status: "done"
                        /* _Status.DONE */
                        ,
                        eventId: eventId,
                        eventType: eventType,
                        response: response
                      });

                    case 11:
                    case "end":
                      return _context60.stop();
                  }
                }, _callee60, this);
              }));

              function handleEvent(_x99) {
                return _handleEvent.apply(this, arguments);
              }

              return handleEvent;
            }()
            /**
             * Subscribe an event handler for a particular event.
             *
             * @param eventType - Event name to subscribe to.
             * @param eventHandler - The event handler which should receive the events.
             *
             */
            ;

            _proto31._subscribe = function _subscribe(eventType, eventHandler) {
              if (Object.keys(this.handlersMap).length === 0) {
                this.eventTarget.addEventListener('message', this.boundEventHandler);
              }

              if (!this.handlersMap[eventType]) {
                this.handlersMap[eventType] = new Set();
              }

              this.handlersMap[eventType].add(eventHandler);
            }
            /**
             * Unsubscribe an event handler from a particular event.
             *
             * @param eventType - Event name to unsubscribe from.
             * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
             *
             */
            ;

            _proto31._unsubscribe = function _unsubscribe(eventType, eventHandler) {
              if (this.handlersMap[eventType] && eventHandler) {
                this.handlersMap[eventType]["delete"](eventHandler);
              }

              if (!eventHandler || this.handlersMap[eventType].size === 0) {
                delete this.handlersMap[eventType];
              }

              if (Object.keys(this.handlersMap).length === 0) {
                this.eventTarget.removeEventListener('message', this.boundEventHandler);
              }
            };

            return Receiver;
          }();

          Receiver.receivers = [];
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          function _generateEventId(prefix, digits) {
            if (prefix === void 0) {
              prefix = '';
            }

            if (digits === void 0) {
              digits = 10;
            }

            var random = '';

            for (var i = 0; i < digits; i++) {
              random += Math.floor(Math.random() * 10);
            }

            return prefix + random;
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Interface for sending messages and waiting for a completion response.
           *
           */


          var Sender = /*#__PURE__*/function () {
            function Sender(target) {
              this.target = target;
              this.handlers = new Set();
            }
            /**
             * Unsubscribe the handler and remove it from our tracking Set.
             *
             * @param handler - The handler to unsubscribe.
             */


            var _proto32 = Sender.prototype;

            _proto32.removeMessageHandler = function removeMessageHandler(handler) {
              if (handler.messageChannel) {
                handler.messageChannel.port1.removeEventListener('message', handler.onMessage);
                handler.messageChannel.port1.close();
              }

              this.handlers["delete"](handler);
            }
            /**
             * Send a message to the Receiver located at {@link target}.
             *
             * @remarks
             * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
             * receiver has had a chance to fully process the event.
             *
             * @param eventType - Type of event to send.
             * @param data - The payload of the event.
             * @param timeout - Timeout for waiting on an ACK from the receiver.
             *
             * @returns An array of settled promises from all the handlers that were listening on the receiver.
             */
            ;

            _proto32._send = /*#__PURE__*/function () {
              var _send2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee61(eventType, data, timeout
              /* _TimeoutDuration.ACK */
              ) {
                var _this31 = this;

                var messageChannel, completionTimer, handler;
                return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                  while (1) switch (_context61.prev = _context61.next) {
                    case 0:
                      if (timeout === void 0) {
                        timeout = 50;
                      }

                      messageChannel = typeof MessageChannel !== 'undefined' ? new MessageChannel() : null;

                      if (messageChannel) {
                        _context61.next = 4;
                        break;
                      }

                      throw new Error("connection_unavailable"
                      /* _MessageError.CONNECTION_UNAVAILABLE */
                      );

                    case 4:
                      return _context61.abrupt("return", new Promise(function (resolve, reject) {
                        var eventId = _generateEventId('', 20);

                        messageChannel.port1.start();
                        var ackTimer = setTimeout(function () {
                          reject(new Error("unsupported_event"
                          /* _MessageError.UNSUPPORTED_EVENT */
                          ));
                        }, timeout);
                        handler = {
                          messageChannel: messageChannel,
                          onMessage: function onMessage(event) {
                            var messageEvent = event;

                            if (messageEvent.data.eventId !== eventId) {
                              return;
                            }

                            switch (messageEvent.data.status) {
                              case "ack"
                              /* _Status.ACK */
                              :
                                // The receiver should ACK first.
                                clearTimeout(ackTimer);
                                completionTimer = setTimeout(function () {
                                  reject(new Error("timeout"
                                  /* _MessageError.TIMEOUT */
                                  ));
                                }, 3000
                                /* _TimeoutDuration.COMPLETION */
                                );
                                break;

                              case "done"
                              /* _Status.DONE */
                              :
                                // Once the receiver's handlers are finished we will get the results.
                                clearTimeout(completionTimer);
                                resolve(messageEvent.data.response);
                                break;

                              default:
                                clearTimeout(ackTimer);
                                clearTimeout(completionTimer);
                                reject(new Error("invalid_response"
                                /* _MessageError.INVALID_RESPONSE */
                                ));
                                break;
                            }
                          }
                        };

                        _this31.handlers.add(handler);

                        messageChannel.port1.addEventListener('message', handler.onMessage);

                        _this31.target.postMessage({
                          eventType: eventType,
                          eventId: eventId,
                          data: data
                        }, [messageChannel.port2]);
                      })["finally"](function () {
                        if (handler) {
                          _this31.removeMessageHandler(handler);
                        }
                      }));

                    case 5:
                    case "end":
                      return _context61.stop();
                  }
                }, _callee61);
              }));

              function _send(_x101, _x102, _x103) {
                return _send2.apply(this, arguments);
              }

              return _send;
            }();

            return Sender;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Lazy accessor for window, since the compat layer won't tree shake this out,
           * we need to make sure not to mess with window unless we have to
           */


          function _window() {
            return window;
          }

          function _setWindowLocation(url) {
            _window().location.href = url;
          }
          /**
           * @license
           * Copyright 2020 Google LLC.
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _isWorker() {
            return typeof _window()['WorkerGlobalScope'] !== 'undefined' && typeof _window()['importScripts'] === 'function';
          }

          function _getActiveServiceWorker() {
            return _getActiveServiceWorker2.apply(this, arguments);
          }

          function _getActiveServiceWorker2() {
            _getActiveServiceWorker2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee112() {
              var registration;
              return _regeneratorRuntime().wrap(function _callee112$(_context112) {
                while (1) switch (_context112.prev = _context112.next) {
                  case 0:
                    if (navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) {
                      _context112.next = 2;
                      break;
                    }

                    return _context112.abrupt("return", null);

                  case 2:
                    _context112.prev = 2;
                    _context112.next = 5;
                    return navigator.serviceWorker.ready;

                  case 5:
                    registration = _context112.sent;
                    return _context112.abrupt("return", registration.active);

                  case 9:
                    _context112.prev = 9;
                    _context112.t0 = _context112["catch"](2);
                    return _context112.abrupt("return", null);

                  case 12:
                  case "end":
                    return _context112.stop();
                }
              }, _callee112, null, [[2, 9]]);
            }));
            return _getActiveServiceWorker2.apply(this, arguments);
          }

          function _getServiceWorkerController() {
            var _a;

            return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
          }

          function _getWorkerGlobalScope() {
            return _isWorker() ? self : null;
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var DB_NAME$1 = 'firebaseLocalStorageDb';
          var DB_VERSION$1 = 1;
          var DB_OBJECTSTORE_NAME = 'firebaseLocalStorage';
          var DB_DATA_KEYPATH = 'fbase_key';
          /**
           * Promise wrapper for IDBRequest
           *
           * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
           *
           */

          var DBPromise = /*#__PURE__*/function () {
            function DBPromise(request) {
              this.request = request;
            }

            var _proto33 = DBPromise.prototype;

            _proto33.toPromise = function toPromise() {
              var _this32 = this;

              return new Promise(function (resolve, reject) {
                _this32.request.addEventListener('success', function () {
                  resolve(_this32.request.result);
                });

                _this32.request.addEventListener('error', function () {
                  reject(_this32.request.error);
                });
              });
            };

            return DBPromise;
          }();

          function getObjectStore(db, isReadWrite) {
            return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? 'readwrite' : 'readonly').objectStore(DB_OBJECTSTORE_NAME);
          }

          function _deleteDatabase() {
            var request = indexedDB.deleteDatabase(DB_NAME$1);
            return new DBPromise(request).toPromise();
          }

          function _openDatabase() {
            var request = indexedDB.open(DB_NAME$1, DB_VERSION$1);
            return new Promise(function (resolve, reject) {
              request.addEventListener('error', function () {
                reject(request.error);
              });
              request.addEventListener('upgradeneeded', function () {
                var db = request.result;

                try {
                  db.createObjectStore(DB_OBJECTSTORE_NAME, {
                    keyPath: DB_DATA_KEYPATH
                  });
                } catch (e) {
                  reject(e);
                }
              });
              request.addEventListener('success', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
                var db;
                return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                  while (1) switch (_context62.prev = _context62.next) {
                    case 0:
                      db = request.result; // Strange bug that occurs in Firefox when multiple tabs are opened at the
                      // same time. The only way to recover seems to be deleting the database
                      // and re-initializing it.
                      // https://github.com/firebase/firebase-js-sdk/issues/634

                      if (db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
                        _context62.next = 12;
                        break;
                      } // Need to close the database or else you get a `blocked` event


                      db.close();
                      _context62.next = 5;
                      return _deleteDatabase();

                    case 5:
                      _context62.t0 = resolve;
                      _context62.next = 8;
                      return _openDatabase();

                    case 8:
                      _context62.t1 = _context62.sent;
                      (0, _context62.t0)(_context62.t1);
                      _context62.next = 13;
                      break;

                    case 12:
                      resolve(db);

                    case 13:
                    case "end":
                      return _context62.stop();
                  }
                }, _callee62);
              })));
            });
          }

          function _putObject(_x104, _x105, _x106) {
            return _putObject2.apply(this, arguments);
          }

          function _putObject2() {
            _putObject2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee113(db, key, value) {
              var _getObjectStore$put;

              var request;
              return _regeneratorRuntime().wrap(function _callee113$(_context113) {
                while (1) switch (_context113.prev = _context113.next) {
                  case 0:
                    request = getObjectStore(db, true).put((_getObjectStore$put = {}, _getObjectStore$put[DB_DATA_KEYPATH] = key, _getObjectStore$put.value = value, _getObjectStore$put));
                    return _context113.abrupt("return", new DBPromise(request).toPromise());

                  case 2:
                  case "end":
                    return _context113.stop();
                }
              }, _callee113);
            }));
            return _putObject2.apply(this, arguments);
          }

          function getObject(_x107, _x108) {
            return _getObject.apply(this, arguments);
          }

          function _getObject() {
            _getObject = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee114(db, key) {
              var request, data;
              return _regeneratorRuntime().wrap(function _callee114$(_context114) {
                while (1) switch (_context114.prev = _context114.next) {
                  case 0:
                    request = getObjectStore(db, false).get(key);
                    _context114.next = 3;
                    return new DBPromise(request).toPromise();

                  case 3:
                    data = _context114.sent;
                    return _context114.abrupt("return", data === undefined ? null : data.value);

                  case 5:
                  case "end":
                    return _context114.stop();
                }
              }, _callee114);
            }));
            return _getObject.apply(this, arguments);
          }

          function _deleteObject(db, key) {
            var request = getObjectStore(db, true)["delete"](key);
            return new DBPromise(request).toPromise();
          }

          var _POLLING_INTERVAL_MS = 800;
          var _TRANSACTION_RETRY_COUNT = 3;

          var IndexedDBLocalPersistence = /*#__PURE__*/function () {
            function IndexedDBLocalPersistence() {
              this.type = "LOCAL"
              /* PersistenceType.LOCAL */
              ;
              this._shouldAllowMigration = true;
              this.listeners = {};
              this.localCache = {}; // setTimeout return value is platform specific
              // eslint-disable-next-line @typescript-eslint/no-explicit-any

              this.pollTimer = null;
              this.pendingWrites = 0;
              this.receiver = null;
              this.sender = null;
              this.serviceWorkerReceiverAvailable = false;
              this.activeServiceWorker = null; // Fire & forget the service worker registration as it may never resolve

              this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(function () {}, function () {});
            }

            var _proto34 = IndexedDBLocalPersistence.prototype;

            _proto34._openDb = /*#__PURE__*/function () {
              var _openDb2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
                return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                  while (1) switch (_context63.prev = _context63.next) {
                    case 0:
                      if (!this.db) {
                        _context63.next = 2;
                        break;
                      }

                      return _context63.abrupt("return", this.db);

                    case 2:
                      _context63.next = 4;
                      return _openDatabase();

                    case 4:
                      this.db = _context63.sent;
                      return _context63.abrupt("return", this.db);

                    case 6:
                    case "end":
                      return _context63.stop();
                  }
                }, _callee63, this);
              }));

              function _openDb() {
                return _openDb2.apply(this, arguments);
              }

              return _openDb;
            }();

            _proto34._withRetries = /*#__PURE__*/function () {
              var _withRetries2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee64(op) {
                var numAttempts, db;
                return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                  while (1) switch (_context64.prev = _context64.next) {
                    case 0:
                      numAttempts = 0;

                    case 1:
                      _context64.prev = 2;
                      _context64.next = 5;
                      return this._openDb();

                    case 5:
                      db = _context64.sent;
                      _context64.next = 8;
                      return op(db);

                    case 8:
                      return _context64.abrupt("return", _context64.sent);

                    case 11:
                      _context64.prev = 11;
                      _context64.t0 = _context64["catch"](2);

                      if (!(numAttempts++ > _TRANSACTION_RETRY_COUNT)) {
                        _context64.next = 15;
                        break;
                      }

                      throw _context64.t0;

                    case 15:
                      if (this.db) {
                        this.db.close();
                        this.db = undefined;
                      }

                    // TODO: consider adding exponential backoff

                    case 16:
                      _context64.next = 1;
                      break;

                    case 18:
                    case "end":
                      return _context64.stop();
                  }
                }, _callee64, this, [[2, 11]]);
              }));

              function _withRetries(_x109) {
                return _withRetries2.apply(this, arguments);
              }

              return _withRetries;
            }()
            /**
             * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
             * postMessage interface to send these events to the worker ourselves.
             */
            ;

            _proto34.initializeServiceWorkerMessaging = /*#__PURE__*/function () {
              var _initializeServiceWorkerMessaging = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
                return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                  while (1) switch (_context65.prev = _context65.next) {
                    case 0:
                      return _context65.abrupt("return", _isWorker() ? this.initializeReceiver() : this.initializeSender());

                    case 1:
                    case "end":
                      return _context65.stop();
                  }
                }, _callee65, this);
              }));

              function initializeServiceWorkerMessaging() {
                return _initializeServiceWorkerMessaging.apply(this, arguments);
              }

              return initializeServiceWorkerMessaging;
            }()
            /**
             * As the worker we should listen to events from the main window.
             */
            ;

            _proto34.initializeReceiver = /*#__PURE__*/function () {
              var _initializeReceiver = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
                var _this33 = this;

                return _regeneratorRuntime().wrap(function _callee68$(_context68) {
                  while (1) switch (_context68.prev = _context68.next) {
                    case 0:
                      this.receiver = Receiver._getInstance(_getWorkerGlobalScope()); // Refresh from persistence if we receive a KeyChanged message.

                      this.receiver._subscribe("keyChanged"
                      /* _EventType.KEY_CHANGED */
                      ,
                      /*#__PURE__*/
                      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee66(_origin, data) {
                        var keys;
                        return _regeneratorRuntime().wrap(function _callee66$(_context66) {
                          while (1) switch (_context66.prev = _context66.next) {
                            case 0:
                              _context66.next = 2;
                              return _this33._poll();

                            case 2:
                              keys = _context66.sent;
                              return _context66.abrupt("return", {
                                keyProcessed: keys.includes(data.key)
                              });

                            case 4:
                            case "end":
                              return _context66.stop();
                          }
                        }, _callee66);
                      }))); // Let the sender know that we are listening so they give us more timeout.


                      this.receiver._subscribe("ping"
                      /* _EventType.PING */
                      ,
                      /*#__PURE__*/
                      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee67(_origin, _data) {
                        return _regeneratorRuntime().wrap(function _callee67$(_context67) {
                          while (1) switch (_context67.prev = _context67.next) {
                            case 0:
                              return _context67.abrupt("return", ["keyChanged"
                              /* _EventType.KEY_CHANGED */
                              ]);

                            case 1:
                            case "end":
                              return _context67.stop();
                          }
                        }, _callee67);
                      })));

                    case 3:
                    case "end":
                      return _context68.stop();
                  }
                }, _callee68, this);
              }));

              function initializeReceiver() {
                return _initializeReceiver.apply(this, arguments);
              }

              return initializeReceiver;
            }()
            /**
             * As the main window, we should let the worker know when keys change (set and remove).
             *
             * @remarks
             * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
             * may not resolve.
             */
            ;

            _proto34.initializeSender = /*#__PURE__*/function () {
              var _initializeSender = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
                var _a, _b, results;

                return _regeneratorRuntime().wrap(function _callee69$(_context69) {
                  while (1) switch (_context69.prev = _context69.next) {
                    case 0:
                      _context69.next = 2;
                      return _getActiveServiceWorker();

                    case 2:
                      this.activeServiceWorker = _context69.sent;

                      if (this.activeServiceWorker) {
                        _context69.next = 5;
                        break;
                      }

                      return _context69.abrupt("return");

                    case 5:
                      this.sender = new Sender(this.activeServiceWorker); // Ping the service worker to check what events they can handle.

                      _context69.next = 8;
                      return this.sender._send("ping"
                      /* _EventType.PING */
                      , {}, 800
                      /* _TimeoutDuration.LONG_ACK */
                      );

                    case 8:
                      results = _context69.sent;

                      if (results) {
                        _context69.next = 11;
                        break;
                      }

                      return _context69.abrupt("return");

                    case 11:
                      if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"
                      /* _EventType.KEY_CHANGED */
                      ))) {
                        this.serviceWorkerReceiverAvailable = true;
                      }

                    case 12:
                    case "end":
                      return _context69.stop();
                  }
                }, _callee69, this);
              }));

              function initializeSender() {
                return _initializeSender.apply(this, arguments);
              }

              return initializeSender;
            }()
            /**
             * Let the worker know about a changed key, the exact key doesn't technically matter since the
             * worker will just trigger a full sync anyway.
             *
             * @remarks
             * For now, we only support one service worker per page.
             *
             * @param key - Storage key which changed.
             */
            ;

            _proto34.notifyServiceWorker = /*#__PURE__*/function () {
              var _notifyServiceWorker = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee70(key) {
                return _regeneratorRuntime().wrap(function _callee70$(_context70) {
                  while (1) switch (_context70.prev = _context70.next) {
                    case 0:
                      if (!(!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker)) {
                        _context70.next = 2;
                        break;
                      }

                      return _context70.abrupt("return");

                    case 2:
                      _context70.prev = 2;
                      _context70.next = 5;
                      return this.sender._send("keyChanged"
                      /* _EventType.KEY_CHANGED */
                      , {
                        key: key
                      }, // Use long timeout if receiver has previously responded to a ping from us.
                      this.serviceWorkerReceiverAvailable ? 800
                      /* _TimeoutDuration.LONG_ACK */
                      : 50
                      /* _TimeoutDuration.ACK */
                      );

                    case 5:
                      _context70.next = 9;
                      break;

                    case 7:
                      _context70.prev = 7;
                      _context70.t0 = _context70["catch"](2);

                    case 9:
                    case "end":
                      return _context70.stop();
                  }
                }, _callee70, this, [[2, 7]]);
              }));

              function notifyServiceWorker(_x114) {
                return _notifyServiceWorker.apply(this, arguments);
              }

              return notifyServiceWorker;
            }();

            _proto34._isAvailable = /*#__PURE__*/function () {
              var _isAvailable3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
                var db;
                return _regeneratorRuntime().wrap(function _callee71$(_context71) {
                  while (1) switch (_context71.prev = _context71.next) {
                    case 0:
                      _context71.prev = 0;

                      if (indexedDB) {
                        _context71.next = 3;
                        break;
                      }

                      return _context71.abrupt("return", false);

                    case 3:
                      _context71.next = 5;
                      return _openDatabase();

                    case 5:
                      db = _context71.sent;
                      _context71.next = 8;
                      return _putObject(db, STORAGE_AVAILABLE_KEY, '1');

                    case 8:
                      _context71.next = 10;
                      return _deleteObject(db, STORAGE_AVAILABLE_KEY);

                    case 10:
                      return _context71.abrupt("return", true);

                    case 13:
                      _context71.prev = 13;
                      _context71.t0 = _context71["catch"](0);

                    case 15:
                      return _context71.abrupt("return", false);

                    case 16:
                    case "end":
                      return _context71.stop();
                  }
                }, _callee71, null, [[0, 13]]);
              }));

              function _isAvailable() {
                return _isAvailable3.apply(this, arguments);
              }

              return _isAvailable;
            }();

            _proto34._withPendingWrite = /*#__PURE__*/function () {
              var _withPendingWrite2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee72(write) {
                return _regeneratorRuntime().wrap(function _callee72$(_context72) {
                  while (1) switch (_context72.prev = _context72.next) {
                    case 0:
                      this.pendingWrites++;
                      _context72.prev = 1;
                      _context72.next = 4;
                      return write();

                    case 4:
                      _context72.prev = 4;
                      this.pendingWrites--;
                      return _context72.finish(4);

                    case 7:
                    case "end":
                      return _context72.stop();
                  }
                }, _callee72, this, [[1,, 4, 7]]);
              }));

              function _withPendingWrite(_x115) {
                return _withPendingWrite2.apply(this, arguments);
              }

              return _withPendingWrite;
            }();

            _proto34._set = /*#__PURE__*/function () {
              var _set4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee74(key, value) {
                var _this34 = this;

                return _regeneratorRuntime().wrap(function _callee74$(_context74) {
                  while (1) switch (_context74.prev = _context74.next) {
                    case 0:
                      return _context74.abrupt("return", this._withPendingWrite( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
                        return _regeneratorRuntime().wrap(function _callee73$(_context73) {
                          while (1) switch (_context73.prev = _context73.next) {
                            case 0:
                              _context73.next = 2;
                              return _this34._withRetries(function (db) {
                                return _putObject(db, key, value);
                              });

                            case 2:
                              _this34.localCache[key] = value;
                              return _context73.abrupt("return", _this34.notifyServiceWorker(key));

                            case 4:
                            case "end":
                              return _context73.stop();
                          }
                        }, _callee73);
                      }))));

                    case 1:
                    case "end":
                      return _context74.stop();
                  }
                }, _callee74, this);
              }));

              function _set(_x116, _x117) {
                return _set4.apply(this, arguments);
              }

              return _set;
            }();

            _proto34._get = /*#__PURE__*/function () {
              var _get4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee75(key) {
                var obj;
                return _regeneratorRuntime().wrap(function _callee75$(_context75) {
                  while (1) switch (_context75.prev = _context75.next) {
                    case 0:
                      _context75.next = 2;
                      return this._withRetries(function (db) {
                        return getObject(db, key);
                      });

                    case 2:
                      obj = _context75.sent;
                      this.localCache[key] = obj;
                      return _context75.abrupt("return", obj);

                    case 5:
                    case "end":
                      return _context75.stop();
                  }
                }, _callee75, this);
              }));

              function _get(_x118) {
                return _get4.apply(this, arguments);
              }

              return _get;
            }();

            _proto34._remove = /*#__PURE__*/function () {
              var _remove4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee77(key) {
                var _this35 = this;

                return _regeneratorRuntime().wrap(function _callee77$(_context77) {
                  while (1) switch (_context77.prev = _context77.next) {
                    case 0:
                      return _context77.abrupt("return", this._withPendingWrite( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
                        return _regeneratorRuntime().wrap(function _callee76$(_context76) {
                          while (1) switch (_context76.prev = _context76.next) {
                            case 0:
                              _context76.next = 2;
                              return _this35._withRetries(function (db) {
                                return _deleteObject(db, key);
                              });

                            case 2:
                              delete _this35.localCache[key];
                              return _context76.abrupt("return", _this35.notifyServiceWorker(key));

                            case 4:
                            case "end":
                              return _context76.stop();
                          }
                        }, _callee76);
                      }))));

                    case 1:
                    case "end":
                      return _context77.stop();
                  }
                }, _callee77, this);
              }));

              function _remove(_x119) {
                return _remove4.apply(this, arguments);
              }

              return _remove;
            }();

            _proto34._poll = /*#__PURE__*/function () {
              var _poll2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee78() {
                var result, keys, keysInResult, _iterator12, _step12, _step12$value, key, value, _i6, _Object$keys2, localKey;

                return _regeneratorRuntime().wrap(function _callee78$(_context78) {
                  while (1) switch (_context78.prev = _context78.next) {
                    case 0:
                      _context78.next = 2;
                      return this._withRetries(function (db) {
                        var getAllRequest = getObjectStore(db, false).getAll();
                        return new DBPromise(getAllRequest).toPromise();
                      });

                    case 2:
                      result = _context78.sent;

                      if (result) {
                        _context78.next = 5;
                        break;
                      }

                      return _context78.abrupt("return", []);

                    case 5:
                      if (!(this.pendingWrites !== 0)) {
                        _context78.next = 7;
                        break;
                      }

                      return _context78.abrupt("return", []);

                    case 7:
                      keys = [];
                      keysInResult = new Set();

                      if (result.length !== 0) {
                        for (_iterator12 = _createForOfIteratorHelperLoose(result); !(_step12 = _iterator12()).done;) {
                          _step12$value = _step12.value, key = _step12$value.fbase_key, value = _step12$value.value;
                          keysInResult.add(key);

                          if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
                            this.notifyListeners(key, value);
                            keys.push(key);
                          }
                        }
                      }

                      for (_i6 = 0, _Object$keys2 = Object.keys(this.localCache); _i6 < _Object$keys2.length; _i6++) {
                        localKey = _Object$keys2[_i6];

                        if (this.localCache[localKey] && !keysInResult.has(localKey)) {
                          // Deleted
                          this.notifyListeners(localKey, null);
                          keys.push(localKey);
                        }
                      }

                      return _context78.abrupt("return", keys);

                    case 12:
                    case "end":
                      return _context78.stop();
                  }
                }, _callee78, this);
              }));

              function _poll() {
                return _poll2.apply(this, arguments);
              }

              return _poll;
            }();

            _proto34.notifyListeners = function notifyListeners(key, newValue) {
              this.localCache[key] = newValue;
              var listeners = this.listeners[key];

              if (listeners) {
                for (var _i7 = 0, _Array$from2 = Array.from(listeners); _i7 < _Array$from2.length; _i7++) {
                  var listener = _Array$from2[_i7];
                  listener(newValue);
                }
              }
            };

            _proto34.startPolling = function startPolling() {
              var _this36 = this;

              this.stopPolling();
              this.pollTimer = setInterval( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee79() {
                return _regeneratorRuntime().wrap(function _callee79$(_context79) {
                  while (1) switch (_context79.prev = _context79.next) {
                    case 0:
                      return _context79.abrupt("return", _this36._poll());

                    case 1:
                    case "end":
                      return _context79.stop();
                  }
                }, _callee79);
              })), _POLLING_INTERVAL_MS);
            };

            _proto34.stopPolling = function stopPolling() {
              if (this.pollTimer) {
                clearInterval(this.pollTimer);
                this.pollTimer = null;
              }
            };

            _proto34._addListener = function _addListener(key, listener) {
              if (Object.keys(this.listeners).length === 0) {
                this.startPolling();
              }

              if (!this.listeners[key]) {
                this.listeners[key] = new Set(); // Populate the cache to avoid spuriously triggering on first poll.

                void this._get(key); // This can happen in the background async and we can return immediately.
              }

              this.listeners[key].add(listener);
            };

            _proto34._removeListener = function _removeListener(key, listener) {
              if (this.listeners[key]) {
                this.listeners[key]["delete"](listener);

                if (this.listeners[key].size === 0) {
                  delete this.listeners[key];
                }
              }

              if (Object.keys(this.listeners).length === 0) {
                this.stopPolling();
              }
            };

            return IndexedDBLocalPersistence;
          }();

          IndexedDBLocalPersistence.type = 'LOCAL';
          /**
           * An implementation of {@link Persistence} of type `LOCAL` using `indexedDB`
           * for the underlying storage.
           *
           * @public
           */

          var indexedDBLocalPersistence = IndexedDBLocalPersistence;
          var NETWORK_TIMEOUT_DELAY = new Delay(30000, 60000);
          /**
           * @license
           * Copyright 2021 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Chooses a popup/redirect resolver to use. This prefers the override (which
           * is directly passed in), and falls back to the property set on the auth
           * object. If neither are available, this function errors w/ an argument error.
           */

          function _withDefaultResolver(auth, resolverOverride) {
            if (resolverOverride) {
              return _getInstance(resolverOverride);
            }

            _assert(auth._popupRedirectResolver, auth, "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
            );

            return auth._popupRedirectResolver;
          }
          /**
           * @license
           * Copyright 2019 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var IdpCredential = /*#__PURE__*/function (_AuthCredential2) {
            _inheritsLoose(IdpCredential, _AuthCredential2);

            function IdpCredential(params) {
              var _this37;

              _this37 = _AuthCredential2.call(this, "custom"
              /* ProviderId.CUSTOM */
              , "custom"
              /* ProviderId.CUSTOM */
              ) || this;
              _this37.params = params;
              return _this37;
            }

            var _proto35 = IdpCredential.prototype;

            _proto35._getIdTokenResponse = function _getIdTokenResponse(auth) {
              return signInWithIdp(auth, this._buildIdpRequest());
            };

            _proto35._linkToIdToken = function _linkToIdToken(auth, idToken) {
              return signInWithIdp(auth, this._buildIdpRequest(idToken));
            };

            _proto35._getReauthenticationResolver = function _getReauthenticationResolver(auth) {
              return signInWithIdp(auth, this._buildIdpRequest());
            };

            _proto35._buildIdpRequest = function _buildIdpRequest(idToken) {
              var request = {
                requestUri: this.params.requestUri,
                sessionId: this.params.sessionId,
                postBody: this.params.postBody,
                tenantId: this.params.tenantId,
                pendingToken: this.params.pendingToken,
                returnSecureToken: true,
                returnIdpCredential: true
              };

              if (idToken) {
                request.idToken = idToken;
              }

              return request;
            };

            return IdpCredential;
          }(AuthCredential);

          function _signIn(params) {
            return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
          }

          function _reauth(params) {
            var auth = params.auth,
                user = params.user;

            _assert(user, auth, "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
            );

            return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
          }

          function _link(_x120) {
            return _link2.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * Popup event manager. Handles the popup's entire lifecycle; listens to auth
           * events
           */


          function _link2() {
            _link2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee115(params) {
              var auth, user;
              return _regeneratorRuntime().wrap(function _callee115$(_context115) {
                while (1) switch (_context115.prev = _context115.next) {
                  case 0:
                    auth = params.auth, user = params.user;

                    _assert(user, auth, "internal-error"
                    /* AuthErrorCode.INTERNAL_ERROR */
                    );

                    return _context115.abrupt("return", _link$1(user, new IdpCredential(params), params.bypassAuthState));

                  case 3:
                  case "end":
                    return _context115.stop();
                }
              }, _callee115);
            }));
            return _link2.apply(this, arguments);
          }

          var AbstractPopupRedirectOperation = /*#__PURE__*/function () {
            function AbstractPopupRedirectOperation(auth, filter, resolver, user, bypassAuthState) {
              if (bypassAuthState === void 0) {
                bypassAuthState = false;
              }

              this.auth = auth;
              this.resolver = resolver;
              this.user = user;
              this.bypassAuthState = bypassAuthState;
              this.pendingPromise = null;
              this.eventManager = null;
              this.filter = Array.isArray(filter) ? filter : [filter];
            }

            var _proto36 = AbstractPopupRedirectOperation.prototype;

            _proto36.execute = function execute() {
              var _this38 = this;

              return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee80(resolve, reject) {
                return _regeneratorRuntime().wrap(function _callee80$(_context80) {
                  while (1) switch (_context80.prev = _context80.next) {
                    case 0:
                      _this38.pendingPromise = {
                        resolve: resolve,
                        reject: reject
                      };
                      _context80.prev = 1;
                      _context80.next = 4;
                      return _this38.resolver._initialize(_this38.auth);

                    case 4:
                      _this38.eventManager = _context80.sent;
                      _context80.next = 7;
                      return _this38.onExecution();

                    case 7:
                      _this38.eventManager.registerConsumer(_this38);

                      _context80.next = 13;
                      break;

                    case 10:
                      _context80.prev = 10;
                      _context80.t0 = _context80["catch"](1);

                      _this38.reject(_context80.t0);

                    case 13:
                    case "end":
                      return _context80.stop();
                  }
                }, _callee80, null, [[1, 10]]);
              })));
            };

            _proto36.onAuthEvent = /*#__PURE__*/function () {
              var _onAuthEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee81(event) {
                var urlResponse, sessionId, postBody, tenantId, error, type, params;
                return _regeneratorRuntime().wrap(function _callee81$(_context81) {
                  while (1) switch (_context81.prev = _context81.next) {
                    case 0:
                      urlResponse = event.urlResponse, sessionId = event.sessionId, postBody = event.postBody, tenantId = event.tenantId, error = event.error, type = event.type;

                      if (!error) {
                        _context81.next = 4;
                        break;
                      }

                      this.reject(error);
                      return _context81.abrupt("return");

                    case 4:
                      params = {
                        auth: this.auth,
                        requestUri: urlResponse,
                        sessionId: sessionId,
                        tenantId: tenantId || undefined,
                        postBody: postBody || undefined,
                        user: this.user,
                        bypassAuthState: this.bypassAuthState
                      };
                      _context81.prev = 5;
                      _context81.t0 = this;
                      _context81.next = 9;
                      return this.getIdpTask(type)(params);

                    case 9:
                      _context81.t1 = _context81.sent;

                      _context81.t0.resolve.call(_context81.t0, _context81.t1);

                      _context81.next = 16;
                      break;

                    case 13:
                      _context81.prev = 13;
                      _context81.t2 = _context81["catch"](5);
                      this.reject(_context81.t2);

                    case 16:
                    case "end":
                      return _context81.stop();
                  }
                }, _callee81, this, [[5, 13]]);
              }));

              function onAuthEvent(_x123) {
                return _onAuthEvent.apply(this, arguments);
              }

              return onAuthEvent;
            }();

            _proto36.onError = function onError(error) {
              this.reject(error);
            };

            _proto36.getIdpTask = function getIdpTask(type) {
              switch (type) {
                case "signInViaPopup"
                /* AuthEventType.SIGN_IN_VIA_POPUP */
                :
                case "signInViaRedirect"
                /* AuthEventType.SIGN_IN_VIA_REDIRECT */
                :
                  return _signIn;

                case "linkViaPopup"
                /* AuthEventType.LINK_VIA_POPUP */
                :
                case "linkViaRedirect"
                /* AuthEventType.LINK_VIA_REDIRECT */
                :
                  return _link;

                case "reauthViaPopup"
                /* AuthEventType.REAUTH_VIA_POPUP */
                :
                case "reauthViaRedirect"
                /* AuthEventType.REAUTH_VIA_REDIRECT */
                :
                  return _reauth;

                default:
                  _fail(this.auth, "internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                  );

              }
            };

            _proto36.resolve = function resolve(cred) {
              debugAssert(this.pendingPromise, 'Pending promise was never set');
              this.pendingPromise.resolve(cred);
              this.unregisterAndCleanUp();
            };

            _proto36.reject = function reject(error) {
              debugAssert(this.pendingPromise, 'Pending promise was never set');
              this.pendingPromise.reject(error);
              this.unregisterAndCleanUp();
            };

            _proto36.unregisterAndCleanUp = function unregisterAndCleanUp() {
              if (this.eventManager) {
                this.eventManager.unregisterConsumer(this);
              }

              this.pendingPromise = null;
              this.cleanUp();
            };

            return AbstractPopupRedirectOperation;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2000, 10000);
          /**
           * Authenticates a Firebase client using a popup-based OAuth authentication flow.
           *
           * @remarks
           * If succeeds, returns the signed in user along with the provider's credential. If sign in was
           * unsuccessful, returns an error object containing additional information about the error.
           *
           * This method does not work in a Node.js environment or with {@link Auth} instances created with a
           * {@link @firebase/app#FirebaseServerApp}.
           *
           * @example
           * ```javascript
           * // Sign in using a popup.
           * const provider = new FacebookAuthProvider();
           * const result = await signInWithPopup(auth, provider);
           *
           * // The signed-in user info.
           * const user = result.user;
           * // This gives you a Facebook Access Token.
           * const credential = provider.credentialFromResult(auth, result);
           * const token = credential.accessToken;
           * ```
           *
           * @param auth - The {@link Auth} instance.
           * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
           * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
           * @param resolver - An instance of {@link PopupRedirectResolver}, optional
           * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
           *
           * @public
           */


          function signInWithPopup(_x124, _x125, _x126) {
            return _signInWithPopup.apply(this, arguments);
          }
          /**
           * Popup event manager. Handles the popup's entire lifecycle; listens to auth
           * events
           *
           */


          function _signInWithPopup() {
            _signInWithPopup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee116(auth, provider, resolver) {
              var authInternal, resolverInternal, action;
              return _regeneratorRuntime().wrap(function _callee116$(_context116) {
                while (1) switch (_context116.prev = _context116.next) {
                  case 0:
                    if (!_isFirebaseServerApp(auth.app)) {
                      _context116.next = 2;
                      break;
                    }

                    return _context116.abrupt("return", Promise.reject(_createError(auth, "operation-not-supported-in-this-environment"
                    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
                    )));

                  case 2:
                    authInternal = _castAuth(auth);

                    _assertInstanceOf(auth, provider, FederatedAuthProvider);

                    resolverInternal = _withDefaultResolver(authInternal, resolver);
                    action = new PopupOperation(authInternal, "signInViaPopup"
                    /* AuthEventType.SIGN_IN_VIA_POPUP */
                    , provider, resolverInternal);
                    return _context116.abrupt("return", action.executeNotNull());

                  case 7:
                  case "end":
                    return _context116.stop();
                }
              }, _callee116);
            }));
            return _signInWithPopup.apply(this, arguments);
          }

          var PopupOperation = /*#__PURE__*/function (_AbstractPopupRedirec) {
            _inheritsLoose(PopupOperation, _AbstractPopupRedirec);

            function PopupOperation(auth, filter, provider, resolver, user) {
              var _this39;

              _this39 = _AbstractPopupRedirec.call(this, auth, filter, resolver, user) || this;
              _this39.provider = provider;
              _this39.authWindow = null;
              _this39.pollId = null;

              if (PopupOperation.currentPopupAction) {
                PopupOperation.currentPopupAction.cancel();
              }

              PopupOperation.currentPopupAction = _assertThisInitialized(_this39);
              return _this39;
            }

            var _proto37 = PopupOperation.prototype;

            _proto37.executeNotNull = /*#__PURE__*/function () {
              var _executeNotNull = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee82() {
                var result;
                return _regeneratorRuntime().wrap(function _callee82$(_context82) {
                  while (1) switch (_context82.prev = _context82.next) {
                    case 0:
                      _context82.next = 2;
                      return this.execute();

                    case 2:
                      result = _context82.sent;

                      _assert(result, this.auth, "internal-error"
                      /* AuthErrorCode.INTERNAL_ERROR */
                      );

                      return _context82.abrupt("return", result);

                    case 5:
                    case "end":
                      return _context82.stop();
                  }
                }, _callee82, this);
              }));

              function executeNotNull() {
                return _executeNotNull.apply(this, arguments);
              }

              return executeNotNull;
            }();

            _proto37.onExecution = /*#__PURE__*/function () {
              var _onExecution = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee83() {
                var _this40 = this;

                var eventId;
                return _regeneratorRuntime().wrap(function _callee83$(_context83) {
                  while (1) switch (_context83.prev = _context83.next) {
                    case 0:
                      debugAssert(this.filter.length === 1, 'Popup operations only handle one event');
                      eventId = _generateEventId();
                      _context83.next = 4;
                      return this.resolver._openPopup(this.auth, this.provider, this.filter[0], // There's always one, see constructor
                      eventId);

                    case 4:
                      this.authWindow = _context83.sent;
                      this.authWindow.associatedEvent = eventId; // Check for web storage support and origin validation _after_ the popup is
                      // loaded. These operations are slow (~1 second or so) Rather than
                      // waiting on them before opening the window, optimistically open the popup
                      // and check for storage support at the same time. If storage support is
                      // not available, this will cause the whole thing to reject properly. It
                      // will also close the popup, but since the promise has already rejected,
                      // the popup closed by user poll will reject into the void.

                      this.resolver._originValidation(this.auth)["catch"](function (e) {
                        _this40.reject(e);
                      });

                      this.resolver._isIframeWebStorageSupported(this.auth, function (isSupported) {
                        if (!isSupported) {
                          _this40.reject(_createError(_this40.auth, "web-storage-unsupported"
                          /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
                          ));
                        }
                      }); // Handle user closure. Notice this does *not* use await


                      this.pollUserCancellation();

                    case 9:
                    case "end":
                      return _context83.stop();
                  }
                }, _callee83, this);
              }));

              function onExecution() {
                return _onExecution.apply(this, arguments);
              }

              return onExecution;
            }();

            _proto37.cancel = function cancel() {
              this.reject(_createError(this.auth, "cancelled-popup-request"
              /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
              ));
            };

            _proto37.cleanUp = function cleanUp() {
              if (this.authWindow) {
                this.authWindow.close();
              }

              if (this.pollId) {
                window.clearTimeout(this.pollId);
              }

              this.authWindow = null;
              this.pollId = null;
              PopupOperation.currentPopupAction = null;
            };

            _proto37.pollUserCancellation = function pollUserCancellation() {
              var _this41 = this;

              var poll = function poll() {
                var _a, _b;

                if ((_b = (_a = _this41.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
                  // Make sure that there is sufficient time for whatever action to
                  // complete. The window could have closed but the sign in network
                  // call could still be in flight. This is specifically true for
                  // Firefox or if the opener is in an iframe, in which case the oauth
                  // helper closes the popup.
                  _this41.pollId = window.setTimeout(function () {
                    _this41.pollId = null;

                    _this41.reject(_createError(_this41.auth, "popup-closed-by-user"
                    /* AuthErrorCode.POPUP_CLOSED_BY_USER */
                    ));
                  }, 8000
                  /* _Timeout.AUTH_EVENT */
                  );
                  return;
                }

                _this41.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
              };

              poll();
            };

            _createClass(PopupOperation, [{
              key: "eventId",
              get: function get() {
                var _a;

                return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
              }
            }]);

            return PopupOperation;
          }(AbstractPopupRedirectOperation); // Only one popup is ever shown at once. The lifecycle of the current popup
          // can be managed / cancelled by the constructor.


          PopupOperation.currentPopupAction = null;
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          var PENDING_REDIRECT_KEY = 'pendingRedirect'; // We only get one redirect outcome for any one auth, so just store it
          // in here.

          var redirectOutcomeMap = new Map();

          var RedirectAction = /*#__PURE__*/function (_AbstractPopupRedirec2) {
            _inheritsLoose(RedirectAction, _AbstractPopupRedirec2);

            function RedirectAction(auth, resolver, bypassAuthState) {
              var _this42;

              if (bypassAuthState === void 0) {
                bypassAuthState = false;
              }

              _this42 = _AbstractPopupRedirec2.call(this, auth, ["signInViaRedirect"
              /* AuthEventType.SIGN_IN_VIA_REDIRECT */
              , "linkViaRedirect"
              /* AuthEventType.LINK_VIA_REDIRECT */
              , "reauthViaRedirect"
              /* AuthEventType.REAUTH_VIA_REDIRECT */
              , "unknown"
              /* AuthEventType.UNKNOWN */
              ], resolver, undefined, bypassAuthState) || this;
              _this42.eventId = null;
              return _this42;
            }
            /**
             * Override the execute function; if we already have a redirect result, then
             * just return it.
             */


            var _proto38 = RedirectAction.prototype;

            _proto38.execute = /*#__PURE__*/function () {
              var _execute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee84() {
                var readyOutcome, hasPendingRedirect, result;
                return _regeneratorRuntime().wrap(function _callee84$(_context84) {
                  while (1) switch (_context84.prev = _context84.next) {
                    case 0:
                      readyOutcome = redirectOutcomeMap.get(this.auth._key());

                      if (readyOutcome) {
                        _context84.next = 21;
                        break;
                      }

                      _context84.prev = 2;
                      _context84.next = 5;
                      return _getAndClearPendingRedirectStatus(this.resolver, this.auth);

                    case 5:
                      hasPendingRedirect = _context84.sent;

                      if (!hasPendingRedirect) {
                        _context84.next = 12;
                        break;
                      }

                      _context84.next = 9;
                      return _AbstractPopupRedirec2.prototype.execute.call(this);

                    case 9:
                      _context84.t0 = _context84.sent;
                      _context84.next = 13;
                      break;

                    case 12:
                      _context84.t0 = null;

                    case 13:
                      result = _context84.t0;

                      readyOutcome = function readyOutcome() {
                        return Promise.resolve(result);
                      };

                      _context84.next = 20;
                      break;

                    case 17:
                      _context84.prev = 17;
                      _context84.t1 = _context84["catch"](2);

                      readyOutcome = function readyOutcome() {
                        return Promise.reject(_context84.t1);
                      };

                    case 20:
                      redirectOutcomeMap.set(this.auth._key(), readyOutcome);

                    case 21:
                      // If we're not bypassing auth state, the ready outcome should be set to
                      // null.
                      if (!this.bypassAuthState) {
                        redirectOutcomeMap.set(this.auth._key(), function () {
                          return Promise.resolve(null);
                        });
                      }

                      return _context84.abrupt("return", readyOutcome());

                    case 23:
                    case "end":
                      return _context84.stop();
                  }
                }, _callee84, this, [[2, 17]]);
              }));

              function execute() {
                return _execute.apply(this, arguments);
              }

              return execute;
            }();

            _proto38.onAuthEvent = /*#__PURE__*/function () {
              var _onAuthEvent2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee85(event) {
                var user;
                return _regeneratorRuntime().wrap(function _callee85$(_context85) {
                  while (1) switch (_context85.prev = _context85.next) {
                    case 0:
                      if (!(event.type === "signInViaRedirect"
                      /* AuthEventType.SIGN_IN_VIA_REDIRECT */
                      )) {
                        _context85.next = 4;
                        break;
                      }

                      return _context85.abrupt("return", _AbstractPopupRedirec2.prototype.onAuthEvent.call(this, event));

                    case 4:
                      if (!(event.type === "unknown"
                      /* AuthEventType.UNKNOWN */
                      )) {
                        _context85.next = 7;
                        break;
                      } // This is a sentinel value indicating there's no pending redirect


                      this.resolve(null);
                      return _context85.abrupt("return");

                    case 7:
                      if (!event.eventId) {
                        _context85.next = 17;
                        break;
                      }

                      _context85.next = 10;
                      return this.auth._redirectUserForId(event.eventId);

                    case 10:
                      user = _context85.sent;

                      if (!user) {
                        _context85.next = 16;
                        break;
                      }

                      this.user = user;
                      return _context85.abrupt("return", _AbstractPopupRedirec2.prototype.onAuthEvent.call(this, event));

                    case 16:
                      this.resolve(null);

                    case 17:
                    case "end":
                      return _context85.stop();
                  }
                }, _callee85, this);
              }));

              function onAuthEvent(_x127) {
                return _onAuthEvent2.apply(this, arguments);
              }

              return onAuthEvent;
            }();

            _proto38.onExecution = /*#__PURE__*/function () {
              var _onExecution2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee86() {
                return _regeneratorRuntime().wrap(function _callee86$(_context86) {
                  while (1) switch (_context86.prev = _context86.next) {
                    case 0:
                    case "end":
                      return _context86.stop();
                  }
                }, _callee86);
              }));

              function onExecution() {
                return _onExecution2.apply(this, arguments);
              }

              return onExecution;
            }();

            _proto38.cleanUp = function cleanUp() {};

            return RedirectAction;
          }(AbstractPopupRedirectOperation);

          function _getAndClearPendingRedirectStatus(_x128, _x129) {
            return _getAndClearPendingRedirectStatus2.apply(this, arguments);
          }

          function _getAndClearPendingRedirectStatus2() {
            _getAndClearPendingRedirectStatus2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee117(resolver, auth) {
              var key, persistence, hasPendingRedirect;
              return _regeneratorRuntime().wrap(function _callee117$(_context117) {
                while (1) switch (_context117.prev = _context117.next) {
                  case 0:
                    key = pendingRedirectKey(auth);
                    persistence = resolverPersistence(resolver);
                    _context117.next = 4;
                    return persistence._isAvailable();

                  case 4:
                    if (_context117.sent) {
                      _context117.next = 6;
                      break;
                    }

                    return _context117.abrupt("return", false);

                  case 6:
                    _context117.next = 8;
                    return persistence._get(key);

                  case 8:
                    _context117.t0 = _context117.sent;
                    hasPendingRedirect = _context117.t0 === 'true';
                    _context117.next = 12;
                    return persistence._remove(key);

                  case 12:
                    return _context117.abrupt("return", hasPendingRedirect);

                  case 13:
                  case "end":
                    return _context117.stop();
                }
              }, _callee117);
            }));
            return _getAndClearPendingRedirectStatus2.apply(this, arguments);
          }

          function _overrideRedirectResult(auth, result) {
            redirectOutcomeMap.set(auth._key(), result);
          }

          function resolverPersistence(resolver) {
            return _getInstance(resolver._redirectPersistence);
          }

          function pendingRedirectKey(auth) {
            return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
          }

          function _getRedirectResult(_x130, _x131, _x132) {
            return _getRedirectResult2.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */
          // The amount of time to store the UIDs of seen events; this is
          // set to 10 min by default


          function _getRedirectResult2() {
            _getRedirectResult2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee118(auth, resolverExtern, bypassAuthState) {
              var authInternal, resolver, action, result;
              return _regeneratorRuntime().wrap(function _callee118$(_context118) {
                while (1) switch (_context118.prev = _context118.next) {
                  case 0:
                    if (bypassAuthState === void 0) {
                      bypassAuthState = false;
                    }

                    if (!_isFirebaseServerApp(auth.app)) {
                      _context118.next = 3;
                      break;
                    }

                    return _context118.abrupt("return", Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth)));

                  case 3:
                    authInternal = _castAuth(auth);
                    resolver = _withDefaultResolver(authInternal, resolverExtern);
                    action = new RedirectAction(authInternal, resolver, bypassAuthState);
                    _context118.next = 8;
                    return action.execute();

                  case 8:
                    result = _context118.sent;

                    if (!(result && !bypassAuthState)) {
                      _context118.next = 15;
                      break;
                    }

                    delete result.user._redirectEventId;
                    _context118.next = 13;
                    return authInternal._persistUserIfCurrent(result.user);

                  case 13:
                    _context118.next = 15;
                    return authInternal._setRedirectUser(null, resolverExtern);

                  case 15:
                    return _context118.abrupt("return", result);

                  case 16:
                  case "end":
                    return _context118.stop();
                }
              }, _callee118);
            }));
            return _getRedirectResult2.apply(this, arguments);
          }

          var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1000;

          var AuthEventManager = /*#__PURE__*/function () {
            function AuthEventManager(auth) {
              this.auth = auth;
              this.cachedEventUids = new Set();
              this.consumers = new Set();
              this.queuedRedirectEvent = null;
              this.hasHandledPotentialRedirect = false;
              this.lastProcessedEventTime = Date.now();
            }

            var _proto39 = AuthEventManager.prototype;

            _proto39.registerConsumer = function registerConsumer(authEventConsumer) {
              this.consumers.add(authEventConsumer);

              if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
                this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
                this.saveEventToCache(this.queuedRedirectEvent);
                this.queuedRedirectEvent = null;
              }
            };

            _proto39.unregisterConsumer = function unregisterConsumer(authEventConsumer) {
              this.consumers["delete"](authEventConsumer);
            };

            _proto39.onEvent = function onEvent(event) {
              var _this43 = this; // Check if the event has already been handled


              if (this.hasEventBeenHandled(event)) {
                return false;
              }

              var handled = false;
              this.consumers.forEach(function (consumer) {
                if (_this43.isEventForConsumer(event, consumer)) {
                  handled = true;

                  _this43.sendToConsumer(event, consumer);

                  _this43.saveEventToCache(event);
                }
              });

              if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
                // If we've already seen a redirect before, or this is a popup event,
                // bail now
                return handled;
              }

              this.hasHandledPotentialRedirect = true; // If the redirect wasn't handled, hang on to it

              if (!handled) {
                this.queuedRedirectEvent = event;
                handled = true;
              }

              return handled;
            };

            _proto39.sendToConsumer = function sendToConsumer(event, consumer) {
              var _a;

              if (event.error && !isNullRedirectEvent(event)) {
                var code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split('auth/')[1]) || "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
                ;
                consumer.onError(_createError(this.auth, code));
              } else {
                consumer.onAuthEvent(event);
              }
            };

            _proto39.isEventForConsumer = function isEventForConsumer(event, consumer) {
              var eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
              return consumer.filter.includes(event.type) && eventIdMatches;
            };

            _proto39.hasEventBeenHandled = function hasEventBeenHandled(event) {
              if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
                this.cachedEventUids.clear();
              }

              return this.cachedEventUids.has(eventUid(event));
            };

            _proto39.saveEventToCache = function saveEventToCache(event) {
              this.cachedEventUids.add(eventUid(event));
              this.lastProcessedEventTime = Date.now();
            };

            return AuthEventManager;
          }();

          function eventUid(e) {
            return [e.type, e.eventId, e.sessionId, e.tenantId].filter(function (v) {
              return v;
            }).join('-');
          }

          function isNullRedirectEvent(_ref24) {
            var type = _ref24.type,
                error = _ref24.error;
            return type === "unknown"
            /* AuthEventType.UNKNOWN */
            && (error === null || error === void 0 ? void 0 : error.code) === "auth/" + "no-auth-event"
            /* AuthErrorCode.NO_AUTH_EVENT */
            ;
          }

          function isRedirectEvent(event) {
            switch (event.type) {
              case "signInViaRedirect"
              /* AuthEventType.SIGN_IN_VIA_REDIRECT */
              :
              case "linkViaRedirect"
              /* AuthEventType.LINK_VIA_REDIRECT */
              :
              case "reauthViaRedirect"
              /* AuthEventType.REAUTH_VIA_REDIRECT */
              :
                return true;

              case "unknown"
              /* AuthEventType.UNKNOWN */
              :
                return isNullRedirectEvent(event);

              default:
                return false;
            }
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _getProjectConfig(_x133, _x134) {
            return _getProjectConfig2.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _getProjectConfig2() {
            _getProjectConfig2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee119(auth, request) {
              return _regeneratorRuntime().wrap(function _callee119$(_context119) {
                while (1) switch (_context119.prev = _context119.next) {
                  case 0:
                    if (request === void 0) {
                      request = {};
                    }

                    return _context119.abrupt("return", _performApiRequest(auth, "GET"
                    /* HttpMethod.GET */
                    , "/v1/projects"
                    /* Endpoint.GET_PROJECT_CONFIG */
                    , request));

                  case 2:
                  case "end":
                    return _context119.stop();
                }
              }, _callee119);
            }));
            return _getProjectConfig2.apply(this, arguments);
          }

          var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
          var HTTP_REGEX = /^https?/;

          function _validateOrigin(_x135) {
            return _validateOrigin2.apply(this, arguments);
          }

          function _validateOrigin2() {
            _validateOrigin2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee120(auth) {
              var _yield$_getProjectCon, authorizedDomains, _iterator13, _step13, domain;

              return _regeneratorRuntime().wrap(function _callee120$(_context120) {
                while (1) switch (_context120.prev = _context120.next) {
                  case 0:
                    if (!auth.config.emulator) {
                      _context120.next = 2;
                      break;
                    }

                    return _context120.abrupt("return");

                  case 2:
                    _context120.next = 4;
                    return _getProjectConfig(auth);

                  case 4:
                    _yield$_getProjectCon = _context120.sent;
                    authorizedDomains = _yield$_getProjectCon.authorizedDomains;
                    _iterator13 = _createForOfIteratorHelperLoose(authorizedDomains);

                  case 7:
                    if ((_step13 = _iterator13()).done) {
                      _context120.next = 18;
                      break;
                    }

                    domain = _step13.value;
                    _context120.prev = 9;

                    if (!matchDomain(domain)) {
                      _context120.next = 12;
                      break;
                    }

                    return _context120.abrupt("return");

                  case 12:
                    _context120.next = 16;
                    break;

                  case 14:
                    _context120.prev = 14;
                    _context120.t0 = _context120["catch"](9);

                  case 16:
                    _context120.next = 7;
                    break;

                  case 18:
                    // In the old SDK, this error also provides helpful messages.
                    _fail(auth, "unauthorized-domain"
                    /* AuthErrorCode.INVALID_ORIGIN */
                    );

                  case 19:
                  case "end":
                    return _context120.stop();
                }
              }, _callee120, null, [[9, 14]]);
            }));
            return _validateOrigin2.apply(this, arguments);
          }

          function matchDomain(expected) {
            var currentUrl = _getCurrentUrl();

            var _URL = new URL(currentUrl),
                protocol = _URL.protocol,
                hostname = _URL.hostname;

            if (expected.startsWith('chrome-extension://')) {
              var ceUrl = new URL(expected);

              if (ceUrl.hostname === '' && hostname === '') {
                // For some reason we're not parsing chrome URLs properly
                return protocol === 'chrome-extension:' && expected.replace('chrome-extension://', '') === currentUrl.replace('chrome-extension://', '');
              }

              return protocol === 'chrome-extension:' && ceUrl.hostname === hostname;
            }

            if (!HTTP_REGEX.test(protocol)) {
              return false;
            }

            if (IP_ADDRESS_REGEX.test(expected)) {
              // The domain has to be exactly equal to the pattern, as an IP domain will
              // only contain the IP, no extra character.
              return hostname === expected;
            } // Dots in pattern should be escaped.


            var escapedDomainPattern = expected.replace(/\./g, '\\.'); // Non ip address domains.
            // domain.com = *.domain.com OR domain.com

            var re = new RegExp('^(.+\\.' + escapedDomainPattern + '|' + escapedDomainPattern + ')$', 'i');
            return re.test(hostname);
          }
          /**
           * @license
           * Copyright 2020 Google LLC.
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var NETWORK_TIMEOUT = new Delay(30000, 60000);
          /**
           * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
           * it will stop working after a retrial. This is a hack to fix this issue.
           */

          function resetUnloadedGapiModules() {
            // Clear last failed gapi.load state to force next gapi.load to first
            // load the failed gapi.iframes module.
            // Get gapix.beacon context.
            var beacon = _window().___jsl; // Get current hint.


            if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
              // Get gapi hint.
              for (var _i8 = 0, _Object$keys3 = Object.keys(beacon.H); _i8 < _Object$keys3.length; _i8++) {
                var hint = _Object$keys3[_i8]; // Requested modules.

                beacon.H[hint].r = beacon.H[hint].r || []; // Loaded modules.

                beacon.H[hint].L = beacon.H[hint].L || []; // Set requested modules to a copy of the loaded modules.

                beacon.H[hint].r = [].concat(beacon.H[hint].L); // Clear pending callbacks.

                if (beacon.CP) {
                  for (var i = 0; i < beacon.CP.length; i++) {
                    // Remove all failed pending callbacks.
                    beacon.CP[i] = null;
                  }
                }
              }
            }
          }

          function loadGapi(auth) {
            return new Promise(function (resolve, reject) {
              var _a, _b, _c; // Function to run when gapi.load is ready.


              function loadGapiIframe() {
                // The developer may have tried to previously run gapi.load and failed.
                // Run this to fix that.
                resetUnloadedGapiModules();
                gapi.load('gapi.iframes', {
                  callback: function callback() {
                    resolve(gapi.iframes.getContext());
                  },
                  ontimeout: function ontimeout() {
                    // The above reset may be sufficient, but having this reset after
                    // failure ensures that if the developer calls gapi.load after the
                    // connection is re-established and before another attempt to embed
                    // the iframe, it would work and would not be broken because of our
                    // failed attempt.
                    // Timeout when gapi.iframes.Iframe not loaded.
                    resetUnloadedGapiModules();
                    reject(_createError(auth, "network-request-failed"
                    /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                    ));
                  },
                  timeout: NETWORK_TIMEOUT.get()
                });
              }

              if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
                // If gapi.iframes.Iframe available, resolve.
                resolve(gapi.iframes.getContext());
              } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
                // Gapi loader ready, load gapi.iframes.
                loadGapiIframe();
              } else {
                // Create a new iframe callback when this is called so as not to overwrite
                // any previous defined callback. This happens if this method is called
                // multiple times in parallel and could result in the later callback
                // overwriting the previous one. This would end up with a iframe
                // timeout.
                var cbName = _generateCallbackName('iframefcb'); // GApi loader not available, dynamically load platform.js.


                _window()[cbName] = function () {
                  // GApi loader should be ready.
                  if (!!gapi.load) {
                    loadGapiIframe();
                  } else {
                    // Gapi loader failed, throw error.
                    reject(_createError(auth, "network-request-failed"
                    /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                    ));
                  }
                }; // Load GApi loader.


                return _loadJS(_gapiScriptUrl() + "?onload=" + cbName)["catch"](function (e) {
                  return reject(e);
                });
              }
            })["catch"](function (error) {
              // Reset cached promise to allow for retrial.
              cachedGApiLoader = null;
              throw error;
            });
          }

          var cachedGApiLoader = null;

          function _loadGapi(auth) {
            cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
            return cachedGApiLoader;
          }
          /**
           * @license
           * Copyright 2020 Google LLC.
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var PING_TIMEOUT = new Delay(5000, 15000);
          var IFRAME_PATH = '__/auth/iframe';
          var EMULATED_IFRAME_PATH = 'emulator/auth/iframe';
          var IFRAME_ATTRIBUTES = {
            style: {
              position: 'absolute',
              top: '-100px',
              width: '1px',
              height: '1px'
            },
            'aria-hidden': 'true',
            tabindex: '-1'
          }; // Map from apiHost to endpoint ID for passing into iframe. In current SDK, apiHost can be set to
          // anything (not from a list of endpoints with IDs as in legacy), so this is the closest we can get.

          var EID_FROM_APIHOST = new Map([["identitytoolkit.googleapis.com"
          /* DefaultConfig.API_HOST */
          , 'p'], ['staging-identitytoolkit.sandbox.googleapis.com', 's'], ['test-identitytoolkit.sandbox.googleapis.com', 't'] // test
          ]);

          function getIframeUrl(auth) {
            var config = auth.config;

            _assert(config.authDomain, auth, "auth-domain-config-required"
            /* AuthErrorCode.MISSING_AUTH_DOMAIN */
            );

            var url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : "https://" + auth.config.authDomain + "/" + IFRAME_PATH;
            var params = {
              apiKey: config.apiKey,
              appName: auth.name,
              v: SDK_VERSION
            };
            var eid = EID_FROM_APIHOST.get(auth.config.apiHost);

            if (eid) {
              params.eid = eid;
            }

            var frameworks = auth._getFrameworks();

            if (frameworks.length) {
              params.fw = frameworks.join(',');
            }

            return url + "?" + querystring(params).slice(1);
          }

          function _openIframe(_x136) {
            return _openIframe2.apply(this, arguments);
          }
          /**
           * @license
           * Copyright 2020 Google LLC.
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function _openIframe2() {
            _openIframe2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee122(auth) {
              var context, gapi;
              return _regeneratorRuntime().wrap(function _callee122$(_context122) {
                while (1) switch (_context122.prev = _context122.next) {
                  case 0:
                    _context122.next = 2;
                    return _loadGapi(auth);

                  case 2:
                    context = _context122.sent;
                    gapi = _window().gapi;

                    _assert(gapi, auth, "internal-error"
                    /* AuthErrorCode.INTERNAL_ERROR */
                    );

                    return _context122.abrupt("return", context.open({
                      where: document.body,
                      url: getIframeUrl(auth),
                      messageHandlersFilter: gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                      attributes: IFRAME_ATTRIBUTES,
                      dontclear: true
                    }, function (iframe) {
                      return new Promise( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee121(resolve, reject) {
                        var networkError, networkErrorTimer, clearTimerAndResolve;
                        return _regeneratorRuntime().wrap(function _callee121$(_context121) {
                          while (1) switch (_context121.prev = _context121.next) {
                            case 0:
                              clearTimerAndResolve = function _clearTimerAndResolve() {
                                _window().clearTimeout(networkErrorTimer);

                                resolve(iframe);
                              };

                              _context121.next = 3;
                              return iframe.restyle({
                                // Prevent iframe from closing on mouse out.
                                setHideOnLeave: false
                              });

                            case 3:
                              networkError = _createError(auth, "network-request-failed"
                              /* AuthErrorCode.NETWORK_REQUEST_FAILED */
                              ); // Confirm iframe is correctly loaded.
                              // To fallback on failure, set a timeout.

                              networkErrorTimer = _window().setTimeout(function () {
                                reject(networkError);
                              }, PING_TIMEOUT.get()); // Clear timer and resolve pending iframe ready promise.
                              // This returns an IThenable. However the reject part does not call
                              // when the iframe is not loaded.

                              iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, function () {
                                reject(networkError);
                              });

                            case 6:
                            case "end":
                              return _context121.stop();
                          }
                        }, _callee121);
                      })));
                    }));

                  case 6:
                  case "end":
                    return _context122.stop();
                }
              }, _callee122);
            }));
            return _openIframe2.apply(this, arguments);
          }

          var BASE_POPUP_OPTIONS = {
            location: 'yes',
            resizable: 'yes',
            statusbar: 'yes',
            toolbar: 'no'
          };
          var DEFAULT_WIDTH = 500;
          var DEFAULT_HEIGHT = 600;
          var TARGET_BLANK = '_blank';
          var FIREFOX_EMPTY_URL = 'http://localhost';

          var AuthPopup = /*#__PURE__*/function () {
            function AuthPopup(window) {
              this.window = window;
              this.associatedEvent = null;
            }

            var _proto40 = AuthPopup.prototype;

            _proto40.close = function close() {
              if (this.window) {
                try {
                  this.window.close();
                } catch (e) {}
              }
            };

            return AuthPopup;
          }();

          function _open(auth, url, name, width, height) {
            if (width === void 0) {
              width = DEFAULT_WIDTH;
            }

            if (height === void 0) {
              height = DEFAULT_HEIGHT;
            }

            var top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
            var left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
            var target = '';
            var options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
              width: width.toString(),
              height: height.toString(),
              top: top,
              left: left
            }); // Chrome iOS 7 and 8 is returning an undefined popup win when target is
            // specified, even though the popup is not necessarily blocked.

            var ua = getUA().toLowerCase();

            if (name) {
              target = _isChromeIOS(ua) ? TARGET_BLANK : name;
            }

            if (_isFirefox(ua)) {
              // Firefox complains when invalid URLs are popped out. Hacky way to bypass.
              url = url || FIREFOX_EMPTY_URL; // Firefox disables by default scrolling on popup windows, which can create
              // issues when the user has many Google accounts, for instance.

              options.scrollbars = 'yes';
            }

            var optionsString = Object.entries(options).reduce(function (accum, _ref25) {
              var key = _ref25[0],
                  value = _ref25[1];
              return "" + accum + key + "=" + value + ",";
            }, '');

            if (_isIOSStandalone(ua) && target !== '_self') {
              openAsNewWindowIOS(url || '', target);
              return new AuthPopup(null);
            } // about:blank getting sanitized causing browsers like IE/Edge to display
            // brief error message before redirecting to handler.


            var newWin = window.open(url || '', target, optionsString);

            _assert(newWin, auth, "popup-blocked"
            /* AuthErrorCode.POPUP_BLOCKED */
            ); // Flaky on IE edge, encapsulate with a try and catch.


            try {
              newWin.focus();
            } catch (e) {}

            return new AuthPopup(newWin);
          }

          function openAsNewWindowIOS(url, target) {
            var el = document.createElement('a');
            el.href = url;
            el.target = target;
            var click = document.createEvent('MouseEvent');
            click.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
            el.dispatchEvent(click);
          }
          /**
           * @license
           * Copyright 2021 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * URL for Authentication widget which will initiate the OAuth handshake
           *
           * @internal
           */


          var WIDGET_PATH = '__/auth/handler';
          /**
           * URL for emulated environment
           *
           * @internal
           */

          var EMULATOR_WIDGET_PATH = 'emulator/auth/handler';
          /**
           * Fragment name for the App Check token that gets passed to the widget
           *
           * @internal
           */

          var FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent('fac');

          function _getRedirectUrl(_x137, _x138, _x139, _x140, _x141, _x142) {
            return _getRedirectUrl2.apply(this, arguments);
          }

          function _getRedirectUrl2() {
            _getRedirectUrl2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee123(auth, provider, authType, redirectUrl, eventId, additionalParams) {
              var params, _i9, _Object$entries2, _Object$entries2$_i, key, value, scopes, paramsDict, _i10, _Object$keys4, _key18, appCheckToken, appCheckTokenFragment;

              return _regeneratorRuntime().wrap(function _callee123$(_context123) {
                while (1) switch (_context123.prev = _context123.next) {
                  case 0:
                    _assert(auth.config.authDomain, auth, "auth-domain-config-required"
                    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
                    );

                    _assert(auth.config.apiKey, auth, "invalid-api-key"
                    /* AuthErrorCode.INVALID_API_KEY */
                    );

                    params = {
                      apiKey: auth.config.apiKey,
                      appName: auth.name,
                      authType: authType,
                      redirectUrl: redirectUrl,
                      v: SDK_VERSION,
                      eventId: eventId
                    };

                    if (provider instanceof FederatedAuthProvider) {
                      provider.setDefaultLanguage(auth.languageCode);
                      params.providerId = provider.providerId || '';

                      if (!isEmpty(provider.getCustomParameters())) {
                        params.customParameters = JSON.stringify(provider.getCustomParameters());
                      } // TODO set additionalParams from the provider as well?


                      for (_i9 = 0, _Object$entries2 = Object.entries(additionalParams || {}); _i9 < _Object$entries2.length; _i9++) {
                        _Object$entries2$_i = _Object$entries2[_i9], key = _Object$entries2$_i[0], value = _Object$entries2$_i[1];
                        params[key] = value;
                      }
                    }

                    if (provider instanceof BaseOAuthProvider) {
                      scopes = provider.getScopes().filter(function (scope) {
                        return scope !== '';
                      });

                      if (scopes.length > 0) {
                        params.scopes = scopes.join(',');
                      }
                    }

                    if (auth.tenantId) {
                      params.tid = auth.tenantId;
                    } // TODO: maybe set eid as endipointId
                    // TODO: maybe set fw as Frameworks.join(",")


                    paramsDict = params;

                    for (_i10 = 0, _Object$keys4 = Object.keys(paramsDict); _i10 < _Object$keys4.length; _i10++) {
                      _key18 = _Object$keys4[_i10];

                      if (paramsDict[_key18] === undefined) {
                        delete paramsDict[_key18];
                      }
                    } // Sets the App Check token to pass to the widget


                    _context123.next = 10;
                    return auth._getAppCheckToken();

                  case 10:
                    appCheckToken = _context123.sent;
                    appCheckTokenFragment = appCheckToken ? "#" + FIREBASE_APP_CHECK_FRAGMENT_ID + "=" + encodeURIComponent(appCheckToken) : ''; // Start at index 1 to skip the leading '&' in the query string

                    return _context123.abrupt("return", getHandlerBase(auth) + "?" + querystring(paramsDict).slice(1) + appCheckTokenFragment);

                  case 13:
                  case "end":
                    return _context123.stop();
                }
              }, _callee123);
            }));
            return _getRedirectUrl2.apply(this, arguments);
          }

          function getHandlerBase(_ref26) {
            var config = _ref26.config;

            if (!config.emulator) {
              return "https://" + config.authDomain + "/" + WIDGET_PATH;
            }

            return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
          }
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          /**
           * The special web storage event
           *
           */


          var WEB_STORAGE_SUPPORT_KEY = 'webStorageSupport';

          var BrowserPopupRedirectResolver = /*#__PURE__*/function () {
            function BrowserPopupRedirectResolver() {
              this.eventManagers = {};
              this.iframes = {};
              this.originValidationPromises = {};
              this._redirectPersistence = browserSessionPersistence;
              this._completeRedirectFn = _getRedirectResult;
              this._overrideRedirectResult = _overrideRedirectResult;
            } // Wrapping in async even though we don't await anywhere in order
            // to make sure errors are raised as promise rejections


            var _proto41 = BrowserPopupRedirectResolver.prototype;

            _proto41._openPopup = /*#__PURE__*/function () {
              var _openPopup2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee87(auth, provider, authType, eventId) {
                var _a, url;

                return _regeneratorRuntime().wrap(function _callee87$(_context87) {
                  while (1) switch (_context87.prev = _context87.next) {
                    case 0:
                      debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, '_initialize() not called before _openPopup()');
                      _context87.next = 3;
                      return _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);

                    case 3:
                      url = _context87.sent;
                      return _context87.abrupt("return", _open(auth, url, _generateEventId()));

                    case 5:
                    case "end":
                      return _context87.stop();
                  }
                }, _callee87, this);
              }));

              function _openPopup(_x143, _x144, _x145, _x146) {
                return _openPopup2.apply(this, arguments);
              }

              return _openPopup;
            }();

            _proto41._openRedirect = /*#__PURE__*/function () {
              var _openRedirect2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee88(auth, provider, authType, eventId) {
                var url;
                return _regeneratorRuntime().wrap(function _callee88$(_context88) {
                  while (1) switch (_context88.prev = _context88.next) {
                    case 0:
                      _context88.next = 2;
                      return this._originValidation(auth);

                    case 2:
                      _context88.next = 4;
                      return _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);

                    case 4:
                      url = _context88.sent;

                      _setWindowLocation(url);

                      return _context88.abrupt("return", new Promise(function () {}));

                    case 7:
                    case "end":
                      return _context88.stop();
                  }
                }, _callee88, this);
              }));

              function _openRedirect(_x147, _x148, _x149, _x150) {
                return _openRedirect2.apply(this, arguments);
              }

              return _openRedirect;
            }();

            _proto41._initialize = function _initialize(auth) {
              var _this44 = this;

              var key = auth._key();

              if (this.eventManagers[key]) {
                var _this$eventManagers$k = this.eventManagers[key],
                    manager = _this$eventManagers$k.manager,
                    _promise = _this$eventManagers$k.promise;

                if (manager) {
                  return Promise.resolve(manager);
                } else {
                  debugAssert(_promise, 'If manager is not set, promise should be');
                  return _promise;
                }
              }

              var promise = this.initAndGetManager(auth);
              this.eventManagers[key] = {
                promise: promise
              }; // If the promise is rejected, the key should be removed so that the
              // operation can be retried later.

              promise["catch"](function () {
                delete _this44.eventManagers[key];
              });
              return promise;
            };

            _proto41.initAndGetManager = /*#__PURE__*/function () {
              var _initAndGetManager = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee89(auth) {
                var iframe, manager;
                return _regeneratorRuntime().wrap(function _callee89$(_context89) {
                  while (1) switch (_context89.prev = _context89.next) {
                    case 0:
                      _context89.next = 2;
                      return _openIframe(auth);

                    case 2:
                      iframe = _context89.sent;
                      manager = new AuthEventManager(auth);
                      iframe.register('authEvent', function (iframeEvent) {
                        _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event"
                        /* AuthErrorCode.INVALID_AUTH_EVENT */
                        ); // TODO: Consider splitting redirect and popup events earlier on


                        var handled = manager.onEvent(iframeEvent.authEvent);
                        return {
                          status: handled ? "ACK"
                          /* GapiOutcome.ACK */
                          : "ERROR"
                          /* GapiOutcome.ERROR */

                        };
                      }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
                      this.eventManagers[auth._key()] = {
                        manager: manager
                      };
                      this.iframes[auth._key()] = iframe;
                      return _context89.abrupt("return", manager);

                    case 8:
                    case "end":
                      return _context89.stop();
                  }
                }, _callee89, this);
              }));

              function initAndGetManager(_x151) {
                return _initAndGetManager.apply(this, arguments);
              }

              return initAndGetManager;
            }();

            _proto41._isIframeWebStorageSupported = function _isIframeWebStorageSupported(auth, cb) {
              var iframe = this.iframes[auth._key()];

              iframe.send(WEB_STORAGE_SUPPORT_KEY, {
                type: WEB_STORAGE_SUPPORT_KEY
              }, function (result) {
                var _a;

                var isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];

                if (isSupported !== undefined) {
                  cb(!!isSupported);
                }

                _fail(auth, "internal-error"
                /* AuthErrorCode.INTERNAL_ERROR */
                );
              }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
            };

            _proto41._originValidation = function _originValidation(auth) {
              var key = auth._key();

              if (!this.originValidationPromises[key]) {
                this.originValidationPromises[key] = _validateOrigin(auth);
              }

              return this.originValidationPromises[key];
            };

            _createClass(BrowserPopupRedirectResolver, [{
              key: "_shouldInitProactively",
              get: function get() {
                // Mobile browsers and Safari need to optimistically initialize
                return _isMobileBrowser() || _isSafari() || _isIOS();
              }
            }]);

            return BrowserPopupRedirectResolver;
          }();
          /**
           * An implementation of {@link PopupRedirectResolver} suitable for browser
           * based applications.
           *
           * @remarks
           * This method does not work in a Node.js environment.
           *
           * @public
           */


          var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
          var name$r = "@firebase/auth";
          var version$4 = "1.7.5";
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */

          var AuthInterop = /*#__PURE__*/function () {
            function AuthInterop(auth) {
              this.auth = auth;
              this.internalListeners = new Map();
            }

            var _proto42 = AuthInterop.prototype;

            _proto42.getUid = function getUid() {
              var _a;

              this.assertAuthConfigured();
              return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
            };

            _proto42.getToken = /*#__PURE__*/function () {
              var _getToken2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee90(forceRefresh) {
                var accessToken;
                return _regeneratorRuntime().wrap(function _callee90$(_context90) {
                  while (1) switch (_context90.prev = _context90.next) {
                    case 0:
                      this.assertAuthConfigured();
                      _context90.next = 3;
                      return this.auth._initializationPromise;

                    case 3:
                      if (this.auth.currentUser) {
                        _context90.next = 5;
                        break;
                      }

                      return _context90.abrupt("return", null);

                    case 5:
                      _context90.next = 7;
                      return this.auth.currentUser.getIdToken(forceRefresh);

                    case 7:
                      accessToken = _context90.sent;
                      return _context90.abrupt("return", {
                        accessToken: accessToken
                      });

                    case 9:
                    case "end":
                      return _context90.stop();
                  }
                }, _callee90, this);
              }));

              function getToken(_x152) {
                return _getToken2.apply(this, arguments);
              }

              return getToken;
            }();

            _proto42.addAuthTokenListener = function addAuthTokenListener(listener) {
              this.assertAuthConfigured();

              if (this.internalListeners.has(listener)) {
                return;
              }

              var unsubscribe = this.auth.onIdTokenChanged(function (user) {
                listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
              });
              this.internalListeners.set(listener, unsubscribe);
              this.updateProactiveRefresh();
            };

            _proto42.removeAuthTokenListener = function removeAuthTokenListener(listener) {
              this.assertAuthConfigured();
              var unsubscribe = this.internalListeners.get(listener);

              if (!unsubscribe) {
                return;
              }

              this.internalListeners["delete"](listener);
              unsubscribe();
              this.updateProactiveRefresh();
            };

            _proto42.assertAuthConfigured = function assertAuthConfigured() {
              _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth"
              /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
              );
            };

            _proto42.updateProactiveRefresh = function updateProactiveRefresh() {
              if (this.internalListeners.size > 0) {
                this.auth._startProactiveRefresh();
              } else {
                this.auth._stopProactiveRefresh();
              }
            };

            return AuthInterop;
          }();
          /**
           * @license
           * Copyright 2020 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          function getVersionForPlatform(clientPlatform) {
            switch (clientPlatform) {
              case "Node"
              /* ClientPlatform.NODE */
              :
                return 'node';

              case "ReactNative"
              /* ClientPlatform.REACT_NATIVE */
              :
                return 'rn';

              case "Worker"
              /* ClientPlatform.WORKER */
              :
                return 'webworker';

              case "Cordova"
              /* ClientPlatform.CORDOVA */
              :
                return 'cordova';

              case "WebExtension"
              /* ClientPlatform.WEB_EXTENSION */
              :
                return 'web-extension';

              default:
                return undefined;
            }
          }
          /** @internal */


          function registerAuth(clientPlatform) {
            _registerComponent(new Component("auth"
            /* _ComponentName.AUTH */
            , function (container, _ref27) {
              var deps = _ref27.options;
              var app = container.getProvider('app').getImmediate();
              var heartbeatServiceProvider = container.getProvider('heartbeat');
              var appCheckServiceProvider = container.getProvider('app-check-internal');
              var _app$options = app.options,
                  apiKey = _app$options.apiKey,
                  authDomain = _app$options.authDomain;

              _assert(apiKey && !apiKey.includes(':'), "invalid-api-key"
              /* AuthErrorCode.INVALID_API_KEY */
              , {
                appName: app.name
              });

              var config = {
                apiKey: apiKey,
                authDomain: authDomain,
                clientPlatform: clientPlatform,
                apiHost: "identitytoolkit.googleapis.com"
                /* DefaultConfig.API_HOST */
                ,
                tokenApiHost: "securetoken.googleapis.com"
                /* DefaultConfig.TOKEN_API_HOST */
                ,
                apiScheme: "https"
                /* DefaultConfig.API_SCHEME */
                ,
                sdkClientVersion: _getClientVersion(clientPlatform)
              };
              var authInstance = new AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config);

              _initializeAuthInstance(authInstance, deps);

              return authInstance;
            }, "PUBLIC"
            /* ComponentType.PUBLIC */
            )
            /**
             * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
             * For why we do this, See go/firebase-next-auth-init
             */
            .setInstantiationMode("EXPLICIT"
            /* InstantiationMode.EXPLICIT */
            )
            /**
             * Because all firebase products that depend on auth depend on auth-internal directly,
             * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
             */
            .setInstanceCreatedCallback(function (container, _instanceIdentifier, _instance) {
              var authInternalProvider = container.getProvider("auth-internal"
              /* _ComponentName.AUTH_INTERNAL */
              );
              authInternalProvider.initialize();
            }));

            _registerComponent(new Component("auth-internal"
            /* _ComponentName.AUTH_INTERNAL */
            , function (container) {
              var auth = _castAuth(container.getProvider("auth"
              /* _ComponentName.AUTH */
              ).getImmediate());

              return function (auth) {
                return new AuthInterop(auth);
              }(auth);
            }, "PRIVATE"
            /* ComponentType.PRIVATE */
            ).setInstantiationMode("EXPLICIT"
            /* InstantiationMode.EXPLICIT */
            ));

            registerVersion(name$r, version$4, getVersionForPlatform(clientPlatform)); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

            registerVersion(name$r, version$4, 'esm2017');
          }
          /**
           * @license
           * Copyright 2021 Google LLC
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *   http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           */


          var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
          var authIdTokenMaxAge = getExperimentalSetting('authIdTokenMaxAge') || DEFAULT_ID_TOKEN_MAX_AGE;
          var lastPostedIdToken = null;

          var mintCookieFactory = function mintCookieFactory(url) {
            return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee91(user) {
              var idTokenResult, idTokenAge, idToken;
              return _regeneratorRuntime().wrap(function _callee91$(_context91) {
                while (1) switch (_context91.prev = _context91.next) {
                  case 0:
                    _context91.t0 = user;

                    if (!_context91.t0) {
                      _context91.next = 5;
                      break;
                    }

                    _context91.next = 4;
                    return user.getIdTokenResult();

                  case 4:
                    _context91.t0 = _context91.sent;

                  case 5:
                    idTokenResult = _context91.t0;
                    idTokenAge = idTokenResult && (new Date().getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1000;

                    if (!(idTokenAge && idTokenAge > authIdTokenMaxAge)) {
                      _context91.next = 9;
                      break;
                    }

                    return _context91.abrupt("return");

                  case 9:
                    // Specifically trip null => undefined when logged out, to delete any existing cookie
                    idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;

                    if (!(lastPostedIdToken === idToken)) {
                      _context91.next = 12;
                      break;
                    }

                    return _context91.abrupt("return");

                  case 12:
                    lastPostedIdToken = idToken;
                    _context91.next = 15;
                    return fetch(url, {
                      method: idToken ? 'POST' : 'DELETE',
                      headers: idToken ? {
                        'Authorization': "Bearer " + idToken
                      } : {}
                    });

                  case 15:
                  case "end":
                    return _context91.stop();
                }
              }, _callee91);
            }));
          };
          /**
           * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
           * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
           *
           * @param app - The Firebase App.
           *
           * @public
           */


          function getAuth(app) {
            if (app === void 0) {
              app = getApp();
            }

            var provider = _getProvider(app, 'auth');

            if (provider.isInitialized()) {
              return provider.getImmediate();
            }

            var auth = initializeAuth(app, {
              popupRedirectResolver: browserPopupRedirectResolver,
              persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]
            });
            var authTokenSyncPath = getExperimentalSetting('authTokenSyncURL'); // Only do the Cookie exchange in a secure context

            if (authTokenSyncPath && typeof isSecureContext === 'boolean' && isSecureContext) {
              // Don't allow urls (XSS possibility), only paths on the same domain
              var authTokenSyncUrl = new URL(authTokenSyncPath, location.origin);

              if (location.origin === authTokenSyncUrl.origin) {
                var mintCookie = mintCookieFactory(authTokenSyncUrl.toString());
                beforeAuthStateChanged(auth, mintCookie, function () {
                  return mintCookie(auth.currentUser);
                });
                onIdTokenChanged(auth, function (user) {
                  return mintCookie(user);
                });
              }
            }

            var authEmulatorHost = getDefaultEmulatorHost('auth');

            if (authEmulatorHost) {
              connectAuthEmulator(auth, "http://" + authEmulatorHost);
            }

            return auth;
          }

          function getScriptParentElement() {
            var _a, _b;

            return (_b = (_a = document.getElementsByTagName('head')) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
          }

          _setExternalJSProvider({
            loadJS: function loadJS(url) {
              // TODO: consider adding timeout support & cancellation
              return new Promise(function (resolve, reject) {
                var el = document.createElement('script');
                el.setAttribute('src', url);
                el.onload = resolve;

                el.onerror = function (e) {
                  var error = _createError("internal-error"
                  /* AuthErrorCode.INTERNAL_ERROR */
                  );

                  error.customData = e;
                  reject(error);
                };

                el.type = 'text/javascript';
                el.charset = 'UTF-8';
                getScriptParentElement().appendChild(el);
              });
            },
            gapiScript: 'https://apis.google.com/js/api.js',
            recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
            recaptchaEnterpriseScript: 'https://www.google.com/recaptcha/enterprise.js?render='
          });

          registerAuth("Browser"
          /* ClientPlatform.BROWSER */
          );
          var platform = /*#__PURE__*/new Platform("NEInstant-" + Config.version);

          function getSDKVersion() {
            return Config.version;
          }

          function initializeAsync(onReceiveMessageCallback) {
            return new Promise(function (resolve) {
              platform.setOnRecieveMessageCallback(onReceiveMessageCallback);
              var auth = getAuth(initFirebaseApp());
              var provider = new GoogleAuthProvider();
              provider.addScope('openid');
              provider.addScope('https://www.googleapis.com/auth/userinfo.email');
              provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
              signInWithPopup(auth, provider).then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var credential = GoogleAuthProvider.credentialFromResult(result); // const token = credential.accessToken;
                // const user = result.user;

                console.log(credential);
                resolve(credential);
              })["catch"](function (error) {
                console.log(error);
                resolve(error); // // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.customData.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // // ...
              }); // setTimeout(() => {
              //   google.accounts.id.initialize({
              //     //client_id: '114789873055-e2sktrogsg2k12rj9lhhvfhpg796ebsf.apps.googleusercontent.com',
              //     client_id: '663197326394-ngu7bcpsbo6t6ampt433aqceei7mbhjm.apps.googleusercontent.com',
              //     callback: (identityCredentials: any) => {
              //       console.log("callback!!", identityCredentials)
              //       resolve(identityCredentials);
              //     }
              //   });
              //   google.accounts.id.prompt();
              // }, 1000 * 2);
            });
          }

          function initFirebaseApp() {
            return initializeApp({
              apiKey: "AIzaSyDv-9wkPOuxKfaPoBclJHaukmU7dvS6nsY",
              authDomain: "auth-3467f.firebaseapp.com",
              projectId: "auth-3467f",
              storageBucket: "auth-3467f.appspot.com",
              messagingSenderId: "273699416196",
              appId: "1:273699416196:web:d8f8f89b4f0830b5ee3ad1",
              measurementId: "G-Q47LKD8XHT"
            });
          }

          exports.getSDKVersion = getSDKVersion;
          exports.initializeAsync = initializeAsync;
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
        }); // #endregion ORIGINAL CODE


        _cjsExports = exports('default', module.exports);
        module.exports.getSDKVersion;
        module.exports.initializeAsync;
        module.exports.__esModule;
      }, {});
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