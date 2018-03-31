import Wreck from 'wreck';
import Joi from 'joi';

const route = {
  path: '/quote',

  method: 'GET',

  options: {
    description: 'get a trade quote',

    tags: ['api', 'trade', 'quote'],

    validate: {
      // joi validation obj
      query: Joi.object({
        symbol: Joi.string().default('btcusd'),
        amount: Joi.number()
          .positive()
          .min(1)
          .precision(2)
          .required(),
      }),
    },

    response: {
      // joi validation obj
      status: {
        200: Joi.object({
          type: Joi.string().valid('trade').required(),
          attributes: Joi.object({
            quote: Joi
              .number()
              .positive()
              .precision(5)
              .required(),
          }).required(),
        }),
      },

      // joi options
      options: {
        allowUnknown: false,
      },
    },
  },

  handler: async function findCurrencyPair(req) {
    const { symbol, amount } = req.query;
    const response = await Wreck.get(`https://api.bitfinex.com/v1/pubticker/${symbol}`, {
      timeout: 5000,
      json: 'force',
    });
    const { last_price: price } = response.payload;
    const quote = Number((amount / price).toFixed(8));

    return {
      type: 'trade',
      attributes: {
        quote,
      },
    };
  },
};

export default route;
