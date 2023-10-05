import { props, createActionGroup } from '@ngrx/store';
import { User } from '../user.model';

export const UserApiAction = createActionGroup({
    source: 'UserApi',
    events: {
        'User Load Start': props<{ id: number}>(),
        'Selected User': props<{ user: User }>(),
    }
})