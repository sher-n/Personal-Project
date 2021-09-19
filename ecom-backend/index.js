const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/User');
const cartRoutes = require('./routes/Cart');
const storeRoutes = require('./routes/Store')
const profileRoutes = require('./routes/Profile');
const checkoutRoutes = require('./routes/Checkout');
const pendingListRoutes = require('./routes/PendingList');
const db = require('./models');

require('./config/passport/passport');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/', userRoutes);
app.use('/users', userRoutes);
app.use('/profiles', profileRoutes);
app.use('/cart', cartRoutes);
app.use('/store', storeRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/pendinglist', pendingListRoutes);


db.sequelize.sync({ force: false }).then(() => {
    app.listen(8000, () => console.log('server is running at port 8000'));
});

