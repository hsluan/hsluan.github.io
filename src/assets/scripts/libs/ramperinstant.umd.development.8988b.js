(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.RamperInstant = {}));
}(this, (function (exports) { 'use strict';

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
      var _this = this;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

      this.gameProfile = {
        crendentialData: {
          credential: "",
          select_by: ""
        },
        game_id: "game_id_test"
      };
      this.env = {
        partner: "coin98",
        environment: "test"
      };
      this.ramperLoggedInUser = null;
      this.keyItemLoggedUser = "ramper_loggedInUser";
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
      this.ramperLoggedInUser = localStorage.getItem(this.keyItemLoggedUser) ? JSON.parse(localStorage.getItem('ramper_loggedInUser')) : null;
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
            {
              localStorage.removeItem('ramper_loggedInUser');
            }
            break;

          case "sign_out_fail":
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
            break;

          case "sign_in_success":
            {
              localStorage.setItem(_this.keyItemLoggedUser, JSON.stringify(msg));
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

    _proto.clearCache = function clearCache() {
      localStorage.removeItem(this.keyItemLoggedUser);
      this.gameProfile = {
        crendentialData: {
          credential: "",
          select_by: ""
        },
        game_id: "game_id_test"
      };
      this.ramperLoggedInUser = null;
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

  var ScriptDownloader = /*#__PURE__*/function () {
    function ScriptDownloader() {}

    // //eslint-disable-next-line no-undef
    ScriptDownloader.parseParameters = function parseParameters(options, onProgress, onComplete) {
      if (onComplete === undefined) {
        var isCallback = typeof options === 'function';

        if (onProgress) {
          onComplete = onProgress;

          if (!isCallback) {
            onProgress = null;
          }
        } else if (onProgress === null && isCallback) {
          onComplete = options;
          options = null;
          onProgress = null;
        }

        if (onProgress !== null && isCallback) {
          onProgress = options;
          options = null;
        }
      }

      options = options || Object.create(null);
      return {
        options: options,
        onProgress: onProgress,
        onComplete: onComplete
      };
    }
    /* eslint-disable */
    ;

    ScriptDownloader.downloadScriptWeb = function downloadScriptWeb(url) {
      var promise = new Promise(function (resolve, reject) {
        var _ScriptDownloader$par = ScriptDownloader.parseParameters(options, null, onComplete),
            options = _ScriptDownloader$par.options,
            onComplete = _ScriptDownloader$par.onComplete; // no need to load script again


        if (ScriptDownloader.downloaded[url]) {
          resolve();
          return;
        }

        var d = document;
        var s = document.createElement('script');
        s.async = options.async;
        s.src = url;

        var loadHandler = function loadHandler() {
          var _s$parentNode;

          (_s$parentNode = s.parentNode) == null ? void 0 : _s$parentNode.removeChild(s);
          s.removeEventListener('load', loadHandler, false);
          s.removeEventListener('error', errorHandler, false);
          ScriptDownloader.downloaded[url] = true;
          resolve();
        };

        var errorHandler = function errorHandler() {
          var _s$parentNode2;

          (_s$parentNode2 = s.parentNode) == null ? void 0 : _s$parentNode2.removeChild(s);
          s.removeEventListener('load', loadHandler, false);
          s.removeEventListener('error', errorHandler, false);
          console.warn('ScriptDownloader:downloadScriptWeb - ' + 'Cannot load ' + url);
          reject();
        };

        s.addEventListener('load', loadHandler, false);
        s.addEventListener('error', errorHandler, false);
        d.body.appendChild(s);
      });
      return promise;
    };

    return ScriptDownloader;
  }();
  ScriptDownloader.downloaded = {};

  var Constant = /*#__PURE__*/function () {
    function Constant() {}

    Constant.BaseURL = function BaseURL(isEnv) {
      if (isEnv === void 0) {
        isEnv = "test";
      }

      return Constant.mapBaseUrl.get(isEnv);
    };

    Constant.googleClientId = function googleClientId(isEnv) {
      if (isEnv === void 0) {
        isEnv = "test";
      }

      return Constant.mapGoogleClientIds.get(isEnv);
    };

    Constant.signOutUrl = function signOutUrl(isEnv) {
      if (isEnv === void 0) {
        isEnv = "test";
      }

      return "" + Constant.BaseURL(isEnv) + Constant.SIGN_OUT + "?" + Constant.FLAG_COCOS;
    };

    return Constant;
  }();
  Constant.FLAG_COCOS = "isCocosForce=true";
  Constant.DEFAULT_CHAIN_NAME = "tomo";
  Constant.SIGNIN_ENDPOINT = "wallet/signin";
  Constant.SIGN_MESSAGE_ENDPOINT = "unity/sign-message?" + Constant.FLAG_COCOS + "&message=";
  Constant.SIGN_TRANSACTION_ENDPOINT = "unity/sign-transaction?" + Constant.FLAG_COCOS;
  Constant.SIGN_OUT = "signout"; // public static readonly SIGN_MESSAGE: string = this.END_POINT + this.SIGN_MESSAGE_ENDPOINT;

  Constant.mapBaseUrl = /*#__PURE__*/new Map([["test", "https://ramper-v2-auth-test.coin98.dev/"], ["staging", "https://ramper-v2-auth-stg.coin98.dev/"], ["prod", "https://auth.v2.ramper.xyz/"]]);
  Constant.mapGoogleClientIds = /*#__PURE__*/new Map([["test", "663197326394-ngu7bcpsbo6t6ampt433aqceei7mbhjm.apps.googleusercontent.com"], ["staging", "663197326394-ngu7bcpsbo6t6ampt433aqceei7mbhjm.apps.googleusercontent.com"], ["prod", "114789873055-e2sktrogsg2k12rj9lhhvfhpg796ebsf.apps.googleusercontent.com"]]);

  var platform = /*#__PURE__*/new Platform("NEInstant-" + Config.version);
  function getSDKVersion() {
    return Config.version;
  }
  function initializeAsync(options, onReceiveMessageCallback) {
    return new Promise(function (resolve) {
      platform.gameProfile.game_id = options.gameId;
      platform.env.environment = options.serverEnv;
      platform.env.partner = options.partner;
      platform.setOnRecieveMessageCallback(onReceiveMessageCallback);
      resolve({})
      //this.onClickSignin(`${Constant.END_POINT}test?credentialResponse=${identityCredentials['credential']}&message=Welcome&partner=coin98&provider=google&${Constant.FLAG_COCOS}`);
      // const auth = getAuth(initFirebaseApp());
      // const provider = new GoogleAuthProvider();
      // provider.addScope('openid');
      // provider.addScope('https://www.googleapis.com/auth/userinfo.email');
      // provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
      // signInWithPopup(auth, provider)
      //   .then((result) => {
      //     // This gives you a Google Access Token. You can use it to access the Google API.
      //     const credential = GoogleAuthProvider.credentialFromResult(result);
      //     resolve(credential);
      //   }).catch((error) => {
      //     resolve(error);
      //   });
    });
  }
  function doSignIn(ccWebView) {
    if (platform.ramperLoggedInUser) {
      ccWebView.url = getSignInURL();
      ccWebView.node.active = true;
      return;
    }

    google.accounts.id.initialize({
      client_id: Constant.googleClientId(platform.env.environment),
      callback: function callback(identityCredentials) {
        platform.gameProfile.crendentialData = identityCredentials;
        ccWebView.url = getSignInURL();
        ccWebView.node.active = true;
        console.log(ccWebView.url);
      }
    });
    google.accounts.id.prompt();
  }

  function getSignInURL() {
    return Constant.BaseURL(platform.env.environment) + "test?credentialResponse=" + platform.gameProfile.crendentialData.credential + "&message=Welcome&partner=" + platform.env.partner + "&provider=google&" + Constant.FLAG_COCOS;
  }

  function doSignOut(ccWebView) {
    ccWebView.url = "" + Constant.BaseURL(platform.env.environment) + Constant.SIGN_OUT + "?" + Constant.FLAG_COCOS;
    ccWebView.node.active = true;
    console.log(ccWebView.url);
    platform.clearCache();
  }
  function injectDebug() {
    ScriptDownloader.downloadScriptWeb('https://unpkg.com/vconsole@3.15.1/dist/vconsole.min.js').then(function () {
      // open web debugger console
      window.VConsole && (window.vConsole = new VConsole());
    });
  }

  exports.doSignIn = doSignIn;
  exports.doSignOut = doSignOut;
  exports.getSDKVersion = getSDKVersion;
  exports.initializeAsync = initializeAsync;
  exports.injectDebug = injectDebug;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ramperinstant.umd.development.js.map
