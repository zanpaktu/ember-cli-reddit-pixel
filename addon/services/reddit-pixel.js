import Service from '@ember/service';

export default Ember.Service.extend({

  /**
   * This function will only send Reddit Pixel stuff along if the rtd global is found (safe for use in dev)
   */
  rtd: function() {
    if (typeof(rtd) !== 'undefined') {
      return rtd(...arguments);
    }
    else {
      console.log('rtd not found, function not called: ', ...arguments);
    }

    return null;
  }

});
