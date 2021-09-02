export function Select({ name, values }) {
  return (
    <select>
      <option value="">{name}</option>

      {values.map((value) => {
        return <option value={value.value}>{value.name}</option>;
      })}
    </select>
  );
}
