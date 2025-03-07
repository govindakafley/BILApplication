export interface PermissionAttributes {
    permission: string;
}

export interface RoleAttributes {
    role: string;
}

export interface RolePermissionAttributes {
    role: RoleAttributes;  // One role, not an array
    permissions: PermissionAttributes;  // List of permissions for the role
}

export interface RolePermissionCreationAttributes {
    role: RoleAttributes;  // One role for creation or update
    permission: PermissionAttributes;  // Permissions to be assigned to the role
}
export interface RolePermissionCreationResponse {
    status: number;
    message: string;
    roles?: RoleAttributes[];  // Changed from "role" to "roles" for clarity
    permissions?: PermissionAttributes[] // Permissions to be assigned to the role
}
