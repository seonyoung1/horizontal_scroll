export const POS_CATEGORY = "POS_CATEGORY";

const initialState = {
	category: {
		web: 0,
		seo: 0,
		front: 0,
		back: 0,
		vr: 0,
		design: 0,
	},
};

export default function reducer(state = initialState, action){
	switch( action.type ){
		case POS_CATEGORY:
			return{
				...state,
				category: {
					...state.category,
					[action.name]: action.value,
				}
			};
		default:
			return state;
	}
}