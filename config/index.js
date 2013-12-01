var config = {
  local: {
    mode: 'local',
    port: process.env.PORT,
    mongo: {
      host: process.env.IP,
      database: 'classtime_test'
    }
  },
  staging: {
    mode: 'staging',
    port: 4000,
    mongo: {
      host: 'localhost',
      database: 'test'
    }
  },
  production: {
    mode: 'production',
    port: 5000,
    mongo: {
      host: 'localhost',
      database: 'test'
    }
  }
}
module.exports = function(mode) {
      return config[mode || process.argv[2] || 'local'] || config.local;
}
