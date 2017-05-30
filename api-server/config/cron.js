
// https://github.com/ghaiklor/sails-hook-cron
module.exports.cron = {
  sendReminderEmail: {
    // run at 9am everyday
    schedule: '* 9 * * * *',
    onTick: function () {
      console.log('++ Cron job running: sendReminderEmail')

	    const threeDays = (3 * 24 * 60 * 60 * 1000)
	    const startDate = new Date(new Date(new Date().getTime() + threeDays).setHours(0,0,0,0))
	    const endDate = new Date(new Date(startDate).setHours(23,59,59,999))

	    Trip
		    .find({ where: { startTime: { '>=': startDate, '<=': endDate }, deleted: false } })
		    .then(trips => {
		    	console.log(`++ Trips found: `,trips.length)

			    return Promise.all(trips.map(trip => {
					    return EmailService.sendEmail({
						    recipients: [
							    {
								    address: trip.email,
							    },
							    {
								    address: {
									    'email': 'reservations@howesfishing.com',
									    'header_to': trip.email,
								    },
							    },
						    ],
						    templateId: 'howes-fishing',
						    templateData: {
							    firstName: trip.firstName,
							    confirm: 'remind',
							    directions: trip.directions,
							    from: trip.userName,
							    subject: `Trip fishing reminder ${DateService.formatEmailDate(trip.startTime)}`,
							    timeCost: trip.clientEmailTemplate,
						    },
						    campaignId: 'Client reminder',
					    })
			    }))
		    })
		    .catch(err => {
		    	console.error(`++ Error in cron sendReminderEmail`,JSON.stringify(err))
		    })
    },
		start: true,
  },
}
