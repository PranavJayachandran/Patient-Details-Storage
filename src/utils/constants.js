export const contractAddress = "0x02FB5498bEe5481Ec75359b7127ea68b298292F4";
export const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_firstName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_lastName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_bloodGroup",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_sugarlevel",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bloodpressure",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_RBCcount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_WBCcount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_Haemoglobin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_Height",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_Weight",
        type: "uint256",
      },
    ],
    name: "adddetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPatient",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "firstName",
            type: "string",
          },
          {
            internalType: "string",
            name: "lastName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "bloodGroup",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "sugarlevel",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bloodpressure",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "RBCcount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "WBCcount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "Haemoglobin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "Height",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "Weight",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "personOwner",
            type: "address",
          },
        ],
        internalType: "struct HealthCare.detailperperson",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPatientCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
