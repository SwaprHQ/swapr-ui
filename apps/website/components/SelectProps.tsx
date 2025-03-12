export const SelectProp = ({
  name,
  title,
  value,
  set,
  options,
}: {
  name: string;
  title: string;
  value: string;
  set: React.Dispatch<React.SetStateAction<any>>;
  options: { value: string; label: string }[];
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mr-2 text-xs text-text-low-em">
        Select {title}:
      </label>
      <select id={name} value={value} onChange={e => set(e.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
