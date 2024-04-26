export default function TabButton({ children, onSelect, isSelected }) {
  console.log('TABBUTTON COMONENT EXECUTING');
  return (
    <li>
      <button
        className={isSelected ? 'active' : ''}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
