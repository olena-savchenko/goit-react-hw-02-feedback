import PropTypes from 'prop-types';
import {
  StyledStatList,
  StyledTypeFeedback,
  StyledValue,
} from './Statistics.styled';
import { TypeStats } from './constants';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StyledStatList>
      <li>
        <StyledTypeFeedback type={TypeStats.good}>
          Good : <StyledValue>{good}</StyledValue>
        </StyledTypeFeedback>
      </li>
      <li>
        <StyledTypeFeedback type={TypeStats.neutral}>
          Neutral : <StyledValue>{neutral}</StyledValue>
        </StyledTypeFeedback>
      </li>
      <li>
        <StyledTypeFeedback type={TypeStats.bad}>
          Bad : <StyledValue>{bad}</StyledValue>
        </StyledTypeFeedback>
      </li>
      <li>
        <StyledTypeFeedback type={TypeStats.total}>
          Total : <StyledValue>{total}</StyledValue>
        </StyledTypeFeedback>
      </li>
      <li>
        <StyledTypeFeedback type={TypeStats.percentage}>
          Positive feedback :<StyledValue>{positivePercentage}%</StyledValue>
        </StyledTypeFeedback>
      </li>
    </StyledStatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
