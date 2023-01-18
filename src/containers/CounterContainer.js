import { connect } from 'react-redux';
import { useCallback } from 'react';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
export default CounterContainer;
