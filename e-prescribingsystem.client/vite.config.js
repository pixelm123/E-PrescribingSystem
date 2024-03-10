import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [plugin()],
    build: {
        outDir: 'dist', 
        assetsDir: 'src/styles', 



        sourcemap: true, 
        manifest: true, 
        cssCodeSplit: true, 
        rollupOptions: {
            input: {
                main: './index.html', 
                Home: './src/components/Home/Home.jsx', 
                About: './src/components/Home/About.jsx', 
                FAQ: './src/components/Home/FAQ.jsx', 
                Services: './src/components/Home/Services.jsx', 
                Register: './src/components/Home/Register.jsx', 
                Login: './src/components/Home/Login.jsx', 
                Layout: './src/components/Home/Layout.jsx', 

                AdminDashboard: './src/components/Admin/AdminDashboard.jsx', 
                DoctorDashboard: './src/components/Doctor/DoctorDashboard.jsx', 
                NurseDashboard: './src/components/Nurse/NurseDashboard.jsx', 
                PharmacistDashboard: './src/components/Pharmacist/PharmacistDashboard.jsx', 
            },
        },
    },
});
