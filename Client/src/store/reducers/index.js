import AuthReducer from './auth_reducer';
import FormReducer from './form_reducer';
import Reducer1 from './plain_reducer';
import PostReducer from './posts_reducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers ({
    reducer1: Reducer1,
    auth_reducer: AuthReducer,
    form_reducer: FormReducer,
    post_reducer: PostReducer
})

export default rootReducer;