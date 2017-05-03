
module.exports = {
  schema: false,

  attributes: {
    name: 'string',
    directions: 'string',
    notes: 'string',
    deleted: {
      type: 'boolean',
      defaultsTo: false,
    },
  },
}
