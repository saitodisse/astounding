let setPostNewTitle = function (input, state) {
	state.merge(['posts', input.ref], {
		$newTitle: input.text
	});
};

export default setPostNewTitle;
