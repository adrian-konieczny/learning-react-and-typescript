export const USER_TYPE = 'USER_TYPE';
export type User = {
    id: String;
    username: string;
    email: string;
    city: string;
}
export type UserAction = {
    type: string;
    payload: User | null;
}
export const UserReducer = (state: User | null = null, action: UserAction): User | null => {
    switch(action.type){
        case USER_TYPE:
            console.log("reduktor UserReducer", action.payload);
            return action.payload;
            default:
                return state;
    }
};