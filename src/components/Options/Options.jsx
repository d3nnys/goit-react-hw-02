import css from './Options.module.css';

export default function Options({ updateFeedback, onInit }) {
  return (
    <ul className={css.list}>
      <li>
        <button onClick={() => updateFeedback('Good')}>Good</button>
      </li>
      <li>
        <button onClick={() => updateFeedback('Neutral')}>Neutral</button>
      </li>
      <li>
        <button onClick={() => updateFeedback('Bad')}>Bad</button>
      </li>
      {updateFeedback > 0 && (
        <li>
          <button onClick={() => onInit('Reset')}>Reset</button>
        </li>
      )}
    </ul>
  );
}
