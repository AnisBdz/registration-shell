"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

"undefined" != typeof document && function (e, t) {
  var n = e.createElement("style");
  if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);else try {
    n.innerHTML = t;
  } catch (e) {
    n.innerText = t;
  }
}(document, ".term{font-family:courier,fixed,swiss,sans-serif;font-size:12px;color:#33d011;background:0 0}.termReverse{color:#111;background:#33d011}#terminal-overlay{background:rgba(0,0,0,.85);width:100%;height:100%;position:fixed;top:0;left:0}#terminal{display:inline-block;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);box-shadow:5px 5px 20px 0 rgba(0,0,0,.2);transition:all .5s ease-out 0s}#terminal>table>tbody>tr>td{border-radius:4px}#terminal .term,#terminal .termReverse{font-size:14px;font-family:monospace}#terminal .term{color:#E5E5E5}#terminal .termReverse{background:#fff}");
/*
  termlib.js - JS-WebTerminal Object v1.66

  (c) Norbert Landsteiner 2003-2015
  mass:werk - media environments
  <http://www.masswerk.at/termlib/>

  Creates [multiple] Terminal instances.

  Synopsis:

  myTerminal = new Terminal(<config object>);
  myTerminal.open();

  <config object> overrides any values of object `TerminalDefaults'.
  individual values of `id' must be supplied for multiple terminals.
  `handler' specifies a function to be called for input handling.
  (see `Terminal.prototype.defaultHandler()' and documentation.)

  globals defined in this library:
  	Terminal           (Terminal object)
    TerminalDefaults   (default configuration)
    termDefaultHandler (default command line handler)
    TermGlobals        (common vars and code for all instances)
    termKey            (named mappings for special keys)
    termDomKeyRef      (special key mapping for DOM constants)

  (please see the v. 1.4 history entry on these elements)

  required CSS classes for font definitions: ".term", ".termReverse".

  Compatibilty:
  Standard web browsers with a JavaScript implementation compliant to
  ECMA-262 2nd edition and support for the anonymous array and object
  constructs and the anonymous function construct in the form of
  "myfunc=function(x) {}" (c.f. ECMA-262 3rd edion for details).
  This comprises almost all current browsers but Konquerer (khtml) and
  versions of Apple Safari for Mac OS 10.0-10.28 (Safari 1.0) which
  lack support for keyboard events.
  v1.5: Dropped support of Netscape 4 (layers)

  License:
  This JavaScript-library is free.
  Include a visible backlink to <http://www.masswerk.at/termlib/> in the
  embedding web page or application.
  The library should always be accompanied by the 'readme.txt' and the
  sample HTML-documents.

  Any changes should be commented and must be reflected in `Terminal.version'
  in the format: "Version.Subversion (compatibility)".

  Donations:
  Donations are welcome: You may support and/or honor the development of
  "termlib.js" via PayPal at: <http://www.masswerk.at/termlib/donate/>

  Disclaimer:
  This software is distributed AS IS and in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. The entire risk as to
  the quality and performance of the product is borne by the user. No use of
  the product is authorized hereunder except under this disclaimer.

  ### The sections above must not be removed. ###

  version 1.01: added Terminal.prototype.resizeTo(x,y)
                added Terminal.conf.fontClass (=> configureable class name)
                Terminal.prototype.open() now checks for element conf.termDiv
                in advance and returns success.

  version 1.02: added support for <TAB> and Euro sign
                (Terminal.conf.printTab, Terminal.conf.printEuro)
                and a method to evaluate printable chars:
                Terminal.prototype.isPrintable(keycode)

  version 1.03: added global keyboard locking (TermGlobals.keylock)
                modified Terminal.prototype.redraw for speed (use of locals)

  version 1.04: modified the key handler to fix a bug with MSIE5/Mac
                fixed a bug in TermGlobals.setVisible with older MSIE-alike
                browsers without DOM support.

  version 1.05: added config flag historyUnique.

  version 1.06: fixed CTRl+ALT (Windows alt gr) isn't CTRL any more
                fixed double backspace bug for Safari;
                added TermGlobals.setDisplay for setting style.display props
                termlib.js now outputs lower case html (xhtml compatibility)

  version 1.07: added method rebuild() to rebuild with new color settings.

  version 1.1:  fixed a bug in 'more' output mode (cursor could be hidden after
                quit)
                added socket-extension for server-client talk in a separate file
                -> "temlib_socket.js" (to be loaded after termlib.js)
                (this is a separate file because we break our compatibility
                guide lines with this IO/AJAX library.)

  version 1.2   added color support ("%[+-]c(<color>)" markup)
                moved paste support from sample file to lib
                * TermGlobals.insertText( <text>)
                * TermGlobals.importEachLine( <text> )
                * TermGlobals.importMultiLine( <text> )

  version 1.3   added word wrapping to write()
                * activate with myTerm.wrapOn()
                * deactivate with myTerm.wrapOff()
                use conf.wrapping (boolean) for a global setting

  version 1.4   Terminal is now an entirely self-contained object
                Global references to inner objects for backward compatipility:
                * TerminalDefaults   => Terminal.prototype.Defaults
                * termDefaultHandler => Terminal.prototype.defaultHandler
                * termKey            => Terminal.prototype.globals.termKey
                                        see also: Terminal.prototype.termKey
                * TermGlobals        => Terminal.prototype.globals
                * termDomKeyRef      => Terminal.prototype.globals.termDomKeyRef

                So in effect to outside scripts everything remains the same;
                no need to rewrite any existing scripts.
                You may now use "this.globals" inside any handlers
                to refer to the static global object (TermGlobals).
                You may also refer to key definitions as "this.termKey.*".
                (Please mind that "this.termKey" is a reference to the static object
                and not specific to the instance. A change to "this.termKey" will be
                by any other instances of Terminal too.)

                Added method TermGlobals.assignStyle() for custom styles & mark up.

                Unified the color mark up: You may now use color codes (decimal or hex)
                inside brackets. e.g.: %c(10)DARKRED%c() or %c(a)DARKRED%c()

                Added key repeat for remapped keys (cursor movements etc).

  version 1.41  fixed a bug in the word wrapping regarding write() output, when
                the cursor was set with cursorSet() before.

  version 1.42  fixed a bug which caused Opera to delete 2 chars at once.
                introduced property Terminal.isOpera (Boolean)

  version 1.43  enhanced the control handler so it also catches ESC if flag closeOnESC
                is set to false. fixed a bug with Safari which fired repeated events
                for the control handler for TAB if flag printTab was set to false.

  version 1.5   Changed the license.
                Dropped support for Netscape 4 (layers).
                HTML-elements are now created by document.createElement, if applicable.
                Included the formerly separate socket extension in the main library.
                Added methods 'backupScreen()' and 'restoreScreen()' to save a screen
                and restore it's content from backup. (see the globbing sample).

  version 1.51  Added basic support of ANSI-SGR-sequences.

  version 1.52  Added method swapBackup(), reorganized some of the accompanying files.

  version 1.54  Fixed BACK_SPACE for Chrome, DELETE for Safari/WebKit.

  version 1.55  Fixed dead keys issue for Mac OS (Leapard & later), vowels only.
  version 1.56  Fixed new ESC issue for Safari.
  version 1.57  Fixed dead keys fix: now only for Safari/Mac, German (de-de).
  version 1.59  Dropped dead keys fix, fixed backspace for Safari.
  version 1.6   Saved some bytes by discarding traces of ancient condition syntax
                Added input mode "fieldMode"
  version 1.61  Changes to defaults implementation of the constructor.
  version 1.62  Fixed a bug related to AltGr-sequences with IE8+.
  version 1.65  Added options for textColor and textBlur.
  version 1.66  textBlur accepts also an array of values for multiple text-shadows.

*/

var Terminal = function Terminal(conf) {
  if (_typeof(conf) != 'object') conf = new Object();

  for (var i in this.Defaults) {
    if (typeof conf[i] == 'undefined') conf[i] = this.Defaults[i];
  }

  if (typeof conf.handler != 'function') conf.handler = Terminal.prototype.defaultHandler;
  this.conf = conf;
  this.setInitValues();
};

Terminal.prototype = {
  // prototype definitions (save some 2k on indentation)
  version: '1.66 (original)',
  Defaults: {
    // dimensions
    cols: 80,
    rows: 24,
    // appearance
    x: 100,
    y: 100,
    termDiv: 'termDiv',
    bgColor: '#181818',
    frameColor: '#555555',
    frameWidth: 1,
    rowHeight: 15,
    blinkDelay: 500,
    // css class
    fontClass: 'term',
    // initial cursor mode
    crsrBlinkMode: false,
    crsrBlockMode: true,
    // key mapping
    DELisBS: false,
    printTab: true,
    printEuro: true,
    catchCtrlH: true,
    closeOnESC: true,
    // prevent consecutive history doublets
    historyUnique: false,
    // optional id
    id: 0,
    // strings
    ps: '>',
    greeting: '%+r Terminal ready. %-r',
    // handlers
    handler: null,
    ctrlHandler: null,
    initHandler: null,
    exitHandler: null,
    wrapping: false,
    mapANSI: false,
    ANSItrueBlack: false,
    textBlur: 0,
    textColor: ''
  },
  setInitValues: function setInitValues() {
    this.isSafari = navigator.userAgent.indexOf('Safari') >= 0 || navigator.userAgent.indexOf('WebKit') >= 0 ? true : false;
    this.isOpera = window.opera && navigator.userAgent.indexOf('Opera') >= 0 ? true : false;
    this.isChrome = navigator.userAgent.indexOf('Chrome/') >= 0 && navigator.userAgent.indexOf('WebKit') >= 0 ? true : false;
    this.domAPI = document && document.createElement ? true : false;
    this.isMac = navigator.userAgent.indexOf('Mac') >= 0 ? true : false;
    this.id = this.conf.id;
    this.maxLines = this.conf.rows;
    this.maxCols = this.conf.cols;
    this.termDiv = this.conf.termDiv;
    this.crsrBlinkMode = this.conf.crsrBlinkMode;
    this.crsrBlockMode = this.conf.crsrBlockMode;
    this.blinkDelay = this.conf.blinkDelay;
    this.DELisBS = this.conf.DELisBS;
    this.printTab = this.conf.printTab;
    this.printEuro = this.conf.printEuro;
    this.catchCtrlH = this.conf.catchCtrlH;
    this.closeOnESC = this.conf.closeOnESC;
    this.historyUnique = this.conf.historyUnique;
    this.ps = this.conf.ps;
    this.closed = false;
    this.r;
    this.c;
    this.charBuf = new Array();
    this.styleBuf = new Array();
    this.scrollBuf = null;
    this.blinkBuffer = 0;
    this.blinkTimer;
    this.cursoractive = false;
    this.lock = true;
    this.insert = false;
    this.charMode = false;
    this.rawMode = false;
    this.lineBuffer = '';
    this.inputChar = 0;
    this.lastLine = '';
    this.guiCounter = 0;
    this.history = new Array();
    this.histPtr = 0;
    this.env = new Object();
    this.buckupBuffer = null;
    this.handler = this.conf.handler;
    this.wrapping = this.conf.wrapping;
    this.mapANSI = this.conf.mapANSI;
    this.ANSItrueBlack = this.conf.ANSItrueBlack;
    this.ctrlHandler = this.conf.ctrlHandler;
    this.initHandler = this.conf.initHandler;
    this.exitHandler = this.conf.exitHandler;
    this.fieldMode = false;
    this.fieldStart = this.fieldEnd = this.fieldC = 0;

    if (_typeof(this.conf.textBlur) === 'object' && this.conf.textBlur.length) {
      var a = [];

      for (var i = 0; i < this.conf.textBlur.length; i++) {
        var b = Number(this.conf.textBlur[i]);
        if (!isNaN(b) && b > 0) a.push(b);
      }

      this.textBlur = a.length ? a : 0;
    } else {
      this.textBlur = Number(this.conf.textBlur);
      if (isNaN(this.textBlur) || this.textBlur < 0 || this.textBlur > 40) this.textBlur = 0;
    }

    this.textColor = this.conf.textColor || '';
  },
  defaultHandler: function defaultHandler() {
    this.newLine();

    if (this.lineBuffer != '') {
      this.type('You typed: ' + this.lineBuffer);
      this.newLine();
    }

    this.prompt();
  },
  open: function open() {
    if (this.termDivReady()) {
      if (!this.closed) this._makeTerm();
      this.init();
      return true;
    } else {
      return false;
    }
  },
  close: function close() {
    this.lock = true;
    this.cursorOff();
    if (this.exitHandler) this.exitHandler();
    this.globals.setVisible(this.termDiv, 0);
    this.closed = true;
  },
  init: function init() {
    // wait for gui
    if (this.guiReady()) {
      this.guiCounter = 0; // clean up at re-entry

      if (this.closed) {
        this.setInitValues();
      }

      this.clear();
      this.globals.setVisible(this.termDiv, 1);
      this.globals.enableKeyboard(this);

      if (this.initHandler) {
        this.initHandler();
      } else {
        this.write(this.conf.greeting);
        this.newLine();
        this.prompt();
      }
    } else {
      this.guiCounter++;

      if (this.guiCounter > 18000) {
        if (confirm('Terminal:\nYour browser hasn\'t responded for more than 2 minutes.\nRetry?')) {
          this.guiCounter = 0;
        } else {
          return;
        }
      }

      ;
      this.globals.termToInitialze = this;
      window.setTimeout('Terminal.prototype.globals.termToInitialze.init()', 200);
    }
  },
  getRowArray: function getRowArray(l, v) {
    // returns a fresh array of l length initialized with value v
    var a = new Array();

    for (var i = 0; i < l; i++) {
      a[i] = v;
    }

    return a;
  },
  wrapOn: function wrapOn() {
    // activate word wrap, wrapping workes with write() only!
    this.wrapping = true;
  },
  wrapOff: function wrapOff() {
    this.wrapping = false;
  },
  setTextBlur: function setTextBlur(v) {
    var rerender = false;

    if (_typeof(v) === 'object' && v.length) {
      var a = [];

      for (var i = 0; i < v.length; i++) {
        var b = Number(v[i]);
        if (!isNaN(b) && b > 0) a.push(b);
      }

      this.textBlur = a.length ? a : 0;
      rerender = true;
    } else {
      v = Number(v);
      if (isNaN(v) || v < 0 || v > 40) v = 0;

      if (v != this.textBlur) {
        this.textBlur = v;
        rerender = true;
      }
    }

    if (rerender) {
      for (var r = 0, l = this.conf.rows; r < l; r++) {
        this.redraw(r);
      }
    }
  },
  setTextColor: function setTextColor(v) {
    if (!v) v = '';

    if (v != this.textColor) {
      this.textColor = v;

      for (var r = 0, l = this.conf.rows; r < l; r++) {
        this.redraw(r);
      }
    }
  },
  // main output methods
  type: function type(text, style) {
    for (var i = 0; i < text.length; i++) {
      var ch = text.charCodeAt(i);
      if (!this.isPrintable(ch)) ch = 94;
      this.charBuf[this.r][this.c] = ch;
      this.styleBuf[this.r][this.c] = style ? style : 0;
      var last_r = this.r;

      this._incCol();

      if (this.r != last_r) this.redraw(last_r);
    }

    this.redraw(this.r);
  },
  write: function write(text, usemore) {
    // write to scroll buffer with markup
    // new line = '%n' prepare any strings or arrys first
    if (_typeof(text) != 'object') {
      if (typeof text != 'string') text = '' + text;

      if (text.indexOf('\n') >= 0) {
        var ta = text.split('\n');
        text = ta.join('%n');
      }
    } else {
      if (text.join) {
        text = text.join('%n');
      } else {
        text = '' + text;
      }

      if (text.indexOf('\n') >= 0) {
        var ta = text.split('\n');
        text = ta.join('%n');
      }
    }

    if (this.mapANSI) text = this.globals.ANSI_map(text, this.ANSItrueBlack);

    this._sbInit(usemore);

    var chunks = text.split('%');
    var esc = text.charAt(0) != '%';
    var style = 0;
    var styleMarkUp = this.globals.termStyleMarkup;

    for (var i = 0; i < chunks.length; i++) {
      if (esc) {
        if (chunks[i].length > 0) {
          this._sbType(chunks[i], style);
        } else if (i > 0) {
          this._sbType('%', style);
        }

        esc = false;
      } else {
        var func = chunks[i].charAt(0);

        if (chunks[i].length == 0 && i > 0) {
          this._sbType("%", style);

          esc = true;
        } else if (func == 'n') {
          this._sbNewLine(true);

          if (chunks[i].length > 1) this._sbType(chunks[i].substring(1), style);
        } else if (func == '+') {
          var opt = chunks[i].charAt(1);
          opt = opt.toLowerCase();

          if (opt == 'p') {
            style = 0;
          } else if (styleMarkUp[opt]) {
            style |= styleMarkUp[opt];
          }

          if (chunks[i].length > 2) this._sbType(chunks[i].substring(2), style);
        } else if (func == '-') {
          var opt = chunks[i].charAt(1);
          opt = opt.toLowerCase();

          if (opt == 'p') {
            style = 0;
          } else if (styleMarkUp[opt]) {
            style &= ~styleMarkUp[opt];
          }

          if (chunks[i].length > 2) this._sbType(chunks[i].substring(2), style);
        } else if (chunks[i].length > 1 && func == 'c') {
          var cinfo = this._parseColor(chunks[i].substring(1));

          style = style & ~0xfffff0 | cinfo.style;
          if (cinfo.rest) this._sbType(cinfo.rest, style);
        } else if (chunks[i].length > 1 && chunks[i].charAt(0) == 'C' && chunks[i].charAt(1) == 'S') {
          this.clear();

          this._sbInit();

          if (chunks[i].length > 2) this._sbType(chunks[i].substring(2), style);
        } else {
          if (chunks[i].length > 0) this._sbType(chunks[i], style);
        }
      }
    }

    this._sbOut();
  },
  // parse a color markup
  _parseColor: function _parseColor(chunk) {
    var rest = '';
    var style = 0;

    if (chunk.length) {
      if (chunk.charAt(0) == '(') {
        var clabel = '';

        for (var i = 1; i < chunk.length; i++) {
          var c = chunk.charAt(i);

          if (c == ')') {
            if (chunk.length > i) rest = chunk.substring(i + 1);
            break;
          }

          clabel += c;
        }

        if (clabel) {
          if (clabel.charAt(0) == '@') {
            var sc = this.globals.nsColors[clabel.substring(1).toLowerCase()];
            if (sc) style = (16 + sc) * 0x100;
          } else if (clabel.charAt(0) == '#') {
            var cl = clabel.substring(1).toLowerCase();
            var sc = this.globals.webColors[cl];

            if (sc) {
              style = sc * 0x10000;
            } else {
              cl = this.globals.webifyColor(cl);
              if (cl) style = this.globals.webColors[cl] * 0x10000;
            }
          } else if (clabel.length && clabel.length <= 2) {
            var isHex = false;

            for (var i = 0; i < clabel.length; i++) {
              if (this.globals.isHexOnlyChar(clabel.charAt(i))) {
                isHex = true;
                break;
              }
            }

            var cl = isHex ? parseInt(clabel, 16) : parseInt(clabel, 10);

            if (!isNaN(cl) || cl <= 15) {
              style = cl * 0x100;
            }
          } else {
            style = this.globals.getColorCode(clabel) * 0x100;
          }
        }
      } else {
        var c = chunk.charAt(0);

        if (this.globals.isHexChar(c)) {
          style = this.globals.hexToNum[c] * 0x100;
          rest = chunk.substring(1);
        } else {
          rest = chunk;
        }
      }
    }

    return {
      rest: rest,
      style: style
    };
  },
  // internal scroll buffer output methods
  _sbInit: function _sbInit(usemore) {
    var sb = this.scrollBuf = new Object();
    var sbl = sb.lines = new Array();
    var sbs = sb.styles = new Array();
    sb.more = usemore;
    sb.line = 0;
    sb.status = 0;
    sb.r = 0;
    sb.c = this.c;
    sbl[0] = this.getRowArray(this.conf.cols, 0);
    sbs[0] = this.getRowArray(this.conf.cols, 0);

    for (var i = 0; i < this.c; i++) {
      sbl[0][i] = this.charBuf[this.r][i];
      sbs[0][i] = this.styleBuf[this.r][i];
    }
  },
  _sbType: function _sbType(text, style) {
    // type to scroll buffer
    var sb = this.scrollBuf;

    for (var i = 0; i < text.length; i++) {
      var ch = text.charCodeAt(i);
      if (!this.isPrintable(ch)) ch = 94;
      sb.lines[sb.r][sb.c] = ch;
      sb.styles[sb.r][sb.c++] = style ? style : 0;
      if (sb.c >= this.maxCols) this._sbNewLine();
    }
  },
  _sbNewLine: function _sbNewLine(forced) {
    var sb = this.scrollBuf;

    if (this.wrapping && forced) {
      sb.lines[sb.r][sb.c] = 10;
      sb.lines[sb.r].length = sb.c + 1;
    }

    sb.r++;
    sb.c = 0;
    sb.lines[sb.r] = this.getRowArray(this.conf.cols, 0);
    sb.styles[sb.r] = this.getRowArray(this.conf.cols, 0);
  },
  _sbWrap: function _sbWrap() {
    // create a temp wrap buffer wb and scan for words/wrap-chars
    // then re-asign lines & styles to scrollBuf
    var wb = new Object();
    wb.lines = new Array();
    wb.styles = new Array();
    wb.lines[0] = this.getRowArray(this.conf.cols, 0);
    wb.styles[0] = this.getRowArray(this.conf.cols, 0);
    wb.r = 0;
    wb.c = 0;
    var sb = this.scrollBuf;
    var sbl = sb.lines;
    var sbs = sb.styles;
    var ch, st, wrap, lc, ls;
    var l = this.c;
    var lastR = 0;
    var lastC = 0;
    wb.cBreak = false;

    for (var r = 0; r < sbl.length; r++) {
      lc = sbl[r];
      ls = sbs[r];

      for (var c = 0; c < lc.length; c++) {
        ch = lc[c];
        st = ls[c];

        if (ch) {
          var wrap = this.globals.wrapChars[ch];
          if (ch == 10) wrap = 1;

          if (wrap) {
            if (wrap == 2) {
              l++;
            } else if (wrap == 4) {
              l++;
              lc[c] = 45;
            }

            this._wbOut(wb, lastR, lastC, l);

            if (ch == 10) {
              this._wbIncLine(wb);
            } else if (wrap == 1 && wb.c < this.maxCols) {
              wb.lines[wb.r][wb.c] = ch;
              wb.styles[wb.r][wb.c++] = st;
              if (wb.c >= this.maxCols) this._wbIncLine(wb);
            }

            if (wrap == 3) {
              lastR = r;
              lastC = c;
              l = 1;
            } else {
              l = 0;
              lastR = r;
              lastC = c + 1;

              if (lastC == lc.length) {
                lastR++;
                lastC = 0;
              }

              if (wrap == 4) wb.cBreak = true;
            }
          } else {
            l++;
          }
        } else {
          continue;
        }
      }
    }

    if (l) {
      if (wb.cBreak && wb.c != 0) wb.c--;

      this._wbOut(wb, lastR, lastC, l);
    }

    sb.lines = wb.lines;
    sb.styles = wb.styles;
    sb.r = wb.r;
    sb.c = wb.c;
  },
  _wbOut: function _wbOut(wb, br, bc, l) {
    // copy a word (of l length from br/bc) to wrap buffer wb
    var sb = this.scrollBuf;
    var sbl = sb.lines;
    var sbs = sb.styles;
    var ofs = 0;
    var lc, ls;

    if (l + wb.c > this.maxCols) {
      if (l < this.maxCols) {
        this._wbIncLine(wb);
      } else {
        var i0 = 0;
        ofs = this.maxCols - wb.c;
        lc = sbl[br];
        ls = sbs[br];

        while (true) {
          for (var i = i0; i < ofs; i++) {
            wb.lines[wb.r][wb.c] = lc[bc];
            wb.styles[wb.r][wb.c++] = ls[bc++];

            if (bc == sbl[br].length) {
              bc = 0;
              br++;
              lc = sbl[br];
              ls = sbs[br];
            }
          }

          this._wbIncLine(wb);

          if (l - ofs < this.maxCols) break;
          i0 = ofs;
          ofs += this.maxCols;
        }
      }
    } else if (wb.cBreak) {
      wb.c--;
    }

    lc = sbl[br];
    ls = sbs[br];

    for (var i = ofs; i < l; i++) {
      wb.lines[wb.r][wb.c] = lc[bc];
      wb.styles[wb.r][wb.c++] = ls[bc++];

      if (bc == sbl[br].length) {
        bc = 0;
        br++;
        lc = sbl[br];
        ls = sbs[br];
      }
    }

    wb.cBreak = false;
  },
  _wbIncLine: function _wbIncLine(wb) {
    // create a new line in temp buffer
    wb.r++;
    wb.c = 0;
    wb.lines[wb.r] = this.getRowArray(this.conf.cols, 0);
    wb.styles[wb.r] = this.getRowArray(this.conf.cols, 0);
  },
  _sbOut: function _sbOut() {
    var sb = this.scrollBuf;
    if (this.wrapping && !sb.status) this._sbWrap();
    var sbl = sb.lines;
    var sbs = sb.styles;
    var tcb = this.charBuf;
    var tsb = this.styleBuf;
    var ml = this.maxLines;
    var buflen = sbl.length;

    if (sb.more) {
      if (sb.status) {
        if (this.inputChar == this.globals.lcMoreKeyAbort) {
          this.r = ml - 1;
          this.c = 0;
          tcb[this.r] = this.getRowArray(this.conf.cols, 0);
          tsb[this.r] = this.getRowArray(this.conf.cols, 0);
          this.redraw(this.r);
          this.handler = sb.handler;
          this.charMode = false;
          this.inputChar = 0;
          this.scrollBuf = null;
          this.prompt();
          return;
        } else if (this.inputChar == this.globals.lcMoreKeyContinue) {
          this.clear();
        } else {
          return;
        }
      } else {
        if (this.r >= ml - 1) this.clear();
      }
    }

    if (this.r + buflen - sb.line <= ml) {
      for (var i = sb.line; i < buflen; i++) {
        var r = this.r + i - sb.line;
        tcb[r] = sbl[i];
        tsb[r] = sbs[i];
        this.redraw(r);
      }

      this.r += sb.r - sb.line;
      this.c = sb.c;

      if (sb.more) {
        if (sb.status) this.handler = sb.handler;
        this.charMode = false;
        this.inputChar = 0;
        this.scrollBuf = null;
        this.prompt();
        return;
      }
    } else if (sb.more) {
      ml--;

      if (sb.status == 0) {
        sb.handler = this.handler;
        this.handler = this._sbOut;
        this.charMode = true;
        sb.status = 1;
      }

      if (this.r) {
        var ofs = ml - this.r;

        for (var i = sb.line; i < ofs; i++) {
          var r = this.r + i - sb.line;
          tcb[r] = sbl[i];
          tsb[r] = sbs[i];
          this.redraw(r);
        }
      } else {
        var ofs = sb.line + ml;

        for (var i = sb.line; i < ofs; i++) {
          var r = this.r + i - sb.line;
          tcb[r] = sbl[i];
          tsb[r] = sbs[i];
          this.redraw(r);
        }
      }

      sb.line = ofs;
      this.r = ml;
      this.c = 0;
      this.type(this.globals.lcMorePrompt1, this.globals.lcMorePromtp1Style);
      this.type(this.globals.lcMorePrompt2, this.globals.lcMorePrompt2Style);
      this.lock = false;
      return;
    } else if (buflen >= ml) {
      var ofs = buflen - ml;

      for (var i = 0; i < ml; i++) {
        var r = ofs + i;
        tcb[i] = sbl[r];
        tsb[i] = sbs[r];
        this.redraw(i);
      }

      this.r = ml - 1;
      this.c = sb.c;
    } else {
      var dr = ml - buflen;
      var ofs = this.r - dr;

      for (var i = 0; i < dr; i++) {
        var r = ofs + i;

        for (var c = 0; c < this.maxCols; c++) {
          tcb[i][c] = tcb[r][c];
          tsb[i][c] = tsb[r][c];
        }

        this.redraw(i);
      }

      for (var i = 0; i < buflen; i++) {
        var r = dr + i;
        tcb[r] = sbl[i];
        tsb[r] = sbs[i];
        this.redraw(r);
      }

      this.r = ml - 1;
      this.c = sb.c;
    }

    this.scrollBuf = null;
  },
  // basic console output
  typeAt: function typeAt(r, c, text, style) {
    var tr1 = this.r;
    var tc1 = this.c;
    this.cursorSet(r, c);

    for (var i = 0; i < text.length; i++) {
      var ch = text.charCodeAt(i);
      if (!this.isPrintable(ch)) ch = 94;
      this.charBuf[this.r][this.c] = ch;
      this.styleBuf[this.r][this.c] = style ? style : 0;
      var last_r = this.r;

      this._incCol();

      if (this.r != last_r) this.redraw(last_r);
    }

    this.redraw(this.r);
    this.r = tr1;
    this.c = tc1;
  },
  statusLine: function statusLine(text, style, offset) {
    var ch, r;
    style = style && !isNaN(style) ? parseInt(style) & 15 : 0;

    if (offset && offset > 0) {
      r = this.conf.rows - offset;
    } else {
      r = this.conf.rows - 1;
    }

    for (var i = 0; i < this.conf.cols; i++) {
      if (i < text.length) {
        ch = text.charCodeAt(i);
        if (!this.isPrintable(ch)) ch = 94;
      } else {
        ch = 0;
      }

      this.charBuf[r][i] = ch;
      this.styleBuf[r][i] = style;
    }

    this.redraw(r);
  },
  printRowFromString: function printRowFromString(r, text, style) {
    var ch;
    style = style && !isNaN(style) ? parseInt(style) & 15 : 0;

    if (r >= 0 && r < this.maxLines) {
      if (typeof text != 'string') text = '' + text;

      for (var i = 0; i < this.conf.cols; i++) {
        if (i < text.length) {
          ch = text.charCodeAt(i);
          if (!this.isPrintable(ch)) ch = 94;
        } else {
          ch = 0;
        }

        this.charBuf[r][i] = ch;
        this.styleBuf[r][i] = style;
      }

      this.redraw(r);
    }
  },
  setChar: function setChar(ch, r, c, style) {
    this.charBuf[r][c] = ch;
    this.styleBuf[r][c] = style ? style : 0;
    this.redraw(r);
  },
  newLine: function newLine() {
    this.c = 0;

    this._incRow();
  },
  // internal methods for output
  _charOut: function _charOut(ch, style) {
    this.charBuf[this.r][this.c] = ch;
    this.styleBuf[this.r][this.c] = style ? style : 0;
    this.redraw(this.r);

    this._incCol();
  },
  _incCol: function _incCol() {
    this.c++;

    if (this.c >= this.maxCols) {
      this.c = 0;

      this._incRow();
    }
  },
  _incRow: function _incRow() {
    this.r++;

    if (this.r >= this.maxLines) {
      this._scrollLines(0, this.maxLines);

      this.r = this.maxLines - 1;
    }
  },
  _scrollLines: function _scrollLines(start, end) {
    window.status = 'Scrolling lines ...';
    start++;

    for (var ri = start; ri < end; ri++) {
      var rt = ri - 1;
      this.charBuf[rt] = this.charBuf[ri];
      this.styleBuf[rt] = this.styleBuf[ri];
    } // clear last line


    var rt = end - 1;
    this.charBuf[rt] = this.getRowArray(this.conf.cols, 0);
    this.styleBuf[rt] = this.getRowArray(this.conf.cols, 0);
    this.redraw(rt);

    for (var r = end - 1; r >= start; r--) {
      this.redraw(r - 1);
    }

    window.status = '';
  },
  // control methods
  clear: function clear() {
    window.status = 'Clearing display ...';
    this.cursorOff();
    this.insert = false;

    for (var ri = 0; ri < this.maxLines; ri++) {
      this.charBuf[ri] = this.getRowArray(this.conf.cols, 0);
      this.styleBuf[ri] = this.getRowArray(this.conf.cols, 0);
      this.redraw(ri);
    }

    this.r = 0;
    this.c = 0;
    window.status = '';
  },
  reset: function reset() {
    if (this.lock) return;
    this.lock = true;
    this.rawMode = false;
    this.charMode = false;
    this.maxLines = this.conf.rows;
    this.maxCols = this.conf.cols;
    this.lastLine = '';
    this.lineBuffer = '';
    this.inputChar = 0;
    this.clear();
  },
  // this.scan was added as a feature to get a line in program
  scan: function scan() {
    var _this = this;

    this.scanning = true;
    return new Promise(function (resolve, reject) {
      _this.prompt();

      _this.scanResolve = resolve;
    });
  },
  // this is called by the shell after the scan
  scanned: function scanned(str) {
    this.scanning = false;
    this.scanResolve(str);
  },
  prompt: function prompt() {
    this.lock = true;
    if (this.c > 0) this.newLine();

    if (!this.scanning) {
      this.write(typeof this.ps == 'function' ? this.ps() : this.ps);

      this._charOut(1);
    }

    this.lock = false;
    this.cursorOn();
  },
  isPrintable: function isPrintable(ch, unicodePage1only) {
    if (this.wrapping && this.globals.wrapChars[ch] == 4) return true;

    if (unicodePage1only && ch > 255) {
      return ch == this.termKey.EURO && this.printEuro ? true : false;
    }

    return ch >= 32 && ch != this.termKey.DEL || this.printTab && ch == this.termKey.TAB;
  },
  // cursor methods
  cursorSet: function cursorSet(r, c) {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();
    this.r = r % this.maxLines;
    this.c = c % this.maxCols;

    this._cursorReset(crsron);
  },
  cursorOn: function cursorOn() {
    if (this.blinkTimer) clearTimeout(this.blinkTimer);
    this.blinkBuffer = this.styleBuf[this.r][this.c];

    this._cursorBlink();

    this.cursoractive = true;
  },
  cursorOff: function cursorOff() {
    if (this.blinkTimer) clearTimeout(this.blinkTimer);

    if (this.cursoractive) {
      this.styleBuf[this.r][this.c] = this.blinkBuffer;
      this.redraw(this.r);
      this.cursoractive = false;
    }
  },
  cursorLeft: function cursorLeft() {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();
    var r = this.r;
    var c = this.c;

    if (c > 0) {
      c--;
    } else if (r > 0) {
      c = this.maxCols - 1;
      r--;
    }

    if (this.isPrintable(this.charBuf[r][c])) {
      this.r = r;
      this.c = c;
    }

    this.insert = true;

    this._cursorReset(crsron);
  },
  cursorRight: function cursorRight() {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();
    var r = this.r;
    var c = this.c;

    if (c < this.maxCols - 1) {
      c++;
    } else if (r < this.maxLines - 1) {
      c = 0;
      r++;
    }

    if (!this.isPrintable(this.charBuf[r][c])) {
      this.insert = false;
    }

    if (this.isPrintable(this.charBuf[this.r][this.c])) {
      this.r = r;
      this.c = c;
    }

    this._cursorReset(crsron);
  },
  backspace: function backspace() {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();
    var r = this.r;
    var c = this.c;
    if (c > 0) c--;else if (r > 0) {
      c = this.maxCols - 1;
      r--;
    }
    ;

    if (this.isPrintable(this.charBuf[r][c])) {
      this._scrollLeft(r, c);

      this.r = r;
      this.c = c;
    }

    ;

    this._cursorReset(crsron);
  },
  fwdDelete: function fwdDelete() {
    var crsron = this.cursoractive;
    if (crsron) this.cursorOff();

    if (this.isPrintable(this.charBuf[this.r][this.c])) {
      this._scrollLeft(this.r, this.c);

      if (!this.isPrintable(this.charBuf[this.r][this.c])) this.insert = false;
    }

    this._cursorReset(crsron);
  },
  _cursorReset: function _cursorReset(crsron) {
    if (crsron) {
      this.cursorOn();
    } else {
      this.blinkBuffer = this.styleBuf[this.r][this.c];
    }
  },
  _cursorBlink: function _cursorBlink() {
    if (this.blinkTimer) clearTimeout(this.blinkTimer);

    if (this == this.globals.activeTerm) {
      if (this.crsrBlockMode) {
        this.styleBuf[this.r][this.c] = this.styleBuf[this.r][this.c] & 1 ? this.styleBuf[this.r][this.c] & 0xfffffe : this.styleBuf[this.r][this.c] | 1;
      } else {
        this.styleBuf[this.r][this.c] = this.styleBuf[this.r][this.c] & 2 ? this.styleBuf[this.r][this.c] & 0xffffd : this.styleBuf[this.r][this.c] | 2;
      }

      this.redraw(this.r);
    }

    if (this.crsrBlinkMode) this.blinkTimer = setTimeout('Terminal.prototype.globals.activeTerm._cursorBlink()', this.blinkDelay);
  },
  _scrollLeft: function _scrollLeft(r, c) {
    var rows = new Array();
    rows[0] = r;

    while (this.isPrintable(this.charBuf[r][c])) {
      var ri = r;
      var ci = c + 1;

      if (ci == this.maxCols) {
        if (ri < this.maxLines - 1) {
          ci = 0;
          ri++;
          rows[rows.length] = ri;
        } else {
          break;
        }
      }

      this.charBuf[r][c] = this.charBuf[ri][ci];
      this.styleBuf[r][c] = this.styleBuf[ri][ci];
      c = ci;
      r = ri;
    }

    if (this.charBuf[r][c] != 0) this.charBuf[r][c] = 0;

    for (var i = 0; i < rows.length; i++) {
      this.redraw(rows[i]);
    }
  },
  _scrollRight: function _scrollRight(r, c) {
    var rows = new Array();

    var end = this._getLineEnd(r, c);

    var ri = end[0];
    var ci = end[1];

    if (ci == this.maxCols - 1 && ri == this.maxLines - 1) {
      if (r == 0) return;

      this._scrollLines(0, this.maxLines);

      this.r--;
      r--;
      ri--;
    }

    rows[r] = 1;

    while (this.isPrintable(this.charBuf[ri][ci])) {
      var rt = ri;
      var ct = ci + 1;

      if (ct == this.maxCols) {
        ct = 0;
        rt++;
        rows[rt] = 1;
      }

      this.charBuf[rt][ct] = this.charBuf[ri][ci];
      this.styleBuf[rt][ct] = this.styleBuf[ri][ci];
      if (ri == r && ci == c) break;
      ci--;

      if (ci < 0) {
        ci = this.maxCols - 1;
        ri--;
        rows[ri] = 1;
      }
    }

    for (var i = r; i < this.maxLines; i++) {
      if (rows[i]) this.redraw(i);
    }
  },
  _getLineEnd: function _getLineEnd(r, c) {
    if (!this.isPrintable(this.charBuf[r][c])) {
      c--;

      if (c < 0) {
        if (r > 0) {
          r--;
          c = this.maxCols - 1;
        } else {
          c = 0;
        }
      }
    }

    if (this.isPrintable(this.charBuf[r][c])) {
      while (true) {
        var ri = r;
        var ci = c + 1;

        if (ci == this.maxCols) {
          if (ri < this.maxLines - 1) {
            ri++;
            ci = 0;
          } else {
            break;
          }
        }

        if (!this.isPrintable(this.charBuf[ri][ci])) break;
        c = ci;
        r = ri;
      }
    }

    return [r, c];
  },
  _getLineStart: function _getLineStart(r, c) {
    // not used by now, just in case anyone needs this ...
    var ci, ri;

    if (!this.isPrintable(this.charBuf[r][c])) {
      ci = c - 1;
      ri = r;

      if (ci < 0) {
        if (ri == 0) return [0, 0];
        ci = this.maxCols - 1;
        ri--;
      }

      if (!this.isPrintable(this.charBuf[ri][ci])) {
        return [r, c];
      } else {
        r = ri;
        c = ci;
      }
    }

    while (true) {
      var ri = r;
      var ci = c - 1;

      if (ci < 0) {
        if (ri == 0) break;
        ci = this.maxCols - 1;
        ri--;
      }

      if (!this.isPrintable(this.charBuf[ri][ci])) break;
      ;
      r = ri;
      c = ci;
    }

    return [r, c];
  },
  _getLine: function _getLine(adjustCrsrPos) {
    var end = this._getLineEnd(this.r, this.c);

    var r = end[0];
    var c = end[1];

    if (adjustCrsrPos && (this.r != r || this.c != c + 1)) {
      this.r = r;
      this.c = c + 1;
      if (this.c >= this.maxCols) this.c = this.maxCols - 1;
    }

    var line = new Array();

    while (this.isPrintable(this.charBuf[r][c])) {
      line[line.length] = String.fromCharCode(this.charBuf[r][c]);

      if (c > 0) {
        c--;
      } else if (r > 0) {
        c = this.maxCols - 1;
        r--;
      } else {
        break;
      }
    }

    line.reverse();
    return line.join('');
  },
  _clearLine: function _clearLine() {
    var end = this._getLineEnd(this.r, this.c);

    var r = end[0];
    var c = end[1];
    var line = '';

    while (this.isPrintable(this.charBuf[r][c])) {
      this.charBuf[r][c] = 0;

      if (c > 0) {
        c--;
      } else if (r > 0) {
        this.redraw(r);
        c = this.maxCols - 1;
        r--;
      } else {
        break;
      }
    }

    if (r != end[0]) this.redraw(r);
    c++;
    this.cursorSet(r, c);
    this.insert = false;
  },
  // backup/restore screen & state
  backupScreen: function backupScreen() {
    var backup = this.backupBuffer = new Object();
    var rl = this.conf.rows;
    var cl = this.conf.cols;
    backup.cbuf = new Array(rl);
    backup.sbuf = new Array(rl);
    backup.maxCols = this.maxCols;
    backup.maxLines = this.maxLines;
    backup.r = this.r;
    backup.c = this.c;
    backup.charMode = this.charMode;
    backup.rawMode = this.rawMode;
    backup.handler = this.handler;
    backup.ctrlHandler = this.ctrlHandler;
    backup.cursoractive = this.cursoractive;
    backup.crsrBlinkMode = this.crsrBlinkMode;
    backup.crsrBlockMode = this.crsrBlockMode;
    backup.blinkDelay = this.blinkDelay;
    backup.DELisBS = this.DELisBS;
    backup.printTab = this.printTab;
    backup.printEuro = this.printEuro;
    backup.catchCtrlH = this.catchCtrlH;
    backup.closeOnESC = this.closeOnESC;
    backup.historyUnique = this.historyUnique;
    backup.ps = this.ps;
    backup.lineBuffer = this.lineBuffer;
    backup.inputChar = this.inputChar;
    backup.lastLine = this.lastLine;
    backup.historyLength = this.history.length;
    backup.histPtr = this.histPtr;
    backup.wrapping = this.wrapping;
    backup.mapANSI = this.mapANSI;
    backup.ANSItrueBlack = this.ANSItrueBlack;
    if (this.cursoractive) this.cursorOff();

    for (var r = 0; r < rl; r++) {
      var cbr = this.charBuf[r];
      var sbr = this.styleBuf[r];
      var tcbr = backup.cbuf[r] = new Array(cl);
      var tsbr = backup.sbuf[r] = new Array(cl);

      for (var c = 0; c < cl; c++) {
        tcbr[c] = cbr[c];
        tsbr[c] = sbr[c];
      }
    }
  },
  restoreScreen: function restoreScreen() {
    var backup = this.backupBuffer;
    if (!backup) return;
    var rl = this.conf.rows;

    for (var r = 0; r < rl; r++) {
      this.charBuf[r] = backup.cbuf[r];
      this.styleBuf[r] = backup.sbuf[r];
      this.redraw(r);
    }

    this.maxCols = backup.maxCols;
    this.maxLines = backup.maxLines;
    this.r = backup.r;
    this.c = backup.c;
    this.charMode = backup.charMode;
    this.rawMode = backup.rawMode;
    this.handler = backup.handler;
    this.ctrlHandler = backup.ctrlHandler;
    this.cursoractive = backup.cursoractive;
    this.crsrBlinkMode = backup.crsrBlinkMode;
    this.crsrBlockMode = backup.crsrBlockMode;
    this.blinkDelay = backup.blinkDelay;
    this.DELisBS = backup.DELisBS;
    this.printTab = backup.printTab;
    this.printEuro = backup.printEuro;
    this.catchCtrlH = backup.catchCtrlH;
    this.closeOnESC = backup.closeOnESC;
    this.historyUnique = backup.historyUnique;
    this.ps = backup.ps;
    this.lineBuffer = backup.lineBuffer;
    this.inputChar = backup.inputChar;
    this.lastLine = backup.lastLine;

    if (this.history.length > backup.historyLength) {
      this.history.length = backup.historyLength;
      this.histPtr = backup.histPtr;
    }

    this.wrapping = backup.wrapping;
    this.mapANSI = backup.mapANSI;
    this.ANSItrueBlack = backup.ANSItrueBlack;
    if (this.cursoractive) this.cursorOn();
    this.backupBuffer = null;
  },
  swapBackup: function swapBackup() {
    // swap current state and backup buffer (e.g.: toggle do/undo)
    var backup = this.backupBuffer;
    this.backupScreen;

    if (backup) {
      var backup2 = this.backupBuffer;
      this.backupBuffer = backup;
      this.restoreScreen();
      this.backupBuffer = backup2;
    }
  },
  // simple markup escaping
  escapeMarkup: function escapeMarkup(t) {
    return t.replace(/%/g, '%%');
  },
  // field mode
  enterFieldMode: function enterFieldMode(start, end, style) {
    this.cursorOff();
    if (start === undefined || start < 0) start = this.c;
    if (end === undefined || end < start || end > this.maxCols) end = this.maxCols;
    if (!style) style = 0;
    this.fieldStart = start;
    this.fieldEnd = end;
    this.fieldStyle = style;
    this.fieldC = 0;
    this.lastLine = '';
    this.fieldMode = true;
    this.rawMode = this.charMode = false;

    if (style & 1) {
      this._crsrWasBlockMode = this.crsrBlockMode;
      this._crsrWasBlinkMode = this.crsrBlinkMode;
      this.crsrBlockMode = false;
      this.crsrBlinkMode = true;
    }

    this.drawField();
    this.lock = false;
  },
  exitFieldMode: function exitFieldMode() {
    this.drawField(true);
    this.fieldMode = false;
    this.c = this.fieldEnd;
    if (this.c == this.maxLine) this.newLine();
    this.lock = true;
  },
  drawField: function drawField(isfinal) {
    this.cursorOff();
    if (isfinal) this.fieldC = 0;
    var fl = this.fieldEnd - this.fieldStart;
    if (this.fieldC == this.lastLine.length) fl--;
    var ofs = this.fieldC - fl;
    if (ofs < 0) ofs = 0;
    var line = ofs ? this.lastLine.substring(ofs) : this.lastLine;
    var sb = this.styleBuf[this.r];
    var cb = this.charBuf[this.r];
    var max = line.length;

    for (var i = this.fieldStart, k = 0; i < this.fieldEnd; i++, k++) {
      sb[i] = this.fieldStyle;
      cb[i] = k < max ? line.charCodeAt(k) : 0;
    }

    this.redraw(this.r);

    if (isfinal) {
      if (this.fieldStyle & 1) {
        this.crsrBlockMode = this._crsrWasBlockMode;
        this.crsrBlinkMode = this._crsrWasBlinkMode;
        delete this._crsrWasBlockMode;
        delete this._crsrWasBlinkMode;
      }
    } else {
      this.c = this.fieldStart + this.fieldC - ofs;
      this.cursorOn();
    }
  },
  // keyboard focus
  focus: function focus() {
    this.globals.setFocus(this);
  },
  // a inner reference (just for comfort) to be mapped to Terminal.prototype.globals.termKey
  termKey: null,
  // GUI related methods
  _makeTerm: function _makeTerm(rebuild) {
    window.status = 'Building terminal ...';
    var divPrefix = this.termDiv + '_r';

    if (this.domAPI) {
      // if applicable we're using createElement
      this.globals.hasSubDivs = false;
      var td, row, table, tbody, table2, tbody2, tr, td, node, ptd;
      table = document.createElement('table');
      table.setAttribute('border', 0);
      table.setAttribute('cellSpacing', 0);
      table.setAttribute('cellPadding', this.conf.frameWidth);
      tbody = document.createElement('tbody');
      table.appendChild(tbody);
      row = document.createElement('tr');
      tbody.appendChild(row);
      ptd = document.createElement('td');
      ptd.style.backgroundColor = this.conf.frameColor;
      row.appendChild(ptd);
      table2 = document.createElement('table');
      table2.setAttribute('border', 0);
      table2.setAttribute('cellSpacing', 0);
      table2.setAttribute('cellPadding', 2);
      tbody2 = document.createElement('tbody');
      table2.appendChild(tbody2);
      tr = document.createElement('tr');
      tbody2.appendChild(tr);
      td = document.createElement('td');
      td.style.backgroundColor = this.conf.bgColor;
      tr.appendChild(td);
      ptd.appendChild(table2);
      ptd = td;
      table2 = document.createElement('table');
      table2.setAttribute('border', 0);
      table2.setAttribute('cellSpacing', 0);
      table2.setAttribute('cellPadding', 0);
      tbody2 = document.createElement('tbody');
      table2.appendChild(tbody2);
      var rstr = '';

      for (var c = 0; c < this.conf.cols; c++) {
        rstr += '&nbsp;';
      }

      for (var r = 0; r < this.conf.rows; r++) {
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.id = divPrefix + r;
        td.style.height = td.style.minHeight = td.style.maxHeight = this.conf.rowHeight;
        td.style.whiteSpace = 'nowrap';
        td.className = this.conf.fontClass;
        td.innerHTML = rstr;
        tr.appendChild(td);
        tbody2.appendChild(tr);
      }

      ptd.appendChild(table2);
      node = document.getElementById(this.termDiv);

      while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
      }

      node.appendChild(table);
    } else {
      // legacy code
      this.globals.hasSubDivs = navigator.userAgent.indexOf('Gecko') < 0;
      var s = '',
          bgColorAttribute = this.conf.bgColor && (this.conf.bgColor !== 'none' || this.conf.bgColor != 'transparent') ? ' bgcolor="' + this.conf.bgColor + '"' : '',
          frameColorAttribute = this.conf.frameColor && (this.conf.frameColor !== 'none' || this.conf.frameColor != 'transparent') ? ' bgcolor="' + this.conf.frameColor + '"' : '';
      s += '<table border="0" cellspacing="0" cellpadding="' + this.conf.frameWidth + '">\n';
      s += '<tr><td' + frameColorAttribute + '><table border="0" cellspacing="0" cellpadding="2"><tr><td' + bgColorAttribute + '><table border="0" cellspacing="0" cellpadding="0">\n';
      var rstr = '';

      for (var c = 0; c < this.conf.cols; c++) {
        rstr += '&nbsp;';
      }

      for (var r = 0; r < this.conf.rows; r++) {
        var termid = this.globals.hasSubDivs ? '' : ' id="' + divPrefix + r + '"';
        s += '<tr><td nowrap height="' + this.conf.rowHeight + '"' + termid + ' class="' + this.conf.fontClass + '">' + rstr + '<\/td><\/tr>\n';
      }

      s += '<\/table><\/td><\/tr>\n';
      s += '<\/table><\/td><\/tr>\n';
      s += '<\/table>\n';
      var termOffset = 2 + this.conf.frameWidth;

      if (this.globals.hasSubDivs) {
        for (var r = 0; r < this.conf.rows; r++) {
          s += '<div id="' + divPrefix + r + '" class="' + this.conf.fontClass + '"><\/div>\n';
        }

        this.globals.termStringStart = '<table border="0" cellspacing="0" cellpadding="0"><tr><td nowrap height="' + this.conf.rowHeight + '" class="' + this.conf.fontClass + '">';
        this.globals.termStringEnd = '<\/td><\/tr><\/table>';
      }

      this.globals.writeElement(this.termDiv, s);
    }

    if (!rebuild) {
      this.globals.setElementXY(this.termDiv, this.conf.x, this.conf.y);
      this.globals.setVisible(this.termDiv, 1);
    }

    window.status = '';
  },
  rebuild: function rebuild() {
    // check for bounds and array lengths
    var rl = this.conf.rows;
    var cl = this.conf.cols;

    for (var r = 0; r < rl; r++) {
      var cbr = this.charBuf[r];

      if (!cbr) {
        this.charBuf[r] = this.getRowArray(cl, 0);
        this.styleBuf[r] = this.getRowArray(cl, 0);
      } else if (cbr.length < cl) {
        for (var c = cbr.length; c < cl; c++) {
          this.charBuf[r][c] = 0;
          this.styleBuf[r][c] = 0;
        }
      }
    }

    var resetcrsr = false;

    if (this.r >= rl) {
      r = rl - 1;
      resetcrsr = true;
    }

    if (this.c >= cl) {
      c = cl - 1;
      resetcrsr = true;
    }

    if (resetcrsr && this.cursoractive) this.cursorOn(); // and actually rebuild

    this._makeTerm(true);

    for (var r = 0; r < rl; r++) {
      this.redraw(r);
    } // clear backup buffer to prevent errors


    this.backupBuffer = null;
  },
  moveTo: function moveTo(x, y) {
    this.globals.setElementXY(this.termDiv, x, y);
  },
  resizeTo: function resizeTo(x, y) {
    if (this.termDivReady()) {
      x = parseInt(x, 10);
      y = parseInt(y, 10);
      if (isNaN(x) || isNaN(y) || x < 4 || y < 2) return false;
      this.maxCols = this.conf.cols = x;
      this.maxLines = this.conf.rows = y;

      this._makeTerm();

      this.clear();
      return true;
    } else {
      return false;
    }
  },
  redraw: function redraw(r) {
    var s = this.globals.termStringStart;
    var curStyle = 0;
    var tstls = this.globals.termStyles;
    var tscls = this.globals.termStyleClose;
    var tsopn = this.globals.termStyleOpen;
    var tspcl = this.globals.termSpecials;
    var tclrs = this.globals.colorCodes;
    var tnclrs = this.globals.nsColorCodes;
    var twclrs = this.globals.webColorCodes;
    var t_cb = this.charBuf;
    var t_sb = this.styleBuf;
    var blur = this.textBlur;
    var clr = '';
    var textColor = this.textColor || '';

    for (var i = 0; i < this.conf.cols; i++) {
      var c = t_cb[r][i];
      var cs = t_sb[r][i];

      if (cs != curStyle || i == 0 && textColor) {
        if (curStyle) {
          if (curStyle & 0xffff00) s += '</span>';

          for (var k = tstls.length - 1; k >= 0; k--) {
            var st = tstls[k];
            if (curStyle & st) s += tscls[st];
          }
        }

        curStyle = cs;

        for (var k = 0; k < tstls.length; k++) {
          var st = tstls[k];
          if (curStyle & st) s += tsopn[st];
        }

        clr = textColor;

        if (curStyle & 0xff00) {
          var cc = (curStyle & 0xff00) >>> 8;
          clr = cc < 16 ? tclrs[cc] : '#' + tnclrs[cc - 16];
        } else if (curStyle & 0xff0000) {
          clr = '#' + twclrs[(curStyle & 0xff0000) >>> 16];
        }

        if (clr) {
          if (curStyle & 1) {
            s += '<span style="background-color:' + clr + ' !important;">';
          } else if (_typeof(blur) === 'object') {
            s += '<span style="color:' + clr + ' !important; text-shadow: 0 0 ' + blur.join('px ' + clr + ', 0 0 ') + 'px ' + clr + ';">';
          } else if (blur) {
            s += '<span style="color:' + clr + ' !important; text-shadow: 0 0 ' + blur + 'px ' + clr + ';">';
          } else {
            s += '<span style="color:' + clr + ' !important;">';
          }
        }
      }

      s += tspcl[c] ? tspcl[c] : String.fromCharCode(c);
    }

    if (curStyle > 0) {
      if (curStyle & 0xffff00) s += '</span>';

      for (var k = tstls.length - 1; k >= 0; k--) {
        var st = tstls[k];
        if (curStyle & st) s += tscls[st];
      }
    }

    s += this.globals.termStringEnd;
    this.globals.writeElement(this.termDiv + '_r' + r, s);
  },
  guiReady: function guiReady() {
    var ready = true;

    if (this.globals.guiElementsReady(this.termDiv)) {
      for (var r = 0; r < this.conf.rows; r++) {
        if (this.globals.guiElementsReady(this.termDiv + '_r' + r) == false) {
          ready = false;
          break;
        }
      }
    } else {
      ready = false;
    }

    return ready;
  },
  termDivReady: function termDivReady() {
    if (document.getElementById) {
      return document.getElementById(this.termDiv) ? true : false;
    } else if (document.all) {
      return document.all[this.termDiv] ? true : false;
    } else {
      return false;
    }
  },
  getDimensions: function getDimensions() {
    var w = 0;
    var h = 0;
    var d = this.termDiv;

    if (document.getElementById) {
      var obj = document.getElementById(d);

      if (obj && obj.firstChild) {
        w = parseInt(obj.firstChild.offsetWidth, 10);
        h = parseInt(obj.firstChild.offsetHeight, 10);
      } else if (obj && obj.children && obj.children[0]) {
        w = parseInt(obj.children[0].offsetWidth, 10);
        h = parseInt(obj.children[0].offsetHeight, 10);
      }
    } else if (document.all) {
      var obj = document.all[d];

      if (obj && obj.children && obj.children[0]) {
        w = parseInt(obj.children[0].offsetWidth, 10);
        h = parseInt(obj.children[0].offsetHeight, 10);
      }
    }

    return {
      width: w,
      height: h
    };
  },
  // global store for static data and methods (former "TermGlobals")
  globals: {
    termToInitialze: null,
    activeTerm: null,
    kbdEnabled: false,
    keylock: false,
    keyRepeatDelay1: 450,
    // initial delay
    keyRepeatDelay2: 100,
    // consecutive delays
    keyRepeatTimer: null,
    lcMorePrompt1: ' -- MORE -- ',
    lcMorePromtp1Style: 1,
    lcMorePrompt2: ' (Type: space to continue, \'q\' to quit)',
    lcMorePrompt2Style: 0,
    lcMoreKeyAbort: 113,
    lcMoreKeyContinue: 32,
    // initialize global data structs
    _initGlobals: function _initGlobals() {
      var tg = Terminal.prototype.globals;

      tg._extendMissingStringMethods();

      tg._initWebColors();

      tg._initDomKeyRef();

      Terminal.prototype.termKey = tg.termKey;
    },
    // hex support (don't rely on generic support like Number.toString(16))
    getHexChar: function getHexChar(c) {
      var tg = Terminal.prototype.globals;
      if (tg.isHexChar(c)) return tg.hexToNum[c];
      return -1;
    },
    isHexChar: function isHexChar(c) {
      return c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F' ? true : false;
    },
    isHexOnlyChar: function isHexOnlyChar(c) {
      return c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F' ? true : false;
    },
    hexToNum: {
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      'a': 10,
      'b': 11,
      'c': 12,
      'd': 13,
      'e': 14,
      'f': 15,
      'A': 10,
      'B': 11,
      'C': 12,
      'D': 13,
      'E': 14,
      'F': 15
    },
    // data for color support
    webColors: [],
    webColorCodes: [''],
    colors: {
      // ANSI bright (bold) color set
      black: 1,
      red: 2,
      green: 3,
      yellow: 4,
      blue: 5,
      magenta: 6,
      cyan: 7,
      white: 8,
      // dark color set
      grey: 9,
      red2: 10,
      green2: 11,
      yellow2: 12,
      blue2: 13,
      magenta2: 14,
      cyan2: 15,
      // synonyms
      red1: 2,
      green1: 3,
      yellow1: 4,
      blue1: 5,
      magenta1: 6,
      cyan1: 7,
      gray: 9,
      darkred: 10,
      darkgreen: 11,
      darkyellow: 12,
      darkblue: 13,
      darkmagenta: 14,
      darkcyan: 15,
      // default color
      'default': 0,
      clear: 0
    },
    colorCodes: ['', '#000000', '#ff0000', '#00ff00', '#ffff00', '#0066ff', '#ff00ff', '#00ffff', '#ffffff', '#808080', '#990000', '#009900', '#999900', '#003399', '#990099', '#009999'],
    nsColors: {
      'aliceblue': 1,
      'antiquewhite': 2,
      'aqua': 3,
      'aquamarine': 4,
      'azure': 5,
      'beige': 6,
      'black': 7,
      'blue': 8,
      'blueviolet': 9,
      'brown': 10,
      'burlywood': 11,
      'cadetblue': 12,
      'chartreuse': 13,
      'chocolate': 14,
      'coral': 15,
      'cornflowerblue': 16,
      'cornsilk': 17,
      'crimson': 18,
      'darkblue': 19,
      'darkcyan': 20,
      'darkgoldenrod': 21,
      'darkgray': 22,
      'darkgreen': 23,
      'darkkhaki': 24,
      'darkmagenta': 25,
      'darkolivegreen': 26,
      'darkorange': 27,
      'darkorchid': 28,
      'darkred': 29,
      'darksalmon': 30,
      'darkseagreen': 31,
      'darkslateblue': 32,
      'darkslategray': 33,
      'darkturquoise': 34,
      'darkviolet': 35,
      'deeppink': 36,
      'deepskyblue': 37,
      'dimgray': 38,
      'dodgerblue': 39,
      'firebrick': 40,
      'floralwhite': 41,
      'forestgreen': 42,
      'fuchsia': 43,
      'gainsboro': 44,
      'ghostwhite': 45,
      'gold': 46,
      'goldenrod': 47,
      'gray': 48,
      'green': 49,
      'greenyellow': 50,
      'honeydew': 51,
      'hotpink': 52,
      'indianred': 53,
      'indigo': 54,
      'ivory': 55,
      'khaki': 56,
      'lavender': 57,
      'lavenderblush': 58,
      'lawngreen': 59,
      'lemonchiffon': 60,
      'lightblue': 61,
      'lightcoral': 62,
      'lightcyan': 63,
      'lightgoldenrodyellow': 64,
      'lightgreen': 65,
      'lightgrey': 66,
      'lightpink': 67,
      'lightsalmon': 68,
      'lightseagreen': 69,
      'lightskyblue': 70,
      'lightslategray': 71,
      'lightsteelblue': 72,
      'lightyellow': 73,
      'lime': 74,
      'limegreen': 75,
      'linen': 76,
      'maroon': 77,
      'mediumaquamarine': 78,
      'mediumblue': 79,
      'mediumorchid': 80,
      'mediumpurple': 81,
      'mediumseagreen': 82,
      'mediumslateblue': 83,
      'mediumspringgreen': 84,
      'mediumturquoise': 85,
      'mediumvioletred': 86,
      'midnightblue': 87,
      'mintcream': 88,
      'mistyrose': 89,
      'moccasin': 90,
      'navajowhite': 91,
      'navy': 92,
      'oldlace': 93,
      'olive': 94,
      'olivedrab': 95,
      'orange': 96,
      'orangered': 97,
      'orchid': 98,
      'palegoldenrod': 99,
      'palegreen': 100,
      'paleturquoise': 101,
      'palevioletred': 102,
      'papayawhip': 103,
      'peachpuff': 104,
      'peru': 105,
      'pink': 106,
      'plum': 107,
      'powderblue': 108,
      'purple': 109,
      'red': 110,
      'rosybrown': 111,
      'royalblue': 112,
      'saddlebrown': 113,
      'salmon': 114,
      'sandybrown': 115,
      'seagreen': 116,
      'seashell': 117,
      'sienna': 118,
      'silver': 119,
      'skyblue': 120,
      'slateblue': 121,
      'slategray': 122,
      'snow': 123,
      'springgreen': 124,
      'steelblue': 125,
      'tan': 126,
      'teal': 127,
      'thistle': 128,
      'tomato': 129,
      'turquoise': 130,
      'violet': 131,
      'wheat': 132,
      'white': 133,
      'whitesmoke': 134,
      'yellow': 135,
      'yellowgreen': 136
    },
    nsColorCodes: ['', 'f0f8ff', 'faebd7', '00ffff', '7fffd4', 'f0ffff', 'f5f5dc', '000000', '0000ff', '8a2be2', 'a52a2a', 'deb887', '5f9ea0', '7fff00', 'd2691e', 'ff7f50', '6495ed', 'fff8dc', 'dc143c', '00008b', '008b8b', 'b8860b', 'a9a9a9', '006400', 'bdb76b', '8b008b', '556b2f', 'ff8c00', '9932cc', '8b0000', 'e9967a', '8fbc8f', '483d8b', '2f4f4f', '00ced1', '9400d3', 'ff1493', '00bfff', '696969', '1e90ff', 'b22222', 'fffaf0', '228b22', 'ff00ff', 'dcdcdc', 'f8f8ff', 'ffd700', 'daa520', '808080', '008000', 'adff2f', 'f0fff0', 'ff69b4', 'cd5c5c', '4b0082', 'fffff0', 'f0e68c', 'e6e6fa', 'fff0f5', '7cfc00', 'fffacd', 'add8e6', 'f08080', 'e0ffff', 'fafad2', '90ee90', 'd3d3d3', 'ffb6c1', 'ffa07a', '20b2aa', '87cefa', '778899', 'b0c4de', 'ffffe0', '00ff00', '32cd32', 'faf0e6', '800000', '66cdaa', '0000cd', 'ba55d3', '9370db', '3cb371', '7b68ee', '00fa9a', '48d1cc', 'c71585', '191970', 'f5fffa', 'ffe4e1', 'ffe4b5', 'ffdead', '000080', 'fdf5e6', '808000', '6b8e23', 'ffa500', 'ff4500', 'da70d6', 'eee8aa', '98fb98', 'afeeee', 'db7093', 'ffefd5', 'ffdab9', 'cd853f', 'ffc0cb', 'dda0dd', 'b0e0e6', '800080', 'ff0000', 'bc8f8f', '4169e1', '8b4513', 'fa8072', 'f4a460', '2e8b57', 'fff5ee', 'a0522d', 'c0c0c0', '87ceeb', '6a5acd', '708090', 'fffafa', '00ff7f', '4682b4', 'd2b48c', '008080', 'd8bfd8', 'ff6347', '40e0d0', 'ee82ee', 'f5deb3', 'ffffff', 'f5f5f5', 'ffff00', '9acd32'],
    _webSwatchChars: ['0', '3', '6', '9', 'c', 'f'],
    _initWebColors: function _initWebColors() {
      // generate long and short web color ref
      var tg = Terminal.prototype.globals;
      var ws = tg._webColorSwatch;
      var wn = tg.webColors;
      var cc = tg.webColorCodes;
      var n = 1;
      var a, b, c, al, bl, bs, cl;

      for (var i = 0; i < 6; i++) {
        a = tg._webSwatchChars[i];
        al = a + a;

        for (var j = 0; j < 6; j++) {
          b = tg._webSwatchChars[j];
          bl = al + b + b;
          bs = a + b;

          for (var k = 0; k < 6; k++) {
            c = tg._webSwatchChars[k];
            cl = bl + c + c;
            wn[bs + c] = wn[cl] = n;
            cc[n] = cl;
            n++;
          }
        }
      }
    },
    webifyColor: function webifyColor(s) {
      // return nearest web color in 3 digit format
      // (do without RegExp for compatibility)
      var tg = Terminal.prototype.globals;

      if (s.length == 6) {
        var c = '';

        for (var i = 0; i < 6; i += 2) {
          var a = s.charAt(i);
          var b = s.charAt(i + 1);

          if (tg.isHexChar(a) && tg.isHexChar(b)) {
            c += tg._webSwatchChars[Math.round(parseInt(a + b, 16) / 255 * 5)];
          } else {
            return '';
          }
        }

        return c;
      } else if (s.length == 3) {
        var c = '';

        for (var i = 0; i < 3; i++) {
          var a = s.charAt(i);

          if (tg.isHexChar(a)) {
            c += tg._webSwatchChars[Math.round(parseInt(a, 16) / 15 * 5)];
          } else {
            return '';
          }
        }

        return c;
      } else {
        return '';
      }
    },
    // public methods for color support
    setColor: function setColor(label, value) {
      var tg = Terminal.prototype.globals;

      if (typeof label == 'number' && label >= 1 && label <= 15) {
        tg.colorCodes[label] = value;
      } else if (typeof label == 'string') {
        label = label.toLowerCase();

        if (label.length == 1 && tg.isHexChar(label)) {
          var n = tg.hexToNum[label];
          if (n) tg.colorCodes[n] = value;
        } else if (typeof tg.colors[label] != 'undefined') {
          var n = tg.colors[label];
          if (n) tg.colorCodes[n] = value;
        }
      }
    },
    getColorString: function getColorString(label) {
      var tg = Terminal.prototype.globals;

      if (typeof label == 'number' && label >= 0 && label <= 15) {
        return tg.colorCodes[label];
      } else if (typeof label == 'string') {
        label = label.toLowerCase();

        if (label.length == 1 && tg.isHexChar(label)) {
          return tg.colorCodes[tg.hexToNum[label]];
        } else if (typeof tg.colors[label] != 'undefined') {
          return tg.colorCodes[tg.colors[label]];
        }
      }

      return '';
    },
    getColorCode: function getColorCode(label) {
      var tg = Terminal.prototype.globals;

      if (typeof label == 'number' && label >= 0 && label <= 15) {
        return label;
      } else if (typeof label == 'string') {
        label = label.toLowerCase();

        if (label.length == 1 && tg.isHexChar(label)) {
          return parseInt(label, 16);
        } else if (typeof tg.colors[label] != 'undefined') {
          return tg.colors[label];
        }
      }

      return 0;
    },
    // import/paste methods (methods return success)
    insertText: function insertText(text) {
      // auto-types a given string to the active terminal
      // returns success (false indicates a lock or no active terminal)
      var tg = Terminal.prototype.globals;
      var termRef = tg.activeTerm;
      if (!termRef || termRef.closed || tg.keylock || termRef.lock || termRef.charMode || termRef.fieldMode) return false; // terminal open and unlocked, so type the text

      for (var i = 0; i < text.length; i++) {
        tg.keyHandler({
          which: text.charCodeAt(i),
          _remapped: true
        });
      }

      return true;
    },
    importEachLine: function importEachLine(text) {
      // import multiple lines of text per line each and execs
      // returns success (false indicates a lock or no active terminal)
      var tg = Terminal.prototype.globals;
      var termRef = tg.activeTerm;
      if (!termRef || termRef.closed || tg.keylock || termRef.lock || termRef.charMode || termRef.fieldMode) return false; // clear the current command line

      termRef.cursorOff();

      termRef._clearLine(); // normalize line breaks


      text = text.replace(/\r\n?/g, '\n'); // split lines and auto-type the text

      var t = text.split('\n');

      for (var i = 0; i < t.length; i++) {
        for (var k = 0; k < t[i].length; k++) {
          tg.keyHandler({
            which: t[i].charCodeAt(k),
            _remapped: true
          });
        }

        tg.keyHandler({
          which: term.termKey.CR,
          _remapped: true
        });
      }

      return true;
    },
    importMultiLine: function importMultiLine(text) {
      // importing multi-line text as single input with "\n" in lineBuffer
      var tg = Terminal.prototype.globals;
      var termRef = tg.activeTerm;
      if (!termRef || termRef.closed || tg.keylock || termRef.lock || termRef.charMode || termRef.fieldMode) return false; // lock and clear the line

      termRef.lock = true;
      termRef.cursorOff();

      termRef._clearLine(); // normalize linebreaks and echo the text linewise


      text = text.replace(/\r\n?/g, '\n');
      var lines = text.split('\n');

      for (var i = 0; i < lines.length; i++) {
        termRef.type(lines[i]);
        if (i < lines.length - 1) termRef.newLine();
      } // fake <ENTER>;
      // (no history entry for this)


      termRef.lineBuffer = text;
      termRef.lastLine = '';
      termRef.inputChar = 0;
      termRef.handler();
      return true;
    },
    // text related service functions
    normalize: function normalize(n, m) {
      var s = '' + n;

      while (s.length < m) {
        s = '0' + s;
      }

      return s;
    },
    fillLeft: function fillLeft(t, n) {
      if (typeof t != 'string') t = '' + t;

      while (t.length < n) {
        t = ' ' + t;
      }

      return t;
    },
    center: function center(t, l) {
      var s = '';

      for (var i = t.length; i < l; i += 2) {
        s += ' ';
      }

      return s + t;
    },
    // simple substitute for String.replace()
    stringReplace: function stringReplace(s1, s2, t) {
      var l1 = s1.length;
      var l2 = s2.length;
      var ofs = t.indexOf(s1);

      while (ofs >= 0) {
        t = t.substring(0, ofs) + s2 + t.substring(ofs + l1);
        ofs = t.indexOf(s1, ofs + l2);
      }

      return t;
    },
    // config data for text wrap
    wrapChars: {
      // keys: charCode
      // values: 1 = white space, 2 = wrap after, 3 = wrap before, 4 = conditional word break
      9: 1,
      // tab
      10: 1,
      // new line - don't change this (used internally)!!!
      12: 4,
      // form feed (use this for conditional word breaks)
      13: 1,
      // cr
      32: 1,
      // blank
      40: 3,
      // (
      45: 2,
      // dash/hyphen
      61: 2,
      // =
      91: 3,
      // [
      94: 3,
      // caret (non-printing chars)
      123: 3 // {

    },
    // keyboard methods & controls
    setFocus: function setFocus(termref) {
      Terminal.prototype.globals.activeTerm = termref;
      Terminal.prototype.globals.clearRepeatTimer();
    },
    termKey: {
      // codes of special keys
      'NUL': 0x00,
      'SOH': 0x01,
      'STX': 0x02,
      'ETX': 0x03,
      'EOT': 0x04,
      'ENQ': 0x05,
      'ACK': 0x06,
      'BEL': 0x07,
      'BS': 0x08,
      'BACKSPACE': 0x08,
      'HT': 0x09,
      'TAB': 0x09,
      'LF': 0x0A,
      'VT': 0x0B,
      'FF': 0x0C,
      'CR': 0x0D,
      'SO': 0x0E,
      'SI': 0x0F,
      'DLE': 0x10,
      'DC1': 0x11,
      'DC2': 0x12,
      'DC3': 0x13,
      'DC4': 0x14,
      'NAK': 0x15,
      'SYN': 0x16,
      'ETB': 0x17,
      'CAN': 0x18,
      'EM': 0x19,
      'SUB': 0x1A,
      'ESC': 0x1B,
      'IS4': 0x1C,
      'IS3': 0x1D,
      'IS2': 0x1E,
      'IS1': 0x1F,
      'DEL': 0x7F,
      // other specials
      'EURO': 0x20AC,
      // cursor mapping
      'LEFT': 0x1C,
      'RIGHT': 0x1D,
      'UP': 0x1E,
      'DOWN': 0x1F
    },
    // map some DOM_VK_* properties to values defined in termKey
    termDomKeyRef: {},
    _domKeyMappingData: {
      'LEFT': 'LEFT',
      'RIGHT': 'RIGHT',
      'UP': 'UP',
      'DOWN': 'DOWN',
      'BACK_SPACE': 'BS',
      'RETURN': 'CR',
      'ENTER': 'CR',
      'ESCAPE': 'ESC',
      'DELETE': 'DEL',
      'TAB': 'TAB'
    },
    _initDomKeyRef: function _initDomKeyRef() {
      var tg = Terminal.prototype.globals;
      var m = tg._domKeyMappingData;
      var r = tg.termDomKeyRef;
      var k = tg.termKey;

      for (var i in m) {
        r['DOM_VK_' + i] = k[m[i]];
      }
    },
    registerEvent: function registerEvent(obj, eventType, handler, capture) {
      if (obj.addEventListener) {
        obj.addEventListener(eventType.toLowerCase(), handler, capture);
      }
      /*
      else if (obj.attachEvent) {
      	obj.attachEvent('on'+eventType.toLowerCase(), handler);
      }
      */
      else {
          var et = eventType.toUpperCase();
          if (window.Event && window.Event[et] && obj.captureEvents) obj.captureEvents(Event[et]);
          obj['on' + eventType.toLowerCase()] = handler;
        }
    },
    releaseEvent: function releaseEvent(obj, eventType, handler, capture) {
      if (obj.removeEventListener) {
        obj.removeEventListener(eventType.toLowerCase(), handler, capture);
      }
      /*
      else if (obj.detachEvent) {
      	obj.detachEvent('on'+eventType.toLowerCase(), handler);
      }
      */
      else {
          var et = eventType.toUpperCase();
          if (window.Event && window.Event[et] && obj.releaseEvents) obj.releaseEvents(Event[et]);
          et = 'on' + eventType.toLowerCase();
          if (obj[et] && obj[et] == handler) obj.et = null;
        }
    },
    enableKeyboard: function enableKeyboard(term) {
      var tg = Terminal.prototype.globals;

      if (!tg.kbdEnabled) {
        tg.registerEvent(document, 'keypress', tg.keyHandler, true);
        tg.registerEvent(document, 'keydown', tg.keyFix, true);
        tg.registerEvent(document, 'keyup', tg.clearRepeatTimer, true);
        tg.kbdEnabled = true;
      }

      tg.activeTerm = term;
    },
    disableKeyboard: function disableKeyboard(term) {
      var tg = Terminal.prototype.globals;

      if (tg.kbdEnabled) {
        tg.releaseEvent(document, 'keypress', tg.keyHandler, true);
        tg.releaseEvent(document, 'keydown', tg.keyFix, true);
        tg.releaseEvent(document, 'keyup', tg.clearRepeatTimer, true);
        tg.kbdEnabled = false;
      }

      tg.activeTerm = null;
    },
    // remap some special key mappings on keydown
    keyFix: function keyFix(e) {
      var tg = Terminal.prototype.globals;
      var term = tg.activeTerm;
      var ch;
      if (tg.keylock || term.lock) return true;

      if (window.event) {
        if (!e) e = window.event;
        ch = e.keyCode;

        if (e.DOM_VK_UP) {
          for (var i in tg.termDomKeyRef) {
            if (e[i] && ch == e[i]) {
              tg.keyHandler({
                which: tg.termDomKeyRef[i],
                _remapped: true,
                _repeat: ch == 0x1B ? true : false
              });
              if (e.preventDefault) e.preventDefault();
              if (e.stopPropagation) e.stopPropagation();
              e.cancelBubble = true;
              return false;
            }
          }

          e.cancelBubble = false;
          return true;
        } else {
          // no DOM support
          var termKey = term.termKey;
          var keyHandler = tg.keyHandler;

          if (ch == 8 && !term.isOpera) {
            keyHandler({
              which: termKey.BS,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 9) {
            keyHandler({
              which: termKey.TAB,
              _remapped: true,
              _repeat: term.printTab ? false : true
            });
          } else if (ch == 27) {
            keyHandler({
              which: termKey.ESC,
              _remapped: true,
              _repeat: term.printTab ? false : true
            });
          } else if (ch == 37) {
            keyHandler({
              which: termKey.LEFT,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 39) {
            keyHandler({
              which: termKey.RIGHT,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 38) {
            keyHandler({
              which: termKey.UP,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 40) {
            keyHandler({
              which: termKey.DOWN,
              _remapped: true,
              _repeat: true
            });
          } else if (ch == 127 || ch == 46) {
            keyHandler({
              which: termKey.DEL,
              _remapped: true,
              _repeat: true
            });
          } else if (ch >= 57373 && ch <= 57376) {
            if (ch == 57373) {
              keyHandler({
                which: termKey.UP,
                _remapped: true,
                _repeat: true
              });
            } else if (ch == 57374) {
              keyHandler({
                which: termKey.DOWN,
                _remapped: true,
                _repeat: true
              });
            } else if (ch == 57375) {
              keyHandler({
                which: termKey.LEFT,
                _remapped: true,
                _repeat: true
              });
            } else if (ch == 57376) {
              keyHandler({
                which: termKey.RIGHT,
                _remapped: true,
                _repeat: true
              });
            }
          } else {
            e.cancelBubble = false;
            return true;
          }

          if (e.preventDefault) e.preventDefault();
          if (e.stopPropagation) e.stopPropagation();
          e.cancelBubble = true;
          return false;
        }
      }
    },
    clearRepeatTimer: function clearRepeatTimer(e) {
      var tg = Terminal.prototype.globals;

      if (tg.keyRepeatTimer) {
        clearTimeout(tg.keyRepeatTimer);
        tg.keyRepeatTimer = null;
      }
    },
    doKeyRepeat: function doKeyRepeat(ch) {
      Terminal.prototype.globals.keyHandler({
        which: ch,
        _remapped: true,
        _repeated: true
      });
    },
    keyHandler: function keyHandler(e) {
      var tg = Terminal.prototype.globals;
      var term = tg.activeTerm;
      if (tg.keylock || term.lock || term.isMac && e && e.metaKey) return true;

      if (window.event) {
        if (window.event.preventDefault) window.event.preventDefault();
        if (window.event.stopPropagation) window.event.stopPropagation();
      } else if (e) {
        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
      }

      var ch;
      var ctrl = false;
      var shft = false;
      var remapped = false;
      var termKey = term.termKey;
      var keyRepeat = 0;

      if (e) {
        ch = e.which;
        ctrl = e.ctrlKey && !e.altKey || e.modifiers == 2;
        shft = e.shiftKey || e.modifiers == 4;

        if (e._remapped) {
          remapped = true;

          if (window.event) {
            //ctrl=(ctrl || window.event.ctrlKey);
            ctrl = ctrl || window.event.ctrlKey && !window.event.altKey;
            shft = shft || window.event.shiftKey;
          }
        }

        if (e._repeated) {
          keyRepeat = 2;
        } else if (e._repeat) {
          keyRepeat = 1;
        }
      } else if (window.event) {
        ch = window.event.keyCode; //ctrl=(window.event.ctrlKey);

        ctrl = window.event.ctrlKey && !window.event.altKey; // allow alt gr == ctrl alt

        shft = window.event.shiftKey;

        if (window.event._repeated) {
          keyRepeat = 2;
        } else if (window.event._repeat) {
          keyRepeat = 1;
        }
      } else {
        return true;
      }

      if (ch == '' && remapped == false) {
        // map specials
        if (e == null) e = window.event;

        if (e.charCode == 0 && e.keyCode) {
          if (e.DOM_VK_UP) {
            var dkr = tg.termDomKeyRef;

            for (var i in dkr) {
              if (e[i] && e.keyCode == e[i]) {
                ch = dkr[i];
                break;
              }
            }
          } else {
            // NS4
            if (e.keyCode == 28) {
              ch = termKey.LEFT;
            } else if (e.keyCode == 29) {
              ch = termKey.RIGHT;
            } else if (e.keyCode == 30) {
              ch = termKey.UP;
            } else if (e.keyCode == 31) {
              ch = termKey.DOWN;
            } // Mozilla alike but no DOM support
            else if (e.keyCode == 37) {
                ch = termKey.LEFT;
              } else if (e.keyCode == 39) {
                ch = termKey.RIGHT;
              } else if (e.keyCode == 38) {
                ch = termKey.UP;
              } else if (e.keyCode == 40) {
                ch = termKey.DOWN;
              } // just to have the TAB mapping here too
              else if (e.keyCode == 9) {
                  ch = termKey.TAB;
                }
          }
        }
      } // leave on unicode private use area (might be function key etc)


      if (ch >= 0xE000 && ch <= 0xF8FF) return;

      if (keyRepeat) {
        tg.clearRepeatTimer();
        tg.keyRepeatTimer = window.setTimeout('Terminal.prototype.globals.doKeyRepeat(' + ch + ')', keyRepeat == 1 ? tg.keyRepeatDelay1 : tg.keyRepeatDelay2);
      } // key actions


      if (term.charMode) {
        term.insert = false;
        term.inputChar = ch;
        term.lineBuffer = '';
        term.handler();
        if (ch <= 32 && window.event) window.event.cancelBubble = true;
        return false;
      }

      if (!ctrl) {
        // special keys
        if (ch == termKey.CR) {
          term.lock = true;
          term.cursorOff();
          term.insert = false;

          if (term.rawMode) {
            term.lineBuffer = term.lastLine;
          } else if (term.fieldMode) {
            term.lineBuffer = term.lastLine;
            term.exitFieldMode();
          } else {
            term.lineBuffer = term._getLine(true);

            if (term.lineBuffer != '' && (!term.historyUnique || term.history.length == 0 || term.lineBuffer != term.history[term.history.length - 1])) {
              if (!term.scanning) term.history[term.history.length] = term.lineBuffer;
            }

            term.histPtr = term.history.length;
          }

          term.lastLine = '';
          term.inputChar = 0;
          term.handler();
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else if (term.fieldMode) {
          if (ch == termKey.ESC) {
            term.lineBuffer = term.lastLine = '';
            term.exitFieldMode();
            term.lastLine = '';
            term.inputChar = 0;
            term.handler();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.LEFT) {
            if (term.fieldC > 0) term.fieldC--;
          } else if (ch == termKey.RIGHT) {
            if (term.fieldC < term.lastLine.length) term.fieldC++;
          } else if (ch == termKey.BS) {
            if (term.fieldC > 0) {
              term.lastLine = term.lastLine.substring(0, term.fieldC - 1) + term.lastLine.substring(term.fieldC);
              term.fieldC--;
            }
          } else if (ch == termKey.DEL) {
            if (term.fieldC < term.lastLine.length) {
              term.lastLine = term.lastLine.substring(0, term.fieldC) + term.lastLine.substring(term.fieldC + 1);
            }
          } else if (ch >= 32) {
            term.lastLine = term.lastLine.substring(0, term.fieldC) + String.fromCharCode(ch) + term.lastLine.substring(term.fieldC);
            term.fieldC++;
          }

          term.drawField();
          return false;
        } else if (ch == termKey.ESC && term.conf.closeOnESC) {
          term.close();
          if (window.event) window.event.cancelBubble = true;
          return false;
        }

        if (ch < 32 && term.rawMode) {
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else {
          if (ch == termKey.LEFT) {
            term.cursorLeft();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.RIGHT) {
            term.cursorRight();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.UP) {
            term.cursorOff();
            if (term.histPtr == term.history.length) term.lastLine = term._getLine();

            term._clearLine();

            if (term.history.length && term.histPtr >= 0) {
              if (term.histPtr > 0) term.histPtr--;
              term.type(term.history[term.histPtr]);
            } else if (term.lastLine) {
              term.type(term.lastLine);
            }

            term.cursorOn();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.DOWN) {
            term.cursorOff();
            if (term.histPtr == term.history.length) term.lastLine = term._getLine();

            term._clearLine();

            if (term.history.length && term.histPtr <= term.history.length) {
              if (term.histPtr < term.history.length) term.histPtr++;

              if (term.histPtr < term.history.length) {
                term.type(term.history[term.histPtr]);
              } else if (term.lastLine) {
                term.type(term.lastLine);
              }
            } else if (term.lastLine) {
              term.type(term.lastLine);
            }

            term.cursorOn();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.BS) {
            term.backspace();
            if (window.event) window.event.cancelBubble = true;
            return false;
          } else if (ch == termKey.DEL) {
            if (term.DELisBS) {
              term.backspace();
            } else {
              term.fwdDelete();
            }

            if (window.event) window.event.cancelBubble = true;
            return false;
          }
        }
      }

      if (term.rawMode) {
        if (term.isPrintable(ch)) {
          term.lastLine += String.fromCharCode(ch);
        }

        if (ch == 32 && window.event) {
          window.event.cancelBubble = true;
        } else if (window.opera && window.event) {
          window.event.cancelBubble = true;
        }

        return false;
      } else {
        if (term.conf.catchCtrlH && (ch == termKey.BS || ctrl && ch == 72)) {
          // catch ^H
          term.backspace();
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else if (term.ctrlHandler && (ch < 32 || ctrl && term.isPrintable(ch, true))) {
          if (ch >= 65 && ch <= 96 || ch == 63) {
            // remap canonical
            if (ch == 63) {
              ch = 31;
            } else {
              ch -= 64;
            }
          }

          term.inputChar = ch;
          term.ctrlHandler();
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else if (ctrl || !term.isPrintable(ch, true)) {
          if (window.event) window.event.cancelBubble = true;
          return false;
        } else if (term.isPrintable(ch, true)) {
          if (term.blinkTimer) clearTimeout(term.blinkTimer);

          if (term.insert) {
            term.cursorOff();

            term._scrollRight(term.r, term.c);
          }

          term._charOut(ch);

          term.cursorOn();

          if (ch == 32 && window.event) {
            window.event.cancelBubble = true;
          } else if (window.opera && window.event) {
            window.event.cancelBubble = true;
          }

          return false;
        }
      }

      return true;
    },
    // gui mappings
    hasSubDivs: false,
    termStringStart: '',
    termStringEnd: '',
    termSpecials: {
      // special HTML escapes
      0: '&nbsp;',
      1: '&nbsp;',
      9: '&nbsp;',
      32: '&nbsp;',
      34: '&quot;',
      38: '&amp;',
      60: '&lt;',
      62: '&gt;',
      127: '&loz;',
      0x20AC: '&euro;'
    },
    // extensive list of max 8 styles (2^n, n<16)
    termStyles: [1, 2, 4, 8, 16],
    // style markup: one letter keys, reserved keys: "p" (plain), "c" (color)
    termStyleMarkup: {
      'r': 1,
      'u': 2,
      'i': 4,
      's': 8,
      'b': 16 // map "b" to 16 (italics) for ANSI mapping

    },
    // mappings for styles (heading HTML)
    termStyleOpen: {
      1: '<span class="termReverse">',
      2: '<u>',
      4: '<i>',
      8: '<strike>',
      16: '<i>'
    },
    // mapping for styles (trailing HTML)
    termStyleClose: {
      1: '<\/span>',
      2: '<\/u>',
      4: '<\/i>',
      8: '<\/strike>',
      16: '</i>'
    },
    // method to install custom styles
    assignStyle: function assignStyle(styleCode, markup, htmlOpen, htmlClose) {
      var tg = Terminal.prototype.globals; // check params

      if (!styleCode || isNaN(styleCode)) {
        if (styleCode >= 256) {
          alert('termlib.js:\nCould not assign style.\n' + s + ' is not a valid power of 2 between 0 and 256.');
          return;
        }
      }

      var s = styleCode & 0xff;
      var matched = false;

      for (var i = 0; i < 8; i++) {
        if (s >>> i & 1) {
          if (matched) {
            alert('termlib.js:\nCould not assign style code.\n' + s + ' is not a power of 2!');
            return;
          }

          matched = true;
        }
      }

      if (!matched) {
        alert('termlib.js:\nCould not assign style code.\n' + s + ' is not a valid power of 2 between 0 and 256.');
        return;
      }

      markup = String(markup).toLowerCase();

      if (markup == 'c' || markup == 'p') {
        alert('termlib.js:\nCould not assign mark up.\n"' + markup + '" is a reserved code.');
        return;
      }

      if (markup.length > 1) {
        alert('termlib.js:\nCould not assign mark up.\n"' + markup + '" is not a single letter code.');
        return;
      }

      var exists = false;

      for (var i = 0; i < tg.termStyles.length; i++) {
        if (tg.termStyles[i] == s) {
          exists = true;
          break;
        }
      }

      if (exists) {
        var m = tg.termStyleMarkup[markup];

        if (m && m != s) {
          alert('termlib.js:\nCould not assign mark up.\n"' + markup + '" is already in use.');
          return;
        }
      } else {
        if (tg.termStyleMarkup[markup]) {
          alert('termlib.js:\nCould not assign mark up.\n"' + markup + '" is already in use.');
          return;
        }

        tg.termStyles[tg.termStyles.length] = s;
      } // install properties


      tg.termStyleMarkup[markup] = s;
      tg.termStyleOpen[s] = htmlOpen;
      tg.termStyleClose[s] = htmlClose;
    },
    // ANSI output mapping (styles & fg colors only)
    ANSI_regexp: /(\x1b\[|x9b)([0-9;]+?)([a-zA-Z])/g,
    // CSI ( = 0x1b+"[" or 0x9b ) + params + letter
    ANIS_SGR_codes: {
      '0': '%+p',
      '1': '%+b',
      '3': '%+i',
      '4': '%+u',
      '7': '%+r',
      '9': '%+s',
      '21': '%+u',
      '22': '%-b',
      '23': '%-i',
      '24': '%-u',
      '27': '%-r',
      '29': '%-s',
      '30': '%c(0)',
      // using default fg color for black (black: "%c(1)")
      '31': '%c(a)',
      '32': '%c(b)',
      '33': '%c(c)',
      '34': '%c(d)',
      '35': '%c(e)',
      '36': '%c(f)',
      '37': '%c(#999)',
      '39': '%c(0)',
      '90': '%c(9)',
      '91': '%c(2)',
      '92': '%c(3)',
      '93': '%c(4)',
      '94': '%c(5)',
      '95': '%c(6)',
      '96': '%c(7)',
      '97': '%c(8)',
      '99': '%c(0)',
      'trueBlack': '%c(1)'
    },
    ANSI_map: function ANSI_map(t, trueBlack) {
      // transform simple ANSI SGR codes to internal markup
      var tg = Terminal.prototype.globals;
      tg.ANSI_regexp.lastIndex = 0;
      return t.replace(tg.ANSI_regexp, function (str, p1, p2, p3, offset, s) {
        return tg.ANSI_replace(p2, p3, trueBlack);
      });
    },
    ANSI_replace: function ANSI_replace(p, cmd, trueBlack) {
      var tg = Terminal.prototype.globals;

      if (cmd == 'm') {
        if (p == '') {
          return tg.ANIS_SGR_codes[0];
        } else if (trueBlack && p == '30') {
          return tg.ANIS_SGR_codes.trueBlack;
        } else if (tg.ANIS_SGR_codes[p]) {
          return tg.ANIS_SGR_codes[p];
        }
      }

      return '';
    },
    // basic DHTML dynamics and browser abstraction
    writeElement: function writeElement(e, t) {
      if (document.getElementById) {
        var obj = document.getElementById(e);
        obj.innerHTML = t;
      } else if (document.all) {
        document.all[e].innerHTML = t;
      }
    },
    setElementXY: function setElementXY(d, x, y) {
      if (document.getElementById) {
        var obj = document.getElementById(d); // obj.style.left=x+'px';
        // obj.style.top=y+'px';
      } else if (document.all) {
        document.all[d].style.left = x + 'px';
        document.all[d].style.top = y + 'px';
      }
    },
    setVisible: function setVisible(d, v) {
      if (document.getElementById) {
        var obj = document.getElementById(d);
        obj.style.visibility = v ? 'visible' : 'hidden';
      } else if (document.all) {
        document.all[d].style.visibility = v ? 'visible' : 'hidden';
      }
    },
    setDisplay: function setDisplay(d, v) {
      if (document.getElementById) {
        var obj = document.getElementById(d);
        obj.style.display = v;
      } else if (document.all) {
        document.all[d].style.display = v;
      }
    },
    guiElementsReady: function guiElementsReady(e) {
      if (document.getElementById) {
        return document.getElementById(e) ? true : false;
      } else if (document.all) {
        return document.all[e] ? true : false;
      } else {
        return false;
      }
    },
    // constructor mods (MSIE fixes)
    _termString_makeKeyref: function _termString_makeKeyref() {
      var tg = Terminal.prototype.globals;
      var termString_keyref = tg.termString_keyref = new Array();
      var termString_keycoderef = tg.termString_keycoderef = new Array();
      var hex = new Array('A', 'B', 'C', 'D', 'E', 'F');

      for (var i = 0; i <= 15; i++) {
        var high = i < 10 ? i : hex[i - 10];

        for (var k = 0; k <= 15; k++) {
          var low = k < 10 ? k : hex[k - 10];
          var cc = i * 16 + k;

          if (cc >= 32) {
            var cs = unescape("%" + high + low);
            termString_keyref[cc] = cs;
            termString_keycoderef[cs] = cc;
          }
        }
      }
    },
    _extendMissingStringMethods: function _extendMissingStringMethods() {
      if (!String.fromCharCode || !String.prototype.charCodeAt) {
        Terminal.prototype.globals._termString_makeKeyref();
      }

      if (!String.fromCharCode) {
        String.fromCharCode = function (cc) {
          return cc != null ? Terminal.prototype.globals.termString_keyref[cc] : '';
        };
      }

      if (!String.prototype.charCodeAt) {
        String.prototype.charCodeAt = function (n) {
          cs = this.charAt(n);
          return Terminal.prototype.globals.termString_keycoderef[cs] ? Terminal.prototype.globals.termString_keycoderef[cs] : 0;
        };
      }
    } // end of Terminal.prototype.globals
    // end of Terminal.prototype

  } // initialize global data

};

Terminal.prototype.globals._initGlobals(); // global entities for backward compatibility with termlib 1.x applications


var TerminalDefaults = Terminal.prototype.Defaults;
var termDefaultHandler = Terminal.prototype.defaultHandler;
var TermGlobals = Terminal.prototype.globals;
var termKey = Terminal.prototype.globals.termKey;
var termDomKeyRef = Terminal.prototype.globals.termDomKeyRef;
/*
  === termlib.js Socket Extension v.1.02 ===

  (c) Norbert Landsteiner 2003-2007
  mass:werk - media environments
  <http://www.masswerk.at>

# Synopsis:
  Integrates async XMLHttpRequests (AJAX/JSON) tightly into termlib.js

# Example:

  myTerm = new Terminal( { handler: myTermHandler } );
  myTerm.open();

  function myTermHandler() {
    this.newLine();
    if (this.lineBuffer == 'get file') {
       myTerm.send(
         {
           url: 'myservice',
           data: {
               book: 'theBook',
               chapter: 7,
               page: 45
             },
           callback: myCallback
          }
       );
       return;
    }
    else {
       // ...
    }
    this.prompt();
  }

  function myCallback() {
  	if (this.socket.success) {
  		this.write(this.socket.responseText);
  	}
  	else {
  		this.write('OOPS: ' + this.socket.status + ' ' + this.socket.statusText);
  		if (this.socket.errno) {
  			this.newLine();
  			this.write('Error: ' + this.socket.errstring);
  		}
  	}
  	this.prompt();
  }


# Documentation:

  for usage and description see readme.txt chapter 13:
  <http://www.masswerk.at/termlib/readme.txt>

  or refer to the sample page:
  <http://www.masswerk.at/termlib/sample_socket.html>

*/

Terminal.prototype._HttpSocket = function () {
  var req = null;

  if (window.XMLHttpRequest) {
    try {
      req = new XMLHttpRequest();
    } catch (e) {}
  } else if (window.ActiveXObject) {
    var prtcls = this._msXMLHttpObjects;

    for (var i = 0; i < prtcls.length; i++) {
      try {
        req = new ActiveXObject(prtcls[i]);

        if (req) {
          // shorten proto list to working element
          if (prtcls.length > 1) this.prototype._msXMLHttpObjects = [prtcls[i]];
          break;
        }
      } catch (e) {}
    }
  }

  this.request = req;
  this.url;
  this.data = null;
  this.query = '';
  this.timeoutTimer = null;
  this.localMode = Boolean(window.location.href.search(/^file:/i) == 0);
  this.error = 0;
};

Terminal.prototype._HttpSocket.prototype = {
  version: '1.02',
  // config
  useXMLEncoding: false,
  // use ";" as separator if true, "&" else
  defaulTimeout: 10000,
  // request timeout in ticks (milliseconds)
  defaultMethod: 'GET',
  forceNewline: true,
  // translate line-breaks in responseText to newlines
  // static const
  errno: {
    OK: 0,
    NOTIMPLEMENTED: 1,
    FATALERROR: 2,
    TIMEOUT: 3,
    NETWORKERROR: 4,
    LOCALFILEERROR: 5
  },
  errstring: ['', 'XMLHttpRequest not implemented.', 'Could not open XMLHttpRequest.', 'The connection timed out.', 'Network error.', 'The requested local document was not found.'],
  // private static data
  _msXMLHttpObjects: ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'Msxml2.XMLHTTP.3.0'],
  // internal methods
  serializeData: function serializeData() {
    this.query = this.serialize(this.data);
  },
  serialize: function serialize(data) {
    var v = '';

    if (data != null) {
      switch (_typeof(data)) {
        case 'object':
          var d = [];

          if (data instanceof Array) {
            // array
            for (var i = 0; i < data.length; i++) {
              d.push(this.serialize(data[i]));
            }

            v = d.join(',');
            break;
          }

          for (var i in data) {
            switch (_typeof(data[i])) {
              case 'object':
                d.push(encodeURIComponent(i) + '=' + this.serialize(data[i]));
                break;

              default:
                d.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
                break;
            }
          }

          v = this.useXMLEncoding ? d.join(';') : d.join('&');
          break;

        case 'number':
          v = String(data);
          break;

        case 'string':
          v = encodeURIComponent(data);
          break;

        case 'boolean':
          v = data ? '1' : '0';
          break;
      }
    }

    return v;
  },
  toCamelCase: function toCamelCase(s) {
    if (typeof s != 'string') s = String(s);
    var a = s.toLowerCase().split('-');
    var cc = a[0];

    for (var i = 1; i < a.length; i++) {
      p = a[i];
      if (p.length) cc += p.charAt(0).toUpperCase() + p.substring(1);
    }

    return cc;
  },
  callbackHandler: function callbackHandler() {
    if (this.termRef.closed) return;
    var r = this.request;
    if (this.error == 0 && r.readyState != 4) return;

    if (this.timeoutTimer) {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }

    var success = false;
    var failed = true;
    var response = {
      headers: {},
      ErrorCodes: this.errno
    };

    if (this.localMode) {
      if (this.error && this.error < this.errno.NETWORKERROR) {
        response.status = 0;
        response.statusText = 'Connection Error';
        response.responseText = '';
        response.responseXML = null;
      } else if (this.error || r.responseText == null) {
        failed = false;
        response.status = 404;
        response.statusText = 'Not Found';
        response.responseText = 'The document ' + this.url + ' was not found on this file system.';
        response.responseXML = null;
        this.error = this.errno.LOCALFILEERROR;
      } else {
        success = true;
        failed = false;
        response.status = 200;
        response.statusText = 'OK';
        response.responseText = r.responseText;
        response.responseXML = r.responseXML;
      }
    } else {
      try {
        if (!this.error) {
          if (_typeof(r) == 'object' && r.status != undefined) {
            failed = false;

            if (r.status >= 200 && r.status < 300) {
              success = true;
            } else if (r.status >= 12000) {
              // MSIE network error
              failed = true;
              this.error = this.errno.NETWORKERROR;
            }
          }
        }
      } catch (e) {}

      if (!failed) {
        response.status = r.status;
        response.statusText = r.status == 404 ? 'Not Found' : r.statusText; // force correct header

        response.responseText = r.responseText;
        response.responseXML = r.responseXML;

        if (this.getHeaders) {
          if (this.getHeaders instanceof Array) {
            for (var i = 0; i < this.getHeaders.length; i++) {
              var h = this.getHeaders[i];

              try {
                response.headers[this.toCamelCase(h)] = r.getResponseHeader(h);
              } catch (e) {}
            }
          } else {
            for (var h in this.getHeaders) {
              try {
                response.headers[this.toCamelCase(h)] = r.getResponseHeader(h);
              } catch (e) {}
            }
          }
        }
      } else {
        response.status = 0;
        response.statusText = 'Connection Error';
        response.responseText = '';
        response.responseXML = null;
      }
    }

    if (this.forceNewline) response.responseText = response.responseText.replace(/\r\n?/g, '\n');
    response.url = this.url;
    response.data = this.data;
    response.query = this.query;
    response.method = this.method;
    response.success = success;
    response.errno = this.error;
    response.errstring = this.errstring[this.error];
    var term = this.termRef;
    term.socket = response;

    if (this.callback) {
      if (typeof this.callback == 'function') {
        this.callback.apply(term);
      } else if (window[this.callback] && typeof window[this.callback] == 'function') {
        window[this.callback].apply(term);
      } else {
        term._defaultServerCallback();
      }
    } else {
      term._defaultServerCallback();
    }

    delete term.socket;
    this.request = null;
    this.callback = null;
  },
  timeoutHandler: function timeoutHandler() {
    this.error = this.errno.TIMEOUT;

    try {
      this.request.abort();
    } catch (e) {}

    if (!this.localMode) this.callbackHandler();
  }
};

Terminal.prototype.send = function (opts) {
  var soc = new this._HttpSocket();

  if (opts) {
    if (typeof opts.method == 'string') {
      switch (opts.method.toLowerCase()) {
        case 'post':
          soc.method = 'POST';
          break;

        case 'get':
          soc.method = 'GET';
          break;

        default:
          soc.method = soc.defaultMethod.toUpperCase();
      }
    } else {
      soc.method = soc.defaultMethod;
    }

    if (opts.postbody != undefined) {
      soc.method = 'POST';
      soc.query = opts.postbody;
      soc.data = opts.data;
    } else if (opts.data != undefined) {
      soc.data = opts.data;
      soc.serializeData();
    }

    if (opts.url) soc.url = opts.url;

    if (opts.getHeaders && _typeof(opts.getHeaders) == 'object') {
      soc.getHeaders = opts.getHeaders;
    }
  } else {
    opts = {};
    soc.method = soc.defaultMethod;
  }

  var uri = soc.url;

  if (soc.method == 'GET') {
    if (soc.query) {
      uri += uri.indexOf('?') < 0 ? '?' + soc.query : soc.useXMLEncoding ? ';' + soc.query : '&' + soc.query;
    }

    if (!soc.localMode) {
      // add a random value to the query string (force a request)
      var uniqueparam = '_termlib_reqid=' + new Date().getTime() + '_' + Math.floor(Math.random() * 100000);
      uri += uri.indexOf('?') < 0 ? '?' + uniqueparam : soc.useXMLEncoding ? ';' + uniqueparam : '&' + uniqueparam;
    }
  }

  soc.callback = opts.callback;
  soc.termRef = this;

  if (!soc.request) {
    soc.error = soc.errno.NOTIMPLEMENTED;
    soc.callbackHandler();
    return;
  } else {
    try {
      if (opts.userid != undefined) {
        if (opts.password != undefined) {
          soc.request.open(soc.method, uri, true, opts.userid, opts.password);
        } else {
          soc.request.open(soc.method, uri, true, opts.userid);
        }
      } else {
        soc.request.open(soc.method, uri, true);
      }
    } catch (e) {
      soc.error = soc.errno.FATALERROR;
      soc.callbackHandler();
      return;
    }

    var body = null;

    if (soc.method == 'POST') {
      try {
        soc.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      } catch (e) {}

      body = soc.query;
    }

    if (opts.headers && typeof opts.headers == 'objects') {
      for (var i in opts.headers) {
        try {
          soc.request.setRequestHeader(i, opts.headers[i]);
        } catch (e) {}
      }
    }

    if (opts.mimetype && soc.request.overrideMimeType) {
      try {
        soc.request.overrideMimeType(opts.mimetype); // force "Connection: close" (Bugzilla #246651)

        soc.request.setRequestHeader('Connection', 'close');
      } catch (e) {}
    }

    var timeoutDelay = opts.timeout && typeof opts.timeout == 'number' ? opts.tiomeout : soc.defaulTimeout;

    soc.request.onreadystatechange = function () {
      soc.callbackHandler();
    };

    try {
      soc.request.send(body);
    } catch (e) {
      if (soc.localMode) {
        soc.request.onreadystatechange = null;
        soc.request.abort();
        soc.error = soc.errno.LOCALFILEERROR;
      } else {
        soc.request.onreadystatechange = null;

        try {
          soc.request.abort();
        } catch (e2) {}

        soc.error = soc.errno.NETWORKERROR;
      }

      soc.callbackHandler();
      return true;
    }

    soc.timeoutTimer = setTimeout(function () {
      soc.timeoutHandler();
    }, timeoutDelay);
  }
};

Terminal.prototype._defaultServerCallback = function () {
  if (this.socket.success) {
    // output im more-mode
    this.write('Server Response:%n' + this.socket.responseText, true);
  } else {
    var s = 'Request failed: ' + this.socket.status + ' ' + this.socket.statusText;
    if (this.socket.errno) s += '%n' + this.socket.errstring;
    this.write(s);
    this.prompt();
  }
}; // eof


!function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
  }

  var n = {};
  return e.m = t, e.c = n, e.i = function (t) {
    return t;
  }, e.d = function (t, n, r) {
    e.o(t, n) || Object.defineProperty(t, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    });
  }, e.n = function (t) {
    var n = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return e.d(n, "a", n), n;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 18);
}([function (t, e) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  t.exports = n;
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      i = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      a = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.name,
          o = e.fn,
          i = e.type,
          a = void 0 === i ? "usr" : i,
          s = e.shell,
          u = void 0 === s ? void 0 : s,
          c = e.man,
          l = void 0 === c ? "" : c;
      if (r(this, t), "string" != typeof n) throw Error("Command name must be a string");
      if ("function" != typeof o) throw Error("Command function must be... a function");
      this.fn = o.bind(this), this.name = n, this.type = a, this.man = l, u && (this.shell = u);
    }

    return i(t, [{
      key: "exec",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("object" !== ("undefined" == typeof t ? "undefined" : o(t)) || Array.isArray(t)) throw Error("Command exec ARGV Must be an [Object]");
        return Object.keys(t).length ? this.fn(t) : this.fn();
      }
    }]), t;
  }();

  t.exports = a;
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      i = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.name,
          o = void 0 === n ? "" : n,
          i = e.type,
          a = void 0 === i ? "file" : i,
          s = e.content,
          u = void 0 === s ? "" : s;
      r(this, t), this.uid = this.genUid(), this.name = o, this.type = a, this.content = u, this.user = "root", this.group = "root", "file" === this.type ? this.permission = "rwxr--r--" : this.permission = "drwxr-xr-x";
    }

    return o(t, [{
      key: "genUid",
      value: function value() {
        function t() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }

        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      }
    }]), t;
  }();

  t.exports = i;
}, function (t, e, n) {
  "use strict";

  (function (e) {
    function r(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function o(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    var a = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        s = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = n(5),
        c = n(4),
        l = n(8),
        f = function (t) {
      function u() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.filesystem,
            i = void 0 === e ? void 0 : e,
            s = t.commands,
            f = void 0 === s ? void 0 : s,
            h = t.env,
            d = void 0 === h ? {} : h;
        r(this, u);
        var p = o(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this));
        return p.polyfills(), p.Classes = {
          Command: n(1),
          File: n(2)
        }, p.fs = new c(i, p), p.env = a({}, l, d), p.ShellCommands = p.registerCommands(p), p.ShellCommands = a({}, p.ShellCommands, p.registerCommands(p, f)), p;
      }

      return i(u, t), s(u, [{
        key: "polyfills",
        value: function value() {
          return e.Promise || (e.Promise = n(10).Promise), e.fetch || (e.fetch = n(14)), !0;
        }
      }, {
        key: "run",
        value: function value(t) {
          return this.exec(t);
        }
      }]), u;
    }(u);

    t.exports = f;
  }).call(e, n(0));
}, function (t, e, n) {
  "use strict";

  function r(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      a = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      s = n(7),
      u = n(2),
      c = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (o(this, t), this.shell = n, "object" !== ("undefined" == typeof e ? "undefined" : i(e)) || Array.isArray(e)) throw new Error("Virtual Filesystem provided not valid, initialization failed.");
      e = JSON.parse(JSON.stringify(e)), this.FileSystem = this.initFs(e), this.cwd = ["/"];
    }

    return a(t, [{
      key: "initFs",
      value: function value(t) {
        this.buildVirtualFs(t);
        var e = new u({
          name: "/",
          content: t,
          type: "dir"
        });
        return e;
      }
    }, {
      key: "buildVirtualFs",
      value: function value(t) {
        for (var e in t) {
          t.hasOwnProperty(e) && ("object" !== i(t[e]) || Array.isArray(t[e]) ? t[e] = new u({
            name: e,
            content: t[e]
          }) : (t[e] = new u({
            name: e,
            content: t[e],
            type: "dir"
          }), this.buildVirtualFs(t[e].content)));
        }
      }
    }, {
      key: "pathStringToArray",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (!t.length) throw new Error("Path cannot be empty");
        if (t.match(/\/{2,}/g)) throw new Error("-invalid path: " + t);
        var e = t.split("/");
        return "" === e[0] && (e[0] = "/"), "." === e[0] && e.shift(), "" === e[e.length - 1] && e.pop(), "/" !== e[0] && (e = this.cwd.concat(e)), e;
      }
    }, {
      key: "pathArrayToString",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (!Array.isArray(t)) throw new Error("-fatal filesystem: path must be an array");
        if (!t.length) throw new Error("-invalid filesystem: path not provided");
        var e = t.join("/");
        return e.replace(/\/{2,}/g, "/");
      }
    }, {
      key: "fileWalker",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["/"],
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.FileSystem;
        if (!Array.isArray(t)) throw new Error("Path must be an array of nodes, use Filesystem.pathStringToArray({string})");
        if (t = t.slice(0), !t.length) return "dir" === e.type ? e.content : e;
        var n = t.shift();

        if ("/" !== n) {
          var r = e.content[n];
          if (!r) throw new Error("File doesn't exist");
          e = r;
        }

        return this.fileWalker(t, e);
      }
    }, {
      key: "getNode",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (arguments[1], "string" != typeof t) throw new Error("Invalid input.");
        var e = void 0,
            n = void 0;

        try {
          e = this.pathStringToArray(t), n = this.fileWalker(e);
        } catch (t) {
          throw t;
        }

        return {
          path: t,
          pathArray: e,
          node: n
        };
      }
    }, {
      key: "changeDir",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = void 0;

        if (".." === t) {
          var n = this.cwd.splice(0, this.cwd.length - 1);
          if (!n.length) return "You are in the root directory";
          t = this.pathArrayToString(n);
        }

        try {
          e = this.getNode(t, "dir");
        } catch (t) {
          throw t;
        }

        if ("file" === e.node.type) throw new Error(e.pathArray[e.pathArray.length - 1] + " is a file not a directory");
        return this.cwd = e.pathArray, "changed directory: " + this.getCurrentDirectory();
      }
    }, {
      key: "listDir",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = void 0;

        try {
          e = this.getNode(t, "dir");
        } catch (t) {
          throw t;
        }

        return "file" === e.node.type && (e.node = r({}, e.node.name, e.node)), e.node;
      }
    }, {
      key: "readFile",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            e = void 0;

        try {
          e = this.getNode(t, "file");
        } catch (t) {
          throw t;
        }

        if (!e.node.type) throw new Error(e.pathArray[e.pathArray.length - 1] + " is a directory not a file");
        return e.node;
      }
    }, {
      key: "getCurrentDirectory",
      value: function value() {
        var t = void 0;

        try {
          t = this.pathArrayToString(this.cwd);
        } catch (t) {
          return "-invalid filesystem: An error occured while parsing current working directory to string.";
        }

        return t;
      }
    }]), t;
  }();

  t.exports = c;
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      i = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      a = n(1),
      s = n(12),
      u = function () {
    function t() {
      r(this, t), this.buildHistory();
    }

    return i(t, [{
      key: "parse",
      value: function value(t) {
        return new s(t);
      }
    }, {
      key: "exec",
      value: function value(t) {
        this.setHistoryItem(t);
        var e = void 0;

        try {
          e = this.parse(t);
        } catch (t) {
          return "-fatal command: " + (t.message || "Some Error Occured while parsing the command string.");
        }

        var n = this.ShellCommands[e.command];
        if (!n) return "-invalid shell: Command <" + e.command + "> doesn't exist.\n";
        var r = void 0;

        try {
          r = n.exec(e);
        } catch (t) {
          return "-fatal " + e.command + ": " + t.message;
        }

        return this.format(r);
      }
    }, {
      key: "format",
      value: function value(t) {
        return "function" == typeof t ? "-invalid command: Command returned invalid data type." : void 0 === t || "undefined" == typeof t ? "-invalid command: Command returned no data." : t;
      }
    }, {
      key: "registerCommands",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = n(6);

        if (e) {
          if ("object" !== ("undefined" == typeof e ? "undefined" : o(e)) || Array.isArray(e)) throw new Error("Custom command provided are not in a valid format.");
          r = e;
        }

        var i = {};
        return Object.keys(r).map(function (e) {
          var n = r[e];
          "string" == typeof n.name && "function" == typeof n.fn && (n.shell = t, i[e] = new a(n));
        }), i;
      }
    }, {
      key: "buildHistory",
      value: function value() {
        localStorage.getItem("termlyHistory") || localStorage.setItem("termlyHistory", JSON.stringify([]));
      }
    }, {
      key: "setHistoryItem",
      value: function value(t) {
        if (t.length) {
          var e = JSON.parse(localStorage.getItem("termlyHistory"));
          return e.unshift(t), localStorage.setItem("termlyHistory", JSON.stringify(e));
        }
      }
    }, {
      key: "getHistory",
      value: function value() {
        return JSON.parse(localStorage.getItem("termlyHistory"));
      }
    }, {
      key: "clearHistory",
      value: function value() {
        return localStorage.setItem("termlyHistory", JSON.stringify([]));
      }
    }]), t;
  }();

  t.exports = u;
}, function (t, e, n) {
  "use strict";

  var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      o = n(15),
      i = o.name,
      a = o.version,
      s = o.description,
      u = o.repository,
      c = o.author,
      l = o.license;
  t.exports = {
    help: {
      name: "help",
      type: "builtin",
      man: "List of available commands\nType man <command> to have further info.",
      fn: function fn() {
        return "Commands available: " + Object.keys(this.shell.ShellCommands).join(", ") + '\nType "man <command>" to have further info.';
      }
    },
    whoami: {
      name: "whoami",
      type: "builtin",
      man: "Current user",
      fn: function fn() {
        return this.shell.user;
      }
    },
    about: {
      name: "about",
      type: "builtin",
      man: "About this project",
      fn: function fn() {
        var t = "";
        return t += "name: " + i + "\n", t += "version: " + a + "\n", t += "description: " + s + "\n", t += "repository: " + u + "\n", t += "author: " + c + "\n", t += "license: " + l + "\n";
      }
    },
    pwd: {
      name: "pwd",
      type: "builtin",
      man: "Print current working directory",
      fn: function fn() {
        return this.shell.fs.getCurrentDirectory();
      }
    },
    arguments: {
      name: "arguments",
      type: "builtin",
      man: "Return argument passed, used for testing purpose",
      fn: function fn(t) {
        return JSON.stringify(t, null, 2);
      }
    },
    printenv: {
      name: "printenv",
      type: "builtin",
      man: "Return environment variables",
      fn: function fn() {
        var t = this.shell.env,
            e = "";
        return Object.keys(t).map(function (n) {
          var o = "object" !== r(t[n]) || Array.isArray(t[n]) ? t[n] : JSON.stringify(t[n]);
          e += n + "=" + o + "\n";
        }), e;
      }
    },
    export: {
      name: "export",
      type: "builtin",
      man: "Export a variable into the current environment",
      fn: function fn(t) {
        if (!t || !t._.length) throw new Error("-fatal " + this.name + ': Invalid syntax,\n correct syntax: export VAR=value or VAR="much value, such environment"');
        var e = t._,
            n = void 0,
            r = void 0;

        if (1 === e.length) {
          var o = e[0].split("=");
          n = o[0], r = o[1];
        }

        return e.length > 1 && (n = e[0].replace(/=$/, ""), r = e[1].replace(/(\'|\")/g, "")), this.shell.env[n] = r, n + "=" + r;
      }
    },
    cd: {
      name: "cd",
      type: "builtin",
      man: "Change directory, pass absolute or relative path: eg. cd /etc, cd / cd/my/nested/dir",
      fn: function fn(t) {
        if (!t._.length) throw new Error("-invalid No path provided.");

        var e = t._.join();

        try {
          return this.shell.fs.changeDir(e);
        } catch (t) {
          throw t;
        }
      }
    },
    ls: {
      name: "ls",
      type: "builtin",
      man: "list directory files, pass absolute/relative path, if empty list current directory",
      fn: function fn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          _: ["./"]
        };
        t._.length || t._.push(".");

        var e = t._.join(),
            n = void 0,
            r = "";

        try {
          n = this.shell.fs.listDir(e);
        } catch (t) {
          throw t;
        }

        for (var o in n) {
          n.hasOwnProperty(o) && (r += n[o].permission + "\t" + n[o].user + " " + n[o].group + "\t" + n[o].name + "\n");
        }

        return r;
      }
    },
    cat: {
      name: "cat",
      type: "builtin",
      man: "Return file content, take one argument: file path (relative/absolute)",
      fn: function fn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          _: ["./"]
        },
            e = t._.join(),
            n = void 0;

        try {
          n = this.shell.fs.readFile(e);
        } catch (t) {
          throw t;
        }

        return n.content;
      }
    },
    man: {
      name: "man",
      type: "builtin",
      man: "Command manual, takes one argument, command name",
      fn: function fn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!t._[0]) throw new Error("man: no command provided.");
        var e = t._[0];
        if (!this.shell.ShellCommands[e]) throw new Error("command doesn't exist.");
        if (!this.shell.ShellCommands[e].man) throw new Error("no manual entry for this command.");
        return this.shell.ShellCommands[e].man;
      }
    },
    http: {
      name: "http",
      type: "builtin",
      man: "Send HTTP requests.\n syntax: http [OPTIONS FLAGS] URL.\neg: http -m GET http://jsonplaceholder.typicode.com/\n    options:\n    \t-m --method POST,GET,PUT,DELETE\n     \t--body must be an object, and MUST use single quoets inside eg: --body=\"{ 'data': '1' }\"\n     ",
      fn: function fn() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!t._.length) throw new Error("http: no URL provided, provide URL and/or method \n help: " + this.shell.ShellCommands.http.man);
        var e = t.method || t.m || "GET",
            n = t._[0],
            r = void 0;
        if (t.body) try {
          r = JSON.stringify(JSON.parse(t.body.replace(/\'/g, '"')));
        } catch (t) {
          throw console.log(t), new Error("Body provided is not a valid JSON");
        }
        var o = {
          method: e,
          headers: {
            "Content-Type": "application/json"
          }
        };
        return "GET" !== e && (o.body = r), fetch(n, o).then(function (t) {
          if (t.ok) return t.json();
          throw new Error("Request Failed (" + (t.status || 500) + "): " + (t.statusText || "Some Error Occured."));
        }).catch(function (t) {
          throw new Error("-fetch error response returned but it was not a valid JSON. Cannot Parse.");
        });
      }
    },
    history: {
      name: "history",
      type: "builtin",
      man: "Return list of previous executed commands, use -c flag to clear",
      fn: function fn(t) {
        if (t.c) return this.shell.clearHistory(), "History Cleared.";

        for (var e = this.shell.getHistory().reverse(), n = "", r = 0; r < e.length; r++) {
          n += r + "\t" + e[r] + "\n";
        }

        return n;
      }
    }
  };
}, function (t, e, n) {
  "use strict";

  t.exports = {
    "file.h": "#include <nope.h>",
    etc: {
      apache2: {
        "apache2.conf": "Not What you were looking for :)"
      }
    },
    home: {
      guest: {
        docs: {
          "mydoc.md": "TestFile",
          "mydoc2.md": "TestFile2",
          "mydoc3.md": "TestFile3"
        }
      }
    },
    root: {
      ".zshrc": "not even close :)",
      ".oh-my-zsh": {
        themes: {}
      }
    }
  };
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var n = e || window,
        r = n.location;
    t.exports = {
      USER: "root",
      HOSTNAME: r && r.hostname.length ? r.hostname : "my.host.me"
    };
  }).call(e, n(0));
}, function (t, e) {
  function n() {
    throw new Error("setTimeout has not been defined");
  }

  function r() {
    throw new Error("clearTimeout has not been defined");
  }

  function o(t) {
    if (l === setTimeout) return setTimeout(t, 0);
    if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);

    try {
      return l(t, 0);
    } catch (e) {
      try {
        return l.call(null, t, 0);
      } catch (e) {
        return l.call(this, t, 0);
      }
    }
  }

  function i(t) {
    if (f === clearTimeout) return clearTimeout(t);
    if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);

    try {
      return f(t);
    } catch (e) {
      try {
        return f.call(null, t);
      } catch (e) {
        return f.call(this, t);
      }
    }
  }

  function a() {
    y && d && (y = !1, d.length ? p = d.concat(p) : m = -1, p.length && s());
  }

  function s() {
    if (!y) {
      var t = o(a);
      y = !0;

      for (var e = p.length; e;) {
        for (d = p, p = []; ++m < e;) {
          d && d[m].run();
        }

        m = -1, e = p.length;
      }

      d = null, y = !1, i(t);
    }
  }

  function u(t, e) {
    this.fun = t, this.array = e;
  }

  function c() {}

  var l,
      f,
      h = t.exports = {};
  !function () {
    try {
      l = "function" == typeof setTimeout ? setTimeout : n;
    } catch (t) {
      l = n;
    }

    try {
      f = "function" == typeof clearTimeout ? clearTimeout : r;
    } catch (t) {
      f = r;
    }
  }();
  var d,
      p = [],
      y = !1,
      m = -1;
  h.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
    p.push(new u(t, e)), 1 !== p.length || y || o(s);
  }, u.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = c, h.addListener = c, h.once = c, h.off = c, h.removeListener = c, h.removeAllListeners = c, h.emit = c, h.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, h.cwd = function () {
    return "/";
  }, h.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, h.umask = function () {
    return 0;
  };
}, function (t, e, n) {
  (function (e) {
    !function (n) {
      function r() {}

      function o(t, e) {
        return function () {
          t.apply(e, arguments);
        };
      }

      function i(t) {
        if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this);
      }

      function a(t, e) {
        for (; 3 === t._state;) {
          t = t._value;
        }

        return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void i._immediateFn(function () {
          var n = 1 === t._state ? e.onFulfilled : e.onRejected;
          if (null === n) return void (1 === t._state ? s : u)(e.promise, t._value);
          var r;

          try {
            r = n(t._value);
          } catch (t) {
            return void u(e.promise, t);
          }

          s(e.promise, r);
        }));
      }

      function s(t, e) {
        try {
          if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

          if (e && ("object" == _typeof(e) || "function" == typeof e)) {
            var n = e.then;
            if (e instanceof i) return t._state = 3, t._value = e, void c(t);
            if ("function" == typeof n) return void f(o(n, e), t);
          }

          t._state = 1, t._value = e, c(t);
        } catch (e) {
          u(t, e);
        }
      }

      function u(t, e) {
        t._state = 2, t._value = e, c(t);
      }

      function c(t) {
        2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () {
          t._handled || i._unhandledRejectionFn(t._value);
        });

        for (var e = 0, n = t._deferreds.length; e < n; e++) {
          a(t, t._deferreds[e]);
        }

        t._deferreds = null;
      }

      function l(t, e, n) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
      }

      function f(t, e) {
        var n = !1;

        try {
          t(function (t) {
            n || (n = !0, s(e, t));
          }, function (t) {
            n || (n = !0, u(e, t));
          });
        } catch (t) {
          if (n) return;
          n = !0, u(e, t);
        }
      }

      var h = setTimeout;
      i.prototype.catch = function (t) {
        return this.then(null, t);
      }, i.prototype.then = function (t, e) {
        var n = new this.constructor(r);
        return a(this, new l(t, e, n)), n;
      }, i.all = function (t) {
        var e = Array.prototype.slice.call(t);
        return new i(function (t, n) {
          function r(i, a) {
            try {
              if (a && ("object" == _typeof(a) || "function" == typeof a)) {
                var s = a.then;
                if ("function" == typeof s) return void s.call(a, function (t) {
                  r(i, t);
                }, n);
              }

              e[i] = a, 0 === --o && t(e);
            } catch (t) {
              n(t);
            }
          }

          if (0 === e.length) return t([]);

          for (var o = e.length, i = 0; i < e.length; i++) {
            r(i, e[i]);
          }
        });
      }, i.resolve = function (t) {
        return t && "object" == _typeof(t) && t.constructor === i ? t : new i(function (e) {
          e(t);
        });
      }, i.reject = function (t) {
        return new i(function (e, n) {
          n(t);
        });
      }, i.race = function (t) {
        return new i(function (e, n) {
          for (var r = 0, o = t.length; r < o; r++) {
            t[r].then(e, n);
          }
        });
      }, i._immediateFn = "function" == typeof e && function (t) {
        e(t);
      } || function (t) {
        h(t, 0);
      }, i._unhandledRejectionFn = function (t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
      }, i._setImmediateFn = function (t) {
        i._immediateFn = t;
      }, i._setUnhandledRejectionFn = function (t) {
        i._unhandledRejectionFn = t;
      }, "undefined" != typeof t && t.exports ? t.exports = i : n.Promise || (n.Promise = i);
    }(this);
  }).call(e, n(13).setImmediate);
}, function (t, e, n) {
  (function (t, e) {
    !function (t, n) {
      "use strict";

      function r(t) {
        "function" != typeof t && (t = new Function("" + t));

        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
          e[n] = arguments[n + 1];
        }

        var r = {
          callback: t,
          args: e
        };
        return y[p] = r, d(p), p++;
      }

      function o(t) {
        delete y[t];
      }

      function i(t) {
        var e = t.callback,
            r = t.args;

        switch (r.length) {
          case 0:
            e();
            break;

          case 1:
            e(r[0]);
            break;

          case 2:
            e(r[0], r[1]);
            break;

          case 3:
            e(r[0], r[1], r[2]);
            break;

          default:
            e.apply(n, r);
        }
      }

      function a(t) {
        if (m) setTimeout(a, 0, t);else {
          var e = y[t];

          if (e) {
            m = !0;

            try {
              i(e);
            } finally {
              o(t), m = !1;
            }
          }
        }
      }

      function s() {
        d = function d(t) {
          e.nextTick(function () {
            a(t);
          });
        };
      }

      function u() {
        if (t.postMessage && !t.importScripts) {
          var e = !0,
              n = t.onmessage;
          return t.onmessage = function () {
            e = !1;
          }, t.postMessage("", "*"), t.onmessage = n, e;
        }
      }

      function c() {
        var e = "setImmediate$" + Math.random() + "$",
            n = function n(_n) {
          _n.source === t && "string" == typeof _n.data && 0 === _n.data.indexOf(e) && a(+_n.data.slice(e.length));
        };

        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), d = function d(n) {
          t.postMessage(e + n, "*");
        };
      }

      function l() {
        var t = new MessageChannel();
        t.port1.onmessage = function (t) {
          var e = t.data;
          a(e);
        }, d = function d(e) {
          t.port2.postMessage(e);
        };
      }

      function f() {
        var t = v.documentElement;

        d = function d(e) {
          var n = v.createElement("script");
          n.onreadystatechange = function () {
            a(e), n.onreadystatechange = null, t.removeChild(n), n = null;
          }, t.appendChild(n);
        };
      }

      function h() {
        d = function d(t) {
          setTimeout(a, 0, t);
        };
      }

      if (!t.setImmediate) {
        var d,
            p = 1,
            y = {},
            m = !1,
            v = t.document,
            b = Object.getPrototypeOf && Object.getPrototypeOf(t);
        b = b && b.setTimeout ? b : t, "[object process]" === {}.toString.call(t.process) ? s() : u() ? c() : t.MessageChannel ? l() : v && "onreadystatechange" in v.createElement("script") ? f() : h(), b.setImmediate = r, b.clearImmediate = o;
      }
    }("undefined" == typeof self ? "undefined" == typeof t ? this : t : self);
  }).call(e, n(0), n(9));
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }(),
      i = function () {
    function t(e) {
      if (r(this, t), !e || !e.length) throw new Error("Parser: command provided is empty.");
      if ("string" != typeof e) throw new Error("Parser: command must be a string!");
      this.raw = e;
      var n = this.stringToArray(e.replace(/\s{2,}/g, "").replace(/\t|\n/g, " "));

      if (this.command = n[0], this._ = [], n.length) {
        var o = this.parse(n.slice(1));

        if (!Object.assign) {
          for (var i in o) {
            o.hasOwnProperty(i) && (this[i] = o[i]);
          }

          return !0;
        }

        return Object.assign(this, o);
      }
    }

    return o(t, [{
      key: "stringToArray",
      value: function value(t) {
        return t.match(/[^\s"']+|"([^"]*)"|'([^']*)'/g);
      }
    }, {
      key: "parse",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t.length) return e;

        if (t[0].match(/^\-[^\-].*/)) {
          var n = t[0].replace("-", "");
          return t[1] && t[1].match(/^\-.*/) ? (e[n] = !0, this.parse(t.splice(1), e)) : t[1] ? (e[n] = t[1], this.parse(t.splice(2), e)) : (e[n] = !0, this.parse(t.splice(1), e));
        }

        if (t[0].match(/^\-{2}.*\=$/)) {
          var r = t[0].match(/--(.*)=/)[1];
          return e[r] = t[1].replace(/"/g, ""), this.parse(t.splice(2), e);
        }

        if (t[0].match(/^\-{2}.*\={1}.*$/)) {
          var o = t[0].match(/\-{2}(.*)=/)[1];
          return e[o] = t[0].match(/\={1}(.*)/)[1], this.parse(t.splice(1), e);
        }

        if (t[0].match(/^\-{2}.*$/)) {
          var i = t[0].replace("--", "");
          if (!t[1] || t[1] && t[1].match(/^\-{1,}/)) return e[i] = !0, this.parse(t.slice(1), e);
          if (t[1] && !t[1].match(/^\-{1,}/)) return e[i] = t[1], this.parse(t.slice(2), e);
        }

        return this._.push(t.shift()), this.parse(t, e);
      }
    }]), t;
  }();

  try {
    t.exports = i;
  } catch (t) {}
}, function (t, e, n) {
  function r(t, e) {
    this._id = t, this._clearFn = e;
  }

  var o = Function.prototype.apply;
  e.setTimeout = function () {
    return new r(o.call(setTimeout, window, arguments), clearTimeout);
  }, e.setInterval = function () {
    return new r(o.call(setInterval, window, arguments), clearInterval);
  }, e.clearTimeout = e.clearInterval = function (t) {
    t && t.close();
  }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
    this._clearFn.call(window, this._id);
  }, e.enroll = function (t, e) {
    clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
  }, e.unenroll = function (t) {
    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
  }, e._unrefActive = e.active = function (t) {
    clearTimeout(t._idleTimeoutId);
    var e = t._idleTimeout;
    e >= 0 && (t._idleTimeoutId = setTimeout(function () {
      t._onTimeout && t._onTimeout();
    }, e));
  }, n(11), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate;
}, function (t, e) {
  !function (t) {
    "use strict";

    function e(t) {
      if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
      return t.toLowerCase();
    }

    function n(t) {
      return "string" != typeof t && (t = String(t)), t;
    }

    function r(t) {
      var e = {
        next: function next() {
          var e = t.shift();
          return {
            done: void 0 === e,
            value: e
          };
        }
      };
      return v.iterable && (e[Symbol.iterator] = function () {
        return e;
      }), e;
    }

    function o(t) {
      this.map = {}, t instanceof o ? t.forEach(function (t, e) {
        this.append(e, t);
      }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
        this.append(e, t[e]);
      }, this);
    }

    function i(t) {
      return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (t.bodyUsed = !0);
    }

    function a(t) {
      return new Promise(function (e, n) {
        t.onload = function () {
          e(t.result);
        }, t.onerror = function () {
          n(t.error);
        };
      });
    }

    function s(t) {
      var e = new FileReader(),
          n = a(e);
      return e.readAsArrayBuffer(t), n;
    }

    function u(t) {
      var e = new FileReader(),
          n = a(e);
      return e.readAsText(t), n;
    }

    function c(t) {
      for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) {
        n[r] = String.fromCharCode(e[r]);
      }

      return n.join("");
    }

    function l(t) {
      if (t.slice) return t.slice(0);
      var e = new Uint8Array(t.byteLength);
      return e.set(new Uint8Array(t)), e.buffer;
    }

    function f() {
      return this.bodyUsed = !1, this._initBody = function (t) {
        if (this._bodyInit = t, t) {
          if ("string" == typeof t) this._bodyText = t;else if (v.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;else if (v.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();else if (v.arrayBuffer && v.blob && g(t)) this._bodyArrayBuffer = l(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);else {
            if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !w(t)) throw new Error("unsupported BodyInit type");
            this._bodyArrayBuffer = l(t);
          }
        } else this._bodyText = "";
        this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
      }, v.blob && (this.blob = function () {
        var t = i(this);
        if (t) return t;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
        return Promise.resolve(new Blob([this._bodyText]));
      }, this.arrayBuffer = function () {
        return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s);
      }), this.text = function () {
        var t = i(this);
        if (t) return t;
        if (this._bodyBlob) return u(this._bodyBlob);
        if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
        if (this._bodyFormData) throw new Error("could not read FormData body as text");
        return Promise.resolve(this._bodyText);
      }, v.formData && (this.formData = function () {
        return this.text().then(p);
      }), this.json = function () {
        return this.text().then(JSON.parse);
      }, this;
    }

    function h(t) {
      var e = t.toUpperCase();
      return _.indexOf(e) > -1 ? e : t;
    }

    function d(t, e) {
      e = e || {};
      var n = e.body;

      if (t instanceof d) {
        if (t.bodyUsed) throw new TypeError("Already read");
        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new o(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0);
      } else this.url = String(t);

      if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new o(e.headers)), this.method = h(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");

      this._initBody(n);
    }

    function p(t) {
      var e = new FormData();
      return t.trim().split("&").forEach(function (t) {
        if (t) {
          var n = t.split("="),
              r = n.shift().replace(/\+/g, " "),
              o = n.join("=").replace(/\+/g, " ");
          e.append(decodeURIComponent(r), decodeURIComponent(o));
        }
      }), e;
    }

    function y(t) {
      var e = new o();
      return t.split(/\r?\n/).forEach(function (t) {
        var n = t.split(":"),
            r = n.shift().trim();

        if (r) {
          var o = n.join(":").trim();
          e.append(r, o);
        }
      }), e;
    }

    function m(t, e) {
      e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new o(e.headers), this.url = e.url || "", this._initBody(t);
    }

    if (!t.fetch) {
      var v = {
        searchParams: "URLSearchParams" in t,
        iterable: "Symbol" in t && "iterator" in Symbol,
        blob: "FileReader" in t && "Blob" in t && function () {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        }(),
        formData: "FormData" in t,
        arrayBuffer: "ArrayBuffer" in t
      };
      if (v.arrayBuffer) var b = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
          g = function g(t) {
        return t && DataView.prototype.isPrototypeOf(t);
      },
          w = ArrayBuffer.isView || function (t) {
        return t && b.indexOf(Object.prototype.toString.call(t)) > -1;
      };
      o.prototype.append = function (t, r) {
        t = e(t), r = n(r);
        var o = this.map[t];
        this.map[t] = o ? o + "," + r : r;
      }, o.prototype.delete = function (t) {
        delete this.map[e(t)];
      }, o.prototype.get = function (t) {
        return t = e(t), this.has(t) ? this.map[t] : null;
      }, o.prototype.has = function (t) {
        return this.map.hasOwnProperty(e(t));
      }, o.prototype.set = function (t, r) {
        this.map[e(t)] = n(r);
      }, o.prototype.forEach = function (t, e) {
        for (var n in this.map) {
          this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
        }
      }, o.prototype.keys = function () {
        var t = [];
        return this.forEach(function (e, n) {
          t.push(n);
        }), r(t);
      }, o.prototype.values = function () {
        var t = [];
        return this.forEach(function (e) {
          t.push(e);
        }), r(t);
      }, o.prototype.entries = function () {
        var t = [];
        return this.forEach(function (e, n) {
          t.push([n, e]);
        }), r(t);
      }, v.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
      var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      d.prototype.clone = function () {
        return new d(this, {
          body: this._bodyInit
        });
      }, f.call(d.prototype), f.call(m.prototype), m.prototype.clone = function () {
        return new m(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new o(this.headers),
          url: this.url
        });
      }, m.error = function () {
        var t = new m(null, {
          status: 0,
          statusText: ""
        });
        return t.type = "error", t;
      };
      var T = [301, 302, 303, 307, 308];
      m.redirect = function (t, e) {
        if (T.indexOf(e) === -1) throw new RangeError("Invalid status code");
        return new m(null, {
          status: e,
          headers: {
            location: t
          }
        });
      }, t.Headers = o, t.Request = d, t.Response = m, t.fetch = function (t, e) {
        return new Promise(function (n, r) {
          var o = new d(t, e),
              i = new XMLHttpRequest();
          i.onload = function () {
            var t = {
              status: i.status,
              statusText: i.statusText,
              headers: y(i.getAllResponseHeaders() || "")
            };
            t.url = "responseURL" in i ? i.responseURL : t.headers.get("X-Request-URL");
            var e = "response" in i ? i.response : i.responseText;
            n(new m(e, t));
          }, i.onerror = function () {
            r(new TypeError("Network request failed"));
          }, i.ontimeout = function () {
            r(new TypeError("Network request failed"));
          }, i.open(o.method, o.url, !0), "include" === o.credentials && (i.withCredentials = !0), "responseType" in i && v.blob && (i.responseType = "blob"), o.headers.forEach(function (t, e) {
            i.setRequestHeader(e, t);
          }), i.send("undefined" == typeof o._bodyInit ? null : o._bodyInit);
        });
      }, t.fetch.polyfill = !0;
    }
  }("undefined" != typeof self ? self : this);
}, function (t, e) {
  t.exports = {
    name: "termly.js",
    version: "2.5.7",
    description: "Simple, Extensible, Hackable and Lightweight Javascript Browser Terminal Simulator!",
    main: "bin/classes/Shell.js",
    scripts: {
      test: "mocha --compilers babel-core/register tests/",
      build: "NODE_ENV=production webpack -p",
      "build:dev": "webpack -w"
    },
    keywords: ["terminal", "javascript", "simulator", "browser", "presentation", "mockup", "demo", "cli", "prompt", "commands", "no depency", "lightweight", "hackable", "js", "vanilla"],
    repository: "https://github.com/Kirkhammetz/termly.js",
    author: "Simone Corsi",
    license: "GNU GPLv3",
    devDependencies: {
      babel: "^6.5.2",
      "babel-core": "^6.21.0",
      "babel-loader": "^6.2.10",
      "babel-plugin-transform-object-rest-spread": "^6.22.0",
      "babel-polyfill": "^6.22.0",
      "babel-preset-es2015": "^6.18.0",
      "babel-preset-stage-3": "^6.22.0",
      chai: "^3.5.0",
      gulp: "^3.9.1",
      "gulp-sass": "^3.1.0",
      mocha: "^3.2.0",
      "promise-polyfill": "^6.0.2",
      "string-to-argv.js": "^1.1.2",
      webpack: "beta",
      "whatwg-fetch": "^2.0.2"
    }
  };
},,, function (t, e, n) {
  "use strict";

  (function (t) {
    t.Termly = n(3);
  }).call(e, n(0));
}]);

var Validator =
/*#__PURE__*/
function () {
  function Validator(question) {
    _classCallCheck(this, Validator);

    this.question = question;
  }

  _createClass(Validator, [{
    key: "validate",
    value: function validate(answer) {
      throw new Error('Abstract method');
    } // creates a validator according to a question

  }], [{
    key: "create",
    value: function create(question) {
      if (question.type == String) return new StringValidator(question);
      if (question.type == Number) return new NumberValidator(question);
      if (question.type == Array) return new ArrayValidator(question);
    }
  }]);

  return Validator;
}();

var StringValidator =
/*#__PURE__*/
function (_Validator) {
  _inherits(StringValidator, _Validator);

  function StringValidator() {
    _classCallCheck(this, StringValidator);

    return _possibleConstructorReturn(this, _getPrototypeOf(StringValidator).apply(this, arguments));
  }

  _createClass(StringValidator, [{
    key: "validate",
    value: function validate(answer) {
      // is it a string?
      if (answer.__proto__ != String.prototype) return false; // validate range

      if (this.question.range) {
        return answer.length >= this.question.range[0] && answer.length <= this.question.range[1];
      } // validate regex


      if (this.question.regex) {
        return this.question.regex.test(answer);
      }

      return true;
    }
  }]);

  return StringValidator;
}(Validator);

var NumberValidator =
/*#__PURE__*/
function (_Validator2) {
  _inherits(NumberValidator, _Validator2);

  function NumberValidator() {
    _classCallCheck(this, NumberValidator);

    return _possibleConstructorReturn(this, _getPrototypeOf(NumberValidator).apply(this, arguments));
  }

  _createClass(NumberValidator, [{
    key: "validate",
    value: function validate(answer) {
      // is it a number?
      if (!(answer instanceof Number) && (answer = parseInt(answer)) == NaN) return false; // validate range

      if (this.question.range) {
        return answer >= this.question.range[0] && answer <= this.question.range[1];
      }

      return true;
    }
  }]);

  return NumberValidator;
}(Validator);

var ArrayValidator =
/*#__PURE__*/
function (_Validator3) {
  _inherits(ArrayValidator, _Validator3);

  function ArrayValidator() {
    _classCallCheck(this, ArrayValidator);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArrayValidator).apply(this, arguments));
  }

  _createClass(ArrayValidator, [{
    key: "validate",
    value: function validate(answer) {
      // is it a number? (index)
      if (!(answer instanceof Number) && (answer = parseInt(answer)) === NaN) return false; // validate answer number

      return answer >= 0 && answer < this.question.answers.length;
    }
  }]);

  return ArrayValidator;
}(Validator);

var Shell =
/*#__PURE__*/
function () {
  function Shell(options) {
    var _this2 = this;

    _classCallCheck(this, Shell);

    if (!options.hasOwnProperty('id')) throw new Error('Element id must be provided!');
    if (!options.hasOwnProperty('form')) throw new Error('Form questions must be provided!'); // register callback

    this.registerCallback = options.register || function (answer) {
      console.log(answer);
    }; // Form questions


    this.form = options.form.reverse(); // Shell's system (filesystem, commands, ...)

    this.system = new Termly({
      commands: {
        shell: {
          name: 'shell',
          type: 'builtin',
          man: 'Interactive Shell',
          fn: function fn() {
            return '';
          }
        },
        clear: {
          name: 'clear',
          type: 'builtin',
          man: 'Clear the screen',
          fn: function fn() {
            _this2.cli.clear();

            return '';
          }
        },
        whoami: {
          name: 'whoami',
          type: 'builtin',
          man: 'Shows the name of the current user',
          fn: function fn() {
            return _this2.system.env.USER;
          }
        },
        exit: {
          name: 'exit',
          type: 'builtin',
          man: 'Exit the shell',
          fn: function fn() {
            setTimeout(function () {
              return _this2.cli.close();
            }, 1000);

            _this2.cli.write(":'(");

            return '';
          }
        },
        join: {
          name: 'join',
          type: 'usr',
          man: 'Become a shellmate',
          fn: function fn() {
            // who am i ?
            var self = _this2; // clone the form questions

            var questions = _toConsumableArray(_this2.form); // i wonder what are the answers


            var answers = {}; // start asking questions :)

            ask();

            function ask() {
              // still got some question?
              if (!questions.length) {
                // we are done here
                self.register(answers);
                return self.cli.prompt();
              } // get a question


              var question = questions.pop(); // ask about it

              self.cli.write(question.question + '%n');

              if (question.type == Array) {
                var i = 0;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = question.answers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var answer = _step.value;
                    self.cli.write("".concat(i, ". ").concat(answer, "%n"));
                    i++;
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              } // get response


              self.cli.scan().then(function check(answer) {
                // check if everything is ok
                var validator = Validator.create(question); // if it's ok, save it and go for the next one

                if (validator.validate(answer)) {
                  answers[question.id] = question.type == Array ? question.answers[answer] : answer;
                  ask();
                } // something's wong
                else {
                    self.cli.write('Invalid input, please retry');
                    self.cli.scan().then(function (answer) {
                      return check(answer);
                    });
                  }
              });
            }

            return '';
          }
        }
      },
      filesystem: {
        init: 'Binary executable.',
        etc: {
          apache2: {
            'apache2.conf': ''
          },
          apt: {
            'sources.list': ''
          }
        },
        home: {
          guest: {
            docs: {
              homework: 'I got none of that.'
            },
            'todo.txt': ['# Things i need to do', '', '* Join the shellmates', '* Buy some wafer', '* Do some random thing']
          }
        },
        root: {
          'README.md': ['Hey!', 'You are not supposed to be seeing this.']
        },
        usr: {
          share: {
            themes: {},
            games: {}
          }
        },
        bin: {
          help: 'Binary executable.',
          whoami: 'Binary executable.',
          pwd: 'Binary executable.',
          printenv: 'Binary executable.',
          'export': 'Binary executable.',
          cd: 'Binary executable.',
          ls: 'Binary executable.',
          cat: 'Binary executable.',
          man: 'Binary executable.',
          history: 'Binary executable.',
          clear: 'Binary executable.',
          exit: 'Binary executable.',
          join: 'Binary executable.',
          shell: 'Binary executable.'
        }
      },
      env: {
        USER: 'guest',
        PATH: '/bin',
        HOSTNAME: 'shellmates'
      }
    }); // change file permissions and owner name

    this.system.fs.FileSystem.content.home.content.guest.user = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.group = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content.docs.user = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content.docs.group = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content['todo.txt'].user = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content['todo.txt'].group = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content.docs.content.homework.user = 'guest';
    this.system.fs.FileSystem.content.home.content.guest.content.docs.content.homework.group = 'guest';
    this.system.fs.FileSystem.content.init.permission = 'rwx------';
    var _arr = ['help', 'whoami', 'pwd', 'printenv', 'export', 'cd', 'ls', 'cat', 'man', 'history', 'clear', 'exit', 'join', 'shell'];

    for (var _i = 0; _i < _arr.length; _i++) {
      var file = _arr[_i];
      this.system.fs.FileSystem.content.bin.content[file].permission = 'rwxr-xr-x';
    } // change home directory


    this.system.run('cd /home/guest'); // remove some commands

    delete this.system.ShellCommands.about;
    delete this.system.ShellCommands.arguments;
    delete this.system.ShellCommands.http; // system alias

    var system = this.system; // calculate responsive width and height for shell

    var cols = Math.min(80, (window.innerWidth / 8).toFixed(0));
    var rows = (cols * (3 / 4) / 2.5).toFixed(0);
    if (cols < 50) rows = 20; // Shell's command line interface

    this.cli = new Terminal({
      greeting: '%+r == Shellmates == %-r%nType %c7help%c0 for help.%nType %c7join%c0 to join the %c5shellmates%c0%n',
      ps: function ps() {
        var wd = system.fs.cwd.slice(1).join('/');
        return "%c3".concat(system.env.USER, "@shellmates:%c7").concat(wd == 'home/guest' ? '~' : "/".concat(wd), "%c0 $");
      },
      id: 0,
      x: 0,
      y: 0,
      cols: cols,
      rows: rows,
      frameWidth: 10,
      frameColor: 'black',
      bgColor: 'black',
      termDiv: options.id,
      crsrBlinkMode: true,
      handler: function handler() {
        var line = this.lineBuffer;
        this.newLine();

        if (line != "") {
          // if a line was being scanned
          if (this.scanning) {
            this.scanned(line);
            return;
          }

          this.write(system.run(line));
        }

        this.prompt();
      },
      initHandler: function initHandler() {
        this.clear(); // write a bar each step for 10 times

        var self = this,
            i = 20;

        function step() {
          self.clear();
          self.write("loading".concat('.'.repeat((20 - i) % 4), "%n[").concat('='.repeat(20 - i), ">").concat(' '.repeat(i), "]")); // final step

          if (--i == 0) start();else setTimeout(step, 200);
        } // start loading...


        step();

        function start() {
          self.clear();
          self.write(self.conf.greeting);
          self.newLine();
          self.prompt();
        }
      }
    }); // open the cli

    this.cli.open(); // cli alias

    var cli = this.cli; // register ctrl+c hotkey

    document.addEventListener('keydown', function (e) {
      if (e.key == 'c' && e.ctrlKey) {
        cli.write('^C');
        cli.scanning = false;
        cli.prompt();
      }
    });
  } // This is called after being provided with all the answers


  _createClass(Shell, [{
    key: "register",
    value: function register(answers) {
      this.registerCallback(answers);
    }
  }]);

  return Shell;
}();

var shell = new Shell({
  id: 'terminal',
  register: function register(answer) {
    this.system.env.USER = answer.name.toLowerCase().split(' ').join('-');
    this.cli.write('Your response has been registered!');
    console.log(answer);
  },
  form: [{
    id: 'name',
    question: "What's your full name?",
    type: String,
    range: [0, 50]
  }, {
    id: 'email',
    question: "What's your email?",
    type: String,
    regex: /^\S+@\S+\.\S+$/
  }, {
    id: 'age',
    question: "How old are you?",
    type: Number,
    range: [18, 36]
  }, {
    id: 'wilaya',
    question: "Where are you from?",
    type: Array,
    answers: ['Alger', 'Setif', 'Blida']
  }]
});
/* DOM Manipulation */
// showTerminal()

document.getElementById('register-btn').addEventListener('click', showTerminal);

function showTerminal() {
  document.getElementById('terminal-overlay').style.visibility = 'visible';
  document.getElementById('terminal').style.opacity = '0.9';
}