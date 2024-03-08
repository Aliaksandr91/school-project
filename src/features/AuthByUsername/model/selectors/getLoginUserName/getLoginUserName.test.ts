import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName', () => {
    test('should return value', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                username: '123456',
            },
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('123456');
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {
        };
        expect(getLoginUserName(state as StateSchema)).toEqual('');
    });
});
