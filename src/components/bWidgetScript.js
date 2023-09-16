/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
typeof JSON != "object" && (JSON = {}),
  (function () {
    "use strict"
    function i(n) {
      return n < 10 ? "0" + n : n
    }
    function e() {
      return this.valueOf()
    }
    function o(n) {
      return (
        (r.lastIndex = 0),
        r.test(n)
          ? '"' +
            n.replace(r, function (n) {
              var t = s[n]
              return typeof t == "string"
                ? t
                : "\\u" +
                    ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
            }) +
            '"'
          : '"' + n + '"'
      )
    }
    function f(i, r) {
      var s,
        l,
        h,
        a,
        v = n,
        c,
        e = r[i]
      e &&
        typeof e == "object" &&
        typeof e.toJSON == "function" &&
        (e = e.toJSON(i))
      typeof t == "function" && (e = t.call(r, i, e))
      switch (typeof e) {
        case "string":
          return o(e)
        case "number":
          return isFinite(e) ? String(e) : "null"
        case "boolean":
        case "null":
          return String(e)
        case "object":
          if (!e) return "null"
          if (
            ((n += u),
            (c = []),
            Object.prototype.toString.apply(e) === "[object Array]")
          ) {
            for (a = e.length, s = 0; s < a; s += 1)
              c[s] = f(s, e) || "null"
            return (
              (h =
                c.length === 0
                  ? "[]"
                  : n
                  ? "[\n" + n + c.join(",\n" + n) + "\n" + v + "]"
                  : "[" + c.join(",") + "]"),
              (n = v),
              h
            )
          }
          if (t && typeof t == "object")
            for (a = t.length, s = 0; s < a; s += 1)
              typeof t[s] == "string" &&
                ((l = t[s]),
                (h = f(l, e)),
                h && c.push(o(l) + (n ? ": " : ":") + h))
          else
            for (l in e)
              Object.prototype.hasOwnProperty.call(e, l) &&
                ((h = f(l, e)),
                h && c.push(o(l) + (n ? ": " : ":") + h))
          return (
            (h =
              c.length === 0
                ? "{}"
                : n
                ? "{\n" + n + c.join(",\n" + n) + "\n" + v + "}"
                : "{" + c.join(",") + "}"),
            (n = v),
            h
          )
      }
    }
    typeof Date.prototype.toJSON != "function" &&
      ((Date.prototype.toJSON = function () {
        return isFinite(this.valueOf())
          ? this.getUTCFullYear() +
              "-" +
              i(this.getUTCMonth() + 1) +
              "-" +
              i(this.getUTCDate()) +
              "T" +
              i(this.getUTCHours()) +
              ":" +
              i(this.getUTCMinutes()) +
              ":" +
              i(this.getUTCSeconds()) +
              "Z"
          : null
      }),
      (Boolean.prototype.toJSON = e),
      (Number.prototype.toJSON = e),
      (String.prototype.toJSON = e))
    var cx, r, n, u, s, t
    typeof JSON.stringify != "function" &&
      ((r =
        /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
      (s = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
      }),
      (JSON.stringify = function (i, r, e) {
        var o
        if (((n = ""), (u = ""), typeof e == "number"))
          for (o = 0; o < e; o += 1) u += " "
        else typeof e == "string" && (u = e)
        if (
          ((t = r),
          r &&
            typeof r != "function" &&
            (typeof r != "object" || typeof r.length != "number"))
        )
          throw new Error("JSON.stringify")
        return f("", { "": i })
      }))
    typeof JSON.parse != "function" &&
      ((cx =
        /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g),
      (JSON.parse = function (text, reviver) {
        function walk(n, t) {
          var r,
            u,
            i = n[t]
          if (i && typeof i == "object")
            for (r in i)
              Object.prototype.hasOwnProperty.call(i, r) &&
                ((u = walk(i, r)),
                u !== undefined ? (i[r] = u) : delete i[r])
          return reviver.call(n, t, i)
        }
        var j
        if (
          ((text = String(text)),
          (cx.lastIndex = 0),
          cx.test(text) &&
            (text = text.replace(cx, function (n) {
              return (
                "\\u" +
                ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
              )
            })),
          /^[\],:{}\s]*$/.test(
            text
              .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
              .replace(
                /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]"
              )
              .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
          ))
        )
          return (
            (j = eval("(" + text + ")")),
            typeof reviver == "function" ? walk({ "": j }, "") : j
          )
        throw new SyntaxError("JSON.parse")
      }))
  })()
//# sourceMappingURL=json2.min.js.map
if (!window.OwnerRez || !window.OwnerRez.loadWidgets) {
  ;(function () {
    // http://www.onlineaspect.com/2010/01/15/backwards-compatible-postmessage/
    // everything is wrapped in the XD function to reduce namespace collisions
    var XD = (function () {
      var interval_id,
        last_hash,
        cache_bust = 1,
        attached_callback,
        window = this

      return {
        postMessage: function (message, target_url, target) {
          if (!target_url) {
            return
          }
          target = target || parent // default to parent
          if (window["postMessage"]) {
            // the browser supports window.postMessage, so call it with a targetOrigin
            // set appropriately, based on the target_url parameter.
            target["postMessage"](
              message,
              target_url.replace(/([^:]+:\/\/[^\/]+).*/, "$1")
            )
          } else if (target_url) {
            // the browser does not support window.postMessage, so use the window.location.hash fragment hack
            target.location =
              target_url.replace(/#.*$/, "") +
              "#" +
              +new Date() +
              cache_bust++ +
              "&" +
              message
          }
        },
        receiveMessage: function (callback, source_origin) {
          // browser supports window.postMessage
          if (window["postMessage"]) {
            // bind the callback to the actual event associated with window.postMessage
            if (callback) {
              attached_callback = function (e) {
                if (
                  (typeof source_origin === "string" &&
                    e.origin !== source_origin) ||
                  (Object.prototype.toString.call(source_origin) ===
                    "[object Function]" &&
                    source_origin(e.origin) === !1)
                ) {
                  return !1
                }
                callback(e)
              }
            }
            if (window["addEventListener"]) {
              window[
                callback ? "addEventListener" : "removeEventListener"
              ]("message", attached_callback, !1)
            } else {
              window[callback ? "attachEvent" : "detachEvent"](
                "onmessage",
                attached_callback
              )
            }
          } else {
            // a polling loop is started & callback is called whenever the location.hash changes
            interval_id && clearInterval(interval_id)
            interval_id = null
            if (callback) {
              interval_id = setInterval(function () {
                var hash = document.location.hash,
                  re = /^#?\d+&/
                if (hash !== last_hash && re.test(hash)) {
                  last_hash = hash
                  callback({ data: hash.replace(re, "") })
                }
              }, 100)
            }
          }
        }
      }
    })()

    // http://www.javascriptkit.com/dhtmltutors/dhtmlcascade4.shtml
    var getStyle = function (el, cssprop) {
      if (el.currentStyle)
        //IE
        return el.currentStyle[cssprop]
      else if (
        document.defaultView &&
        document.defaultView.getComputedStyle
      )
        //Firefox
        return document.defaultView.getComputedStyle(el, "")[cssprop]
      //try and get inline style
      else return el.style[cssprop]
    }

    var loadWidget = function (el, id, propertyId, tracker) {
      if (!id) {
        if (window.console && window.console.log)
          (console.error || console.log)(
            "Null OwnerRez widget id on loadWidget."
          )

        return
      }

      var seq = window.OwnerRez.widgetSeq++

      //el.style.display = "none";

      var frame = document.createElement("iframe")

      var url =
        "https://secure.ownerreservations.com/widgets/" +
        id +
        "?seq=" +
        seq

      if (propertyId) url += "&propertyKey=" + propertyId

      // https://stackoverflow.com/a/3855394/8037
      var qs = (function (a) {
        if (a == "") return {}
        var b = {}
        for (var i = 0; i < a.length; ++i) {
          var p = a[i].split("=", 2)
          if (p.length == 1) b[p[0]] = ""
          else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "))
        }
        return b
      })(window.location.search.substr(1).split("&"))

      for (var key in qs) {
        if (key != "seq" && key != "view")
          url += "&" + key + "=" + qs[key]
      }

      url =
        url +
        "&referrer=" +
        encodeURIComponent(document.location.href) +
        "#" +
        encodeURIComponent(document.location.href)

      if (tracker) {
        var linker = new window.gaplugins.Linker(tracker)

        url = linker.decorate(url)
      }

      if (
        window.OwnerRez.linkDecorator &&
        typeof window.OwnerRez.linkDecorator === "function"
      )
        url = window.OwnerRez.linkDecorator(url)

      frame.src = url
      frame.border = frame.frameBorder = 0
      // TODO: figure out why setting to display:none and unsetting on message makes body height too big
      frame.style.cssText = "width:100%;border:0;overflow:hidden;" //display:none";
      frame.setAttribute("scrolling", "no")
      frame.setAttribute("seamless", "seamless")
      frame.setAttribute("allowTransparency", true)
      frame.className = "ownerrez-widget-iframe"
      frame.title =
        (el.getAttribute("data-widget-type") || "OwnerRez") +
        " Widget"

      // TODO: better height/width handling
      if (el.style.height) {
        frame.style.height = el.style.height
        el.style.height = "auto"
      }

      /*var onload = function () { el.style.display = "block"; };

            if (frame.attachEvent)
                frame.attachEvent("onload", onload);
            else
                frame.onload = onload;*/

      var isDesignMode =
        document.body.className.indexOf("toplevel_page_revslider") !=
        -1

      XD.receiveMessage(function (message) {
        var data = JSON.parse(message.data)

        if (data.or_gatrackerid) {
          window.OwnerRez.sendGTagCrossDomain(data.or_gatrackerid)
        } else if (
          data.id != null &&
          data.id.replace(/-/g, "") == id.replace(/-/g, "") &&
          (!data.seq || data.seq == seq)
        ) {
          var resizeDisabled =
            window.location.search &&
            window.location.search.indexOf("noresize=true") != -1

          if (
            !isNaN(data.height) &&
            !resizeDisabled &&
            !isDesignMode
          ) {
            //window.console.log("Received height: " + data.height + " @ " + new Date().getTime());

            frame.style.height = data.height + "px"

            var parent = frame.parentNode
            var zoom = 1

            do {
              // If a containing element has a overflow:hidden with height
              if (
                parent.style.overflow == "hidden" &&
                parent.style.height &&
                parent.style.height != "auto" &&
                parent.style.height != "100%" &&
                (parent.offsetHeight < data.height ||
                  parent._isOwnerRezResizing)
              ) {
                parent.style.height = data.height + "px"

                parent._isOwnerRezResizing = true
              }

              //if ((parent.style.overflow == "hidden" && parent.style.height && parent.style.height != "auto"))/* ||
              //    (getStyle(parent, "overflow") == "hidden" && getStyle(parent, "height") && getStyle(parent, "height") != "auto" && parent.offsetHeight < data.height) ||
              //    (parent.style.height && parent.style.height != "auto" && parent.offsetHeight < data.height))*/
              //    parent.style.height = data.height + "px";

              if (
                getStyle(parent, "zoom") &&
                getStyle(parent, "zoom") != 1
              )
                zoom = getStyle(parent, "zoom")

              parent = parent.parentNode
            } while (
              parent != null &&
              parent.style &&
              parent != document.body
            ) // bail out if no style or body so we don't get whacked by html element that has zoom for browser zoom vs. css zoom

            // Calculate zoom properly
            if (zoom != 1 && zoom != "normal")
              frame.style.height = data.height * (1 / zoom) + "px"

            if (window.jQuery) {
              window.jQuery(el).triggerHandler("resize.ownerrez")

              /*
                            if (window.jQuery('.right-icon').hasClass("active"))
                            {
                                window.jQuery('.top-icon').click();
                                window.jQuery('.right-icon').click();
                            }

                            if (window.foundation && window.foundation.jQuery)
                            {
                                // Reflow foundation sites
                                foundation.jQuery(document).foundation('reflow');

                                // Reflow phantom sites
                                window.jQuery('.top-icon').click();
                                window.jQuery('.right-icon').click();
                            }*/
            }

            if (data.action == "scrollTop") {
              var bodyCoords = document.body.getBoundingClientRect()
              var frameCoords = frame.getBoundingClientRect()

              window.scrollTo(
                0,
                frameCoords.top - bodyCoords.top - 150
              )
            }
          } else if (data.url) {
            try {
              window.top.location = data.url
            } catch (ex) {
              window.location = data.url
            }
          }

          //frame.style.display = "block";
        }
      }, "https://secure.ownerreservations.com")

      el.appendChild(frame)
    }

    /*
            Developed by Robert Nyman, http://www.robertnyman.com
            Code/licensing: http://code.google.com/p/getelementsbyclassname/
        */
    var getElementsByClassName = function (className, tag, elm) {
      if (document.getElementsByClassName) {
        getElementsByClassName = function (className, tag, elm) {
          elm = elm || document
          var elements = elm.getElementsByClassName(className),
            nodeName = tag
              ? new RegExp("\\b" + tag + "\\b", "i")
              : null,
            returnElements = [],
            current
          for (var i = 0, il = elements.length; i < il; i += 1) {
            current = elements[i]
            if (!nodeName || nodeName.test(current.nodeName)) {
              returnElements.push(current)
            }
          }
          return returnElements
        }
      } else if (document.evaluate) {
        getElementsByClassName = function (className, tag, elm) {
          tag = tag || "*"
          elm = elm || document
          var classes = className.split(" "),
            classesToCheck = "",
            xhtmlNamespace = "http://www.w3.org/1999/xhtml",
            namespaceResolver =
              document.documentElement.namespaceURI === xhtmlNamespace
                ? xhtmlNamespace
                : null,
            returnElements = [],
            elements,
            node
          for (var j = 0, jl = classes.length; j < jl; j += 1) {
            classesToCheck +=
              "[contains(concat(' ', @@class, ' '), ' " +
              classes[j] +
              " ')]"
          }
          try {
            elements = document.evaluate(
              ".//" + tag + classesToCheck,
              elm,
              namespaceResolver,
              0,
              null
            )
          } catch (e) {
            elements = document.evaluate(
              ".//" + tag + classesToCheck,
              elm,
              null,
              0,
              null
            )
          }
          while ((node = elements.iterateNext())) {
            returnElements.push(node)
          }
          return returnElements
        }
      } else {
        getElementsByClassName = function (className, tag, elm) {
          tag = tag || "*"
          elm = elm || document
          var classes = className.split(" "),
            classesToCheck = [],
            elements =
              tag === "*" && elm.all
                ? elm.all
                : elm.getElementsByTagName(tag),
            current,
            returnElements = [],
            match
          for (var k = 0, kl = classes.length; k < kl; k += 1) {
            classesToCheck.push(
              new RegExp("(^|\\s)" + classes[k] + "(\\s|$)")
            )
          }
          for (var l = 0, ll = elements.length; l < ll; l += 1) {
            current = elements[l]
            match = false
            for (
              var m = 0, ml = classesToCheck.length;
              m < ml;
              m += 1
            ) {
              match = classesToCheck[m].test(current.className)
              if (!match) {
                break
              }
            }
            if (match) {
              returnElements.push(current)
            }
          }
          return returnElements
        }
      }
      return getElementsByClassName(className, tag, elm)
    }

    var loadWidgets = function (className, tracker) {
      var widgets = getElementsByClassName(className)

      for (var i = 0; i < widgets.length; i++) {
        var el = widgets[i]

        if (!el.isWidgetLoaded) {
          var iframe = el.querySelector("iframe")

          // if there's already an iframe (bad Elementor), nuke it
          if (iframe) iframe.remove()

          const params = new Proxy(
            new URLSearchParams(window.location.search),
            {
              get: (searchParams, prop) => searchParams.get(prop)
            }
          )

          let or_propertyKey = params.or_propertyKey

          loadWidget(
            el,
            el.getAttribute("data-widget-id"),
            el.getAttribute("data-property-id") ?? or_propertyKey,
            tracker
          )

          el.isWidgetLoaded = true
        }
      }
    }

    var loadDefaultWidgets = function (tracker) {
      window.OwnerRez.loadWidgets("ownerrez-widget", tracker)
      // Deprecated
      window.OwnerRez.loadWidgets("ownerrez-calendar", tracker)
      window.OwnerRez.loadWidgets("ownerrez-inquiry", tracker)
    }

    var gaTrackers = {}

    var sendGTagCrossDomain = function (gaTrackerId) {
      var gaTracker = gaTrackers[gaTrackerId]

      function pushValuesIfWeHaveThem() {
        if (
          gaTracker.gaClientId &&
          (gaTracker.gaSessionId || !gaTrackerId.startsWith("G-"))
        ) {
          if (!gaTracker.pushQueued) {
            gaTracker.pushQueued = true

            window.setTimeout(function () {
              gaTracker.pushQueued = false

              var data = JSON.stringify(gaTracker)

              var widgets = document.querySelectorAll(
                ".ownerrez-widget iframe"
              )

              widgets.forEach(function (el) {
                console.log(
                  "pushing " +
                    gaTracker.gaTrackerId +
                    " client " +
                    gaTracker.gaClientId +
                    ":" +
                    gaTracker.gaSessionId +
                    " to " +
                    el.closest("div").dataset.widgetid
                )

                el.contentWindow.postMessage(data, "*")
              })
            }, 500)
          }
        }
      }

      if (!gaTracker) {
        gaTracker = gaTrackers[gaTrackerId] = {
          gaTrackerId: gaTrackerId
        }

        if (window.gtag) {
          gtag("get", gaTrackerId, "client_id", function (client_id) {
            gaTracker.gaClientId = client_id

            pushValuesIfWeHaveThem()
          })

          if (gaTrackerId.startsWith("G-")) {
            gtag(
              "get",
              gaTrackerId,
              "session_id",
              function (session_id) {
                gaTracker.gaSessionId = session_id

                pushValuesIfWeHaveThem()
              }
            )
          }
        } else console.log("no ga, skipping client update")
      } else pushValuesIfWeHaveThem()
    }

    window.OwnerRez = window.OwnerRez || []
    window.OwnerRez.loadWidget = loadWidget
    window.OwnerRez.loadWidgets = loadWidgets
    window.OwnerRez.loadDefaultWidgets = loadDefaultWidgets
    window.OwnerRez.sendGTagCrossDomain = sendGTagCrossDomain
    window.OwnerRez.widgetSeq = 0
  })()
}

if (window.OwnerRez.skipLoadDefaultWidgets != true)
  window.OwnerRez.loadDefaultWidgets()
