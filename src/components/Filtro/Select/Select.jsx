export function Select(props) {
  return (
    <select>
      {props.values.map((value) => {
        return <option value={value.value}> {value.name} </option>;
      })}
    </select>
  );
}
