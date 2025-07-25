import axios from "axios";
const pinata_api_key = process.env.NEXT_PUBLIC_PINATA_API_KEY
const pinata_secret_api_key = process.env.NEXT_PUBLIC_PINATA_SECRET_KEY
export const uploadToIpfs = async (file: string | Blob) => {
    if (file) {
      try {
        const fileData = new FormData();
        fileData.append("file", file);
        const res = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          fileData,
          {
            headers: {
              pinata_api_key,
              pinata_secret_api_key,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const tokenURI = `https://ipfs.io/ipfs/${res.data.IpfsHash}`;
        console.log(tokenURI)
        return tokenURI;
      } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Error uploading file to IPFS");
      }
    }
  };

  export const uploadToIpfsJson = async (jsonData: any) => {
    if(jsonData){
      try{
        const res = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS',jsonData,{
          headers:{
            pinata_api_key,
            pinata_secret_api_key,
            'Content-Type': 'application/json',
          }
        })
        const tokenURI = `https://ipfs.io/ipfs/${res.data.IpfsHash}`;
        console.log(tokenURI)
        return tokenURI;
      }
      catch(e){
        console.log("Error uploading JSON:", e)
        throw new Error("Error uploading JSON to IPFS")
      }
    }
  }

  export const getJsonFromIpfs = async (ipfsHash: string) => {
    if(ipfsHash){
      try{
        const res = await axios.get(ipfsHash);
        const jsonData = res.data;
        console.log(jsonData)
        return jsonData;
      }
      catch(e){
        console.log("Error fetching JSON:", e)
        throw new Error("Error fetching JSON from IPFS")
      }
    }
  }