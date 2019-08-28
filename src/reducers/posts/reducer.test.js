import { types } from '../../actions/types';
import postsReducer from './reducer';

describe('Posts Reducer', () => {
    
    it('Should return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('Should return new state if recieving an action type', () => {
        const posts = [{title: 'Title 1'}, {title: 'Title 1'}, {title: 'Title 1'}];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    })
});