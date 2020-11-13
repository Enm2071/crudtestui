const Permissions = resolve => {
    require.ensure(['./container/PermissionsReport.vue'],()=>{
        resolve(require('./container/PermissionsReport.vue'))
    });
}

const CreatePermission = resolve => {
    require.ensure(['./container/Form.vue'],()=>{
        resolve(require('./container/Form.vue'))
    });
}

export const routes = [
    {path:'',component:Permissions},
    {path:'/create-permission',component:CreatePermission}
];