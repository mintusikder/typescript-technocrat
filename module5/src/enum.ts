enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer"
}

// type userRole = "admin" | "editor" | "viewer";

const canEdit = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  }
  else return false;
};

const isEditor = canEdit(UserRole.Editor);
console.log(isEditor);
