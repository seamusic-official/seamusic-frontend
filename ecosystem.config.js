module.exports = {
  apps: [
    {
      name: 'seamusic-frontend',
      script: 'node_modules/next/dist/bin/next',
      args: '-p 3001',
      exec_mode: 'cluster',
      instances: 'max'
    }
  ]
}
