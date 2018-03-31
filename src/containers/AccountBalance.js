import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { balanceSelector } from 'store/modules/account';
import AccountBalance from 'components/AccountBalance';

const mapStateToProps = createSelector(
  balanceSelector,
  balance => ({ balance }),
);

export default connect(mapStateToProps)(AccountBalance);
