"use strict";

var toString = require("mdast-util-to-string");

var visit = require("unist-util-visit");

var slugs = require("github-slugger")();

var deburr = require("lodash/deburr");

function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value;
  }

  return context[key];
}

var svgIcon = "<svg aria-hidden=\"true\" focusable=\"false\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>";

module.exports = function (_ref, _ref2) {
  var markdownAST = _ref.markdownAST;
  var _ref2$icon = _ref2.icon,
      icon = _ref2$icon === void 0 ? svgIcon : _ref2$icon,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? "anchor" : _ref2$className,
      _ref2$maintainCase = _ref2.maintainCase,
      maintainCase = _ref2$maintainCase === void 0 ? false : _ref2$maintainCase,
      _ref2$removeAccents = _ref2.removeAccents,
      removeAccents = _ref2$removeAccents === void 0 ? false : _ref2$removeAccents,
      _ref2$enableCustomId = _ref2.enableCustomId,
      enableCustomId = _ref2$enableCustomId === void 0 ? false : _ref2$enableCustomId,
      _ref2$isIconAfterHead = _ref2.isIconAfterHeader,
      isIconAfterHeader = _ref2$isIconAfterHead === void 0 ? false : _ref2$isIconAfterHead,
      _ref2$offsetY = _ref2.offsetY,
      offsetY = _ref2$offsetY === void 0 ? 0 : _ref2$offsetY;
  slugs.reset();
  visit(markdownAST, "heading", function (node) {
    var id;

    if (enableCustomId && node.children.length > 0) {
      var last = node.children[node.children.length - 1]; // This regex matches to preceding spaces and {#custom-id} at the end of a string.
      // Also, checks the text of node won't be empty after the removal of {#custom-id}.

      var match = /^(.*?)\s*\{#([\w-]+)\}$/.exec(toString(last));

      if (match && (match[1] || node.children.length > 1)) {
        id = match[2]; // Remove the custom ID from the original text.

        if (match[1]) {
          last.value = match[1];
        } else {
          node.children.pop();
        }
      }
    }

    if (!id) {
      var slug = slugs.slug(toString(node), maintainCase);
      id = removeAccents ? deburr(slug) : slug;
    }

    var data = patch(node, "data", {});
    patch(data, "id", id);
    patch(data, "htmlAttributes", {});
    patch(data, "hProperties", {});
    patch(data.htmlAttributes, "id", id);
    patch(data.hProperties, "id", id);
    patch(data.hProperties, "style", "position:relative;");

    if (icon !== false) {
      var label = id.split("-").join(" ");
      var method = isIconAfterHeader ? "push" : "unshift";
      node.children[method]({
        type: "link",
        url: "#" + id,
        title: null,
        children: [],
        data: {
          hProperties: {
            "aria-label": label + " permalink",
            class: className + " " + (isIconAfterHeader ? "after" : "before")
          },
          hChildren: [{
            type: "raw",
            // The Octicon link icon is the default. But users can set their own icon via the "icon" option.
            value: icon
          }]
        }
      });
    }
  });
  var styles = "\n  <style type=\"text/css\">\n    ." + className + ".before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      transform: translateX(-100%);\n      padding-right: 4px;\n    }\n    ." + className + ".after {\n      display: inline-block;\n      padding-left: 4px;\n    }\n    h1 ." + className + " svg,\n    h2 ." + className + " svg,\n    h3 ." + className + " svg,\n    h4 ." + className + " svg,\n    h5 ." + className + " svg,\n    h6 ." + className + " svg {\n      visibility: hidden;\n    }\n    h1:hover ." + className + " svg,\n    h2:hover ." + className + " svg,\n    h3:hover ." + className + " svg,\n    h4:hover ." + className + " svg,\n    h5:hover ." + className + " svg,\n    h6:hover ." + className + " svg,\n    h1 ." + className + ":focus svg,\n    h2 ." + className + ":focus svg,\n    h3 ." + className + ":focus svg,\n    h4 ." + className + ":focus svg,\n    h5 ." + className + ":focus svg,\n    h6 ." + className + ":focus svg {\n      visibility: visible;\n    }\n</style>\n  "; // This script used to have `let scrollTop` and `let clientTop` instead of
  // current ones which are `var`. It is changed due to incompatibility with
  // older browsers (that do not implement `let`). See:
  //  - https://github.com/gatsbyjs/gatsby/issues/21058
  //  - https://github.com/gatsbyjs/gatsby/pull/21083

  var script = "\n  <script>\n    document.addEventListener(\"DOMContentLoaded\", function(event) {\n      var hash = window.decodeURI(location.hash.replace('#', ''))\n      if (hash !== '') {\n        var element = document.getElementById(hash)\n        if (element) {\n          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop\n          var clientTop = document.documentElement.clientTop || document.body.clientTop || 0\n          var offset = element.getBoundingClientRect().top + scrollTop - clientTop\n          // Wait for the browser to finish rendering before scrolling.\n          setTimeout((function() {\n            window.scrollTo(0, offset - " + offsetY + ")\n          }), 0)\n        }\n      }\n    })\n    </script>\n    ";
  markdownAST.children.push({
    type: 'html',
    value: styles + script
  });
  return markdownAST;
};