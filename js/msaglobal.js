function writeEmailLink(realName, name, domain) {
    document.write('<a href="javascript:sendEmail(\''
      + name + '\', \'' + domain + '\')">');
    document.write(realName);
    document.write('</a>');
}
function sendEmail(name, domain) {
    location.href = 'mailto:' + name + '@' + domain;
}
//Google Analytics
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function () {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
    '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();