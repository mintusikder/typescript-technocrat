var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["Editor"] = "editor";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
// type userRole = "admin" | "editor" | "viewer";
var canEdit = function (role) {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else
        return false;
};
var isEditor = canEdit(UserRole.Editor);
console.log(isEditor);
