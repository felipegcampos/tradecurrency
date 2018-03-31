import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { quoteSelector } from 'store/modules/trade';
import CurrencyOutput from 'components/CurrencyOutput';

const selector = createSelector(quoteSelector, quote => ({ quote }));

export default connect(selector)(CurrencyOutput);
