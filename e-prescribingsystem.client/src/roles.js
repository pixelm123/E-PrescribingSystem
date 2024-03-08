// roles.js

export const ROLES = {
    ADMIN: 'admin',
    DOCTOR: 'doctor',
    NURSE: 'nurse',
    PHARMACIST: 'pharmacist',
};

export const PERMISSIONS = {
    ADMIN: {
        
        MANAGE_USERS: 'manage_users',
        MANAGE_PRESCRIPTIONS: 'manage_prescriptions',
        VIEW_REPORTS: 'view_reports',
    },
    DOCTOR: {
        
        VIEW_PATIENTS: 'view_patients',
        CREATE_PRESCRIPTIONS: 'create_prescriptions',
    },
    NURSE: {
        
        VIEW_PATIENTS: 'view_patients',
        RECORD_VITALS: 'record_vitals',
    },
    PHARMACIST: {
        
        FILL_PRESCRIPTIONS: 'fill_prescriptions',
        VIEW_INVENTORY: 'view_inventory',
    },
};
