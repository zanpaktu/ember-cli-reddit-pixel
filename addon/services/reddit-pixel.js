import Service from '@ember/service';

export default Ember.Service.extend({

  /**
   * This function will only send Reddit Pixel stuff along if the rdt global is found (safe for use in dev)
   */
  rdt: function() {
    if (typeof(rdt) !== 'undefined') {
      console.log('rdt found, function called: ', ...arguments);
      return rdt(...arguments);
    }
    else {
      console.log('rdt not found, function not called: ', ...arguments);
    }

    return null;
  }

});
