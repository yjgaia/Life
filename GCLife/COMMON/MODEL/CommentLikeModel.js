GCLife.CommentLikeModel = OBJECT({

	preset : function() {
		'use strict';

		return GCLife.MODEL;
	},

	params : function() {
		'use strict';

		var
		// valid data set
		validDataSet = {

			commentId : {
				notEmpty : true,
				id : true
			},

			userId : {
				notEmpty : true,
				id : true
			}
		};

		return {
			name : 'CommentLike',
			methodConfig : {
				create : false,
				update : false,
				remove : false
			}
		};
	}
});