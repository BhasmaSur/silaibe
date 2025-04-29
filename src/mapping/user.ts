interface User {
    userId: number
    userName: string; //email or mobile number
    fullName: string; //optional
    type: USER_TYPE; //CLIENT or TAILOR
    password: string;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    lastLogin: Date;
}