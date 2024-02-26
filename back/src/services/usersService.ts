import IUser from "../interfaces/IUser";
import UserDto from "../dto/userDto";

const dummyUsers: IUser[] = [];

let id: number = 1;

export const createUserService = async (dummyUser: UserDto): Promise<IUser> => {
  const newDummyUser: IUser = {
    id,
    name: dummyUser.name,
    email: dummyUser.email,
    active: dummyUser.active,
  };
  dummyUsers.push(newDummyUser);
  id++;
  return newDummyUser;
};
export const getUsersService = async () => {};
export const deleteUsersService = async () => {};
