// https://github.com/ghaiklor/sails-hook-cron
module.exports.cron = {
  sendReminderEmail: {
    // run at 9am everyday
    schedule: '* 9 * * * *',
    onTick: function () {
      // console.log('Cron job ran...')
    }
  }
}