import cn from 'classnames';
import './NewVideoButton.css';
export function NewVideoButton({ visible, onClick }) {
  return (
    <div
      data-testid="new-video-button"
      className={cn('new-video-button', visible ? 'visible' : 'not-visible')}
    >
      <button onClick={onClick}>New Video 🔝</button>
    </div>
  );
}
