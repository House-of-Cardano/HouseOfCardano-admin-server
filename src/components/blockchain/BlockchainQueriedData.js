const BlockchainQueriedData = (props) => {
  return (
    <div>
      <p>address: {props.address}</p>
      <p>value: {props.value}</p>
      <p>UTxO: {props.utxo}</p>
      <p>index: {props.index}</p>
      <p>datumHash: {props.datumHash}</p>
    </div>
  );
};

export default BlockchainQueriedData;
