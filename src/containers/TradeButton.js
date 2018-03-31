import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  loadingSelector,
  errorSelector,
  quoteSelector,
  execute,
} from 'store/modules/trade';
import TradeButton from 'components/TradeButton';

const mapDispatchToProps = dispatch => ({
  onSubmit() {
    dispatch(execute);
  },
});

const mapStateToProps = createStructuredSelector({
  loading: loadingSelector,
  error: errorSelector,
  quote: quoteSelector,
});
const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(TradeButton);
