import { all, fork } from 'redux-saga/effects'
import {adminCustomerSaga} from 'src/app/store/admin/customers';
import {adminEmployeeSaga} from 'src/app/store/admin/employees';
import {adminServiceSaga} from 'src/app/store/admin/services';
import {userSaga} from 'src/app/store/users';
import {authSaga} from './auth';
import {companiesSaga} from './companies';


export function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(companiesSaga),
        fork(userSaga),
        fork(adminServiceSaga),
        fork(adminEmployeeSaga),
        fork(adminCustomerSaga),
    ])
}
