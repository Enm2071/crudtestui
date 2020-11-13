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

const EditPermission = resolve => {
    require.ensure(['./container/EditForm.vue'],()=>{
        resolve(require('./container/EditForm.vue'))
    });
}

export const routes = [
    {path:'',component:Permissions},
    {path:'/create-permission',component:CreatePermission},
    {path:'/edit-permission/:id',component:EditPermission}
];