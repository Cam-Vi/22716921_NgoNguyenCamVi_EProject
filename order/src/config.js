require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://mongo:27017/order_db',
    rabbitMQURI: 'amqp://rabbitmq:5672',
    rabbitMQQueue: 'orders',
    port: 3002
};