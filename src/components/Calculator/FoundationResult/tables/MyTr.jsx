const MyTr = ({ name, value, unit }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td>{unit}</td>
    </tr>
  );
};

export default MyTr;
