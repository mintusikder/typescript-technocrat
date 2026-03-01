// enum UserRole {
//   Admin = "admin",
//   Editor = "editor",
//   Viewer = "viewer"
// }
// type userRole = "admin" | "editor" | "viewer";

const UserRole = {
  Admin: "admin",
  Editor: "editor",
  Viewer: "viewer"
} as const;

type UserRoleType = (typeof UserRole)[keyof typeof UserRole];

const canEdit = (role: UserRoleType) => {
  return role === UserRole.Admin || role === UserRole.Editor;
};

const isEditor = canEdit(UserRole.Editor);
console.log(isEditor);