var util = require('util');
var Tab = require('../client/tab').Tab;

var ReceiveTab = function ()
{
  Tab.call(this);

  this.on('afterrender', this.onAfterRender.bind(this));
};

util.inherits(ReceiveTab, Tab);

ReceiveTab.prototype.mainMenu = 'receive';

ReceiveTab.prototype.angular = function (module) {
  module.controller('ReceiveCtrl', ['$scope', 'rpId',
                                     function ($scope, $id)
  {
    if (!$id.loginStatus) return $id.goId();
  }]);
};

ReceiveTab.prototype.generateHtml = function ()
{
  return require('../../jade/tabs/receive.jade')();
};

ReceiveTab.prototype.onAfterRender = function ()
{
  var self = this;
  this.el.find('.btn').click(function (e) {
    e.preventDefault();

    var address = self.el.find('.address').text();

    highlightAnimation();

    // TODO: Actually copy (using Flash)
  });

  this.el.find('.select').click(function (e) {
    e.preventDefault();

    self.el.find('.address input').select();
  });

  function highlightAnimation() {
    // Trigger highlight animation
    self.el.find('.address')
      .stop()
      .css('background-color', '#fff')
      .effect('highlight', {
        color: "#8BC56A",
        easing: jQuery.easing.easeOutSine()
      }, 800);
  }
};

module.exports = ReceiveTab;
