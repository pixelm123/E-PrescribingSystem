import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [plugin()],
    build: {
        outDir: 'dist', // Specify the output directory
        assetsDir: 'src/styles', // Correct usage, specifying a single directory path



        sourcemap: true, // Generate source maps
        manifest: true, // Generate manifest file
        cssCodeSplit: true, // Split CSS into separate files
        rollupOptions: {
            input: {
                main: './index.html', // Path to your HTML entry file
                Home: './src/components/Home/Home.jsx', // Path to your Home component
                About: './src/components/Home/About.jsx', // Path to your About component
                FAQ: './src/components/Home/FAQ.jsx', // Path to your FAQ component
                Services: './src/components/Home/Services.jsx', // Path to your Services component
                Register: './src/components/Home/Register.jsx', // Path to your Register component
                Login: './src/components/Home/Login.jsx', // Path to your Login component
                AdminDashboard: './src/components/Admin/AdminDashboard.jsx', // Path to your AdminDashboard component
                DoctorDashboard: './src/components/Doctor/DoctorDashboard.jsx', // Path to your DoctorDashboard component
                NurseDashboard: './src/components/Nurse/NurseDashboard.jsx', // Path to your NurseDashboard component
                PharmacistDashboard: './src/components/Pharmacist/PharmacistDashboard.jsx', // Path to your PharmacistDashboard component
            },
        },
    },
});
