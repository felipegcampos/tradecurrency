import { connect } from 'react-redux';
import { currencySelector } from 'store/modules/trade';
import TradePanel from 'components/TradePanel';

const enhance = connect(currencySelector);

export default enhance(TradePanel);
