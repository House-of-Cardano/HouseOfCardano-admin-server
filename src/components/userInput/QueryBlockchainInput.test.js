import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import QueryScriptAddr from "../../pages/QueryScriptAddr";

describe("QueryBlockchainInput component", () => {
  it("renders user input for an address to query", () => {
    // Arange
    render(
      <BrowserRouter>
        <QueryScriptAddr />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("Script address", {
      exact: true,
    });
    expect(queryElement).toBeInTheDocument();
  });

  it("renders user input for a datum hash to query", () => {
    // Arange
    render(
      <BrowserRouter>
        <QueryScriptAddr />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("Datum hash", {
      exact: true,
    });
    expect(queryElement).toBeInTheDocument();
  });
});

// describe("Mock fetch GET API call", () => {
//   test("renders data if request succeeds", async () => {
//     // Arrange
//     render(<QueryScriptAddr />);

//     // Assert
//     const listItemElements = await screen.findAllByRole("dialog");
//     expect(listItemElements).not.toHaveLength(0);
//   });

//   test("d", async () => {
//     // Arrange
//     window.fetch = jest.fn();
//     window.fetch.mockResolvedValueOnce({
//       json: async () => [
//         {
//           tx_id: "3656094",
//           address:
//             "addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc",
//           value: "4000000",
//           hash: "\\xd930031820199aedea2a4146ecfe621184598428223d5920955e7ddcddd54231",
//           data_hash:
//             "\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c",
//           block_id: "3370264",
//         },
//       ],
//     });
//     render(<QueryScriptAddr />);

//     // Assert
//     const listItemElements = await screen.findAllByRole("dialog");
//     expect(listItemElements).not.toHaveLength(0);
//   });
// });

// const dummyApiData = [
//   {
//     tx_id: "3656094",
//     address:
//       "addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc",
//     value: "4000000",
//     hash: "\\xd930031820199aedea2a4146ecfe621184598428223d5920955e7ddcddd54231",
//     data_hash:
//       "\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c",
//     block_id: "3370264",
//   },
//   {
//     tx_id: "3657177",
//     address:
//       "addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc",
//     value: "4000000",
//     hash: "\\x7d94ec6c8b78d87028ca43164397a2479e1186b511eca7ee4a4dfd363e460d1b",
//     data_hash:
//       "\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c",
//     block_id: "3370431",
//   },
//   {
//     tx_id: "3657253",
//     address:
//       "addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc",
//     value: "4000000",
//     hash: "\\x41712efb515117ebea4b03d8f53941fa920b81bf8f384b33c32c9afed95b7a23",
//     data_hash:
//       "\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c",
//     block_id: "3370433",
//   },
//   {
//     tx_id: "3657302",
//     address:
//       "addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc",
//     value: "4000000",
//     hash: "\\x7724c262e58c61198338fcf7c6c4dec73b44ea69fe69eadb35768b3c25beb8f9",
//     data_hash:
//       "\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c",
//     block_id: "3370440",
//   },
//   {
//     tx_id: "3657311",
//     address:
//       "addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc",
//     value: "4000000",
//     hash: "\\x863298ab3ff6ec92c337f991a04427af0aeaf9a10d521bbe12a6ced1d23f40e1",
//     data_hash:
//       "\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c",
//     block_id: "3370444",
//   },
//   {
//     tx_id: "3657320",
//     address:
//       "addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc",
//     value: "4000000",
//     hash: "\\x83a96a34e199dd2c105f1473429abc6577ffe16c1cc0d9a82d88ec60bac769fd",
//     data_hash:
//       "\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c",
//     block_id: "3370448",
//   },
//   {
//     tx_id: "3657336",
//     address:
//       "addr_test1wzhfye4zxffxd59gg0fhjzavy7uuhpul04kr5myavevh29svlsrpc",
//     value: "4000000",
//     hash: "\\x8dee73ecc8b89734f3c50fedf76fbfc9109441c1f1bd1b57236ff14482c4aab3",
//     data_hash:
//       "\\xfac96da1bf190d85ae7e7a45b07b95826c3eb91b839564959d8411d4e0dc089c",
//     block_id: "3370453",
//   },
// ]
