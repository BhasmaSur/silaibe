export const USER_AUTHENTICATE_SUCCESS = {
    status: 200,
    message: "User authenticated successfully",
    data: {
        user: {
            id: "12345",
            full_name: "John Doe",
            type: USER_TYPE.CUSTOMER
        }
    }
};