import {PermissionModel} from 'src/app/api/auth';
import {employeeParser} from 'src/app/api/employees';
import {User} from 'src/app/api/users/models';
import {UpsertUserRequest} from 'src/app/api/users/requests';


export function userParser(data: any): User {
    return {
        ...data,
        permissionModel: PermissionModel.user,
        employee: data.employee ? employeeParser(data.employee) : null,
        company: data.owner ? {...data.owner} : null,
        verified: !!data.verified
    }
}

export function upsertUserRequestParser(user: User | null): UpsertUserRequest {
    return user ? {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        employee: user.employeeId || '',
        groups: user.groups
    } : {
        firstName: '',
        lastName: '',
        email: '',
        employee: '',
        groups: []
    }
}
