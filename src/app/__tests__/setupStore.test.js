import initialState from 'reducers/initialState';

describe('setupStore ->', () => {
    it('should create a store with the supplied initial state', () => {
        const store = setupStore();

        expect(store.getState()).toEqual(initialState);
    });
});
