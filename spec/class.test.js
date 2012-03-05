describe('Calculator', function () {
  it('creates class', function () {
	  var A = Class.extend({
		  a: 1,
		  construct: function() {
			  this.init();
			  console.info('A');
		  },
		  init: function() {
			  console.info('a = ', this.a);
		  }
	  });
	  var B = A.extend({
		  construct: function() {
			  this.ancestor.construct();
			  this.a = 3;
			  console.info('B');
		  }
	  });
	  var C = B.extend({
		  construct: function() {
			  this.ancestor.construct();
			  //this.init();
			  console.info('C');
		  },
		  init: function () {
			  this.ancestor.init();
				console.info('overrided');
		  }
	  });

	  var xx = new C;
	  xx.init();
  });
});
