import {LoginRequest} from '../../api/auth/requests';
import {ACTION_TYPES} from './types';
import {action} from 'typesafe-actions';
import {User} from 'src/app/api/users';
import {ApiBaseError} from '../../api/common/api-errors';

export const loginRequest = (request: LoginRequest) =>
    action(ACTION_TYPES.LOGIN_REQUEST, request);

export const loginRequestSuccess = () =>
    action(ACTION_TYPES.LOGIN_REQUEST_SUCCESS)

export const loginRequestFail = (error?: ApiBaseError) =>
    action(ACTION_TYPES.LOGIN_REQUEST_FAIL, error)

export const setUser = (user: User | null) =>
    action(ACTION_TYPES.SET_USER, user)
