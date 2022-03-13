import BlockchainQueriedData from "./BlockchainQueriedData";

const BlockchainAPI = (props) => {
  return (
    <div>
      {props.apiData.map((apiData) => (
        <BlockchainQueriedData
          address={apiData.address}
          value={apiData.value}
          utxo={apiData.hash}
          datumHash={apiData.data_hash}
        />
      ))}
    </div>
  );
};

export default BlockchainAPI;
