import User from "./models/User";

export const resolvers = {
  Query: {
    getUsers: async () => await User.find(),
    // getUsers: () =>User.find(),
    getUser: async (_, {_id}) => {
      return await User.findById(_id)
    }
  },
  Mutation: {
    createUser: async (_, {nickname, fullname, phone, city}) => {
      const user = new User({nickname, fullname, phone, city});
      return await user.save();
    },
    deleteUser: async (_, {_id}) => {
      return await User.findByIdAndDelete(_id);
    }
  }
}