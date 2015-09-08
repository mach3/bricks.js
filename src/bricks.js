!function(){

	/**
	 * Bricks
	 * ------
	 * @class Arrange blocks like bricks
	 * @param {HTML*Element} el ... Container
	 * @param {Object} options
	 */
	$.Bricks = function(el, options){
		this.el = el;
		this.config(this._options).config(options);
	};

	$.extend($.Bricks.prototype, {

		_options: {
			cols: 3,
			width: 320,
			gutter: 30
		},
		options: null,

		el: null,
		children: [],
		heights: [],

		/**
		 * Configure options
		 * @param {Object} options
		 */
		config: function(options){
			this.options = $.extend(true, {}, this.options, options);
			return this;
		},

		/**
		 * Add a block
		 * @param {HTML*Element|jQuery} el
		 */
		add: function(el){
			var count, o, r, c;

			el = $(el);
			count = this.children.length;
			o = this.options;
			r = parseInt(count / o.cols, 10);
			c = count % o.cols;

			el.css({
				position: "absolute",
				width: o.width,
				left: (o.gutter + o.width) * c,
				top: this.heights[c] || 0
			})
			.appendTo(this.el);

			this.heights[c] = this.heights[c] || 0;
			this.heights[c] += (el.outerHeight() + o.gutter);
			this.el.height(Math.max.apply(Math, this.heights));

			this.children.push(el);

			return this;
		},

		/**
		 * Clean all children
		 */
		clean: function(){
			this.el.css({height: "auto"});
			this.children = [];
			this.heights = [];
			this.el.children().remove();
			return this;
		}
	});

	$.fn.extend({
		bricks: function(options){
			return new $.Bricks(this, options);
		}
	});

}();