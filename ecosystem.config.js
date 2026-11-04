
module.exports = {
    apps: [{
        name: 'devops-app',
        script: 'index.js',
        cwd: '/opt/nodeapp',
        instances: 1,
        exec_mode: 'fork',
        autorestart: true,
        watch: false,
        max_memory_restart: '200M',
        env: {
            NODE_ENV: 'production',
            PORT: 3000
        }
    }]
};
