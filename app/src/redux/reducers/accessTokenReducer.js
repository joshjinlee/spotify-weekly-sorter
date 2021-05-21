import { ActionTypes } from '../../resources/constants';

const FETCH_ATTEMPT_LIMIT = 3;

const initialState = {
    code: '',
    fetchAttempts: 0,
    fetchLimitReached: false,
};

export const accessTokenReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_ACCESS_TOKEN.FAILURE:
            console.log('what what we reaching here what what');
            console.log(state.fetchAttempts, FETCH_ATTEMPT_LIMIT);
            const fetchLimitReached = state.fetchAttempts >= FETCH_ATTEMPT_LIMIT;
            console.log(fetchLimitReached);
            return {
                ...state,
                fetchAttempts: fetchLimitReached ? 0 : state.fetchAttempts + 1,
                fetchLimitReached,
            };
        case ActionTypes.GET_ACCESS_TOKEN.SUCCESS:
            return {
                ...state,
                code: payload.accessToken,
                fetchAttempts: 0,
                fetchLimitReached: false,
            };
        case ActionTypes.GET_ACCESS_TOKEN.REQUEST:
            console.log('[accessTokenReducer]  GET_ACCESS_TOKEN.REQUEST');
            return state;
        default:
            return state;
    }
};
