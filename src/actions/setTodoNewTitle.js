let setPostNewTitle = function (input, state) {
	state.merge(['posts', input.ref], {
		$newTitle: input.title
	});
};

export default setPostNewTitle;
