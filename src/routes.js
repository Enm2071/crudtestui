import Permissions from './container/PermissionsReport.vue';
import CreatePermission from './container/Form.vue';

export const routes = [
    {path:'',component:Permissions},
    {path:'/create-permission',component:CreatePermission}
];